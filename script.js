
// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenu = document.querySelector('.mobile-menu');
    const joinBtn = document.querySelector('.join-btn');

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

    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Mobile menu functionality
    mobileMenu.addEventListener('click', function() {
        alert('Mobile menu will open here!');
        // Later we'll add proper mobile menu functionality
    });

    // Join button functionality
    joinBtn.addEventListener('click', function() {
        alert('Redirecting to join community...');
        // Later add actual redirect link
    });

    // Smooth scroll (basic implementation)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Hero section animations and functionality
function initHeroSection() {
    const joinBtn = document.querySelector('.btn-primary');
    const eventsBtn = document.querySelector('.btn-secondary');
    
    // Join button functionality
    joinBtn.addEventListener('click', function() {
        window.open('https://chat.whatsapp.com/your-group-link', '_blank');
    });
    
    // Events button functionality
    eventsBtn.addEventListener('click', function() {
        // Smooth scroll to events section
        document.querySelector('#events').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Stats counter animation
    animateStats();
}

function animateStats() {
    const stats = document.querySelectorAll('.stat h3');
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

// Initialize hero section when DOM loads
document.addEventListener('DOMContentLoaded', initHeroSection);

// About section animations
function initAboutSection() {
    const features = document.querySelectorAll('.feature');
    
    // Intersection Observer for feature animations
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

// Initialize about section
document.addEventListener('DOMContentLoaded', initAboutSection);

// Team section functionality
function initTeamSection() {
    displayTeamMembers('all');
    setupTeamFilters();
}

function displayTeamMembers(teamFilter) {
    const teamGrid = document.querySelector('.team-grid');
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
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayTeamMembers(this.dataset.team);
        });
    });
}

// Initialize team section when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Other initializations...
    if (document.querySelector('#team')) {
        initTeamSection();
    }
});

// Gallery functionality
function initGallerySection() {
    displayGalleryItems('all');
    setupGalleryFilters();
    setupLightbox();
}

function displayGalleryItems(categoryFilter) {
    const galleryGrid = document.querySelector('.gallery-grid');
    const filteredItems = categoryFilter === 'all' ? galleryData : galleryData.filter(item => item.category === categoryFilter);
    
    galleryGrid.innerHTML = filteredItems.map(item => `
        <div class="gallery-item" data-id="${item.id}" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}" class="gallery-image" 
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
    
    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Navigation
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
}

let currentImageIndex = 0;

function openLightbox(imageId) {
    const lightbox = document.getElementById('galleryLightbox');
    currentImageIndex = galleryData.findIndex(item => item.id === imageId);
    updateLightbox();
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    updateLightbox();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    updateLightbox();
}

function updateLightbox() {
    const item = galleryData[currentImageIndex];
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxDescription = document.querySelector('.lightbox-description');
    const lightboxEvent = document.querySelector('.lightbox-event');
    const lightboxDate = document.querySelector('.lightbox-date');
    
    // Image error handling for lightbox
    lightboxImage.onerror = function() {
        this.src = 'https://via.placeholder.com/800x600/64748B/ffffff?text=Image+Not+Available';
    };
    
    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDescription.textContent = item.description;
    lightboxEvent.textContent = item.event;
    lightboxDate.textContent = item.date;
}

// Initialize gallery section
if (document.querySelector('#gallery')) {
    initGallerySection();
}

// FAQ functionality
function initFAQSection() {
    displayFAQItems('all');
    setupFAQAccordion();
    setupFAQFilter();
}

function displayFAQItems(categoryFilter) {
    const faqContainer = document.querySelector('.faq-container');
    const filteredFAQs = categoryFilter === 'all' ? faqData : faqData.filter(faq => faq.category === categoryFilter);
    
    if (filteredFAQs.length === 0) {
        faqContainer.innerHTML = `
            <div class="no-faqs">
                <p>No questions found for this category.</p>
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
    
    // Re-attach event listeners after rendering
    setupFAQAccordion();
}

function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

function setupFAQFilter() {
    // Create unique categories
    const categories = ['all', ...new Set(faqData.map(faq => faq.category))];
    
    const filterContainer = document.createElement('div');
    filterContainer.className = 'faq-filter';
    
    filterContainer.innerHTML = categories.map(category => `
        <button class="faq-filter-btn ${category === 'all' ? 'active' : ''}" 
                data-category="${category}">
            ${category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
    `).join('');
    
    // Insert filter before FAQ container
    const faqContainer = document.querySelector('.faq-container');
    faqContainer.parentNode.insertBefore(filterContainer, faqContainer);
    
    // Add event listeners to filter buttons
    const filterBtns = document.querySelectorAll('.faq-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayFAQItems(this.dataset.category);
        });
    });
}

// Initialize FAQ section
if (document.querySelector('#faq')) {
    initFAQSection();
}


// Contact form functionality
function initContactSection() {
    setupContactForm();
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    
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
    
    errorElement.textContent = '';
    field.style.borderColor = '#E2E8F0';
}

async function submitForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    const formData = new FormData(form);
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
        // Simulate API call (replace with actual form submission)
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

function showNotification(message, type) {
    // Create notification element
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
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

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
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Initialize contact section
if (document.querySelector('#contact')) {
    initContactSection();
}


// Footer functionality
function initFooter() {
    setupScrollToTop();
    setupNewsletter();
    setupSmoothScroll();
}

// Scroll to top functionality
function setupScrollToTop() {
    const scrollBtn = document.querySelector('.scroll-to-top');
    
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

// Newsletter functionality
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            
            if (validateEmail(email)) {
                // Simulate newsletter subscription
                this.innerHTML = `
                    <div class="newsletter-success">
                        <i class="fas fa-check-circle"></i>
                        <span>Thank you for subscribing!</span>
                    </div>
                `;
                
                // Add success styles
                const successStyle = `
                    .newsletter-success {
                        color: #10B981;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        font-weight: 600;
                    }
                `;
                const style = document.createElement('style');
                style.textContent = successStyle;
                document.head.appendChild(style);
            }
        });
    }
}

// Smooth scroll for footer links
function setupSmoothScroll() {
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Email validation helper
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize footer when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initFooter();
});