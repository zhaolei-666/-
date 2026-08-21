import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 移动端地址栏收缩引起的 resize 不触发 ScrollTrigger 重算，防止误触发/跳动
ScrollTrigger.config({ ignoreMobileResize: true })

export { gsap, ScrollTrigger }

export const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ============================================
   首屏 Opening Animation
   黑幕 Loading（计数器 + 进度线）→ 双层幕布揭开 + 视频推近 + 标题逐行遮罩进场
   ============================================ */
export function introHero(section) {
  const q = gsap.utils.selector(section)
  const navbar = document.querySelector('.navbar')
  const counterNum = section.querySelector('.hero__curtain-counter-num')

  if (prefersReduced()) {
    gsap.set(q('.hero__curtain'), { display: 'none' })
    return
  }

  /* ---- 初始状态（全部由 GSAP 设置，无 JS 时内容天然可见） ---- */
  gsap.set(q('.hero__curtain--back'), { display: 'block' })
  gsap.set(q('.hero__curtain--front'), { display: 'flex' })
  gsap.set(q('.hero__video-el'), { scale: 1.16 })
  gsap.set(q('.hero__title'), { scale: 0.965 })
  gsap.set(q('.hero__title-line-inner'), { yPercent: 118, rotate: 2.5 })
  gsap.set(q('.hero__badge'), { autoAlpha: 0, y: 28 })
  gsap.set(q('.hero__subtitle'), { autoAlpha: 0, y: 36 })
  gsap.set(q('.hero__actions'), { autoAlpha: 0, y: 36 })
  gsap.set(q('.hero__scroll-hint'), { autoAlpha: 0 })
  if (navbar) gsap.set(navbar, { autoAlpha: 0, y: -24 })

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  /* ---- Phase 1: Loading（约 2.1s）---- */
  // 计数器 0 → 100，等宽数字补零三位
  const counter = { v: 0 }
  if (counterNum) {
    tl.to(counter, {
      v: 100,
      duration: 1.9,
      ease: 'power2.inOut',
      onUpdate: () => {
        counterNum.textContent = String(Math.floor(counter.v)).padStart(3, '0')
      },
    }, 0.1)
  }
  // 底部进度线同步走满
  tl.fromTo(q('.hero__curtain-progress'),
    { scaleX: 0 },
    { scaleX: 1, duration: 1.9, ease: 'power2.inOut' }, 0.1)

  /* ---- Phase 2: 字标 + 计数器退场 ---- */
  tl
    .to(q('.hero__curtain-wordmark'), {
      autoAlpha: 0, y: -18, duration: 0.55, ease: 'power2.in',
    }, 2.05)
    .to(q('.hero__curtain-counter'), {
      autoAlpha: 0, y: -36, duration: 0.55, ease: 'power2.in',
    }, 2.1)

  /* ---- Phase 3: 幕布揭开 + 内容进场 ---- */
  tl
    // 黑幕揭开 → 露出深红幕布
    .to(q('.hero__curtain--front'), {
      yPercent: -100, duration: 1.15, ease: 'power4.inOut',
    }, 2.35)
    // 深红幕布错峰揭开 → 露出 Hero
    .to(q('.hero__curtain--back'), {
      yPercent: -100, duration: 1.15, ease: 'power4.inOut',
    }, 2.5)
    // 视频从推近状态缓慢回落
    .to(q('.hero__video-el'), {
      scale: 1, duration: 3.0, ease: 'power2.out',
    }, 2.5)
    // 导航归位
    .to(navbar, { autoAlpha: 1, y: 0, duration: 1.0 }, 2.75)
    // 徽章
    .to(q('.hero__badge'), { autoAlpha: 1, y: 0, duration: 1.0 }, 2.8)
    // 标题整体压缩归位
    .to(q('.hero__title'), { scale: 1, duration: 1.9, ease: 'power3.out' }, 2.9)
    // 标题逐行从遮罩中大幅位移进场，轻微旋转归位
    .to(q('.hero__title-line-inner'), {
      yPercent: 0, rotate: 0, duration: 1.55, stagger: 0.14,
    }, 2.95)
    // 副标题
    .to(q('.hero__subtitle'), { autoAlpha: 1, y: 0, duration: 1.1 }, 3.45)
    // CTA
    .to(q('.hero__actions'), { autoAlpha: 1, y: 0, duration: 1.1 }, 3.6)
    // 滚动提示收尾
    .to(q('.hero__scroll-hint'), {
      autoAlpha: 1, duration: 1.3, ease: 'power2.out',
    }, 4.1)
    // 收走幕布
    .set(q('.hero__curtain'), { display: 'none' })

  return tl
}

/* ============================================
   模块标题区进场
   label → 大标题（遮罩揭开 + 大位移 + 轻微倾斜归位）→ 描述
   ============================================ */
export function sectionHeaderReveal(scope) {
  if (prefersReduced()) return

  const label = scope.querySelector('.section-label')
  const title = scope.querySelector('.section-title, .contact__title')
  const desc = scope.querySelector('.section-description, .contact__subtitle')

  const tl = gsap.timeline({
    scrollTrigger: { trigger: scope, start: 'top 72%', once: true },
  })

  if (label) {
    tl.fromTo(label,
      { autoAlpha: 0, y: 26 },
      { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0)
  }
  if (title) {
    tl.fromTo(title,
      {
        autoAlpha: 0,
        yPercent: 65,
        skewY: 3,
        clipPath: 'inset(0% 0% 100% 0%)',
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        skewY: 0,
        clipPath: 'inset(-20% -5% -25% -5%)',
        duration: 1.45,
        ease: 'power4.out',
      }, 0.12)
  }
  if (desc) {
    tl.fromTo(desc,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 1.1, ease: 'power3.out' }, 0.5)
  }
  return tl
}

/* ============================================
   通用 stagger 进场（卡片 / 列表项）
   ============================================ */
export function staggerReveal(targets, trigger, opts = {}) {
  if (prefersReduced()) return
  return gsap.fromTo(targets,
    { autoAlpha: 0, y: opts.distance ?? 90 },
    {
      autoAlpha: 1,
      y: 0,
      duration: opts.duration ?? 1.2,
      ease: 'power3.out',
      stagger: opts.stagger ?? 0.12,
      clearProps: opts.clearProps,
      scrollTrigger: {
        trigger,
        start: opts.start ?? 'top 80%',
        once: true,
      },
    })
}

/* ============================================
   图片 reveal：遮罩揭开 + 内部缩放归位
   ============================================ */
export function imageReveal(visual, img) {
  if (prefersReduced()) return
  const tl = gsap.timeline({
    scrollTrigger: { trigger: visual, start: 'top 85%', once: true },
  })
  tl.fromTo(visual,
    { clipPath: 'inset(100% 0% 0% 0%)' },
    { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.35, ease: 'expo.inOut' }, 0)
  if (img) {
    tl.fromTo(img,
      { scale: 1.45 },
      { scale: 1.12, duration: 2.0, ease: 'expo.out' }, 0.12)
  }
  return tl
}

/* ============================================
   图片轻微视差（scrub）
   需配合图片常驻 scale ~1.12 留出位移余量
   ============================================ */
export function parallax(target, trigger, amount = 7) {
  if (prefersReduced()) return
  return gsap.fromTo(target,
    { yPercent: -amount },
    {
      yPercent: amount,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    })
}
