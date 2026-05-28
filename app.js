// ==========================================
// NONEX CORP SHOP Application Logic & State Manager
// ==========================================

// Global Products Database
let products = [
    {
        id: "bypass-uid",
        name: "BypassUID",
        category: "bypass",
        image: "assets/bypass_uid.png",
        stock: 16,
        sold: 260,
        packages: [
            { id: "1d", name: "KEY 1 NGÀY", price: 15000, stock: 6 },
            { id: "3d", name: "KEY 3 NGÀY", price: 65000, stock: 10 },
            { id: "7d", name: "KEY 7 NGÀY", price: 120000, stock: 0 },
            { id: "30d", name: "KEY 30 NGÀY", price: 200000, stock: 0 },
            { id: "lifetime", name: "KEY LIFETIME", price: 800000, stock: 0 }
        ],
        features: [
            "Bypass Emulator Detection hiệu quả",
            "An toàn tuyệt đối 100% không lo ban account",
            "Hỗ trợ đầy đủ cho Win 10 và Win 11",
            "Tự động tối ưu hóa ping và kết nối mạng"
        ]
    },
    {
        id: "mod-menu",
        name: "MOD MENU PREMIUM",
        category: "menu",
        image: "assets/mod_menu.png",
        stock: 47,
        sold: 200,
        packages: [
            { id: "1d", name: "KEY 1 NGÀY", price: 25000, stock: 7 },
            { id: "7d", name: "KEY 7 NGÀY", price: 120000, stock: 10 },
            { id: "30d", name: "KEY 30 NGÀY", price: 350000, stock: 10 },
            { id: "lifetime", name: "LIFETIME", price: 700000, stock: 10 }
        ],
        features: [
            "Aimbot Safe/Head/Chest: Ghim đầu nhẹ, Ghim đầu chật (RISK), Ghim cổ",
            "Định vị ESP Địch, Item vật phẩm trong sinh tồn",
            "Aim Mouse: Bán awm",
            "Aim FOV: Lia tâm dịch",
            "Aim Silents: Đạn đuổi đi theo dịch (RISK)",
            "AimLock: Cùng tâm (RISK)",
            "Pull Player: Kéo dịch (RISK)",
            "Norecoil: Bắn thẳng (RISK)",
            "Ẩn màn khi livestream",
            "Cực kỳ an toàn cho tài khoản 100%"
        ]
    },
    {
        id: "supreme",
        name: "SUPREME",
        category: "supreme",
        image: "assets/supreme.png",
        stock: 56,
        sold: 280,
        packages: [
            { id: "1d", name: "KEY 1 NGÀY", price: 25000, stock: 11 },
            { id: "7d", name: "KEY 7 NGÀY", price: 120000, stock: 15 },
            { id: "30d", name: "KEY 30 NGÀY", price: 300000, stock: 15 },
            { id: "lifetime", name: "KEY LIFETIME", price: 700000, stock: 15 }
        ],
        features: [
            "Aimbot Safe | Aimbot Mouse | Silent 52 | Aimbot Delay | Aimbot Chest",
            "Aimlock tự động tìm mục tiêu",
            "No Reload - Bắn không cần nạp đạn",
            "No Recoil - Không rung giật hồng tâm",
            "Draw FOV - Vẽ vòng tròn quét Aimbot",
            "Fast Heal - Hồi máu nhanh cực đỉnh",
            "Move Heal - Vừa chạy vừa dùng bình máu",
            "Fast Rescue - Cứu đồng đội siêu tốc",
            "Pull Player - Thu hút địch về tâm (RISK)"
        ]
    },
    {
        id: "bypass-meme",
        name: "BYPASSMEME",
        category: "bypass",
        image: "assets/bypass_meme.png",
        stock: 97,
        sold: 31,
        packages: [
            { id: "1d", name: "KEY 1 NGÀY", price: 20000, stock: 23 },
            { id: "3d", name: "KEY 3 NGÀY", price: 50000, stock: 28 },
            { id: "7d", name: "KEY 7 NGÀY", price: 75000, stock: 46 }
        ],
        features: [
            "Tại sao bạn nên chọn chúng tôi?",
            "Bảo Mật Tuyệt Đối Chạy 100% Trên Thiết Bị Của Bạn",
            "CAX hoạt động hoàn toàn trên máy tính của bạn. Không có server trung gian, không có...",
            "Vậy còn Bypass UID ( hay còn gọi là Bypass Proxy ) thi sao? Bypass Proxy (hay Bypass...",
            "Do bạn sẽ phải kết nối kết nối mạng của bạn qua 1 server thứ 3, nên khi bạn đăng nhập t...",
            "Không chỉ thế họ có thể xem được lưu lượng truy cập web của bạn, cũng như các website mà bạn truy cập khi bạn đang kết nối Proxy tới server của họ",
            "Nếu bạn mua và sử dụng dịch vụ của người bán uy tín thì có thể tạm thời yên tâm rằng tài khoản của bạn an toàn",
            "Nếu bạn sử dụng sản phẩm của người bán không uy tín thì có thể gây ra mối nguy hiểm cho tài khoản game của bạn"
        ]
    },
    {
        id: "panel-ios",
        name: "PANEL IOS",
        category: "panel",
        image: "assets/panel_ios.png",
        stock: 45,
        sold: 120,
        packages: [
            { id: "1d", name: "KEY 1 NGÀY", price: 20000, stock: 10 },
            { id: "7d", name: "KEY 7 NGÀY", price: 100000, stock: 15 },
            { id: "30d", name: "KEY 30 NGÀY", price: 250000, stock: 20 },
            { id: "lifetime", name: "KEY LIFETIME", price: 800000, stock: 5 }
        ],
        features: [
            "SYNTAX CORPORATION OFFICIAL iOS PANEL",
            "iOS Panel Available Now",
            "Proxy Panel Supported - 1000% Hidden & Undetectable",
            "100% Safe System - Tournament Panel Ready",
            "iPhone & iPad All Versions Working",
            "High Profile IP & Port Support - No Network Issue",
            "No iPhone Restart - No Jailbreak Needed - No Gbox Needed",
            "Fast Setup Time — Only 5 Minutes Complete",
            "Ban / Blacklist Issue = Money Back Guarantee",
            "🎯 Features Included: Aimbot Head, Aimbot Neck, Aimbot Drag, Aimbot Body Head"
        ]
    }
];

