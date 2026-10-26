/**
 * IKASDA DATA & CMS PERSISTENCE ENGINE
 * Stores all website contents, settings, and records.
 * Everything can be edited dynamically by the Admin through the CMS dashboard.
 */

const DEFAULT_IKASDA_DATA = {
  // General Site Settings & Hero Section (Editable by Admin)
  siteSettings: {
    siteName: "IKASDA",
    siteTagline: "PP. Darussalam Ngesong Jombang",
    contactEmail: "sekretariat@ikasda-ngesong.id",
    contactPhone: "+62 812-3456-7890",
    address: "Ngesong, Sengon, Kec. Jombang, Kab. Jombang, Jawa Timur 61418",
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com"
    }
  },

  // Hero Section Content (Editable by Admin)
  hero: {
    badge: "PORTAL RESMI IKASDA DARUSSALAM NGESONG",
    title: "Sinergi Alumni & Santri Untuk Kemajuan Umat",
    description: "Wadah silaturahmi, kolaborasi keilmuan, dan akselerasi potensi ribuan alumni serta santri Pondok Pesantren Darussalam Ngesong Jombang di seluruh dunia.",
    primaryBtnText: "Cari Data Alumni",
    secondaryBtnText: "Daftar / Update KTA",
    reviewScore: "4.9 / 5.0",
    reviewCount: "5.400+ Alumni Terdata",
    heroImage: "assets/img/hero-pesantren.jpg"
  },

  // 3 Feature Highlights Under Hero (Edoo style, Editable by Admin)
  features: [
    {
      id: "feat-1",
      icon: "fa-network-wired",
      title: "Jaringan Alumni Terpadu",
      description: "Terhubung dengan ribuan alumni lintas generasi di 18 Koordinator Daerah (Korda) se-Indonesia dan luar negeri."
    },
    {
      id: "feat-2",
      icon: "fa-briefcase",
      title: "Forum Bisnis & Karir Santri",
      description: "Mendorong kemandirian ekonomi, bursa kerja, dan kolaborasi wirausaha antar sesama alumni Darussalam."
    },
    {
      id: "feat-3",
      icon: "fa-book-quran",
      title: "Sanad Keilmuan Masyayikh",
      description: "Menjaga kemurnian kajian kitab kuning salafiyah dan menyambung sanad keberkahan para ulama pendiri pesantren."
    }
  ],

  // Quick Stats (Editable by Admin)
  stats: {
    totalAlumni: "5.420+",
    totalAngkatan: "43+",
    totalKorda: "18",
    santriAktif: "1.280+"
  },

  // Profile Data (Editable by Admin)
  profile: {
    pondok: {
      name: "Pondok Pesantren Darussalam Ngesong",
      established: "1968",
      founder: "KH. Sholeh Abdul Wahid & Nyai Hj. Masruroh",
      currentLeader: "KH. Ahmad Hasan Sholeh & Dewan Masyayikh",
      description: "Pondok Pesantren Darussalam Ngesong berdiri di bumi santri Sengon Jombang. Memadukan kemurnian kurikulum salafiyah kajian kitab kuning (turats) dengan penguatan sains, teknologi, dan pendidikan karakter mandiri. Selama lebih dari lima dekade, pesantren telah mencetak ribuan alumni yang berkiprah di seantero negeri hingga kancah internasional.",
      vision: "Terwujudnya insan santri yang bertafaqquh fiddin, unggul dalam keilmuan kontemporer, berakhlaqul karimah, serta siap mengabdi untuk kemaslahatan umat dan bangsa.",
      missions: [
        "Menyelenggarakan pendidikan keagamaan Islam berbasis kajian turats (kitab kuning) yang mendalam dan bersanad.",
        "Mengembangkan institusi pendidikan formal (MTs, MA) dan vokasi kejuruan yang adaptif terhadap era digital.",
        "Menempa kepribadian santri dengan tradisi akhlaqul karimah, kemandirian, dan kepemimpinan berlandaskan nilai-nilai Ahlussunnah wal Jama'ah an-Nahdliyyah.",
        "Membangun sinergi berkelanjutan antara pengasuh, santri, asatidz, alumni (IKASDA), dan masyarakat luas."
      ]
    },
    ikasda: {
      name: "IKASDA (Ikatan Alumni & Santri Darussalam)",
      motto: "Santri Sak Lawase, Khidmah Tanpa Batas",
      established: "1985",
      description: "IKASDA adalah wadah persaudaraan resmi seluruh alumni serta santri Pondok Pesantren Darussalam Ngesong Jombang. IKASDA bertugas mempererat ukhuwah, memelihara sanad keilmuan masyayikh, memfasilitasi jejaring karir dan wirausaha santri, serta mendukung kemajuan pesantren dari masa ke masa.",
      pillars: [
        "Sinergi Ukhuwah Korda se-Indonesia & Luar Negeri",
        "Kemandirian Ekonomi Santri & Koperasi Alumni",
        "Beasiswa Pendidikan Santri Berprestasi & Yatim",
        "Dakwah Kultural & Pengabdian Masyarakat"
      ]
    }
  },

  // Periods & Committees from Era to Era (Editable by Admin)
  periods: [
    {
      id: "periode-7",
      name: "Periode VII (2024 - 2028)",
      tag: "Kepengurusan Aktif",
      isCurrent: true,
      theme: "Digitalisasi Alumni, Kemandirian Ekonomi, & Penguatan Sanad Masyayikh",
      lead: "Dr. H. M. Zainul Muttaqin, M.Pd.I",
      members: [
        {
          id: "mem-1",
          role: "Ketua Umum",
          name: "Dr. H. M. Zainul Muttaqin, M.Pd.I",
          batch: "Alumni 1998",
          profession: "Dosen Pascasarjana & Pengasuh Pesantren",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
          phone: "+62 812-3411-9988",
          quote: "Khidmah pada pesantren tidak mengenal kata purna. Setiap langkah alumni adalah cermin marwah almamater."
        },
        {
          id: "mem-2",
          role: "Wakil Ketua Umum",
          name: "H. Agus Fathurrahman, S.E.",
          batch: "Alumni 2002",
          profession: "Direktur Logistik & Pengusaha Properti",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
          phone: "+62 813-8822-4411",
          quote: "Santri harus mandiri secara ekonomi agar dakwah Islam semakin berwibawa dan berdaya saing."
        },
        {
          id: "mem-3",
          role: "Sekretaris Jenderal",
          name: "M. Rizky Maulana, M.Kom.",
          batch: "Alumni 2012",
          profession: "Software Engineer & Praktisi EdTech",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
          phone: "+62 856-7788-1234",
          quote: "Menghadirkan ekosistem digital IKASDA yang memudahkan silaturahmi tanpa sekat geografis."
        },
        {
          id: "mem-4",
          role: "Bendahara Umum",
          name: "Hj. Luluk Masluhah, S.E.",
          batch: "Alumni 2005",
          profession: "Direktur Lembaga Keuangan Syariah BMT",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
          phone: "+62 821-4455-6677",
          quote: "Amanah, transparan, dan produktif mengelola dana ummat demi kemakmuran santri Darussalam."
        },
        {
          id: "mem-5",
          role: "Ketua Bidang Dakwah & Pesantren",
          name: "Gus H. Ahmad Bahruddin, Lc.",
          batch: "Alumni 2004",
          profession: "Pengasuh Majelis & Dai Nasional",
          avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
          phone: "+62 813-1122-3344",
          quote: "Menjaga warisan kitab kuning dan sanad Ahlussunnah wal Jama'ah hingga akhir hayat."
        },
        {
          id: "mem-6",
          role: "Ketua Bidang Humas & Jaringan Alumni",
          name: "Ahmad Fauzan Fanani, S.Sos.",
          batch: "Alumni 2014",
          profession: "Tenaga Ahli Madya & Konsultan Publik",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
          phone: "+62 878-9900-5511",
          quote: "Merawat komunikasi dengan setiap alumni dari Sabang sampai Merauke dan luar negeri."
        }
      ]
    },
    {
      id: "periode-6",
      name: "Periode VI (2020 - 2024)",
      tag: "Demisioner",
      isCurrent: false,
      theme: "Ketahanan Santri di Masa Pandemi & Penguatan Basis Komunitas",
      lead: "H. Syamsul Huda, S.Ag., M.Si.",
      members: [
        {
          id: "mem-61",
          role: "Ketua Umum",
          name: "H. Syamsul Huda, S.Ag., M.Si.",
          batch: "Alumni 1994",
          profession: "Birokrat Kemenag & Tokoh Pendidikan",
          avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
          phone: "+62 811-9988-7766",
          quote: "Kekuatan alumni adalah ketulusan doa dan kepedulian terhadap adik-adik santri yang sedang berjuang."
        },
        {
          id: "mem-62",
          role: "Sekretaris",
          name: "H. Mahfudz Sholihin, S.Pd.I.",
          batch: "Alumni 1999",
          profession: "Kepala Madrasah & Pegiat Pendidikan",
          avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
          phone: "+62 812-3344-5566",
          quote: "Organisasi alumni adalah jembatan berkah antara ilmu santri dan pengabdian nyata di masyarakat."
        }
      ]
    },
    {
      id: "periode-5",
      name: "Periode V (2016 - 2020)",
      tag: "Purna Tugas",
      isCurrent: false,
      theme: "Perluasan Koordinator Daerah & Konsolidasi Kelembagaan",
      lead: "KH. Abdul Wahid, M.H.I.",
      members: [
        {
          id: "mem-51",
          role: "Ketua Umum",
          name: "KH. Abdul Wahid, M.H.I.",
          batch: "Alumni 1989",
          profession: "Pengasuh Pondok & Dosen Syariah",
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
          phone: "+62 812-8877-6655",
          quote: "Ikatlah ilmu dengan mengajarkannya, dan ikatlah persaudaraan santri dengan silaturahmi yang ikhlas."
        }
      ]
    },
    {
      id: "periode-perintis",
      name: "Masa Perintis (1985 - 2016)",
      tag: "Perintis",
      isCurrent: false,
      theme: "Penyusunan AD/ART & Peletakan Dasar Paguyuban Alumni",
      lead: "KH. Muhammad Dahlan & Sesepuh Alumni",
      members: [
        {
          id: "mem-01",
          role: "Ketua Presidium Perintis",
          name: "KH. Muhammad Dahlan (Alm.)",
          batch: "Alumni Generasi Pertama (1975)",
          profession: "Ulama & Perintis Majelis Alumni",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
          phone: "-",
          quote: "Pondok Ngesong adalah rumah ruhani kita. Jangan pernah lupakan tempat kita belajar sujud dan membaca Al-Qur'an."
        }
      ]
    }
  ],

  // Events & News Articles (Editable by Admin)
  eventsAndNews: [
    {
      id: "news-1",
      type: "agenda",
      category: "Agenda Utama",
      badgeClass: "badge-agenda",
      title: "Reuni Akbar & Haul Masyayikh Darussalam Ngesong Ke-40",
      date: "15 Desember 2026",
      time: "08.00 WIB - Selesai",
      location: "Kompleks Masjid & Aula Utama PP. Darussalam Ngesong, Jombang",
      author: "Panitia Reuni Akbar 2026",
      image: "assets/img/alumni-gathering.jpg",
      snippet: "Mengundang seluruh alumni lintas generasi dari tahun kelulusan 1975 hingga 2025 untuk bersama-sama mengaji, ziarah maqbaroh masyayikh, dan mempererat ukhuwah.",
      content: `Pondok Pesantren Darussalam Ngesong Jombang bersama Pengurus Pusat IKASDA mengundang seluruh alumni, santri, wali santri, dan simpatisan dalam agenda akbar tahunan:
      
      <strong>Rangkaian Acara:</strong>
      <ul>
        <li>Khotmil Qur'an Bil Ghoib 30 Juz serentak oleh alumni tahfidz.</li>
        <li>Tahlil Akbar dan Ziarah Maqbaroh KH. Sholeh Abdul Wahid & Masyayikh Darussalam.</li>
        <li>Musyawarah Besar IKASDA: Evaluasi program kerja & roadmap kemandirian alumni 2026-2030.</li>
        <li>Ramah Tamah Lintas Angkatan, Temu Kangen Kamar Pondok, dan Bazar Produk UMKM Alumni.</li>
        <li>Mau'idhoh Hasanah oleh Habaib & Ulama Khos Jawa Timur.</li>
      </ul>
      Mari hadir bersama keluarga untuk menyambung keberkahan sanad dan persaudaraan santri selamanya!`,
      rsvpOpen: true
    },
    {
      id: "news-2",
      type: "news",
      category: "Kabar Pesantren",
      badgeClass: "badge-news",
      title: "Pembangunan Gedung Asrama Santri Tahfidz Capai 85%, Alumni Gelar Doa Bersama",
      date: "20 Oktober 2026",
      time: "10 menit baca",
      location: "Pesantren Darussalam Ngesong",
      author: "Humas IKASDA Media",
      image: "assets/img/hero-pesantren.jpg",
      snippet: "Kabar gembira bagi keluarga besar pesantren, gedung baru berlantai tiga khusus santri penghafal Al-Qur'an kini memasuki tahap finishing dengan dukungan donasi ZISWAF alumni.",
      content: `Pembangunan Gedung Asrama Tahfidz Darussalam Ngesong yang dimulai sejak awal tahun kini telah mencapai 85% pengerjaan fisik. Fasilitas ini akan menampung lebih dari 200 santri mukim penghafal Al-Qur'an dengan sarana kamar yang representatif, perpustakaan Al-Qur'an, dan aula halaqah talaqqi.
      
      Ketua Umum IKASDA menyampaikan rasa syukur dan terima kasih tak terhingga kepada ribuan alumni dari berbagai penjuru tanah air yang telah berwakaf tunai maupun material. "Ini adalah wujud baktinya santri kepada pesantren, memastikan adik-adik santri kita belajar dengan aman dan nyaman," ungkapnya.`,
      rsvpOpen: false
    },
    {
      id: "news-3",
      type: "agenda",
      category: "Pelatihan & Karir",
      badgeClass: "badge-agenda",
      title: "Halaqah Wirausaha Santri Digital: Peluang Bisnis Ekspor & E-Commerce",
      date: "08 November 2026",
      time: "09.00 - 15.00 WIB",
      location: "Hybrid (Gedung BLKK Darussalam & Zoom Meeting)",
      author: "Bidang Ekonomi IKASDA",
      image: "assets/img/santri-belajar.jpg",
      snippet: "Workshop eksklusif mentoring bisnis oleh alumni sukses Darussalam yang berkiprah di sektor logistik, ekspor kerajinan, dan teknologi informasi.",
      content: `Bidang Pemberdayaan Ekonomi Alumni IKASDA menggelar sesi pelatihan intensif bagi santri tingkat akhir dan alumni muda yang ingin memulai atau scale-up bisnis.
      
      <strong>Materi Utama:</strong>
      <ul>
        <li>Strategi Membangun Brand Bisnis Santri yang Berdaya Saing Global.</li>
        <li>Pemanfaatan Platform Marketplace & Optimalisasi Ekspor Produk Daerah.</li>
        <li>Akses Permodalan Syariah melalui Koperasi Alumni & BMT Mitra.</li>
        <li>Studi Kasus: Dari Santri Kobong Menjadi Eksportir Beromzet Miliaran.</li>
      </ul>
      Pendaftaran terbuka bebas biaya bagi seluruh alumni terdaftar IKASDA.`,
      rsvpOpen: true
    },
    {
      id: "news-4",
      type: "news",
      category: "Inspirasi Alumni",
      badgeClass: "badge-news",
      title: "Kiprah Alumni: Dari Ngesong Jombang Menjadi Dosen & Peneliti Berprestasi di Kancah Global",
      date: "12 Oktober 2026",
      time: "7 menit baca",
      location: "Jombang - Yogyakarta",
      author: "Redaksi Suara Darussalam",
      image: "assets/img/santri-belajar.jpg",
      snippet: "Profil Ahmad Shodiqul Fuad, alumni angkatan 2008 yang kini menjadi staf pengajar pascasarjana sekaligus aktif menulis jurnal ilmiah internasional terindeks Scopus.",
      content: `Bagi Fuad, prinsip ketelitian dan ketekunan saat mengkaji bait-bait Alfiyah Ibnu Malik dan logika ushul fiqih di Pesantren Darussalam Ngesong menjadi bekal terbesarnya dalam menekuni dunia riset akademis modern.
      
      "Santri diajarkan membaca teks dengan kritis, menghormati pendapat berbeda, dan senantiasa tawadhu. Ketika kita bawa mental ini ke panggung dunia, insya Allah santri mampu bersaing dengan siapa pun tanpa kehilangan akar spiritualnya," pesan beliau kepada para santri Ngesong.`,
      rsvpOpen: false
    },
    {
      id: "news-5",
      type: "agenda",
      category: "Silaturahmi Korda",
      badgeClass: "badge-agenda",
      title: "Pertemuan Akbar IKASDA Koordinator Daerah Jabodetabek & Banten",
      date: "29 November 2026",
      time: "10.00 WIB - 14.30 WIB",
      location: "Wisma Haji Kementerian Agama, Jakarta Pusat",
      author: "Pengurus Korda Jabodetabek",
      image: "assets/img/alumni-gathering.jpg",
      snippet: "Ajang silaturahmi, konsolidasi keanggotaan, penerbitan KTA digital serentak, dan sarasehan bulanan alumni Darussalam di wilayah Ibukota.",
      content: `Koordinator Daerah Jabodetabek & Banten mengajak seluruh alumni Darussalam Ngesong yang berdomisili atau bertugas di wilayah DKI Jakarta, Bogor, Depok, Tangerang, Bekasi, dan Banten untuk hadir dalam temu silaturahmi akhir tahun.
      
      Agenda meliputi: pembaharuan data alumni wilayah, klinik legalisir ijazah pesantren, serta peresmian Paguyuban Usaha Alumni Jakarta.`,
      rsvpOpen: true
    },
    {
      id: "news-6",
      type: "news",
      category: "Khazanah",
      badgeClass: "badge-news",
      title: "Mengenal Tradisi Sorogan & Bandongan yang Melekat Kuat di Pesantren Darussalam",
      date: "01 Oktober 2026",
      time: "5 menit baca",
      location: "Kompleks Pondok",
      author: "Ust. M. Hasyim",
      image: "assets/img/santri-belajar.jpg",
      snippet: "Bagaimana metode belajar turun-temurun para ulama salaf tetap relevan dalam membentuk karakter berintegritas dan ketajaman intelektual santri modern.",
      content: `Tradisi membaca kitab di hadapan kyai secara langsung (sorogan) melatih kejujuran intelektual, artikulasi bahasa, dan keberanian santri dalam mempertanggungjawabkan pemahamannya. Sementara bandongan membekali santri keluasan wawasan kitab turats secara komprehensif.`,
      rsvpOpen: false
    }
  ],

  // Alumni Directory Records (Editable by Admin)
  alumni: [
    {
      id: "ALM-001",
      nis: "DS-90124",
      name: "KH. Abdul Wahid, M.H.I.",
      batch: "1989",
      graduationYear: 1989,
      gender: "Laki-laki",
      dorm: "Asrama Al-Falah Kamar 03",
      profession: "Pengasuh Pondok & Dosen Syariah",
      institution: "Pondok Pesantren Al-Hidayah Mojokerto",
      city: "Mojokerto",
      province: "Jawa Timur",
      korda: "Korda Jatim",
      phone: "0812-3311-8899",
      email: "abdulwahid@pesantren-alhidayah.ac.id",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      bio: "Menekuni bidang Fiqih dan Falakiyah. Aktif membina majelis taklim dan mendidik santri tahfidz di Mojokerto.",
      advice: "Jangan pernah berhenti mengaji. Dunia boleh berubah cepat, tapi adab santri harus tetap tertanam di dada."
    },
    {
      id: "ALM-002",
      nis: "DS-94032",
      name: "H. Syamsul Huda, S.Ag., M.Si.",
      batch: "1994",
      graduationYear: 1994,
      gender: "Laki-laki",
      dorm: "Asrama Al-Hikmah Kamar 07",
      profession: "Birokrat & Pejabat Kemenag",
      institution: "Kantor Wilayah Kementerian Agama Jawa Timur",
      city: "Surabaya",
      province: "Jawa Timur",
      korda: "Korda Surabaya Raya",
      phone: "0811-9988-7766",
      email: "syamsul.huda@kemenag.go.id",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
      bio: "Berpengalaman lebih dari 20 tahun dalam tata kelola pendidikan madrasah dan pondok pesantren di Kemenag.",
      advice: "Jadilah birokrat yang bernafaskan nilai santri: jujur, tidak silau jabatan, dan selalu melayani dengan ikhlas."
    },
    {
      id: "ALM-003",
      nis: "DS-98015",
      name: "Dr. H. M. Zainul Muttaqin, M.Pd.I",
      batch: "1998",
      graduationYear: 1998,
      gender: "Laki-laki",
      dorm: "Asrama Al-Barokah Kamar 01",
      profession: "Dosen Pascasarjana & Rektorat",
      institution: "IAI Bani Fattah / UIN Sunan Ampel",
      city: "Jombang",
      province: "Jawa Timur",
      korda: "Korda Jatim",
      phone: "0812-3411-9988",
      email: "zainul.muttaqin@iaibafa.ac.id",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      bio: "Ketua Umum IKASDA 2024-2028. Doktor di bidang Manajemen Pendidikan Islam dan pegiat riset kurikulum pesantren.",
      advice: "Ijazah pondok adalah amanah kebaikan. Di mana pun kamu berada, sebarkan ilmu dengan penuh keramahan."
    },
    {
      id: "ALM-004",
      nis: "DS-00112",
      name: "H. Muhammad Ridwan, S.T.",
      batch: "2000",
      graduationYear: 2000,
      gender: "Laki-laki",
      dorm: "Asrama Al-Hikmah Kamar 05",
      profession: "Pengusaha Konstruksi & Properti",
      institution: "PT Ngesong Karya Mandiri",
      city: "Sidoarjo",
      province: "Jawa Timur",
      korda: "Korda Surabaya Raya",
      phone: "0813-5566-7788",
      email: "ridwan.st@ngesongkarya.co.id",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      bio: "Mengembangkan bisnis jasa konstruksi baja dan properti syariah di wilayah Gerbangkertosusila.",
      advice: "Kejujuran di dunia bisnis adalah investasi terbaik. Rezeki yang berkah berawal dari janji yang ditepati."
    },
    {
      id: "ALM-005",
      nis: "DS-02058",
      name: "H. Agus Fathurrahman, S.E.",
      batch: "2002",
      graduationYear: 2002,
      gender: "Laki-laki",
      dorm: "Asrama Al-Falah Kamar 02",
      profession: "Direktur Logistik & Ekspor",
      institution: "Samudera Jaya Nusantara Logistik",
      city: "Jakarta Utara",
      province: "DKI Jakarta",
      korda: "Korda Jabodetabek",
      phone: "0813-8822-4411",
      email: "agus.fathur@sj-logistics.id",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      bio: "Membangun jaringan rantai pasok dan ekspedisi kargo laut domestik dan Asia Tenggara.",
      advice: "Dunia luar luas sekali. Jadikan doa kyai dan tirakat santri sebagai kompas penunjuk arah hidupmu."
    },
    {
      id: "ALM-006",
      nis: "DS-04021",
      name: "Gus H. Ahmad Bahruddin, Lc.",
      batch: "2004",
      graduationYear: 2004,
      gender: "Laki-laki",
      dorm: "Kompleks Ndalem Sepuh",
      profession: "Kyai / Pengasuh & Dai",
      institution: "Pesantren Darut Ta'lim Malang",
      city: "Malang",
      province: "Jawa Timur",
      korda: "Korda Jatim",
      phone: "0813-1122-3344",
      email: "bahruddin.lc@daruttalim.id",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      bio: "Alumni Universitas Al-Azhar Kairo Mesir Fakultas Ushuluddin. Aktif berdakwah dan mengasuh ratusan santri.",
      advice: "Ilmu turats adalah cahaya zaman. Jangan minder menjadi santri, karena dunia haus akan keteduhan Islam."
    },
    {
      id: "ALM-007",
      nis: "DS-05099",
      name: "Hj. Luluk Masluhah, S.E.",
      batch: "2005",
      graduationYear: 2005,
      gender: "Perempuan",
      dorm: "Asrama Khodijah Kamar 04",
      profession: "Direktur Keuangan Syariah",
      institution: "BMT Mitra Umat Barokah",
      city: "Jombang",
      province: "Jawa Timur",
      korda: "Korda Jatim",
      phone: "0821-4455-6677",
      email: "luluk.masluhah@bmtmitraumat.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      bio: "Mempelopori pemberdayaan ekonomi perempuan santri dan UMKM berbasis pembiayaan syariah tanpa riba.",
      advice: "Santri putri harus cerdas, mandiri, dan berani tampil memimpin kebaikan tanpa meninggalkan kodrat."
    },
    {
      id: "ALM-008",
      nis: "DS-07044",
      name: "Dr. Ning Siti Maryam, M.Ag.",
      batch: "2007",
      graduationYear: 2007,
      gender: "Perempuan",
      dorm: "Asrama Khodijah Kamar 01",
      profession: "Dosen & Konselor Psikologi Keluarga",
      institution: "UIN Sunan Kalijaga Yogyakarta",
      city: "Yogyakarta",
      province: "DI Yogyakarta",
      korda: "Korda Jateng & DIY",
      phone: "0812-7788-9900",
      email: "siti.maryam@uin-suka.ac.id",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      bio: "Pakar konseling keluarga sakinah dan pendidikan anak usia dini berbasis nilai-nilai pesantren.",
      advice: "Keluarga yang kokoh lahir dari ketenangan batin orang tua yang dekat dengan Al-Qur'an."
    },
    {
      id: "ALM-010",
      nis: "DS-10041",
      name: "dr. Nurul Izzati, Sp.A",
      batch: "2010",
      graduationYear: 2010,
      gender: "Perempuan",
      dorm: "Asrama Aisyah Kamar 06",
      profession: "Dokter Spesialis Anak",
      institution: "RSUD Jombang / RSI Jombang",
      city: "Jombang",
      province: "Jawa Timur",
      korda: "Korda Jatim",
      phone: "0812-9900-1122",
      email: "dr.nurulizzati@rsjombang.go.id",
      avatar: "https://images.unsplash.com/photo-1594824813576-26795f70bb07?auto=format&fit=crop&w=300&q=80",
      bio: "Dokter santri yang mendedikasikan ilmunya untuk kesehatan balita dan program cegah stunting pesantren.",
      advice: "Mengobati pasien bukan sekadar resep obat, tapi doa dan sentuhan kasih sayang seorang santri."
    },
    {
      id: "ALM-011",
      nis: "DS-12015",
      name: "M. Rizky Maulana, M.Kom.",
      batch: "2012",
      graduationYear: 2012,
      gender: "Laki-laki",
      dorm: "Asrama Al-Falah Kamar 09",
      profession: "IT Consultant & Software Architect",
      institution: "Nusa Digital Teknologi (Jakarta)",
      city: "Jakarta Selatan",
      province: "DKI Jakarta",
      korda: "Korda Jabodetabek",
      phone: "0856-7788-1234",
      email: "rizky.maulana@nusatech.id",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
      bio: "Spesialis Cloud Computing dan AI. Mengembangkan berbagai platform dakwah dan sistem pesantren digital.",
      advice: "Dunia coding dan algoritma mirip ilmu shorof: butuh rumus yang tepat untuk menghasilkan makna yang luas."
    },
    {
      id: "ALM-014",
      nis: "DS-16035",
      name: "Muhammad Ilham Akbar, S.H.",
      batch: "2016",
      graduationYear: 2016,
      gender: "Laki-laki",
      dorm: "Asrama Al-Barokah Kamar 04",
      profession: "Advokat & Konsultan Hukum Syariah",
      institution: "Ilham Akbar & Partners Law Office",
      city: "Surabaya",
      province: "Jawa Timur",
      korda: "Korda Surabaya Raya",
      phone: "0812-4466-8800",
      email: "ilham.akbar@akbarlaw.id",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80",
      bio: "Fokus dalam advokasi sengketa tanah wakaf, perizinan yayasan pesantren, dan perlindungan hukum umat.",
      advice: "Tegakkan keadilan meski pahit. Santri sejati tidak menjual nurani demi kemilau rupiah semata."
    },
    {
      id: "ALM-021",
      nis: "DS-24001",
      name: "M. Wildan Firdaus",
      batch: "2024",
      graduationYear: 2024,
      gender: "Laki-laki",
      dorm: "Asrama Al-Falah Kamar 04",
      profession: "Mahasiswa Kedokteran",
      institution: "Fakultas Kedokteran Universitas Airlangga",
      city: "Surabaya",
      province: "Jawa Timur",
      korda: "Korda Surabaya Raya",
      phone: "0813-9988-2211",
      email: "wildan.firdaus@fk.unair.ac.id",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      bio: "Alumni termuda peraih beasiswa kedokteran jalur santri berprestasi tahfidzul Qur'an.",
      advice: "Jangan pernah ragu bermimpi besar. Doa pengasuh dan ridho orang tua adalah jalan tol menuju cita-cita."
    }
  ]
};

// Clean up any legacy admin localStorage keys
try {
  localStorage.removeItem("ikasda_admin_auth");
  localStorage.removeItem("ikasda_site_full_data");
} catch (e) {}

// Get live data directly from source (edited directly via Antigravity)
function getSiteData() {
  return DEFAULT_IKASDA_DATA;
}

function saveSiteData(newData) {
  return newData;
}

function resetSiteData() {
  return DEFAULT_IKASDA_DATA;
}
