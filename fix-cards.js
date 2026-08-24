const fs = require('fs');
let c = fs.readFileSync('ch_tuition_storefront_desktop/index.html', 'utf8');

const oldClass = 'w-full md:w-96 bg-surface-container-lowest border-t border-primary group flex flex-col h-full shadow-architectural transition-transform duration-300 hover:-translate-y-1';
const newClass = 'w-full md:flex-1 md:max-w-sm bg-surface-container-lowest border-t border-primary group flex flex-col h-full shadow-architectural transition-transform duration-300 hover:-translate-y-1';

c = c.split(oldClass).join(newClass);

fs.writeFileSync('ch_tuition_storefront_desktop/index.html', c);
console.log('Fixed card widths. Replacements made:', (c.match(new RegExp(newClass.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length);
