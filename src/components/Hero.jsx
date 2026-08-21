import { useLayoutEffect, useRef } from 'react'
import { personalInfo } from '../data/portfolio'
import { gsap, introHero, prefersReduced } from '../anim/motion'

export default function Hero() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    // 减少动态偏好：暂停背景视频，省掉持续解码开销
    if (prefersReduced()) {
      sectionRef.current
        ?.querySelectorAll('video')
        .forEach((v) => v.pause())
    }

    const ctx = gsap.context(() => {
      introHero(sectionRef.current)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      {/* 背景视频层 */}
      <div className="hero__video">
        <video
          className="hero__video-el"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* 视频调色层 — 压暗 + 融入站点暗色主题 */}
        <div className="hero__video-tint" />
      </div>

      {/* 叠加层：网格 + 噪点 + 暗角 */}
      <div className="hero__bg-grid" />
      <div className="hero__bg-noise" />
      <div className="hero__bg-vignette" />

      {/* 内容层 */}
      <div className="hero__content container">
        {/* 徽章 */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>AI Visual Designer · Shanghai</span>
        </div>

        {/* 大标题 — 逐行遮罩进场 */}
        <h1 className="hero__title font-display">
          <span className="hero__title-line">
            <span className="hero__title-line-inner">用 Prompt 重新定义</span>
          </span>
          <span className="hero__title-line">
            <span className="hero__title-line-inner">
              <span className="hero__title-accent">视觉生产</span>
            </span>
          </span>
          <span className="hero__title-line">
            <span className="hero__title-line-inner">的边界</span>
          </span>
        </h1>

        {/* 副标题 */}
        <p className="hero__subtitle">
          {personalInfo.title} · 专注 AI 生图、Prompt 工程与自动化工作流搭建，
          用结构化的方法让创意规模化落地。
        </p>

        {/* CTA */}
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            查看作品
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            联系合作
          </a>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      {/* 开场幕布：黑幕（带字标）在上层，深红幕布在下层 */}
      <div className="hero__curtain hero__curtain--back" />
      <div className="hero__curtain hero__curtain--front">
        <span className="hero__curtain-wordmark font-display">
          <span className="hero__curtain-dot" />
          Zhao Lei — AI Visual Designer
        </span>
        {/* Loading 计数器 */}
        <div className="hero__curtain-counter font-display">
          <span className="hero__curtain-counter-num">000</span>
          <span className="hero__curtain-counter-pct">%</span>
        </div>
        {/* 底部全宽进度线 */}
        <div className="hero__curtain-progress" />
      </div>
    </section>
  )
}
