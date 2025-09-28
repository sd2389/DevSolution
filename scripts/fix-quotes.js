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

// Quote replacements
const replacements = [
  { from: /'/g, to: '&apos;' },
  { from: /"/g, to: '&quot;' }
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Apply replacements
    replacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Fixed quotes in ${filePath}`);
  } else {
    console.log(`❌ File not found: ${filePath}`);
  }
});

console.log('🎉 Quote fixing complete!');
