// events.js - Events page functionality

// Initialize events page
document.addEventListener('DOMContentLoaded', function() {
    // Check if events data is available
    if (typeof eventsData !== 'undefined') {
        displayEvents('all');
        setupFilters();
    } else {
        console.error('Events data not found. Make sure events-data.js is loaded.');
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
        <div class="event-card" data-type="${event.type}">
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
            </div>
            <div class="event-footer">
                <button class="register-btn ${!event.registrationLink ? 'disabled' : ''}" 
                        ${!event.registrationLink ? 'disabled' : ''}
                        onclick="${event.registrationLink ? `window.open('${event.registrationLink}', '_blank')` : 'return false'}">
                    ${event.registrationLink ? 'Register Now' : 'Registration Closed'}
                </button>
                <div class="event-stats">
                    <span><i class="fas fa-users"></i> ${event.participants}</span>
                    <span><i class="fas fa-clock"></i> ${event.duration}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter events
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

// Add error handling for registration buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('register-btn') && !e.target.classList.contains('disabled')) {
        // You can add analytics or tracking here
        console.log('Registration button clicked');
    }
});