// App State
let currentUser = null;
let userBalance = 0;
let userOrders = [];
let cashFlowLogs = [];
let depositLogs = [];
let captchaAnswer = 0;
let userTotalDeposits = 0;

// Deposit gateway state
let selectedGateway = null;
let depositAmount = 0;

// Purchase Modal State
let selectedProduct = null;
let selectedPackage = null;
let purchaseQty = 1;

// Simulated Users for Live Purchases Feed
const mockUsernames = ["tru****", "cao****", "coo****", "mem****", "gam****", "Kha****", "phong****", "milo****", "leduy****", "bao****"];
const mockFeedProducts = ["BypassUID", "MOD MENU PREMIUM", "SUPREME", "BYPASSMEME", "PANEL IOS"];
const mockTimeSuffixes = ["vừa mua", "2 phút trước", "5 phút trước", "15 giây trước", "30 giây trước"];

// DOM Elements
const navActionsArea = document.getElementById("nav-actions-area");
const statsBalance = document.getElementById("stats-balance");
const statsOrders = document.getElementById("stats-orders");
const productsListGrid = document.getElementById("products-list-grid");
const recentOrdersFeed = document.getElementById("recent-orders-feed-container");

// Purchase modal UI
const overlayBackdrop = document.getElementById("overlay-backdrop");
const modalPurchaseKey = document.getElementById("modal-purchase-key");
const buyModalTitle = document.getElementById("buy-modal-title");
const buyModalTypeTag = document.getElementById("buy-modal-type-tag");
const buyModalImg = document.getElementById("buy-modal-img");
const buyModalFeatures = document.getElementById("buy-modal-features");
const buyModalDisplayPrice = document.getElementById("buy-modal-display-price");
const buyModalStockQty = document.getElementById("buy-modal-stock-qty");
const buyModalSoldQty = document.getElementById("buy-modal-sold-qty");
const buyModalPackagesContainer = document.getElementById("buy-modal-packages-container");
const buyQtyInput = document.getElementById("buy-qty-input");

const buyInvoiceUnitPrice = document.getElementById("buy-invoice-unit-price");
const buyInvoiceQty = document.getElementById("buy-invoice-qty");
const buyInvoiceSubtotal = document.getElementById("buy-invoice-subtotal");
const buyInvoiceBalance = document.getElementById("buy-invoice-balance");
const buyInvoiceRemainingBalance = document.getElementById("buy-invoice-remaining-balance");
const buyInvoiceRemainingRow = document.getElementById("buy-invoice-remaining-row");

// Order layout views
const ordersEmptyBox = document.getElementById("orders-empty-box");
const ordersStatTotal = document.getElementById("orders-stat-total");
const ordersStatCompleted = document.getElementById("orders-stat-completed");

// Persistent State Loader/Saver
function loadUserState() {
    if (!currentUser) return;
    const balanceKey = `nonex_${currentUser}_balance`;
    const ordersKey = `nonex_${currentUser}_orders`;
    const flowKey = `nonex_${currentUser}_flow`;
    const depositKey = `nonex_${currentUser}_deposits`;

    userBalance = parseInt(localStorage.getItem(balanceKey) || "0");
    userTotalDeposits = parseInt(localStorage.getItem(`nonex_${currentUser}_total_deposits`) || "0");
    
    try {
        userOrders = JSON.parse(localStorage.getItem(ordersKey) || "[]");
    } catch(e) {
        userOrders = [];
    }

    try {
        cashFlowLogs = JSON.parse(localStorage.getItem(flowKey) || "[]");
    } catch(e) {
        cashFlowLogs = [];
    }

    try {
        depositLogs = JSON.parse(localStorage.getItem(depositKey) || "[]");
    } catch(e) {
        depositLogs = [];
    }
}

// Function to save user data under nonex brand namespace
function saveUserState() {
    if (!currentUser) return;
    const balanceKey = `nonex_${currentUser}_balance`;
    const ordersKey = `nonex_${currentUser}_orders`;
    const flowKey = `nonex_${currentUser}_flow`;
    const depositKey = `nonex_${currentUser}_deposits`;

    localStorage.setItem(balanceKey, userBalance);
    localStorage.setItem(ordersKey, JSON.stringify(userOrders));
    localStorage.setItem(flowKey, JSON.stringify(cashFlowLogs));
    localStorage.setItem(depositKey, JSON.stringify(depositLogs));
    localStorage.setItem(`nonex_${currentUser}_total_deposits`, userTotalDeposits);

    localStorage.setItem("nonex_session_user", currentUser);
    localStorage.setItem("nonex_session_balance", userBalance);
}

