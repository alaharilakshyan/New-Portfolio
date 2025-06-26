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
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex=0;
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
                contactForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    // Show loading state
                    submitBtn.disabled = true;
                    submitBtn.classList.add('sending');
                    submitBtn.textContent = 'Sending...';
                    
                    // Create notification element
                    const notification = document.createElement('div');
                    
                    try {
                        // Get form data
                        const formData = {
                            name: document.getElementById('name').value,
                            email: document.getElementById('email').value,
                            subject: document.getElementById('subject').value,
                            message: document.getElementById('message').value,
                            // This will be replaced with your actual email when deployed
                            to: 'lakshyanalahari69@gmail.com'
                        };
                        
                        // Determine environment
                        const isLocal = window.location.hostname === 'localhost' || 
                                        window.location.hostname === '127.0.0.1';
                        
                        let response;
                        
                        if (isLocal) {
                            // Local development - use EmailJS fallback
                            response = await sendWithEmailJS(formData);
                        } else {
                            // Production - use Vercel serverless function
                            response = await fetch('/api/send-email', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(formData)
                            });
                        }
                        
                        if (response.ok) {
                            // Success notification
                            notification.className = 'form-notification notification-success notification-show';
                            notification.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully! I\'ll get back to you soon.';
                            
                            // Reset form
                            contactForm.reset();
                        } else {
                            throw new Error('Failed to send message');
                        }
                    } catch (error) {
                        console.error('Error sending message:', error);
                        
                        // Error notification
                        notification.className = 'form-notification notification-error notification-show';
                        notification.innerHTML = '<i class="fas fa-exclamation-triangle"></i> There was an error sending your message. Please try again.';
                    } finally {
                        // Update UI
                        notificationArea.innerHTML = '';
                        notificationArea.appendChild(notification);
                        
                        // Reset button state
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('sending');
                        submitBtn.textContent = 'Send Message';
                        
                        // Auto-hide notification after 5 seconds
                        setTimeout(() => {
                            notification.classList.remove('notification-show');
                        }, 5000);
                    }
                });
            }
            
            // EmailJS fallback for local development
            async function sendWithEmailJS(formData) {
                // Initialize EmailJS (you'll need to sign up for a free account at https://www.emailjs.com/)
                // Replace these with your actual EmailJS details
                const serviceID = 'service_abc123'; // Your EmailJS service ID
                const templateID = 'template_xyz456'; // Your EmailJS template ID
                const userID = 'user_789def'; // Your EmailJS user ID
                
                // Load EmailJS SDK if not already loaded
                if (typeof emailjs === 'undefined') {
                    await new Promise((resolve) => {
                        const script = document.createElement('script');
                        script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
                        script.onload = resolve;
                        document.head.appendChild(script);
                    });
                    
                    // Initialize EmailJS
                    emailjs.init(userID);
                }
                
                // Send email using EmailJS
                return emailjs.send(serviceID, templateID, {
                    to_name: 'Lakshyan',
                    from_name: formData.name,
                    reply_to: formData.email,
                    subject: formData.subject,
                    message: formData.message
                });
            }
        });