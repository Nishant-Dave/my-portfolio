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
