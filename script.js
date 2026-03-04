// Mock Data with descriptions
const mockGames = [
  // PS5 Games
  {
    id: "1",
    title: "Animal Crossing: New Horizons",
    category: "Nintendo Switch",
    genre: "Simulation",
    price: 780000,
    capacity: "7 GB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1608559168291-408b5649d285?w=400",
  },
  {
    id: "2",
    title: "Call of Duty: Black Ops II",
    category: "PS3",
    genre: "Shooter",
    price: 280000,
    capacity: "15 GB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400",
  },
  {
    id: "3",
    title: "DualSense Controller",
    category: "Accessories",
    genre: "Controller",
    price: 980000,
    capacity: "N/A",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1611138290962-2c550ffd4002?w=400",
    description: "Controller PS5 dengan haptic feedback dan adaptive triggers",
  },
  {
    id: "4",
    title: "FIFA 24",
    category: "PS4",
    genre: "Sports",
    price: 650000,
    capacity: "40 GB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400",
  },
  {
    id: "5",
    title: "Final Fantasy X",
    category: "PS2",
    genre: "RPG",
    price: 180000,
    capacity: "4 GB",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1691279613351-516ef4e04ab5?w=400",
  },
  {
    id: "6",
    title: "Gaming Headset",
    category: "Accessories",
    genre: "Audio",
    price: 1200000,
    capacity: "N/A",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1629429407756-4a7703614972?w=400",
    description: "Headset gaming premium dengan surround sound 7.1",
  },
  {
    id: "7",
    title: "Ghost of Tsushima",
    category: "PS4",
    genre: "Action",
    price: 520000,
    capacity: "50 GB",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1691279613351-516ef4e04ab5?w=400",
  },
  {
    id: "8",
    title: "God of War II",
    category: "PS2",
    genre: "Action",
    price: 150000,
    capacity: "5 GB",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1677694690511-2e0646619c91?w=400",
  },
  {
    id: "9",
    title: "God of War Ragnarok",
    category: "PS5",
    genre: "Action-Adventure",
    price: 820000,
    capacity: "90 GB",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400",
  },
  {
    id: "10",
    title: "Gran Turismo 4",
    category: "PS2",
    genre: "Racing",
    price: 120000,
    capacity: "4.7 GB",
    players: "2P",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400",
  },
  {
    id: "11",
    title: "Gran Turismo 7",
    category: "PS5",
    genre: "Racing",
    price: 780000,
    capacity: "110 GB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1691279613351-516ef4e04ab5?w=400",
  },
  {
    id: "12",
    title: "Grand Theft Auto V",
    category: "PS3",
    genre: "Action",
    price: 350000,
    capacity: "18 GB",
    players: "2P",
    image: "https://images.unsplash.com/photo-1691279613351-516ef4e04ab5?w=400",
  },
  {
    id: "13",
    title: "Horizon Forbidden West",
    category: "PS5",
    genre: "RPG",
    price: 790000,
    capacity: "95 GB",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1677694690511-2e0646619c91?w=400",
  },
  {
    id: "14",
    title: "Mario Kart 8 Deluxe",
    category: "Nintendo Switch",
    genre: "Racing",
    price: 750000,
    capacity: "7 GB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1608559168291-408b5649d285?w=400",
  },
  {
    id: "15",
    title: "Metal Gear Solid 3",
    category: "PS2",
    genre: "Stealth",
    price: 160000,
    capacity: "4.5 GB",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1677694690511-2e0646619c91?w=400",
  },
  {
    id: "16",
    title: "Nintendo Switch OLED",
    category: "Console",
    genre: "Hardware",
    price: 5500000,
    capacity: "64 GB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1608559168291-408b5649d285?w=400",
    description: "Nintendo Switch dengan layar OLED 7 inch yang jernih",
  },
  {
    id: "17",
    title: "PlayStation 3 Slim",
    category: "Console",
    genre: "Hardware",
    price: 2800000,
    capacity: "500 GB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1677694690511-2e0646619c91?w=400",
    description: "Konsol PS3 slim dengan design ramping",
  },
  {
    id: "18",
    title: "PlayStation 4 Pro",
    category: "Console",
    genre: "Hardware",
    price: 4500000,
    capacity: "1 TB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1677694690511-2e0646619c91?w=400",
    description: "Konsol PS4 versi premium dengan 4K support",
  },
  {
    id: "19",
    title: "PlayStation 5 Console",
    category: "Console",
    genre: "Hardware",
    price: 7500000,
    capacity: "825 GB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400",
    description:
      "Konsol gaming next-gen dengan SSD ultra cepat dan ray tracing",
  },
  {
    id: "20",
    title: "PlayStation VR2",
    category: "Accessories",
    genre: "VR Headset",
    price: 8500000,
    capacity: "N/A",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1629429407756-4a7703614972?w=400",
    description: "Headset VR generasi terbaru untuk PS5 dengan 4K HDR",
  },
  {
    id: "21",
    title: "Pro Controller",
    category: "Accessories",
    genre: "Controller",
    price: 850000,
    capacity: "N/A",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1611138290962-2c550ffd4002?w=400",
    description: "Controller Nintendo Switch Pro dengan baterai tahan lama",
  },
  {
    id: "22",
    title: "Red Dead Redemption",
    category: "PS3",
    genre: "Action-Adventure",
    price: 300000,
    capacity: "12 GB",
    players: "2P",
    image: "https://images.unsplash.com/photo-1691279613351-516ef4e04ab5?w=400",
  },
  {
    id: "23",
    title: "Spider-Man 2",
    category: "PS5",
    genre: "Action",
    price: 850000,
    capacity: "100 GB",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1677694690511-2e0646619c91?w=400",
  },
  {
    id: "24",
    title: "Super Smash Bros Ultimate",
    category: "Nintendo Switch",
    genre: "Fighting",
    price: 820000,
    capacity: "16.3 GB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1608559168291-408b5649d285?w=400",
  },
  {
    id: "25",
    title: "The Last of Us",
    category: "PS3",
    genre: "Action-Adventure",
    price: 320000,
    capacity: "27 GB",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1677694690511-2e0646619c91?w=400",
  },
  {
    id: "26",
    title: "The Last of Us Part II",
    category: "PS4",
    genre: "Action-Adventure",
    price: 550000,
    capacity: "78 GB",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400",
  },
  {
    id: "27",
    title: "The Legend of Zelda: TOTK",
    category: "Nintendo Switch",
    genre: "Action-Adventure",
    price: 880000,
    capacity: "16 GB",
    players: "1 Player",
    image: "https://images.unsplash.com/photo-1608559168291-408b5649d285?w=400",
  },
  {
    id: "28",
    title: "Uncharted 4",
    category: "PS4",
    genre: "Action-Adventure",
    price: 480000,
    capacity: "45 GB",
    players: "1-4P",
    image: "https://images.unsplash.com/photo-1677694690511-2e0646619c91?w=400",
  },
];

// App State
let currentUser = null;
let games = [...mockGames];
let cart = [];
let selectedCategory = "All";
let searchQuery = "";

// Cart Management per User
function getCartKey() {
  if (!currentUser) return null;
  return `cart_${currentUser.username}_${currentUser.id || currentUser.username}`;
}

function loadUserCart() {
  const cartKey = getCartKey();
  if (cartKey) {
    const savedCart = localStorage.getItem(cartKey);
    if (savedCart) {
      try {
        cart = JSON.parse(savedCart);
      } catch (e) {
        cart = [];
      }
    } else {
      cart = [];
    }
  } else {
    cart = [];
  }
}

function saveUserCart() {
  const cartKey = getCartKey();
  if (cartKey) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }
}
let users = JSON.parse(localStorage.getItem("users")) || [
  {
    id: crypto.randomUUID(),
    username: "owner",
    password: "owner123",
    role: "owner",
  },
  {
    id: crypto.randomUUID(),
    username: "user",
    password: "user123",
    role: "user",
  },
  {
    id: crypto.randomUUID(),
    username: "customer",
    password: "customer123",
    role: "customer",
  },
];

