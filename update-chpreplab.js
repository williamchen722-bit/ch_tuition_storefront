const fs = require('fs');
let html = fs.readFileSync('ch_tuition_storefront_desktop/chpreplab.html', 'utf8');

// 1. Replace the image gallery (left column) to include platform screenshots as product thumbnails
const oldLeftCol = `<div class="md:col-span-6 flex flex-col gap-4">
<!-- Main Preview -->
<div class="relative w-full aspect-[4/3] bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden" id="main-preview-container">
<img id="main-preview-img" alt="CHPrepLab Platform" class="w-full h-full object-cover transition-all duration-300 rounded-lg" src="https://res.cloudinary.com/dsjbibh1o/image/upload/v1787311811/Displaying_logo_on_MacBook_Pro_202608212129_vvblow.jpg">
</div>
</div>`;

const newLeftCol = `<div class="md:col-span-6 flex flex-col gap-4">
<!-- Main Preview -->
<div class="relative w-full aspect-[4/3] bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden group cursor-zoom-in" id="main-preview-container">
<img id="main-preview-img" alt="CHPrepLab Platform" class="w-full h-full object-cover transition-all duration-300" src="https://res.cloudinary.com/dsjbibh1o/image/upload/v1787311811/Displaying_logo_on_MacBook_Pro_202608212129_vvblow.jpg">
<!-- Navigation Arrows -->
<div class="absolute inset-0 flex items-center justify-between px-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<button id="prev-btn" aria-label="Previous image" class="pointer-events-auto w-10 h-10 bg-surface/90 text-primary rounded-full flex items-center justify-center border border-outline-variant shadow-sm hover:border-secondary hover:text-secondary transition-colors">
<span class="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button id="next-btn" aria-label="Next image" class="pointer-events-auto w-10 h-10 bg-surface/90 text-primary rounded-full flex items-center justify-center border border-outline-variant shadow-sm hover:border-secondary hover:text-secondary transition-colors">
<span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<!-- Thumbnail Strip -->
<div class="grid grid-cols-5 gap-2" id="thumbnail-strip">
<div class="thumbnail-item aspect-square bg-surface-container-low border-2 border-secondary rounded overflow-hidden cursor-pointer" data-large="https://res.cloudinary.com/dsjbibh1o/image/upload/v1787311811/Displaying_logo_on_MacBook_Pro_202608212129_vvblow.jpg">
<img loading="lazy" alt="CHPrepLab Overview" class="w-full h-full object-cover" src="https://res.cloudinary.com/dsjbibh1o/image/upload/v1787311811/Displaying_logo_on_MacBook_Pro_202608212129_vvblow.jpg">
</div>
<div class="thumbnail-item aspect-square bg-surface-container-low border border-outline-variant rounded overflow-hidden cursor-pointer hover:border-outline transition-colors opacity-70 hover:opacity-100" data-large="https://res.cloudinary.com/dsjbibh1o/image/upload/v1783951352/c502bee9-86a8-4bfe-a954-4c41afdbb280.png">
<img loading="lazy" alt="Platform Screenshot 1" class="w-full h-full object-cover" src="https://res.cloudinary.com/dsjbibh1o/image/upload/v1783951352/c502bee9-86a8-4bfe-a954-4c41afdbb280.png">
</div>
<div class="thumbnail-item aspect-square bg-surface-container-low border border-outline-variant rounded overflow-hidden cursor-pointer hover:border-outline transition-colors opacity-70 hover:opacity-100" data-large="https://res.cloudinary.com/dsjbibh1o/image/upload/v1783951618/419d413a-521b-4ee0-a5d2-abd51a02c875.png">
<img loading="lazy" alt="Platform Screenshot 2" class="w-full h-full object-cover" src="https://res.cloudinary.com/dsjbibh1o/image/upload/v1783951618/419d413a-521b-4ee0-a5d2-abd51a02c875.png">
</div>
<div class="thumbnail-item aspect-square bg-surface-container-low border border-outline-variant rounded overflow-hidden cursor-pointer hover:border-outline transition-colors opacity-70 hover:opacity-100" data-large="https://res.cloudinary.com/dsjbibh1o/image/upload/v1783951775/5e019cd3-43fa-460c-941d-aa15b6127bbe.png">
<img loading="lazy" alt="Platform Screenshot 3" class="w-full h-full object-cover" src="https://res.cloudinary.com/dsjbibh1o/image/upload/v1783951775/5e019cd3-43fa-460c-941d-aa15b6127bbe.png">
</div>
<div class="thumbnail-item aspect-square bg-surface-container-low border border-outline-variant rounded overflow-hidden cursor-pointer hover:border-outline transition-colors opacity-70 hover:opacity-100" data-large="https://res.cloudinary.com/dsjbibh1o/image/upload/v1783952647/61725191-0a75-4c7e-a453-a34f4192269e.png">
<img loading="lazy" alt="Platform Screenshot 4" class="w-full h-full object-cover" src="https://res.cloudinary.com/dsjbibh1o/image/upload/v1783952647/61725191-0a75-4c7e-a453-a34f4192269e.png">
</div>
</div>
</div>`;

html = html.replace(oldLeftCol, newLeftCol);

// 2. Remove ratings section
const oldRating = `<!-- Row 1: Rating -->
<div class="flex items-center gap-2 mb-4">
<div class="flex text-secondary">
<span class="material-symbols-outlined text-sm" data-icon="star" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-icon="star" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-icon="star" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-icon="star" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-icon="star" data-weight="fill">star</span>
</div>
<span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wide">4.9/5 Rating | From 500+ Verified Parents</span>
</div>`;
html = html.replace(oldRating, '');

