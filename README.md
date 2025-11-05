# GFG Campus Body Website
A responsive single-page website for GeeksforGeeks Campus Body at NITRA Technical Campus.

# 📁 Project Structure
text
gfgntc/
├── index.html                 # Main homepage
├── events.html               # Events page
├── style.css                 # Main stylesheet
├── script.js                 # Main JavaScript functionality
├── navigation-data.js        # Navigation, footer, and static content data
├── team-data.js              # Team members data
├── gallery-data.js           # Gallery images data  
├── faq-data.js               # FAQ questions data
├── events-data.js            # Events data (for events.html)
├── images/
│   ├── team/                 # Team member photos
│   ├── events/               # Event photos
│   └── gallery/              # Gallery photos
└── assets/
    └── logo.png              # Logo and brand assets
🛠️ How to Update Content
1. Update Navigation & Footer
Edit navigation-data.js:

javascript
const navigationData = {
    navLinks: [...],           // Update navbar links
    footer: {
        brand: {...},          // Update footer brand info
        quickLinks: [...],     // Update quick links
        resources: [...],      // Update resource links
        socialLinks: [...]     // Update social media links
    },
    hero: {...},               // Update hero section
    about: {...},              // Update about section
    // ... other sections
};
2. Update Team Members
Edit team-data.js:

javascript
const teamData = [
    {
        name: "Member Name",
        role: "Role",
        team: "core/tech/design",
        batch: "B.Tech CSE 2024",
        description: "Member description",
        social: {
            linkedin: "url",
            github: "url",
            // ... other social links
        }
    }
    // Add/remove team members as needed
];
3. Update Gallery Images
Edit gallery-data.js:

javascript
const galleryData = [
    {
        id: 1,
        image: "images/gallery/filename.jpg",
        title: "Image Title",
        category: "coding/workshop/hackathon",
        event: "Event Name",
        description: "Image description"
    }
    // Add new images or update existing ones
];
4. Update FAQ Section
Edit faq-data.js:

javascript
const faqData = [
    {
        id: 1,
        question: "Your question?",
        answer: "Your answer...",
        category: "membership/events"
    }
    // Add new FAQs or modify existing ones
];
5. Update Events
Edit events-data.js:

javascript
const eventsData = [
    {
        id: 1,
        title: "Event Title",
        type: "upcoming/past/partner",
        date: "Date",
        description: "Event description",
        registrationLink: "url" // null if registration closed
    }
    // Update events list
];
6. Update Contact Information
Edit navigation-data.js - contact section:

javascript
contact: {
    contactInfo: {
        details: [
            {
                text: "new-email@domain.com",  // Update email
                link: "mailto:new-email@domain.com"
            }
            // Update other contact details
        ]
    },
    socialLinks: {
        links: [
            {
                href: "new-social-link",  // Update social media links
                // ...
            }
        ]
    }
}
🎨 Styling Updates
Modify Colors & Theme
Edit style.css:

css
:root {
    --primary-blue: #2563EB;    /* Change primary color */
    --secondary-green: #10B981; /* Change secondary color */
    --accent-amber: #F59E0B;    /* Change accent color */
}
Add New Sections
Add HTML structure in index.html

Create corresponding data structure in navigation-data.js

Add generation function in script.js

Style in style.css

📱 Responsive Design
The website is fully responsive. Test on:

Desktop (1200px+)

Tablet (768px - 1199px)

Mobile (320px - 767px)

🚀 Deployment
GitHub Pages
Push code to GitHub repository

Go to Repository Settings → Pages

Select source branch (usually main or gh-pages)

Your site will be live at https://username.github.io/repository-name

Custom Domain
Add CNAME file with your domain name

Update DNS settings

Configure in GitHub Pages settings

🔧 Maintenance Tips
Regular Updates
Update team members each semester

Add new events regularly

Refresh gallery after each event

Keep FAQ section updated with common queries

Performance
Optimize images before uploading

Compress large files

Use lazy loading for images

Minimize CSS and JavaScript

SEO
Update meta tags in index.html

Add alt text to images

Use descriptive page titles

Include relevant keywords in content

📞 Support
For technical issues or updates:

Check this README first

Review the data file structures

Test changes locally before deploying

Contact the development team if needed

📄 License
This project is for GeeksforGeeks Campus Body, NITRA Technical Campus internal use.

Last Updated: ${new Date().toLocaleDateString()}

Happy Coding! 🚀