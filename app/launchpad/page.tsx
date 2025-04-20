export default function LaunchpadPage() {
  return (
    <div className="web2-body">
      {/* Classic Web 2.0 Header with Glossy Gradient */}
      <div className="web2-header">
        <div className="web2-container">
          <div className="web2-logo">
            Neural<span className="web2-logo-highlight">Command</span>
          </div>
          <div className="web2-nav">
            <a href="/" className="web2-nav-item">
              Home
            </a>
            <a href="/about" className="web2-nav-item">
              About
            </a>
            <a href="/services" className="web2-nav-item">
              Services
            </a>
            <a href="/launchpad" className="web2-nav-item web2-nav-active">
              Launch Pad
            </a>
            <a href="/contact" className="web2-nav-item">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="web2-container web2-main">
        {/* Enhanced Hero Section with Web 2.0 Style */}
        <div className="web2-hero-banner">
          <div className="web2-hero-content">
            <div className="web2-hero-badge-container">
              <div className="web2-hero-badge">
                <span className="web2-hero-badge-text">NEURAL COMMAND</span>
                <div className="web2-hero-badge-shine"></div>
              </div>
            </div>

            <h1 className="web2-hero-title">
              Discover Our <span className="web2-hero-highlight">Complete Portfolio</span>
            </h1>

            <div className="web2-hero-tagline">
              <div className="web2-starburst-large">
                <span>NEW!</span>
              </div>
              <p>Apps, Tools & Plugins for the AI-Powered Enterprise</p>
            </div>

            <p className="web2-hero-description">
              Explore our comprehensive suite of AI solutions designed to transform your business operations, boost
              productivity, and drive innovation across your organization.
            </p>

            <div className="web2-hero-cta">
              <a href="#products" className="web2-button web2-button-large">
                <span className="web2-button-text">Explore Our Portfolio</span>
                <span className="web2-button-arrow">→</span>
                <div className="web2-button-shine"></div>
              </a>
              <a href="/contact" className="web2-button web2-button-large web2-button-secondary">
                <span className="web2-button-text">Request Demo</span>
                <div className="web2-button-shine"></div>
              </a>
            </div>

            <div className="web2-hero-features">
              <div className="web2-hero-feature">
                <div className="web2-checkmark">✓</div>
                <span>Enterprise-Grade AI</span>
              </div>
              <div className="web2-hero-feature">
                <div className="web2-checkmark">✓</div>
                <span>Seamless Integration</span>
              </div>
              <div className="web2-hero-feature">
                <div className="web2-checkmark">✓</div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="web2-hero-image-container">
            <div className="web2-hero-image">
              <img src="/neural-genesis.png" alt="Neural Command Product Suite" />
              <div className="web2-image-reflection"></div>
            </div>
            <div className="web2-hero-image-badge">
              <div className="web2-image-badge-inner">
                <span>FEATURED</span>
              </div>
            </div>
          </div>
        </div>

        <div className="web2-announcement-bar">
          <div className="web2-announcement-content">
            <span className="web2-star">★</span>
            TRUSTED BY FORTUNE 500 COMPANIES WORLDWIDE
            <span className="web2-star">★</span>
          </div>
        </div>

        {/* Products Grid */}
        <div id="products" className="web2-section-title">
          <h2>Our Products</h2>
          <div className="web2-section-title-underline"></div>
        </div>

        <div className="web2-products-grid">
          {/* Product 1 - Viontra */}
          <div className="web2-product">
            <div className="web2-product-header">
              <h3>Viontra</h3>
              <div className="web2-product-badge">BETA</div>
            </div>
            <div className="web2-product-body">
              <div className="web2-product-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <div className="web2-icon-shine"></div>
              </div>
              <p className="web2-product-description">
                The Operating System for Your Digital Presence. Control your website, SEO, Google Business, ads, and CRM
                from one intelligent interface.
              </p>
              <a href="/viontra" className="web2-button">
                <span className="web2-button-text">Explore Viontra</span>
                <span className="web2-button-arrow">→</span>
                <div className="web2-button-shine"></div>
              </a>
            </div>
            <div className="web2-product-reflection"></div>
          </div>

          {/* Product 2 - RankHack */}
          <div className="web2-product">
            <div className="web2-product-header">
              <h3>RankHack</h3>
              <div className="web2-corner-ribbon">NEW!</div>
            </div>
            <div className="web2-product-body">
              <div className="web2-product-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
                <div className="web2-icon-shine"></div>
              </div>
              <p className="web2-product-description">
                AI-powered SEO optimization that continuously improves your search rankings through intelligent content
                and technical adjustments.
              </p>
              <div className="web2-button web2-button-disabled">
                <span className="web2-button-text">Coming Soon</span>
                <div className="web2-button-shine"></div>
              </div>
            </div>
            <div className="web2-product-reflection"></div>
          </div>

          {/* Product 3 - DataMat */}
          <div className="web2-product">
            <div className="web2-product-header web2-header-green">
              <h3>DataMat</h3>
              <div className="web2-product-badge">ALPHA</div>
            </div>
            <div className="web2-product-body">
              <div className="web2-product-icon web2-icon-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <div className="web2-icon-shine"></div>
              </div>
              <p className="web2-product-description">
                Transform your business data into actionable insights with our AI analytics platform that predicts
                trends and identifies opportunities.
              </p>
              <div className="web2-button web2-button-disabled">
                <span className="web2-button-text">Coming Soon</span>
                <div className="web2-button-shine"></div>
              </div>
            </div>
            <div className="web2-product-reflection"></div>
          </div>

          {/* Product 4 - CommandLine */}
          <div className="web2-product">
            <div className="web2-product-header web2-header-red">
              <h3>CommandLine</h3>
              <div className="web2-product-badge">ALPHA</div>
            </div>
            <div className="web2-product-body">
              <div className="web2-product-icon web2-icon-red">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <div className="web2-icon-shine"></div>
              </div>
              <p className="web2-product-description">
                A natural language interface for your business systems. Control your entire digital infrastructure with
                simple text commands.
              </p>
              <div className="web2-button web2-button-disabled">
                <span className="web2-button-text">Coming Soon</span>
                <div className="web2-button-shine"></div>
              </div>
            </div>
            <div className="web2-product-reflection"></div>
          </div>

          {/* Product 5 - SoulFilter */}
          <div className="web2-product">
            <div className="web2-product-header web2-header-orange">
              <h3>SoulFilter</h3>
              <div className="web2-product-badge">ALPHA</div>
            </div>
            <div className="web2-product-body">
              <div className="web2-product-icon web2-icon-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <div className="web2-icon-shine"></div>
              </div>
              <p className="web2-product-description">
                Advanced AI security system that protects your digital assets from threats while ensuring seamless user
                experiences.
              </p>
              <div className="web2-button web2-button-disabled">
                <span className="web2-button-text">Coming Soon</span>
                <div className="web2-button-shine"></div>
              </div>
            </div>
            <div className="web2-product-reflection"></div>
          </div>

          {/* Product 6 - AI Savings Estimator */}
          <div className="web2-product">
            <div className="web2-product-header web2-header-teal">
              <h3>AI Savings Estimator</h3>
              <div className="web2-starburst">HOT!</div>
            </div>
            <div className="web2-product-body">
              <div className="web2-product-icon web2-icon-teal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div className="web2-icon-shine"></div>
              </div>
              <p className="web2-product-description">
                Calculate how much your business can save by implementing our AI solutions across your operations.
              </p>
              <a href="/ai-savings-estimator" className="web2-button web2-button-teal">
                <span className="web2-button-text">Calculate Savings</span>
                <span className="web2-button-arrow">→</span>
                <div className="web2-button-shine"></div>
              </a>
            </div>
            <div className="web2-product-reflection"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="web2-cta">
          <div className="web2-cta-inner">
            <h2 className="web2-cta-title">Ready to Transform Your Business?</h2>
            <p className="web2-cta-text">
              Our comprehensive portfolio of AI apps, tools, and plugins is designed to give you a competitive edge in
              today's digital landscape.
            </p>
            <div className="web2-cta-buttons">
              <a href="/contact" className="web2-button web2-button-large">
                <span className="web2-button-text">Contact Us</span>
                <span className="web2-button-arrow">→</span>
                <div className="web2-button-shine"></div>
              </a>
              <a href="/" className="web2-button web2-button-large web2-button-secondary">
                <span className="web2-button-text">Back to Home</span>
                <div className="web2-button-shine"></div>
              </a>
            </div>
          </div>
          <div className="web2-cta-reflection"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="web2-footer">
        <div className="web2-container">
          <div className="web2-footer-content">
            <div className="web2-footer-copyright">© 2008 Neural Command. All rights reserved.</div>
            <div className="web2-footer-links">
              <a href="/about">About</a>
              <span className="web2-footer-divider">|</span>
              <a href="/services">Services</a>
              <span className="web2-footer-divider">|</span>
              <a href="/contact">Contact</a>
              <span className="web2-footer-divider">|</span>
              <a href="/privacy">Privacy</a>
              <span className="web2-footer-divider">|</span>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
