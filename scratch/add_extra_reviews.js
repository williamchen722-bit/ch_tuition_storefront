const fs = require('fs');

const extraReviews = [
    {name: `Nisha P.`, location: `Strathfield`, headline: `"Brilliant for spatial reasoning"`, text: `My daughter was fine with standard numbers, but completely lost when it came to the spatial reasoning and 3D shape folding questions. These papers were the only ones we found that actually targeted that visual geometry side properly. It completely fixed her blind spot before test day.`, initials: `NP`, avatarBg: `#000a1e`},
    {name: `Jason K.`, location: `Hurstville`, headline: `A real wake-up call for school marks`, text: `Don't let top school marks fool you. My son gets straight As in class, but these logic-heavy word problems were a massive reality check. They forced him to actually think dynamically rather than just coasting on basic memorised formulas. Incredibly glad we found these early.`, initials: `JK`, avatarBg: `#735c00`},
    {name: `Sarah L.`, location: `Parramatta`, headline: `"Teaches my kids very well"`, text: `The current exam style loves to pack heaps of irrelevant numbers into a story problem just to confuse the kids. These papers specifically train them how to underline the actual question and ignore the filler data. The layout completely stopped my daughter from rushing into the wrong calculations.`, initials: `SL`, avatarBg: `#000a1e`},
    {name: `Chloe N.`, location: `Ryde`, headline: `"Saves working parents so much time"`, text: `As a working mum, I don’t have hours to sit down and try to reverse-engineer test answers using high school math I forgot twenty years ago lol. The step-by-step logic breakdowns at the back of the book meant my daughter could independently check her own work and understand her mistakes instantly.`, initials: `CN`, avatarBg: `#735c00`},
    {name: `Arjun M.`, location: `Blacktown`, headline: `"Eliminated those careless mistakes"`, text: `My boy kept falling into the classic traps: forgetting to convert units from centimeters to meters, or misreading words like 'NOT' or 'AT LEAST'. These practice papers caught him out on those exact silly errors so many times during practice that he finally learned to double-check his work.`, initials: `AM`, avatarBg: `#465f88`},
    {name: `Raymond Z.`, location: `Stanhope Gardens`, headline: `"Better than massive textbook drills"`, text: `We bought a couple of those massive, thick commercial tuition books but they were just filled with endless rows of basic arithmetic calculation. Will's papers are completely different - they are hyper-focused on the actual multi-step reasoning framework used in the modern exam layout. Quality over quantity.`, initials: `RZ`, avatarBg: `#000a1e`},
    {name: `Sam K.`, location: `Ashfield`, headline: `"Excellent for independent study"`, text: `We loved how clean and structured these papers are. The formatting is so professional that my son treated them like a real exam block every Sunday morning. It really helped build up his physical sitting stamina and mental concentration for the actual length of the test day.`, initials: `SK`, avatarBg: `#465f88`},
    {name: `Justin T.`, location: `Pennant Hills`, headline: `"Perfect final fortnight preparation"`, text: `We ran through these papers in the final two weeks right before the selective test. They acted as a fantastic final polish for her confidence. They didn't hand-hold, which meant she was perfectly prepared for the actual difficulty spike when she walked into the hall on exam day.`, initials: `JT`, avatarBg: `#000a1e`},
    {name: `Fiona C.`, location: `Marsden Park`, headline: `"Realistic test book layout"`, text: `The actual visual layout, font sizes, and balance between short questions and heavy problem-solvers were spot on with what the kids faced. Fantastic work by CH Tuition.`, initials: `FC`, avatarBg: `#735c00`},
    {name: `Daniel S.`, location: `Quakers Hill`, headline: `"Conquered his exam room anxiety"`, text: `My son used to completely freeze up if he couldn’t solve the first two questions on a page. Working through these papers taught him the emotional resilience needed to skip a roadblock, stay calm, and collect the easier marks later in the booklet. Can't thank Will enough for that mental prep!`, initials: `DS`, avatarBg: `#465f88`}
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
    const singleSet = extraReviews.map(card).join('\n        ');
    return `<div id="extra-reviews-marquee" style="position:relative;overflow:hidden;width:100%;-webkit-mask-image:linear-gradient(to right,transparent,black 6%,black 94%,transparent);mask-image:linear-gradient(to right,transparent,black 6%,black 94%,transparent);">
    <div class="ch-marquee-track" style="display:flex;gap:24px;padding-bottom:16px;padding-top:16px;width:max-content;animation-direction:reverse;">
        ${singleSet}
        ${singleSet}
    </div>
</div>`;
}

const filename = '../ch_tuition_storefront_desktop/product.html';
let content = fs.readFileSync(filename, 'utf-8');

// If already added, remove it first so we can safely run this multiple times
const existingRegex = /<div id="extra-reviews-marquee"[\s\S]*?<\/div>\s*<\/div>/;
if (existingRegex.test(content)) {
    content = content.replace(existingRegex, '');
}

// Find the end of the first marquee wrapper
const wrapperStart = '<div style="position:relative;overflow:hidden;width:100%;-webkit-mask-image:linear-gradient(to right,transparent,black 6%,black 94%,transparent);mask-image:linear-gradient(to right,transparent,black 6%,black 94%,transparent);">';
const wrapperStartIdx = content.indexOf(wrapperStart);

if (wrapperStartIdx === -1) {
    console.log("Could not find first marquee wrapper");
    process.exit(1);
}

// Find the closing </div> of the first wrapper
// The first wrapper has one inner <div class="ch-marquee-track">...</div>
// We can just find the string </section> which comes shortly after the first marquee, 
// OR we can find the matching </div> for the wrapper.
// Actually, since the first wrapper is just a div containing a track div containing cards,
// we can just find `<div style="position:relative...` and then search forward for the `</section>`.
// Wait, the marquee is the last thing before `</section>`.
// Let's just insert it right before `</section>`!
const sectionEndIdx = content.indexOf('</section>', wrapperStartIdx);
if (sectionEndIdx === -1) {
    console.log("Could not find </section> after first marquee");
    process.exit(1);
}

const newBlock = generateMarqueeBlock();

content = content.slice(0, sectionEndIdx) + '\n' + newBlock + '\n' + content.slice(sectionEndIdx);

fs.writeFileSync(filename, content, 'utf-8');
console.log('Successfully added extra reviews to product.html!');
