const fs = require('fs');
let file = fs.readFileSync('ch_tuition_storefront_desktop/chpreplab.html', 'utf8');

file = file.replace('<title>CH Tuition - Selective Math Pack</title>', '<title>CH Tuition - CHPrepLab Subscription</title>');
file = file.replace('<h1 class="font-headline-lg text-headline-lg text-primary mb-6">Selective Math Test Prep Package (20 Papers)</h1>', '<h1 class="font-headline-lg text-headline-lg text-primary mb-6">CHPrepLab Subscription (1 Year)</h1>');

file = file.replace(
    '<span class="font-body-md text-[36px] font-bold text-[#1c1b1b] tracking-tight">$39.99 <span class="font-semibold">AUD</span></span>\n<span class="font-body-md text-[24px] text-[#74777f] line-through">$69.99 AUD</span>',
    '<span class="font-body-md text-[36px] font-bold text-[#1c1b1b] tracking-tight">$99.99 <span class="font-semibold">AUD</span> / Year</span>\n<span class="font-body-md text-[24px] text-[#74777f] line-through">$149.99 AUD</span>'
);

file = file.replace(/<ul class="space-y-3 mb-10">[\s\S]*?<\/ul>/, `<ul class="space-y-3 mb-10">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary mt-0.5" data-icon="check_circle">check_circle</span>
<span class="font-body-lg text-body-lg text-on-surface">60 × Reading Practice Tests</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary mt-0.5" data-icon="check_circle">check_circle</span>
<span class="font-body-lg text-body-lg text-on-surface">60 × Mathematical Reasoning Practice Tests</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary mt-0.5" data-icon="check_circle">check_circle</span>
<span class="font-body-lg text-body-lg text-on-surface">60 × Thinking Skills Practice Tests</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary mt-0.5" data-icon="check_circle">check_circle</span>
<span class="font-body-lg text-body-lg text-on-surface">200 × Writing Stimuli</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary mt-0.5" data-icon="check_circle">check_circle</span>
<span class="font-body-lg text-body-lg text-on-surface">Format-aligned for 2027 test structure and difficulty</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary mt-0.5" data-icon="check_circle">check_circle</span>
<span class="font-body-lg text-body-lg text-on-surface">Includes full step-by-step solutions and detailed analytics</span>
</li>
</ul>`);

file = file.replace(/<!-- Free Gifts Section -->[\s\S]*?<!-- Row 5: CTA -->/, '<!-- Row 5: CTA -->');

file = file.replace(
    `onclick="window.addToCart({id: 'prep-pack', name: 'Selective Math Test Prep Package (20 Papers)', price: 39.99, originalPrice: 69.99, image: 'https://res.cloudinary.com/dsjbibh1o/image/upload/v1781769245/Simple_A4_Lined_Paper_nddn1w.png'})"`,
    `onclick="window.addToCart({id: 'ch-prep-lab-sub', name: 'CHPrepLab Subscription (1 Year)', price: 99.99, originalPrice: 149.99, image: 'https://res.cloudinary.com/dsjbibh1o/image/upload/v1787311811/Displaying_logo_on_MacBook_Pro_202608212129_vvblow.jpg'})"`
);
file = file.replace('<span class="">Add to Cart / Instant Download</span>', '<span class="">Subscribe Now</span>');

file = file.replace(
    '<img id="main-preview-img" alt="Math Selective Prep Test Pack book cover" class="w-full h-full object-contain mix-blend-multiply transition-all duration-300" src="https://res.cloudinary.com/dsjbibh1o/image/upload/v1781769245/Simple_A4_Lined_Paper_nddn1w.png">',
    '<img id="main-preview-img" alt="CHPrepLab Platform" class="w-full h-full object-cover transition-all duration-300 rounded-lg" src="https://res.cloudinary.com/dsjbibh1o/image/upload/v1787311811/Displaying_logo_on_MacBook_Pro_202608212129_vvblow.jpg">'
);

file = file.replace(/<!-- Thumbnail Strip -->[\s\S]*?<!-- RIGHT COLUMN: Product Details & Conversion -->/, '<!-- RIGHT COLUMN: Product Details & Conversion -->');

fs.writeFileSync('ch_tuition_storefront_desktop/chpreplab.html', file);
console.log('chpreplab.html updated!');
