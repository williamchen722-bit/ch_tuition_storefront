const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'ch_tuition_storefront_desktop');
const tag = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18407656679"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18407656679');
</script>`;

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // check if tag is already there
        if (!content.includes('AW-18407656679')) {
            content = content.replace('</head>', tag + '\n</head>');
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${file}`);
        }
    }
});