let sessionTimer = null;
let sessionEndTime = null;
let isCustomerSessionActive = false;
let currentReceiptMode = null;
function loadTransactions() {
  try {
    const raw = localStorage.getItem("transactions");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveTransactions(data) {
  localStorage.setItem("transactions", JSON.stringify(data));
}
function loadTransactionOverrides() {
  try {
    const raw = localStorage.getItem("transactionOverrides");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveTransactionOverrides(data) {
  localStorage.setItem("transactionOverrides", JSON.stringify(data));
}
function loadDeletedDays() {
  try {
    const raw = localStorage.getItem("deletedDays");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveDeletedDays(data) {
  localStorage.setItem("deletedDays", JSON.stringify(data));
}
function canRestore(deletedAtIso) {
  if (!deletedAtIso) return false;
  const deletedAt = new Date(deletedAtIso).getTime();
  const now = Date.now();
  return now - deletedAt <= 24 * 60 * 60 * 1000;
}
function getDateKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function addTransaction(mode) {
  if (!currentUser || !Array.isArray(cart) || cart.length === 0) return;
  const items = cart.map((it) => ({
    id: it.game.id,
    title: it.game.title,
    category: it.game.category,
    description: it.game.description || "",
    capacity: it.game.capacity,
    quantity: it.quantity,
    price: it.game.price,
  }));
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const now = new Date();
  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(now.getTime()),
    user: currentUser.username,
    role: currentUser.role,
    mode,
    items,
    total,
    time: now.toISOString(),
  };
  const store = loadTransactions();
  const key = getDateKey(now);
  if (!store[key]) store[key] = [];
  store[key].push(record);
  saveTransactions(store);
}

const categories = [
  "All",
  "PS2",
  "PS3",
  "PS4",
  "PS5",
  "Nintendo Switch",
  "Console",
  "Accessories",
];

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  try { loadSavedData(); } catch {}
  checkAuth();
  initializeEventListeners();
  setupUserDropdown(); // ✅ pindah ke sini
});

function loadSavedData() {
  const savedUsers = localStorage.getItem("users");
  if (savedUsers) {
    try {
      const parsedUsers = JSON.parse(savedUsers);
      if (Array.isArray(parsedUsers)) {
        users = parsedUsers.map((u) => ({
          id: u.id || (crypto?.randomUUID ? crypto.randomUUID() : String(Date.now())),
          username: u.username,
          password: u.password,
          role: u.role || "user",
        }));
      }
    } catch {}
  }
  const savedGames = localStorage.getItem("games");
  if (savedGames) {
    try {
      const parsed = JSON.parse(savedGames);
      if (Array.isArray(parsed)) {
        games = parsed.map((g) => ({
          id: g.id || crypto.randomUUID(),
          title: g.title || "",
          category: g.category || "PS4",
          genre: g.genre ?? "",
          capacity: g.capacity ?? "N/A",
          players: g.players ?? "1 Player",
          price: Number(g.price ?? 0),
          image: g.image || "https://via.placeholder.com/400x300?text=Game",
          description: g.description || "",
        }));
      }
    } catch {}
  }
}

function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
}
function saveGames() {
  localStorage.setItem("games", JSON.stringify(games));
}

function checkAuth() {
  const userStr = sessionStorage.getItem("user");
  const endStr = sessionStorage.getItem("customerSessionEnd");
  const now = Date.now();
  const viewPref = sessionStorage.getItem("view");

  if (userStr) {
    currentUser = JSON.parse(userStr);

    if (currentUser?.role === "customer") {
      if (endStr) {
        const end = Number(endStr);
        if (now < end) {
          sessionEndTime = end;
          isCustomerSessionActive = true;
          loadUserCart();
          showMainPage();
          startSessionTimer();
          return;
        } else {
          sessionStorage.removeItem("user");
          sessionStorage.removeItem("customerSessionEnd");
          currentUser = null;
          showLoginPage();
          return;
        }
      } else {
        sessionStorage.removeItem("user");
        currentUser = null;
        showLoginPage();
        return;
      }
    } else {
      loadUserCart();
      if (viewPref === "report") {
        showReportPage();
      } else {
        showMainPage();
      }
      return;
    }
  }

  showLoginPage();
}

// (QR session removed)

function initializeEventListeners() {
  // ========= LOGIN =========
  const loginForm = document.getElementById("loginForm");
  if (loginForm) loginForm.addEventListener("submit", handleLogin);
  // Tambahan: cegah password manager memproses form dengan trik no-op
  if (loginForm) {
    loginForm.setAttribute("autocomplete", "off");
  }

  // ========= LOGOUT =========
  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton) logoutButton.addEventListener("click", handleLogout);

  const userLogoutButton = document.getElementById("userlogoutButton");
  if (userLogoutButton)
    userLogoutButton.addEventListener("click", handleLogout);

  // ========= TAMBAH GAME (OWNER) =========
  const addGameButton = document.getElementById("addGameButton");
  if (addGameButton) addGameButton.addEventListener("click", openAddGameModal);

  // ========= REPORT & QR =========
  const reportButton = document.getElementById("reportButton");
  if (reportButton) reportButton.addEventListener("click", showReportPage);

  const qrButton = document.getElementById("qrButton");
  if (qrButton) qrButton.addEventListener("click", showQRModal);

  // ========= TEXTAREA PARAGRAF (Console/Accessories) =========
  const addDesc = document.getElementById("addDescription");
  if (addDesc) {
    addDesc.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        // Biarkan newline, tapi cegah bubbling agar tidak memicu handler lain
        e.stopPropagation();
      }
    });
  }
  const editDesc = document.getElementById("editDescription");
  if (editDesc) {
    editDesc.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.stopPropagation();
      }
    });
  }
  // ========= SEARCH =========
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderGames();
    });
  }

  // ========= CART =========
  const clearCartBtn = document.getElementById("clearCartBtn");
  if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);

  const printWithReceiptButton = document.getElementById(
    "printWithReceiptButton",
  );
  if (printWithReceiptButton) {
    printWithReceiptButton.addEventListener("click", previewWithReceipt);
  }

  const printWithoutReceiptButton = document.getElementById(
    "printWithoutReceiptButton",
  );
  if (printWithoutReceiptButton) {
    printWithoutReceiptButton.addEventListener("click", previewWithoutReceipt);
  }

  // ========= MOBILE CART =========
  const mobileCartToggle = document.getElementById("mobileCartToggle");
  if (mobileCartToggle) {
    mobileCartToggle.addEventListener("click", toggleMobileCart);
  }

  // ========= QR MODAL =========
  // (QR dihilangkan)

  // ========= REPORT PAGE =========
  const backToMainBtn = document.getElementById("backToMainBtn");
  if (backToMainBtn) backToMainBtn.addEventListener("click", showMainPage);
  const resetReportBtn = document.getElementById("resetReportBtn");
  if (resetReportBtn) resetReportBtn.addEventListener("click", resetReportData);

  // ========= CUSTOMER =========
  const customerLogoutBtn = document.getElementById("customerLogoutBtn");
  if (customerLogoutBtn) {
    customerLogoutBtn.addEventListener("click", customerLogout);
  }
  const usernameInput = document.getElementById("username");
  if (usernameInput) {
    usernameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const pw = document.getElementById("password");
        pw?.focus();
      }
    });
  }

  // ========= RECEIPT PREVIEW =========
  const receiptPrintBtn = document.getElementById("receiptPrintBtn");
  if (receiptPrintBtn) receiptPrintBtn.addEventListener("click", receiptPrint);
  const receiptCloseBtn = document.getElementById("receiptCloseBtn");
  if (receiptCloseBtn) receiptCloseBtn.addEventListener("click", receiptClose);

  const cancelTransactionBtn = document.getElementById("cancelTransactionBtn");
  if (cancelTransactionBtn)
    cancelTransactionBtn.addEventListener("click", closeEditTransaction);
  const saveTransactionBtn = document.getElementById("saveTransactionBtn");
  if (saveTransactionBtn)
    saveTransactionBtn.addEventListener("click", saveEditTransaction);
}
function resetReportData() {
  const ok = window.confirm(
    "Yakin reset laporan? Semua potongan/override akan dihapus.",
  );
  if (!ok) return;
  try {
    localStorage.removeItem("transactionOverrides");
  } catch {}
  renderTransactionHistory();
  const mp = document.getElementById("monthPicker");
  if (mp && mp.value) renderMonthlySummary(mp.value);
}

function enableEnterNavigation(ids, saveBtn) {
  ids.forEach((id, idx) => {
    const el = document.getElementById(id);
    if (!el || el.dataset.enterNavBound === "1") return;
    el.dataset.enterNavBound = "1";
    el.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      const dir = e.shiftKey ? -1 : 1;
      const nextIdx = idx + dir;
      if (nextIdx >= 0 && nextIdx < ids.length) {
        const nextEl = document.getElementById(ids[nextIdx]);
        if (nextEl) {
          nextEl.focus();
          if (typeof nextEl.select === "function") {
            try {
              nextEl.select();
            } catch {}
          }
        }
      } else if (!e.shiftKey && idx === ids.length - 1 && saveBtn) {
        saveBtn.click();
      }
    });
  });
}

function bindAddFormEnterNav() {
  const ids = [
    "addCategory",
    "addTitle",
    "addGenre",
    "addCapacity",
    "addPlayers",
    "addPrice",
    "addDescription",
    "addImage",
  ];
  const saveBtn = document.querySelector(
    '#addGameModal [onclick="saveNewGame()"]',
  );
  enableEnterNavigation(ids, saveBtn);
}

function bindEditFormEnterNav() {
  const ids = [
    "editCategory",
    "editTitle",
    "editGenre",
    "editCapacity",
    "editPlayers",
    "editPrice",
    "editDescription",
    "editImage",
  ];
  const saveBtn = document.querySelector(
    '#editGameModal [onclick="saveEditGame()"]',
  );
  enableEnterNavigation(ids, saveBtn);
}

