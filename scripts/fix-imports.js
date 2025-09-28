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
    
    // Fix all &quot; back to " and &apos; back to '
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&apos;/g, "'");
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Fixed imports in ${filePath}`);
  } else {
    console.log(`❌ File not found: ${filePath}`);
  }
});

console.log('🎉 Import fixing complete!');
