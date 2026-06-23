const fs = require('fs');

const reviews = [
    {name: `Sarah M.`, location: `Baulkham Hills`, headline: `Highly Recommended`, text: `Highly recommend the math papers from CH Tuition if you've got a kid doing the Selective test. We wasted so much money on old textbook packs that didn't match the new Cambridge style at all. The papers from CH Tuition actually forced my son to use some proper thinking skills rather than just doing quick arithmetic. He found them pretty tough at first but it definitely stopped him from freezing up in the real exam.`, initials: `SM`, avatarBg: `#000a1e`},
    {name: `Kylie T.`, location: `Carlingford`, headline: `"Lifesaver for parents too lol"`, text: `Just wanted to send a quick thank you to Will for the selective papers! My daughter is naturally good at maths but these really challenged her logic and speed. The best bit for me was the detailed answer breakdowns because it saved me trying to remember high school math to explain it to her lol. Definitely worth doing if you're prepping for the exam.`, initials: `KT`, avatarBg: `#735c00`},
    {name: `David L.`, location: `Epping`, headline: `"Excellent local resource"`, text: `Spot on material for the current NSW Selective format. It's so hard to find decent Australian resources that actually replicate the trickiness of the real test. Will's papers caught out all the little traps my son usually falls into, like rushing through multi-step word problems. It really helped sort out his timing before the big day. Cheers Will.`, initials: `DL`, avatarBg: `#465f88`},
    {name: `Priya R.`, location: `Bella Vista`, headline: `"Properly challenging"`, text: `If anyone is looking for extra selective practice, the papers from CH Tuition are brilliant. Bit of a reality check for my daughter at first because they are a massive step up from school work, but it was exactly what she needed to get used to the test pressure. No fluff, just really solid, tricky questions.`, initials: `PR`, avatarBg: `#745c00`},
    {name: `Michelle W.`, location: `Castle Hill`, headline: `"So glad we found these"`, text: `If your kid is sitting the Selective test next year, honestly do yourself a favour and look up CH Tuition. My son was flying through his school maths but these papers were a proper wake up call for him. The wording is exactly like the tricky NSW Government style questions that usually trip them up. It really got him used to the pace he needs for the real thing.`, initials: `MW`, avatarBg: `#000a1e`},
    {name: `Renee S.`, location: `Kellyville`, headline: `"Highly recommend Will's papers"`, text: `Hey everyone, just wanted to share that we used Will's selective math papers for our daughter's prep and they were brilliant. They focus a lot on the problem solving and thinking skills side of things which is exactly what the new test looks like now. It stopped her from rushing through the questions.`, initials: `RS`, avatarBg: `#735c00`},
    {name: `Andrew K.`, location: `Rouse Hill`, headline: `"The answer sheets are a life saver"`, text: `Big shout out to CH Tuition for the math packs. We've been grinding through them the last few weeks. The best part is the solutions page because it actually walks through the steps to get the answer. Saved me so many arguments at the kitchen table trying to figure out how to explain it to him!`, initials: `AK`, avatarBg: `#465f88`},
    {name: `Lin M.`, location: `Epping`, headline: `"Great for the new Cambridge format"`, text: `Excellent resources for the NSW Selective exam. Will really understands the current test format and the papers reflect that perfectly. It's not just mindless repetition, the questions actually test their mathematical reasoning. My daughter went into her test feeling way more prepared.`, initials: `LM`, avatarBg: `#745c00`},
    {name: `Vikram G.`, location: `Bella Vista`, headline: `"Worth every cent"`, text: `We tried a couple of the massive tuition company books but they felt really outdated compared to what's on the test now. The trial papers from CH Tuition are much closer to the actual difficulty level. Definitely helped my son learn how to manage his time properly under exam pressure.`, initials: `VG`, avatarBg: `#000a1e`},
    {name: `Joanne C.`, location: `Baulkham Hills`, headline: `"Awesome papers Will thanks"`, text: `Just wanted to say thanks Will, the maths papers were awesome. Tough but exactly what he needed. He said a few of the concepts in the actual exam were almost identical to the ones in your practice sets so his confidence was sky high.`, initials: `JC`, avatarBg: `#735c00`},
    {name: `Simon V.`, location: `Cherrybrook`, headline: `"Proper exam preparation"`, text: `If you want a realistic idea of how your child will go under test conditions, get the papers from CH Tuition. They are deliberately challenging and don't hand hold. It really highlighted the specific areas where my son was making careless errors in his word problems.`, initials: `SV`, avatarBg: `#465f88`},
    {name: `Aisha M.`, location: `Glenhaven`, headline: `"Spot on with the wording"`, text: `Definitely get in touch with Will for his Selective math sets. The biggest issue my girl had was understanding the phrasing of the multi-step questions, but these papers taught her exactly what clues to look for. Really high quality Australian material.`, initials: `AM`, avatarBg: `#745c00`},
    {name: `Tina B.`, location: `West Pennant Hills`, headline: `"Wish we found these earlier"`, text: `We only started using the CH Tuition papers a month before the test but they made a massive difference. They really cut through the fluff and focus on the exact type of thinking skills math the kids actually face on the day. Will definitely be using them again when my youngest is ready.`, initials: `TB`, avatarBg: `#000a1e`},
    {name: `Daniel L.`, location: `Carlingford`, headline: `"Thanks CH Tuition!"`, text: `Just a quick note to say the selective math papers were a total game changer for us. My son loved that they weren't boring or repetitive. They really made him think outside the box which is exactly what he needed for the new test layout.`, initials: `DL`, avatarBg: `#735c00`}
];

