/* ==========================================================================
   沐风 · Personal Space — 脚本
   ---------------------------------------------------------------------------
   技术栈：原生 HTML / CSS / JS，无构建、无框架、无后端、无数据库，数据全部静态。
   文件结构：translations（双语字典） / 基础交互 / 交互增强层（IIFE）
   说明：定稿版删除了「自定义光标」模块（恢复系统默认光标），
         并移除了项目卡箭头等装饰元素。
   ========================================================================== */

/* ---------- 双语字典（文案全部静态，无接口） ---------- */
const translations = {
  zh: {
    skipLink: "跳到主要内容",
    navAbout: "关于", navProjects: "作品", navNotes: "随笔", navContact: "联系",
    themeToggle: "切换明暗主题", themeLight: "切换到浅色主题", themeDark: "切换到深色主题",

    heroTitle: '你好，我是<br><span class="serif">沐风。</span>',
    heroSubtitle: "在技术、设计与日常生活之间，保持好奇，慢慢构建自己喜欢的东西。",
    exploreWork: "看看我的作品", getToKnow: "认识一下",

    aboutKicker: "关于我",
    aboutTitle: '不急着定义自己，<br><span class="serif">先持续探索。</span>',
    aboutText: "我喜欢把复杂的东西变简单，也喜欢把脑海里的点子一点点做出来。这个网站是我的数字据点——放作品、写笔记，也记录那些还在路上的念头。",
    moreAbout: "保持联系",
    profileBio: "在技术与设计之间来回走，喜欢做减法，也喜欢把想法真的做出来。",
    profileTag1: "#设计", profileTag2: "#开发", profileTag3: "#写作",
    principle1Title: "技术与创造", principle1Text: "用工具解决问题，也用工具打开新的可能。",
    principle2Title: "简洁与秩序", principle2Text: "减少不必要的复杂，让重要的东西更清晰。",
    principle3Title: "持续成长", principle3Text: "保持开放，持续学习，让每次尝试都有意义。",

    workKicker: "精选作品",
    workTitle: "想法值得被做出来。",
    workIntro: "这里会慢慢收录个人项目、实验和学习成果。以下是框架示例，之后可以替换成真实作品。",
    project1Type: "界面设计 · 概念", project1Title: "Quiet Space", project1Desc: "探索更安静、更专注的数字体验。",
    project2Type: "创意开发 · 实验", project2Title: "Little Experiments", project2Desc: "把有趣的想法变成可以体验的小作品。",
    project3Type: "写作 · 记录", project3Title: "Notes to Self", project3Desc: "整理学习过程中的问题、答案与灵感。",
    viewDetails: "查看详情",

    notesKicker: "最近在想",
    notesTitle: "给想法一点生长的空间。",
    note1Title: "关于慢一点", note1Text: "不是所有进步都需要被看见。有些积累，在安静中发生。",
    note2Title: "关于创造", note2Text: "先做出一个不完美的版本，再让它慢慢变好。",
    note3Title: "关于好奇心", note3Text: "对小事保持兴趣，也许会通向意想不到的地方。",

    contactTitle: '好想法，<br><span class="serif">值得聊一聊。</span>',
    contactText: "如果你也在创造什么，或者只是想交流一个有趣的想法，欢迎来打个招呼。",
    contactEmailLabel: "邮箱", contactGithubLabel: "GitHub", contactGithubJump: "跳转",

    footerLine: "用一点点好奇，构建自己的世界。",
    backTop: "回到顶部",

    modalClose: "关闭弹窗", modalPrev: "上一个项目", modalNext: "下一个项目",
    modalRole: "角色", modalYear: "年份", modalLinkLabel: "聊聊这个方向"
  },
  en: {
    skipLink: "Skip to content",
    navAbout: "About", navProjects: "Work", navNotes: "Notes", navContact: "Contact",
    themeToggle: "Toggle light and dark theme", themeLight: "Switch to light theme", themeDark: "Switch to dark theme",

    heroTitle: 'Hello, I’m<br><span class="serif">Mufeng.</span>',
    heroSubtitle: "Somewhere between technology, design, and everyday life — staying curious and building things I care about.",
    exploreWork: "See my work", getToKnow: "A little about me",

    aboutKicker: "About",
    aboutTitle: 'In no rush to define myself,<br><span class="serif">just here to explore.</span>',
    aboutText: "I enjoy making complex things feel simple, and turning small ideas into real things. This site is my little corner of the internet — a home for projects, notes, and thoughts still finding their way.",
    moreAbout: "Get in touch",
    profileBio: "Moving between technology and design — drawn to subtraction, and to actually making the idea real.",
    profileTag1: "#Design", profileTag2: "#Code", profileTag3: "#Writing",
    principle1Title: "Technology & making", principle1Text: "Using tools to solve problems — and discover new possibilities.",
    principle2Title: "Clarity & simplicity", principle2Text: "Less unnecessary complexity. More room for what matters.",
    principle3Title: "Always learning", principle3Text: "Stay open, keep learning, and make every experiment count.",

    workKicker: "Selected work",
    workTitle: "Ideas are meant to be made.",
    workIntro: "A growing collection of personal projects, experiments, and things learned. These are starter examples — real work can go here later.",
    project1Type: "Interface design · Concept", project1Title: "Quiet Space", project1Desc: "Exploring calmer, more intentional digital experiences.",
    project2Type: "Creative code · Experiment", project2Title: "Little Experiments", project2Desc: "Turning curious ideas into small things you can experience.",
    project3Type: "Writing · Reflection", project3Title: "Notes to Self", project3Desc: "Collecting questions, discoveries, and bits of inspiration.",
    viewDetails: "View details",

    notesKicker: "On my mind",
    notesTitle: "A little room for ideas to grow.",
    note1Title: "On slowing down", note1Text: "Not every kind of progress needs to be seen. Some things grow quietly.",
    note2Title: "On making things", note2Text: "Make an imperfect first version. Let it get better from there.",
    note3Title: "On curiosity", note3Text: "Pay attention to small things. They may lead somewhere unexpected.",

    contactTitle: 'Good ideas<br><span class="serif">are worth sharing.</span>',
    contactText: "Building something of your own, or just have an interesting thought? I’d love to hear from you.",
    contactEmailLabel: "Email", contactGithubLabel: "GitHub", contactGithubJump: "Visit",

    footerLine: "A little curiosity goes a long way.",
    backTop: "Back to top",

    modalClose: "Close dialog", modalPrev: "Previous project", modalNext: "Next project",
    modalRole: "Role", modalYear: "Year", modalLinkLabel: "Talk about this"
  }
};

