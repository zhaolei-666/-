import { useLayoutEffect, useRef } from 'react'
import { personalInfo, stats, workExperience, education } from '../data/portfolio'
import { gsap, sectionHeaderReveal, staggerReveal, imageReveal, parallax } from '../anim/motion'

export default function About() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current

      // 标题区：label → 大标题遮罩进场 → 描述
      sectionHeaderReveal(el)

      // 人物图：遮罩揭开 + 缩放归位 + 视差
      const frame = el.querySelector('.about__portrait-frame')
      const img = el.querySelector('.about__portrait-img')
      if (frame) {
        imageReveal(frame, img)
        if (img) parallax(img, frame, 5)
      }

      // 名字标签
      gsap.fromTo(el.querySelectorAll('.about__portrait-tag'),
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: frame, start: 'top 70%', once: true },
        })

      // 联系方式
      staggerReveal(el.querySelectorAll('.about__contact-item'),
        el.querySelector('.about__contacts'), { stagger: 0.08, distance: 26 })

      // 数据统计卡
      staggerReveal(el.querySelectorAll('.about__stat-card'),
        el.querySelector('.about__stats'), { stagger: 0.1, distance: 70 })

      // 工作经历时间线
      staggerReveal(el.querySelectorAll('.about__timeline-item'),
        el.querySelector('.about__timeline'), { stagger: 0.14, distance: 60 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container about__container">
        {/* 顶部区域：人物图 + 个人介绍 */}
        <div className="about__top">
          {/* 人物图 */}
          <div className="about__portrait">
            <div className="about__portrait-frame">
              <img
                src="/images/portrait.jpg"
                alt={personalInfo.name}
                className="about__portrait-img"
                loading="lazy"
                decoding="async"
              />
              {/* 装饰光效 */}
              <div className="about__portrait-glow" />
            </div>
            {/* 名字标签 */}
            <div className="about__portrait-tag">
              <span className="about__portrait-name">{personalInfo.name}</span>
              <span className="about__portrait-role">{personalInfo.title}</span>
            </div>
          </div>

          {/* 个人介绍 */}
          <div className="about__intro">
            <span className="section-label">About</span>
            <h2 className="section-title">
              从业务现场，<br />
              推进到<span className="text-gradient">可运行交付</span>
            </h2>
            <p className="section-description">{personalInfo.bio}</p>

            {/* 联系方式 */}
            <div className="about__contacts">
              <a href={`mailto:${personalInfo.email}`} className="about__contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="about__contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>{personalInfo.phone}</span>
              </a>
              <a href={personalInfo.resumeUrl} className="about__contact-item" download>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>下载简历 PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* 项目数据统计 */}
        <div className="about__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about__stat-card">
              <span className="about__stat-value">
                {stat.value}
                <span className="about__stat-suffix">{stat.suffix}</span>
              </span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* 工作经历 */}
        <div className="about__experience">
          <span className="section-label">Experience</span>
          <div className="about__timeline">
            {workExperience.map((exp) => (
              <div key={exp.company} className="about__timeline-item">
                <div className="about__timeline-marker">
                  <span className="about__timeline-dot" />
                  <span className="about__timeline-line" />
                </div>
                <div className="about__timeline-content">
                  <div className="about__timeline-header">
                    <h3 className="about__timeline-company">{exp.company}</h3>
                    <span className="about__timeline-period">{exp.period}</span>
                  </div>
                  <p className="about__timeline-role">{exp.role}</p>
                  <ul className="about__timeline-list">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 教育经历 */}
        <div className="about__experience">
          <span className="section-label">Education</span>
          <div className="about__timeline">
            {education.map((item) => (
              <div key={item.organization} className="about__timeline-item">
                <div className="about__timeline-marker">
                  <span className="about__timeline-dot" />
                </div>
                <div className="about__timeline-content">
                  <div className="about__timeline-header">
                    <h3 className="about__timeline-company">{item.organization}</h3>
                    <span className="about__timeline-period">{item.period}</span>
                  </div>
                  <p className="about__timeline-role">{item.role}</p>
                  <ul className="about__timeline-list">
                    {item.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
