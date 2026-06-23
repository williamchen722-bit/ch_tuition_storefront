const fs = require('fs');

// ── Fix product.html ─────────────────────────────────────────────────────────
let p = fs.readFileSync('product.html', 'utf-8');

// 1. Fix truncated accordion text
p = p.replace(
    'text-center">See how our proprietary eng',
    'text-center">See how our proprietary engine tracks your progress in real-time.</p></div></div></div></div>'
);

// 2. Add overflow-x:hidden to body (if not already there)
if (!p.includes('overflow-x:hidden')) {
    p = p.replace(
        'class="bg-surface text-on-surface font-body-md antialiased selection:bg-secondary selection:text-on-secondary flex flex-col min-h-screen"',
        'class="bg-surface text-on-surface font-body-md antialiased selection:bg-secondary selection:text-on-secondary flex flex-col min-h-screen" style="overflow-x:hidden"'
    );
}

fs.writeFileSync('product.html', p, 'utf-8');
console.log('product.html patched');

// ── Fix code.html ─────────────────────────────────────────────────────────────
let c = fs.readFileSync('code.html', 'utf-8');

// Add overflow-x:hidden to body (if not already there)
if (!c.includes('overflow-x:hidden')) {
    c = c.replace(
        'class="bg-surface text-on-surface font-body-md antialiased selection:bg-secondary selection:text-on-secondary flex flex-col min-h-screen"',
        'class="bg-surface text-on-surface font-body-md antialiased selection:bg-secondary selection:text-on-secondary flex flex-col min-h-screen" style="overflow-x:hidden"'
    );
}

fs.writeFileSync('code.html', c, 'utf-8');
console.log('code.html patched');
console.log('Done');
