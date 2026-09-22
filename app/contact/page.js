"use client";
import { useEffect } from "react";
import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const CONTACT_DETAILS = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Our Location",
    lines: ["LGF-25 Ajnara Arcade", "Crossings Republik", "Ghaziabad, Delhi NCR"],
    linkLabel: "View on Map",
    linkIcon: "fa-solid fa-arrow-right",
    href: "https://maps.google.com/?q=LGF-25+Ajnara+Arcade+Crossings+Republik+Ghaziabad",
    external: true,
    direction: "left",
  },
  {
    icon: "fa-solid fa-phone",
    title: "Phone",
    lines: ["Speak to our design team directly", "Mon – Sat, 10:00 AM – 7:00 PM"],
    linkLabel: "+91 7827097773",
    linkIcon: "fa-solid fa-phone",
    href: "tel:+917827097773",
    direction: "up",
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email Address",
    lines: ["For inquiries, quotes, or consultations", "We respond within 24 hours"],
    linkLabel: "Sethiinteriors1@gmail.com",
    linkIcon: "fa-solid fa-envelope",
    href: "mailto:Sethiinteriors1@gmail.com",
    direction: "right",
  },
];

const NEXT_STEPS = [
  {
    step: "01",
    title: "Share Your Brief",
    text: "Send us your space details and what you have in mind using the form, WhatsApp, or a quick call.",
  },
  {
    step: "02",
    title: "Free Consultation",
    text: "We visit or call to understand your requirement, then put together a layout plan and a transparent quote.",
  },
  {
    step: "03",
    title: "Design & Execution",
    text: "Once approved, our in-house team handles everything end to end and hands over a finished, ready-to-use space.",
  },
];