function bindAddUserEnterNav() {
  const ids = ["newUserUsername", "newUserPassword", "newUserRole"];
  const saveBtn = document.querySelector(
    '#manageUsersModal [onclick="createUser()"]',
  );
  enableEnterNavigation(ids, saveBtn);
}

// ========= USER DROPDOWN =========
function setupUserDropdown() {
  const userMenuButton = document.getElementById("userMenuButton");
  const userDropdown = document.getElementById("userDropdown");

  if (!userMenuButton || !userDropdown) return;
  if (userMenuButton.dataset.bound) return; // ⛔ cegah listener dobel

  userMenuButton.dataset.bound = "true";

  function closeDropdown() {
    userDropdown.classList.add("hidden");
  }

  userMenuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle("hidden");
  });

  userDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", closeDropdown);
}

// Cart

// Login
function handleLogin(e) {
  e.preventDefault();
  const username = (document.getElementById("username").value || "").trim();
  const password = (document.getElementById("password").value || "").trim();
  const loginError = document.getElementById("loginError");
  if (loginError) {
    loginError.classList.add("hidden");
    loginError.textContent = "";
  }

  const user = users.find(
    (u) =>
      String(u.username || "").toLowerCase() === username.toLowerCase() &&
      String(u.password || "") === password,
  );

  if (user) {
    currentUser = { username: user.username, role: user.role, id: user.id };
    sessionStorage.setItem("user", JSON.stringify(currentUser));
    cart = [];
    saveUserCart();
    renderCart();
    if (user.role === "customer") {
      const endTime = Date.now() + 15 * 60 * 1000;
      sessionEndTime = endTime;
      isCustomerSessionActive = true;
      sessionStorage.setItem("customerSessionEnd", String(endTime));
      startSessionTimer();
    } else {
      if (sessionTimer) clearInterval(sessionTimer);
      isCustomerSessionActive = false;
      sessionStorage.removeItem("customerSessionEnd");
      const headerTimer = document.getElementById("customerSessionTimer");
      headerTimer?.classList.add("hidden");
    }
    showMainPage();
  } else {
    if (loginError) {
      loginError.textContent = "Email atau password salah!";
      loginError.classList.remove("hidden");
    }
  }
}

function handleLogout() {
  // Clear cart saat logout (opsional, bisa dihapus jika ingin cart tetap tersimpan)
  cart = [];
  saveUserCart();

  sessionStorage.removeItem("user");
  currentUser = null;
  // ✅ HAPUS ISIAN LOGIN
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (usernameInput) usernameInput.value = "";
  if (passwordInput) passwordInput.value = "";

  showLoginPage();
}

function showLoginPage() {
  document.getElementById("loginPage")?.classList.remove("hidden");
  document.getElementById("mainPage")?.classList.add("hidden");
  document.getElementById("reportPage")?.classList.add("hidden");
  document.getElementById("customerPage")?.classList.add("hidden");
  sessionStorage.removeItem("view");
  location.hash = "#login";
  document.body.classList.remove("preload");
}

// Page Navigation
function showMainPage() {
  if (!currentUser) {
    showLoginPage();
    return;
  }
  sessionStorage.setItem("view", "main");
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("mainPage").classList.remove("hidden");
  document.getElementById("reportPage").classList.add("hidden");
  document.getElementById("customerPage").classList.add("hidden");
  if (currentUser && currentUser.role) {
    location.hash = `#app/${currentUser.role}`;
  }
  document.body.classList.remove("preload");

  try {
    const savedCat = sessionStorage.getItem("selectedCategory");
    if (savedCat && categories.includes(savedCat)) {
      selectedCategory = savedCat;
    }
  } catch {}

  const userMenuContainer = document.querySelector(".user-menu");
  const userMenuButton = document.getElementById("userMenuButton");
  const ownerLogoutBtn = document.getElementById("userlogoutButton");
  const userLogoutBtn = document.getElementById("logoutButton");
  const headerCustomerTimer = document.getElementById("customerSessionTimer");

  const qrButton = document.getElementById("qrButton");
  const reportButton = document.getElementById("reportButton");
  const addGameButton = document.getElementById("addGameButton");

  // default
  qrButton?.classList.add("hidden");
  reportButton?.classList.add("hidden");
  addGameButton?.classList.add("hidden");
  userMenuContainer?.classList.add("hidden");
  userMenuButton?.classList.add("hidden");
  ownerLogoutBtn?.classList.add("hidden");
  userLogoutBtn?.classList.add("hidden");
  headerCustomerTimer?.classList.add("hidden");

  if (currentUser) {
    if (currentUser.role === "customer") {
      // Customer view: tampilkan timer dan info sesi
      document.getElementById("welcomeText").textContent =
        "Game • Accessories • Console • Service";

      // Tampilkan timer untuk customer
      const customerTimerEl = document.getElementById("customerSessionTimer");
      if (customerTimerEl) {
        customerTimerEl.classList.remove("hidden");
      }

      if (isCustomerSessionActive && sessionEndTime) {
        startSessionTimer();
      }

      // Customer bisa lihat produk dan pilih sendiri
      userLogoutBtn?.classList.remove("hidden");
      // Customer tidak bisa akses fitur owner/user
      qrButton?.classList.add("hidden");
      reportButton?.classList.add("hidden");
      addGameButton?.classList.add("hidden");
      userMenuContainer?.classList.add("hidden");
    } else if (currentUser.role === "owner") {
      document.getElementById("welcomeText").textContent =
        "Game • Accessories • Console • Service";

      userMenuContainer?.classList.remove("hidden");
      userMenuButton?.classList.remove("hidden");
      ownerLogoutBtn?.classList.remove("hidden");

      qrButton?.classList.remove("hidden");
      reportButton?.classList.remove("hidden");
      addGameButton?.classList.remove("hidden");

      const manageUserButton = document.getElementById("manageUserButton");
      manageUserButton?.classList.remove("hidden");
    } else {
      // User biasa
      document.getElementById("welcomeText").textContent =
        "Game • Accessories • Console • Service";
      userLogoutBtn?.classList.remove("hidden");
    }

    renderCategoryTabs();
    renderGames();
    renderCart();
  }
}

// default: sembunyikan

function showReportPage() {
  if (!currentUser) {
    showLoginPage();
    return;
  }
  sessionStorage.setItem("view", "report");
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("reportPage").classList.remove("hidden");
  document.getElementById("customerPage").classList.add("hidden");
  location.hash = "#report";
  renderReport();
  document.body.classList.remove("preload");
  const mp = document.getElementById("monthPicker");
  if (mp) {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    mp.value = `${y}-${m}`;
    renderMonthlySummary(mp.value);
    mp.onchange = (e) => renderMonthlySummary(e.target.value);
  }
  const backBtn = document.getElementById("backToMainBtn");
  if (backBtn && backBtn.dataset.bound !== "true") {
    backBtn.addEventListener("click", showMainPage);
    backBtn.dataset.bound = "true";
  }
  const pref = sessionStorage.getItem("reportTab") || "daily";
  setReportTab(pref);
}

function showCustomerPage(cartData) {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("reportPage").classList.add("hidden");
  document.getElementById("customerPage").classList.remove("hidden");
  location.hash = "#customer";
  renderCustomerCart(cartData);
  document.body.classList.remove("preload");
}

function setReportTab(tab) {
  const daily = document.getElementById("dailyReportSection");
  const monthly = document.getElementById("monthlyReportSection");
  const btnDaily = document.getElementById("tabDaily");
  const btnMonthly = document.getElementById("tabMonthly");
  if (!daily || !monthly || !btnDaily || !btnMonthly) return;
  if (tab === "monthly") {
    daily.classList.add("hidden");
    monthly.classList.remove("hidden");
    btnDaily.classList.remove("active");
    btnMonthly.classList.add("active");
  } else {
    daily.classList.remove("hidden");
    monthly.classList.add("hidden");
    btnDaily.classList.add("active");
    btnMonthly.classList.remove("active");
    renderTransactionHistory();
  }
  sessionStorage.setItem("reportTab", tab);
}

// Render Category Tabs
function renderCategoryTabs() {
  const tabsContainer = document.getElementById("categoryTabs");
  if (!tabsContainer) return;
  tabsContainer.innerHTML = categories
    .map(
      (cat) => `
                <button class="tab-button ${cat === selectedCategory ? "active" : ""}" 
                        onclick="selectCategory('${cat}')">
                    ${cat}
                </button>
            `,
    )
    .join("");
}

function selectCategory(category) {
  selectedCategory = category;
  try {
    sessionStorage.setItem("selectedCategory", category);
  } catch {}
  renderCategoryTabs();
  renderGames();
}

