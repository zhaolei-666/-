import { useLayoutEffect, useRef } from 'react'
import { personalInfo, navLinks } from '../data/portfolio'
import { gsap, sectionHeaderReveal, staggerReveal } from '../anim/motion'

export default function Contact() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current

      // 标题区：大标题遮罩进场
      sectionHeaderReveal(el)

      // 邮箱大按钮
      gsap.fromTo(el.querySelectorAll('.contact__email-btn'),
        { autoAlpha: 0, y: 44 },
        {
          autoAlpha: 1, y: 0, duration: 1.2, ease: 'power3.out',
          clearProps: 'transform,opacity,visibility',
          scrollTrigger: { trigger: el.querySelector('.contact__main'), start: 'top 60%', once: true },
        })

      // 联系方式列表
      staggerReveal(el.querySelectorAll('.contact__method'),
        el.querySelector('.contact__methods'), { stagger: 0.1, distance: 50 })

      // 底部信息
      staggerReveal(el.querySelectorAll('.contact__footer-left, .contact__footer-right'),
        el.querySelector('.contact__footer'), { stagger: 0.15, distance: 30 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      {/* 背景装饰 */}
      <div className="contact__bg">
        <div className="contact__bg-grid" />
        <div className="contact__bg-orb" />
        <div className="contact__bg-vignette" />
      </div>

      <div className="container contact__container">
        {/* 主标题 */}
        <div className="contact__main">
          <span className="section-label">Get in Touch</span>
          <h2 className="contact__title font-display">
            有项目想<span className="text-gradient">落地</span>？
          </h2>
          <p className="contact__subtitle">
            无论是 AI 生图调优、工作流搭建还是网页设计自动化，
            <br />
            欢迎聊聊你的需求。
          </p>

          {/* 邮箱大按钮 */}
          <a href={`mailto:${personalInfo.email}`} className="contact__email-btn">
            <span className="contact__email-text">{personalInfo.email}</span>
            <span className="contact__email-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* 联系方式列表 */}
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
            <a href={personalInfo.website} target="_blank" rel="noreferrer" className="contact__method">
              <span className="contact__method-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="contact__method-label">Website</span>
              <span className="contact__method-value">{personalInfo.website}</span>
            </a>
          </div>
        </div>

        {/* 底部信息 */}
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