let currentLanguage = "zh";
const languageToggle = document.getElementById("languageToggle");

/* 供 setLanguage() 调用的桥接函数。
   写成函数声明（会被提升），因此 setLanguage() 在任意时刻调用都不会命中暂时性死区。 */
var enhancementApi = undefined;
function applyThemeLabel() { if (enhancementApi) enhancementApi.applyThemeLabel(); }
function refreshOpenModal() { if (enhancementApi) enhancementApi.refreshOpenModal(); }

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  const dict = translations[lang] || translations.zh;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const value = dict[el.dataset.i18nHtml];
    if (value) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const value = dict[el.dataset.i18nAria];
    if (value) el.setAttribute("aria-label", value);
  });

  /* 作品卡的整卡点击按钮没有可见文字，其无障碍名称由标题动态拼装 */
  const ariaSep = lang === "zh" ? "：" : ": ";
  document.querySelectorAll(".project-open[data-project]").forEach(btn => {
    const card = btn.closest(".project");
    const titleEl = card && card.querySelector("h3");
    if (titleEl) {
      btn.setAttribute("aria-label", dict.viewDetails + ariaSep + titleEl.textContent.trim());
    }
  });

  languageToggle.textContent = lang === "zh" ? "EN" : "中";
  applyThemeLabel();
  refreshOpenModal();
}

languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "zh" ? "en" : "zh"));

/* ---------- 移动端折叠菜单 ---------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  navLinks.classList.toggle("open", open);
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

/* ---------- 联系方式 ---------- */
/* 邮箱与 GitHub 直接写在 index.html 的联系区（静态数据源，无脚本依赖）。
   原先的「复制邮箱 / 复制 QQ」功能与 Toast 组件已按设计定稿整体移除。 */

