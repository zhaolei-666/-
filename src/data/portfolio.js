// FDE 求职网站内容数据 — 严格来自简历与用户确认信息

export const personalInfo = {
  name: '赵磊',
  nameEn: 'Zhao Lei',
  title: 'FDE 前沿部署工程师求职者',
  titleEn: 'Forward Deployed Engineer Candidate',
  age: 22,
  email: '18212052419@163.com',
  phone: '18212052419',
  website: 'https://gerenzhao.pages.dev',
  resumeUrl: '/resume/zhao-lei-fde-resume.pdf',
  location: '深圳',
  bio: '2026 届大数据应用技术专业毕业生，具备大模型、Agent、RAG、Prompt 工程与 AI 工作流实操基础。熟悉 Python、SQL、Excel 数据处理及 API 接入流程，能够参与业务需求梳理、原型搭建、Prompt 调优、测试排查与交付文档编写。系统学习腾讯云 ADP 前沿部署工程师（FDE）认证课程，接受长期驻场、频繁出差与项目上线期高强度工作。',
  bioShort: '把一线问题，推进成可运行的 AI 方案',
}

export const stats = [
  { label: 'AI 实践方向', value: '3', suffix: '类' },
  { label: '企业软件协作', value: '4', suffix: '个月' },
  { label: '可展示知识库工作流', value: '1', suffix: '套' },
  { label: '现场交付意愿', value: '可驻场', suffix: '' },
]

export const workExperience = [
  {
    company: '广州星晨软件科技有限公司',
    role: '大数据运维助理',
    period: '2026.03 - 2026.06',
    highlights: [
      '使用 SQL 完成数据查询、清洗、校验和批量处理，配合进行数据链路梳理与异常数据排查。',
      '使用 Excel 完成数据透视、筛选、台账搭建和信息整理，为业务分析提供数据支持。',
      '参与数据接入和问题排查相关工作，理解数据从业务系统到应用端的流转过程。',
      '协助完成测试验证、问题记录和沟通反馈，积累了企业软件项目中的协作与交付意识。',
    ],
  },
]

export const education = [
  {
    organization: '深圳信息职业技术大学',
    role: '大数据技术 · 专科',
    period: '2023.09 - 2026.06',
    highlights: [
      '计算机相关专业，学习数据采集、数据处理、数据库、数据分析及软件开发等课程。',
      '系统学习腾讯云 ADP 前沿部署工程师（FDE）认证课程，覆盖 AI 与 Agent 基础、ADP 产品能力、智能体开发、评测与调优。',
    ],
  },
]

export const projects = [
  {
    id: 'local-ai-knowledge-base',
    title: '本地 AI 知识库与自动化工作流',
    role: '独立开发',
    period: '个人项目',
    category: 'AI 知识库 / 自动化',
    featured: true,
    description:
      '以 Obsidian 为本地知识库载体，通过 CCSwitch 接入 Qwen-Coder、DeepSeek 等模型，把资料采集、AI 整理、知识沉淀与 Skill 复用串联成可运行工作流。',
    details: [
      '本地优先：资料以 Markdown 存储，支持多模型 API 切换，掌握本地资料存储与数据安全管理方法。',
      '信息采集：接入 GitHub 资讯收集工具、Clip 浏览器插件与飞书 CLI，统一导入网页、视频字幕和飞书文档。',
      '自动化闭环：使用定时任务处理日报、周报等重复工作，并将 SOP 与方法论沉淀为可复用 Skill。',
    ],
    tags: ['Obsidian', 'CCSwitch', 'Qwen-Coder', 'DeepSeek', 'Clip', '飞书 CLI', '自动化任务', 'Skill'],
    metrics: [
      { label: '项目状态', value: '可展示' },
      { label: '部署方式', value: '本地优先' },
    ],
  },
  {
    id: 'elderly-health-agent',
    title: '健康问答与谣言甄别智能客服工作流',
    role: '主要负责人',
    period: '项目实践',
    category: 'Agent / 谣言甄别',
    description:
      '围绕老年人健康问题问答和健康谣言识别场景，负责需求拆解、知识内容组织、Prompt 编写及 Coze 工作流配置。',
    details: [
      '针对不会打字、方言识别困难、容易被营销号误导等问题，梳理交互门槛与信息可信度风险。',
      '优化简短问答、风险提示与回答边界，通过多轮对话测试定位回答偏差、知识不足和流程异常。',
      '完成可演示的智能客服原型，验证 AI 在健康科普、谣言甄别与低门槛交互场景中的应用思路。',
    ],
    tags: ['Coze', 'Agent', 'Prompt 工程', '工作流编排', '需求拆解'],
    metrics: [
      { label: '项目角色', value: '负责人' },
      { label: '交付形态', value: '可演示原型' },
    ],
  },
  {
    id: 'personal-website',
    title: '个人网站开发与上线',
    role: '独立开发',
    period: '个人项目',
    category: 'Web 开发 / 部署',
    description:
      '独立完成个人网站的内容规划、页面开发与线上部署，用于展示个人项目、技术能力和学习成果。',
    details: [
      '熟悉从本地开发、调试到线上部署的完整流程。',
      '具备轻量 Web 项目交付和线上问题排查能力。',
    ],
    tags: ['React', 'Vite', '响应式页面', '线上部署', '问题排查'],
    metrics: [
      { label: '项目角色', value: '独立开发' },
      { label: '访问地址', value: '已上线' },
    ],
  },
]

export const advantages = [
  {
    icon: 'prompt',
    title: 'AI 应用与交付',
    subtitle: 'AI Application & Delivery',
    description:
      '具备大模型、Agent、RAG、上下文管理与 Prompt 工程基础，能够参与 AI 工作流配置、POC 验证、现场测试和问题排查。',
    skills: ['Agent', 'RAG', 'Prompt 调优', 'AI 工作流', 'POC 验证'],
  },
  {
    icon: 'nocode',
    title: '数据与开发基础',
    subtitle: 'Data & Development',
    description:
      '能够使用 Python、SQL 和 Excel 完成数据处理，理解 API 调用、JSON 数据处理以及业务数据到应用端的流转过程。',
    skills: ['Python', 'SQL', 'Excel', 'API 调用', 'JSON'],
  },
  {
    icon: 'landing',
    title: '平台与系统理解',
    subtitle: 'Platform & Systems',
    description:
      '熟悉 Coze、Codex、飞书与本地化部署环境，了解 ERP、MES 等企业系统业务流程以及数据接入、接口联调思路。',
    skills: ['Coze', 'Codex', '飞书', '本地化部署', 'ERP / MES'],
  },
  {
    icon: 'thinking',
    title: '项目推进与沟通',
    subtitle: 'Delivery & Communication',
    description:
      '能够拆解需求、判断真伪需求、定义 MVP 范围并完成测试验证、用户培训和文档输出；具备较强的客户沟通与问题闭环意识。',
    skills: ['需求拆解', 'MVP 范围', '测试验证', '用户培训', '交付文档'],
  },
]

export const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '定位', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '能力', href: '#advantages' },
  { label: '联系', href: '#contact' },
]