function card(r) {
    return `<div style="flex-shrink:0;width:360px;background:#ffffff;border:1px solid #c4c6cf;padding:32px;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.06);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
                <div style="display:flex;margin-bottom:16px;color:#735c00;">
                    <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' 1;">star</span>
                    <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' 1;">star</span>
                </div>
                <h4 style="font-family:'Playfair Display',serif;font-size:16px;font-weight:600;color:#000a1e;margin-bottom:8px;">${r.headline}</h4>
                <p style="font-family:'Inter',sans-serif;font-size:14px;line-height:1.65;color:#44474e;margin-bottom:24px;">"${r.text}"</p>
            </div>
            <div style="display:flex;align-items:center;gap:12px;margin-top:auto;padding-top:16px;border-top:1px solid rgba(196,198,207,0.4);">
                <div style="width:40px;height:40px;border-radius:50%;background-color:${r.avatarBg};color:#ffffff;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;font-size:13px;font-weight:700;flex-shrink:0;">${r.initials}</div>
                <div>
                    <p style="font-family:'Inter',sans-serif;font-size:15px;font-weight:600;color:#000a1e;line-height:1.2;margin:0;">${r.name}</p>
                    <p style="font-family:'Inter',sans-serif;font-size:12px;color:#44474e;margin:3px 0 0 0;">${r.location}</p>
                </div>
            </div>
        </div>`;
}

function generateMarqueeBlock() {
    const singleSet = reviews.map(card).join('\n        ');
    return `<div style="position:relative;overflow:hidden;width:100%;-webkit-mask-image:linear-gradient(to right,transparent,black 6%,black 94%,transparent);mask-image:linear-gradient(to right,transparent,black 6%,black 94%,transparent);">
    <div class="ch-marquee-track" style="display:flex;gap:24px;padding-bottom:16px;padding-top:8px;width:max-content;">
        ${singleSet}
        ${singleSet}
    </div>
</div>`;
}

const CSS_BLOCK = `
        @keyframes chMarquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .ch-marquee-track {
            animation: chMarquee 80s linear infinite;
        }
        .ch-marquee-track:hover {
            animation-play-state: paused;
        }`;

function fixFile(filename) {
    let content = fs.readFileSync(filename, 'utf-8');

    // ── 1. Inject CSS keyframes if missing ──────────────────────────────────
    if (!content.includes('@keyframes chMarquee')) {
        const styleEnd = content.indexOf('</style>');
        if (styleEnd !== -1) {
            content = content.slice(0, styleEnd) + CSS_BLOCK + '\n    ' + content.slice(styleEnd);
        }
    }

    // ── 2. Remove old broken Tailwind animate-marquee config entries ─────────
    // Remove keyframes / animation from tailwind config
    content = content.replace(/,?\s*keyframes:\s*\{\s*marquee:\s*\{[^}]*\}\s*\},?\s*animation:\s*\{\s*marquee:[^}]*\},?/gs, '');
    // Remove mask-edges style rule
    content = content.replace(/\s*\.mask-edges\s*\{[^}]*\}/gs, '');

    // ── 3. Replace the entire marquee section ───────────────────────────────
    // Anchor on the outer wrapper div that the old script created
    const outerStart = '<div class="relative flex overflow-hidden group w-full mask-edges">';
    const outerStartIdx = content.indexOf(outerStart);

    if (outerStartIdx === -1) {
        console.log(`⚠ Could not find old marquee wrapper in ${filename}`);
        return;
    }

    // Walk forward to find the matching </section> that closes the reviews section
    // We know the structure ends with </section> right after the outer div closes
    // Find the next </section> after the start of the marquee
    const sectionEndIdx = content.indexOf('</section>', outerStartIdx);
    if (sectionEndIdx === -1) {
        console.log(`⚠ Could not find </section> in ${filename}`);
        return;
    }

    // Reconstruct: find what came before outerStart (the heading html + any wrapper divs from the testimonials section)
    // We want to keep the section opening tag and the header block
    const sectionOpenTag = '<!-- Testimonials Section -->';
    const productSectionOpenTag = '<section class="mt-16 pt-16 border-t border-outline-variant">';

    let sectionHeadHtml = '';
    let sectionHeadEnd = outerStartIdx;

    // For code.html: check for "Testimonials Section" comment
    const testimonialsSectionIdx = content.lastIndexOf(sectionOpenTag, outerStartIdx);
    const productSectionIdx = content.lastIndexOf(productSectionOpenTag, outerStartIdx);

    const marqueeBlock = generateMarqueeBlock();

    // Replace: from outerStart to end of </section> (exclusive of </section>)
    content = content.slice(0, outerStartIdx) +
              marqueeBlock +
              '\n</section>' +
              content.slice(sectionEndIdx + '</section>'.length);

    // ── 4. Fix the truncated heading line if needed ──────────────────────────
    // The old script truncated a line like:
    //   <h2 ...>Real Results, Proven Success</h2 then cut off rest
    // Look for the truncated pattern and fix it
    content = content.replace(
        /(<h2[^>]*>Real Results, Proven Success<\/h2>\s*<p[^>]*>Hear from parents[^<]*<\/p>\s*<\/div>\s*)[\s\S]*?(?=<div style="position:relative)/,
        '$1'
    );

    fs.writeFileSync(filename, content, 'utf-8');
    console.log(`✓ Fixed ${filename}`);
}

fixFile('code.html');
fixFile('product.html');
console.log('Done!');
