// script.js - Main JavaScript file with all functionality

// Global variables
let currentImageIndex = 0;

// Main initialization function
function initializeApp() {
    initNavigation();
    initNavbar();
    
    generateHeroSection();
    initHeroSection();

    generateAboutSection();
    initAboutSection();
    
    
    generateTeamSection();
    initTeamSection();

    generateGallerySection();
    initGallerySection();

    generateFAQSection();
    initFAQSection();

    generateContactSection();
    initContactSection();
    initFooter();
    
    console.log('GFG NITRA Website initialized successfully!');
}

// ===== NAVIGATION INITIALIZATION =====
function initNavigation() {
    generateNavLinks();
    generateFooter();
    setupActionButtons();
}

// Generate navigation links from data
function generateNavLinks() {
    const navContainer = document.querySelector('.nav-links');
    if (!navContainer || !navigationData.navLinks) return;

    navContainer.innerHTML = navigationData.navLinks.map(link => `
        <li>
            <a href="${link.href}" class="nav-link" ${link.target ? `target="${link.target}"` : ''}>
                ${link.text}
            </a>
        </li>
    `).join('');
}

// Generate footer from data
function generateFooter() {
    generateFooterBrand();
    generateFooterLinks();
    generateFooterContact();
    generateFooterBottom();
}

function generateFooterBrand() {
    const container = document.querySelector('.footer-brand');
    if (!container || !navigationData.footer.brand) return;

    container.innerHTML = `
        <div class="footer-logo">
            <i class="fas fa-code"></i>
            <span>${navigationData.footer.brand.logo}</span>
        </div>
        <span class="brand-name">${navigationData.footer.brand.name}</span>
        <p class="footer-description">${navigationData.footer.brand.description}</p>
        <div class="footer-social">
            ${navigationData.footer.socialLinks.map(link => `
                <a href="${link.href}" class="social-link" target="_blank" title="${link.platform}">
                    <i class="${link.icon}"></i>
                </a>
            `).join('')}
        </div>
    `;
}

// script.js - Hero section generation
function generateHeroSection() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection || !navigationData.hero) return;

    heroSection.innerHTML = `
        <div class="hero-content">
            <h1 class="hero-title">${navigationData.hero.title}</h1>
            <h2 class="hero-subtitle">${navigationData.hero.subtitle}</h2>
            <p class="hero-description">${navigationData.hero.description}</p>
            <div class="hero-buttons">
                <button class="btn-primary">${navigationData.hero.buttons.primary.text}</button>
                <button class="btn-secondary">${navigationData.hero.buttons.secondary.text}</button>
            </div>
        </div>
        <div class="hero-stats">
            ${navigationData.hero.stats.map(stat => `
                <div class="stat">
                    <h3>${stat.value}</h3>
                    <p>${stat.label}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// script.js - About section generation
