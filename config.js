// Global Configuration for RAS Real Estate
const SiteConfig = {
    agentName: "Anand Kumar",
    supportPhone: "+91 91377 09503",
    supportEmail: "contact@ras.com",
    reraId: "A123456789" // Example RERA ID for compliance
};

// Automatically inject these values into the HTML when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-config]').forEach(el => {
        const key = el.getAttribute('data-config');
        
        if (SiteConfig[key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = SiteConfig[key]; // Updates form placeholders
            } else if (el.tagName === 'A' && key.toLowerCase().includes('phone')) {
                el.href = `tel:${SiteConfig[key].replace(/\s+/g, '')}`; // Formats href for clickable phone numbers
            } else {
                el.textContent = SiteConfig[key]; // Updates standard text
            }
        }
    });
});