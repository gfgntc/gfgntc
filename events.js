// events.js - Complete Updated Code
document.addEventListener('DOMContentLoaded', function() {
    if (typeof eventsData !== 'undefined') {
        displayEvents('all');
        setupFilters();
    } else {
        console.error('Events data not found.');
        showErrorMessage();
    }
});

function displayEvents(filter) {
    const container = document.querySelector('.events-container');
    
    if (!container) {
        console.error('Events container not found');
        return;
    }
    
    const filteredEvents = filter === 'all' ? eventsData : eventsData.filter(event => event.type === filter);
    
    if (filteredEvents.length === 0) {
        container.innerHTML = `
            <div class="no-events">
                <i class="fas fa-calendar-times"></i>
                <h3>No events found</h3>
                <p>There are no ${filter} events at the moment.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredEvents.map(event => `
            
            <div class="event-content">
                <div class="event-header">
                    <span class="event-type type-${event.type}">${event.type.toUpperCase()}</span>
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-date">${event.date}</div>
                </div>
                
                <div class="event-body">
                    <p class="event-description">${event.description}</p>
                    <div class="event-partner">
                        <i class="fas fa-handshake"></i>
                        Partner: ${event.partner}
                    </div>
                    
                    ${event.youtubeLink || (event.resourceLinks && event.resourceLinks.length > 0) ? `
                        <div class="event-resources">
                            <h4 class="resources-title">
                                <i class="fas fa-link"></i>
                                Event Resources
                            </h4>
                            <div class="resources-links">
                                ${event.youtubeLink ? `
                                    <a href="${event.youtubeLink}" target="_blank" class="resource-link youtube-link">
                                        <i class="fab fa-youtube"></i>
                                        Watch Recording
                                    </a>
                                ` : ''}
                                
                                ${event.resourceLinks ? event.resourceLinks.map(link => `
                                    <a href="${link.url}" target="_blank" class="resource-link">
                                        <i class="fas fa-download"></i>
                                        ${link.title}
                                    </a>
                                `).join('') : ''}
                            </div>
                        </div>
                    ` : ''}
                </div>
                
                <div class="event-footer">
                    ${event.registrationLink ? `
                        <button class="register-btn" onclick="window.open('${event.registrationLink}', '_blank')">
                            <i class="fas fa-user-plus"></i>
                            Register Now
                        </button>
                    ` : `
                        <button class="register-btn disabled" disabled>
                            <i class="fas fa-calendar-check"></i>
                            Registration Closed
                        </button>
                    `}
                    
                    <div class="event-stats">
                        <span class="stat-item">
                            <i class="fas fa-users"></i>
                            ${event.participants}
                        </span>
                        <span class="stat-item">
                            <i class="fas fa-clock"></i>
                            ${event.duration}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayEvents(this.dataset.filter);
        });
    });
}

function showErrorMessage() {
    const container = document.querySelector('.events-container');
    if (container) {
        container.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Unable to load events</h3>
                <p>Please check your internet connection and try again.</p>
                <button onclick="location.reload()" class="retry-btn">Retry</button>
            </div>
        `;
    }
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('register-btn') && !e.target.classList.contains('disabled')) {
        console.log('Registration button clicked');
    }
});