function generateAboutSection() {
    const aboutSection = document.querySelector('#about');
    if (!aboutSection || !navigationData.about) return;

    aboutSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">${navigationData.about.title}</h2>
            <div class="about-content">
                <div class="about-text">
                    <p class="about-description">${navigationData.about.description}</p>
                    <div class="about-features">
                        ${navigationData.about.features.map(feature => `
                            <div class="feature">
                                <i class="${feature.icon}"></i>
                                <h4>${feature.title}</h4>
                                <p>${feature.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="about-logos">
                    ${navigationData.about.logos.map(logo => `
                        <div class="logo-card">
                            <img src="${logo.image}" alt="${logo.alt}">
                            <h4>${logo.name}</h4>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// script.js - Team section generation
function generateTeamSection() {
    const teamSection = document.querySelector('#team');
    if (!teamSection || !navigationData.team) return;

    teamSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">${navigationData.team.title}</h2>
            <p class="section-subtitle">${navigationData.team.subtitle}</p>
            
            <!-- Team Filter -->
            <div class="team-filter">
                ${navigationData.team.filters.map(filter => `
                    <button class="team-filter-btn ${filter.id === 'all' ? 'active' : ''}" data-team="${filter.id}">
                        ${filter.text}
                    </button>
                `).join('')}
            </div>

            <!-- Team Grid -->
            <div class="team-grid">
                <!-- Team members will be populated by team-data.js -->
            </div>
        </div>
    `;
}

// script.js - Gallery section generation
function generateGallerySection() {
    const gallerySection = document.querySelector('#gallery');
    if (!gallerySection || !navigationData.gallery) return;

    gallerySection.innerHTML = `
        <div class="container">
            <h2 class="section-title">${navigationData.gallery.title}</h2>
            <p class="section-subtitle">${navigationData.gallery.subtitle}</p>
            
            <!-- Gallery Filter -->
            <div class="gallery-filter">
                ${navigationData.gallery.filters.map(filter => `
                    <button class="gallery-filter-btn ${filter.id === 'all' ? 'active' : ''}" data-category="${filter.id}">
                        ${filter.text}
                    </button>
                `).join('')}
            </div>

            <!-- Gallery Grid -->
            <div class="gallery-grid">
                <!-- Gallery items will be populated by gallery-data.js -->
            </div>
        </div>

        <!-- Lightbox Modal -->
        <div id="galleryLightbox" class="lightbox">
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img class="lightbox-image" src="" alt="">
                <div class="lightbox-caption">
                    <h3 class="lightbox-title"></h3>
                    <p class="lightbox-description"></p>
                    <div class="lightbox-meta">
                        <span class="lightbox-event"></span>
                        <span class="lightbox-date"></span>
                    </div>
                </div>
                <button class="lightbox-nav lightbox-prev">&#10094;</button>
                <button class="lightbox-nav lightbox-next">&#10095;</button>
            </div>
        </div>
    `;
}

// script.js - FAQ section generation
function generateFAQSection() {
    const faqSection = document.querySelector('#faq');
    if (!faqSection || !navigationData.faq) return;

    faqSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">${navigationData.faq.title}</h2>
            <p class="section-subtitle">${navigationData.faq.subtitle}</p>
            
            <div class="faq-container">
                <!-- FAQ items will be populated by faq-data.js -->
            </div>
            
            <div class="faq-contact">
                <p>${navigationData.faq.contactText}</p>
            </div>
        </div>
    `;
}

// script.js - Contact section generation
function generateContactSection() {
    const contactSection = document.querySelector('#contact');
    if (!contactSection || !navigationData.contact) return;

    contactSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">${navigationData.contact.title}</h2>
            <p class="section-subtitle">${navigationData.contact.subtitle}</p>
            
            <div class="contact-content">
                <!-- Contact Info -->
                <div class="contact-info">
                    <h3>${navigationData.contact.contactInfo.title}</h3>
                    <div class="contact-details">
                        ${navigationData.contact.contactInfo.details.map(detail => `
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="${detail.icon}"></i>
                                </div>
                                <div class="contact-text">
                                    <h4>${detail.title}</h4>
                                    <p>${detail.text}</p>
                                    <a href="${detail.link}" ${detail.target ? `target="${detail.target}"` : ''}>${detail.linkText}</a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="social-links">
                        <h4>${navigationData.contact.socialLinks.title}</h4>
                        <div class="social-icons">
                            ${navigationData.contact.socialLinks.links.map(link => `
                                <a href="${link.href}" class="social-link" target="_blank" title="${link.platform}">
                                    <i class="${link.icon}"></i>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Contact Form -->
                <div class="contact-form">
                    <h3>${navigationData.contact.contactForm.title}</h3>
                    <form id="contactForm">
                        ${navigationData.contact.contactForm.fields.map(field => `
                            <div class="form-group">
                                <label for="${field.id}">${field.label}</label>
                                ${field.type === 'textarea' ? 
                                    `<textarea id="${field.id}" name="${field.id}" rows="${field.rows || 5}" ${field.required ? 'required' : ''}></textarea>` :
                                    `<input type="${field.type}" id="${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>`
                                }
                                <span class="error-message"></span>
                            </div>
                        `).join('')}
                        
                        <button type="submit" class="submit-btn">
                            <span class="btn-text">${navigationData.contact.contactForm.submitText}</span>
                            <span class="btn-loading">
                                <i class="fas fa-spinner fa-spin"></i> ${navigationData.contact.contactForm.loadingText}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            
            <!-- Map Section -->
            <div class="map-section">
                <h3>${navigationData.contact.mapSection.title}</h3>
                <div class="map-container">
                    <div class="map-placeholder">
                        <i class="${navigationData.contact.mapSection.placeholder.icon}"></i>
                        <p>${navigationData.contact.mapSection.placeholder.text}</p>
                        <a href="${navigationData.contact.mapSection.placeholder.link}" target="_blank" class="map-link">
                            ${navigationData.contact.mapSection.placeholder.linkText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// script.js
function generateFooterLinks() {
    const footerLinksContainers = document.querySelectorAll('.footer-links');
    console.log('Found footer links containers:', footerLinksContainers.length);
    
    // Quick Links - pehla footer-links
    if (footerLinksContainers[0]) {
        console.log('Setting quick links in container 1');
        footerLinksContainers[0].innerHTML = `
            <h3>Quick Links</h3>
            <ul>
                ${navigationData.footer.quickLinks.map(link => `
                    <li><a href="${link.href}">${link.text}</a></li>
                `).join('')}
            </ul>
        `;
    }

    // Resources - dusra footer-links  
    if (footerLinksContainers[1]) {
        console.log('Setting resources in container 2');
        footerLinksContainers[1].innerHTML = `
            <h3>Resources</h3>
            <ul>
                ${navigationData.footer.resources.map(link => `
                    <li><a href="${link.href}" target="_blank">${link.text}</a></li>
                `).join('')}
            </ul>
        `;
    }
}

function generateFooterContact() {
    const container = document.querySelector('.footer-contact');
    if (!container || !navigationData.footer.contactInfo) return;

    container.innerHTML = `
        <h3>Get In Touch</h3>
        <div class="contact-info">
            ${navigationData.footer.contactInfo.map(contact => {
                if (contact.href) {
                    return `
                        <div class="contact-item">
                            <i class="${contact.icon}"></i>
                            <a href="${contact.href}">${contact.text}</a>
                        </div>
                    `;
                } else {
                    return `
                        <div class="contact-item">
                            <i class="${contact.icon}"></i>
                            <span>${contact.text}</span>
                        </div>
                    `;
                }
            }).join('')}
        </div>
        
        <div class="newsletter">
            <h4>Stay Updated</h4>
            <form class="newsletter-form">
                <input type="email" placeholder="Enter your email" required>
                <button type="submit">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </form>
        </div>
    `;
}

function generateFooterBottom() {
    const container = document.querySelector('.footer-bottom');
    if (!container || !navigationData.footer.legalLinks) return;

    container.innerHTML = `
        <div class="footer-copyright">
            <p>&copy; 2025 GeeksforGeeks Campus Body, NITRA Technical Campus. All rights reserved.</p>
        </div>
        <div class="footer-credits">
            <p>Made with <i class="fas fa-heart"></i> by GFG NITRA Team</p>
        </div>
        <div class="footer-legal">
            ${navigationData.footer.legalLinks.map(link => `
                <a href="${link.href}">${link.text}</a>
            `).join('')}
        </div>
    `;
}

// Setup action buttons
function setupActionButtons() {
    // Join Community buttons
    const joinButtons = document.querySelectorAll('.join-btn, .btn-primary, [data-action="join-community"]');
    joinButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.open(navigationData.actionLinks.joinCommunity, '_blank');
        });
    });

    // Contact buttons
    const contactButtons = document.querySelectorAll('[data-action="contact-email"]');
    contactButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = navigationData.actionLinks.contactEmail;
        });
    });
}


// ===== NAVBAR FUNCTIONALITY =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!navbar) return;

    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.padding = '0.7rem 5%';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.padding = '1rem 5%';
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        }
    });

    // Mobile menu functionality - FIXED VERSION
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation(); // Important: event bubble stop karo
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.classList.toggle('active');
                this.classList.toggle('active');
            }
        });
    }

    // Close mobile menu when clicking outside - FIXED VERSION
    document.addEventListener('click', (e) => {
        const navLinks = document.querySelector('.nav-links');
        const mobileMenuBtn = document.querySelector('.mobile-menu');
        
        if (navLinks && navLinks.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.mobile-menu')) {
            navLinks.classList.remove('active');
            mobileMenuBtn?.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Handle anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
            
            // Close mobile menu after click
            const navLinksContainer = document.querySelector('.nav-links');
            const mobileMenuBtn = document.querySelector('.mobile-menu');
            if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                mobileMenuBtn?.classList.remove('active');
            }
        });
    });

    console.log('Navbar initialized - Mobile menu should work now');
}

// ===== HERO SECTION =====
function initHeroSection() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const joinBtn = heroSection.querySelector('.btn-primary');
    const eventsBtn = heroSection.querySelector('.btn-secondary');
    
    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            window.open(navigationData.actionLinks.joinCommunity, '_blank');
        });
    }
    
    if (eventsBtn) {
        eventsBtn.addEventListener('click', function() {
            const eventsSection = document.querySelector('#events');
            if (eventsSection) {
                eventsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = 'events.html';
            }
        });
    }
    
    animateStats();
}

function animateStats() {
    const stats = document.querySelectorAll('.stat h3');
    if (stats.length === 0) return;

    const values = [500, 25, 15];
    const duration = 2000;
    
    stats.forEach((stat, index) => {
        let start = 0;
        const end = values[index];
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                stat.textContent = end + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(start) + '+';
            }
        }, 16);
    });
}

// ===== ABOUT SECTION =====
function initAboutSection() {
    const features = document.querySelectorAll('.feature');
    if (features.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(30px)';
        feature.style.transition = 'all 0.6s ease';
        observer.observe(feature);
    });
}

// ===== TEAM SECTION =====
function initTeamSection() {
    const teamSection = document.querySelector('#team');
    if (!teamSection || typeof teamData === 'undefined') return;

    displayTeamMembers('all');
    setupTeamFilters();
}

function displayTeamMembers(teamFilter) {
    const teamGrid = document.querySelector('.team-grid');
    if (!teamGrid) return;

    const filteredMembers = teamFilter === 'all' ? teamData : teamData.filter(member => member.team === teamFilter);
    
    teamGrid.innerHTML = filteredMembers.map(member => `
        <div class="team-member" data-team="${member.team}">
            <div class="member-image">
                ${member.image ? 
                    `<img src="${member.image}" alt="${member.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"> 
                     <div class="member-placeholder" style="${member.image ? 'display:none' : 'display:flex'}">
                        <i class="fas fa-user"></i>
                     </div>` : 
                    `<div class="member-placeholder">
                        <i class="fas fa-user"></i>
                     </div>`
                }
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <div class="member-role">${member.role}</div>
                <div class="member-batch">${member.batch}</div>
                <p class="member-description">${member.description}</p>
                <span class="team-tag">${member.team.toUpperCase()} TEAM</span>
            </div>
            <div class="member-social">
                ${createSocialLinks(member.social)}
            </div>
        </div>
    `).join('');
}



function createSocialLinks(social) {
    const socialIcons = {
        linkedin: { icon: 'fab fa-linkedin-in', class: 'social-linkedin' },
        github: { icon: 'fab fa-github', class: 'social-github' },
        instagram: { icon: 'fab fa-instagram', class: 'social-instagram' },
        twitter: { icon: 'fab fa-twitter', class: 'social-twitter' },
        behance: { icon: 'fab fa-behance', class: 'social-behance' },
        medium: { icon: 'fab fa-medium-m', class: 'social-medium' },
        leetcode: { icon: 'fas fa-code', class: 'social-leetcode' },
        codeforces: { icon: 'fas fa-chart-line', class: 'social-codeforces' }
    };

    let links = '';
    for (const [platform, url] of Object.entries(social)) {
        if (url && socialIcons[platform]) {
            links += `
                <a href="${url}" class="social-link ${socialIcons[platform].class}" target="_blank" title="${platform}">
                    <i class="${socialIcons[platform].icon}"></i>
                </a>
            `;
        }
    }
    return links;
}

function setupTeamFilters() {
    const filterBtns = document.querySelectorAll('.team-filter-btn');
    if (filterBtns.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayTeamMembers(this.dataset.team);
        });
    });
}

// ===== GALLERY SECTION =====
function initGallerySection() {
    const gallerySection = document.querySelector('#gallery');
    if (!gallerySection || typeof galleryData === 'undefined') return;

    displayGalleryItems('all');
    setupGalleryFilters();
    setupLightbox();
}

function displayGalleryItems(categoryFilter) {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    const filteredItems = categoryFilter === 'all' ? galleryData : galleryData.filter(item => item.category === categoryFilter);
    
    if (filteredItems.length === 0) {
        galleryGrid.innerHTML = `
            <div class="no-gallery-items">
                <i class="fas fa-images"></i>
                <h3>No images found</h3>
                <p>There are no ${categoryFilter} gallery items at the moment.</p>
            </div>
        `;
        return;
    }
    
    galleryGrid.innerHTML = filteredItems.map(item => `
        <div class="gallery-item" data-id="${item.id}" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}" class="gallery-image" 
                 loading="lazy"
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300/64748B/ffffff?text=Image+Not+Found'">
            <div class="gallery-overlay">
                <div class="gallery-title">${item.title}</div>
                <div class="gallery-event">${item.event}</div>
            </div>
        </div>
    `).join('');
    
    // Add click event to gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => openLightbox(parseInt(item.dataset.id)));
    });
}

function setupGalleryFilters() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    if (filterBtns.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayGalleryItems(this.dataset.category);
        });
    });
}

function setupLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    if (!lightbox) return;
    
    // Close lightbox
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', showPrevImage);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextImage);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
}

function openLightbox(imageId) {
    const lightbox = document.getElementById('galleryLightbox');
    if (!lightbox) return;

    currentImageIndex = galleryData.findIndex(item => item.id === imageId);
    if (currentImageIndex === -1) return;

    updateLightbox();
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    if (!lightbox) return;

    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    if (galleryData.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    updateLightbox();
}

function showNextImage() {
    if (galleryData.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    updateLightbox();
}

function updateLightbox() {
    const item = galleryData[currentImageIndex];
    if (!item) return;

    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxDescription = document.querySelector('.lightbox-description');
    const lightboxEvent = document.querySelector('.lightbox-event');
    const lightboxDate = document.querySelector('.lightbox-date');
    
    if (lightboxImage) {
        lightboxImage.onerror = function() {
            this.src = 'https://via.placeholder.com/800x600/64748B/ffffff?text=Image+Not+Available';
        };
        lightboxImage.src = item.image;
        lightboxImage.alt = item.title;
    }
    
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDescription) lightboxDescription.textContent = item.description;
    if (lightboxEvent) lightboxEvent.textContent = item.event;
    if (lightboxDate) lightboxDate.textContent = item.date;
}

// ===== FAQ SECTION =====
function initFAQSection() {
    const faqSection = document.querySelector('#faq');
    if (!faqSection || typeof faqData === 'undefined') return;

    displayFAQItems('all');
    setupFAQAccordion();
    setupFAQFilter();
}

function displayFAQItems(categoryFilter) {
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) return;

    const filteredFAQs = categoryFilter === 'all' ? faqData : faqData.filter(faq => faq.category === categoryFilter);
    
    if (filteredFAQs.length === 0) {
        faqContainer.innerHTML = `
            <div class="no-faqs">
                <i class="fas fa-question-circle"></i>
                <h3>No questions found</h3>
                <p>There are no ${categoryFilter} questions at the moment.</p>
            </div>
        `;
        return;
    }
    
    faqContainer.innerHTML = filteredFAQs.map(faq => `
        <div class="faq-item" data-category="${faq.category}">
            <button class="faq-question">
                <span>${faq.question}</span>
                <span class="faq-category">${faq.category}</span>
                <i class="fas fa-chevron-down faq-icon"></i>
            </button>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
    
    setupFAQAccordion();
}

function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length === 0) return;
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

function setupFAQFilter() {
    if (!faqData || faqData.length === 0) return;

    const categories = ['all', ...new Set(faqData.map(faq => faq.category))];
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) return;

    const filterContainer = document.createElement('div');
    filterContainer.className = 'faq-filter';
    
    filterContainer.innerHTML = categories.map(category => `
        <button class="faq-filter-btn ${category === 'all' ? 'active' : ''}" 
                data-category="${category}">
            ${category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
    `).join('');
    
    // Insert filter before FAQ container
    faqContainer.parentNode.insertBefore(filterContainer, faqContainer);
    
    // Add event listeners to filter buttons
    const filterBtns = filterContainer.querySelectorAll('.faq-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayFAQItems(this.dataset.category);
        });
    });
}

