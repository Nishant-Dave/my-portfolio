
// Shared JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize feather icons
    feather.replace();

    // Highlight active nav link
    const currentPath = window.location.pathname;
    document.querySelectorAll('[data-path]').forEach(link => {
        const linkPath = link.getAttribute('data-path');
        if ((currentPath === '/' && linkPath === '/') || 
            (currentPath !== '/' && currentPath.includes(linkPath))) {
            link.classList.add('active');
            if (linkPath === '/') {
                link.classList.remove('active');
                if (currentPath === '/') {
                    link.classList.add('active');
                }
            }
        }
    });
// Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            try {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i data-feather="loader" class="animate-spin"></i> Sending...';
                feather.replace();
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                contactForm.innerHTML = `
                    <div class="bg-green-500/10 border border-green-500 text-green-300 p-4 rounded-lg mb-4">
                        <p>Thank you! Your message has been sent successfully.</p>
                    </div>
                `;
            } catch (error) {
                contactForm.innerHTML = `
                    <div class="bg-red-500/10 border border-red-500 text-red-300 p-4 rounded-lg mb-4">
                        <p>Error: ${error.message}</p>
                    </div>
                    <button type="submit" class="bg-accent hover:bg-blue-400 text-primary font-medium px-6 py-3 rounded-lg transition">
                        Try Again
                    </button>
                `;
            }
        });
    }
});