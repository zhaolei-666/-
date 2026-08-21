import { useLayoutEffect, useRef } from 'react'
import { advantages } from '../data/portfolio'
import { gsap, sectionHeaderReveal, staggerReveal } from '../anim/motion'

// 内联 SVG 图标
const icons = {
  prompt: (
    <>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  nocode: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 17.5h7M17.5 14v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  landing: (
    <>
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  ),
  thinking: (
    <>
      <path d="M9 21h6M12 3a6 6 0 00-4 10.5c.5.5 1 1.5 1 2.5h6c0-1 .5-2 1-2.5A6 6 0 0012 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
}

export default function Advantages() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current

      // 标题区
      sectionHeaderReveal(el)

      // 能力卡片：大幅 stagger 进场
      staggerReveal(el.querySelectorAll('.advantage-card'),
        el.querySelector('.advantages__grid'),
        { stagger: 0.13, distance: 110, duration: 1.35 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="advantages" className="advantages" ref={sectionRef}>
      <div className="container">
        {/* 标题区 */}
        <div className="advantages__header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">
            我的<span className="text-gradient">核心能力</span>
          </h2>
          <p className="section-description">
            从 Prompt 设计到工作流落地，从需求拆解到量化迭代 —— 每一环都有方法论支撑。
          </p>
        </div>

        {/* 能力卡片网格 */}
        <div className="advantages__grid">
          {advantages.map((item, i) => (
            <div key={item.title} className="advantage-card">
              {/* 图标 */}
              <div className="advantage-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  {icons[item.icon]}
                </svg>
              </div>

              {/* 标题 */}
              <div className="advantage-card__title-group">
                <h3 className="advantage-card__title font-display">{item.title}</h3>
                <span className="advantage-card__subtitle">{item.subtitle}</span>
              </div>

              {/* 描述 */}
              <p className="advantage-card__desc">{item.description}</p>

              {/* 技能标签 */}
              <div className="advantage-card__skills">
                {item.skills.map((skill) => (
                  <span key={skill} className="advantage-card__skill">{skill}</span>
                ))}
              </div>

              {/* 装饰角标 */}
              <span className="advantage-card__index">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
