const fs = require('fs');

function updateFile(filename) {
    let content = fs.readFileSync(filename, 'utf-8');
    
    // Add tailwind keyframes if not exists
    if (!content.includes('marquee: {')) {
        const extendPattern = /extend:\s*\{/;
        const marqueeConfig = `
                    keyframes: {
                        marquee: {
                            '0%': { transform: 'translateX(0%)' },
                            '100%': { transform: 'translateX(-50%)' }
                        }
                    },
                    animation: {
                        marquee: 'marquee 60s linear infinite'
                    },`;
        content = content.replace(extendPattern, 'extend: {' + marqueeConfig);
    }
    
    // Find the current scroll container
    const startTag = '<div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar">';
    const startIdx = content.indexOf(startTag);
    if (startIdx === -1) {
        console.log('Could not find scroll container in ' + filename);
        return;
    }
    
    // Extract the inner content (the 14 reviews)
    let endIdx = content.indexOf('</div>\n</section>', startIdx);
    if (endIdx === -1) {
        endIdx = content.indexOf('</div>\r\n</section>', startIdx);
    }
    if (endIdx === -1) {
        endIdx = content.indexOf('</div>\n    </section>', startIdx);
    }
    if (endIdx === -1) {
        // Find matching closing div
        let depth = 0;
        for (let i = startIdx; i < content.length; i++) {
            if (content.substr(i, 4) === '<div') depth++;
            else if (content.substr(i, 5) === '</div') {
                depth--;
                if (depth === 0) {
                    endIdx = i;
                    break;
                }
            }
        }
    }
    
    const innerHtml = content.substring(startIdx + startTag.length, endIdx);
    
    // Now wrap it in the infinite marquee container
    const newContainer = `
<div class="relative flex overflow-hidden group w-full mask-edges">
    <div class="flex gap-6 animate-marquee w-max group-hover:[animation-play-state:paused] pb-6 pt-2">
${innerHtml}
${innerHtml}
    </div>
</div>`;

    // Also add a mask-edges CSS style to fade out the edges if it doesn't exist
    if (!content.includes('.mask-edges')) {
        const styleEnd = content.indexOf('</style>');
        if (styleEnd !== -1) {
            content = content.substring(0, styleEnd) + 
            `    .mask-edges {\n        mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);\n        -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);\n    }\n` + 
            content.substring(styleEnd);
        }
    }

    content = content.substring(0, startIdx) + newContainer + content.substring(endIdx + 6); // +6 for </div>
    
    // Also remove the data-aos properties so they don't pop-in weirdly while scrolling
    content = content.replace(/data-aos="fade-up" data-aos-delay="\d+"/g, '');

    fs.writeFileSync(filename, content, 'utf-8');
    console.log('Updated ' + filename);
}

updateFile('product.html');
updateFile('code.html');
