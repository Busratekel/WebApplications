// Proje verileri
const projects = [
    {
        id: 1,
        title: "Internet Erişim Kimlik Doğrulama",
        description: "Kurumsal internet erişimi için güvenli kimlik doğrulama sistemi.",
        icon: "fas fa-shield-alt",
        technologies: ["ASP.NET", "SQL Server", "Active Directory", "LDAP"],
        liveUrl: "https://internet.doqu.com.tr",
        githubUrl: "",
        purpose: "Güvenli internet erişimi ve kullanıcı kimlik doğrulama",
        features: [
            "Kullanıcı kimlik doğrulama",
            "Erişim kontrolü",
            "Güvenlik logları",
            "Otomatik oturum yönetimi",
            "Raporlama sistemi",
            "Mobil uyumluluk"
        ]
    },
    {
        id: 2,
        title: "Bilgi İşlem Destek Yönetim Merkezi",
        description: "Bilgi İşlem departmanı için destek talepleri yönetimi ve teknik sorun çözüm portalı.",
        icon: "fas fa-headset",
        technologies: ["SharePoint", "Power Apps", "Microsoft Lists", "Power Automate"],
        liveUrl: "https://support.erciyes.com",
        githubUrl: "",
        purpose: "Bilgi İşlem departmanı destek taleplerinin yönetimi, sorun takibi ve çözüm süreçleri",
        features: [
            "Destek talebi oluşturma ve takibi",
            "Teknik sorun çözüm süreçleri",
            "Kullanıcı bildirim sistemi",
            "Destek geçmişi ve raporlama",
            "Öncelik belirleme sistemi",
            "Mobil destek uygulaması"
        ]
    },
    {
        id: 3,
        title: "Elektronik Belge Akış Yönetimi",
        description: "Kurumsal belge akışlarının dijital ortamda yönetimi ve takip sistemi.",
        icon: "fas fa-file-alt",
        technologies: ["SharePoint", "Power Automate", "Microsoft 365", "Power Apps"],
        liveUrl: "https://eba.erclyes.com",
        githubUrl: "",
        purpose: "Belge akışlarının dijitalleştirilmesi, onay süreçleri ve takip sistemi",
        features: [
            "Dijital belge yönetimi",
            "Onay süreçleri takibi",
            "Otomatik bildirim sistemi",
            "Belge versiyon kontrolü",
            "Arama ve filtreleme",
            "Mobil erişim"
        ]
    },
    {
        id: 4,
        title: "SharePoint İK Portalı",
        description: "İnsan kaynakları departmanı için kapsamlı iç portal sistemi, yemek menüsü, haberler ve doğum günleri takibi.",
        icon: "fas fa-users-cog",
        technologies: ["SharePoint", "Power Automate", "Power Apps", "Power BI", "Microsoft Forms"],
        liveUrl: "https://doqu365.sharepoint.com/sites/doquinsankaynaklari",
        purpose: "Çalışanlar için merkezi bilgi platformu, yemek menüsü, fhrist, haberler, doğum günleri ve İK süreçleri yönetimi",
        features: [
            "Günlük yemek menüsü takibi",
            "Şirket haberleri ve duyurular",
            "Doğum günü ve yıldönümü bildirimleri",
            "İK formları ve süreçler",
            "Çalışan dizini ve iletişim",
            "Etkinlik takvimi ve organizasyon"
        ]
    },
    {
        id: 5,
        title: "Verimlilik Sistemi Web Platformu",
        description: "Kurumsal verimliliği artırmak için geliştirilmiş kapsamlı web platformu.",
        icon: "fas fa-chart-bar",
        technologies: ["Vue.js", "Express.js", "PostgreSQL", "Redis"],
        liveUrl: "https://fimes.doqu.com.tr",
        githubUrl: "",
        purpose: "Kurumsal verimliliği ölçme, analiz etme ve artırma",
        features: [
            "Verimlilik analizi",
            "Performans takibi",
            "KPI göstergeleri",
            "Raporlama sistemi",
            "Dashboard görünümleri",
            "Gerçek zamanlı veriler"
        ]
    },
    {
        id: 6,
        title: "Toplantı Odası Yönetim Sistemi",
        description: "Toplantı odalarının müsaitlik durumunu takip eden, haftalık planlamaları gösteren akıllı sistem.",
        icon: "fas fa-calendar-check",
        technologies: ["React", ".NET Core", "Microsoft Graph API"],
        liveUrl: "https://toplantiodasi.doqu.com.tr/",
        githubUrl: "",
        purpose: "Toplantı odalarının gerçek zamanlı müsaitlik takibi, haftalık planlamalar ve otomatik durum güncellemesi",
        features: [
            "Gerçek zamanlı müsaitlik durumu",
            "Haftalık toplantı planlamaları",
            "Otomatik durum güncellemesi (saat geçince müsait)",
            "Toplantı konusu ve katılımcı bilgileri",
            "Oda rezervasyon sistemi",
            "Mobil uygulama entegrasyonu"
        ]
    },
    {
        id: 7,
        title: "Doqu BGYS",
        description: "Bilgi Güvenliği Yönetim Sistemi - kurumsal güvenlik standartları.",
        icon: "fas fa-lock",
        technologies: ["ASP.NET Core", "SQL Server", "ISO 27001", "Security Standards"],
        liveUrl: "https://bgys.doqu.com.tr/",
        githubUrl: "",
        purpose: "Bilgi güvenliği yönetimi ve uyumluluk takibi",
        features: [
            "Güvenlik politikaları yönetimi",
            "Risk değerlendirmesi",
            "Uyumluluk takibi",
            "Güvenlik raporları",
            "Eğitim yönetimi",
            "Denetim süreçleri"
        ]
    },
    {
        id: 8,
        title: "SAP Canlı RF Web Gul",
        description: "SAP sistemleri için canlı RF (Radio Frequency) web arayüzü.",
        icon: "fas fa-radio",
        technologies: ["SAP", "Web Services", "RF Technology", "Real-time Data"],
        liveUrl: "http://dqprf.doqu.com.tr",
        githubUrl: "",
        purpose: "SAP sistemleri ile RF teknolojisi entegrasyonu",
        features: [
            "SAP entegrasyonu",
            "RF veri iletişimi",
            "Gerçek zamanlı takip",
            "Envanter yönetimi",
            "Barkod sistemi",
            "Mobil cihaz desteği"
        ]
    },
    {
        id: 9,
        title: "Elektronik Satış Asistanı",
        description: "Satış süreçlerini dijitalleştiren ve otomatikleştiren web uygulaması.",
        icon: "fas fa-shopping-cart",
        technologies: ["React", "Node.js", "MongoDB", "REST API"],
        liveUrl: "https://esa.doqu.com.tr/login",
        githubUrl: "",
        purpose: "Satış süreçlerinin dijitalleştirilmesi ve otomatikleştirilmesi",
        features: [
            "Satış süreç yönetimi",
            "Müşteri takibi",
            "Otomatik fiyatlandırma",
            "Sipariş yönetimi",
            "Raporlama sistemi",
            "Mobil uygulama"
        ]
    },
    {
        id: 10,
        title: "Yastık Seçim Robotu",
        description: "Uyku alışkanlıklarınızı analiz ederek size en uygun yastığı öneren akıllı sistem.",
        icon: "fas fa-bed",
        technologies: ["React", "Python", "Flask", "TensorFlow", "AI/ML"],
        liveUrl: "https://mastermatch.doquhome.com.tr",
        githubUrl: "",
        purpose: "Kullanıcıların uyku pozisyonu, boyun ağrısı ve tercihlerine göre en uygun yastığı önerme",
        features: [
            "Kişiselleştirilmiş yastık önerisi",
            "Uyku pozisyonu analizi",
            "Boyun ağrısı değerlendirmesi",
            "Materyal tercihi belirleme",
            "Detaylı sonuç raporu",
            "Ürün karşılaştırma"
        ]
    },
    {
        id: 11,
        title: "Doqu Home Güncel Katalog",
        description: "Doqu Home ürünlerinin güncel katalog ve tanıtım sitesi.",
        icon: "fas fa-book-open",
        technologies: ["React", "Node.js", "MongoDB", "E-commerce"],
        liveUrl: "https://katalog.doguhome.com.tr/",
        githubUrl: "",
        purpose: "Ürün kataloğu ve tanıtım platformu",
        features: [
            "Ürün kataloğu",
            "Kategori yönetimi",
            "Arama ve filtreleme",
            "Ürün detay sayfaları",
            "Responsive tasarım",
            "SEO optimizasyonu"
        ]
    },
    {
        id: 12,
        title: "Kalite Web Uygulaması",
        description: "Kalite yönetimi süreçlerini dijitalleştiren web uygulaması.",
        icon: "fas fa-award",
        technologies: ["Vue.js", "Laravel", "MySQL", "Quality Standards"],
        liveUrl: "https://qm.doqu.com.tr",
        githubUrl: "",
        purpose: "Kalite yönetimi süreçlerinin dijitalleştirilmesi",
        features: [
            "Kalite süreç yönetimi",
            "Dokümantasyon sistemi",
            "Denetim takibi",
            "İyileştirme önerileri",
            "Raporlama sistemi",
            "Mobil uygulama"
        ]
    },
    {
        id: 13,
        title: "GES Panel Yönetimi",
        description: "Güneş Enerjisi Santrali panellerinin izleme ve yönetim sistemi.",
        icon: "fas fa-solar-panel",
        technologies: ["React", "Node.js", "IoT", "Real-time Data"],
        liveUrl: "http://ges.doqu.com.tr",
        githubUrl: "",
        purpose: "GES panellerinin uzaktan izlenmesi ve yönetimi",
        features: [
            "Panel performans takibi",
            "Enerji üretim analizi",
            "Arıza tespit sistemi",
            "Gerçek zamanlı izleme",
            "Raporlama ve analitik",
            "Mobil uygulama"
        ]
    },
    {
        id: 14,
        title: "Otomatik Mail Gönderim Sistemi",
        description: "Çalışanların kıdem yıl dönümleri ve doğum günlerinde otomatik mail gönderen akıllı sistem.",
        icon: "fas fa-envelope-open-text",
        technologies: ["Power Automate", "SharePoint Lists", "Microsoft Forms", "Power Apps"],
        liveUrl: "",
        githubUrl: "",
        purpose: "Çalışanların özel günlerini takip ederek otomatik tebrik maili gönderme ve yönetici bildirimleri",
        features: [
            "Doğum günü otomatik mail gönderimi",
            "Kıdem yıl dönümü takibi",
            "Özelleştirilebilir mail şablonları",
            "Yönetici bildirim sistemi",
            "Mail gönderim raporları",
            "Çalışan veritabanı entegrasyonu"
        ]
    },    
    
];