// ===== CONTACT SECTION =====
function initContactSection() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    setupContactForm();
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm?.querySelector('.submit-btn');
    
    if (!contactForm || !submitBtn) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            await submitForm();
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
}

function validateForm() {
    const form = document.getElementById('contactForm');
    if (!form) return false;

    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const errorElement = field.parentNode.querySelector('.error-message');
    
    if (!errorElement) return false;

    // Clear previous error
    errorElement.textContent = '';
    field.style.borderColor = '#E2E8F0';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        errorElement.textContent = 'This field is required';
        field.style.borderColor = '#DC2626';
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorElement.textContent = 'Please enter a valid email address';
            field.style.borderColor = '#DC2626';
            return false;
        }
    }
    
    // Name validation (minimum 2 characters)
    if (field.id === 'name' && value && value.length < 2) {
        errorElement.textContent = 'Name must be at least 2 characters long';
        field.style.borderColor = '#DC2626';
        return false;
    }
    
    // Message validation (minimum 10 characters)
    if (field.id === 'message' && value && value.length < 10) {
        errorElement.textContent = 'Message must be at least 10 characters long';
        field.style.borderColor = '#DC2626';
        return false;
    }
    
    field.style.borderColor = '#10B981';
    return true;
}

function clearError(e) {
    const field = e.target;
    const errorElement = field.parentNode.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.textContent = '';
        field.style.borderColor = '#E2E8F0';
    }
}

async function submitForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form?.querySelector('.submit-btn');
    
    if (!form || !submitBtn) return;

    const formData = new FormData(form);
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Reset form
        form.reset();
        
    } catch (error) {
        showNotification('Failed to send message. Please try again.', 'error');
    } finally {
        // Hide loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// ===== FOOTER FUNCTIONALITY =====
function initFooter() {
    setupScrollToTop();
    setupNewsletter();
}

function setupScrollToTop() {
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (!scrollBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput?.value;
            
            if (email && validateEmail(email)) {
                // Simulate newsletter subscription
                this.innerHTML = `
                    <div class="newsletter-success">
                        <i class="fas fa-check-circle"></i>
                        <span>Thank you for subscribing!</span>
                    </div>
                `;
            }
        });
    }
}

// ===== UTILITY FUNCTIONS =====
function showNotification(message, type) {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(notif => notif.remove());

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#DC2626'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => notification.remove());
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => notification.remove(), 5000);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Add notification styles
const notificationStyles = `
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    max-width: 400px;
    animation: slideIn 0.3s ease;
}
`;

// Add styles to document
if (!document.querySelector('#notification-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'notification-styles';
    styleSheet.textContent = notificationStyles;
    document.head.appendChild(styleSheet);
}