function showMiddlePopup(message) {
    // Remove existing if any
    const existingPopup = document.getElementById("promo-announcement-modal");
    if (existingPopup) existingPopup.remove();
    const existingBackdrop = document.getElementById("promo-backdrop");
    if (existingBackdrop) existingBackdrop.remove();

    const popupEl = document.createElement("div");
    popupEl.id = "promo-announcement-modal";
    popupEl.style.position = "fixed";
    popupEl.style.top = "50%";
    popupEl.style.left = "50%";
    popupEl.style.transform = "translate(-50%, -50%) scale(0.9)";
    popupEl.style.background = "rgba(18, 18, 22, 0.95)";
    popupEl.style.border = "1px solid rgba(88, 101, 242, 0.3)";
    popupEl.style.borderRadius = "16px";
    popupEl.style.padding = "2rem";
    popupEl.style.zIndex = "1000";
    popupEl.style.width = "90%";
    popupEl.style.maxWidth = "450px";
    popupEl.style.textAlign = "center";
    popupEl.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(88, 101, 242, 0.2)";
    popupEl.style.transition = "all 0.3s ease";
    popupEl.style.backdropFilter = "blur(10px)";
    popupEl.style.opacity = "1";
    
    popupEl.innerHTML = `
        <div style="font-size: 3rem; color: #ffca28; margin-bottom: 1rem;"><i class="fa-solid fa-gift"></i></div>
        <h3 style="font-size: 1.3rem; font-weight: 800; color: #ffffff; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.5px;">Quà Tặng Thành Viên</h3>
        <p style="font-size: 0.95rem; color: #b4b9c2; line-height: 1.6; margin-bottom: 1.8rem;">${message}</p>
        <button id="btn-close-promo-popup" style="background: #3b82f6; color: white; border: none; padding: 0.7rem 2rem; border-radius: 8px; font-weight: 700; cursor: pointer; width: 100%; transition: all 0.2s; text-transform: uppercase; letter-spacing: 1px;">Xác nhận</button>
    `;
    
    const backdropEl = document.createElement("div");
    backdropEl.id = "promo-backdrop";
    backdropEl.style.position = "fixed";
    backdropEl.style.top = "0";
    backdropEl.style.left = "0";
    backdropEl.style.width = "100vw";
    backdropEl.style.height = "100vh";
    backdropEl.style.background = "rgba(0, 0, 0, 0.6)";
    backdropEl.style.backdropFilter = "blur(5px)";
    backdropEl.style.zIndex = "999";
    backdropEl.style.transition = "all 0.3s ease";
    
    document.body.appendChild(backdropEl);
    document.body.appendChild(popupEl);
    
    setTimeout(() => {
        popupEl.style.transform = "translate(-50%, -50%) scale(1)";
    }, 50);
    
    document.getElementById("btn-close-promo-popup").onclick = () => {
        popupEl.style.transform = "translate(-50%, -50%) scale(0.9)";
        popupEl.style.opacity = "0";
        backdropEl.style.opacity = "0";
        setTimeout(() => {
            popupEl.remove();
            backdropEl.remove();
        }, 300);
    };
}

function checkAndApplyPromo(providerName) {
    if (!currentUser) return;
    const promoAppliedKey = `nonex_${currentUser}_promo_applied`;

    if (localStorage.getItem(promoAppliedKey) !== "true") {
        userBalance += 50000;
        cashFlowLogs.unshift({
            desc: `Khuyến mãi đăng nhập/đăng ký thành viên (${providerName})`,
            date: getCurrentDateTimeString(),
            change: 50000,
            balance: userBalance
        });
        localStorage.setItem(promoAppliedKey, "true");
        saveUserState();
        
        // Show middle popup
        showMiddlePopup("Chúc mừng bạn đã đăng ký hoặc đăng nhập thành công và được khuyến mãi 50K!");
    }
}

// Load Initial Data
window.addEventListener("DOMContentLoaded", () => {
    generateCaptcha("login");
    generateCaptcha("register");
    renderCatalog();
    initLivePurchasesFeed();

    // Check if session exists in memory
    const savedUser = localStorage.getItem("nonex_session_user");
    if (savedUser) {
        currentUser = savedUser;
        loadUserState();
        updateUserUI();
        showToast(`Chào mừng quay lại, ${currentUser}!`, "success");
    } else {
        updateUserUI();
    }

    // Close select dropdown when clicking outside
    window.addEventListener("click", (e) => {
        const selectWrap = document.querySelector(".custom-select-wrapper");
        if (selectWrap && !selectWrap.contains(e.target)) {
            const dropdown = document.getElementById("gateway-options-list");
            if (dropdown) dropdown.classList.remove("show");
            const chevron = document.getElementById("gateway-chevron");
            if (chevron) {
                chevron.classList.remove("fa-chevron-up");
                chevron.classList.add("fa-chevron-down");
            }
        }
    });
});

// ==========================================
// Routing Engine
// ==========================================
function navigate(pageId) {
    // Hide all pages
    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
    
    // Deactivate all sidebar items
    document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".submenu-item").forEach(item => item.classList.remove("active"));
    document.getElementById("deposit-submenu").classList.remove("show");

    // Close mobile sidebar if open
    document.getElementById("app-sidebar").classList.remove("open");

    // Activate selected page and link
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add("active");
    }

    // Nav visual activation mapping
    if (pageId === "home") {
        document.getElementById("menu-home").classList.add("active");
    } else if (pageId === "profile") {
        document.getElementById("menu-profile").classList.add("active");
    } else if (pageId === "orders") {
        document.getElementById("menu-orders").classList.add("active");
    } else if (pageId === "history") {
        document.getElementById("menu-history").classList.add("active");
    } else if (pageId === "deposit-bank") {
        document.getElementById("menu-deposit-parent").classList.add("active");
        document.getElementById("deposit-submenu").classList.add("show");
        document.getElementById("menu-dep-bank").classList.add("active");
    } else if (pageId === "deposit-scratch") {
        document.getElementById("menu-deposit-parent").classList.add("active");
        document.getElementById("deposit-submenu").classList.add("show");
        document.getElementById("menu-dep-scratch").classList.add("active");
    } else if (pageId === "news") {
        document.getElementById("menu-news").classList.add("active");
    } else if (pageId === "downloads") {
        document.getElementById("menu-downloads").classList.add("active");
    } else if (pageId === "contact") {
        document.getElementById("menu-contact").classList.add("active");
    } else if (pageId === "login" || pageId === "register") {
        // Auth views do not map to sidebar links
    }
}

function toggleSidebar() {
    document.getElementById("app-sidebar").classList.toggle("open");
}

function toggleDepositDropdown() {
    const submenu = document.getElementById("deposit-submenu");
    submenu.classList.toggle("show");
}

