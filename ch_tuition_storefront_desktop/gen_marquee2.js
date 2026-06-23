const fs = require('fs');

const reviews = [
    {name: `Sarah M.`, location: `Baulkham Hills`, headline: `Highly Recommended`, text: `Highly recommend the math papers from CH Tuition if you've got a kid doing the Selective test. We wasted so much money on old textbook packs that didn't match the new Cambridge style at all. The papers from CH Tuition actually forced my son to use some proper thinking skills rather than just doing quick arithmetic. He found them pretty tough at first but it definitely stopped him from freezing up in the real exam.`, initials: `SM`, bg: `#000a1e`, textColor: `#ffffff`},
    {name: `Kylie T.`, location: `Carlingford`, headline: `"Lifesaver for parents too lol"`, text: `Just wanted to send a quick thank you to Will for the selective papers! My daughter is naturally good at maths but these really challenged her logic and speed. The best bit for me was the detailed answer breakdowns because it saved me trying to remember high school math to explain it to her lol. Definitely worth doing if you're prepping for the exam.`, initials: `KT`, bg: `#735c00`, textColor: `#ffffff`},
    {name: `David L.`, location: `Epping`, headline: `"Excellent local resource"`, text: `Spot on material for the current NSW Selective format. It's so hard to find decent Australian resources that actually replicate the trickiness of the real test. Will's papers caught out all the little traps my son usually falls into, like rushing through multi-step word problems. It really helped sort out his timing before the big day. Cheers Will.`, initials: `DL`, bg: `#465f88`, textColor: `#ffffff`},
    {name: `Priya R.`, location: `Bella Vista`, headline: `"Properly challenging"`, text: `If anyone is looking for extra selective practice, the papers from CH Tuition are brilliant. Bit of a reality check for my daughter at first because they are a massive step up from school work, but it was exactly what she needed to get used to the test pressure. No fluff, just really solid, tricky questions.`, initials: `PR`, bg: `#745c00`, textColor: `#ffffff`},
    {name: `Michelle W.`, location: `Castle Hill`, headline: `"So glad we found these"`, text: `If your kid is sitting the Selective test next year, honestly do yourself a favour and look up CH Tuition. My son was flying through his school maths but these papers were a proper wake up call for him. The wording is exactly like the tricky NESA style questions that usually trip them up. It really got him used to the pace he needs for the real thing.`, initials: `MW`, bg: `#000a1e`, textColor: `#ffffff`},
    {name: `Renee S.`, location: `Kellyville`, headline: `"Highly recommend Will's papers"`, text: `Hey everyone, just wanted to share that we used Will's selective math papers for our daughter's prep and they were brilliant. They focus a lot on the problem solving and thinking skills side of things which is exactly what the new test looks like now. It stopped her from rushing through the questions.`, initials: `RS`, bg: `#735c00`, textColor: `#ffffff`},
    {name: `Andrew K.`, location: `Rouse Hill`, headline: `"The answer sheets are a life saver"`, text: `Big shout out to CH Tuition for the math packs. We've been grinding through them the last few weeks. The best part is the solutions page because it actually walks through the steps to get the answer. Saved me so many arguments at the kitchen table trying to figure out how to explain it to him!`, initials: `AK`, bg: `#465f88`, textColor: `#ffffff`},
    {name: `Lin M.`, location: `Epping`, headline: `"Great for the new Cambridge format"`, text: `Excellent resources for the NSW Selective exam. Will really understands the current test format and the papers reflect that perfectly. It's not just mindless repetition, the questions actually test their mathematical reasoning. My daughter went into her test feeling way more prepared.`, initials: `LM`, bg: `#745c00`, textColor: `#ffffff`},
    {name: `Vikram G.`, location: `Bella Vista`, headline: `"Worth every cent"`, text: `We tried a couple of the massive tuition company books but they felt really outdated compared to what's on the test now. The trial papers from CH Tuition are much closer to the actual difficulty level. Definitely helped my son learn how to manage his time properly under exam pressure.`, initials: `VG`, bg: `#000a1e`, textColor: `#ffffff`},
    {name: `Joanne C.`, location: `Baulkham Hills`, headline: `"Awesome papers Will thanks"`, text: `Just wanted to say thanks Will, the maths papers were awesome. Tough but exactly what he needed. He said a few of the concepts in the actual exam were almost identical to the ones in your practice sets so his confidence was sky high.`, initials: `JC`, bg: `#735c00`, textColor: `#ffffff`},
    {name: `Simon V.`, location: `Cherrybrook`, headline: `"Proper exam preparation"`, text: `If you want a realistic idea of how your child will go under test conditions, get the papers from CH Tuition. They are deliberately challenging and don't hand hold. It really highlighted the specific areas where my son was making careless errors in his word problems.`, initials: `SV`, bg: `#465f88`, textColor: `#ffffff`},
    {name: `Aisha M.`, location: `Glenhaven`, headline: `"Spot on with the wording"`, text: `Definitely get in touch with Will for his Selective math sets. The biggest issue my girl had was understanding the phrasing of the multi-step questions, but these papers taught her exactly what clues to look for. Really high quality Australian material.`, initials: `AM`, bg: `#745c00`, textColor: `#ffffff`},
    {name: `Tina B.`, location: `West Pennant Hills`, headline: `"Wish we found these earlier"`, text: `We only started using the CH Tuition papers a month before the test but they made a massive difference. They really cut through the fluff and focus on the exact type of thinking skills math the kids actually face on the day. Will definitely be using them again when my youngest is ready.`, initials: `TB`, bg: `#000a1e`, textColor: `#ffffff`},
    {name: `Daniel L.`, location: `Carlingford`, headline: `"Thanks CH Tuition!"`, text: `Just a quick note to say the selective math papers were a total game changer for us. My son loved that they weren't boring or repetitive. They really made him think outside the box which is exactly what he needed for the new test layout.`, initials: `DL`, bg: `#735c00`, textColor: `#ffffff`}
];

