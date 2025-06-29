// GSAP Animations
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate sections on scroll
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
        });
        // Make stat-box clickable
document.querySelectorAll('.stat-box').forEach(box => {
    box.addEventListener('click', function() {
        if (this.querySelector('a')) {
            window.location.href = this.querySelector('a').href;
        }
    });
});
        // Animate home elements
        gsap.from('.featured-text-card', {
            duration: 1,
            y: -30,
            opacity: 0,
            delay: 0.3
        });
        
        gsap.from('.featured-name', {
            duration: 1,
            y: -30,
            opacity: 0,
            delay: 0.5
        });
        
        gsap.from('.typedText', {
            duration: 1,
            y: -30,
            opacity: 0,
            delay: 0.7
        });
        
        gsap.from('.featured-text-info', {
            duration: 1,
            y: -30,
            opacity: 0,
            delay: 0.9
        });
        
        gsap.from('.featured-text-btn', {
            duration: 1,
            y: -30,
            opacity: 0,
            delay: 1.1
        });
        
        gsap.from('.social-icons', {
            duration: 1,
            y: -30,
            opacity: 0,
            delay: 1.3
        });
        
        gsap.from('.profile-image-container', {
            duration: 1,
            x: 30,
            opacity: 0,
            delay: 0.8
        });
        
        // Typing animation
        const typedTextSpan = document.querySelector('.typedText');
        const textArray = ["Frontend Developer", "UI/UX Designer", "Web Developer"];
        const typingDelay = 150;
        const erasingDelay = 100;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;
        
        function type() {
            if (!typedTextSpan) return;
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }
        
        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].slice(0, --charIndex);
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(type, newTextDelay + 250);
        });
        
        // Project animations
        const projectItems = document.querySelectorAll('.project-item');
        
        projectItems.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 85%",
                onEnter: () => {
                    item.classList.add("visible");
                },
                once: true
            });
        });
        
        // Work experience animations
        const workCards = document.querySelectorAll('.work-card');
        
        workCards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top 90%",
                onEnter: () => {
                    card.classList.add("visible");
                },
                once: true
            });
        });
        
        // Navigation active state
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
        
        // Smooth scrolling for navigation
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


        // Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const notificationArea = document.getElementById('notificationArea');
    const submitBtn = document.getElementById('submitBtn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
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

                // Simulate successful submission (no backend)
                showNotification('success', 'Message sent successfully!');
                
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
    }

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
});