// ==========================================
// Authentication: Captcha & Login
// ==========================================
function generateCaptcha(target) {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const isAddition = Math.random() > 0.5;
    
    let question = "";
    if (isAddition) {
        question = `${num1} + ${num2} = ?`;
        captchaAnswer = num1 + num2;
    } else {
        question = `${num1} - ${num2} = ?`;
        captchaAnswer = num1 - num2;
    }

    const display = document.getElementById(`${target}-captcha-display`);
    if (display) {
        display.textContent = question;
    }
}

function handleLoginSubmit(event) {
    event.preventDefault();

    const user = document.getElementById("login-user").value.trim();
    const pass = document.getElementById("login-pass").value;
    const captchaVal = parseInt(document.getElementById("login-captcha-input").value);

    // Validate Captcha
    if (captchaVal !== captchaAnswer) {
        showToast("Mã xác minh bảo vệ chưa chính xác!", "error");
        generateCaptcha("login");
        document.getElementById("login-captcha-input").value = "";
        return;
    }

    // Success Authentication Simulator
    currentUser = user;
    loadUserState();
    checkAndApplyPromo("Đăng nhập");
    saveUserState();

    updateUserUI();
    showToast(`Đăng nhập thành công! Xin chào ${currentUser}`, "success");
    
    // Reset form
    document.getElementById("login-form").reset();
    generateCaptcha("login");

    navigate("home");
}

function handleRegisterSubmit(event) {
    event.preventDefault();

    const user = document.getElementById("register-user").value.trim();
    const email = document.getElementById("register-email").value;
    const captchaVal = parseInt(document.getElementById("register-captcha-input").value);

    if (captchaVal !== captchaAnswer) {
        showToast("Mã xác minh bảo vệ chưa chính xác!", "error");
        generateCaptcha("register");
        document.getElementById("register-captcha-input").value = "";
        return;
    }

    showToast("Đăng ký tài khoản thành công! Hãy tiến hành đăng nhập.", "success");
    document.getElementById("register-form").reset();
    generateCaptcha("register");
    navigate("login");
}

function simulateSocialLogin(provider) {
    currentUser = provider + "User_" + Math.floor(100 + Math.random() * 900);
    
    // Check if they already exist, if so load
    loadUserState();
    checkAndApplyPromo(provider);
    saveUserState();

    updateUserUI();
    navigate("home");
}

function logoutUser() {
    currentUser = null;
    userBalance = 0;
    userOrders = [];
    cashFlowLogs = [];
    depositLogs = [];

    // Reset deposit form display states
    selectedGateway = null;
    depositAmount = 0;
    const amountGroup = document.getElementById("deposit-amount-group");
    if (amountGroup) {
        amountGroup.style.display = "none";
        document.getElementById("btn-generate-qr").style.display = "none";
        document.getElementById("qr-placeholder-state").style.display = "block";
        document.getElementById("qr-active-state").style.display = "none";
        document.getElementById("deposit-amount-input").value = "";
        document.getElementById("selected-gateway-label").innerHTML = `<i class="fa-solid fa-building-columns"></i> Bấm để chọn ngân hàng/ví...`;
    }
    
    localStorage.removeItem("nonex_session_user");
    localStorage.removeItem("nonex_session_balance");

    updateUserUI();
    showToast("Đã đăng xuất tài khoản.", "success");
    navigate("home");
}

function updateUserUI() {
    const actionsArea = document.getElementById("nav-actions-area");
    
    if (currentUser) {
        // Logged in Navbar
        actionsArea.innerHTML = `
            <button class="btn-settings" onclick="showToast('Cài đặt hệ thống')"><i class="fa-solid fa-sliders"></i></button>
            <button class="btn-balance-display" onclick="navigate('deposit-bank')">
                <i class="fa-solid fa-credit-card"></i> <span id="nav-user-balance">${formatCurrency(userBalance)}</span>
            </button>
            <div class="user-profile-widget" onclick="navigate('profile')">
                <img src="https://avatars.githubusercontent.com/u/1024025?v=4" class="user-avatar" alt="Avatar">
                <span class="user-username">${currentUser}</span>
            </div>
        `;

        // Update home dashboard dynamic stats card
        statsBalance.textContent = formatCurrency(userBalance);
        document.getElementById("profile-user-display").textContent = currentUser;
        document.getElementById("profile-balance-display").textContent = formatCurrency(userBalance);
    } else {
        // Guest Navbar
        actionsArea.innerHTML = `
            <button class="btn-settings" onclick="showToast('Cài đặt hệ thống')"><i class="fa-solid fa-sliders"></i></button>
            <button class="btn-login" onclick="navigate('login')">Đăng nhập</button>
            <button class="btn-register" onclick="navigate('register')">Đăng ký</button>
        `;

        statsBalance.textContent = "0đ";
        document.getElementById("profile-user-display").textContent = "Chưa đăng nhập";
        document.getElementById("profile-balance-display").textContent = "0đ";
    }

    // Refresh orders and history states
    updateOrdersTable();
    updateCashFlowTable();
    updateDepositHistoryTable();
}

