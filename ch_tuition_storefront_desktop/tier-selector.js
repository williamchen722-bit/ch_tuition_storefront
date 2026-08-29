// Tier selector logic
(function() {
    const tierData = {
        good: {
            id: 'essential-pack',
            name: 'Essential Practice Pack (10 Papers)',
            price: 49,
            priceDisplay: '$49 <span class="font-semibold text-base">AUD</span>',
            image: 'https://res.cloudinary.com/dsjbibh1o/image/upload/v1781769245/Simple_A4_Lined_Paper_nddn1w.png'
        },
        better: {
            id: 'exam-vault',
            name: 'Complete 2027 Exam Vault (20 Papers + 10 Mini Sprint)',
            price: 89,
            priceDisplay: '$89 <span class="font-semibold text-base">AUD</span>',
            image: 'https://res.cloudinary.com/dsjbibh1o/image/upload/v1781769245/Simple_A4_Lined_Paper_nddn1w.png'
        },
        best: {
            id: 'all-access-bundle',
            name: 'CH Prep Lab All-Access Bundle',
            price: 139,
            priceDisplay: '$139 <span class="font-semibold text-base">AUD</span>',
            image: 'https://res.cloudinary.com/dsjbibh1o/image/upload/v1781769245/Simple_A4_Lined_Paper_nddn1w.png'
        }
    };

    let selectedTier = 'better';

    function updateTierUI(tier) {
        if (!tierData[tier]) return;
        selectedTier = tier;

        // Update radio-button-style tier card visuals
        document.querySelectorAll('.tier-option').forEach(option => {
            const optionTier = option.getAttribute('data-tier');
            const radio = option.querySelector('.tier-radio');
            const dot = option.querySelector('.tier-radio-dot');

            if (optionTier === tier) {
                option.classList.remove('border-outline-variant', 'hover:border-outline', 'bg-surface-container-lowest');
                option.classList.add('border-secondary', 'bg-secondary/5', 'shadow-sm');
                if(radio) {
                    radio.classList.remove('border-outline-variant');
                    radio.classList.add('border-secondary');
                }
                if(dot) {
                    dot.classList.remove('bg-transparent');
                    dot.classList.add('bg-secondary');
                }
            } else {
                option.classList.remove('border-secondary', 'bg-secondary/5', 'shadow-sm');
                option.classList.add('border-outline-variant', 'hover:border-outline', 'bg-surface-container-lowest');
                if(radio) {
                    radio.classList.remove('border-secondary');
                    radio.classList.add('border-outline-variant');
                }
                if(dot) {
                    dot.classList.remove('bg-secondary');
                    dot.classList.add('bg-transparent');
                }
            }
        });

        // Update price display
        const priceEl = document.getElementById('tier-price');
        if (priceEl && tierData[tier]) {
            priceEl.innerHTML = tierData[tier].priceDisplay;
        }

        // Show/hide benefit panels
        document.querySelectorAll('.tier-benefits-panel').forEach(panel => {
            const panelTier = panel.getAttribute('data-benefits');
            if (panelTier === tier) {
                panel.classList.remove('hidden');
            } else {
                panel.classList.add('hidden');
            }
        });

        // Show/hide free gifts
        const freeGiftsSection = document.getElementById('free-gifts-section');
        const bonusMiniPack = document.getElementById('bonus-mini-pack');
        const bonusPrepLab = document.getElementById('bonus-prep-lab');
        
        if (freeGiftsSection) {
            if (tier === 'good') {
                freeGiftsSection.classList.add('hidden');
            } else {
                freeGiftsSection.classList.remove('hidden');
                
                if (tier === 'better') {
                    if (bonusMiniPack) bonusMiniPack.classList.remove('hidden');
                    if (bonusPrepLab) bonusPrepLab.classList.add('hidden');
                } else if (tier === 'best') {
                    if (bonusMiniPack) bonusMiniPack.classList.remove('hidden');
                    if (bonusPrepLab) bonusPrepLab.classList.remove('hidden');
                }
            }
        }
    }

    // Attach click handlers to tier option labels
    document.querySelectorAll('.tier-option').forEach(option => {
        option.addEventListener('click', function() {
            const tier = this.getAttribute('data-tier');
            if (tier) updateTierUI(tier);
        });
    });

    // Wire up add-to-cart button
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const tier = tierData[selectedTier];
            if (window.addToCart && tier) {
                window.addToCart({
                    id: tier.id,
                    name: tier.name,
                    price: tier.price,
                    image: tier.image
                });
            }
        });
    }

    // Check URL params for pre-selected tier, otherwise init default
    const params = new URLSearchParams(window.location.search);
    const urlTier = params.get('tier');
    if (urlTier && tierData[urlTier]) {
        updateTierUI(urlTier);
    } else {
        updateTierUI('better');
    }
})();
