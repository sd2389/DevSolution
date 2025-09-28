const fs = require('fs');
const path = require('path');

// Files to fix - only content, not imports
const filesToFix = [
  'app/about/page.tsx',
  'app/bundle/page.tsx',
  'app/contact/page.tsx',
  'app/how-it-works/page.tsx',
  'app/jewelvision/page.tsx',
  'app/pricing/page.tsx',
  'app/solutions/page.tsx',
  'app/work/page.tsx',
  'components/testimonial.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // First, restore import statements
    content = content.replace(/&quot;/g, '"');
    
    // Then fix only JSX content quotes (not in import statements)
    // This regex looks for quotes that are not in import statements
    content = content.replace(/(?<!import.*?)(?<!from.*?)&quot;/g, '"');
    content = content.replace(/(?<!import.*?)(?<!from.*?)&apos;/g, "'");
    
    // More specific approach - only replace quotes in JSX content
    content = content.replace(/(<[^>]*>.*?)&quot;(.*?<\/[^>]*>)/g, '$1"$2');
    content = content.replace(/(<[^>]*>.*?)&apos;(.*?<\/[^>]*>)/g, "$1'$2");
    
    // Fix quotes in JSX text content
    content = content.replace(/(>[^<]*?)&quot;([^<]*?<)/g, '$1"$2');
    content = content.replace(/(>[^<]*?)&apos;([^<]*?<)/g, "$1'$2");
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Fixed quotes in ${filePath}`);
  } else {
    console.log(`❌ File not found: ${filePath}`);
  }
});

console.log('🎉 Quote fixing complete!');
