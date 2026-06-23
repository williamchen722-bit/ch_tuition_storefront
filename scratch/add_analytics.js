const fs = require('fs');
const path = require('path');

const dir = 'f:/Antigravity/stitch_ch_tuition_resource_hub/ch_tuition_storefront_desktop';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const analyticsSnippet = `
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
</head>`;

for (const file of files) {
    const filepath = path.join(dir, file);
    let content = fs.readFileSync(filepath, 'utf8');
    
    if (!content.includes('/_vercel/insights/script.js')) {
        content = content.replace('</head>', analyticsSnippet);
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Added analytics to ${file}`);
    }
}