/* ==========================================================================
   交互增强层
   进度：明暗主题 / 滚动进度与分区高亮 / 进入视口动效 /
         项目卡 3D 倾斜 / 磁吸按钮 / 项目详情弹窗
   （自定义光标已按设计定稿移除，使用系统默认光标）
   ========================================================================== */
(function enhancementLayer() {
  "use strict";

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  let reducedMotion = motionQuery.matches;
  let finePointer = pointerQuery.matches;

  const TILT_MIN_WIDTH = 860;                       // 与 CSS 中取消透视的断点一致
  const canMagnet = () => finePointer && !reducedMotion;
  const canTilt = () => finePointer && !reducedMotion && window.innerWidth > TILT_MIN_WIDTH;

  const onMediaChange = (query, handler) => {
    if (typeof query.addEventListener === "function") query.addEventListener("change", handler);
  };

  /* ---------- 1. 明暗主题（持久化 + 首屏无闪烁） ---------- */
  const THEME_KEY = "quietfolio-theme";
  const THEME_COLORS = { light: "#fbfbfd", dark: "#000000" };
  const metaThemeColor = document.getElementById("metaThemeColor");
  let themeAnimTimer = null;

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }
  function applyThemeLabel() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    const dict = translations[currentLanguage] || translations.zh;
    const isDark = currentTheme() === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.setAttribute("aria-label", isDark ? dict.themeLight : dict.themeDark);
  }
  function setTheme(theme, animate) {
    const next = theme === "dark" ? "dark" : "light";
    if (animate && !reducedMotion) {
      document.documentElement.classList.add("theme-anim");
      clearTimeout(themeAnimTimer);
      themeAnimTimer = window.setTimeout(
        () => document.documentElement.classList.remove("theme-anim"), 440
      );
    }
    document.documentElement.setAttribute("data-theme", next);
    if (metaThemeColor) metaThemeColor.setAttribute("content", THEME_COLORS[next]);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* 隐私模式忽略 */ }
    applyThemeLabel();
  }
  function initTheme() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    let stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
    // 首屏主题已由 <head> 内联脚本写好，这里只做状态同步，避免二次闪烁
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
    if (metaThemeColor) metaThemeColor.setAttribute("content", THEME_COLORS[currentTheme()]);
    applyThemeLabel();
    btn.addEventListener("click", () => {
      setTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  }

  /* ---------- 2. 滚动进度条 + 顶栏状态 + 导航当前分区高亮 ---------- */
  function initScrollUI() {
    const bar = document.getElementById("scrollProgress");
    const header = document.getElementById("siteHeader");
    const sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    const navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
    let ticking = false;

    function update() {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      if (bar) bar.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
      if (header) header.classList.toggle("is-scrolled", doc.scrollTop > 8);
    }
    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    update();

    if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
      const spy = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navAnchors.forEach(a => {
              a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
            });
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach(s => spy.observe(s));
    }
  }

  /* ---------- 3. 进入视口的渐显 / 位移 ---------- */
  function initReveal() {
    const els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!els.length) return;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }

    // 同一父容器内按顺序交错，替代原先硬编码的 nth-child 延迟
    const counters = new Map();
    els.forEach(el => {
      const parent = el.parentElement || document.body;
      const index = counters.get(parent) || 0;
      counters.set(parent, index + 1);
      el.dataset.revealIndex = String(index);
    });

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Math.min(Number(el.dataset.revealIndex || 0) * 90, 360);
          if (delay === 0) el.classList.add("is-visible");
          else window.setTimeout(() => el.classList.add("is-visible"), delay);
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(el => io.observe(el));

    onMediaChange(motionQuery, () => {
      reducedMotion = motionQuery.matches;
      if (reducedMotion) els.forEach(el => el.classList.add("is-visible"));
    });
  }

  /* ---------- 4. 项目卡 3D 倾斜（rAF 缓动，复位自然） ---------- */
  function initTilt() {
    const cards = Array.prototype.slice.call(document.querySelectorAll("[data-tilt]"));
    if (!cards.length) return;

    cards.forEach(card => {
      const max = Number(card.dataset.tiltMax || 4);
      let raf = null, targetX = 0, targetY = 0, currentX = 0, currentY = 0;

      function render() {
        currentX += (targetX - currentX) * 0.13;   // 缓动插值 → 倾斜平滑不生硬
        currentY += (targetY - currentY) * 0.13;
        card.style.setProperty("--ty", (-currentY).toFixed(3) + "deg");
        card.style.setProperty("--tz", currentX.toFixed(3) + "deg");
        if (Math.abs(targetX - currentX) > 0.02 || Math.abs(targetY - currentY) > 0.02) {
          raf = window.requestAnimationFrame(render);
        } else {
          raf = null;
        }
      }
      function wake() { if (!raf) raf = window.requestAnimationFrame(render); }

      card.addEventListener("pointermove", e => {
        if (!canTilt() || e.pointerType !== "mouse") return;
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const px = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
        const py = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height) * 2 - 1));
        targetX = px * max;
        targetY = py * max;
        // 供光泽层（::after）定位
        card.style.setProperty("--mx", (((px + 1) / 2) * 100).toFixed(2) + "%");
        card.style.setProperty("--my", (((py + 1) / 2) * 100).toFixed(2) + "%");
        card.classList.add("is-tilting");
        wake();
      }, { passive: true });

      card.addEventListener("pointerleave", () => {
        targetX = 0; targetY = 0; currentX = 0; currentY = 0;
        if (raf) { window.cancelAnimationFrame(raf); raf = null; }
        // 先移除 is-tilting 交回 CSS 过渡，再归零 → 由过渡驱动自然复位
        card.classList.remove("is-tilting");
        window.requestAnimationFrame(() => {
          card.style.setProperty("--ty", "0deg");
          card.style.setProperty("--tz", "0deg");
        });
      }, { passive: true });
    });
  }

  /* ---------- 5. 磁吸按钮（指针靠近产生吸附位移） ---------- */
  function initMagnetic() {
    const items = Array.prototype.slice.call(document.querySelectorAll("[data-magnetic]"));
    if (!items.length) return;

    items.forEach(el => {
      const strength = Number(el.dataset.magneticStrength || 0.2);
      el.addEventListener("pointermove", e => {
        if (!canMagnet() || e.pointerType !== "mouse") return;
        const rect = el.getBoundingClientRect();
        if (!rect.width) return;
        const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
        const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
        el.classList.add("is-magnetic-active");
        el.style.setProperty("--mag-x", dx.toFixed(2) + "px");
        el.style.setProperty("--mag-y", dy.toFixed(2) + "px");
      }, { passive: true });

      el.addEventListener("pointerleave", () => {
        el.classList.remove("is-magnetic-active");
        el.style.setProperty("--mag-x", "0px");
        el.style.setProperty("--mag-y", "0px");
      }, { passive: true });
    });
  }

  /* ---------- 6. 项目详情弹窗（静态数据源） ---------- */
  const projectDetails = {
    "quiet-space": {
      zh: {
        type: "界面设计 · 概念", title: "Quiet Space",
        summary: "探索更安静、更专注的数字体验。",
        text: "以「少而更好」为前提重做的阅读与任务界面：用克制的层级、可预期的动效和更低的视觉噪音，把注意力还给内容本身。包含信息架构梳理、视觉系统与高保真原型三个部分。",
        role: "独立设计 & 前端实现", year: "2026",
        tags: ["信息架构", "视觉系统", "交互原型", "前端实现"]
      },
      en: {
        type: "Interface design · Concept", title: "Quiet Space",
        summary: "Exploring calmer, more intentional digital experiences.",
        text: "A reading and task interface rebuilt around “less, but better”: restrained hierarchy, predictable motion, and far less visual noise so attention goes back to the content. Covers information architecture, a visual system, and a high-fidelity prototype.",
        role: "Design & front-end, solo", year: "2026",
        tags: ["Information architecture", "Visual system", "Prototype", "Front-end"]
      }
    },
    "little-experiments": {
      zh: {
        type: "创意开发 · 实验", title: "Little Experiments",
        summary: "把有趣的想法变成可以体验的小作品。",
        text: "一组短周期实验合集：生成式图形、微交互动效和跑在浏览器里的物理玩具。每个实验控制在一两周内完成，重点是把想法尽快变成能上手玩的东西。",
        role: "创意开发", year: "2026",
        tags: ["Canvas", "WebGL", "微交互", "原型"]
      },
      en: {
        type: "Creative code · Experiment", title: "Little Experiments",
        summary: "Turning curious ideas into small things you can experience.",
        text: "A collection of short-cycle experiments: generative graphics, micro-interactions, and physics toys that run in the browser. Each one is scoped to one or two weeks — the point is getting an idea into something playable, fast.",
        role: "Creative development", year: "2026",
        tags: ["Canvas", "WebGL", "Motion", "Prototype"]
      }
    },
    "notes-to-self": {
      zh: {
        type: "写作 · 记录", title: "Notes to Self",
        summary: "整理学习过程中的问题、答案与灵感。",
        text: "长期维护的个人笔记：把读过的、做过的、想明白的事写成可以回看的内容。分为方法、工具与随想三类，不定期更新。",
        role: "写作 & 编辑", year: "2026",
        tags: ["长期记录", "方法", "工具", "随想"]
      },
      en: {
        type: "Writing · Reflection", title: "Notes to Self",
        summary: "Collecting questions, discoveries, and bits of inspiration.",
        text: "A long-running personal notebook: turning what I’ve read, built, and figured out into something I can come back to. Organised into method, tools, and musings — updated irregularly.",
        role: "Writing & editing", year: "2026",
        tags: ["Long-form notes", "Method", "Tools", "Musings"]
      }
    }
  };
  const projectOrder = ["quiet-space", "little-experiments", "notes-to-self"];

  const modalEl = document.getElementById("projectModal");
  const modalDialog = document.getElementById("modalDialog");
  const modalVisual = document.getElementById("modalVisual");
  const modalBody = document.getElementById("modalBody");
  const modalTypeEl = document.getElementById("modalType");
  const modalTitleEl = document.getElementById("modalTitle");
  const modalSummaryEl = document.getElementById("modalSummary");
  const modalTextEl = document.getElementById("modalText");
  const modalRoleEl = document.getElementById("modalRole");
  const modalYearEl = document.getElementById("modalYear");
  const modalTagsEl = document.getElementById("modalTags");
  const modalLinkEl = document.getElementById("modalLink");
  const modalLinkLabelEl = document.getElementById("modalLinkLabel");
  const modalPrevEl = document.getElementById("modalPrev");
  const modalNextEl = document.getElementById("modalNext");
  const modalCloseEl = document.getElementById("modalClose");

  const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  const INERT_TARGETS = ["siteHeader", "home"];

  let activeProjectId = null;
  let lastFocused = null;

  function inertNodes() {
    const list = INERT_TARGETS.map(id => document.getElementById(id));
    list.push(document.querySelector(".site-footer"));
    list.push(document.querySelector(".skip-link"));
    return list.filter(Boolean);
  }

  function renderProjectModal(id) {
    const data = projectDetails[id];
    if (!data || !modalEl) return;
    const dict = data[currentLanguage] || data.zh;
    const ui = translations[currentLanguage] || translations.zh;
    activeProjectId = id;
    modalEl.dataset.project = id;

    // 复用卡片里的作品视觉，一次编写两处呈现，无需重复标记
    const trigger = document.querySelector('.project-open[data-project="' + id + '"]');
    const card = trigger && trigger.closest(".project");
    const source = card && card.querySelector(".project-visual");
    modalVisual.textContent = "";
    if (source) modalVisual.appendChild(source.cloneNode(true));

    modalTypeEl.textContent = dict.type;
    modalTitleEl.textContent = dict.title;
    modalSummaryEl.textContent = dict.summary;
    modalTextEl.textContent = dict.text;
    modalRoleEl.textContent = dict.role;
    modalYearEl.textContent = dict.year;

    modalTagsEl.textContent = "";
    dict.tags.forEach(tag => {
      const li = document.createElement("li");
      li.textContent = tag;                 // textContent 而非 innerHTML：天然防注入
      modalTagsEl.appendChild(li);
    });

    modalLinkEl.setAttribute("href", "#contact");
    modalLinkLabelEl.textContent = ui.modalLinkLabel;

    const index = projectOrder.indexOf(id);
    modalPrevEl.disabled = index <= 0;
    modalNextEl.disabled = index >= projectOrder.length - 1;
  }

  /* 滚动锁定：只切换类名。
     CSS 侧 html{scrollbar-gutter:stable} 会常驻预留滚动条槽位，
     配合 html.modal-locked{overflow:hidden} 即可锁定滚动且不产生任何横向跳动，
     无需再做滚动条宽度补偿计算。 */
  function setScrollLocked(locked) {
    document.documentElement.classList.toggle("modal-locked", locked);
  }

  function openModal(id, trigger) {
    if (!modalEl || !projectDetails[id] || !modalEl.hidden) return;
    lastFocused = trigger || document.activeElement;
    renderProjectModal(id);
    modalEl.hidden = false;
    setScrollLocked(true);
    inertNodes().forEach(node => { node.inert = true; });
    void modalEl.offsetWidth;                    // 强制重排，让过渡从初始态开始
    modalEl.classList.add("is-open");
    window.requestAnimationFrame(() => {
      if (modalDialog) modalDialog.focus();
    });
  }

  function closeModal() {
    if (!modalEl || modalEl.hidden) return;
    modalEl.classList.remove("is-open");
    setScrollLocked(false);
    inertNodes().forEach(node => { node.inert = false; });

    const finish = () => {
      modalEl.hidden = true;
      delete modalEl.dataset.project;
      activeProjectId = null;
      const restore = lastFocused;
      lastFocused = null;
      if (restore && typeof restore.focus === "function") restore.focus();
    };
    if (reducedMotion) finish();
    else window.setTimeout(finish, 360);          // 与 CSS 退出过渡时长对齐
  }

  function moveFocusWithin(e) {
    if (!modalDialog) return;
    const nodes = Array.prototype.filter.call(
      modalDialog.querySelectorAll(FOCUSABLE),
      el => el.offsetParent !== null
    );
    if (!nodes.length) { e.preventDefault(); modalDialog.focus(); return; }
    const first = nodes[0], last = nodes[nodes.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === modalDialog)) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  function stepProject(delta) {
    const index = projectOrder.indexOf(activeProjectId);
    const next = index + delta;
    if (index < 0 || next < 0 || next >= projectOrder.length) return;
    renderProjectModal(projectOrder[next]);
    if (modalBody) modalBody.scrollTop = 0;
    if (modalDialog) modalDialog.focus();
  }

  function initModal() {
    if (!modalEl) return;

    document.querySelectorAll(".project-open[data-project]").forEach(btn => {
      btn.addEventListener("click", () => openModal(btn.dataset.project, btn));
    });

    if (modalCloseEl) modalCloseEl.addEventListener("click", closeModal);
    if (modalPrevEl) modalPrevEl.addEventListener("click", () => stepProject(-1));
    if (modalNextEl) modalNextEl.addEventListener("click", () => stepProject(1));

    // 遮罩关闭（点击弹窗内边距区域同样命中遮罩层）
    modalEl.addEventListener("click", e => {
      if (e.target.closest("[data-modal-dismiss]")) closeModal();
    });

    // 弹窗内跳转链接：关闭弹窗后继续默认锚点跳转，并跳过焦点回填以免抢滚动
    if (modalLinkEl) modalLinkEl.addEventListener("click", () => { lastFocused = null; closeModal(); });

    // 键盘：Esc 关闭 / Tab 焦点循环
    document.addEventListener("keydown", e => {
      if (modalEl.hidden) return;
      if (e.key === "Escape") { e.preventDefault(); closeModal(); return; }
      if (e.key === "Tab") moveFocusWithin(e);
    });
  }

  /* 语言切换时刷新已打开的弹窗 */
  function refreshOpenModal() {
    if (!modalEl || modalEl.hidden || !activeProjectId) return;
    renderProjectModal(activeProjectId);
  }

  /* ---------- 初始化 ---------- */
  enhancementApi = { applyThemeLabel: applyThemeLabel, refreshOpenModal: refreshOpenModal };

  try {
    initTheme();
    initScrollUI();
    initReveal();
    initTilt();
    initMagnetic();
    initModal();
  } catch (err) {
    // 任何初始化异常都不应导致内容不可见：兜底显示全部区块
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
    if (window.console && window.console.error) window.console.error("[enhancement] init failed:", err);
  }
})();

/* 首屏语言：放在最后调用，此时增强层已就绪 */
setLanguage("zh");
