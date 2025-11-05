// navigation-data.js
const navigationData = {
    // Navbar Links
    navLinks: [
        { href: "index.html", text: "Home" },
        { href: "index.html#about", text: "About" },
        { href: "events.html", text: "Events" },
        { href: "index.html#team", text: "Team" },
        { href: "index.html#gallery", text: "Gallery" },
        { href: "index.html#faq", text: "FAQ" },
        { href: "index.html#contact", text: "Contact" }
    ],

    // Hero Section Data

        hero: {
        title: "GeeksforGeeks Campus Body",
        subtitle: "NITRA Technical Campus", 
        description: "Empowering Coders, Building Communities",
        buttons: {
            primary: {
                text: "Join Community",
                action: "joinCommunity"
            },
            secondary: {
                text: "Upcoming Events", 
                action: "viewEvents"
            }
        },
        stats: [
            { value: "500+", label: "Members" },
            { value: "25+", label: "Events" },
            { value: "15+", label: "Workshops" }
        ]
    },

    about: {
        title: "About Us",
        description: "GeeksforGeeks Campus Body at NITRA Technical Campus was established in 2024 under the prestigious GeeksforGeeks Campus Program. We are a community of passionate coders and tech enthusiasts dedicated to fostering a strong coding culture on campus.",
        features: [
            {
                icon: "fas fa-laptop-code",
                title: "Coding Contests",
                description: "Regular coding challenges to sharpen skills"
            },
            {
                icon: "fas fa-users", 
                title: "Workshops",
                description: "Hands-on sessions on latest technologies"
            },
            {
                icon: "fas fa-gem",
                title: "Hackathons",
                description: "Innovate and build projects collaboratively"
            }

            
        ],
        logos: [
            {
                image: "assets/gfg.png",
                alt: "GFG Logo",
                name: "GeeksforGeeks"
            },
            {
                image: "assets/ntc.png", 
                alt: "NITRA Logo",
                name: "NITRA Technical Campus"
            },
            {
                image: "assets/gfgcampus.png",
                alt: "Campus Body Logo", 
                name: "GeeksforGeeks Campus Body, NITRA Technical Campus"
            }
        ]
    },

    // Team Section Data

    team: {
        title: "Our Team",
        subtitle: "Meet the passionate individuals driving our community forward",
        filters: [
            { id: "all", text: "All Members" },
            { id: "core", text: "Core Team" },
            { id: "tech", text: "Tech Team" },
            { id: "design", text: "Design Team" }
        ]
    },

    // Gallery Section Data

    gallery: {
        title: "Gallery",
        subtitle: "Capturing memories from our events and activities",
        filters: [
            { id: "all", text: "All" },
            { id: "coding", text: "Coding Events" },
            { id: "workshop", text: "Workshops" },
            { id: "hackathon", text: "Hackathons" },
            { id: "meetup", text: "Meetups" }
        ]
    },

    // FAQ Section Data
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions about our campus body",
        contactText: "Still have questions? Feel free to <a href=\"#contact\">contact us</a>!"
    },

    // Contact Section Data
    contact: {
        title: "Get In Touch",
        subtitle: "We'd love to hear from you. Reach out to us for any queries or collaborations.",
        contactInfo: {
            title: "Contact Information",
            details: [
                {
                    icon: "fas fa-envelope",
                    title: "Email",
                    text: "gfgcampus.nitra@gmail.com",
                    link: "mailto:gfgcampus.nitra@gmail.com",
                    linkText: "Send Email"
                },
                {
                    icon: "fas fa-map-marker-alt",
                    title: "Address", 
                    text: "NITRA Technical Campus<br>Ghaziabad, Uttar Pradesh",
                    link: "https://maps.google.com/?q=NITRA+Technical+Campus+Ghaziabad",
                    linkText: "View on Map",
                    target: "_blank"
                },
                {
                    icon: "fas fa-phone-alt",
                    title: "Phone",
                    text: "+91 XXXXX XXXXX",
                    link: "tel:+91XXXXXXXXXX",
                    linkText: "Call Now"
                }
            ]
        },
        socialLinks: {
            title: "Follow Us",
            links: [
                {
                    href: "https://linkedin.com/company/gfg-nitracampus",
                    icon: "fab fa-linkedin-in",
                    platform: "LinkedIn"
                },
                {
                    href: "https://instagram.com/gfg_nitra", 
                    icon: "fab fa-instagram",
                    platform: "Instagram"
                },
                {
                    href: "https://github.com/gfg-nitracampus",
                    icon: "fab fa-github", 
                    platform: "GitHub"
                },
                {
                    href: "https://chat.whatsapp.com/your-group-link",
                    icon: "fab fa-whatsapp",
                    platform: "WhatsApp"
                }
            ]
        },
        contactForm: {
            title: "Send us a Message",
            fields: [
                {
                    type: "text",
                    id: "name",
                    label: "Full Name *",
                    required: true
                },
                {
                    type: "email", 
                    id: "email",
                    label: "Email Address *",
                    required: true
                },
                {
                    type: "text",
                    id: "subject", 
                    label: "Subject",
                    required: false
                },
                {
                    type: "textarea",
                    id: "message",
                    label: "Message *", 
                    required: true,
                    rows: 5
                }
            ],
            submitText: "Send Message",
            loadingText: "Sending..."
        },
        mapSection: {
            title: "Find Us Here",
            placeholder: {
                icon: "fas fa-map-marked-alt",
                text: "Interactive Map", 
                link: "https://maps.google.com/?q=NITRA+Technical+Campus+Ghaziabad",
                linkText: "Open in Google Maps"
            }
        }
    },


    // Footer Data
    footer: {
        brand: {
            logo: "GFGNTC",
            name: "Gfg NITRA",
            description: "GeeksforGeeks Campus Body at NITRA Technical Campus - Empowering coders and building a strong developer community."
        },
        quickLinks: [
            { href: "index.html", text: "Home" },
            { href: "index.html#about", text: "About Us" },
            { href: "events.html", text: "Events" },
            { href: "index.html#team", text: "Our Team" },
            { href: "index.html#gallery", text: "Gallery" }
        ],
        resources: [
            { href: "index.html#faq", text: "FAQ" },
            { href: "index.html#contact", text: "Contact" },
            { href: "https://www.geeksforgeeks.org/", text: "GFG Portal", target: "_blank" },
            { href: "https://practice.geeksforgeeks.org/", text: "Practice", target: "_blank" },
            { href: "https://www.geeksforgeeks.org/courses", text: "Courses", target: "_blank" }
        ],
        socialLinks: [
            { href: "https://linkedin.com/company/gfg-nitracampus", icon: "fab fa-linkedin-in", platform: "LinkedIn" },
            { href: "https://github.com/gfg-nitracampus", icon: "fab fa-github", platform: "GitHub" },
            { href: "https://instagram.com/gfg_nitra", icon: "fab fa-instagram", platform: "Instagram" },
            { href: "https://chat.whatsapp.com/your-group-link", icon: "fab fa-whatsapp", platform: "WhatsApp" },
            { href: "mailto:gfgcampus.nitra@gmail.com", icon: "fas fa-envelope", platform: "Email" }
        ],
        contactInfo: [
            { icon: "fas fa-map-marker-alt", text: "NITRA Technical Campus, Ghaziabad" },
            { icon: "fas fa-envelope", text: "gfgntcg@gmail.com", href: "mailto:gfgntcg@gmail.com" },
            { icon: "fas fa-globe", text: "www.gfgcampusnitra.com", href: "#" }
        ],
        legalLinks: [
            { href: "#", text: "Privacy Policy" },
            { href: "#", text: "Terms of Service" }
        ]
    },

    // Action Links
    actionLinks: {
        joinCommunity: "https://chat.whatsapp.com/your-group-link",
        registerEvent: "https://forms.gle/your-actual-form-link",
        contactEmail: "mailto:gfgcampus.nitra@gmail.com"
    }
};