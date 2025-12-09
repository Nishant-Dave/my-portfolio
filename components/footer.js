class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #0f172a;
                    width: 100%;
                    margin-top: auto;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
.social-icon {
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    transform: translateY(-3px);
                    color: #38bdf8;
                }
            </style>
            <footer class="border-t border-gray-800">
                <div class="container mx-auto px-4 py-8">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="mb-6 md:mb-0">
                            <a href="/" class="text-2xl font-bold text-white">
<span class="text-accent" style="color:white"> Nishant Dave </span>
                            </a>
                            <p class="text-gray-400 mt-2">Building digital solutions with Python.</p>
                        </div>
                        
                        <div class="flex flex-col items-center md:items-end">
                            <div class="flex gap-4 mb-4">
                                <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" class="social-icon text-gray-400 hover:text-accent">
                                    <i data-feather="github"></i>
                                </a>
                                <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" class="social-icon text-gray-400 hover:text-accent">
                                    <i data-feather="linkedin"></i>
                                </a>
                                <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" class="social-icon text-gray-400 hover:text-accent">
                                    <i data-feather="twitter"></i>
                                </a>
                                <a href="mailto:hello@nishant.dev" class="social-icon text-gray-400 hover:text-accent">
                                    <i data-feather="mail"></i>
                                </a>
</div>
                            <p class="text-gray-500 text-sm">© ${new Date().getFullYear()} Nishant. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);