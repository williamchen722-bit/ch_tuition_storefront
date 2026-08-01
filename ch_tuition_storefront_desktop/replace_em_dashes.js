const fs = require('fs');
const files = [
    'product.html',
    'index.html',
    'gen_reviews.js',
    'gen_marquee2.js',
    'fix_marquee.js',
    '../scratch/add_extra_reviews.js'
];

files.forEach(file => {
    try {
        if (!fs.existsSync(file)) return;
        let content = fs.readFileSync(file, 'utf8');
        
        // Replace em dash
        let newContent = content.replace(/—/g, ' - ');
        
        if (newContent !== content) {
            fs.writeFileSync(file, newContent, 'utf8');
            console.log(`Replaced em dashes in ${file}`);
        } else {
            console.log(`No em dashes found in ${file}`);
        }
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});
