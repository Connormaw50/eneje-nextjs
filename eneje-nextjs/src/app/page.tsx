import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import NavContactButton from "@/components/NavContactButton";

export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <Image
            src="/images/logo-eneje.png"
            alt="Eneje Consulting"
            width={200}
            height={56}
            style={{ height: 56, width: "auto", display: "block" }}
            priority
          />
        </div>
        <ul className="nav-links">
          <li><a href="#pillars">About</a></li>
          <li><a href="#coachingai">Coaching AI</a></li>
          <li><a href="#cpas">CPAS</a></li>
          <li><a href="#usecases">Solutions</a></li>
          <li><a href="#founder">Founder</a></li>
        </ul>
        <NavContactButton />
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid-overlay"></div>
        <div className="hero-glow"></div>

        <div className="hero-badge">
          <span className="dot"></span>
          <span>Now Available — CPAS v2.0</span>
        </div>

        <h1 className="hero-headline">
          Objective<br />
          Coaching<br />
          <span className="gold">Intelligence</span>
        </h1>

        <p className="hero-sub">
          Eneje Consulting, powered by Coaching AI, delivers a new standard in coaching evaluation—combining data, leadership analysis, and predictive modeling for better decisions across collegiate and professional sports.
        </p>

        <div className="hero-actions">
          <a href="#cta" className="btn-primary">Request a Consultation</a>
          <a href="#coachingai" className="btn-secondary">Explore Coaching AI →</a>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-num">100</div>
          <div className="stat-label">Point CPAS Scale</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">6+</div>
          <div className="stat-label">Evaluation Dimensions</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">360°</div>
          <div className="stat-label">Leadership Analysis</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">4</div>
          <div className="stat-label">Markets Served</div>
        </div>
      </div>

      {/* DUAL PILLARS */}
      <section id="pillars">
        <div className="section-tag"><span>Platform</span></div>
        <h2 className="section-title reveal">Two Pillars.<br />One Standard.</h2>
        <p className="section-body reveal">Built as an integrated system — consulting expertise meets artificial intelligence to create an entirely new category of coaching intelligence.</p>

        <div className="pillars-grid reveal">
          <div className="pillar">
            <div className="pillar-number">01</div>
            <div className="pillar-label">01 / Consulting</div>
            <Image
              src="/images/logo-eneje.png"
              alt="Eneje Consulting"
              width={180}
              height={48}
              style={{ height: 48, width: "auto", marginBottom: 16, display: "block" }}
            />
            <p className="pillar-body">Strategic advisory for coaching evaluation, hiring, and organizational alignment. Decades of on-field experience translated into institutional rigor and governance frameworks.</p>
          </div>
          <div className="pillar">
            <div className="pillar-number">02</div>
            <div className="pillar-label">02 / Technology</div>
            <Image
              src="/images/logo-coachingai.png"
              alt="Coaching AI"
              width={200}
              height={52}
              style={{ height: 52, width: "auto", marginBottom: 16, display: "block" }}
            />
            <p className="pillar-body">Technology platform delivering real-time, data-driven coaching insights through CPAS. Scales methodology into predictive intelligence for front offices and organizations.</p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem">
        <div className="section-tag"><span>The Problem</span></div>
        <div className="problem-layout">
          <div>
            <h2 className="section-title reveal">High-Stakes Decisions Without Objective Measurement</h2>
            <p className="section-body reveal">Coaching and leadership decisions in sports often rely on incomplete evaluation methods — résumés, relationships, and surface-level statistics. This creates compounding institutional risk.</p>

            <ul className="risk-list reveal">
              <li className="risk-item">
                <div className="risk-icon">⚠</div>
                <span className="risk-text">Inconsistent and subjective hiring decisions</span>
              </li>
              <li className="risk-item">
                <div className="risk-icon">◈</div>
                <span className="risk-text">Limited transparency in evaluation processes</span>
              </li>
              <li className="risk-item">
                <div className="risk-icon">⊘</div>
                <span className="risk-text">Increased legal and compliance exposure</span>
              </li>
              <li className="risk-item">
                <div className="risk-icon">↯</div>
                <span className="risk-text">Misalignment between leadership and performance</span>
              </li>
            </ul>
          </div>

          <div className="problem-visual reveal">
            <svg width="220" height="220" viewBox="0 0 220 220">
              {/* Outer ring */}
              <circle cx="110" cy="110" r="90" fill="none" stroke="#2a2a2a" strokeWidth="12" />
              {/* Progress arc - red zone for "without CPAS" */}
              <circle
                cx="110"
                cy="110"
                r="90"
                fill="none"
                stroke="#8a1a1a"
                strokeWidth="12"
                strokeDasharray="283 282"
                strokeDashoffset="70"
                strokeLinecap="butt"
                transform="rotate(-90 110 110)"
              />
              {/* Inner ring */}
              <circle cx="110" cy="110" r="66" fill="none" stroke="#1e1e1e" strokeWidth="1" />
              {/* Center */}
              <text x="110" y="98" textAnchor="middle" fontFamily="Bebas Neue, sans-serif" fontSize="44" fill="#C9A84C">38</text>
              <text x="110" y="118" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="9" fill="#888880" letterSpacing="2">RISK SCORE</text>
              <text x="110" y="138" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="8" fill="#8a1a1a" letterSpacing="2">WITHOUT CPAS</text>
              {/* Tick marks */}
              <line x1="110" y1="22" x2="110" y2="34" stroke="#2a2a2a" strokeWidth="1" />
              <line x1="198" y1="110" x2="186" y2="110" stroke="#2a2a2a" strokeWidth="1" />
              <line x1="22" y1="110" x2="34" y2="110" stroke="#2a2a2a" strokeWidth="1" />
            </svg>
            <div
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: "var(--muted)",
                letterSpacing: "0.12em",
              }}
            >
              SAMPLE INDICATOR
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution">
        <div className="section-tag"><span>The Solution</span></div>
        <h2 className="section-title reveal">A New Standard:<br />CPAS + Coaching AI</h2>
        <p className="section-body reveal">A unified system that creates a fully auditable, objective framework for evaluating coaching impact across every level of sport.</p>

        <div className="solution-stack reveal">
          <div className="solution-row">
            <div className="solution-row-num">01</div>
            <div>
              <div className="solution-row-title">CPAS</div>
              <div className="solution-row-body">Coaching Performance Assessment System — Quantifies coaching performance across career outcomes, player development, and organizational influence.</div>
            </div>
            <div className="solution-row-tag">Methodology</div>
          </div>
          <div className="solution-row">
            <div className="solution-row-num">02</div>
            <div>
              <div className="solution-row-title">Coaching AI</div>
              <div className="solution-row-body">Scales CPAS into predictive, real-time intelligence — delivering matchup analysis, in-game evaluation, and outcome forecasting.</div>
            </div>
            <div className="solution-row-tag">Platform</div>
          </div>
          <div className="solution-row">
            <div className="solution-row-num">03</div>
            <div>
              <div className="solution-row-title">Consulting Layer</div>
              <div className="solution-row-body">Applies insights to hiring decisions, governance frameworks, and organizational strategy with expert advisory support.</div>
            </div>
            <div className="solution-row-tag">Advisory</div>
          </div>
        </div>
      </section>

      {/* CPAS */}
      <section id="cpas">
        <div className="section-tag"><span>Methodology</span></div>
        <h2 className="section-title reveal">The Foundation: CPAS</h2>
        <p className="section-body reveal">The Coaching Performance Assessment System evaluates coaching performance across six dimensions, producing a standardized, defensible grade.</p>

        <div className="cpas-grid reveal">
          <div className="cpas-card">
            <div className="cpas-card-num">01 / DIMENSION</div>
            <div className="cpas-card-title">Win / Loss Performance</div>
            <div className="cpas-card-body">Career win/loss record weighted by competition level, conference strength, and opponent quality over time.</div>
          </div>
          <div className="cpas-card">
            <div className="cpas-card-num">02 / DIMENSION</div>
            <div className="cpas-card-title">Postseason Success</div>
            <div className="cpas-card-body">Playoff appearances, advancement rates, and championship-level performance relative to roster and resource context.</div>
          </div>
          <div className="cpas-card">
            <div className="cpas-card-num">03 / DIMENSION</div>
            <div className="cpas-card-title">Player Development</div>
            <div className="cpas-card-body">Measurable improvement in athlete performance, draft advancement, and career trajectory under coaching tenure.</div>
          </div>
          <div className="cpas-card">
            <div className="cpas-card-num">04 / DIMENSION</div>
            <div className="cpas-card-title">Levels Coached</div>
            <div className="cpas-card-body">Breadth of coaching experience across positions, age groups, and competitive levels — rewarding versatility and depth.</div>
          </div>
          <div className="cpas-card">
            <div className="cpas-card-num">05 / DIMENSION</div>
            <div className="cpas-card-title">Decision-Making Impact</div>
            <div className="cpas-card-body">In-game strategic decisions evaluated against situational probability models and outcome optimization benchmarks.</div>
          </div>
          <div className="cpas-card">
            <div className="cpas-card-num">06 / DIMENSION</div>
            <div className="cpas-card-title">Organizational Influence</div>
            <div className="cpas-card-body">Cultural leadership, staff development, program building, and long-term institutional impact measurement.</div>
          </div>
        </div>

        <div className="cpas-output reveal">
          <div>
            <div className="cpas-output-label">System Output</div>
            <div className="cpas-output-title">Standardized Coaching Grade</div>
            <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 8, fontWeight: 300 }}>
              A single, defensible score enabling objective comparison, hiring transparency, and compliance documentation.
            </p>
          </div>
          <div className="score-display">
            <div className="score-num">84</div>
            <div className="score-max">/100</div>
          </div>
        </div>
      </section>

      {/* COACHING AI */}
      <section id="coachingai">
        <div className="section-tag"><span>Technology</span></div>
        <Image
          src="/images/logo-coachingai-cpas.png"
          alt="Coaching AI + CPAS"
          width={250}
          height={64}
          style={{ height: 64, width: "auto", display: "block", marginBottom: 28 }}
        />
        <h2 className="section-title reveal">The Engine:<br />Coaching AI</h2>
        <p className="section-body reveal">Coaching AI transforms CPAS into a live intelligence platform — combining quantitative data, qualitative leadership analysis, and contextual game modeling.</p>

        <div className="ai-layout reveal">
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "var(--muted)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Core Capabilities
            </div>
            <div className="capability-list">
              <div className="capability-item">
                <div className="cap-icon">⟳</div>
                <span className="cap-text">Pre-game matchup analysis — coach vs. coach, unit vs. unit</span>
              </div>
              <div className="capability-item">
                <div className="cap-icon">◉</div>
                <span className="cap-text">In-game decision evaluation and real-time scoring</span>
              </div>
              <div className="capability-item">
                <div className="cap-icon">▦</div>
                <span className="cap-text">Post-game performance breakdowns with actionable insights</span>
              </div>
              <div className="capability-item">
                <div className="cap-icon">△</div>
                <span className="cap-text">Predictive modeling and outcome forecasting</span>
              </div>
              <div className="capability-item">
                <div className="cap-icon">◈</div>
                <span className="cap-text">Position group and coordinator-level grading</span>
              </div>
            </div>
          </div>

          <div className="ai-dashboard">
            <div className="dash-header">
              <span className="dash-title" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Image
                  src="/images/logo-mark.png"
                  alt=""
                  width={40}
                  height={26}
                  style={{ height: 26, width: "auto", opacity: 0.75 }}
                />{" "}
                Coaching AI — Live Interface
              </span>
              <div className="live-badge"><div className="live-dot"></div> LIVE</div>
            </div>

            <div className="metric-grid">
              <div className="metric-box">
                <div className="metric-box-label">Coach Score</div>
                <div className="metric-box-val">91.4</div>
                <div className="metric-box-sub">▲ +2.1 this season</div>
              </div>
              <div className="metric-box">
                <div className="metric-box-label">Win Probability</div>
                <div className="metric-box-val">67%</div>
                <div className="metric-box-sub">vs. current opponent</div>
              </div>
              <div className="metric-box">
                <div className="metric-box-label">Decision Grade</div>
                <div className="metric-box-val">A–</div>
                <div className="metric-box-sub">Q3 — 4 key calls</div>
              </div>
              <div className="metric-box">
                <div className="metric-box-label">SQAI Rating</div>
                <div className="metric-box-val">88.7</div>
                <div className="metric-box-sub">Leadership index</div>
              </div>
            </div>

            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: "var(--muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Unit Grades
            </div>
            <div className="bar-chart">
              <div className="bar-row">
                <span className="bar-label">Offense</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: "88%" }}></div></div>
                <span className="bar-val">88</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">Defense</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: "76%" }}></div></div>
                <span className="bar-val">76</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">Special Tm</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: "71%" }}></div></div>
                <span className="bar-val">71</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">Coaching</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: "91%" }}></div></div>
                <span className="bar-val">91</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SQAI */}
      <section id="sqai">
        <div className="section-tag"><span>Leadership Intelligence</span></div>
        <h2 className="section-title reveal">Beyond Performance:<br />SQAI Analysis</h2>
        <p className="section-body reveal">Structured Qualitative Analysis ensures coaching evaluation reflects not just results, but the leadership and cultural impact that drives sustainable performance.</p>

        <div className="sqai-grid reveal">
          <div className="sqai-card">
            <div className="sqai-icon">◎</div>
            <div className="sqai-title">Communication Effectiveness</div>
            <div className="sqai-body">Evaluation of how coaching staff conveys strategy, provides feedback, and maintains clarity under pressure and in high-stakes environments.</div>
          </div>
          <div className="sqai-card">
            <div className="sqai-icon">⬡</div>
            <div className="sqai-title">Leadership Presence</div>
            <div className="sqai-body">Assessment of authority, composure, and the ability to inspire and align teams around a common vision across seasons and adversity.</div>
          </div>
          <div className="sqai-card">
            <div className="sqai-icon">△</div>
            <div className="sqai-title">Strategic Clarity</div>
            <div className="sqai-body">How consistently a coaching philosophy is articulated, maintained, and adapted while preserving organizational identity and player trust.</div>
          </div>
          <div className="sqai-card">
            <div className="sqai-icon">◈</div>
            <div className="sqai-title">Cultural Alignment</div>
            <div className="sqai-body">The degree to which a coach&apos;s values, processes, and behaviors align with organizational culture, institutional standards, and staff cohesion.</div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="usecases">
        <div className="section-tag"><span>Solutions</span></div>
        <h2 className="section-title reveal">Who We Serve</h2>
        <p className="section-body reveal">Eneje Consulting and Coaching AI are built to serve the full spectrum of sports organizations — and beyond.</p>

        <div className="usecase-grid reveal">
          <div className="usecase-card">
            <div className="usecase-tag">Sector 01</div>
            <div className="usecase-title">Professional Teams</div>
            <ul className="usecase-list">
              <li>Coaching evaluation and benchmarking</li>
              <li>Game strategy intelligence</li>
              <li>Front office decision support</li>
            </ul>
          </div>
          <div className="usecase-card">
            <div className="usecase-tag">Sector 02</div>
            <div className="usecase-title">Collegiate Athletics</div>
            <ul className="usecase-list">
              <li>Hiring transparency and audit trails</li>
              <li>Governance and compliance alignment</li>
              <li>Salary justification and oversight</li>
            </ul>
          </div>
          <div className="usecase-card">
            <div className="usecase-tag">Sector 03 — Emerging</div>
            <div className="usecase-title">Sportsbooks</div>
            <ul className="usecase-list">
              <li>Coaching-based predictive modeling</li>
              <li>Risk management insights</li>
            </ul>
          </div>
          <div className="usecase-card">
            <div className="usecase-tag">Sector 04 — Emerging</div>
            <div className="usecase-title">Enterprise / Gov</div>
            <ul className="usecase-list">
              <li>Leadership evaluation frameworks</li>
              <li>Workforce performance analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why">
        <div className="section-tag"><span>Why Eneje</span></div>
        <h2 className="section-title reveal">Built for Accountability,<br />Transparency, and Results</h2>

        <div className="why-grid reveal">
          <div className="why-card">
            <div className="why-num">01</div>
            <div className="why-title">Bias-Resistant Evaluation</div>
            <div className="why-body">Objective, data-driven scoring replaces subjective impressions with a reproducible, defensible framework that holds up to scrutiny.</div>
          </div>
          <div className="why-card">
            <div className="why-num">02</div>
            <div className="why-title">Fully Auditable System</div>
            <div className="why-body">Every score, grade, and evaluation is traceable. Complete audit trails support compliance, governance, and oversight requirements.</div>
          </div>
          <div className="why-card">
            <div className="why-num">03</div>
            <div className="why-title">Scalable Across All Levels</div>
            <div className="why-body">From youth leagues to the professional level, the CPAS methodology scales consistently — one standard for every context.</div>
          </div>
          <div className="why-card">
            <div className="why-num">04</div>
            <div className="why-title">Compliance Support</div>
            <div className="why-body">Structured documentation and objective grading reduce legal exposure and satisfy institutional governance standards.</div>
          </div>
          <div className="why-card">
            <div className="why-num">05</div>
            <div className="why-title">Performance + Leadership</div>
            <div className="why-body">Uniquely bridges quantitative performance analytics with structured qualitative leadership intelligence through SQAI.</div>
          </div>
          <div className="why-card">
            <div className="why-num">06</div>
            <div className="why-title">Consulting → Platform IP</div>
            <div className="why-body">Credibility layer, product layer, and methodology layer: a high-value enterprise structure mirrored by leading organizations.</div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder">
        <div className="founder-left">
          <div className="label">Founder</div>
          <div className="founder-name">JAMES<br />HASTY</div>
          <div className="founder-title">Founder & CEO — Eneje Consulting & Coaching AI</div>
        </div>
        <div className="founder-right">
          <p className="founder-bio">James Hasty brings NFL experience, championship-level coaching success, and business leadership to the mission of transforming how organizations evaluate performance and leadership. His work bridges the gap between on-field intuition and institutional accountability.</p>
          <div className="founder-credentials">
            <div className="credential">NFL playing and coaching experience</div>
            <div className="credential">Championship-level performance background</div>
            <div className="credential">Founder of CPAS methodology</div>
            <div className="credential">Pioneer in AI-powered coaching intelligence</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="section-tag" style={{ justifyContent: "center" }}><span>Get Started</span></div>
        <h2 className="cta-headline reveal">Start Making More Objective Coaching Decisions</h2>
        <p className="cta-sub reveal">Request a consultation, schedule a Coaching AI demo, or explore CPAS methodology.</p>
        <div className="cta-actions reveal">
          <a href="mailto:contact@enejoconsult.com" className="btn-primary">Request a Consultation</a>
          <a href="#coachingai" className="btn-secondary">Schedule AI Demo</a>
          <a href="#cpas" className="btn-secondary">Explore CPAS</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <Image
            src="/images/logo-eneje.png"
            alt="Eneje"
            width={160}
            height={44}
            style={{ height: 44, width: "auto" }}
          />
        </div>
        <ul className="footer-links">
          <li><a href="#pillars">About</a></li>
          <li><a href="#coachingai">Coaching AI</a></li>
          <li><a href="#cpas">CPAS</a></li>
          <li><a href="#usecases">Solutions</a></li>
          <li><a href="#cta">Contact</a></li>
        </ul>
        <div className="footer-copy">© 2026 Eneje Consulting. All rights reserved.</div>
      </footer>
    </>
  );
}
