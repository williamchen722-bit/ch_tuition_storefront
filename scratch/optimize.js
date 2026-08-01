const fs = require('fs');
const path = require('path');

const dir = 'f:/Antigravity/stitch_ch_tuition_resource_hub/ch_tuition_storefront_desktop';
const files = ['index.html', 'product.html', 'privacy.html', 'terms.html'];

for (const file of files) {
    const filepath = path.join(dir, file);
    if (!fs.existsSync(filepath)) continue;
    
    let content = fs.readFileSync(filepath, 'utf8');

    // Add defer to cart.js
    content = content.replace(/<script src="cart.js\?v=7"><\/script>/g, '<script defer src="cart.js?v=7"></script>');
    
    // Add defer to aos.js
    content = content.replace(/<script src="https:\/\/unpkg.com\/aos@2.3.1\/dist\/aos.js"><\/script>/g, '<script defer src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>');
    
    // Add loading="lazy" to images that don't have it
    // We'll use a regex that matches <img ...> but skips if loading="lazy" is already there.
    // Also we should skip the hero image in index.html and product.html if possible. 
    // In index.html, hero image is line 286 (the main architectural img). Let's just do a blanket replacement 
    // and then manually remove lazy from the very first image of index and product.
    
    let imgCount = 0;
    content = content.replace(/<img\s+([^>]+)>/g, (match, p1) => {
        imgCount++;
        if (p1.includes('loading=')) return match; // Already has a loading attr
        
        // Skip first image in product.html (logo) and second (main preview)
        // Actually, it's fine if the logo is eager. It's in the header.
        // Let's make all images lazy except if they contain certain strings
        if (p1.includes('CH Tuition Logo')) return match; 
        if (p1.includes('AB6AXuC_WZ2Hvck_')) return match; // Main hero img in index
        if (p1.includes('main-preview-img')) return match; // Main hero in product
        
        // Return with loading="lazy"
        return `<img loading="lazy" ${p1}>`;
    });

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Optimized ${file}`);
}