// Render Games (with alphabetical sorting)
function renderGames() {
  let filteredGames = games.filter((game) => {
    const matchesCategory =
      selectedCategory === "All" || game.category === selectedCategory;
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort alphabetically by title (A-Z)
  filteredGames.sort((a, b) => a.title.localeCompare(b.title));

  const gamesGrid = document.getElementById("gamesGrid");
  const emptyMessage = document.getElementById("emptyMessage");

  if (filteredGames.length === 0) {
    gamesGrid.innerHTML = "";
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");
    gamesGrid.innerHTML = filteredGames
      .map((game) => {
        const isInCart = cart.some((item) => item.game.id === game.id);
        const canSelect =
          !isInCart ||
          game.category === "Console" ||
          game.category === "Accessories";
        const showCapacity =
          game.category !== "Console" && game.category !== "Accessories";
        const isConsole = game.category === "Console";

        return `
                    <div class="game-card">
  <div class="game-image-wrapper">
    <img 
      src="${game.image}" 
      alt="${game.title}" 
      class="game-image"
    />
    <div class="game-category-badge">
      ${game.category}
    </div>


    <div class="game-capacity-wrapper ${
      game.category === "Console" || game.category === "Accessories"
        ? "only-price"
        : ""
    }">

    ${
      game.category !== "Console" && game.category !== "Accessories"
        ? `
      <button class="game-capacity-badge capacity">
        ${game.capacity}
      </button>

      <div class="center-slot">
        <button class="game-capacity-badge players">
          👥 ${game.players}
        </button>
        

      </div>
    `
        : ""
    }

      <button class="game-capacity-badge price">
        Rp ${game.price.toLocaleString("id-ID")}
      </button>
    </div>
  </div>

  <div class="game-info">
    <div class="game-title">${game.title}</div>
    ${
      isConsole && game.description
        ? `<div class="game-description-console preserve-lines">${game.description}</div>`
        : `<div class="game-genre">${game.genre}</div>`
    }

    <div class="game-actions">
      <button class="btn btn-select btn-small"
        onclick="selectGame('${game.id}')"
        ${!canSelect ? "disabled" : ""}>
        ${isInCart ? "Dipilih" : "Pilih"}
      </button>

      ${
        currentUser && currentUser.role === "owner"
          ? `
            <button class="btn btn-edit btn-small"
              onclick="editGame('${game.id}')">✏️</button>
            <button class="btn btn-delete btn-small"
              onclick="deleteGame('${game.id}')">🗑️</button>
          `
          : ""
      }
    </div>
  </div>
</div>

                `;
      })
      .join("");
  }
}

// Game Actions
function selectGame(gameId) {
  const game = games.find((g) => g.id === gameId);
  if (!game) return;

  // Check if game can be selected (not console/accessories and already in cart)
  const isInCart = cart.some((item) => item.game.id === gameId);
  if (
    isInCart &&
    game.category !== "Console" &&
    game.category !== "Accessories"
  ) {
    return; // Don't allow selecting same game twice for non-console/accessories
  }

  const existingItem = cart.find((item) => item.game.id === gameId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ game, quantity: 1 });
  }
  saveUserCart(); // Save cart setelah perubahan
  renderCart();
  renderGames(); // Re-render to update button state
}

function editGame(gameId) {
  const game = games.find((g) => g.id === gameId);
  if (!game) return;

  document.getElementById("editGameId").value = game.id;
  document.getElementById("editCategory").value = game.category;
  document.getElementById("editTitle").value = game.title;
  // Untuk Console/Accessories, field ini berfungsi sebagai "Keterangan"
  const isConsoleOrAccessories =
    game.category === "Console" || game.category === "Accessories";
  document.getElementById("editGenre").value = isConsoleOrAccessories
    ? game.description || ""
    : game.genre;
  document.getElementById("editCapacity").value = game.capacity;
  document.getElementById("editPlayers").value = game.players;
  document.getElementById("editPrice").value = game.price;
  document.getElementById("editDescription").value = game.description || "";

  toggleEditFormByCategory();

  document.getElementById("editGameModal").classList.remove("hidden");
  bindEditFormEnterNav();
}

function openAddGameModal() {
  // reset form
  document.getElementById("addCategory").value = "PS4";
  document.getElementById("addTitle").value = "";
  document.getElementById("addGenre").value = "";
  document.getElementById("addCapacity").value = "";
  document.getElementById("addPlayers").value = "";
  document.getElementById("addPrice").value = "";
  document.getElementById("addDescription").value = "";
  const addImageInput = document.getElementById("addImage");
  if (addImageInput) addImageInput.value = "";

  toggleAddFormByCategory();
  document.getElementById("addGameModal").classList.remove("hidden");
  bindAddFormEnterNav();
}

function closeAddGameModal() {
  document.getElementById("addGameModal").classList.add("hidden");
}

function saveNewGame() {
  const category = document.getElementById("addCategory").value;
  const title = document.getElementById("addTitle").value.trim();
  const genre = document.getElementById("addGenre").value.trim();
  const capacity = document.getElementById("addCapacity").value.trim();
  const players = document.getElementById("addPlayers").value.trim();
  const priceValue = document.getElementById("addPrice").value;
  const description = document.getElementById("addDescription").value.trim();
  const imageInput = document.getElementById("addImage");

  if (!title || !category || !priceValue) {
    alert("Mohon isi minimal Nama Produk, Kategori, dan Harga.");
    return;
  }

  const baseGame = {
    id: crypto.randomUUID(),
    title,
    category,
    genre: genre || (category === "Console" ? "Hardware" : ""),
    capacity:
      category === "Console" || category === "Accessories"
        ? "N/A"
        : capacity || "0 GB",
    players: players || "1 Player",
    price: Number(priceValue),
  };

  if (category === "Console" || category === "Accessories") {
    baseGame.description = description || genre || "";
  } else if (description) {
    baseGame.description = description;
  }

  function finalizeNewGameWithImage(imageUrl) {
    const newGame = { ...baseGame, image: imageUrl };
    games.push(newGame);
    saveGames();
    renderGames();
    closeAddGameModal();
  }

  if (imageInput && imageInput.files && imageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = () => {
      finalizeNewGameWithImage(reader.result);
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    // fallback image
    finalizeNewGameWithImage(
      "https://via.placeholder.com/400x300?text=Game+Baru",
    );
  }
}

function saveEditGame() {
  const id = document.getElementById("editGameId").value;
  const game = games.find((g) => g.id === id);
  if (!game) return;

  game.category = document.getElementById("editCategory").value;
  game.title = document.getElementById("editTitle").value;
  const genreValue = document.getElementById("editGenre").value;
  game.players = document.getElementById("editPlayers").value;
  // Untuk Console/Accessories, kapasitas tidak relevan -> paksa "N/A"
  if (game.category === "Console" || game.category === "Accessories") {
    game.capacity = "N/A";
  } else {
    game.capacity = document.getElementById("editCapacity").value;
  }
  game.price = Number(document.getElementById("editPrice").value);

  // Simpan field sesuai kategori
  if (game.category === "Console" || game.category === "Accessories") {
    // Genre dibiarkan apa adanya (misal: "Hardware"), keterangan diambil dari field "genre"/keterangan
    game.description = genreValue;
  } else {
    game.genre = genreValue;
    game.description = document.getElementById("editDescription").value;
  }

  const imageInput = document.getElementById("editImage");
  if (imageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = () => {
      game.image = reader.result;
      finalizeEditGame();
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    finalizeEditGame();
  }
}

function closeEditGameModal() {
  document.getElementById("editGameModal").classList.add("hidden");
}

function finalizeEditGame() {
  saveGames();
  renderGames();
  renderCart();
  closeEditGameModal();
}

function deleteGame(gameId) {
  const game = games.find((g) => g.id === gameId);
  if (!game || !confirm(`Hapus ${game.title}?`)) return;

  games = games.filter((g) => g.id !== gameId);
  cart = cart.filter((item) => item.game.id !== gameId);
  saveGames();
  renderGames();
  renderCart();
}

function toggleEditFormByCategory() {
  const category = document.getElementById("editCategory").value;

  const genreGroup = document
    .getElementById("editGenre")
    .closest(".form-group");
  const capacityGroup = document
    .getElementById("editCapacity")
    .closest(".form-group");
  const playersGroup = document
    .getElementById("editPlayers")
    .closest(".form-group");

  const genreLabel = document.getElementById("editGenreLabel");
  const descriptionField = document.getElementById("descriptionField");

  if (category === "Console" || category === "Accessories") {
    // Console & Accessories: gunakan textarea keterangan (paragraf), sembunyikan field genre
    if (genreGroup) genreGroup.style.display = "none";
    if (genreLabel) genreLabel.textContent = "Genre";
    capacityGroup.style.display = "none";
    playersGroup.style.display = "none";
    if (descriptionField) descriptionField.style.display = "block";
  } else {
    // Game (PS2/PS3/PS4/PS5/Nintendo Switch)
    if (genreGroup) genreGroup.style.display = "block";
    if (genreLabel) genreLabel.textContent = "Genre";
    capacityGroup.style.display = "block";
    playersGroup.style.display = "block";
    if (descriptionField) descriptionField.style.display = "block";
  }
}

function toggleAddFormByCategory() {
  const category = document.getElementById("addCategory").value;

  const gameFields = document.getElementById("addGameFields");
  const descriptionField = document.getElementById("addDescriptionField");

  if (!gameFields || !descriptionField) return;

  if (category === "Console" || category === "Accessories") {
    // Hanya keterangan, sembunyikan kapasitas/player
    gameFields.style.display = "none";
    descriptionField.style.display = "block";
  } else {
    gameFields.style.display = "block";
    descriptionField.style.display = "block";
  }
}

// Cart
function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartFooter = document.getElementById("cartFooter");
  const clearBtn = document.getElementById("clearCartBtn");

  if (cart.length === 0) {
    cartItems.innerHTML = `
                    <div class="cart-empty">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p>Keranjang kosong</p>
                    </div>
                `;
    cartFooter.classList.add("hidden");
    clearBtn.classList.add("hidden");
  } else {
    cartItems.innerHTML = cart
      .map((item) => {
        const isConsoleOrAccessory =
          item.game.category === "Console" ||
          item.game.category === "Accessories";
        const showQuantityControls = isConsoleOrAccessory;

        return `
                    <div class="cart-item">
                        <div class="cart-item-title">${item.game.title}</div>
                        ${
                          isConsoleOrAccessory && item.game.description
                            ? `<div class="cart-item-description preserve-lines">${item.game.description}</div>`
                            : ""
                        }
                        <div class="cart-item-details">
                            Rp ${item.game.price.toLocaleString("id-ID")}${!isConsoleOrAccessory ? " • " + item.game.capacity : ""}
                        </div>
                        <div class="cart-item-actions">
                            ${
                              showQuantityControls
                                ? `
                                <div class="quantity-control">
                                    <button class="quantity-btn" onclick="updateQuantity('${item.game.id}', ${item.quantity - 1})">-</button>
                                    <span class="quantity-value">${item.quantity}</span>
                                    <button class="quantity-btn" onclick="updateQuantity('${item.game.id}', ${item.quantity + 1})">+</button>
                                </div>
                            `
                                : `
                                <span class="quantity-value">Qty: ${item.quantity}</span>
                            `
                            }
                            <button class="btn btn-remove btn-small" onclick="removeFromCart('${item.game.id}')" aria-label="Hapus">
                              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                        </div>
                    </div>
                `;
      })
      .join("");
    cartFooter.classList.remove("hidden");
    clearBtn.classList.remove("hidden");
    updateCartSummary();
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartItemCount").textContent =
    `${totalItems} item dipilih`;
  document.getElementById("mobileCartBadge").textContent = totalItems;
}

function updateQuantity(gameId, newQuantity) {
  if (newQuantity < 1) return;
  const item = cart.find((item) => item.game.id === gameId);
  if (item) {
    item.quantity = newQuantity;
    saveUserCart(); // Save cart setelah perubahan
    renderCart();
  }
}

function removeFromCart(gameId) {
  cart = cart.filter((item) => item.game.id !== gameId);
  saveUserCart(); // Save cart setelah perubahan
  renderCart();
  renderGames(); // Re-render to update button state
}

function clearCart() {
  if (confirm("Kosongkan keranjang?")) {
    cart = [];
    saveUserCart(); // Save cart setelah perubahan
    renderCart();
    renderGames(); // Re-render to update button state
  }
}

function updateCartSummary() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.game.price * item.quantity,
    0,
  );
  const hasCapacityItems = cart.some(
    (item) =>
      item.game.category !== "Console" && item.game.category !== "Accessories",
  );
  const totalCapacity = cart.reduce((sum, item) => {
    const capacity = item.game.capacity;
    if (capacity === "N/A") return sum;
    const match = capacity.match(/(\d+(?:\.\d+)?)\s*GB/i);
    return match ? sum + parseFloat(match[1]) * item.quantity : sum;
  }, 0);

  document.getElementById("summaryTotalItems").textContent = totalItems;
  const capacityEl = document.getElementById("summaryTotalCapacity");
  const capacityRow = capacityEl ? capacityEl.closest(".summary-row") : null;
  if (capacityRow) {
    capacityRow.style.display = hasCapacityItems ? "" : "none";
  }
  if (capacityEl && hasCapacityItems) {
    capacityEl.textContent = `${totalCapacity.toFixed(1)} GB`;
  }
  document.getElementById("summaryTotalPrice").textContent =
    `Rp ${totalPrice.toLocaleString("id-ID")}`;
}

