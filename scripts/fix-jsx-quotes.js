const fs = require('fs');
const path = require('path');

// Files to fix
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
    
    // Fix quotes in JSX content only (not in import statements)
    // Look for quotes that are inside JSX tags or text content
    content = content.replace(/(<[^>]*>.*?)&quot;(.*?<\/[^>]*>)/g, '$1"$2');
    content = content.replace(/(<[^>]*>.*?)&apos;(.*?<\/[^>]*>)/g, "$1'$2");
    
    // Fix quotes in JSX text content between tags
    content = content.replace(/(>[^<]*?)&quot;([^<]*?<)/g, '$1"$2');
    content = content.replace(/(>[^<]*?)&apos;([^<]*?<)/g, "$1'$2");
    
    // Fix quotes in JSX attributes
    content = content.replace(/(\w+="[^"]*?)&quot;([^"]*?")/g, '$1"$2');
    content = content.replace(/(\w+="[^"]*?)&apos;([^"]*?")/g, "$1'$2");
    
    // Fix quotes in JSX text content (more general pattern)
    content = content.replace(/(?<=>)[^<]*?&quot;[^<]*?(?=<)/g, (match) => match.replace(/&quot;/g, '"'));
    content = content.replace(/(?<=>)[^<]*?&apos;[^<]*?(?=<)/g, (match) => match.replace(/&apos;/g, "'"));
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Fixed JSX quotes in ${filePath}`);
  } else {
    console.log(`❌ File not found: ${filePath}`);
  }
});

console.log('🎉 JSX quote fixing complete!');
