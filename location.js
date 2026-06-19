// Location Management for Forest Creek Lodges

// Define lodge data
const lodges = {
    chikanga: {
        name: 'Forest Creek Chikanga',
        fullName: 'Forest Creek Lodge - Chikanga',
        area: 'Chikanga',
        address: 'Chikanga District, Mutare, Zimbabwe',
        phone: '+263 (0) 20 123 4567',
        email: 'chikanga@forestcreeklodge.com',
        description: 'Our Chikanga branch offering serene accommodation in a vibrant neighborhood.',
        rooms: [
            { type: 'Deluxe Suite', price: 150, emoji: '🛏️' },
            { type: 'Standard Room', price: 75, emoji: '🏠' },
            { type: 'Family Cottage', price: 200, emoji: '👨‍👩‍👧‍👦' }
        ]
    },
    vhumba: {
        name: 'Forest Creek Vhumba',
        fullName: 'Forest Creek Lodge - Vhumba',
        area: 'Vhumba',
        address: 'Vhumba Area, Mutare, Zimbabwe',
        phone: '+263 (0) 71 234 5678',
        email: 'vhumba@forestcreeklodge.com',
        description: 'Experience luxury in the tranquil Vhumba location.',
        rooms: [
            { type: 'Deluxe Suite', price: 160, emoji: '🛏️' },
            { type: 'Standard Room', price: 80, emoji: '🏠' },
            { type: 'Studio Apartment', price: 110, emoji: '🏘️' },
            { type: 'Honeymoon Suite', price: 200, emoji: '💑' }
        ]
    },
    dangamvura: {
        name: 'Forest Creek Dangamvura',
        fullName: 'Forest Creek Lodge - Dangamvura',
        area: 'Dangamvura',
        address: 'Dangamvura, Mutare, Zimbabwe',
        phone: '+263 (0) 72 345 6789',
        email: 'dangamvura@forestcreeklodge.com',
        description: 'Premium accommodation in the heart of Dangamvura.',
        rooms: [
            { type: 'Deluxe Suite', price: 140, emoji: '🛏️' },
            { type: 'Standard Room', price: 70, emoji: '🏠' },
            { type: 'Family Cottage', price: 190, emoji: '👨‍👩‍👧‍👦' },
            { type: 'Budget Room', price: 50, emoji: '💰' }
        ]
    }
};

// Get current lodge from session storage or set default
function getCurrentLodge() {
    let currentLodge = sessionStorage.getItem('currentLodge') || 'chikanga';
    if (!lodges[currentLodge]) {
        currentLodge = 'chikanga';
        sessionStorage.setItem('currentLodge', currentLodge);
    }
    return currentLodge;
}

// Set current lodge
function setCurrentLodge(lodge) {
    if (lodges[lodge]) {
        sessionStorage.setItem('currentLodge', lodge);
        // Refresh page to show new location data
        location.reload();
    }
}

// Get lodge data
function getLodgeData(lodgeId) {
    return lodges[lodgeId] || lodges['chikanga'];
}

// Get current lodge data
function getCurrentLodgeData() {
    return getLodgeData(getCurrentLodge());
}

// Update page with current lodge info
function updatePageWithLodge() {
    const current = getCurrentLodge();
    const data = getCurrentLodgeData();
    
    // Update all elements with data-lodge attribute
    document.querySelectorAll('[data-lodge]').forEach(el => {
        const attribute = el.getAttribute('data-lodge');
        if (data[attribute]) {
            el.textContent = data[attribute];
        }
    });
    
    // Update location selector buttons
    document.querySelectorAll('.location-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-location') === current) {
            btn.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePageWithLodge();
});
