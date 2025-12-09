// navbar.js
class CustomNavbar extends HTMLElement {
  connectedCallback() {
    // Insert the navbar markup directly into the light DOM so global Tailwind / CSS applies
    this.innerHTML = `
        <nav class="bg-[#0f172a] shadow">
        <div class="container mx-auto px-4 py-8 flex items-center justify-between">
          <a class="text-4xl font-semibold" href="index.html">Nishant Dave</a>

          <!-- Desktop links -->
          <div class="hidden md:flex gap-6 items-center">
            <a class="nav-link text-2xl" href="index.html">Home</a>
            <a class="nav-link text-2xl" href="about.html">About</a>
            <a class="nav-link text-2xl" href="blog.html">Blog</a>
            <a class="nav-link text-2xl" href="contact.html">Contact</a>
          </div>

          <!-- Mobile menu button -->
          <button id="mobile-menu-button" class="md:hidden p-2 rounded focus:outline-none" aria-label="Toggle menu">
            <!-- feather icons: keep both, toggle 'hidden' class to switch -->
            <i data-feather="menu" class="icon-menu"></i>
            <i data-feather="x" class="icon-close hidden"></i>
          </button>
        </div>

        <!-- Mobile menu (hidden by default) -->
        <div id="mobile-menu" class="hidden md:hidden px-4 pb-4">
          <a class="nav-link-mobile block py-2" href="index.html">Home</a>
          <a class="nav-link-mobile block py-2" href="about.html">About</a>
          <a class="nav-link-mobile block py-2" href="blog.html">Blog</a>
          <a class="nav-link-mobile block py-2" href="contact.html">Contact</a>
        </div>
      </nav>
    `;

    // Query elements in the light DOM (this.querySelector)
    const menuButton = this.querySelector('#mobile-menu-button');
    const mobileMenu = this.querySelector('#mobile-menu');
    const iconMenu = this.querySelector('.icon-menu');
    const iconClose = this.querySelector('.icon-close');
    const navLinksMobile = this.querySelectorAll('.nav-link-mobile');

    // Toggle function
    const toggleMobile = () => {
      if (!mobileMenu) return;
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        iconMenu?.classList.add('hidden');
        iconClose?.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        iconMenu?.classList.remove('hidden');
        iconClose?.classList.add('hidden');
      }

      // re-run feather to ensure icons are rendered (safe if feather is loaded)
      if (window.feather && typeof window.feather.replace === 'function') {
        window.feather.replace();
      }
    };

    // Click handler for button
    menuButton?.addEventListener('click', toggleMobile);

    // When a mobile nav link is clicked, close the menu
    navLinksMobile.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu?.classList.add('hidden');
        iconMenu?.classList.remove('hidden');
        iconClose?.classList.add('hidden');
      });
    });

    // Ensure feather icons are rendered right away (if feather lib is loaded)
    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);







// class CustomNavbar extends HTMLElement {
//     connectedCallback() {
//         this.attachShadow({ mode: 'open' });
//         this.shadowRoot.innerHTML = `
//             <style>
//                 nav {
//                     background-color: rgba(15, 23, 42, 0.98);
//                     backdrop-filter: blur(16px);
//                     -webkit-backdrop-filter: blur(16px);
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     z-index: 100;
//                     border-bottom: 1px solid rgba(56, 189, 248, 0.1);
//                     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//                 }
//                 .nav-link {
//                     position: relative;
//                     padding: 0.5rem 1rem;
//                     border-radius: 0.375rem;
//                     transition: all 0.2s ease;
//                     font-weight: 500;
//                 }
//                 .nav-link::before {
//                     content: '';
//                     position: absolute;
//                     width: 0;
//                     height: 100%;
//                     left: 0;
//                     top: 0;
//                     background: linear-gradient(to right, rgba(56, 189, 248, 0.1), transparent);
//                     border-radius: 0.375rem;
//                     transition: width 0.3s ease;
//                 }
//                 .nav-link:hover::before {
//                     width: 100%;
//                 }
//                 .nav-link:hover {
//                     color: white;
//                     transform: none;
//                 }
//                 .nav-link.active {
//                     color: white;
//                     background: linear-gradient(to right, rgba(56, 189, 248, 0.2), transparent);
//                 }
//                 .nav-link.active::after {
//                     content: '';
//                     position: absolute;
//                     left: 0;
//                     right: 0;
//                     bottom: -8px;
//                     height: 2px;
//                     background: #38bdf8;
//                     border-radius: 2px;
//                 }
// .mobile-menu {
//                     transition: all 0.3s ease;
//                 }
//             </style>
//             <nav class="fixed w-full z-50 border-b border-gray-800">
//                 <div class="container mx-auto px-4 py-4">
//                     <div class="flex justify-between items-center">
//                         <a href="index.html" class="text-2xl font-bold text-white">
//                             <span class="text-accent">Code</span><span class="font-extrabold">Sage</span>
// </a>
                        
