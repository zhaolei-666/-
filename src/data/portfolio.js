// 个人作品集数据 — 来源于简历

export const personalInfo = {
  name: '赵磊',
  nameEn: 'Zhao Lei',
  title: 'AI 视觉设计师',
  titleEn: 'AI Visual Designer',
  age: 22,
  email: '18212052419@163.com',
  phone: '18212052419',
  website: 'https://gerenzhao.pages.dev',
  location: '深圳',
  bio: '专注于 AI 视觉生成与 Prompt 工程的年轻设计师。擅长将模糊业务需求转化为精准的 AI 生成方案，在电商生图、AI 网页设计、AI 漫剧等场景有实战落地经验，善于用数据驱动迭代，以量化思维持续优化输出效果。',
  bioShort: '用 Prompt 重新定义视觉生产的边界',
}

export const stats = [
  { label: 'AI 生图项目', value: '2', suffix: '个' },
  { label: 'Prompt 调优场景', value: '4', suffix: '类' },
  { label: '自动化工作流', value: '3', suffix: '套' },
  { label: '从业经验', value: '8', suffix: '月+' },
]

export const workExperience = [
  {
    company: '深圳电商商业股份有限公司',
    role: '电商运营助理 / AI视觉',
    period: '2026.03 — 2026.06',
    highlights: [
      '针对 AI 文本生成与电商商品生图业务痛点，批量迭代优化 Prompt 指令，精准解决模型内容错乱、画面失真、风格不统一等问题',
      '熟练使用 Dify、Coze 两大 AI 编排平台，独立搭建多节点自动化工作流，覆盖文本提取、内容生成、AI 生图全流程',
      '搭建 AI 输出效果评估标准，从准确度、画面适配度、合规性、完整性多维度量化模型输出质量',
      '对接业务内容团队，挖掘 AI 漫剧、电商生图核心需求，推动 AI 业务场景落地',
    ],
  },
]

export const projects = [
  {
    id: 'ecommerce-ai',
    title: '电商生图 Prompt 优化',
    role: '负责人',
    period: '2026.03 — 2026.06',
    category: 'AI 生图 / 电商',
    description:
      '深耕电商商品 AI 生图场景，精准调试画面构图、色彩、光影、材质、风格统一度相关 Prompt 参数，解决商品变形、细节缺失、风格杂乱等问题，产出符合电商运营标准的商品效果图。基于 Dify、Coze 平台搭建多节点自动化工作流，打通「需求输入 → Prompt 调用 → 内容/图片生成 → 初步筛选输出」全流程。',
    tags: ['Prompt Engineering', 'Dify', 'Coze', '电商生图', '自动化工作流'],
    image: '/images/project-ecommerce.webp',
    metrics: [
      { label: '生图准确率提升', value: '显著' },
      { label: '人工重复操作', value: '替代' },
    ],
  },
  {
    id: 'ai-web-design',
    title: 'AI 网页设计',
    role: '核心开发者',
    period: '2025.11 — 2026.01',
    category: 'AI 网页 / 前端生成',
    description:
      '针对 UI 布局、色彩体系、前端结构、交互逻辑、响应式适配等维度，设计多维度约束式结构化 Prompt，替代传统泛化指令，大幅提升网页整体设计规范性与输出匹配度。通过参数调优、负向 Prompt 约束、示例样本引导，针对性修复 AI 生成常见缺陷。基于 Coze/Dify 搭建网页生成专属自动化工作流。',
    tags: ['结构化 Prompt', '负向约束', 'Coze', 'Dify', '自动化流程'],
    image: '/images/project-webdesign.webp',
    metrics: [
      { label: '输出准确率', value: '显著提升' },
      { label: '调试成本', value: '大幅降低' },
    ],
  },
]

export const advantages = [
  {
    icon: 'prompt',
    title: 'Prompt 工程',
    subtitle: 'Prompt Engineering',
    description:
      '熟练掌握文本、AI 生图双场景 Prompt 设计、迭代调优、结构化输出。擅长解决模型幻觉、输出错乱、风格不符等常见问题，具备批量优化与标准化模板沉淀能力。',
    skills: ['角色设定', 'CoT 思维链', 'Few-shot', '结构化输出约束'],
  },
  {
    icon: 'nocode',
    title: 'AI 无代码平台',
    subtitle: 'No-Code AI Platform',
    description:
      '熟练使用 Dify、Coze 平台，可独立完成多节点工作流搭建、调试、配置与落地上线，适配内容生成、数据提取、AI 生图等主流业务场景。',
    skills: ['Dify', 'Coze', '多节点工作流', '自动化流程'],
  },
  {
    icon: 'landing',
    title: 'AI 应用落地',
    subtitle: 'AI Implementation',
    description:
      '具备 AI 漫剧、电商生图、AI 网页设计场景实战经验。掌握大模型基础参数调优逻辑，具备 AI 输出效果量化评估、数据驱动迭代的实操能力。',
    skills: ['AI 漫剧', '电商生图', 'AI 网页设计', '量化评估'],
  },
  {
    icon: 'thinking',
    title: '业务思维',
    subtitle: 'Business Acumen',
    description:
      '具备优秀的业务需求挖掘与拆解能力，可快速将业务模糊需求转化为可落地的 AI 优化方案。逻辑清晰、擅长问题排查与迭代优化，具备极强的结果导向和量化思维。',
    skills: ['需求拆解', '问题排查', '结果导向', '量化思维'],
  },
]

export const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '作品', href: '#projects' },
  { label: '能力', href: '#advantages' },
  { label: '联系', href: '#contact' },
]
