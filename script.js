// Image Slider Modal Functionality (Global scope)
let currentSlide = 0;
let currentProject = '';

// Project image data
const projectImages = {
    project1: {
        title: 'BADNAVA E-Commerce Platform',
        images: [
            'projects/badnava/1.png?w=800&h=600&fit=crop',
            'projects/badnava/2.png?w=800&h=600&fit=crop',
            'projects/badnava/3.png?w=800&h=600&fit=crop',
            'projects/badnava/4.png?w=800&h=600&fit=crop',
            'projects/badnava/5.png?w=800&h=600&fit=crop',
            'projects/badnava/6.png?w=800&h=600&fit=crop',
        ]
    },
    project2: {
        title: 'vBoomCloud SaaS Provider',
        images: [
            'projects/vboom/1.png?w=800&h=600&fit=crop',
            'projects/vboom/2.png?w=800&h=600&fit=crop',
            'projects/vboom/3.png?w=800&h=600&fit=crop',
            'projects/vboom/4.png?w=800&h=600&fit=crop',
            'projects/vboom/5.png?w=800&h=600&fit=crop',
            'projects/vboom/6.png?w=800&h=600&fit=crop',
            'projects/vboom/7.png?w=800&h=600&fit=crop',
            'projects/vboom/8.png?w=800&h=600&fit=crop',
            'projects/vboom/9.png?w=800&h=600&fit=crop',
            'projects/vboom/10.png?w=800&h=600&fit=crop',
            'projects/vboom/11.png?w=800&h=600&fit=crop',
            'projects/vboom/12.png?w=800&h=600&fit=crop',
            'projects/vboom/13.png?w=800&h=600&fit=crop',
            'projects/vboom/14.png?w=800&h=600&fit=crop',
        ]
    },
    project3: {
        title: 'Memeargram',
        images: [
            'projects/memargram/0.png?w=800&h=600&fit=crop',
            'projects/memargram/light/1.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/1.png?w=800&h=600&fit=crop',
            'projects/memargram/light/2.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/2.png?w=800&h=600&fit=crop',
            'projects/memargram/light/3.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/3.png?w=800&h=600&fit=crop',
            'projects/memargram/light/4.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/4.png?w=800&h=600&fit=crop',
            'projects/memargram/light/5.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/5.png?w=800&h=600&fit=crop',
            'projects/memargram/light/6.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/6.png?w=800&h=600&fit=crop',
            'projects/memargram/light/7.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/7.png?w=800&h=600&fit=crop',
            'projects/memargram/light/8.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/8.png?w=800&h=600&fit=crop',
            'projects/memargram/light/9.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/9.png?w=800&h=600&fit=crop',
            'projects/memargram/light/10.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/10.png?w=800&h=600&fit=crop',
            'projects/memargram/light/11.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/11.png?w=800&h=600&fit=crop',
            'projects/memargram/light/12.png?w=800&h=600&fit=crop',
            'projects/memargram/dark/12.png?w=800&h=600&fit=crop',
        ]
    },
    project4: {
        title: 'Honeybar',
        images: [
            'projects/honeybar/1.png?w=800&h=600&fit=crop',
            'projects/honeybar/2.png?w=800&h=600&fit=crop',
            'projects/honeybar/3.png?w=800&h=600&fit=crop',
            'projects/honeybar/4.png?w=800&h=600&fit=crop',
            'projects/honeybar/5.png?w=800&h=600&fit=crop',
            'projects/honeybar/6.png?w=800&h=600&fit=crop',
            'projects/honeybar/7.png?w=800&h=600&fit=crop',
            'projects/honeybar/8.png?w=800&h=600&fit=crop',
            'projects/honeybar/9.png?w=800&h=600&fit=crop',
            'projects/honeybar/10.png?w=800&h=600&fit=crop',
            'projects/honeybar/11.png?w=800&h=600&fit=crop',
            'projects/honeybar/12.png?w=800&h=600&fit=crop',
            'projects/honeybar/13.png?w=800&h=600&fit=crop',
            'projects/honeybar/14.png?w=800&h=600&fit=crop',
            'projects/honeybar/15.png?w=800&h=600&fit=crop',
            'projects/honeybar/16.png?w=800&h=600&fit=crop',
            'projects/honeybar/17.png?w=800&h=600&fit=crop',
        ]
    },
    project5: {
        title: 'Jabalad Accommodation',
        images: [
            'projects/jabalad/1.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/2.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/3.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/4.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/5.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/6.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/7.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/8.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/9.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/10.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/11.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/12.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/13.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/14.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/15.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/16.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/17.jpg?w=800&h=600&fit=crop',
            'projects/jabalad/18.jpg?w=800&h=600&fit=crop',
        ]
    },
    project6: {
        title: 'Memeargram Mobile Edition',
        images: [
            'projects/memargram-mobile/1.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/2.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/3.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/4.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/5.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/6.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/7.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/8.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/9.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/10.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/11.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/12.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/13.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/14.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/15.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/16.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/17.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/18.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/19.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/20.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/21.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/22.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/23.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/24.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/25.jpg?w=800&h=600&fit=crop',
            'projects/memargram-mobile/26.jpg?w=800&h=600&fit=crop',
        ]
    }
};

