import { useEffect, useState } from 'react'
import { navLinks, personalInfo } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    // 缓存 section 节点，避免每次滚动都 getElementById
    const sectionEls = ['hero', 'about', 'projects', 'advantages', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    let ticking = false
    let rafId = 0

    const update = () => {
      ticking = false

      const nextScrolled = window.scrollY > 60
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled))

      // 检测当前可见区块（值不变则不触发渲染）
      for (const el of sectionEls) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection((prev) => (prev === el.id ? prev : el.id))
          break
        }
      }
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        rafId = requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-mark">ZL</span>
          <span className="navbar__logo-text">
            Zhao Lei
            <span className="navbar__logo-sub">AI Visual Designer</span>
          </span>
        </a>

        {/* 导航链接 */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${
                  activeSection === link.href.slice(1) ? 'navbar__link--active' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 联系按钮 */}
        <a href="#contact" className="navbar__cta">
          <span>联系我</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  )
}
