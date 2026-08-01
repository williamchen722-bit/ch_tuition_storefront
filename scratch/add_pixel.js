const fs = require('fs');
const path = require('path');

const pixelCode = `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1000874036052741');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1000874036052741&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->`;

const dir = 'F:\\\\Antigravity\\\\stitch_ch_tuition_resource_hub\\\\ch_tuition_storefront_desktop';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if pixel code is already there
    if (!content.includes("fbq('init', '1000874036052741');")) {
        // Find </head> and replace with pixel code + </head>
        if (content.includes('</head>')) {
            content = content.replace('</head>', pixelCode + '\n</head>');
            fs.writeFileSync(filePath, content);
            console.log('Added to', file);
        } else {
            console.log('No </head> tag found in', file);
        }
    } else {
        console.log('Already added to', file);
    }
});
