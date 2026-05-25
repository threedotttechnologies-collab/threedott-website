import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="site">
    <header class="topbar section-shell">
      <a class="brand" href="#">threeDott</a>
      <nav class="menu">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">Menu</button>
      <a class="btn btn-outline" href="#contact">Let's Connect</a>
    </header>
    <nav class="mobile-menu section-shell" aria-hidden="true">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
    </nav>

    <section class="hero section-shell" id="about">
      <p class="kicker">Three Steps to Success</p>
      <h1>Creating user-focused product experiences.</h1>
      <div class="pill-list">
        <span>Design</span><span>Develop</span><span>Deploy</span>
      </div>
      <p class="hero-copy">
        We design, develop, and deploy modern websites, apps, and business platforms.
        Powered by AI intelligence to help businesses grow faster and smarter.
      </p>
      <div class="hero-actions">
        <a class="btn btn-solid" href="#contact">Start Your Project</a>
        <div class="metrics">
          <div class="metric">
            <strong>50+</strong>
            <span>Projects Delivered</span>
          </div>
          <div class="metric">
            <strong>100%</strong>
            <span>Client Satisfaction</span>
          </div>
          <div class="metric">
            <strong>24/7</strong>
            <span>Support Available</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell section-block why">
      <h2>Why Choose ThreeDott</h2>
      <p class="section-lead">
        We empower modern technology stacks to deliver scalable architectures and comprehensive AI-powered solutions.
      </p>
      <div class="why-grid">
        <article><span>01</span><p>End-to-End Digital Solutions</p></article>
        <article><span>02</span><p>Modern Technology Stack</p></article>
        <article><span>03</span><p>AI-Powered Development</p></article>
        <article><span>04</span><p>Scalable Product Architecture</p></article>
      </div>
    </section>

    <section class="section-shell section-block process">
      <h2>Our Process</h2>
      <div class="process-grid">
        <article><span>01</span><h3>Discover</h3><p>Understanding your idea and complete requirements.</p></article>
        <article><span>02</span><h3>Design</h3><p>Creating beautiful, user-focused digital experiences.</p></article>
        <article><span>03</span><h3>Develop</h3><p>Building robust capabilities aligned with the design.</p></article>
        <article><span>04</span><h3>Deploy</h3><p>Launching gracefully with full-scale support.</p></article>
      </div>
    </section>

    <section class="section-shell section-block" id="services">
      <h2>Our Core Services</h2>
      <p class="section-lead">
        We specialize in modern app engineering, UI/UX design, and AI development to provide robust end-to-end solutions.
      </p>
      <div class="service-grid">
        <article class="card">
          <p class="card-index">01</p>
          <h3>Product Design</h3>
          <p>Research-led product design with modern interfaces and conversion-focused experiences.</p>
          <ul>
            <li>User Research & Strategy</li>
            <li>UX Flows & Wireframes</li>
            <li>UI Design Systems</li>
            <li>Prototyping & Interaction Design</li>
          </ul>
        </article>
        <article class="card">
          <p class="card-index">02</p>
          <h3>Web & App Development</h3>
          <p>High-performance platforms built with reliable modern technologies and best practices.</p>
          <ul>
            <li>Web Applications & Dashboards</li>
            <li>Native iOS & Android Mobile Apps</li>
            <li>Scalable Backend Engineering</li>
            <li>React, Next.js, Node, Python</li>
          </ul>
        </article>
        <article class="card">
          <p class="card-index">03</p>
          <h3>AI Development</h3>
          <p>Scalable integrations of artificial intelligence into your business operations.</p>
          <ul>
            <li>Machine Learning Models</li>
            <li>LLM APIs & Prompt Engineering</li>
            <li>Data Analytics pipelines</li>
            <li>Process Automation</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section-shell section-block" id="work">
      <h2>Featured Work</h2>
      <p class="section-lead">
        Explore digital solutions we've crafted spanning web design, application experiences, and AI product integration.
      </p>
      <div class="work-gallery">
        <article class="work-item">
          <div class="work-content">
            <span>Web Design</span>
            <h3>Spectra Analytics Dashboard</h3>
            <p>A comprehensive real-time tracking dashboard utilizing a sleek dark theme. Built for performance to handle heavy network capabilities and display complex charts beautifully utilizing smooth glassmorphic interfaces.</p>
            <div class="work-tags">
              <small>React</small>
              <small>Next.js</small>
              <small>UI/UX Design</small>
            </div>
          </div>
          <div class="work-image">
            <img src="/mockup_1.png" alt="Spectra Analytics Web Dashboard" loading="lazy" />
          </div>
        </article>
        
        <article class="work-item reverse">
          <div class="work-content">
            <span>App Design</span>
            <h3>Elevate Fitness Tracker</h3>
            <p>An elegant, premium lifestyle application that seamlessly pairs with health hardware. Features include deep sleep cycle analytics and vibrant activity tracking curves mapped across a modern dark UI.</p>
            <div class="work-tags">
              <small>Flutter</small>
              <small>Mobile UI</small>
              <small>Prototyping</small>
            </div>
          </div>
          <div class="work-image">
            <img src="/mockup_2.png" alt="Elevate Fitness Tracker App" loading="lazy" />
          </div>
        </article>
        
        <article class="work-item">
          <div class="work-content">
            <span>AI Development</span>
            <h3>Aethernet AI Insights</h3>
            <p>A scalable infrastructure platform highlighting global network topography and potential traffic anomalies. Powered by our proprietary machine learning heuristics for fast prediction and resolution.</p>
            <div class="work-tags">
              <small>Python</small>
              <small>OpenAI Analytics</small>
              <small>PostgreSQL</small>
            </div>
          </div>
          <div class="work-image">
            <img src="/mockup_3.png" alt="Aethernet AI Platform" loading="lazy" />
          </div>
        </article>
      </div>
    </section>

    <section class="section-shell section-block trust">
      <h2>Trusted by Industry Leaders</h2>
      <p>Powering innovation for cutting-edge companies worldwide.</p>
      <div class="logo-grid">
        <span>ALPHA</span><span>VORTEX</span><span>LUMINOUS</span>
        <span>SYNAPSE</span><span>NEXUS</span><span>PULSE</span>
      </div>
    </section>

    <section class="cta section-shell" id="contact">
      <h2>We turn bold ideas into powerful digital realities.</h2>
      <a class="btn btn-solid" href="#">Start Your Project</a>
    </section>

    <footer class="footer section-shell" id="pricing">
      <div class="footer-brand">
        <p class="brand-name">threeDott</p>
        <p class="phone">+91 97987 84550</p>
        <p style="margin-top: 1rem; max-width: 250px;">Creating user-focused product experiences, from initial discover to final deploy.</p>
      </div>
      <div>
        <h4>Services</h4>
        <a href="#">UI/UX Design</a>
        <a href="#">Web Development</a>
        <a href="#">App Development</a>
        <a href="#">AI Solutions</a>
        <a href="#">ERP / CRM</a>
      </div>
      <div>
        <h4>Quick links</h4>
        <a href="#work">Featured Work</a>
        <a href="#about">About Us</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <h4>Connect</h4>
        <a href="mailto:hello@threedott.com">hello@threedott.com</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">X / Twitter</a>
      </div>
      <div class="footer-bottom">
        <p>ThreeDott Technology, © 2026. All rights reserved.</p>
        <div>
          <a href="#" style="display:inline; margin-right: 15px;">Terms & Condition</a>
          <a href="#" style="display:inline; margin-right: 15px;">Privacy Policy</a>
          <a href="#" style="display:inline;">Cookie Policy</a>
        </div>
      </div>
    </footer>
  </div>
`;

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    });
  });
}
