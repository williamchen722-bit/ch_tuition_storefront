document.addEventListener('DOMContentLoaded', () => {
    // Initialize Cart State
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Migrate old cart items to new tier structure
    let migrated = false;
    cart = cart.map(item => {
        // Migrate legacy 'prep-pack' items to 'exam-vault' (Better tier)
        if (item.id === 'prep-pack') {
            item.id = 'exam-vault';
            item.name = 'Complete 2027 Exam Vault (20 Papers + 10 Mini Sprint)';
            item.price = 89;
            item.originalPrice = undefined;
            migrated = true;
        }
        return item;
    });
    // Remove legacy bonus items that were auto-added with old prep-pack
    const legacyBonusIds = ['bonus-mini-pack', 'bonus-prep-lab'];
    const hadLegacyBonuses = cart.some(item => legacyBonusIds.includes(item.id));
    if (hadLegacyBonuses) {
        cart = cart.filter(item => !legacyBonusIds.includes(item.id));
        migrated = true;
    }
    if (migrated) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Product definitions for the three tiers
    const TIER_PRODUCTS = {
        'essential-pack': {
            id: 'essential-pack',
            name: 'Essential Practice Pack (10 Papers)',
            price: 49,
            image: 'https://res.cloudinary.com/dsjbibh1o/image/upload/v1781769245/Simple_A4_Lined_Paper_nddn1w.png'
        },
        'exam-vault': {
            id: 'exam-vault',
            name: 'Complete 2027 Exam Vault (20 Papers + 10 Mini Sprint)',
            price: 89,
            image: 'https://res.cloudinary.com/dsjbibh1o/image/upload/v1781769245/Simple_A4_Lined_Paper_nddn1w.png'
        },
        'all-access-bundle': {
            id: 'all-access-bundle',
            name: 'CH Prep Lab All-Access Bundle',
            price: 139,
            image: 'https://res.cloudinary.com/dsjbibh1o/image/upload/v1781769245/Simple_A4_Lined_Paper_nddn1w.png'
        }
    };

    // Stripe checkout links per tier (update these when separate links are created)
    const CHECKOUT_LINKS = {
        'essential-pack': 'https://buy.stripe.com/5kQ14n8JIg7Z1C07KFcMM04',
        'exam-vault': 'https://buy.stripe.com/5kQ14n8JIg7Z1C07KFcMM04',
        'all-access-bundle': 'https://buy.stripe.com/5kQ14n8JIg7Z1C07KFcMM04'
    };

    // UI Elements
    const cartBadges = document.querySelectorAll('.cart-badge');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartBackdrop = document.getElementById('cart-backdrop');
    const cartCloseBtn = document.getElementById('cart-close-btn');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    const cartIconTriggers = document.querySelectorAll('.cart-icon-trigger');

    // Function to save cart to localStorage
    const saveCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    // Function to format currency
    const formatPrice = (price) => {
        const val = parseFloat(price);
        if (val === 0) return "FREE";
        return `$${val.toFixed(2)}`;
    };

    // Function to calculate total
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Update UI
    const updateCartUI = () => {
        // Update badges
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadges.forEach(badge => {
            if (totalItems > 0) {
                badge.textContent = totalItems;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        });

        // Update Drawer Items
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-on-surface-variant p-6 text-center">
                        <span class="material-symbols-outlined text-6xl mb-4 opacity-50">shopping_cart</span>
                        <p class="font-body-lg">Your cart is currently empty.</p>
                        <button id="cart-continue-shopping" class="mt-6 font-label-caps text-primary border border-outline px-6 py-2 rounded hover:bg-surface-container-low transition-colors uppercase tracking-widest text-sm">
                            Continue Shopping
                        </button>
                    </div>
                `;
                
                const continueBtn = document.getElementById('cart-continue-shopping');
                if(continueBtn) {
                    continueBtn.addEventListener('click', closeCartDrawer);
                }
            } else {
                cart.forEach((item, index) => {
                    const itemEl = document.createElement('div');
                    itemEl.className = 'flex gap-4 py-4 border-b border-outline-variant';
                    
                    const originalPriceHtml = item.originalPrice && item.originalPrice > item.price
                        ? `<p class="font-body-sm text-on-surface-variant line-through">${formatPrice(item.originalPrice)}</p>`
                        : '';
                    
                    itemEl.innerHTML = `
                        <div class="w-20 h-24 bg-surface-container-low border border-outline-variant rounded flex-shrink-0 overflow-hidden">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover mix-blend-multiply">
                        </div>
                        <div class="flex-grow flex flex-col justify-between">
                            <div>
                                <h4 class="font-body-md text-primary font-semibold line-clamp-2">${item.name}</h4>
                                <div class="flex items-baseline gap-2 mt-1">
                                    <p class="font-body-md text-primary font-bold">${formatPrice(item.price)}</p>
                                    ${originalPriceHtml}
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-2">
                                <div class="flex items-center border border-outline-variant rounded">
                                    <button class="px-2 py-1 text-on-surface hover:bg-surface-container-low transition-colors" onclick="window.updateItemQuantity('${item.id}', -1)">-</button>
                                    <span class="px-2 font-body-sm">${item.quantity}</span>
                                    <button class="px-2 py-1 text-on-surface hover:bg-surface-container-low transition-colors" onclick="window.updateItemQuantity('${item.id}', 1)">+</button>
                                </div>
                                <button class="text-on-surface-variant hover:text-error transition-colors p-1" onclick="window.removeFromCart('${item.id}')">
                                    <span class="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                        </div>
                    `;
                    cartItemsContainer.appendChild(itemEl);
                });
            }
        }

        // Update Total
        if (cartTotalEl) {
            const currentTotal = getCartTotal();
            cartTotalEl.textContent = formatPrice(currentTotal);
            
            const originalTotalEl = document.getElementById('cart-original-total');
            if (originalTotalEl) {
                const originalTotal = cart.reduce((total, item) => {
                    const origPrice = item.originalPrice !== undefined ? item.originalPrice : item.price;
                    return total + (origPrice * item.quantity);
                }, 0);
                
                if (originalTotal > currentTotal) {
                    originalTotalEl.textContent = formatPrice(originalTotal);
                    originalTotalEl.classList.remove('hidden');
                } else {
                    originalTotalEl.classList.add('hidden');
                }
            }
        }
    };

    // Open/Close Drawer Functions
    const openCartDrawer = () => {
        if (!cartDrawer || !cartBackdrop) return;
        cartBackdrop.classList.remove('hidden');
        // Small delay to allow display:block to apply before animating
        setTimeout(() => {
            cartBackdrop.classList.remove('opacity-0');
            cartDrawer.classList.remove('translate-x-full');
        }, 10);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeCartDrawer = () => {
        if (!cartDrawer || !cartBackdrop) return;
        cartDrawer.classList.add('translate-x-full');
        cartBackdrop.classList.add('opacity-0');
        setTimeout(() => {
            cartBackdrop.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    };

    // Global Window Methods for Inline HTML calls
    window.addToCart = (productObj) => {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'AddToCart', {
                content_name: productObj.name,
                currency: 'AUD',
                value: productObj.price
            });
        }
        
        // Remove any existing tier products (user can only have one tier at a time)
        const tierIds = Object.keys(TIER_PRODUCTS);
        if (tierIds.includes(productObj.id)) {
            cart = cart.filter(item => !tierIds.includes(item.id));
        }

        const existingItem = cart.find(item => item.id === productObj.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...productObj,
                quantity: 1
            });
        }
        saveCart();
        updateCartUI();
        openCartDrawer();
    };

    window.removeFromCart = (productId) => {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartUI();
    };

    window.updateItemQuantity = (productId, change) => {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                window.removeFromCart(productId);
            } else {
                saveCart();
                updateCartUI();
            }
        }
    };

    window.openCart = openCartDrawer;
    window.closeCart = closeCartDrawer;

    // Attach Event Listeners
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (cartBackdrop) cartBackdrop.addEventListener('click', (e) => {
        if (e.target === cartBackdrop) closeCartDrawer();
    });
    
    cartIconTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openCartDrawer();
        });
    });

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                // Use the checkout link for the first tier product in cart, or default
                const tierItem = cart.find(item => Object.keys(CHECKOUT_LINKS).includes(item.id));
                const checkoutUrl = tierItem 
                    ? CHECKOUT_LINKS[tierItem.id] 
                    : 'https://buy.stripe.com/5kQ14n8JIg7Z1C07KFcMM04';
                window.location.href = checkoutUrl;
            }
        });
    }

    // Initial render
    updateCartUI();
});
