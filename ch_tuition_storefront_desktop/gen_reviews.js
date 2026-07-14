const fs = require('fs');

const reviews = [
    { name: `Sarah M.`, location: `Baulkham Hills`, headline: `Highly Recommended`, text: `Highly recommend the math papers from CH Tuition if you've got a kid doing the Selective test. We wasted so much money on old textbook packs that didn't match the new Cambridge style at all. The papers from CH Tuition actually forced my son to use some proper thinking skills rather than just doing quick arithmetic. He found them pretty tough at first but it definitely stopped him from freezing up in the real exam.`, initials: `SM`, bg: `bg-primary` },
    { name: `Kylie T.`, location: `Carlingford`, headline: `"Lifesaver for parents too lol"`, text: `Just wanted to send a quick thank you to Will for the selective papers! My daughter is naturally good at maths but these really challenged her logic and speed. The best bit for me was the detailed answer breakdowns because it saved me trying to remember high school math to explain it to her lol. Definitely worth doing if you're prepping for the exam.`, initials: `KT`, bg: `bg-secondary` },
    { name: `David L.`, location: `Epping`, headline: `"Excellent local resource"`, text: `Spot on material for the current NSW Selective format. It’s so hard to find decent Australian resources that actually replicate the trickiness of the real test. Will's papers caught out all the little traps my son usually falls into, like rushing through multi-step word problems. It really helped sort out his timing before the big day. Cheers Will.`, initials: `DL`, bg: `bg-[#465f88]` },
    { name: `Priya R.`, location: `Bella Vista`, headline: `"Properly challenging"`, text: `If anyone is looking for extra selective practice, the papers from CH Tuition are brilliant. Bit of a reality check for my daughter at first because they are a massive step up from school work, but it was exactly what she needed to get used to the test pressure. No fluff, just really solid, tricky questions.`, initials: `PR`, bg: `bg-[#745c00]` },
    { name: `Michelle W.`, location: `Castle Hill`, headline: `"So glad we found these"`, text: `If your kid is sitting the Selective test next year, honestly do yourself a favour and look up CH Tuition. My son was flying through his school maths but these papers were a proper wake up call for him. The wording is exactly like the tricky NSW Government style questions that usually trip them up. It really got him used to the pace he needs for the real thing.`, initials: `MW`, bg: `bg-primary` },
    { name: `Renee S.`, location: `Kellyville`, headline: `"Highly recommend Will's papers"`, text: `Hey everyone, just wanted to share that we used Will’s selective math papers for our daughter’s prep and they were brilliant. They focus a lot on the problem solving and thinking skills side of things which is exactly what the new test looks like now. It stopped her from rushing through the questions.`, initials: `RS`, bg: `bg-secondary` },
    { name: `Andrew K.`, location: `Rouse Hill`, headline: `"The answer sheets are a life saver"`, text: `Big shout out to CH Tuition for the math packs. We’ve been grinding through them the last few weeks. The best part is the solutions page because it actually walks through the steps to get the answer. Saved me so many arguments at the kitchen table trying to figure out how to explain it to him!`, initials: `AK`, bg: `bg-[#465f88]` },
    { name: `Lin M.`, location: `Epping`, headline: `"Great for the new Cambridge format"`, text: `Excellent resources for the NSW Selective exam. Will really understands the current test format and the papers reflect that perfectly. It’s not just mindless repetition, the questions actually test their mathematical reasoning. My daughter went into her test feeling way more prepared.`, initials: `LM`, bg: `bg-[#745c00]` },
    { name: `Vikram G.`, location: `Bella Vista`, headline: `"Worth every cent"`, text: `We tried a couple of the massive tuition company books but they felt really outdated compared to what's on the test now. The trial papers from CH Tuition are much closer to the actual difficulty level. Definitely helped my son learn how to manage his time properly under exam pressure.`, initials: `VG`, bg: `bg-primary` },
    { name: `Joanne C.`, location: `Baulkham Hills`, headline: `"Awesome papers Will thanks"`, text: `Just wanted to say thanks Will, the maths papers were awesome. Tough but exactly what he needed. He said a few of the concepts in the actual exam were almost identical to the ones in your practice sets so his confidence was sky high.`, initials: `JC`, bg: `bg-secondary` },
    { name: `Simon V.`, location: `Cherrybrook`, headline: `"Proper exam preparation"`, text: `If you want a realistic idea of how your child will go under test conditions, get the papers from CH Tuition. They are deliberately challenging and don't hand hold. It really highlighted the specific areas where my son was making careless errors in his word problems.`, initials: `SV`, bg: `bg-[#465f88]` },
    { name: `Aisha M.`, location: `Glenhaven`, headline: `"Spot on with the wording"`, text: `Definitely get in touch with Will for his Selective math sets. The biggest issue my girl had was understanding the phrasing of the multi-step questions, but these papers taught her exactly what clues to look for. Really high quality Australian material.`, initials: `AM`, bg: `bg-[#745c00]` },
    { name: `Tina B.`, location: `West Pennant Hills`, headline: `"Wish we found these earlier"`, text: `We only started using the CH Tuition papers a month before the test but they made a massive difference. They really cut through the fluff and focus on the exact type of thinking skills math the kids actually face on the day. Will definitely be using them again when my youngest is ready.`, initials: `TB`, bg: `bg-primary` },
    { name: `Daniel L.`, location: `Carlingford`, headline: `"Thanks CH Tuition!"`, text: `Just a quick note to say the selective math papers were a total game changer for us. My son loved that they weren't boring or repetitive. They really made him think outside the box which is exactly what he needed for the new test layout.`, initials: `DL`, bg: `bg-secondary` }
];