// DOM elementleri
const projectsGrid = document.getElementById('projectsGrid');
const projectModal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    updateStats();
    setupEventListeners();
    animateOnScroll();
});

// Projeleri yükle
function loadProjects() {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Proje kartı oluştur
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    
    card.innerHTML = `
        <div class="project-header">
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
        <div class="project-links">
            ${project.liveUrl ? `<a href="${project.liveUrl}" class="project-link primary" target="_blank">
                <i class="fas fa-external-link-alt"></i>
                Canlı Görüntüle
            </a>` : ''}
            ${project.githubUrl ? `<a href="${project.githubUrl}" class="project-link secondary" target="_blank">
                <i class="fab fa-github"></i>
                GitHub
            </a>` : ''}
        </div>
    `;
    
    // Kart tıklama olayı
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.project-link')) {
            showProjectModal(project);
        }
    });
    
    return card;
}

// Proje modalını göster
function showProjectModal(project) {
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-subtitle">${project.description}</p>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3><i class="fas fa-bullseye"></i> Proje Amacı</h3>
                <p>${project.purpose}</p>
            </div>
            
            <div class="modal-section">
                <h3><i class="fas fa-code"></i> Kullanılan Teknolojiler</h3>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3><i class="fas fa-list-check"></i> Özellikler</h3>
                <ul style="color: #666; line-height: 1.8; margin-left: 1rem;">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            ${(project.liveUrl || project.githubUrl) ? `<div class="modal-section">
                <h3><i class="fas fa-link"></i> Bağlantılar</h3>
                <div class="project-links">
                    ${project.liveUrl ? `<a href="${project.liveUrl}" class="project-link primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        Canlı Görüntüle
                    </a>` : ''}
                    ${project.githubUrl ? `<a href="${project.githubUrl}" class="project-link secondary" target="_blank">
                        <i class="fab fa-github"></i>
                        GitHub Repository
                    </a>` : ''}
                </div>
            </div>` : ''}
        </div>
    `;
    
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Modal kapatma
function closeProjectModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// İstatistikleri güncelle
function updateStats() {
    const projectCount = document.getElementById('projectCount');
    const technologyCount = document.getElementById('technologyCount');
    const experienceYears = document.getElementById('experienceYears');
    
    // Animasyonlu sayaç
    animateCounter(projectCount, projects.length, 1000);
    animateCounter(technologyCount, getUniqueTechnologies().length, 1000);
    // Deneyim yılını projelerin tarihlerine göre hesapla
    const currentYear = new Date().getFullYear();
    const startYear = 2019; // İlk projenizin başladığı yıl
    const experience = currentYear - startYear;
    animateCounter(experienceYears, experience, 1000);
}

// Benzersiz teknolojileri al
function getUniqueTechnologies() {
    const allTechs = projects.flatMap(project => project.technologies);
    return [...new Set(allTechs)];
}

// Animasyonlu sayaç
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Event listener'ları ayarla
function setupEventListeners() {
    // Modal kapatma
    closeModal.addEventListener('click', closeProjectModal);
    
    // Modal dışına tıklama
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
    
    // ESC tuşu ile modal kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.style.display === 'block') {
            closeProjectModal();
        }
    });
    
    // Mobil menü toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Smooth scrolling için nav linkleri
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // Mobil menüyü kapat
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Scroll animasyonları
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animasyon için elementleri gözlemle
    document.querySelectorAll('.project-card, .contact-item, .tech-icon').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Sayfa yüklendiğinde animasyonları başlat
window.addEventListener('load', () => {
    // Hero animasyonları
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroStats = document.querySelector('.hero-stats');
    
    setTimeout(() => heroTitle.style.opacity = '1', 300);
    setTimeout(() => heroSubtitle.style.opacity = '1', 600);
    setTimeout(() => heroStats.style.opacity = '1', 900);
});

// Responsive menü için CSS ekle
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 1rem;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
    
    .hero-title, .hero-subtitle, .hero-stats {
        opacity: 0;
        transition: opacity 0.8s ease;
    }
`;
document.head.appendChild(style); 