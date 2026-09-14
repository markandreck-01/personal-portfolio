import '@fortawesome/fontawesome-free/css/all.min.css';

console.log('Portfolio loaded!');


// ====================================================================================
//  Access CV (View or Download) Modal Interaction
// ====================================================================================
const modalTrigger = document.getElementById('hero-cv-download-trigger');
const navCVTrigger = document.getElementById('nav-cv-download-trigger');
const cvModal = document.getElementById('cv-access-modal');
const closeCVModalBtn = document.getElementById('close-cv-modal-btn');
const cancelCVModalBtn = document.getElementById('cancel-cv-modal-btn');
const cvAccessLinks = document.querySelectorAll('.cv-access-link');

if (navCVTrigger || modalTrigger && cvModal) {
    modalTrigger.addEventListener('click', () => {
        cvModal.classList.remove('hidden');
        cvModal.classList.add('flex');
    });

    if (navCVTrigger) {
        navCVTrigger.addEventListener('click', () => {
            cvModal.classList.remove('hidden');
            cvModal.classList.add('flex');
            console.log("download CV from navbar");
        });
    };

    const closeModal = () => {
        cvModal.classList.add('hidden');
        cvModal.classList.remove('flex');
    };

    if (closeCVModalBtn) closeCVModalBtn.addEventListener('click', closeModal);
    if (cancelCVModalBtn) cancelCVModalBtn.addEventListener('click', closeModal);
    // Close menu when a navigation link is clicked
    cvAccessLinks.forEach(link => {
        link.addEventListener('click', closeModal());
    });

    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) closeModal();
    });
}


// ====================================================================================
//  Launch side nav link menu for mobile screens
// ====================================================================================
const mobileMenuButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuButton && mobileMenu) {

    mobileMenuButton.addEventListener('click', () => {

        const isOpen = !mobileMenu.classList.contains('hidden');

        if (isOpen) {
            // Close menu
            mobileMenu.classList.add('hidden');
            mobileMenuIcon.textContent = 'menu';
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenuButton.setAttribute('aria-label', 'Open navigation menu');

        } else {
            // Open menu
            mobileMenu.classList.remove('hidden');
            mobileMenuIcon.textContent = 'close';
            mobileMenuButton.setAttribute('aria-expanded', 'true');
            mobileMenuButton.setAttribute('aria-label', 'Close navigation menu');
        }
    });

    // Close menu when a navigation link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuIcon.textContent = 'menu';
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenuButton.setAttribute('aria-label', 'Open navigation menu');
        });
    });
}



// 
// ====================================================================================
//  Active navigation for desktop + mobile  --> update highlighted/selected navbar link based on the one in view
// ====================================================================================

const desktopNav = document.querySelector("nav[data-active-classes]");
const mobileNavMenu = document.querySelector("#mobile-menu");
const mobileNav = mobileNavMenu?.querySelector("nav");

const desktopLinks = desktopNav
    ? [...desktopNav.querySelectorAll("a[data-path]")]
    : [];

const mobileLinks = mobileNav
    ? [...mobileNav.querySelectorAll("a[data-path]")]
    : [];

// Combine both navigation menus
const allNavLinks = [...desktopLinks, ...mobileLinks];

// Find the sections
const sections = desktopLinks
    .map(link => {
        const href = link.getAttribute("href");

        if (!href || !href.startsWith("#") || href === "#") {
            return null;
        }

        const element = document.querySelector(href);

        if (!element) {
            console.warn(`Navigation target not found: ${href}`);
            return null;
        }

        return {
            path: link.dataset.path,
            element
        };
    })
    .filter(Boolean);

// Set active navigation link
function setActiveNav(path) {
    allNavLinks.forEach(link => {
        const isActive = link.dataset.path === path;

        // Remove/add active text colors
        link.classList.toggle("text-primary", isActive);
        link.classList.toggle("font-medium", isActive);

        link.classList.toggle(
            "text-on-surface-variant",
            !isActive
        );

        // Accessibility
        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

// Observe sections while scrolling
const observer = new IntersectionObserver(
    entries => {
        const visibleSections = entries
            .filter(entry => entry.isIntersecting)
            .sort(
                (a, b) =>
                    b.intersectionRatio -
                    a.intersectionRatio
            );

        if (visibleSections.length > 0) {
            const section = visibleSections[0].target;
            setActiveNav(section.dataset.navPath);
        }
    },
    {
        root: null,
        // Active zone near the top/middle of viewport
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    }
);

// Connect sections to navigation
sections.forEach(({ path, element }) => {
    element.dataset.navPath = path;
    observer.observe(element);
});

// Handle clicks on BOTH navbars
allNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        const path = link.dataset.path;        
        setActiveNav(path);     // Immediately highlight the clicked link
    });
});
setActiveNav("overview");       // Initial active state



