// translations.js - Full Code

const dict = {
  id: {
    btn_enter_ign: "MASUKKAN IGN",
    nav_cart: "KERANJANG",
    nav_home: "← BERANDA",
    hero_badge: "// OFFICIAL INDOXSMP STORE",
    hero_title_1: "Upgrade Your",
    hero_title_2: "Minecraft Experience.",
    hero_desc: "Selamat datang di official store IndoxSMP. Masukkan IGN kamu dan pilih kategori produk yang ingin kamu beli.",
    profile_selected: "AKUN DIPILIH:",
    btn_change: "Ganti Akun",
    cat_heading: "PILIH KATEGORI STORE:",
    cat_ranks_desc: "Beli rank Indox+, Cosmix, Custom, & VIP",
    cat_crates_desc: "Beli Spawners, Amethyst, Crimson, & Cobalt Keys",
    ip_label: "ALAMAT SERVER",
    btn_copy: "Salin IP",
    modal_title: "MASUKKAN IDENTITAS PLAYER",
    modal_desc: "Pilih bahasa, masukkan username player Minecraft kamu, dan pilih edisi game kamu.",
    modal_lang_label: "PILIH BAHASA / SELECT LANGUAGE:",
    modal_ign_label: "USERNAME MINECRAFT (IGN):",
    modal_edition_label: "EDISI MINECRAFT:",
    modal_submit: "Simpan & Lanjut ke Store →",
    cart_deliver_to: "ITEM AKAN DIKIRIM KE:",
    ranks_tag: "// MEMBERSHIP",
    ranks_title: "PILIH RANK KAMU",
    ranks_desc: "Nikmati keuntungan eksklusif dengan pilihan rank terbaik di IndoxSMP.",
    rank_perm: "PERMANENT",
    r1_desc: "Starter rank",
    r2_desc: "Step up rank",
    r3_desc: "Most popular",
    r4_desc: "The ultimate rank",
    badge_popular: "POPULAR",
    badge_ultimate: "ULTIMATE",
    btn_add_cart: "+ TAMBAH KE KERANJANG",
    crates_tag: "// RARE DROPS",
    crates_title: "CRATE KEYS",
    crates_desc: "Buka crate dan dapatkan item langka serta bonus menarik.",
    key_sub: "1 key per purchase",
    btn_add: "+ TAMBAH",
    cart_tag: "// CHECKOUT CENTER",
    cart_title: "ATUR KERANJANG KAMU",
    cart_desc: "Cek kembali item pilihanmu sebelum menyelesaikan pembayaran.",
    summary_total_item: "Total Jumlah Item",
    summary_total_pay: "Total Pembayaran",
    btn_checkout: "BAYAR SEKARANG →",
    cart_empty: "Keranjang kamu masih kosong 🛒",
    cart_empty_sub: "Silakan pilih Rank atau Crate Key di atas untuk ditambahkan."
  },
  en: {
    btn_enter_ign: "ENTER IGN",
    nav_cart: "CART",
    nav_home: "← HOME",
    hero_badge: "// OFFICIAL INDOXSMP STORE",
    hero_title_1: "Upgrade Your",
    hero_title_2: "Minecraft Experience.",
    hero_desc: "Welcome to the official IndoxSMP store. Enter your IGN and choose the product category you wish to buy.",
    profile_selected: "SELECTED ACCOUNT:",
    btn_change: "Change Account",
    cat_heading: "SELECT STORE CATEGORY:",
    cat_ranks_desc: "Buy Indox+, Cosmix, Custom, & VIP ranks",
    cat_crates_desc: "Buy Spawners, Amethyst, Crimson, & Cobalt Keys",
    ip_label: "SERVER ADDRESS",
    btn_copy: "Copy IP",
    modal_title: "ENTER PLAYER IDENTITY",
    modal_desc: "Select your language, enter your Minecraft username, and choose your game edition.",
    modal_lang_label: "SELECT LANGUAGE / PILIH BAHASA:",
    modal_ign_label: "MINECRAFT USERNAME (IGN):",
    modal_edition_label: "MINECRAFT EDITION:",
    modal_submit: "Save & Proceed to Store →",
    cart_deliver_to: "ITEMS WILL BE DELIVERED TO:",
    ranks_tag: "// MEMBERSHIP",
    ranks_title: "CHOOSE YOUR RANK",
    ranks_desc: "Enjoy exclusive benefits with the best rank choices on IndoxSMP.",
    rank_perm: "PERMANENT",
    r1_desc: "Starter rank",
    r2_desc: "Step up rank",
    r3_desc: "Most popular",
    r4_desc: "The ultimate rank",
    badge_popular: "POPULAR",
    badge_ultimate: "ULTIMATE",
    btn_add_cart: "+ ADD TO CART",
    crates_tag: "// RARE DROPS",
    crates_title: "CRATE KEYS",
    crates_desc: "Open crates and get rare items and exciting bonuses.",
    key_sub: "1 key per purchase",
    btn_add: "+ ADD",
    cart_tag: "// CHECKOUT CENTER",
    cart_title: "MANAGE YOUR CART",
    cart_desc: "Review your selected items before completing the payment.",
    summary_total_item: "Total Items",
    summary_total_pay: "Total Payment",
    btn_checkout: "CHECKOUT NOW →",
    cart_empty: "Your cart is still empty 🛒",
    cart_empty_sub: "Please choose a Rank or Crate Key above to add items."
  }
};

function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[lang] && dict[lang][key]) {
      if (el.tagName === 'INPUT') {
        el.placeholder = dict[lang][key];
      } else {
        if (el.children.length > 0) {
          for (let node of el.childNodes) {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
              node.nodeValue = ' ' + dict[lang][key];
            }
          }
        } else {
          el.innerText = dict[lang][key];
        }
      }
    }
  });
}
