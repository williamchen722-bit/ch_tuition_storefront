const fs = require('fs');
let content = fs.readFileSync('ch_tuition_storefront_desktop/index.html', 'utf8');

const cardStart = '<div data-aos="zoom-in-up" data-aos-delay="200" class="w-full md:w-96 bg-surface-container-lowest border-t border-primary group flex flex-col h-full shadow-architectural transition-transform duration-300 hover:-translate-y-1">';
let preCardIndex = content.indexOf('<div class="flex justify-center">');
if (preCardIndex !== -1) {
    let newContent = content.slice(0, preCardIndex);
    newContent += '<div class="flex flex-col md:flex-row justify-center gap-8">\n';
    
    // Copy the original card logic
    let cardStartIndex = content.indexOf(cardStart, preCardIndex);
    let cardEndIndex = content.indexOf('</div>\n</section>', cardStartIndex);
    let originalCardHtml = content.slice(cardStartIndex, cardEndIndex - 7); // -7 to remove the extra </div>
    
    // Add the original card
    newContent += originalCardHtml;
    
    // Generate the new card
    let newCardHtml = originalCardHtml
        .replace('Math Selective Prep Test Pack book cover', 'CHPrepLab Platform')
        .replace('https://res.cloudinary.com/dsjbibh1o/image/upload/v1781769245/Simple_A4_Lined_Paper_nddn1w.png', 'https://res.cloudinary.com/dsjbibh1o/image/upload/v1787311811/Displaying_logo_on_MacBook_Pro_202608212129_vvblow.jpg')
        .replace('Math Selective Prep Test Pack (20 Papers)', 'CHPrepLab Subscription (1 Year)')
        .replace('4.89', '4.95')
        .replace('(500+ reviews)', '(1,200+ active users)')
        .replace('$39.99', '$99.99')
        .replace('$69.99', '$149.99')
        .replace('/selective-math-pack', '/chpreplab');
        
    // Replace bullet points in new card
    newCardHtml = newCardHtml.replace(/<ul class="space-y-2 mb-6 text-sm text-on-surface flex-grow">[\s\S]*?<\/ul>/, `<ul class="space-y-2 mb-6 text-sm text-on-surface flex-grow">
  <li class="flex items-start gap-2">
    <span class="material-symbols-outlined text-secondary text-base">check_circle</span>
    <span>60 × Reading Practice Tests</span>
  </li>
  <li class="flex items-start gap-2">
    <span class="material-symbols-outlined text-secondary text-base">check_circle</span>
    <span>60 × Mathematical Reasoning Practice Tests</span>
  </li>
  <li class="flex items-start gap-2">
    <span class="material-symbols-outlined text-secondary text-base">check_circle</span>
    <span>60 × Thinking Skills Practice Tests</span>
  </li>
  <li class="flex items-start gap-2">
    <span class="material-symbols-outlined text-secondary text-base">check_circle</span>
    <span>200 × Writing Stimuli</span>
  </li>
  <li class="flex items-start gap-2">
    <span class="material-symbols-outlined text-secondary text-base">check_circle</span>
    <span>Format-aligned for 2027 test structure and difficulty</span>
  </li>
</ul>`);

    newContent += '\n' + newCardHtml + '\n</div>\n</section>';
    newContent += content.slice(content.indexOf('</section>', cardEndIndex) + 10);
    
    fs.writeFileSync('ch_tuition_storefront_desktop/index.html', newContent);
    console.log('Successfully updated index.html');
} else {
    console.log('Could not find the product grid container.');
}
