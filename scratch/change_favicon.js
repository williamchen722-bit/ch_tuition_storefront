const fs = require('fs');
const path = require('path');

const faviconUrl = 'https://chtuition.com.au/favicon.ico';
const faviconTag = `<link rel="icon" href="${faviconUrl}" type="image/x-icon">`;

const dir = 'F:\\\\Antigravity\\\\stitch_ch_tuition_resource_hub\\\\ch_tuition_storefront_desktop';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has a head section
    if (content.includes('</head>')) {
        // Regex to check if there is an existing favicon link
        const faviconRegex = /<link\s+[^>]*rel=["'](?:shortcut\s+)?icon["'][^>]*>/gi;
        
        if (faviconRegex.test(content)) {
            // Replace the existing icon tag(s)
            content = content.replace(faviconRegex, faviconTag);
            console.log('Updated favicon tag in', file);
        } else {
            // Insert it before </head>
            content = content.replace('</head>', `${faviconTag}\n</head>`);
            console.log('Inserted new favicon tag in', file);
        }
        fs.writeFileSync(filePath, content);
    } else {
        console.log('Skipped (no head):', file);
    }
});