// 3. Remove strikethrough price ($149.99)
html = html.replace(`<span class="font-body-md text-[36px] font-bold text-[#1c1b1b] tracking-tight">$99.99 <span class="font-semibold">AUD</span> / Year</span>
<span class="font-body-md text-[24px] text-[#74777f] line-through">$149.99 AUD</span>`,
`<span class="font-body-md text-[36px] font-bold text-[#1c1b1b] tracking-tight">$99.99 <span class="font-semibold">AUD</span> / Year</span>`);

// 4. Add new feature bullet point and replace CTA
const oldBullets = `<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary mt-0.5" data-icon="check_circle">check_circle</span>
<span class="font-body-lg text-body-lg text-on-surface">Includes full step-by-step solutions and detailed analytics</span>
</li>
</ul>`;

const newBullets = `<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary mt-0.5" data-icon="check_circle">check_circle</span>
<span class="font-body-lg text-body-lg text-on-surface">Includes full step-by-step solutions and detailed analytics</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary mt-0.5" data-icon="check_circle">check_circle</span>
<span class="font-body-lg text-body-lg text-on-surface">Subject-specific expert tutor consultations</span>
</li>
</ul>`;
html = html.replace(oldBullets, newBullets);

// 5. Replace Subscribe button with Join Wait List + half off promo
const oldCTA = `<button id="add-to-cart-btn" onclick="window.addToCart({id: 'ch-prep-lab-sub', name: 'CHPrepLab Subscription (1 Year)', price: 99.99, originalPrice: 149.99, image: 'https://res.cloudinary.com/dsjbibh1o/image/upload/v1787311811/Displaying_logo_on_MacBook_Pro_202608212129_vvblow.jpg'})" class="w-full bg-primary text-on-primary font-body-lg text-body-lg py-4 px-8 rounded flex items-center justify-center gap-3 hover:bg-primary-container transition-colors duration-300 mb-3 group focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
<span class="">Subscribe Now</span>
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
<div class="flex items-center justify-center gap-1.5 mb-6 text-[#635bff]">
    <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">lock</span>
    <span class="font-label-caps text-[11px] uppercase font-bold tracking-wider flex items-center">Guaranteed Safe &amp; Secure Checkout by <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" class="h-3 ml-1.5 object-contain"></span>
</div>`;

const newCTA = `<!-- Wait List Promo Banner -->
<div class="bg-secondary-container border border-secondary/30 rounded-lg p-4 mb-4 text-center">
    <div class="flex items-center justify-center gap-2 mb-1">
        <span class="material-symbols-outlined text-secondary text-lg" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
        <span class="font-label-caps text-label-caps text-on-secondary-container uppercase tracking-wider font-bold">Early Bird Offer</span>
    </div>
    <p class="font-body-md text-sm text-on-secondary-container">Join the wait list now and get <span class="font-bold text-secondary">50% OFF</span> when we launch — just <span class="font-bold">$49.99/year</span>!</p>
</div>
<button id="join-waitlist-btn" onclick="openDiscountModal()" class="w-full bg-primary text-on-primary font-body-lg text-body-lg py-4 px-8 rounded flex items-center justify-center gap-3 hover:bg-primary-container transition-colors duration-300 mb-3 group focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
<span class="">Join the Wait List</span>
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
<div class="flex items-center justify-center gap-1.5 mb-6 text-on-surface-variant">
    <span class="material-symbols-outlined text-[16px]">group</span>
    <span class="font-label-caps text-[11px] uppercase font-bold tracking-wider">Be first in line — Limited spots available</span>
</div>`;
html = html.replace(oldCTA, newCTA);

// 6. Update trust icons for a subscription product (remove PDF/Print, add relevant ones)
const oldTrust = `<div class="flex flex-wrap items-center gap-6 pt-4 border-t border-outline-variant/50">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="picture_as_pdf">picture_as_pdf</span>
<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Instant PDF Download</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="verified_user">verified_user</span>
<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">100% Risk-Free Guarantee</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="print">print</span>
<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Ready to Print</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="devices">devices</span>
<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Free Online Access <span class="line-through text-outline ml-1">$99.99</span></span>
</div></div>`;

const newTrust = `<div class="flex flex-wrap items-center gap-6 pt-4 border-t border-outline-variant/50">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="devices">devices</span>
<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Access on Any Device</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="verified_user">verified_user</span>
<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">100% Risk-Free Guarantee</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="support_agent">support_agent</span>
<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Expert Tutor Support</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="update">update</span>
<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Regular Content Updates</span>
</div></div>`;
html = html.replace(oldTrust, newTrust);

// 7. Remove the "Access to CH Prep Lab" drilldown section (Zone 3)
const zone3Start = `<!-- [ZONE 3: DOUBLE-COLUMN DRILLDOWN (70/30 SPLIT)] -->`;
const zone3End = `<div class="mt-8">`;
const zone3StartIdx = html.indexOf(zone3Start);
const zone3EndIdx = html.indexOf(zone3End, zone3StartIdx);
if (zone3StartIdx !== -1 && zone3EndIdx !== -1) {
    html = html.substring(0, zone3StartIdx) + html.substring(zone3EndIdx);
    console.log('Removed Access to CH Prep Lab drilldown section');
}

fs.writeFileSync('ch_tuition_storefront_desktop/chpreplab.html', html);
console.log('chpreplab.html fully updated!');