// ==========================================
// Product Catalog Engine
// ==========================================
function renderCatalog() {
    productsListGrid.innerHTML = "";

    products.forEach(p => {
        // Calculate min/max price tiers
        const prices = p.packages.map(pkg => pkg.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="card-header-tags">
                <span class="card-tag prod">Sản phẩm</span>
                <span class="card-tag stock">Còn hàng</span>
            </div>
            <div class="card-image-box">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="card-info">
                <h3 class="card-name">${p.name}</h3>
                <ul class="card-specs-list">
                    ${p.features.slice(0, 3).map(feat => `<li>${feat.length > 50 ? feat.substring(0, 47) + '...' : feat}</li>`).join("")}
                </ul>
                <div class="card-bottom-actions">
                    <div class="card-price-tier">
                        <span class="price-title">Giá bán</span>
                        <span class="price-val">${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}</span>
                    </div>
                    <button class="btn-card-buy" onclick="openPurchaseModal('${p.id}')">
                        <i class="fa-solid fa-cart-shopping"></i> Mua
                    </button>
                </div>
            </div>
        `;
        productsListGrid.appendChild(card);
    });
}

function handleSearch(event) {
    if (event.key === "Enter") {
        const input = document.getElementById("search-input").value.trim().toLowerCase();
        if (input === "") {
            renderCatalog();
            return;
        }
        
        // Filter catalog cards
        const matches = products.filter(p => p.name.toLowerCase().includes(input));
        productsListGrid.innerHTML = "";

        if (matches.length === 0) {
            productsListGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                    <p>Không tìm thấy sản phẩm nào phù hợp.</p>
                </div>
            `;
            return;
        }

        matches.forEach(p => {
            const prices = p.packages.map(pkg => pkg.price);
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);

            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="card-header-tags">
                    <span class="card-tag prod">Sản phẩm</span>
                    <span class="card-tag stock">Còn hàng</span>
                </div>
                <div class="card-image-box">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="card-info">
                    <h3 class="card-name">${p.name}</h3>
                    <ul class="card-specs-list">
                        ${p.features.slice(0, 3).map(feat => `<li>${feat}</li>`).join("")}
                    </ul>
                    <div class="card-bottom-actions">
                        <div class="card-price-tier">
                            <span class="price-title">Giá bán</span>
                            <span class="price-val">${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}</span>
                        </div>
                        <button class="btn-card-buy" onclick="openPurchaseModal('${p.id}')">
                            <i class="fa-solid fa-cart-shopping"></i> Mua
                        </button>
                    </div>
                </div>
            `;
            productsListGrid.appendChild(card);
        });

        // Auto-scroll to catalog grid area
        document.getElementById("products-catalog-section").scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// Purchase Modals (High Fidelity UI matching screenshots)
// ==========================================
function openPurchaseModal(productId) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    // Reset initial modal states
    selectedPackage = selectedProduct.packages.find(pkg => pkg.stock > 0) || selectedProduct.packages[0];
    purchaseQty = 1;
    buyQtyInput.value = 1;
    document.getElementById("buy-promo-code").value = "";

    // Render left panel
    buyModalTitle.textContent = selectedProduct.name;
    buyModalImg.src = selectedProduct.image;
    
    // Fill description features
    buyModalFeatures.innerHTML = "";
    selectedProduct.features.forEach(feat => {
        const li = document.createElement("li");
        li.textContent = feat;
        buyModalFeatures.appendChild(li);
    });

    // Populate packages
    renderPackages();

    // Trigger UI open
    openOverlay();
    modalPurchaseKey.classList.add("open");

    // Live calculate invoice
    calculateInvoice();
}

function renderPackages() {
    buyModalPackagesContainer.innerHTML = "";

    selectedProduct.packages.forEach(pkg => {
        const item = document.createElement("div");
        item.className = `package-item ${selectedPackage.id === pkg.id ? 'active' : ''} ${pkg.stock === 0 ? 'disabled' : ''}`;
        item.innerHTML = `
            <div class="package-name-box">
                <span class="package-name">${pkg.name}</span>
                <span class="package-stock">Còn ${pkg.stock} key</span>
            </div>
            <span class="package-price">${formatCurrency(pkg.price)}</span>
        `;

        if (pkg.stock > 0) {
            item.onclick = () => {
                selectedPackage = pkg;
                purchaseQty = 1;
                buyQtyInput.value = 1;
                renderPackages();
                calculateInvoice();
            };
        }
        buyModalPackagesContainer.appendChild(item);
    });
}

function updatePurchaseQty(delta) {
    if (!selectedPackage) return;
    
    const newQty = purchaseQty + delta;
    if (newQty < 1) return;
    if (newQty > selectedPackage.stock) {
        showToast(`Chỉ còn lại tối đa ${selectedPackage.stock} key có sẵn!`, "error");
        return;
    }

    purchaseQty = newQty;
    buyQtyInput.value = purchaseQty;
    calculateInvoice();
}

function calculateInvoice() {
    if (!selectedPackage) return;

    // Meta details
    buyModalDisplayPrice.textContent = formatCurrency(selectedPackage.price);
    buyModalStockQty.textContent = selectedPackage.stock;
    buyModalSoldQty.textContent = selectedProduct.sold;

    // Unit info
    buyInvoiceUnitPrice.textContent = formatCurrency(selectedPackage.price);
    buyInvoiceQty.textContent = purchaseQty;
    
    const subtotal = selectedPackage.price * purchaseQty;
    buyInvoiceSubtotal.textContent = formatCurrency(subtotal);
    
    buyInvoiceBalance.textContent = formatCurrency(userBalance);
    
    const remaining = userBalance - subtotal;
    buyInvoiceRemainingBalance.textContent = formatCurrency(remaining);

    // Apply color logic based on sufficient funds
    if (remaining < 0) {
        buyInvoiceRemainingRow.className = "invoice-row highlight negative";
    } else {
        buyInvoiceRemainingRow.className = "invoice-row highlight positive";
    }
}

function applyKeyPromo() {
    showToast("Mã giảm giá đã hết hạn hoặc không tồn tại!", "error");
}

function confirmPurchaseKey() {
    if (!currentUser) {
        showToast("Vui lòng đăng nhập tài khoản trước khi mua sắm!", "error");
        closePurchaseModal();
        navigate("login");
        return;
    }

    // Special promotion deposit check
    if (userTotalDeposits === 0) {
        showMiddlePopup("Bạn cần nạp thêm tiền để mua. Số dư 50K được khuyến mãi nên bạn cần nạp thêm để mua và nhớ là nạp phải trên 50K.");
        return;
    }
    
    if (userTotalDeposits <= 50000) {
        showMiddlePopup("Bạn cần nạp trên 50K để mua đơn hàng và có 50K khuyến mãi (Ví dụ: Tổng lại bạn đã có 100K).");
        return;
    }

    const totalCost = selectedPackage.price * purchaseQty;
    if (userBalance < totalCost) {
        showToast("Số dư tài khoản không đủ! Hãy tiến hành nạp tiền.", "error");
        return;
    }

    // Process Transaction
    userBalance -= totalCost;
    selectedPackage.stock -= purchaseQty;
    selectedProduct.stock -= purchaseQty;
    selectedProduct.sold += purchaseQty;

    // Generate keys
    const generatedKeys = [];
    for (let i = 0; i < purchaseQty; i++) {
        const key = `NONEX-KEY-${generateRandomKey()}`;
        generatedKeys.push(key);
    }

    // Save order details to history list
    const orderRecord = {
        name: `${selectedProduct.name} - ${selectedPackage.name}`,
        date: getCurrentDateTimeString(),
        qty: purchaseQty,
        price: totalCost,
        keys: generatedKeys
    };
    userOrders.push(orderRecord);

    // Save cash flow entry
    cashFlowLogs.unshift({
        desc: `Thanh toán đơn hàng ${selectedProduct.name} - ${selectedPackage.name} (x${purchaseQty})`,
        date: getCurrentDateTimeString(),
        change: -totalCost,
        balance: userBalance
    });

    saveUserState();

    showToast("Thanh toán thành công! Đơn hàng đã được thêm vào mục Đơn hàng.", "success");

    updateUserUI();
    renderCatalog();
    closePurchaseModal();

    navigate("orders");
}

function closePurchaseModal() {
    modalPurchaseKey.classList.remove("open");
    closeOverlay();
}

function closeAllModals() {
    closePurchaseModal();
}

// ==========================================
// Wallet Simulated Topups & QR Custom Selection
// ==========================================
function toggleDepositDropdownSelect(event) {
    event.stopPropagation();
    const dropdown = document.getElementById("gateway-options-list");
    const chevron = document.getElementById("gateway-chevron");
    
    dropdown.classList.toggle("show");
    
    if (dropdown.classList.contains("show")) {
        chevron.classList.remove("fa-chevron-down");
        chevron.classList.add("fa-chevron-up");
    } else {
        chevron.classList.remove("fa-chevron-up");
        chevron.classList.add("fa-chevron-down");
    }
}

function selectGateway(gatewayType) {
    selectedGateway = gatewayType;
    
    const dropdown = document.getElementById("gateway-options-list");
    dropdown.classList.remove("show");
    
    const chevron = document.getElementById("gateway-chevron");
    chevron.classList.remove("fa-chevron-up");
    chevron.classList.add("fa-chevron-down");

    const label = document.getElementById("selected-gateway-label");
    const amountGroup = document.getElementById("deposit-amount-group");
    const btnGen = document.getElementById("btn-generate-qr");
    const inputAmount = document.getElementById("deposit-amount-input");

    // Reset amount input
    inputAmount.value = "";
    amountGroup.style.display = "flex";
    btnGen.style.display = "block";
    btnGen.disabled = true;

    // Reset QR states
    document.getElementById("qr-placeholder-state").style.display = "block";
    document.getElementById("qr-active-state").style.display = "none";

    if (gatewayType === 'mb') {
        label.innerHTML = `<i class="fa-solid fa-building-columns" style="color: var(--accent-blue);"></i> MB Bank (Quân Đội) - STK: 0365627634`;
    } else if (gatewayType === 'binance') {
        label.innerHTML = `<i class="fa-brands fa-ethereum" style="color: #f0b90b;"></i> Binance Pay - ID: 1125940509`;
    }
}

function onDepositAmountChange() {
    const amountVal = parseInt(document.getElementById("deposit-amount-input").value);
    const btnGen = document.getElementById("btn-generate-qr");

    if (!isNaN(amountVal) && amountVal >= 10000) {
        btnGen.disabled = false;
    } else {
        btnGen.disabled = true;
    }
}

function generateQRDeposit() {
    if (!currentUser) {
        showToast("Vui lòng đăng nhập tài khoản trước khi nạp tiền!", "error");
        return;
    }

    const amountVal = parseInt(document.getElementById("deposit-amount-input").value);
    if (isNaN(amountVal) || amountVal < 10000) {
        showToast("Số tiền tối thiểu cần nạp là 10.000đ!", "error");
        return;
    }

    depositAmount = amountVal;
    
    const qrPlaceholder = document.getElementById("qr-placeholder-state");
    const qrActive = document.getElementById("qr-active-state");
    const qrImg = document.getElementById("qr-code-img");
    
    qrPlaceholder.style.display = "none";
    qrActive.style.display = "block";

    const memoText = `NONEXCORPSHOP ${currentUser.toUpperCase()}`;

    if (selectedGateway === 'mb') {
        document.getElementById("qr-val-gateway").textContent = "MB Bank (Quân Đội)";
        document.getElementById("qr-val-stk").innerHTML = `0365627634 <button class="btn-copy" onclick="copyTextValue('qr-val-stk')">Copy</button>`;
        document.getElementById("qr-val-ctk").textContent = "LE DUY BAO PHONG";
        document.getElementById("qr-ctk-row").style.display = "flex";
        document.getElementById("qr-val-amount").textContent = formatCurrency(depositAmount);
        document.getElementById("qr-val-memo").innerHTML = `${memoText} <button class="btn-copy" onclick="copyTextValue('qr-val-memo')">Copy</button>`;
        
        // VietQR live payment API integration
        qrImg.src = `https://img.vietqr.io/image/MB-0365627634-compact2.png?amount=${depositAmount}&addInfo=${encodeURIComponent(memoText)}&accountName=LE%20DUY%20BAO%20PHONG`;
    } else if (selectedGateway === 'binance') {
        document.getElementById("qr-val-gateway").textContent = "Binance Pay";
        document.getElementById("qr-val-stk").innerHTML = `1125940509 <button class="btn-copy" onclick="copyTextValue('qr-val-stk')">Copy</button>`;
        document.getElementById("qr-ctk-row").style.display = "none";
        document.getElementById("qr-val-amount").textContent = formatCurrency(depositAmount) + " (đã quy đổi USDT)";
        document.getElementById("qr-val-memo").innerHTML = `${memoText} <button class="btn-copy" onclick="copyTextValue('qr-val-memo')">Copy</button>`;
        
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent('binance-pay://id=1125940509&amount=' + depositAmount + '&memo=' + memoText)}`;
    }

    // Add a pending deposit history entry
    const newLog = {
        date: getCurrentDateTimeString(),
        gateway: selectedGateway === 'mb' ? "MB Bank" : "Binance Pay",
        amount: depositAmount,
        memo: memoText,
        status: "pending"
    };
    
    depositLogs.unshift(newLog);
    saveUserState();
    updateDepositHistoryTable();
    showToast("Đã tạo lệnh nạp tiền! Vui lòng chuyển khoản đúng thông tin và nội dung.", "success");
}

function simulateQRDepositSuccess() {
    const pendingLog = depositLogs.find(log => log.status === "pending");
    if (!pendingLog) {
        showToast("Không tìm thấy lệnh nạp tiền đang chờ nào!", "error");
        return;
    }

    showToast("Đang xác thực giao dịch chuyển khoản...");
    
    setTimeout(() => {
        pendingLog.status = "success";
        userBalance += pendingLog.amount;
        userTotalDeposits += pendingLog.amount;
        
        // Log to Cash Flow
        cashFlowLogs.unshift({
            desc: `Nạp tiền tự động qua ${pendingLog.gateway}`,
            date: getCurrentDateTimeString(),
            change: pendingLog.amount,
            balance: userBalance
        });

        saveUserState();
        updateUserUI();
        showToast(`Giả lập nạp tiền thành công! Cộng số dư +${formatCurrency(pendingLog.amount)}`, "success");
        
        // Reset QR display states
        document.getElementById("qr-placeholder-state").style.display = "block";
        document.getElementById("qr-active-state").style.display = "none";
        document.getElementById("deposit-amount-input").value = "";
        
        selectedGateway = null;
        document.getElementById("deposit-amount-group").style.display = "none";
        document.getElementById("btn-generate-qr").style.display = "none";
        document.getElementById("selected-gateway-label").innerHTML = `<i class="fa-solid fa-building-columns"></i> Bấm để chọn ngân hàng/ví...`;
    }, 1500);
}

function updateDepositHistoryTable() {
    const depositHistoryWrapper = document.getElementById("deposit-history-wrapper");
    const depositHistoryEmpty = document.getElementById("deposit-history-empty");
    const depositHistoryListBody = document.getElementById("deposit-history-list-body");

    if (!depositHistoryListBody) return;
    depositHistoryListBody.innerHTML = "";

    if (depositLogs.length === 0) {
        depositHistoryWrapper.style.display = "none";
        depositHistoryEmpty.style.display = "block";
        return;
    }

    depositHistoryWrapper.style.display = "block";
    depositHistoryEmpty.style.display = "none";

    depositLogs.forEach(log => {
        const tr = document.createElement("tr");
        
        const statusBadge = log.status === "success" 
            ? `<span class="status-badge success">Thành công</span>`
            : `<span class="status-badge pending">Chờ thanh toán</span>`;

        tr.innerHTML = `
            <td style="color: var(--text-secondary);">${log.date}</td>
            <td style="font-weight: 700; color: #ffffff;">${log.gateway}</td>
            <td style="color: var(--accent-green); font-weight: 800;">+${formatCurrency(log.amount)}</td>
            <td style="font-family: monospace; font-weight: 600;">${log.memo}</td>
            <td>${statusBadge}</td>
        `;
        depositHistoryListBody.appendChild(tr);
    });
}

function copyTextValue(elementId) {
    const element = document.getElementById(elementId);
    let text = element.innerText || element.textContent;
    text = text.replace(/Copy/g, "").trim();
    navigator.clipboard.writeText(text).then(() => {
        showToast("Đã sao chép nội dung!", "success");
    });
}

function handleScratchSubmit(event) {
    event.preventDefault();

    if (!currentUser) {
        showToast("Vui lòng đăng nhập tài khoản trước!", "error");
        return;
    }

    const telco = document.getElementById("scratch-telco").value;
    const amount = parseInt(document.getElementById("scratch-amount").value);
    const code = document.getElementById("scratch-code").value.trim();
    const seri = document.getElementById("scratch-seri").value.trim();

    if (code.length < 10 || seri.length < 10) {
        showToast("Mã thẻ hoặc số Seri không đúng định dạng!", "error");
        return;
    }

    showToast("Đang kiểm tra bảo mật thẻ cào...");
    
    setTimeout(() => {
        // Calculate exact fee rates from selection table
        const rates = {
            "Viettel": 0.80,
            "Vinaphone": 0.78,
            "Mobifone": 0.75,
            "Zing": 0.78
        };
        const rate = rates[telco] || 0.90;
        const credit = amount * rate;
        const discountPercent = Math.round((1 - rate) * 100);

        userBalance += credit;
        userTotalDeposits += credit;

        // Log cash flow
        cashFlowLogs.unshift({
            desc: `Nạp thẻ cào ${telco} ${formatCurrency(amount)} (Thực nhận ${Math.round(rate * 100)}%)`,
            date: getCurrentDateTimeString(),
            change: credit,
            balance: userBalance
        });

        saveUserState();

        updateUserUI();
        showToast(`Thẻ cào ${telco} hợp lệ! Cộng số dư +${formatCurrency(credit)} (chiết khấu ${discountPercent}%)`, "success");
        
        // Clear fields
        document.getElementById("scratch-code").value = "";
        document.getElementById("scratch-seri").value = "";
    }, 2000);
}

// ==========================================
// Orders & History Management
// ==========================================
function updateOrdersTable() {
    const totalQty = userOrders.reduce((sum, item) => sum + item.qty, 0);
    ordersStatTotal.textContent = totalQty;
    ordersStatCompleted.textContent = totalQty;
    statsOrders.textContent = totalQty;

    const ordersTableContainer = document.getElementById("orders-table-container");
    const ordersListBody = document.getElementById("orders-list-body");

    if (!ordersListBody) return;
    ordersListBody.innerHTML = "";

    if (userOrders.length === 0) {
        ordersEmptyBox.style.display = "block";
        ordersTableContainer.style.display = "none";
        return;
    }

    ordersEmptyBox.style.display = "none";
    ordersTableContainer.style.display = "block";

    userOrders.forEach(o => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="font-weight: 700;">${o.name}</td>
            <td style="color: var(--text-secondary);">${o.date}</td>
            <td style="font-weight: 700;">${o.qty}</td>
            <td style="color: var(--accent-blue); font-weight: 800;">${formatCurrency(o.price)}</td>
            <td>
                <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                    ${o.keys.map(key => `
                        <span class="license-key-display">
                            ${key} 
                            <button class="btn-copy" onclick="copyValue('${key}')"><i class="fa-solid fa-copy"></i></button>
                        </span>
                    `).join("")}
                </div>
            </td>
        `;
        ordersListBody.appendChild(tr);
    });
}

