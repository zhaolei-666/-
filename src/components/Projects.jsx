import { useLayoutEffect, useRef } from 'react'
import { projects } from '../data/portfolio'
import { gsap, sectionHeaderReveal, imageReveal, parallax } from '../anim/motion'

export default function Projects() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current

      // 标题区：大标题遮罩进场
      sectionHeaderReveal(el)

      // 项目卡片：错峰大幅进场 + 图片 reveal + 视差
      el.querySelectorAll('.project-card').forEach((card, i) => {
        gsap.fromTo(card,
          { autoAlpha: 0, y: 120 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.4,
            ease: 'power3.out',
            delay: i * 0.18,
            // 结束后清除内联样式，恢复 CSS hover 位移
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: { trigger: card, start: 'top 85%', once: true },
          })

        const visual = card.querySelector('.project-card__visual')
        const img = card.querySelector('.project-card__image')
        if (visual) {
          imageReveal(visual, img)
          if (img) parallax(img, visual, 7)
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        {/* 标题区 */}
        <div className="projects__header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">
            精选<span className="text-gradient">项目</span>
          </h2>
          <p className="section-description">
            从电商生图到 AI 网页设计，每一个项目都是 Prompt 工程与自动化工作流的实战验证。
          </p>
        </div>

        {/* 项目卡片 */}
        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {/* 图片区 */}
              <div className="project-card__visual">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="project-card__placeholder">
                    <div className="project-card__placeholder-grid" />
                    <div className="project-card__placeholder-icon">
                      {project.category.includes('电商') ? (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1" />
                          <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1" />
                          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1" />
                        </svg>
                      ) : (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1" />
                          <path d="M3 9h18M8 21h8" stroke="currentColor" strokeWidth="1" />
                        </svg>
                      )}
                    </div>
                    <span className="project-card__placeholder-label">{project.category}</span>
                  </div>
                )}
                <div className="project-card__overlay">
                  <span className="project-card__role">{project.role}</span>
                  <span className="project-card__period">{project.period}</span>
                </div>
              </div>

              {/* 内容区 */}
              <div className="project-card__body">
                <h3 className="project-card__title font-display">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                {/* 指标 */}
                <div className="project-card__metrics">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="project-card__metric">
                      <span className="project-card__metric-value">{m.value}</span>
                      <span className="project-card__metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* 标签 */}
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
