const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // アニメーション切り替え
  nav.classList.toggle("open");         // メニュー開閉
});

// スムーズスクロール + モバイルメニュー自動クローズ
document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const offsetTop = target.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    // モバイル時にメニューを閉じる
    document.querySelector('.nav').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
  });
});

// トップに戻るボタンの表示制御
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// クリックしたらスムーズに戻る
backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ナビリンクのアクティブ状態切り替え
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

//ページの40%読んだタイミングで体験予約ボタンが出る
window.addEventListener("scroll", function () {
  const cta = document.querySelector(".floating-cta");
  const scrollY = window.scrollY;
  const docHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;

  // ページの40%以上スクロールしたら表示
  if (scrollY > (docHeight - windowHeight) * 0.4) {
    cta.classList.add("visible");
    cta.classList.remove("hidden");
  } else {
    cta.classList.remove("visible");
    cta.classList.add("hidden");
  }
});