function generateCard(review, cardBg) {
    return `<div style="flex-shrink:0;width:360px;" class="${cardBg} border border-[#c4c6cf] p-8 rounded-lg shadow-sm flex flex-col justify-between">
        <div>
            <div class="flex text-[#735c00] mb-4">
                <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size:16px;font-variation-settings:'FILL' 1;">star</span>
            </div>
            <h4 class="text-base text-[#000a1e] font-semibold mb-2" style="font-family:'Playfair Display',serif;">${review.headline}</h4>
            <p class="text-[#44474e] mb-6" style="font-size:14px;font-family:'Inter',sans-serif;line-height:1.6;">"${review.text}"</p>
        </div>
        <div class="flex items-center gap-3 mt-auto pt-4" style="border-top:1px solid rgba(196,198,207,0.3);">
            <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold" style="background-color:${review.bg};color:${review.textColor};font-size:13px;font-family:'Inter',sans-serif;">${review.initials}</div>
            <div>
                <p class="font-semibold" style="font-size:15px;color:#000a1e;font-family:'Inter',sans-serif;line-height:1.2;">${review.name}</p>
                <p style="font-size:12px;color:#44474e;font-family:'Inter',sans-serif;margin-top:2px;">${review.location}</p>
            </div>
        </div>
    </div>`;
}

function generateMarqueeHtml(cardBg) {
    const cards = reviews.map(r => generateCard(r, cardBg)).join('\n');
    return `<div style="position:relative;overflow:hidden;width:100%;-webkit-mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent);mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent);">
    <div class="reviews-marquee-track" style="display:flex;gap:24px;padding-bottom:16px;padding-top:8px;width:max-content;">
${cards}
${cards}
    </div>
</div>`;
}

function updateFile(filename, isCodeHtml) {
    let content = fs.readFileSync(filename, 'utf-8');
    const cardBg = isCodeHtml ? 'bg-[#fcf9f8]' : 'bg-white';
    const marqueeHtml = generateMarqueeHtml(cardBg);

    // Find section heading
    const headingMatch = isCodeHtml
        ? '<h2 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Real Results, Proven Success</h2>'
        : '<h2 class="font-headline-md text-headline-md text-primary mb-8">Real Results, Proven Success</h2>';

    const headingIdx = content.indexOf(headingMatch);
    if (headingIdx === -1) {
        console.log('Could not find heading in ' + filename);
        return;
    }

    // Find the </section> that closes the reviews section
    // The heading is followed by content, then a </section>
    const searchFrom = headingIdx + headingMatch.length;

    // Depth-aware find: find the </section> tag
    let sectionEnd = content.indexOf('</section>', searchFrom);
    if (sectionEnd === -1) {
        console.log('Could not find </section> closing tag in ' + filename);
        return;
    }

    // Replace everything from after the heading to the end of </section>
    content = content.substring(0, headingIdx + headingMatch.length) +
        '\n' + marqueeHtml + '\n</section>' +
        content.substring(sectionEnd + '</section>'.length);

    // Remove the broken Tailwind keyframe config we added before (revert animation config)
    content = content.replace(/\s*keyframes:\s*\{[\s\S]*?marquee:\s*\{[\s\S]*?\}\s*\},\s*animation:\s*\{[\s\S]*?marquee:.*?\},/g, '');

    // Remove mask-edges CSS class since we now inline it
    content = content.replace(/\s*\.mask-edges\s*\{[\s\S]*?\}/g, '');

    // Ensure we have the marquee keyframe animation CSS in the <style> block
    if (!content.includes('@keyframes reviewsMarquee')) {
        const styleEnd = content.indexOf('</style>');
        if (styleEnd !== -1) {
            const marqueeCSS = `
        @keyframes reviewsMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .reviews-marquee-track {
            animation: reviewsMarquee 60s linear infinite;
        }
        .reviews-marquee-track:hover {
            animation-play-state: paused;
        }
`;
            content = content.substring(0, styleEnd) + marqueeCSS + content.substring(styleEnd);
        }
    }

    fs.writeFileSync(filename, content, 'utf-8');
    console.log('Updated ' + filename);
}

updateFile('product.html', false);
updateFile('code.html', true);
console.log('Done!');