function generateHtml(isCodeHtml) {
    let html = '<div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar">\\n';
    reviews.forEach((review, i) => {
        const delay = ((i % 4) + 1) * 100;
        const aosAttr = isCodeHtml ? ` data-aos="fade-up" data-aos-delay="${delay}"` : '';
        const cardClass = isCodeHtml ? 'bg-surface border border-outline-variant' : 'bg-surface-container-lowest border border-outline-variant';
        const textColorAuthor = (review.bg === 'bg-primary' || review.bg === 'bg-[#465f88]') ? 'text-on-primary' : 'text-on-secondary';

        html += `    <div class="snap-center shrink-0 w-[85vw] md:w-[400px] ${cardClass} p-8 rounded-lg shadow-sm flex flex-col justify-between"${aosAttr}>
        <div>
            <div class="flex text-secondary mb-4">
                <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
            </div>
            <h4 class="font-headline-md text-lg text-primary font-semibold mb-2">${review.headline}</h4>
            <p class="font-body-md text-on-surface-variant mb-6 text-sm">"${review.text}"</p>
        </div>
        <div class="flex items-center gap-3 mt-auto pt-4 border-t border-outline-variant/30">
            <div class="w-10 h-10 rounded-full ${review.bg} flex items-center justify-center ${textColorAuthor} font-bold">${review.initials}</div>
            <div>
                <p class="font-body-md text-primary font-semibold leading-none">${review.name}</p>
                <p class="text-xs text-on-surface-variant mt-1">${review.location}</p>
            </div>
        </div>
    </div>\\n`;
    });
    html += '</div>';
    return html;
}

function updateFile(filename, isCodeHtml) {
    let content = fs.readFileSync(filename, 'utf-8');
    const newHtml = generateHtml(isCodeHtml);
    const pattern = /<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">[\s\S]*?<\/section>/;
    content = content.replace(pattern, newHtml + '\\n</section>');
    fs.writeFileSync(filename, content, 'utf-8');
}

updateFile('product.html', false);
updateFile('code.html', true);

console.log('SUCCESS');
