const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'ch_tuition_storefront_desktop');
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const genericHeader = `
<!-- TopNavBar -->
<header class="bg-[#e06666] text-white font-body-md text-body-md w-full sticky top-0 border-b border-outline-variant dark:border-outline flat no shadows z-50 relative">
<div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto h-20">
<div class="flex items-center">
    <a href="/">
        <img src="https://res.cloudinary.com/dsjbibh1o/image/upload/v1781780686/2639019b-8e6e-43b1-a23f-b0eaff098a45.png" alt="CH Tuition Logo" class="h-10 md:h-12 w-auto object-contain">
    </a>
</div>
<nav class="hidden md:flex items-center space-x-8">
<a class="text-white font-bold hover:text-secondary-container transition-colors" href="/">Home</a>
<a class="text-white hover:text-secondary-container transition-colors font-semibold" href="/free-resources">Free Resources</a>
<button class="cart-icon-trigger relative text-white hover:text-secondary-container transition-colors focus:outline-none">
    <span class="material-symbols-outlined text-3xl">shopping_cart</span>
    <span class="cart-badge hidden absolute -top-1 -right-2 bg-error text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
</button>
</nav>

<!-- Mobile Menu Toggle & Cart -->
<div class="md:hidden flex items-center gap-4">
    <button class="cart-icon-trigger relative text-white focus:outline-none">
        <span class="material-symbols-outlined text-2xl">shopping_cart</span>
        <span class="cart-badge hidden absolute -top-1 -right-2 bg-error text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
    </button>
    <button onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="text-white focus:outline-none flex items-center justify-center">
        <span class="material-symbols-outlined text-3xl">menu</span>
    </button>
</div>
</div>
<!-- Mobile Menu Dropdown -->
<div id="mobile-menu" class="hidden md:hidden bg-[#e06666] border-t border-white/20 w-full absolute left-0 top-full shadow-lg z-40">
    <div class="px-margin-mobile py-4 flex flex-col space-y-4">
        <a class="text-white font-bold hover:text-secondary-container transition-colors" href="/">Home</a>
        <a class="text-white hover:text-secondary-container transition-colors font-semibold" href="/free-resources">Free Resources</a>
    </div>
</div>
</header>
`;

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find header tags. Some have <!-- TopNavBar --> some just have <!-- Header --> or <header ...
    // We'll replace everything from <header to </header>
    const headerStartMatch = content.match(/<header[^>]*>/);
    if(headerStartMatch) {
        const headerStart = headerStartMatch.index;
        const headerEnd = content.indexOf('</header>', headerStart) + 9;
        
        let beforeHeader = content.substring(0, headerStart);
        // clean up any comments right before
        if (beforeHeader.endsWith('<!-- TopNavBar -->\n') || beforeHeader.endsWith('<!-- TopNavBar -->\r\n')) {
            beforeHeader = beforeHeader.replace(/<!-- TopNavBar -->\s*$/, '');
        } else if (beforeHeader.endsWith('<!-- Header -->\n') || beforeHeader.endsWith('<!-- Header -->\r\n')) {
            beforeHeader = beforeHeader.replace(/<!-- Header -->\s*$/, '');
        }

        const afterHeader = content.substring(headerEnd);
        
        let newContent = beforeHeader + genericHeader.trim() + afterHeader;
        
        // If it is index.html, we might want to put back the aos attributes on the header if they exist
        if (file === 'index.html') {
             newContent = newContent.replace('<header class="bg-[#e06666]', '<header data-aos="fade-down" data-aos-duration="600" class="bg-[#e06666]');
        }
        
        fs.writeFileSync(filePath, newContent);
        console.log("Updated header in " + file);
    } else {
        console.log("No header found in " + file);
    }
});