// ====================================================================================
//  typewriting cursor effect of the "bridging silicon and software" in hero section
// ====================================================================================
document.addEventListener("DOMContentLoaded", () => {
    const typewriterElement = document.getElementById("typewriter-text");
    if (!typewriterElement) return;

    const titles = [
        "Electronics & Computer Engineer.",
        "Full-Stack Developer.",
        "AI Researcher."
    ];

    const typingSpeed = 90;
    const pauseAfterTyping = 2500;
    const pauseAfterClearing = 600;
    const deletingSpeed = 45;

    let titleIndex = 0;
    let charIndex = 0;

    function typeText() {
        const currentTitle = titles[titleIndex];

        if (charIndex < currentTitle.length) {
            typewriterElement.textContent += currentTitle.charAt(charIndex);
            charIndex++;

            setTimeout(typeText, typingSpeed);
        } else {
            // Hold the completed title
            setTimeout(deleteText, pauseAfterTyping);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);
            charIndex--;

            setTimeout(deleteText, deletingSpeed);
        } else {
            // Move to the next title
            titleIndex = (titleIndex + 1) % titles.length;

            // Small pause before typing next title
            setTimeout(typeText, pauseAfterClearing);
        }
    }
    typeText();
});



// ====================================================================================
//  Project Gallery filter pill interactions
// ====================================================================================
const filterButtons = document.querySelectorAll('#project-filters .filter-pill');
const projectCards = document.querySelectorAll('#projects-grid .project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active styling
        filterButtons.forEach(btn => {
            btn.classList.remove('bg-primary-container', 'text-on-primary-container');
            btn.classList.add('text-on-surface-variant');
        });
        button.classList.add('bg-primary-container', 'text-on-primary-container');
        button.classList.remove('text-on-surface-variant');

        const filter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'flex';
            } else {
                const categories = card.getAttribute('data-category') || '';
                if (categories.includes(filter)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});


// ====================================================================================
//  Copy Email to Clipboard Microinteraction (Contact Section)
// ====================================================================================
const copyBtn = document.getElementById('copy-email-btn');
const emailText = document.getElementById('email-text');
const copyLabel = document.getElementById('copy-label');
const copyIcon = document.getElementById('copy-icon');

if (copyBtn && emailText) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(emailText.innerText.trim()).then(() => {
            copyLabel.innerText = 'Copied!';
            copyIcon.innerText = 'check';
            copyBtn.classList.add('text-secondary');
            setTimeout(() => {
                copyLabel.innerText = 'Copy';
                copyIcon.innerText = 'content_copy';
                copyBtn.classList.remove('text-secondary');
            }, 2000);
        });
    });
}


// ====================================================================================
//  send inquiry email through contact form
// ====================================================================================
// const inquiryFormSendBtn = document.getElementById('inquiry-form-send-btn');

// inquiryFormSendBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     const inquiryFormName = document.getElementById('inquiry-form-name').value;
//     const inquiryFormEmail = document.getElementById('inquiry-form-email').value;
//     const inquiryFormSubject = document.getElementById('inquiry-form-subject').value;
//     const inquiryFormMessage = document.getElementById('inquiry-form-message').value;

//     const inquiryFormSendBtnLabel = document.getElementById('send-label');
//     const inquiryFormSendBtnIcon = document.getElementById('send-icon');

//     // console.log(inquiryFormName);
//     // console.log(inquiryFormEmail);
//     // console.log(inquiryFormSubject);
//     // console.log(inquiryFormMessage);
//     if (!inquiryFormName || !inquiryFormEmail || !inquiryFormSubject || !inquiryFormMessage) {
//         if (!inquiryFormName) {
//             document.getElementById('inquiry-form-name').classList.remove('bg-surface-container-lowest');
//             document.getElementById('inquiry-form-name').classList.add('bg-error');
//         }
//         if (!inquiryFormEmail) {
//             document.getElementById('inquiry-form-email').classList.remove('bg-surface-container-lowest');
//             document.getElementById('inquiry-form-email').classList.add('bg-error');
//         }
//         if (!inquiryFormSubject) {
//             document.getElementById('inquiry-form-subject').classList.remove('bg-surface-container-lowest');
//             document.getElementById('inquiry-form-subject').classList.add('bg-error');
//         }
//         if (!inquiryFormMessage) {
//             document.getElementById('inquiry-form-message').classList.remove('bg-surface-container-lowest');
//             document.getElementById('inquiry-form-message').classList.add('bg-error');
//         }

//         console.log("Fill all fields");
//         inquiryFormSendBtn.classList.remove('border-outline-variant');
//         inquiryFormSendBtn.classList.add('border-error');

//         inquiryFormSendBtnLabel.innerText = 'Please fill all fields.';
//         inquiryFormSendBtnIcon.innerText = 'warning';
//         inquiryFormSendBtnLabel.classList.add('text-error');
//         inquiryFormSendBtnIcon.classList.add('text-error');

//         setTimeout(() => {
//             document.getElementById('inquiry-form-name').classList.remove('bg-error');
//             document.getElementById('inquiry-form-email').classList.remove('bg-error');
//             document.getElementById('inquiry-form-subject').classList.remove('bg-error');
//             document.getElementById('inquiry-form-message').classList.remove('bg-error');

//             document.getElementById('inquiry-form-name').classList.add('bg-surface-container-lowest');
//             document.getElementById('inquiry-form-email').classList.add('bg-surface-container-lowest');
//             document.getElementById('inquiry-form-subject').classList.add('bg-surface-container-lowest');
//             document.getElementById('inquiry-form-message').classList.add('bg-surface-container-lowest');