function updateCashFlowTable() {
    const historyTableContainer = document.getElementById("history-table-container");
    const historyEmptyView = document.getElementById("history-empty-view");
    const historyFlowListBody = document.getElementById("history-flow-list-body");

    if (!historyFlowListBody) return;
    historyFlowListBody.innerHTML = "";

    if (cashFlowLogs.length === 0) {
        historyTableContainer.style.display = "none";
        historyEmptyView.style.display = "flex";
        return;
    }

    historyTableContainer.style.display = "block";
    historyEmptyView.style.display = "none";

    cashFlowLogs.forEach(log => {
        const tr = document.createElement("tr");
        
        const isExpense = log.change < 0;
        const changeStr = isExpense ? `-${formatCurrency(Math.abs(log.change))}` : `+${formatCurrency(log.change)}`;
        const changeStyle = isExpense ? "color: var(--accent-red); font-weight: 800;" : "color: var(--accent-green); font-weight: 800;";

        tr.innerHTML = `
            <td style="font-weight: 600; color: #ffffff;">${log.desc}</td>
            <td style="color: var(--text-secondary);">${log.date}</td>
            <td style="${changeStyle}">${changeStr}</td>
            <td style="color: var(--accent-blue); font-weight: 700;">${formatCurrency(log.balance)}</td>
        `;
        historyFlowListBody.appendChild(tr);
    });
}