// Helper function untuk generate receipt (digunakan oleh kedua fungsi print)
// ✅ SAMA UNTUK SEMUA ROLE: owner, user, customer - tidak ada perbedaan format
function generateReceipt() {
  // Pastikan menggunakan cart user yang sedang login (semua role)
  if (!currentUser) {
    alert("Anda harus login terlebih dahulu");
    return false;
  }

  // Pastikan cart sudah di-load untuk user ini (semua role menggunakan sistem yang sama)
  loadUserCart();

  if (cart.length === 0) {
    alert("Keranjang masih kosong");
    return false;
  }

  // Generate receipt dari cart user yang sedang login
  // Format struk SAMA untuk semua role (owner, user, customer)
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.game.price * item.quantity,
    0,
  );
  const now = new Date();
  document.getElementById("receiptDate").textContent =
    now.toLocaleString("id-ID");

  document.getElementById("receiptItems").innerHTML = cart
    .map((item) => {
      const isConsoleOrAccessory =
        item.game.category === "Console" ||
        item.game.category === "Accessories";
      const itemTotal = item.quantity * item.game.price;

      if (isConsoleOrAccessory) {
        const qtyLine = `${item.quantity} x Rp ${item.game.price.toLocaleString("id-ID")}`;
        const descriptionLine = item.game.description
          ? `<div class="r-meta preserve-lines">${item.game.description}</div>`
          : "";
        return `
          <div class="r-item">
            <div>
              <div class="r-title">${item.game.title}</div>
              ${descriptionLine}
              <div class="r-meta">${qtyLine}</div>
            </div>
            <div class="r-value">Rp ${itemTotal.toLocaleString("id-ID")}</div>
          </div>
        `;
      } else {
        // Game (PS2/PS3/PS4/PS5/Nintendo Switch): sembunyikan jumlah per-produk
        return `
          <div class="r-item">
            <div>
              <div class="r-title">${item.game.title}</div>
            </div>
            <div class="r-value">Rp ${itemTotal.toLocaleString("id-ID")}</div>
          </div>
        `;
      }
    })
    .join("");
  document.getElementById("receiptTotal").textContent =
    `Rp ${totalPrice.toLocaleString("id-ID")}`;

  // Show receipt and hide cart (sama untuk semua role)
  document.querySelector(".receipt-container").style.display = "block";
  document.getElementById("cartItems").style.display = "none";
  document.getElementById("cartFooter").style.display = "none";

  return true;
}

// Print Functions
// ✅ SAMA UNTUK SEMUA ROLE: owner, user, customer
// ✅ Struk dan Tanpa Struk menghasilkan hasil yang SAMA, hanya berbeda cara print (kertas/PDF)

function previewWithReceipt() {
  // Generate struk yang sama untuk semua role
  if (!generateReceipt()) return;
  // Tampilkan preview; user klik "Cetak" untuk membuka Microsoft Print to PDF
  currentReceiptMode = "with";
}

function previewWithoutReceipt() {
  // Generate struk yang SAMA seperti printWithReceipt
  // Perbedaannya hanya pada cara print (bisa pilih printer kertas atau PDF)
  if (!generateReceipt()) return;
  currentReceiptMode = "without";
}

function receiptPrint() {
  if (currentReceiptMode === "with") {
    addTransaction("with");
    window.print();
    cart = [];
    saveUserCart();
    renderCart();
    renderGames();
    receiptClose();
  } else {
    addTransaction("without");
    cart = [];
    saveUserCart();
    renderCart();
    renderGames();
    receiptClose();
  }
}

function receiptClose() {
  currentReceiptMode = null;
  renderCart();
  document.querySelector(".receipt-container").style.display = "none";
  document.getElementById("cartItems").style.display = "block";
  document.getElementById("cartFooter").style.display = "block";
}

// Mobile Cart Toggle
function toggleMobileCart() {
  const sidebar = document.getElementById("cartSidebar");
  sidebar.classList.toggle("mobile-open");
}

// (QR code features removed)

