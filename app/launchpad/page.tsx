export default function LaunchpadPage() {
  return (
    <div className="aqua-body">
      {/* Classic Aqua-inspired Header */}
      <div className="aqua-header">
        <div className="aqua-container">
          <div className="aqua-logo">
            <div className="aqua-logo-icon">NC</div>
            <span>
              Neural<span className="aqua-highlight">Command</span>
            </span>
          </div>
          <div className="aqua-nav">
            <a href="/" className="aqua-nav-item">
              Home
            </a>
            <a href="/about" className="aqua-nav-item">
              About
            </a>
            <a href="/services" className="aqua-nav-item">
              Services
            </a>
            <a href="/launchpad" className="aqua-nav-item aqua-nav-active">
              Launch Pad
            </a>
            <a href="/contact" className="aqua-nav-item">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="aqua-container aqua-main">
        {/* Hero Section with Aqua Styling */}
        <div className="aqua-hero">
          <div className="aqua-hero-content">
            <div className="aqua-badge">
              <span>NEURAL COMMAND</span>
            </div>

            <h1 className="aqua-hero-title">
              Discover Our <span className="aqua-highlight">Complete Portfolio</span>
            </h1>

            <p className="aqua-hero-description">
              Explore our comprehensive suite of AI solutions designed to transform your business operations, boost
              productivity, and drive innovation across your organization.
            </p>

            <div className="aqua-hero-cta">
              <a href="#products" className="aqua-button aqua-button-blue">
                <span className="aqua-button-text">Explore Our Portfolio</span>
                <span className="aqua-button-arrow">→</span>
              </a>
              <a href="/contact" className="aqua-button aqua-button-gray">
                <span className="aqua-button-text">Request Demo</span>
              </a>
            </div>

            <div className="aqua-hero-features">
              <div className="aqua-hero-feature">
                <div className="aqua-checkmark"></div>
                <span>Enterprise-Grade AI</span>
              </div>
              <div className="aqua-hero-feature">
                <div className="aqua-checkmark"></div>
                <span>Seamless Integration</span>
              </div>
              <div className="aqua-hero-feature">
                <div className="aqua-checkmark"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="aqua-hero-image-container">
            <div className="aqua-hero-image">
              <img src="/neural-genesis.png" alt="Neural Command Product Suite" />
              <div className="aqua-reflection"></div>
            </div>
            <div className="aqua-new-badge">NEW</div>
          </div>
        </div>

        {/* Products Section */}
        <div id="products" className="aqua-section-title">
          <h2>Our Products</h2>
          <div className="aqua-section-title-underline"></div>
        </div>

        <div className="aqua-products-grid">
          {/* Product 1 - Viontra */}
          <div className="aqua-product">
            <div className="aqua-product-header">
              <h3>Viontra</h3>
              <div className="aqua-product-badge">BETA</div>
            </div>
            <div className="aqua-product-body">
              <div className="aqua-product-icon">
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
              </div>
              <p className="aqua-product-description">
                The Operating System for Your Digital Presence. Control your website, SEO, Google Business, ads, and CRM
                from one intelligent interface.
              </p>
              <a href="/viontra" className="aqua-button aqua-button-small">
                <span className="aqua-button-text">Explore Viontra</span>
                <span className="aqua-button-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Product 2 - RankHack */}
          <div className="aqua-product">
            <div className="aqua-product-header">
              <h3>RankHack</h3>
              <div className="aqua-corner-ribbon">NEW!</div>
            </div>
            <div className="aqua-product-body">
              <div className="aqua-product-icon">
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
              </div>
              <p className="aqua-product-description">
                AI-powered SEO optimization that continuously improves your search rankings through intelligent content
                and technical adjustments.
              </p>
              <div className="aqua-button aqua-button-small aqua-button-disabled">
                <span className="aqua-button-text">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Product 3 - AI Savings Estimator */}
          <div className="aqua-product">
            <div className="aqua-product-header aqua-header-teal">
              <h3>AI Savings Estimator</h3>
              <div className="aqua-hot-badge">HOT!</div>
            </div>
            <div className="aqua-product-body">
              <div className="aqua-product-icon aqua-icon-teal">
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
              </div>
              <p className="aqua-product-description">
                Calculate how much your business can save by implementing our AI solutions across your operations.
              </p>
              <a href="/ai-savings-estimator" className="aqua-button aqua-button-small aqua-button-teal">
                <span className="aqua-button-text">Calculate Savings</span>
                <span className="aqua-button-arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="aqua-cta">
          <div className="aqua-cta-inner">
            <h2 className="aqua-cta-title">Ready to Transform Your Business?</h2>
            <p className="aqua-cta-text">
              Our comprehensive portfolio of AI apps, tools, and plugins is designed to give you a competitive edge in
              today's digital landscape.
            </p>
            <div className="aqua-cta-buttons">
              <a href="/contact" className="aqua-button aqua-button-blue">
                <span className="aqua-button-text">Contact Us</span>
                <span className="aqua-button-arrow">→</span>
              </a>
              <a href="/" className="aqua-button aqua-button-gray">
                <span className="aqua-button-text">Back to Home</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="aqua-footer">
        <div className="aqua-container">
          <div className="aqua-footer-content">
            <div className="aqua-footer-copyright">© 2025 Neural Command. All rights reserved.</div>
            <div className="aqua-footer-links">
              <a href="/about">About</a>
              <span className="aqua-footer-divider">|</span>
              <a href="/services">Services</a>
              <span className="aqua-footer-divider">|</span>
              <a href="/contact">Contact</a>
              <span className="aqua-footer-divider">|</span>
              <a href="/privacy">Privacy</a>
              <span className="aqua-footer-divider">|</span>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