//                         <div class="hidden md:flex items-center gap-8">
//                         <a href="/" class="nav-link text-gray-300 hover:text-white" data-path="/">Home</a>
//                         <a href="/projects.html" class="nav-link text-gray-300 hover:text-white" data-path="/projects.html">Projects</a>
//                         <a href="/blog.html" class="nav-link text-gray-300 hover:text-white" data-path="/blog.html">Blog</a>
//                         <a href="/contact.html" class="nav-link text-gray-300 hover:text-white" data-path="/contact.html">Contact</a>
//                         <a href="/about.html" class="nav-link text-gray-300 hover:text-white" data-path="/about.html">About</a>
// </div>
//                         <button id="mobile-menu-button" class="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-accent/10 transition">
//                             <i data-feather="menu" class="w-6 h-6"></i>
//                         </button>
// </div>
//                     <!-- Mobile Menu -->
//                     <div id="mobile-menu" class="mobile-menu hidden md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
//                         <div class="flex flex-col gap-2">
//                             <a href="/" class="nav-link-mobile text-gray-300 hover:text-white px-4 py-3 rounded-lg hover:bg-accent/10 transition font-medium flex items-center gap-3" data-path="/">
//                                 <i data-feather="home" class="w-5 h-5"></i> Home
//                             </a>
//                             <a href="/projects.html" class="nav-link-mobile text-gray-300 hover:text-white px-4 py-3 rounded-lg hover:bg-accent/10 transition font-medium flex items-center gap-3" data-path="/projects.html">
//                                 <i data-feather="folder" class="w-5 h-5"></i> Projects
//                             </a>
//                             <a href="/blog.html" class="nav-link-mobile text-gray-300 hover:text-white px-4 py-3 rounded-lg hover:bg-accent/10 transition font-medium flex items-center gap-3" data-path="/blog.html">
//                                 <i data-feather="edit" class="w-5 h-5"></i> Blog
//                             </a>
//                             <a href="/contact.html" class="nav-link-mobile text-gray-300 hover:text-white px-4 py-3 rounded-lg hover:bg-accent/10 transition font-medium flex items-center gap-3" data-path="/contact.html">
//                                 <i data-feather="mail" class="w-5 h-5"></i> Contact
//                             </a>
//                             <a href="/about.html" class="nav-link-mobile text-gray-300 hover:text-white px-4 py-3 rounded-lg hover:bg-accent/10 transition font-medium flex items-center gap-3" data-path="/about.html">
//                                 <i data-feather="user" class="w-5 h-5"></i> About
//                             </a>
//                         </div>
//                     </div>
// </div>
//             </nav>
//         `;
//         // Add mobile menu toggle functionality with animation
//         const menuButton = this.shadowRoot.getElementById('mobile-menu-button');
//         const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
//         const navLinks = this.shadowRoot.querySelectorAll('.nav-link-mobile');

//         menuButton.addEventListener('click', () => {
//             const isHidden = mobileMenu.classList.contains('hidden');
            
//             if (isHidden) {
//                 // Open menu
//                 mobileMenu.classList.remove('hidden');
//                 mobileMenu.style.opacity = '0';
//                 mobileMenu.style.transform = 'translateY(-10px)';
                
//                 menuButton.innerHTML = '<i data-feather="x"></i>';
                
//                 // Animate in
//                 setTimeout(() => {
//                     mobileMenu.style.opacity = '1';
//                     mobileMenu.style.transform = 'translateY(0)';
//                     mobileMenu.style.transition = 'all 0.3s ease';
//                 }, 10);
                
//                 // Animate links
//                 navLinks.forEach((link, index) => {
//                     link.style.opacity = '0';
//                     link.style.transform = 'translateX(-10px)';
//                     setTimeout(() => {
//                         link.style.opacity = '1';
//                         link.style.transform = 'translateX(0)';
//                         link.style.transition = `all 0.3s ease ${index * 0.05}s`;
//                     }, 10);
//                 });
//             } else {
//                 // Close menu
//                 mobileMenu.style.opacity = '0';
//                 mobileMenu.style.transform = 'translateY(-10px)';
//                 mobileMenu.style.transition = 'all 0.2s ease';
                
//                 menuButton.innerHTML = '<i data-feather="menu"></i>';
                
//                 // Hide after animation
//                 setTimeout(() => {
//                     mobileMenu.classList.add('hidden');
//                 }, 200);
//             }
            
//             feather.replace();
//         });

//         // Highlight active mobile link
//         const currentPath = window.location.pathname;
//         navLinks.forEach(link => {
//             const linkPath = link.getAttribute('data-path');
//             if ((currentPath === '/' && linkPath === '/') || 
//                 (currentPath !== '/' && currentPath.includes(linkPath))) {
//                 link.classList.add('active');
//                 if (linkPath === '/') {
//                     link.classList.remove('active');
//                     if (currentPath === '/') {
//                         link.classList.add('active');
//                     }
//                 }
//             }
//         });
// }
// }
// customElements.define('custom-navbar', CustomNavbar);