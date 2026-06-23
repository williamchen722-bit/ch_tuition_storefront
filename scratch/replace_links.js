const fs = require('fs');

const replacements = {
    'href="code.html"': 'href="/"',
    'href="product.html"': 'href="/selective-math-pack"',
    'href="privacy.html"': 'href="/privacy"',
    'href="terms.html"': 'href="/terms"'
};

const files = [
    'f:/Antigravity/stitch_ch_tuition_resource_hub/ch_tuition_storefront_desktop/code.html',
    'f:/Antigravity/stitch_ch_tuition_resource_hub/ch_tuition_storefront_desktop/product.html',
    'f:/Antigravity/stitch_ch_tuition_resource_hub/ch_tuition_storefront_desktop/privacy.html',
    'f:/Antigravity/stitch_ch_tuition_resource_hub/ch_tuition_storefront_desktop/terms.html'
];

for (const filepath of files) {
    if (fs.existsSync(filepath)) {
        let content = fs.readFileSync(filepath, 'utf8');
        
        for (const [oldStr, newStr] of Object.entries(replacements)) {
            content = content.split(oldStr).join(newStr);
        }
        
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated ${filepath}`);
    }
}