// ==========================================
// Recent Order Simulated Feed
// ==========================================
function initLivePurchasesFeed() {
    recentOrdersFeed.innerHTML = "";
    
    // Seed initial 10 records
    for (let i = 0; i < 10; i++) {
        const feedItem = createMockFeedItem();
        recentOrdersFeed.appendChild(feedItem);
    }

    // Interval loader to add new mock items to simulate dynamic activity
    setInterval(() => {
        const newItem = createMockFeedItem();
        recentOrdersFeed.insertBefore(newItem, recentOrdersFeed.firstChild);
        
        // Remove bottom item to maintain feed sizing
        if (recentOrdersFeed.children.length > 10) {
            recentOrdersFeed.lastChild.remove();
        }
    }, 6000);
}

function createMockFeedItem() {
    const user = mockUsernames[Math.floor(Math.random() * mockUsernames.length)];
    const prod = mockFeedProducts[Math.floor(Math.random() * mockFeedProducts.length)];
    const suffix = mockTimeSuffixes[Math.floor(Math.random() * mockTimeSuffixes.length)];
    
    const div = document.createElement("div");
    div.className = "recent-order-item";
    div.innerHTML = `
        <div class="order-user-badge">${user.charAt(0).toUpperCase()}</div>
        <div class="order-item-info">
            <span class="order-username">${user}</span>
            <div class="order-product">${prod}</div>
        </div>
        <div class="order-time-badge">
            <span class="order-status-text">Vừa mua</span>
            <div class="order-time-ago">${suffix}</div>
        </div>
    `;
    return div;
}

