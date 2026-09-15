import { useLayoutEffect, useRef } from 'react'
import { personalInfo, navLinks } from '../data/portfolio'
import { gsap, sectionHeaderReveal, staggerReveal } from '../anim/motion'

export default function Contact() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current

      sectionHeaderReveal(el)

      gsap.fromTo(el.querySelectorAll('.contact__email-btn'),
        { autoAlpha: 0, y: 44 },
        {
          autoAlpha: 1, y: 0, duration: 1.2, ease: 'power3.out',
          clearProps: 'transform,opacity,visibility',
          scrollTrigger: { trigger: el.querySelector('.contact__main'), start: 'top 60%', once: true },
        })

      staggerReveal(el.querySelectorAll('.contact__method'),
        el.querySelector('.contact__methods'), { stagger: 0.1, distance: 50 })

      staggerReveal(el.querySelectorAll('.contact__footer-left, .contact__footer-right'),
        el.querySelector('.contact__footer'), { stagger: 0.15, distance: 30 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__bg">
        <div className="contact__bg-grid" />
        <div className="contact__bg-orb" />
        <div className="contact__bg-vignette" />
      </div>

      <div className="container contact__container">
        <div className="contact__main">
          <span className="section-label">Open to Opportunities</span>
          <h2 className="contact__title font-display">
            期待站到一线，<span className="text-gradient">推进交付</span>
          </h2>
          <p className="contact__subtitle">
            希望获得 FDE 前沿部署相关面试机会，可接受长期驻场、频繁出差，
            <br />
            也愿意在项目上线期投入高强度工作。
          </p>

          <div className="contact__actions">
            <a href={`mailto:${personalInfo.email}`} className="contact__email-btn">
              <span className="contact__email-text">联系我</span>
              <span className="contact__email-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a href={personalInfo.resumeUrl} className="contact__email-btn contact__email-btn--resume" download>
              <span className="contact__email-text">下载简历</span>
              <span className="contact__email-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v12M7 10l5 5 5-5M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          <div className="contact__methods">
            <a href={`mailto:${personalInfo.email}`} className="contact__method">
              <span className="contact__method-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="contact__method-label">Email</span>
              <span className="contact__method-value">{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="contact__method">
              <span className="contact__method-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="contact__method-label">Phone</span>
              <span className="contact__method-value">{personalInfo.phone}</span>
            </a>
            <div className="contact__method">
              <span className="contact__method-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="contact__method-label">Work Mode</span>
              <span className="contact__method-value">可长期驻场 · 接受频繁出差</span>
            </div>
          </div>
        </div>

        <div className="contact__footer">
          <div className="contact__footer-left">
            <span className="contact__footer-logo">ZL</span>
            <span className="contact__footer-name">
              {personalInfo.name} · {personalInfo.title}
            </span>
          </div>
          <div className="contact__footer-right">
            <nav className="contact__footer-nav">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <span className="contact__footer-copy">
              © 2026 Zhao Lei. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}