/**
 * IKASDA - Application Controller
 * Portal Ikatan Alumni & Santri Pondok Pesantren Darussalam Ngesong Jombang
 * Theme: Modern Edoo Educational Design System
 * Content & Data edited directly via Antigravity in assets/js/data.js
 */

document.addEventListener("DOMContentLoaded", () => {
  // Global Live Data from data.js
  let siteData = getSiteData();
  let currentPeriodId = "periode-2021-2026";
  let activeViewMode = "grid";
  let currentNewsCategory = "all";

  // Navigation & Core Elements
  const header = document.querySelector(".main-header");
  const mobileToggleBtn = document.getElementById("mobileToggleBtn");
  const navMenu = document.getElementById("navMenu");
  const heroSection = document.getElementById("beranda");

  // =========================================================================
  // 1. HEADER SCROLL & MOBILE DRAWER
  // =========================================================================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Mobile dropdown toggle handlers
  document.querySelectorAll(".nav-item").forEach(item => {
    const dropdown = item.querySelector(".dropdown-menu");
    const link = item.querySelector(".nav-link");
    if (dropdown && link) {
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          if (!item.classList.contains("dropdown-open")) {
            e.preventDefault();
            document.querySelectorAll(".nav-item.dropdown-open").forEach(other => {
              if (other !== item) other.classList.remove("dropdown-open");
            });
            item.classList.add("dropdown-open");
          }
        }
      });
    }
  });

  // Smooth scroll and active link highlighting
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const parentItem = link.closest(".nav-item");
      const hasDropdown = parentItem && parentItem.querySelector(".dropdown-menu");
      if (window.innerWidth <= 768 && hasDropdown && !parentItem.classList.contains("dropdown-open")) {
        return;
      }
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      if (navMenu?.classList.contains("open")) {
        navMenu.classList.remove("open");
      }
      document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("dropdown-open"));
    });
  });

  // Dropdown items click handling
  document.querySelectorAll(".dropdown-item a").forEach(dLink => {
    dLink.addEventListener("click", () => {
      if (navMenu?.classList.contains("open")) {
        navMenu.classList.remove("open");
      }
      document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("dropdown-open"));
    });
  });

  // =========================================================================
  // 2. RENDER HERO & SITE SETTINGS (Direct from data.js)
  // =========================================================================
  function renderHeroAndSettings() {
    siteData = getSiteData();

    // Hero Text
    const heroBadge = document.getElementById("heroBadgeText");
    const heroTitle = document.getElementById("heroHeadingText");
    const heroDesc = document.getElementById("heroDescText");
    const heroRevScore = document.getElementById("heroReviewScore");
    const heroRevCount = document.getElementById("heroReviewCount");

    if (heroBadge && siteData.hero.badge) heroBadge.textContent = siteData.hero.badge;
    if (heroTitle && siteData.hero.title) heroTitle.textContent = siteData.hero.title;
    if (heroDesc && siteData.hero.description) heroDesc.textContent = siteData.hero.description;
    if (heroRevScore && siteData.hero.reviewScore) heroRevScore.textContent = siteData.hero.reviewScore;
    if (heroRevCount && siteData.hero.reviewCount) heroRevCount.textContent = siteData.hero.reviewCount;

    const heroSlide1 = document.getElementById("heroSlide1");
    if (heroSlide1) {
      const bgImg = siteData.hero.heroImage || "assets/img/hero-pesantren.jpg";
      heroSlide1.style.backgroundImage = `url('${bgImg}')`;
    }

    // 3 Feature Boxes
    const featBoxes = document.querySelectorAll(".feature-box");
    if (siteData.features && siteData.features.length >= 3 && featBoxes.length >= 3) {
      siteData.features.forEach((feat, idx) => {
        const box = featBoxes[idx];
        if (box) {
          const title = box.querySelector("h4");
          const desc = box.querySelector("p");
          if (title) title.textContent = feat.title;
          if (desc) desc.textContent = feat.description;
        }
      });
    }

    // Experience Stats
    const statAlumni = document.getElementById("statTotalAlumni");
    const statAngkatan = document.getElementById("statTotalAngkatan");
    const statKorda = document.getElementById("statTotalKorda");
    if (statAlumni) statAlumni.textContent = siteData.stats.totalAlumni;
    if (statAngkatan) statAngkatan.textContent = siteData.stats.totalAngkatan;
    if (statKorda) statKorda.textContent = siteData.stats.totalKorda;

    // Contact info in footer
    const contactPhone = document.getElementById("footerPhone");
    const contactEmail = document.getElementById("footerEmail");
    const contactAddress = document.getElementById("footerAddress");
    if (contactPhone) contactPhone.textContent = siteData.siteSettings.contactPhone;
    if (contactEmail) contactEmail.textContent = siteData.siteSettings.contactEmail;
    if (contactAddress) contactAddress.textContent = siteData.siteSettings.address;
  }

  // =========================================================================
  // 2B. HERO SLIDER CONTROLLER (Manual on Click: Beranda <-> Jajaran Pengasuh <-> Munas)
  // =========================================================================
  let currentHeroSlide = 0;
  const heroSlideElements = [
    document.getElementById("heroSlide1"),
    document.getElementById("heroSlide2"),
    document.getElementById("heroSlide3")
  ].filter(Boolean);
  const heroDotElements = document.querySelectorAll(".hero-dot");
  const heroPrevBtn = document.getElementById("heroPrevBtn");
  const heroNextBtn = document.getElementById("heroNextBtn");
  const btnBackToSlide1 = document.getElementById("btnBackToSlide1");

  const slideTitles = [
    "Slide 1: Beranda Utama",
    "Slide 2: Jajaran Pengasuh",
    "Slide 3: Munas IKASDA Ngesong"
  ];

  function setHeroSlide(index) {
    if (!heroSlideElements.length) return;
    currentHeroSlide = (index + heroSlideElements.length) % heroSlideElements.length;
    heroSlideElements.forEach((slide, idx) => {
      if (slide) {
        if (idx === currentHeroSlide) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      }
    });

    const dots = document.querySelectorAll(".hero-dot");
    dots.forEach((dot, idx) => {
      if (idx === currentHeroSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    if (heroNextBtn) {
      const nextIdx = (currentHeroSlide + 1) % heroSlideElements.length;
      heroNextBtn.title = slideTitles[nextIdx] || "Slide Selanjutnya";
      heroNextBtn.setAttribute("aria-label", heroNextBtn.title);
    }
    if (heroPrevBtn) {
      const prevIdx = (currentHeroSlide - 1 + heroSlideElements.length) % heroSlideElements.length;
      heroPrevBtn.title = slideTitles[prevIdx] || "Slide Sebelumnya";
      heroPrevBtn.setAttribute("aria-label", heroPrevBtn.title);
    }
  }

  if (heroNextBtn) {
    heroNextBtn.addEventListener("click", () => {
      setHeroSlide(currentHeroSlide + 1);
    });
  }

  if (heroPrevBtn) {
    heroPrevBtn.addEventListener("click", () => {
      setHeroSlide(currentHeroSlide - 1);
    });
  }

  if (btnBackToSlide1) {
    btnBackToSlide1.addEventListener("click", () => {
      setHeroSlide(0);
    });
  }

  heroDotElements.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetSlide = parseInt(dot.getAttribute("data-slide") || "0", 10);
      setHeroSlide(targetSlide);
    });
  });

  // =========================================================================
  // 3. KETUA & PENGURUS IKASDA DARI MASA KE MASA (Interactive Timeline)
  // =========================================================================
  window.switchPeriod = function(periodId, e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    currentPeriodId = periodId;
    renderPeriodsTimeline();

    // Set active class on Ketua Ikasda nav-link
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    const ketuaLink = document.getElementById("navLinkKetua");
    if (ketuaLink) ketuaLink.classList.add("active");

    // Close mobile nav drawer if open
    if (navMenu && navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
    }
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("dropdown-open"));

    // Smooth scroll to #pengurus
    const targetSection = document.getElementById("pengurus");
    if (targetSection) {
      const headerOffset = 85;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      if (history.pushState) {
        history.pushState(null, null, "#pengurus");
      }
    }
  };

  function renderPeriodsTimeline() {
    siteData = getSiteData();
    const pillsContainer = document.getElementById("periodPillsContainer");
    if (pillsContainer) {
      pillsContainer.innerHTML = "";
      siteData.periods.forEach(p => {
        const btn = document.createElement("button");
        btn.className = `period-pill-btn ${p.id === currentPeriodId ? 'active' : ''}`;
        btn.setAttribute("data-period", p.id);
        btn.innerHTML = `<i class="fa-solid fa-clock-rotate-left"></i> ${p.periodYears || p.name} ${p.isCurrent ? '<span style="font-size:0.75rem; background: var(--edoo-primary-dark); color: #fff; padding: 2px 7px; border-radius: 99px; margin-left: 4px;">Aktif</span>' : ''}`;
        btn.addEventListener("click", () => {
          currentPeriodId = p.id;
          renderPeriodsTimeline();
        });
        pillsContainer.appendChild(btn);
      });
    }

    // Synchronize active state in the navbar dropdown
    const dropdownLinks = document.querySelectorAll("#ketuaDropdownMenu .dropdown-item a");
    dropdownLinks.forEach(link => {
      const pId = link.getAttribute("data-period");
      if (pId === currentPeriodId) {
        link.classList.add("active-period-item");
      } else {
        link.classList.remove("active-period-item");
      }
    });

    const currentPeriod = siteData.periods.find(p => p.id === currentPeriodId) || siteData.periods[siteData.periods.length - 1];
    if (!currentPeriod) return;

    const bannerTitle = document.getElementById("periodLeadTitle");
    const bannerDesc = document.getElementById("periodLeadTheme");
    const bannerTag = document.getElementById("periodLeadTag");
    if (bannerTitle) bannerTitle.textContent = `${currentPeriod.name} — ${currentPeriod.lead}`;
    if (bannerDesc) bannerDesc.textContent = `Tema Kepengurusan: ${currentPeriod.theme}`;
    if (bannerTag) {
      bannerTag.textContent = currentPeriod.tag;
      bannerTag.style.background = currentPeriod.isCurrent ? "var(--edoo-primary-dark)" : "var(--slate-700)";
    }

    const committeeGrid = document.getElementById("committeeCardsGrid");
    if (committeeGrid) {
      committeeGrid.innerHTML = "";
      currentPeriod.members.forEach(member => {
        const card = document.createElement("div");
        card.className = "committee-member-card";
        card.innerHTML = `
          <div class="committee-img-wrap">
            <img src="${member.avatar}" alt="${member.name}" loading="lazy">
            <span class="committee-tag-role">${member.role}</span>
          </div>
          <div class="committee-card-content">
            <h5>${member.name}</h5>
            <div class="batch-tag"><i class="fa-solid fa-graduation-cap"></i> ${member.batch}</div>
            <p class="prof">${member.profession}</p>
            <div class="quote-box">"${member.quote}"</div>
          </div>
        `;
        committeeGrid.appendChild(card);
      });
    }
  }

  // =========================================================================
  // 4. AGENDA & BERITA (Category Filtering & Reader)
  // =========================================================================
  function renderNewsSection() {
    siteData = getSiteData();
    const container = document.getElementById("newsCardsContainer");
    if (!container) return;
    container.innerHTML = "";

    let items = siteData.eventsAndNews;
    if (currentNewsCategory !== "all") {
      if (currentNewsCategory === "agenda") items = items.filter(i => i.type === "agenda");
      else if (currentNewsCategory === "news") items = items.filter(i => i.type === "news");
      else items = items.filter(i => i.category.toLowerCase().includes(currentNewsCategory.toLowerCase()));
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-soft); border-radius: var(--radius-lg);">
          <i class="fa-solid fa-newspaper" style="font-size: 2.5rem; color: var(--slate-400); margin-bottom: 0.75rem;"></i>
          <h4>Belum Ada Artikel</h4>
          <p style="color: var(--slate-500); font-size: 0.9rem;">Tidak ada postingan dalam kategori ini.</p>
        </div>
      `;
      return;
    }

    items.forEach(item => {
      const isAgenda = item.type === "agenda";
      const card = document.createElement("div");
      card.className = "news-card-edoo";
      card.innerHTML = `
        <div class="news-card-media">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <span class="news-card-badge">
            <i class="fa-solid ${isAgenda ? 'fa-calendar-days' : 'fa-newspaper'}"></i> ${item.category}
          </span>
        </div>
        <div class="news-card-content">
          <div class="news-card-meta">
            <span><i class="fa-regular fa-calendar"></i> ${item.date}</span>
            <span><i class="fa-regular fa-clock"></i> ${item.time}</span>
          </div>
          <h4 class="news-card-title">${item.title}</h4>
          <p class="news-card-snippet">${item.snippet}</p>
          <div class="news-card-footer">
            <button class="btn-read-link" data-news-id="${item.id}">
              Baca Detail <i class="fa-solid fa-arrow-right"></i>
            </button>
            ${isAgenda && item.rsvpOpen ? `
              <button class="btn-action-sm primary-sm rsvp-btn-open" data-title="${item.title}">
                <i class="fa-solid fa-calendar-check"></i> RSVP
              </button>
            ` : ''}
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // Event listeners
    container.querySelectorAll(".btn-read-link").forEach(btn => {
      btn.addEventListener("click", () => {
        openNewsModal(btn.getAttribute("data-news-id"));
      });
    });

    container.querySelectorAll(".rsvp-btn-open").forEach(btn => {
      btn.addEventListener("click", () => {
        openRsvpModal(btn.getAttribute("data-title"));
      });
    });
  }

  // News Category Pills
  document.querySelectorAll(".news-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".news-pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentNewsCategory = btn.getAttribute("data-cat");
      renderNewsSection();
    });
  });

  // =========================================================================
  // 5. DIREKTORI ALUMNI (Search & Multi-Filter)
  // =========================================================================
  function renderAlumniDirectory() {
    siteData = getSiteData();
    const searchVal = (document.getElementById("alumniSearchInput")?.value || "").toLowerCase().trim();
    const batchVal = document.getElementById("filterBatchSelect")?.value || "all";
    const profVal = document.getElementById("filterProfSelect")?.value || "all";
    const kordaVal = document.getElementById("filterKordaSelect")?.value || "all";

    const filtered = siteData.alumni.filter(a => {
      const matchSearch = !searchVal || (
        a.name.toLowerCase().includes(searchVal) ||
        a.nis.toLowerCase().includes(searchVal) ||
        a.profession.toLowerCase().includes(searchVal) ||
        a.institution.toLowerCase().includes(searchVal) ||
        a.city.toLowerCase().includes(searchVal)
      );

      let matchBatch = true;
      if (batchVal !== "all") {
        const y = a.graduationYear;
        if (batchVal === "1980-1995") matchBatch = y >= 1980 && y <= 1995;
        else if (batchVal === "1996-2005") matchBatch = y >= 1996 && y <= 2005;
        else if (batchVal === "2006-2015") matchBatch = y >= 2006 && y <= 2015;
        else if (batchVal === "2016-2025") matchBatch = y >= 2016 && y <= 2025;
      }

      let matchProf = true;
      if (profVal !== "all") {
        matchProf = a.profession.toLowerCase().includes(profVal.toLowerCase());
      }

      let matchKorda = true;
      if (kordaVal !== "all") {
        matchKorda = a.korda === kordaVal;
      }

      return matchSearch && matchBatch && matchProf && matchKorda;
    });

    const countDisplay = document.getElementById("alumniCountDisplay");
    if (countDisplay) {
      countDisplay.innerHTML = `Menampilkan <strong>${filtered.length}</strong> dari <strong>${siteData.alumni.length}</strong> alumni terdaftar`;
    }

    const gridContainer = document.getElementById("alumniCardsContainer");
    const tableContainer = document.getElementById("alumniTableWrapper");
    const tableBody = document.getElementById("alumniTableBody");

    if (activeViewMode === "grid") {
      if (gridContainer) gridContainer.style.display = "grid";
      if (tableContainer) tableContainer.style.display = "none";
      if (gridContainer) {
        gridContainer.innerHTML = "";
        if (filtered.length === 0) {
          gridContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3.5rem; background: #ffffff; border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
              <i class="fa-solid fa-user-slash" style="font-size: 2.5rem; color: var(--slate-400); margin-bottom: 0.75rem;"></i>
              <h4>Data Alumni Tidak Ditemukan</h4>
              <p style="color: var(--slate-500); font-size: 0.9rem;">Coba gunakan kata kunci lain atau ubah filter pencarian Anda.</p>
            </div>
          `;
          return;
        }

        filtered.forEach(item => {
          const card = document.createElement("div");
          card.className = "alumni-card-edoo";
          card.innerHTML = `
            <div class="alumni-head-row">
              <img src="${item.avatar}" alt="${item.name}" class="alumni-avatar-circle" loading="lazy">
              <div class="alumni-head-info">
                <h5>${item.name}</h5>
                <div class="alumni-badges-row">
                  <span class="pill-batch">Angkatan ${item.batch}</span>
                  <span class="pill-nis">${item.nis}</span>
                </div>
              </div>
            </div>
            <div class="alumni-body-details">
              <div class="alumni-detail-line">
                <i class="fa-solid fa-briefcase"></i>
                <span>${item.profession}</span>
              </div>
              <div class="alumni-detail-line">
                <i class="fa-solid fa-building"></i>
                <span>${item.institution}</span>
              </div>
              <div class="alumni-detail-line">
                <i class="fa-solid fa-location-dot"></i>
                <span>${item.city}, ${item.province}</span>
              </div>
              <div class="alumni-detail-line">
                <i class="fa-solid fa-map-pin"></i>
                <span>${item.korda}</span>
              </div>
            </div>
            <div class="alumni-card-actions">
              <button class="btn-action-sm btn-view-alumni-detail" data-id="${item.id}">
                <i class="fa-solid fa-eye"></i> Detail
              </button>
              <button class="btn-action-sm primary-sm btn-view-alumni-kta" data-id="${item.id}">
                <i class="fa-solid fa-id-card"></i> KTA Digital
              </button>
            </div>
          `;
          gridContainer.appendChild(card);
        });
      }
    } else {
      if (gridContainer) gridContainer.style.display = "none";
      if (tableContainer) tableContainer.style.display = "block";
      if (tableBody) {
        tableBody.innerHTML = "";
        filtered.forEach(item => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td><strong>${item.nis}</strong></td>
            <td>
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <img src="${item.avatar}" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover;" alt="${item.name}">
                <div>
                  <div style="font-weight: 700; color: var(--slate-900);">${item.name}</div>
                  <small style="color: var(--slate-500);">${item.gender}</small>
                </div>
              </div>
            </td>
            <td><span class="pill-batch">${item.graduationYear}</span></td>
            <td>
              <div>${item.profession}</div>
              <small style="color: var(--slate-500);">${item.institution}</small>
            </td>
            <td>${item.city} (${item.korda})</td>
            <td>
              <div style="display: flex; gap: 0.4rem;">
                <button class="btn-action-sm btn-view-alumni-detail" data-id="${item.id}" title="Lihat Profil">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="btn-action-sm primary-sm btn-view-alumni-kta" data-id="${item.id}" title="KTA Digital">
                  <i class="fa-solid fa-id-card"></i>
                </button>
              </div>
            </td>
          `;
          tableBody.appendChild(tr);
        });
      }
    }

    // Attach click events
    document.querySelectorAll(".btn-view-alumni-detail").forEach(btn => {
      btn.addEventListener("click", () => openAlumniModal(btn.getAttribute("data-id")));
    });
    document.querySelectorAll(".btn-view-alumni-kta").forEach(btn => {
      btn.addEventListener("click", () => openKtaModal(btn.getAttribute("data-id")));
    });
  }

  // Filter Listeners
  ["alumniSearchInput", "filterBatchSelect", "filterProfSelect", "filterKordaSelect"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", renderAlumniDirectory);
      el.addEventListener("change", renderAlumniDirectory);
    }
  });

  // Toggle Grid / Table View
  const btnGrid = document.getElementById("btnViewGrid");
  const btnTable = document.getElementById("btnViewTable");
  if (btnGrid && btnTable) {
    btnGrid.addEventListener("click", () => {
      activeViewMode = "grid";
      btnGrid.classList.add("active");
      btnTable.classList.remove("active");
      renderAlumniDirectory();
    });
    btnTable.addEventListener("click", () => {
      activeViewMode = "table";
      btnTable.classList.add("active");
      btnGrid.classList.remove("active");
      renderAlumniDirectory();
    });
  }

  // =========================================================================
  // 6. PUBLIC INTERACTIVE MODALS (Detail Alumni, KTA Digital, News, RSVP)
  // =========================================================================
  const alumniDetailModal = document.getElementById("alumniDetailModal");
  const ktaPreviewModal = document.getElementById("ktaPreviewModal");
  const newsDetailModal = document.getElementById("newsDetailModal");
  const rsvpModal = document.getElementById("rsvpEventModal");

  function openAlumniModal(id) {
    siteData = getSiteData();
    const alumnus = siteData.alumni.find(a => a.id === id);
    if (!alumnus || !alumniDetailModal) return;

    const body = alumniDetailModal.querySelector(".modal-body");
    body.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1.25rem;">
        <img src="${alumnus.avatar}" style="width: 84px; height: 84px; border-radius: 50%; object-fit: cover; border: 3px solid var(--edoo-primary);" alt="${alumnus.name}">
        <div>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--slate-900);">${alumnus.name}</h3>
          <div style="display: flex; gap: 0.5rem; margin-top: 4px; flex-wrap: wrap;">
            <span class="pill-batch">Angkatan ${alumnus.batch}</span>
            <span class="pill-nis">${alumnus.nis}</span>
            <span class="pill-batch" style="background: var(--slate-100); color: var(--slate-700);">${alumnus.korda}</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: var(--bg-soft); padding: 0.85rem 1rem; border-radius: var(--radius-md);">
          <small style="color: var(--slate-500); font-weight: 600;">Profesi & Keahlian</small>
          <div style="font-weight: 700; color: var(--slate-900);">${alumnus.profession}</div>
        </div>
        <div style="background: var(--bg-soft); padding: 0.85rem 1rem; border-radius: var(--radius-md);">
          <small style="color: var(--slate-500); font-weight: 600;">Instansi / Lembaga</small>
          <div style="font-weight: 700; color: var(--slate-900);">${alumnus.institution}</div>
        </div>
        <div style="background: var(--bg-soft); padding: 0.85rem 1rem; border-radius: var(--radius-md);">
          <small style="color: var(--slate-500); font-weight: 600;">Kamar / Asrama Nyantri</small>
          <div style="font-weight: 700; color: var(--slate-900);">${alumnus.dorm || '-'}</div>
        </div>
        <div style="background: var(--bg-soft); padding: 0.85rem 1rem; border-radius: var(--radius-md);">
          <small style="color: var(--slate-500); font-weight: 600;">Domisili</small>
          <div style="font-weight: 700; color: var(--slate-900);">${alumnus.city}, ${alumnus.province}</div>
        </div>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h5 style="font-size: 0.95rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.35rem;">Tentang & Kiprah:</h5>
        <p style="font-size: 0.92rem; color: var(--slate-600); line-height: 1.6;">${alumnus.bio || 'Alumni aktif Pondok Pesantren Darussalam Ngesong Jombang.'}</p>
      </div>

      <div style="background: var(--edoo-primary-soft); border-left: 4px solid var(--edoo-primary); padding: 1rem 1.25rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 1.5rem;">
        <h5 style="font-size: 0.88rem; font-weight: 700; color: var(--edoo-primary-deep); margin-bottom: 0.25rem;">
          <i class="fa-solid fa-quote-left"></i> Pesan & Nasihat Santri:
        </h5>
        <p style="font-style: italic; font-size: 0.9rem; color: var(--slate-800);">"${alumnus.advice || 'Selalu rawat sanad keilmuan dan silaturahmi dengan sesama alumni.'}"</p>
      </div>

      <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
        <button class="btn-action-sm primary-sm" onclick="document.getElementById('alumniDetailModal').classList.remove('active'); openKtaModal('${alumnus.id}');">
          <i class="fa-solid fa-id-card"></i> Lihat KTA Digital
        </button>
      </div>
    `;

    alumniDetailModal.classList.add("active");
  }

  function openKtaModal(id) {
    siteData = getSiteData();
    const alumnus = siteData.alumni.find(a => a.id === id);
    if (!alumnus || !ktaPreviewModal) return;

    const card = ktaPreviewModal.querySelector(".kta-card-preview");
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.75rem; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="width: 44px; height: 44px; border-radius: 10px; background: #ffffff; display: flex; align-items: center; justify-content: center; padding: 3px; border: 2px solid rgba(255,255,255,0.6); flex-shrink: 0;">
            <img src="assets/img/logo-ikasda.png" style="width: 100%; height: 100%; object-fit: contain;" alt="Logo">
          </div>
          <div style="text-align: left;">
            <h5 style="font-size: 1rem; font-weight: 800; color: #ffffff;">KARTU ANGGOTA IKASDA</h5>
            <small style="color: #a7f3d0; font-size: 0.72rem;">PP. Darussalam Ngesong Jombang</small>
          </div>
        </div>
        <span style="background: rgba(255,255,255,0.18); font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: var(--radius-pill);">VERIFIED SANTRINET</span>
      </div>

      <div style="display: flex; align-items: center; gap: 1.25rem; text-align: left;">
        <img src="${alumnus.avatar}" style="width: 80px; height: 100px; border-radius: 8px; object-fit: cover; border: 2px solid #ffffff;" alt="${alumnus.name}">
        <div>
          <h4 style="font-size: 1.2rem; font-weight: 800; color: #ffffff; margin-bottom: 4px;">${alumnus.name}</h4>
          <p style="font-size: 0.82rem; color: #cbd5e1; margin-bottom: 3px;"><i class="fa-solid fa-barcode"></i> NIS: <strong>${alumnus.nis}</strong></p>
          <p style="font-size: 0.82rem; color: #cbd5e1; margin-bottom: 3px;"><i class="fa-solid fa-graduation-cap"></i> Kelulusan: Tahun ${alumnus.graduationYear}</p>
          <p style="font-size: 0.82rem; color: #cbd5e1; margin-bottom: 3px;"><i class="fa-solid fa-briefcase"></i> ${alumnus.profession}</p>
          <p style="font-size: 0.82rem; color: #cbd5e1;"><i class="fa-solid fa-location-dot"></i> ${alumnus.korda}</p>
        </div>
      </div>

      <div style="margin-top: 1.25rem; border-top: 1px dashed rgba(255,255,255,0.2); padding-top: 0.75rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; color: #a7f3d0;">
        <span>PP. Darussalam Ngesong, Sengon, Jombang</span>
        <span>Santri Sak Lawase</span>
      </div>
    `;

    ktaPreviewModal.classList.add("active");
  }

  function openNewsModal(id) {
    siteData = getSiteData();
    const item = siteData.eventsAndNews.find(n => n.id === id);
    if (!item || !newsDetailModal) return;

    const modalBody = newsDetailModal.querySelector(".modal-body");
    modalBody.innerHTML = `
      <img src="${item.image}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 1.25rem;" alt="${item.title}">
      <div style="display: flex; gap: 1rem; color: var(--slate-500); font-size: 0.85rem; margin-bottom: 1rem;">
        <span><i class="fa-regular fa-calendar"></i> ${item.date}</span>
        <span><i class="fa-regular fa-clock"></i> ${item.time}</span>
        ${item.location ? `<span><i class="fa-solid fa-location-dot"></i> ${item.location}</span>` : ''}
      </div>
      <h3 style="font-size: 1.6rem; font-weight: 800; color: var(--slate-900); line-height: 1.35; margin-bottom: 1.25rem;">${item.title}</h3>
      <div style="font-size: 0.95rem; line-height: 1.8; color: var(--slate-700); margin-bottom: 1.75rem;">
        ${item.content}
      </div>
      ${item.type === "agenda" && item.rsvpOpen ? `
        <div style="background: var(--bg-soft); padding: 1.25rem; border-radius: var(--radius-md); text-align: center;">
          <h5 style="margin-bottom: 0.5rem; color: var(--slate-900);">Ingin Menghadiri Kegiatan Ini?</h5>
          <p style="font-size: 0.88rem; color: var(--slate-500); margin-bottom: 1rem;">Konfirmasikan kehadiran Anda agar panitia dapat menyiapkan fasilitas dengan baik.</p>
          <button class="btn-edoo-primary btn-action-sm" onclick="document.getElementById('newsDetailModal').classList.remove('active'); openRsvpModal('${item.title}');">
            <i class="fa-solid fa-calendar-check"></i> Konfirmasi Hadir (RSVP)
          </button>
        </div>
      ` : ''}
    `;

    newsDetailModal.classList.add("active");
  }

  function openRsvpModal(eventTitle) {
    if (!rsvpModal) return;
    const input = document.getElementById("rsvpEventTitle");
    if (input) input.value = eventTitle;
    rsvpModal.classList.add("active");
  }

  // RSVP Form submission
  const rsvpForm = document.getElementById("rsvpForm");
  if (rsvpForm) {
    rsvpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("rsvpName").value;
      const title = document.getElementById("rsvpEventTitle").value;
      showToast(`Alhamdulillah! Konfirmasi kehadiran untuk "${title}" atas nama ${name} berhasil dicatat.`, "success");
      rsvpForm.reset();
      rsvpModal.classList.remove("active");
    });
  }

  // Public Alumni Registration Modal ("Daftar Alumni")
  const regAlumniModal = document.getElementById("registerAlumniModal");
  document.querySelectorAll(".btn-open-register").forEach(btn => {
    btn.addEventListener("click", () => {
      if (regAlumniModal) regAlumniModal.classList.add("active");
    });
  });

  const alumniRegisterForm = document.getElementById("alumniRegisterForm");
  if (alumniRegisterForm) {
    alumniRegisterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("regName").value.trim();
      const graduationYear = parseInt(document.getElementById("regYear").value);
      const batch = document.getElementById("regBatch").value.trim() || graduationYear.toString();
      const gender = document.getElementById("regGender").value;
      const dorm = document.getElementById("regDorm").value.trim();
      const profession = document.getElementById("regProfession").value.trim();
      const institution = document.getElementById("regInstitution").value.trim();
      const city = document.getElementById("regCity").value.trim();
      const province = document.getElementById("regProvince").value.trim();
      const korda = document.getElementById("regKorda").value;
      const phone = document.getElementById("regPhone").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const advice = document.getElementById("regAdvice").value.trim();

      const avatarMale = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80";
      const avatarFemale = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80";
      const chosenAvatar = gender === "Perempuan" ? avatarFemale : avatarMale;

      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const generatedNis = `DS-${graduationYear.toString().slice(-2)}${randomNum}`;

      const newAlumnus = {
        id: `ALM-${Date.now()}`,
        nis: generatedNis,
        name: name,
        batch: batch,
        graduationYear: graduationYear,
        gender: gender,
        dorm: dorm || "Kompleks Asrama Pondok",
        profession: profession,
        institution: institution,
        city: city,
        province: province,
        korda: korda,
        phone: phone,
        email: email,
        avatar: chosenAvatar,
        bio: `Alumni Pondok Pesantren Darussalam Ngesong Jombang angkatan ${batch} yang aktif berkarya di ${city}.`,
        advice: advice || "Selalu sambung sanad keilmuan dan rawat tali silaturahmi dengan sesama alumni."
      };

      siteData.alumni.unshift(newAlumnus);
      renderAlumniDirectory();

      alumniRegisterForm.reset();
      regAlumniModal.classList.remove("active");

      showToast(`Pendaftaran Berhasil! Selamat datang Kang/Mbak ${name}. KTA Digital Anda telah terbit.`, "success");
      setTimeout(() => openKtaModal(newAlumnus.id), 500);
    });
  }

  // Close modals on overlay or close button click
  document.querySelectorAll(".modal-close-icon, .modal-close-btn, .modal-overlay").forEach(el => {
    el.addEventListener("click", (e) => {
      if (e.target === el) {
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
      }
    });
  });

  // Profil Tabs
  document.querySelectorAll(".edoo-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");
      document.querySelectorAll(".edoo-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".profile-tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      const content = document.getElementById(target);
      if (content) content.classList.add("active");
    });
  });



  // Toast Notification Function
  function showToast(message, type = "success") {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      container.style.cssText = "position: fixed; bottom: 25px; right: 25px; z-index: 9999; display: flex; flex-direction: column; gap: 0.75rem; pointer-events: none;";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.style.cssText = `
      pointer-events: auto;
      background: ${type === 'error' ? '#dc2626' : '#0f172a'};
      color: #ffffff;
      padding: 1rem 1.4rem;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      display: flex;
      align-items: center;
      gap: 0.85rem;
      font-size: 0.9rem;
      font-weight: 600;
      border-left: 4px solid ${type === 'error' ? '#f87171' : '#10b981'};
      transform: translateX(100px);
      opacity: 0;
      transition: all 0.3s ease;
      max-width: 380px;
    `;

    toast.innerHTML = `
      <i class="fa-solid ${type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-check'}" style="color: ${type === 'error' ? '#fca5a5' : '#34d399'}; font-size: 1.25rem;"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.transform = "translateX(0)";
      toast.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      toast.style.transform = "translateX(100px)";
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }


  window.openKtaModal = openKtaModal;
  window.openAlumniModal = openAlumniModal;
  window.openNewsModal = openNewsModal;
  window.openRsvpModal = openRsvpModal;
  window.showToast = showToast;

  // Initialize UI
  renderHeroAndSettings();
  renderPeriodsTimeline();
  renderNewsSection();
  renderAlumniDirectory();
});