export default function ContactPage() {
  useEffect(() => {
    // Nudge the vendor scripts to re-measure once hydration has settled.
    if (typeof window !== "undefined" && window.jQuery) {
      window.dispatchEvent(new Event("resize"));
    }
  }, []);

  return (
    <>
      <Header />

      <div id="antra-smooth-wrapper" suppressHydrationWarning>
        <div id="antra-smooth-content" suppressHydrationWarning>
          <style>{`
            /* The header sits on top of the page, so the hero needs to clear it. */
            .contact-hero-section {
              padding-top: 200px;
              padding-bottom: 120px;
              background-color: #111;
              position: relative;
              overflow: hidden;
            }
            .contact-hero-section::after {
              content: '';
              position: absolute;
              right: -120px;
              top: -120px;
              width: 420px;
              height: 420px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(202,160,92,0.22) 0%, rgba(202,160,92,0) 70%);
              pointer-events: none;
            }
            /* .section-heading is a flex column with align-items:baseline,
               so text-center alone won't centre the title or the pill. */
            .contact-hero-section .section-heading {
              align-items: center;
              text-align: center;
            }
            .contact-hero-section .sub-heading {
              color: #caa05c;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin-bottom: 18px;
            }
            .contact-hero-section .section-title {
              margin-bottom: 22px;
            }
            .contact-hero-section p {
              max-width: 620px;
              margin-left: auto;
              margin-right: auto;
              color: rgba(255,255,255,0.72);
            }
            .contact-hero-actions {
              display: flex;
              flex-wrap: wrap;
              gap: 14px;
              justify-content: center;
              margin-top: 34px;
              position: relative;
              z-index: 1;
            }
            .contact-hero-btn {
              display: inline-flex;
              align-items: center;
              gap: 10px;
              padding: 14px 32px;
              border-radius: 100px;
              font-size: 15px;
              font-weight: 600;
              text-decoration: none;
              transition: all 0.3s ease;
              border: 1px solid transparent;
            }
            .contact-hero-btn.primary {
              background-color: #caa05c;
              color: #fff;
            }
            .contact-hero-btn.primary:hover {
              background-color: #b98f4c;
              color: #fff;
              transform: translateY(-2px);
            }
            .contact-hero-btn.ghost {
              background-color: transparent;
              color: #fff;
              border-color: rgba(255,255,255,0.35);
            }
            .contact-hero-btn.ghost:hover {
              background-color: #fff;
              color: #111;
              transform: translateY(-2px);
            }

            /* Equal-height info cards — the stock markup let them stagger. */
            .contact-info-section {
              padding-top: 90px;
              padding-bottom: 60px;
            }
            .contact-info-section .contact-info-col {
              display: flex;
            }
            .contact-info-section .contact-info-card {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
              padding: 40px 28px;
              border: 1px solid #ededed;
              background: #fafafa;
            }
            .contact-info-section .contact-info-card .contact-info-text {
              flex-grow: 1;
            }
            .contact-info-section .contact-info-card .contact-icon {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 68px;
              height: 68px;
              border-radius: 50%;
              background: #fff;
              border: 1px solid #ececec;
              font-size: 24px;
              margin-bottom: 22px;
            }
            .contact-info-section .contact-info-card:hover .contact-icon {
              background: #caa05c;
              color: #fff;
              border-color: #caa05c;
            }

            /* What happens next */
            .next-steps-section {
              padding-top: 40px;
              padding-bottom: 110px;
            }
            .next-step-card {
              height: 100%;
              padding: 40px 30px;
              border-radius: 10px;
              background: #fff;
              border: 1px solid #ededed;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .next-step-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            }
            .next-step-number {
              font-family: var(--tl-ff-heading);
              font-size: 42px;
              line-height: 1;
              color: #caa05c;
              margin-bottom: 18px;
              display: block;
            }
            .next-step-card h3 {
              font-size: 20px;
              margin-bottom: 12px;
              color: #1a1a1a;
            }
            .next-step-card p {
              color: #666;
              line-height: 1.7;
              margin-bottom: 0;
            }

            @media (max-width: 991px) {
              .contact-hero-section {
                padding-top: 160px;
                padding-bottom: 90px;
              }
            }
            @media (max-width: 767px) {
              .contact-hero-section {
                padding-top: 140px;
                padding-bottom: 70px;
              }
              .contact-info-section {
                padding-top: 60px;
                padding-bottom: 30px;
              }
              .next-steps-section {
                padding-bottom: 70px;
              }
              .contact-hero-btn {
                padding: 12px 24px;
                font-size: 14px;
              }
            }
          `}</style>

          {/* Hero */}
          <section className="contact-hero-section fade-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading text-center white-content mb-0">
                    <h4 className="sub-heading">Get in Touch</h4>
                    <h1 className="section-title cursor-effect">
                      Contact <span>SS Interiorshub</span>
                    </h1>
                    <p className="mb-0">
                      Reach out to our team of experts to start planning your dream space.
                      We&apos;re here to help you create the perfect interior design solution.
                    </p>
                    <div className="contact-hero-actions">
                      <a href="tel:+917827097773" className="contact-hero-btn primary">
                        <i className="fa-solid fa-phone"></i> Call +91 7827097773
                      </a>
                      <a
                        href="https://wa.me/917827097773"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-hero-btn ghost"
                      >
                        <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact details */}
          <section className="contact-info-section fade-wrapper">
            <div className="container">
              <div className="row gy-4">
                {CONTACT_DETAILS.map((item, i) => (
                  <div
                    key={item.title}
                    className="col-lg-4 col-md-6 contact-info-col slide-anim"
                    data-offset="60"
                    data-direction={item.direction}
                    data-delay={0.15 + i * 0.12}
                    suppressHydrationWarning
                  >
                    <div className="contact-info-card">
                      <div className="contact-icon">
                        <i className={item.icon}></i>
                      </div>
                      <h3 className="contact-info-title">{item.title}</h3>
                      <p className="contact-info-text">
                        {item.lines.map((line, n) => (
                          <span key={line}>
                            {line}
                            {n < item.lines.length - 1 ? <br /> : null}
                          </span>
                        ))}
                      </p>
                      <a
                        href={item.href}
                        className="contact-info-link"
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {item.linkLabel} <i className={item.linkIcon}></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Same "Let's Discuss Your Next Project" section as the home page */}
          <Contact />

          {/* What happens next */}
          <section className="next-steps-section fade-wrapper">
            <div className="container">
              <div className="row section-heading-wrap">
                <div className="col-lg-4 col-md-12">
                  <div className="section-heading mb-0">
                    <h4 className="sub-heading">How It Works</h4>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="section-heading section-heading-2 mb-0">
                    <h2 className="section-title cursor-effect">
                      What Happens <span>Next</span>
                    </h2>
                    <p className="mb-0">
                      From your first message to handover, here&apos;s how we take your
                      project forward.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row gy-4">
                {NEXT_STEPS.map((step, i) => (
                  <div
                    key={step.step}
                    className="col-lg-4 col-md-6 slide-anim"
                    data-offset="60"
                    data-direction="up"
                    data-delay={0.15 + i * 0.12}
                    suppressHydrationWarning
                  >
                    <div className="next-step-card">
                      <span className="next-step-number">{step.step}</span>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