//             inquiryFormSendBtnLabel.innerText = 'Send Inquiry';
//             inquiryFormSendBtnIcon.innerText = 'send';
//             inquiryFormSendBtnLabel.classList.remove('text-error');
//             inquiryFormSendBtnIcon.classList.remove('text-error');

//             inquiryFormSendBtn.classList.remove('border-error');
//             inquiryFormSendBtn.classList.add('border-outline-variant');
//         }, 2000);
//     }
//     else {
//         inquiryFormSendBtn.classList.remove('border-outline-variant');
//         inquiryFormSendBtn.classList.add('border-secondary');

//         inquiryFormSendBtnLabel.innerText = 'Inquiry Sent!';
//         inquiryFormSendBtnIcon.innerText = 'check';
//         inquiryFormSendBtnLabel.classList.add('text-secondary');
//         inquiryFormSendBtnIcon.classList.add('text-secondary');
//         setTimeout(() => {
//             inquiryFormSendBtnLabel.innerText = 'Send Inquiry';
//             inquiryFormSendBtnIcon.innerText = 'send';
//             inquiryFormSendBtnLabel.classList.remove('text-secondary');
//             inquiryFormSendBtnIcon.classList.remove('text-secondary');

//             inquiryFormSendBtn.classList.remove('border-secondary');
//             inquiryFormSendBtn.classList.add('border-outline-variant');
//         }, 2000);

//         document.getElementById('inquiry-form-name').value = "";
//         document.getElementById('inquiry-form-email').value = "";
//         document.getElementById('inquiry-form-subject').value = "";
//         document.getElementById('inquiry-form-message').value = "";
//     }
// });

const contactForm = document.getElementById('contact-form');
const sendButton = document.getElementById('inquiry-form-send-btn');
const sendLabel = document.getElementById('send-label');
const sendIcon = document.getElementById('send-icon');

const fields = {
    name: document.getElementById('inquiry-form-name'),
    email: document.getElementById('inquiry-form-email'),
    subject: document.getElementById('inquiry-form-subject'),
    message: document.getElementById('inquiry-form-message')
};
const defaultFieldClass = 'bg-surface-container-lowest';
const errorFieldClass = 'bg-error';
const defaultButtonBorder = 'border-outline-variant';

// Form Validation
function validateForm() {
    let isValid = true;
    Object.values(fields).forEach(field => {
        const isEmpty = !field.value.trim();

        field.classList.toggle(defaultFieldClass, !isEmpty);
        field.classList.toggle(errorFieldClass, isEmpty);

        if (isEmpty) {
            isValid = false;
        }
    });
    return isValid;
}

// "Send Inquiry" Form Submit Button state
function setButtonState(state) {
    // Reset state
    sendButton.classList.remove(
        'border-error',
        'border-secondary',
        defaultButtonBorder
    );

    sendLabel.classList.remove('text-error', 'text-secondary');
    sendIcon.classList.remove('text-error', 'text-secondary');

    switch (state) {
        case 'error':
            sendButton.classList.add('border-error');
            sendLabel.classList.add('text-error');
            sendIcon.classList.add('text-error');

            sendLabel.textContent = 'Please fill all fields.';
            sendIcon.textContent = 'warning';
            break;

        case 'sending':
            sendButton.classList.add('border-secondary');

            sendLabel.textContent = 'Sending...';
            sendIcon.textContent = 'hourglass_empty';
            break;

        case 'success':
            sendButton.classList.add('border-secondary');
            sendLabel.classList.add('text-secondary');
            sendIcon.classList.add('text-secondary');

            sendLabel.textContent = 'Inquiry Sent!';
            sendIcon.textContent = 'check';
            break;

        default:
            sendButton.classList.add(defaultButtonBorder);

            sendLabel.textContent = 'Send Inquiry';
            sendIcon.textContent = 'send';
    }
}

// Reset Form field styling
function resetFieldStyles() {
    Object.values(fields).forEach(field => {
        field.classList.remove(errorFieldClass);
        field.classList.add(defaultFieldClass);
    });
}

// Reset form
function resetForm() {
    contactForm.reset();
    resetFieldStyles();
}

// Form submission
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Validate
    if (!validateForm()) {
        setButtonState('error');

        setTimeout(() => {
            resetFieldStyles();
            setButtonState('default');
        }, 1500);

        return;
    }

    // Disable button while sending
    sendButton.disabled = true;
    setButtonState('sending');

    const formData = {
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        subject: fields.subject.value.trim(),
        message: fields.message.value.trim()
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || 'Failed to send inquiry.');
        }

        // Success
        setButtonState('success');
        resetForm();

        setTimeout(() => {
            setButtonState('default');
        }, 2000);

    } catch (error) {
        console.error('Contact form error:', error);

        setButtonState('error');

        sendLabel.textContent = 'Failed to send.';
        sendIcon.textContent = 'error';

        setTimeout(() => {
            setButtonState('default');
        }, 3000);

    } finally {
        sendButton.disabled = false;
    }
});