// ==========================================
// Generic Utilities & Toast
// ==========================================
function formatCurrency(val) {
    return val.toLocaleString('vi-VN') + "đ";
}

function generateRandomKey() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "";
    for (let i = 0; i < 16; i++) {
        if (i > 0 && i % 4 === 0) key += "-";
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
}

function getCurrentDateTimeString() {
    const now = new Date();
    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hour = now.getHours().toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0');
    return `${hour}:${min} ${date}/${month}/${year}`;
}

function openOverlay() {
    const overlay = document.getElementById("overlay-backdrop");
    overlay.style.display = "block";
    setTimeout(() => overlay.classList.add("open"), 10);
}

function closeOverlay() {
    const overlay = document.getElementById("overlay-backdrop");
    overlay.classList.remove("open");
    setTimeout(() => overlay.style.display = "none", 300);
}

function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = "toast-box";
    
    const icon = type === "success" 
        ? `<i class="fa-solid fa-circle-check toast-icon success" style="font-size: 1.15rem;"></i>`
        : `<i class="fa-solid fa-triangle-exclamation toast-icon error" style="font-size: 1.15rem;"></i>`;

    toast.innerHTML = `${icon} <span style="font-size: 0.85rem; font-weight: 600;">${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function copyText(elementId) {
    const text = document.getElementById(elementId).innerText.split(" ")[0];
    navigator.clipboard.writeText(text).then(() => {
        showToast("Đã sao chép nội dung!", "success");
    });
}

function copyValue(value) {
    navigator.clipboard.writeText(value).then(() => {
        showToast("Đã sao chép License Key!", "success");
    });
}
