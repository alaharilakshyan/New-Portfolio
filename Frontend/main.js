// Simple fade-in on scroll for sections and work cards
function fadeInOnScroll(selector, visibleClass = "visible") {
    const elements = document.querySelectorAll(selector);

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.92;
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                el.classList.add(visibleClass);
            } else {
                el.classList.remove(visibleClass);
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    document.addEventListener("DOMContentLoaded", checkVisibility);
}

// Fade in sections
fadeInOnScroll("section");

// Fade in project items
fadeInOnScroll(".project-item");

// Fade in work cards
fadeInOnScroll(".work-card");

// Navigation active state
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href').substring(1);
            if (href === current) {
                item.classList.add('active');
            }
        });
    });

    // Smooth scrolling
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

// Make stat-box clickable
function setupStatBoxes() {
    document.querySelectorAll('.stat-box').forEach(box => {
        box.addEventListener('click', function() {
            if (this.querySelector('a')) {
                window.location.href = this.querySelector('a').href;
            }
        });
    });
}

// Contact Form Handling
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const notificationArea = document.getElementById('notificationArea');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-loader"></span> Sending...';
        
        try {
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                throw new Error('Please fill all required fields');
            }

            // Email validation
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                throw new Error('Please enter a valid email address');
            }

            // Send email using EmailJS
            await emailjs.send("service_p4k8tjw", "template_us9jypu", formData);
            
            // Show success message
            showNotification('success', 'Message sent successfully! I\'ll get back to you soon.');
            
            // Reset form
            contactForm.reset();
        } catch (error) {
            console.error('Error:', error);
            showNotification('error', error.message || 'There was an error sending your message. Please try again.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });

    function showNotification(type, message) {
        // Clear previous notifications
        notificationArea.innerHTML = '';
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        // Add icon based on type
        const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle';
        notification.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
        
        // Add to DOM
        notificationArea.appendChild(notification);
        
        // Show notification
        notification.classList.add('show');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupStatBoxes();
    setupContactForm();
});