// Customer View
function renderCustomerCart(cartData) {
  const itemsHtml = cartData
    .map((item) => {
      const isConsoleOrAccessory =
        item.game.category === "Console" ||
        item.game.category === "Accessories";
      return `
                    <div class="customer-item">
                        <div class="customer-item-title">${item.game.title}</div>
                        ${
                          isConsoleOrAccessory && item.game.description
                            ? `<div class="preserve-lines" style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem; font-style: italic;">${item.game.description}</div>`
                            : `<div class="customer-item-details">Kapasitas: ${item.game.capacity}</div>`
                        }
                        <div class="customer-item-details">
                            ${item.quantity} x Rp ${item.game.price.toLocaleString("id-ID")} = Rp ${(item.quantity * item.game.price).toLocaleString("id-ID")}
                        </div>
                    </div>
                `;
    })
    .join("");

  document.getElementById("customerCartItems").innerHTML = itemsHtml;

  const totalPrice = cartData.reduce(
    (sum, item) => sum + item.game.price * item.quantity,
    0,
  );
  document.getElementById("customerTotalPrice").textContent =
    `Rp ${totalPrice.toLocaleString("id-ID")}`;
}

function startSessionTimer() {
  if (sessionTimer) clearInterval(sessionTimer);

  sessionTimer = setInterval(() => {
    const now = Date.now();
    const remaining = sessionEndTime - now;

    if (remaining <= 0) {
      clearInterval(sessionTimer);
      customerLogout();
    } else {
      const minutes = Math.floor(remaining / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);
      const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      // Update timer di customer page (jika ada)
      const customerTimer = document.getElementById("sessionTimer");
      if (customerTimer) {
        customerTimer.textContent = timeString;
      }

      // Update timer di header (untuk customer di main page)
      const headerTimer = document.getElementById("sessionTimerDisplay");
      if (headerTimer) {
        headerTimer.textContent = timeString;
      }
    }
  }, 1000);
}

function customerLogout() {
  if (sessionTimer) clearInterval(sessionTimer);

  // Save cart customer sebelum logout
  saveUserCart();

  isCustomerSessionActive = false;
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("customerSessionEnd");
  currentUser = null;
  cart = []; // Clear cart
  try {
    document.body.innerHTML = "";
  } catch {}
  try {
    window.close();
  } catch {}
  try {
    location.replace("about:blank");
  } catch {}
}

// User Management
function showManageUsersModal() {
  renderUsersList();
  bindAddUserEnterNav();
  document.getElementById("manageUsersModal").classList.remove("hidden");
}

function closeManageUsersModal() {
  document.getElementById("manageUsersModal").classList.add("hidden");
}

function renderUsersList() {
  const usersList = document.getElementById("usersList");

  const ownerCount = users.filter((u) => u.role === "owner").length;

  usersList.innerHTML = users
    .map(
      (user) => `
      <div class="user-list-item">
        <div class="user-info">
          <div class="user-name">${user.username}</div>
          <div class="user-role">
            Role: ${
              user.role === "owner"
                ? "Owner"
                : user.role === "customer"
                  ? "Customer"
                  : "User"
            }
          </div>
        </div>

        <div class="user-actions">
          <button class="btn btn-secondary btn-small"
            onclick="showEditUserModal('${user.id}')">
            ✏️ Edit
          </button>

          ${
            user.role !== "owner" || (ownerCount > 1 && user.role === "owner")
              ? `
                <button class="btn btn-danger btn-small"
                  onclick="deleteUser('${user.id}')">
                  🗑️ Hapus
                </button>
              `
              : ""
          }
        </div>
      </div>
    `,
    )
    .join("");
}

function showEditUserModal(userId) {
  const user = users.find((u) => u.id === userId);
  if (!user) return;

  document.getElementById("editUserId").value = user.id;
  document.getElementById("editUserUsername").value = user.username;
  document.getElementById("editUserPassword").value = user.password;
  document.getElementById("editUserRole").value = user.role;

  document.getElementById("editUserModal").classList.remove("hidden");
}

function closeEditUserModal() {
  document.getElementById("editUserModal").classList.add("hidden");
}

function saveEditUser() {
  const userId = document.getElementById("editUserId").value;
  const username = document.getElementById("editUserUsername").value;
  const password = document.getElementById("editUserPassword").value;
  const role = document.getElementById("editUserRole").value;

  const user = users.find((u) => u.id === userId);
  if (user) {
    user.username = username;
    user.password = password;
    user.role = role;
    saveData();
    renderUsersList();
    closeEditUserModal();
    alert("User berhasil diupdate!");
  }
}

function createUser() {
  const username = document.getElementById("newUserUsername").value.trim();
  const password = document.getElementById("newUserPassword").value.trim();
  const role = document.getElementById("newUserRole").value;

  if (!username || !password) {
    alert("Username dan password wajib diisi.");
    return;
  }

  const exists = users.some((u) => u.username === username);
  if (exists) {
    alert("Username sudah digunakan, pilih username lain.");
    return;
  }

  users.push({
    id: crypto.randomUUID(),
    username,
    password,
    role,
  });

  saveData();
  renderUsersList();

  // reset form input
  document.getElementById("newUserUsername").value = "";
  document.getElementById("newUserPassword").value = "";
  document.getElementById("newUserRole").value = "user";

  alert("User baru berhasil ditambahkan!");
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";

  // Ganti ikon sederhana (👁 / 👁‍🗨) agar terasa interaktif
  if (btn) {
    btn.textContent = isPassword ? "👁‍🗨" : "👁";
  }
}

function deleteUser(userId) {
  const user = users.find((u) => u.id === userId);

  // ⛔ Owner hanya boleh dihapus jika jumlah owner > 1
  if (user && user.role === "owner") {
    const ownerCount = users.filter((u) => u.role === "owner").length;
    if (ownerCount <= 1) {
      alert("Owner terakhir tidak bisa dihapus, hanya bisa diedit.");
      return;
    }
  }

  if (!confirm(`Yakin ingin menghapus user "${user.username}"?`)) return;

  users = users.filter((u) => u.id !== userId);
  saveData();
  renderUsersList();
}

// Report
function renderReport() {
  // Set default/empty state terlebih dahulu
  document.getElementById("statsGamesCount").textContent = 0;
  document.getElementById("statsGamesPrice").textContent = "Rp 0";
  document.getElementById("statsConsolesCount").textContent = 0;
  document.getElementById("statsConsolesPrice").textContent = "Rp 0";
  document.getElementById("statsAccessoriesCount").textContent = 0;
  document.getElementById("statsAccessoriesPrice").textContent = "Rp 0";
  document.getElementById("grandTotalPrice").textContent = "Rp 0";
  document.getElementById("grandTotalItems").textContent = 0;
  document.getElementById("categoryBreakdown").innerHTML = "";

  const gameItems = games.filter(
    (g) => !["Console", "Accessories"].includes(g.category),
  );
  const consoleItems = games.filter((g) => g.category === "Console");
  const accessoryItems = games.filter((g) => g.category === "Accessories");

  const totalGames = gameItems.length;
  const totalGamesPrice = gameItems.reduce((sum, g) => sum + g.price, 0);

  const totalConsoles = consoleItems.length;
  const totalConsolesPrice = consoleItems.reduce((sum, g) => sum + g.price, 0);

  const totalAccessories = accessoryItems.length;
  const totalAccessoriesPrice = accessoryItems.reduce(
    (sum, g) => sum + g.price,
    0,
  );

  const grandTotal =
    totalGamesPrice + totalConsolesPrice + totalAccessoriesPrice;
  const grandTotalItems = totalGames + totalConsoles + totalAccessories;

  document.getElementById("statsGamesCount").textContent = totalGames;
  document.getElementById("statsGamesPrice").textContent =
    `Rp ${totalGamesPrice.toLocaleString("id-ID")}`;
  document.getElementById("statsConsolesCount").textContent = totalConsoles;
  document.getElementById("statsConsolesPrice").textContent =
    `Rp ${totalConsolesPrice.toLocaleString("id-ID")}`;
  document.getElementById("statsAccessoriesCount").textContent =
    totalAccessories;
  document.getElementById("statsAccessoriesPrice").textContent =
    `Rp ${totalAccessoriesPrice.toLocaleString("id-ID")}`;
  document.getElementById("grandTotalPrice").textContent =
    `Rp ${grandTotal.toLocaleString("id-ID")}`;
  document.getElementById("grandTotalItems").textContent = grandTotalItems;

  // Game category breakdown
  const categoryStats = {
    PS2: games.filter((g) => g.category === "PS2"),
    PS3: games.filter((g) => g.category === "PS3"),
    PS4: games.filter((g) => g.category === "PS4"),
    PS5: games.filter((g) => g.category === "PS5"),
    "Nintendo Switch": games.filter((g) => g.category === "Nintendo Switch"),
  };

  const breakdownHtml = Object.entries(categoryStats)
    .map(([category, items]) => {
      const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
      const avgPrice =
        items.length > 0 ? Math.round(totalPrice / items.length) : 0;
      return `
                    <div class="breakdown-item">
                        <div>
                            <div style="font-weight: 700; font-size: 1rem;">${category}</div>
                            <div style="font-size: 0.875rem; color: #6b7280;">${items.length} item</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-weight: 700; font-size: 1rem;">Rp ${totalPrice.toLocaleString("id-ID")}</div>
                            <div style="font-size: 0.875rem; color: #6b7280;">Rata-rata: Rp ${avgPrice.toLocaleString("id-ID")}</div>
                        </div>
                    </div>
                `;
    })
    .join("");

  document.getElementById("categoryBreakdown").innerHTML = breakdownHtml;
  renderTransactionHistory();
}
function renderMonthlySummary(month) {
  const el = document.getElementById("monthlySummary");
  if (!el) return;
  const store = loadTransactions();
  const overrides = loadTransactionOverrides();
  const keys = Object.keys(store).filter((k) => k.startsWith(month));
  const gameCats = {
    PS2: { qty: 0, total: 0 },
    PS3: { qty: 0, total: 0 },
    PS4: { qty: 0, total: 0 },
    PS5: { qty: 0, total: 0 },
    "Nintendo Switch": { qty: 0, total: 0 },
  };
  const consoles = {};
  const accessories = {};
  let grandTotal = 0;
  let grossTotal = 0;
  let monthDiscountTotal = 0;
  keys.forEach((k) => {
    const dayAggGames = {
      PS2: { qty: 0, total: 0 },
      PS3: { qty: 0, total: 0 },
      PS4: { qty: 0, total: 0 },
      PS5: { qty: 0, total: 0 },
      "Nintendo Switch": { qty: 0, total: 0 },
    };
    const dayAggConsoles = {};
    const dayAggAccessories = {};
    store[k].forEach((r) => {
      r.items.forEach((it) => {
        const amount = it.price * it.quantity;
        if (it.category === "Console") {
          if (!dayAggConsoles[it.title])
            dayAggConsoles[it.title] = { qty: 0, total: 0 };
          dayAggConsoles[it.title].qty += it.quantity;
          dayAggConsoles[it.title].total += amount;
        } else if (it.category === "Accessories") {
          if (!dayAggAccessories[it.title])
            dayAggAccessories[it.title] = { qty: 0, total: 0 };
          dayAggAccessories[it.title].qty += it.quantity;
          dayAggAccessories[it.title].total += amount;
        } else if (dayAggGames[it.category]) {
          dayAggGames[it.category].qty += it.quantity;
          dayAggGames[it.category].total += amount;
        }
      });
    });
    const ovDay = overrides[k] || { games: {}, consoles: {}, accessories: {} };
    Object.entries(dayAggGames).forEach(([cat, s]) => {
      const ov = ovDay.games?.[cat];
      if (ov?.hidden === true || s.qty === 0) return;
      const eff = typeof ov?.total === "number" ? ov.total : s.total;
      gameCats[cat].qty += s.qty;
      gameCats[cat].total += eff;
      grandTotal += eff;
      grossTotal += eff;
    });
    Object.entries(dayAggConsoles).forEach(([title, s]) => {
      const ov = ovDay.consoles?.[title];
      if (ov?.hidden === true || s.qty === 0) return;
      const eff = typeof ov?.total === "number" ? ov.total : s.total;
      if (!consoles[title]) consoles[title] = { qty: 0, total: 0 };
      consoles[title].qty += s.qty;
      consoles[title].total += eff;
      grandTotal += eff;
      grossTotal += eff;
    });
    Object.entries(dayAggAccessories).forEach(([title, s]) => {
      const ov = ovDay.accessories?.[title];
      if (ov?.hidden === true || s.qty === 0) return;
      const eff = typeof ov?.total === "number" ? ov.total : s.total;
      if (!accessories[title]) accessories[title] = { qty: 0, total: 0 };
      accessories[title].qty += s.qty;
      accessories[title].total += eff;
      grandTotal += eff;
      grossTotal += eff;
    });
    const dayDiscount =
      typeof overrides[k]?.discount === "number" ? overrides[k].discount : 0;
    monthDiscountTotal += dayDiscount;
    grandTotal = Math.max(0, grandTotal - dayDiscount);
  });
  const gamesHtml = Object.entries(gameCats)
    .filter(([, s]) => s.qty > 0 && s.total > 0)
    .map(([cat, s]) => {
      return `
        <div class="breakdown-item">
          <div>
            <div style="font-weight:700; font-size:1rem;">${cat}</div>
            <div style="font-size:0.875rem; color:#6b7280;">${s.qty} game keluar</div>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:700; font-size:1rem;">Rp ${s.total.toLocaleString("id-ID")}</div>
          </div>
        </div>
      `;
    })
    .join("");
  const consolesHtml = Object.entries(consoles)
    .filter(([, s]) => s.qty > 0 && s.total > 0)
    .map(([title, s]) => {
      return `
        <div class="breakdown-item">
          <div>
            <div style="font-weight:700; font-size:1rem;">${title}</div>
            <div style="font-size:0.875rem; color:#6b7280;">${s.qty} terjual</div>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:700; font-size:1rem;">Rp ${s.total.toLocaleString("id-ID")}</div>
          </div>
        </div>
      `;
    })
    .join("");
  const accessoriesHtml = Object.entries(accessories)
    .filter(([, s]) => s.qty > 0 && s.total > 0)
    .map(([title, s]) => {
      return `
        <div class="breakdown-item">
          <div>
            <div style="font-weight:700; font-size:1rem;">${title}</div>
            <div style="font-size:0.875rem; color:#6b7280;">${s.qty} terjual</div>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:700; font-size:1rem;">Rp ${s.total.toLocaleString("id-ID")}</div>
          </div>
        </div>
      `;
    })
    .join("");
  el.innerHTML = `
    <div class="breakdown-title">Game</div>
    ${gamesHtml}
    <div class="breakdown-title">Console</div>
    ${consolesHtml || `<div class="breakdown-item"><div>Tidak ada console terjual</div></div>`}
    <div class="breakdown-title">Accessories</div>
    ${accessoriesHtml || `<div class="breakdown-item"><div>Tidak ada accessories terjual</div></div>`}
    <div style="text-align:right; font-weight:700; margin-top:0.5rem;">Total sebelum potongan: Rp ${grossTotal.toLocaleString("id-ID")}</div>
    <div style="text-align:right; margin-top:0.25rem;">Potongan bulan ini: Rp ${monthDiscountTotal.toLocaleString("id-ID")}</div>
    <div style="text-align:right; font-weight:700; margin-top:0.25rem;">Total setelah potongan: Rp ${grandTotal.toLocaleString("id-ID")}</div>
  `;
}
function renderTransactionHistory() {
  const el = document.getElementById("transactionHistory");
  if (!el) return;
  const data = loadTransactions();
  const overrides = loadTransactionOverrides();
  const keys = Object.keys(data).sort().reverse();
  const html = keys
    .map((k) => {
      const list = data[k] || [];
      let dayTotal = 0;
      const consoles = {};
      const accessories = {};
      const gameCats = {
        PS2: { qty: 0, total: 0 },
        PS3: { qty: 0, total: 0 },
        PS4: { qty: 0, total: 0 },
        PS5: { qty: 0, total: 0 },
        "Nintendo Switch": { qty: 0, total: 0 },
      };
      list.forEach((r) => {
        r.items.forEach((it) => {
          const amount = it.price * it.quantity;
          if (it.category === "Console") {
            if (!consoles[it.title]) consoles[it.title] = { qty: 0, total: 0 };
            consoles[it.title].qty += it.quantity;
            consoles[it.title].total += amount;
          } else if (it.category === "Accessories") {
            if (!accessories[it.title])
              accessories[it.title] = { qty: 0, total: 0 };
            accessories[it.title].qty += it.quantity;
            accessories[it.title].total += amount;
          } else {
            if (gameCats[it.category]) {
              gameCats[it.category].qty += it.quantity;
              gameCats[it.category].total += amount;
            }
          }
        });
      });

      const ovDay = overrides[k] || {
        games: {},
        consoles: {},
        accessories: {},
      };

      const gamesHtml = Object.entries(gameCats)
        .map(([cat, s]) => {
          const ov = ovDay.games?.[cat];
          const hidden = ov?.hidden === true || s.qty === 0;
          if (hidden) return "";
          const effectiveTotal =
            typeof ov?.total === "number" ? ov.total : s.total;
          dayTotal += effectiveTotal;
          return `
            <div class="breakdown-item">
              <div>
                <div style="font-weight: 700; font-size: 1rem;">${cat}</div>
                <div style="font-size: 0.875rem; color: #6b7280;">${s.qty} game keluar</div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: 700; font-size: 1rem;">Rp ${effectiveTotal.toLocaleString("id-ID")}</div>
              </div>
            </div>
          `;
        })
        .join("");

      const consolesHtml = Object.entries(consoles)
        .map(([title, s]) => {
          const ov = ovDay.consoles?.[title];
          const hidden = ov?.hidden === true || s.qty === 0;
          if (hidden) return "";
          const effectiveTotal =
            typeof ov?.total === "number" ? ov.total : s.total;
          dayTotal += effectiveTotal;
          return `
            <div class="breakdown-item">
              <div>
                <div style="font-weight: 700; font-size: 1rem;">${title}</div>
                <div style="font-size: 0.875rem; color: #6b7280;">${s.qty} terjual</div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: 700; font-size: 1rem;">Rp ${effectiveTotal.toLocaleString("id-ID")}</div>
              </div>
            </div>
          `;
        })
        .join("");

      const accessoriesHtml = Object.entries(accessories)
        .map(([title, s]) => {
          const ov = ovDay.accessories?.[title];
          const hidden = ov?.hidden === true || s.qty === 0;
          if (hidden) return "";
          const effectiveTotal =
            typeof ov?.total === "number" ? ov.total : s.total;
          dayTotal += effectiveTotal;
          return `
            <div class="breakdown-item">
              <div>
                <div style="font-weight: 700; font-size: 1rem;">${title}</div>
                <div style="font-size: 0.875rem; color: #6b7280;">${s.qty} terjual</div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: 700; font-size: 1rem;">Rp ${effectiveTotal.toLocaleString("id-ID")}</div>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <div style="margin-top: 1rem;">
          <div class="breakdown-title">${k}</div>
          ${gamesHtml}
          ${consolesHtml ? `<div class="breakdown-title">Console</div>${consolesHtml}` : ``}
          ${accessoriesHtml ? `<div class="breakdown-title">Accessories</div>${accessoriesHtml}` : ``}
          ${(() => {
            const discount =
              typeof overrides[k]?.discount === "number"
                ? overrides[k].discount
                : 0;
            const finalTotal = Math.max(0, dayTotal - discount);
            return `
              <div style="text-align: right; font-weight: 700; margin-top: 0.5rem;">Total sebelum potongan: Rp ${dayTotal.toLocaleString("id-ID")}</div>
              <div style="text-align: right; margin-top: 0.25rem;">
                <span style="font-weight: 600;">Potongan harga:</span> Rp ${discount.toLocaleString("id-ID")}
                <button class="btn btn-secondary btn-small" style="margin-left:0.5rem;" onclick="openEditDayDiscount('${k}', ${discount})">Edit</button>
                <button class="btn btn-danger btn-small" style="margin-left:0.5rem;" onclick="resetDayTransactions('${k}')">Reset Transaksi</button>
              </div>
              <div style="text-align: right; font-weight: 700; margin-top: 0.25rem;">Total setelah potongan: Rp ${finalTotal.toLocaleString("id-ID")}</div>
            `;
          })()}
        </div>
      `;
    })
    .join("");
  el.innerHTML =
    html || `<div class="breakdown-item"><div>Tidak ada transaksi</div></div>`;
}

let editingTransactionKey = null;
let editingTransactionId = null;
let editingDayDiscount = null;
function openEditDayDiscount(dateKey, currentDiscount) {
  editingDayDiscount = { dateKey, discount: Number(currentDiscount) || 0 };
  const content = document.getElementById("editTransactionContent");
  if (!content) return;
  content.innerHTML = `
    <div style="margin-bottom:0.75rem;">
      <label class="form-label">Potongan Harga (Rp)</label>
      <input id="editDayDiscount" type="number" min="0" class="form-input" style="max-width:12rem;" value="${editingDayDiscount.discount}" />
    </div>
  `;
  document.getElementById("editTransactionModal").classList.remove("hidden");
  const inp = document.getElementById("editDayDiscount");
  if (inp) {
    inp.focus();
    try {
      inp.select();
    } catch {}
  }
  const saveBtn = document.getElementById("saveTransactionBtn");
  enableEnterNavigation(["editDayDiscount"], saveBtn);
}
function resetDayOverrides(dateKey) {
  const ok = window.confirm(
    "Yakin reset hari ini? Potongan/override tanggal ini akan dihapus.",
  );
  if (!ok) return;
  const overrides = loadTransactionOverrides();
  if (overrides[dateKey]) {
    delete overrides[dateKey];
    saveTransactionOverrides(overrides);
  }
  renderTransactionHistory();
  const monthPicker = document.getElementById("monthPicker");
  if (monthPicker && monthPicker.value) renderMonthlySummary(monthPicker.value);
}
function resetDayTransactions(dateKey) {
  const ok = window.confirm(
    "Yakin reset transaksi hari ini? Semua transaksi tanggal ini akan dihapus.",
  );
  if (!ok) return;
  const store = loadTransactions();
  const overrides = loadTransactionOverrides();
  if (store[dateKey]) {
    delete store[dateKey];
    saveTransactions(store);
  }
  if (overrides[dateKey]) {
    delete overrides[dateKey];
    saveTransactionOverrides(overrides);
  }
  renderTransactionHistory();
  const mp = document.getElementById("monthPicker");
  if (mp && mp.value) renderMonthlySummary(mp.value);
}
function openEditTransaction(dateKey, recordId) {
  editingTransactionKey = dateKey;
  editingTransactionId = recordId;
  const store = loadTransactions();
  const list = store[dateKey] || [];
  const record = list.find((r) => r.id === recordId);
  if (!record) return;
  const container = document.getElementById("editTransactionContent");
  const itemsHtml = record.items
    .map(
      (it, idx) => `
      <div class="breakdown-item">
        <div>
          <div style="font-weight:700;">${it.title}</div>
          <div style="font-size:0.875rem; color:#6b7280;">${it.category}</div>
        </div>
        <div style="text-align:right;">
          <input type="number" min="1" value="${it.quantity}" data-idx="${idx}" class="form-input" style="width:6rem;" />
        </div>
      </div>
    `,
    )
    .join("");
  container.innerHTML = `
    <div style="margin-bottom:0.75rem;">
      <label class="form-label">Mode</label>
      <select id="editTxMode" class="form-select" style="max-width:12rem;">
        <option value="with"${record.mode === "with" ? " selected" : ""}>Cetak</option>
        <option value="without"${record.mode === "without" ? " selected" : ""}>Tanpa Cetak</option>
      </select>
    </div>
    ${itemsHtml}
  `;
  document.getElementById("editTransactionModal").classList.remove("hidden");
}
function closeEditTransaction() {
  document.getElementById("editTransactionModal").classList.add("hidden");
  editingTransactionKey = null;
  editingTransactionId = null;
}
function saveEditTransaction() {
  if (editingDayDiscount) {
    const { dateKey } = editingDayDiscount;
    const inp = document.getElementById("editDayDiscount");
    const val = inp ? Math.max(0, Number(inp.value) || 0) : 0;
    const overrides = loadTransactionOverrides();
    if (!overrides[dateKey])
      overrides[dateKey] = { games: {}, consoles: {}, accessories: {} };
    overrides[dateKey].discount = val;
    saveTransactionOverrides(overrides);
    editingDayDiscount = null;
    closeEditTransaction();
    renderTransactionHistory();
    const monthPicker = document.getElementById("monthPicker");
    if (monthPicker && monthPicker.value)
      renderMonthlySummary(monthPicker.value);
    return;
  }
  if (!editingTransactionKey || !editingTransactionId) return;
  const store = loadTransactions();
  const list = store[editingTransactionKey] || [];
  const record = list.find((r) => r.id === editingTransactionId);
  if (!record) return;
  const inputs = document.querySelectorAll(
    "#editTransactionContent input[type='number']",
  );
  inputs.forEach((inp) => {
    const idx = parseInt(inp.getAttribute("data-idx"), 10);
    const val = Math.max(1, parseInt(inp.value, 10) || 1);
    if (record.items[idx]) record.items[idx].quantity = val;
  });
  const modeSel = document.getElementById("editTxMode");
  if (modeSel) record.mode = modeSel.value;
  record.total = record.items.reduce((s, i) => s + i.price * i.quantity, 0);
  saveTransactions(store);
  closeEditTransaction();
  renderTransactionHistory();
  const monthPicker = document.getElementById("monthPicker");
  if (monthPicker && monthPicker.value) renderMonthlySummary(monthPicker.value);
}
function deleteTransactionRecord(dateKey, recordId) {
  const ok = window.confirm("Yakin hapus transaksi ini?");
  if (!ok) return;
  const store = loadTransactions();
  const list = store[dateKey] || [];
  const next = list.filter((r) => r.id !== recordId);
  store[dateKey] = next;
  saveTransactions(store);
  renderTransactionHistory();
  const monthPicker = document.getElementById("monthPicker");
  if (monthPicker && monthPicker.value) renderMonthlySummary(monthPicker.value);
}

// Make functions global
window.selectCategory = selectCategory;
window.selectGame = selectGame;
window.editGame = editGame;
window.deleteGame = deleteGame;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.showManageUsersModal = showManageUsersModal;
window.closeManageUsersModal = closeManageUsersModal;
window.showEditUserModal = showEditUserModal;
window.closeEditUserModal = closeEditUserModal;
window.saveEditUser = saveEditUser;
window.deleteUser = deleteUser;
window.createUser = createUser;
window.togglePasswordVisibility = togglePasswordVisibility;
window.closeEditTransaction = closeEditTransaction;
window.saveEditTransaction = saveEditTransaction;
window.setReportTab = setReportTab;
window.openEditDayDiscount = openEditDayDiscount;
window.resetDayOverrides = resetDayOverrides;
window.resetDayTransactions = resetDayTransactions;
