import { useLayoutEffect, useRef } from 'react'
import { projects } from '../data/portfolio'
import { gsap, sectionHeaderReveal, imageReveal, parallax } from '../anim/motion'

function KnowledgeFlow() {
  const stages = ['信息采集', 'AI 整理', '本地沉淀', 'Skill 复用']

  return (
    <div className="project-card__flow">
      <div className="project-card__flow-grid" />
      <span className="project-card__flow-kicker">AI Knowledge Pipeline</span>
      <div className="project-card__flow-track">
        {stages.map((stage, index) => (
          <div key={stage} className="project-card__flow-stage">
            <span className="project-card__flow-index">0{index + 1}</span>
            <span>{stage}</span>
            {index < stages.length - 1 && <span className="project-card__flow-arrow">→</span>}
          </div>
        ))}
      </div>
      <div className="project-card__flow-models">
        <span>Obsidian</span>
        <span>CCSwitch</span>
        <span>Qwen-Coder</span>
        <span>DeepSeek</span>
        <span>飞书 CLI</span>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current

      sectionHeaderReveal(el)

      el.querySelectorAll('.project-card').forEach((card, i) => {
        gsap.fromTo(card,
          { autoAlpha: 0, y: 120 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.4,
            ease: 'power3.out',
            delay: i * 0.18,
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
        <div className="projects__header">
          <span className="section-label">AI Delivery Practice</span>
          <h2 className="section-title">
            面向交付的<span className="text-gradient">AI 实践</span>
          </h2>
          <p className="section-description">
            从真实场景出发，展示 AI 知识库、Agent 工作流与 Web 项目中的需求理解、方案搭建和问题排查过程。
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
            >
              <div className="project-card__visual">
                {project.featured ? (
                  <KnowledgeFlow />
                ) : project.image ? (
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
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <path d="M12 3v18M3 12h18M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </div>
                    <span className="project-card__placeholder-label">{project.category}</span>
                  </div>
                )}
                <div className="project-card__overlay">
                  <span className="project-card__role">{project.role}</span>
                  <span className="project-card__period">{project.period}</span>
                </div>
              </div>

              <div className="project-card__body">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__title font-display">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__details">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div className="project-card__metrics">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="project-card__metric">
                      <span className="project-card__metric-value">{metric.value}</span>
                      <span className="project-card__metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>

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