import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">

      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <ShowcaseSection />
      <UseCasesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />

    </div>
  );
}

/* ---------------- HERO SECTION ---------------- */
function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1 className="hero-title">
          Transform Legal Work with <br />  
          <span className="blue-gradient"> AI-Powered Intelligence</span>
        </h1>

        <p className="hero-sub">
          Extract judgments, generate summaries, analyze issues, detect citations and
          retrieve structured case insights — all powered by advanced AI built for
          legal professionals.
        </p>

        <div className="hero-buttons">
          <Link to="/upload" className="primary-btn">Upload a Judgment</Link>
          <a href="#features" className="secondary-btn">View Features</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card hero-card-1">PDF → Clean Text</div>
        <div className="hero-card hero-card-2">AI Summary</div>
        <div className="hero-card hero-card-3">Legal Info Extraction</div>
        <div className="hero-blur-bg"></div>
      </div>

    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function FeatureSection() {
  const features = [
    {
      icon: "bi-vector-pen",
      title: "Accurate Text Extraction",
      desc: "Advanced AI converts complex judgments into structured, readable text."
    },
    {
      icon: "bi-lightning-charge",
      title: "Instant Summaries",
      desc: "Generate bullet points, detailed summaries, facts, issues & reasoning instantly."
    },
    {
      icon: "bi-bank",
      title: "Metadata Extraction",
      desc: "Court name, case number, bench, parties, citations, acts & more — extracted automatically."
    },
    {
      icon: "bi-cpu",
      title: "Next-Gen AI Legal Engine",
      desc: "Uses state-of-the-art models trained for Indian legal judgments."
    }
  ];

  return (
    <section id="features" className="features">
      <h2 className="section-title">Powerful AI Features</h2>
      <p className="section-sub">The complete legal research automation suite.</p>

      <div className="feature-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <i className={`bi ${f.icon} feature-icon`}></i>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS (NEW) ---------------- */
function HowItWorksSection() {
  const steps = [
    {
      title: "Upload Your Judgment",
      desc: "Simply drag and drop your PDF or select from your device.",
      icon: "bi-cloud-upload"
    },
    {
      title: "AI Reads & Extracts",
      desc: "Our legal engine pulls out clean text, metadata, issues & citations.",
      icon: "bi-robot"
    },
    {
      title: "Get Instant Insights",
      desc: "View structured facts, summaries, parties, reasoning and final orders.",
      icon: "bi-lightning"
    }
  ];

  return (
    <section id="how" className="steps-section">

      <h2 className="section-title">How It Works</h2>
      <p className="section-sub">A seamless 3-step workflow designed for modern legal work.</p>

      <div className="steps-flow">
        {steps.map((s, i) => (
          <div className="step-card" key={i}>
            <div className="step-icon"><i className={`bi ${s.icon}`}></i></div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
/* ---------------- SHOWCASE (3×2 GRID VERSION) ---------------- */
function ShowcaseSection() {
  const blocks = [
    { icon: "bi-file-earmark-text", title: "Clean Text Extraction", sub: "Convert messy PDFs into readable legal text." },
    { icon: "bi-stars", title: "AI Summary Engine", sub: "Generate bullet & paragraph summaries in seconds." },
    { icon: "bi-bank", title: "Legal Metadata", sub: "Extract judges, acts, sections, case numbers & more." },
    { icon: "bi-lightbulb", title: "Issue Detection", sub: "Identify core legal issues automatically." },
    { icon: "bi-link-45deg", title: "Citations Map", sub: "Find referenced case laws effortlessly." },
    { icon: "bi-chat-square-text", title: "Arguments & Reasoning", sub: "Analyze both parties' submissions & court logic." }
  ];

  return (
    <section id="platform" className="showcase-pro">

      <h2 className="section-title">Everything You Need in One Platform</h2>
      <p className="section-sub">
        A complete AI toolkit for legal analysis, research and drafting.
      </p>

      {/* Updated Grid */}
      <div className="showcase-pro-grid-3">
        {blocks.map((b, i) => (
          <div className="showcase-pro-card" key={i}>
            <div className="sp-icon">
              <i className={`bi ${b.icon}`}></i>
            </div>
            <h4>{b.title}</h4>
            <p>{b.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- USE CASES (NEW) ---------------- */
function UseCasesSection() {
  const cases = [
    {
      title: "Lawyers",
      desc: "Accelerate case reading, drafting & preparation.",
      icon: "bi-person-badge"
    },
    {
      title: "Law Firms",
      desc: "Automate research workflows & increase output per associate.",
      icon: "bi-building"
    },
    {
      title: "Law Students",
      desc: "Understand judgments easily and improve academic performance.",
      icon: "bi-mortarboard"
    },
    {
      title: "Researchers",
      desc: "Extract structured insights from large volumes of case material.",
      icon: "bi-search"
    },
  ];

  return (
    <section id="usecases" className="usecases-new">

      <h2 className="section-title">Who Can Benefit?</h2>
      <p className="section-sub">A universal AI assistant for every legal professional.</p>

      <div className="usecases-grid">
        {cases.map((u, i) => (
          <div className="usecases-card" key={i}>
            <div className="uc-icon"><i className={`bi ${u.icon}`}></i></div>
            <h4>{u.title}</h4>
            <p>{u.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ---------------- TESTIMONIALS (REDESIGNED) ---------------- */
function TestimonialsSection() {
  const reviews = [
    {
      name: "Adv. Lakshmi",
      text: "Cuts my case reading time drastically. The summaries and extracted info are incredibly accurate.",
      initials: "AL"
    },
    {
      name: "Raj (LLB)",
      text: "Makes understanding judgments so easy! Perfect for students and quick revision.",
      initials: "RJ"
    },
    {
      name: "Vishal Law Associates",
      text: "We use it daily for rapid case analysis. Significantly boosts productivity.",
      initials: "VL"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-pro">

      <h2 className="section-title">What People Say</h2>
      <p className="section-sub">Trusted by advocates, students & law firms.</p>

      <div className="testimonials-grid-3">
        {reviews.map((r, i) => (
          <div className="testimonial-pro-card" key={i}>
            
            <div className="tp-avatar">{r.initials}</div>

            <p className="tp-text">“{r.text}”</p>

            <p className="tp-name">— {r.name}</p>

          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTASection() {
  return (
    <section className="cta">
      <h2 className="cta-title">Ready to Transform Your Legal Workflow?</h2>
      <p className="cta-sub">
        Upload your first judgment and watch AI automate your analysis.
      </p>

      <Link to="/upload" className="primary-btn cta-btn">Start Now →</Link>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Legal AI Assistant — All Rights Reserved.
    </footer>
  );
}