function openImageSlider(projectId) {
    currentProject = projectId;
    currentSlide = 0;
    
    const modal = document.getElementById('imageSliderModal');
    const title = document.getElementById('sliderTitle');
    const slideTrack = document.getElementById('slideTrack');
    const indicators = document.getElementById('sliderIndicators');
    
    const project = projectImages[projectId];
    
    // Set title
    title.textContent = project.title;
    
    // Clear previous slides and indicators
    slideTrack.innerHTML = '';
    indicators.innerHTML = '';
    
    // Create slides
    project.images.forEach((imageUrl, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${imageUrl}" alt="${project.title} - Image ${index + 1}" loading="lazy">`;
        slideTrack.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.onclick = () => goToSlide(index);
        indicators.appendChild(indicator);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update slide position
    updateSlidePosition();
}

function closeImageSlider() {
    const modal = document.getElementById('imageSliderModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function nextSlide() {
    const project = projectImages[currentProject];
    currentSlide = (currentSlide + 1) % project.images.length;
    updateSlidePosition();
}

function previousSlide() {
    const project = projectImages[currentProject];
    currentSlide = currentSlide === 0 ? project.images.length - 1 : currentSlide - 1;
    updateSlidePosition();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slideTrack = document.getElementById('slideTrack');
    const indicators = document.querySelectorAll('.indicator');
    
    // Update slide position
    slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Read More Toggle Function
function toggleDescription(event, button) {
    // Prevent event bubbling to avoid triggering the image slider
    event.stopPropagation();
    
    const description = button.parentElement;
    const shortText = description.querySelector('.description-short');
    const fullText = description.querySelector('.description-full');
    const icon = button.querySelector('i');
    
    // Get or create text span
    let textSpan = button.querySelector('.btn-text');
    if (!textSpan) {
        // If button doesn't have a text span, create one
        const currentText = button.textContent.trim();
        button.innerHTML = `<i class="${icon.className}"></i> <span class="btn-text">${currentText}</span>`;
        textSpan = button.querySelector('.btn-text');
    }
    
    if (!fullText.classList.contains('active')) {
        // Show full text with smooth transition
        shortText.classList.add('inactive');
        fullText.classList.add('active');
        button.classList.add('expanded');
        
        // Change icon direction and text separately to maintain smooth rotation
        icon.className = 'fas fa-chevron-up';
        textSpan.textContent = 'Read Less';
    } else {
        // Show short text with smooth transition
        shortText.classList.remove('inactive');
        fullText.classList.remove('active');
        button.classList.remove('expanded');
        
        // Change icon direction and text separately to maintain smooth rotation
        icon.className = 'fas fa-chevron-down';
        textSpan.textContent = 'Read More';
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation Elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navMenuOverlay = document.getElementById('nav-menu-overlay');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Clean Mobile Menu Toggle
    function toggleMobileMenu() {
        const isActive = hamburger.classList.contains('active');
        
        if (!isActive) {
            // Opening menu - prevent any overflow during animation
            document.body.style.overflowX = 'hidden';
            document.body.style.overflowY = 'hidden';
            hamburger.classList.add('active');
            navMenu.classList.add('active');
            navMenuOverlay.classList.add('active');
        } else {
            // Closing menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navMenuOverlay.classList.remove('active');
            document.body.style.overflowX = '';
            document.body.style.overflowY = '';
        }
    }
    
    // Hamburger click handler
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking on overlay
    navMenuOverlay.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on a link (with enhanced animation)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Close menu on window resize if open (prevents issues on orientation change)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Enhanced menu item hover effects (for desktop)
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Add ripple effect on hover for desktop
            if (window.innerWidth > 768) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Navbar Scroll Effect
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active Navigation Link Highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Call once on load
    
    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add scroll animation classes and observe elements
    const animatedElements = document.querySelectorAll('.section-header, .about-card, .stat-card, .skill-category, .certification-card, .project-card, .timeline-item, .contact-item');
    
    animatedElements.forEach((element, index) => {
        // Add random animation class for variety
        const animations = ['fade-in-up', 'fade-in-left', 'fade-in-right'];
        const randomAnimation = animations[index % animations.length];
        element.classList.add(randomAnimation);
        observer.observe(element);
    });
    
    // Counter Animation for Stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 50; // Adjust speed here
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 40); // Adjust timing here
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
    
    // Trigger counter animation when about section is visible
    const aboutSection = document.getElementById('about');
    const aboutObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, { threshold: 0.5 });
    
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
    
    // Skill Items Hover Effect - Moved to CSS for better performance
    // Removed JavaScript hover effects to prevent lag and conflicts with CSS transitions
    
    // Project Cards Parallax Effect - Removed to prevent overlap with skills section
    // const projectCards = document.querySelectorAll('.project-card');
    
    // window.addEventListener('scroll', function() {
    //     const scrolled = window.pageYOffset;
    //     
    //     projectCards.forEach((card, index) => {
    //         const rect = card.getBoundingClientRect();
    //         const speed = 0.5;
    //         
    //         if (rect.top < window.innerHeight && rect.bottom > 0) {
    //             const yPos = -(scrolled * speed);
    //             card.style.transform = `translateY(${yPos}px)`;
    //         }
    //     });
    // });
    
    // Contact Form Handling - Removed since form was removed from HTML
    // Contact functionality is now handled through direct email/phone contact
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
            word-wrap: break-word;
        `;
        
        // Set background color based on type
        switch (type) {
            case 'success':
                notification.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
                break;
            case 'error':
                notification.style.background = 'linear-gradient(45deg, #f44336, #da190b)';
                break;
            default:
                notification.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
        }
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
    
    // Typing Effect for Hero Title
    function typeWriter() {
        const nameElement = document.querySelector('.name');
        if (!nameElement) return;
        
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        nameElement.style.borderRight = '2px solid #667eea';
        
        let i = 0;
        function type() {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(type, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    nameElement.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typing after a delay
        setTimeout(type, 1000);
    }
    
    // Start typing effect
    typeWriter();
    
    // Particle Effect for Background (Optional Enhancement)
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(102, 126, 234, 0.3);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: twinkle ${Math.random() * 4 + 2}s infinite;
            `;
            particlesContainer.appendChild(particle);
        }
        
        document.body.appendChild(particlesContainer);
    }
    
    // Add twinkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
    `;
    document.head.appendChild(style);
    
    // Create particles
    createParticles();
    
    // Smooth scroll for hero buttons (non-navigation anchor links)
    document.querySelectorAll('.hero-buttons a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Cursor Trail Effect (Optional)
    let mouseX = 0;
    let mouseY = 0;
    let trail = [];
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function createTrailDot() {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(102, 126, 234, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
        `;
        
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
        
        document.body.appendChild(dot);
        
        setTimeout(() => {
            dot.style.opacity = '0';
            dot.style.transform = 'scale(0)';
            setTimeout(() => {
                if (dot.parentNode) {
                    dot.remove();
                }
            }, 100);
        }, 200);
    }
    
    // Create cursor trail on mouse move (throttled)
    let trailTimer;
    document.addEventListener('mousemove', function() {
        if (!trailTimer) {
            trailTimer = setTimeout(() => {
                createTrailDot();
                trailTimer = null;
            }, 50);
        }
    });
    
    // Performance optimization: Throttle scroll events
    let ticking = false;
    
    function updateOnScroll() {
        updateActiveNavLink();
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // Image Slider Modal Event Listeners
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('imageSliderModal');
        if (e.target === modal) {
            closeImageSlider();
        }
    });
    
    // Keyboard navigation for slider
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('imageSliderModal');
        if (modal && modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeImageSlider();
            } else if (e.key === 'ArrowLeft') {
                previousSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
    });
    
    // Prevent context menu on project cards to avoid conflicts
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu if open using the fancy toggle function
            if (hamburger.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
        
        // Arrow key navigation through sections
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const sections = Array.from(document.querySelectorAll('section'));
            const currentSection = sections.find(section => {
                const rect = section.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom > 100;
            });
            
            if (currentSection) {
                const currentIndex = sections.indexOf(currentSection);
                let targetIndex;
                
                if (e.key === 'ArrowDown') {
                    targetIndex = Math.min(currentIndex + 1, sections.length - 1);
                } else {
                    targetIndex = Math.max(currentIndex - 1, 0);
                }
                
                const targetSection = sections[targetIndex];
                const headerHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
    
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove any existing ripples first
            const existingRipples = this.querySelectorAll('.btn-ripple');
            existingRipples.forEach(r => r.remove());
            
            const ripple = document.createElement('span');
            ripple.className = 'btn-ripple';
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.4s ease-out forwards;
                pointer-events: none;
                z-index: 2;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 400);
        });
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            from {
                transform: scale(0);
                opacity: 0.8;
            }
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }
    
    // Toggle theme function with fancy animation
    function toggleTheme() {
        const isLightMode = body.classList.contains('light-mode');
        
        // Add a scaling animation to the toggle button
        themeToggle.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            if (isLightMode) {
                body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            }
            
            // Reset button scale
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Add event listener for theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Keyboard shortcut for theme toggle (Ctrl/Cmd + Shift + T)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            toggleTheme();
        }
    });
    
    // Add smooth transition class after page load to prevent flash
    window.addEventListener('load', function() {
        document.body.style.transition = 'background 0.6s cubic-bezier(0.4, 0, 0.2, 1), color 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    console.log('Portfolio website loaded successfully! ✨');
}); 