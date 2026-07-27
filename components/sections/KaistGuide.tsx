import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  Bus,
  CalendarClock,
  Check,
  ClipboardCheck,
  Copy,
  ExternalLink,
  FileCheck2,
  HeartPulse,
  Languages,
  Map,
  MessageSquareText,
  Plane,
  Share2,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';

const UPDATED_AT = 'July 27, 2026';

const guideSections = [
  { id: 'roadmap', label: '申请路线' },
  { id: 'documents', label: '材料清单' },
  { id: 'contact', label: '联系导师' },
  { id: 'arrival', label: '抵达大田' },
  { id: 'settling-in', label: '落地手续' },
  { id: 'campus-life', label: '校园生活' },
  { id: 'pitfalls', label: '避坑提醒' },
  { id: 'resources', label: '官方入口' },
];

const timeline = [
  {
    time: '尽早准备',
    title: '先联系实验室',
    detail: '围绕研究契合度联系 KAIST 教授，确认研究主题、访问期限、预期产出、经费来源和日常协作方式。拿到实验室明确接收意见后，再进入行政流程。',
  },
  {
    time: '按季度截止日期前',
    title: '提交 VSR 材料',
    detail: '当前官网按季度批次接收申请。目标为 1 月、4 月、7 月或 10 月开始时，应分别在上一年 10 月、当年 1 月、4 月或 7 月底前完成申请。',
  },
  {
    time: '审核通过后',
    title: '在线注册与缴费',
    detail: '收到 IRT 指引后进入 IO 系统。所有签名、勾选项和附件要完整；只有点击 Submit 才会进入审核，Temporarily Save 不等于提交。',
  },
  {
    time: '获批后立即推进',
    title: '签证与健康材料',
    detail: '根据 ISSS、所在国韩国使领馆和个人国籍要求准备签证。记录中的 D-2-5 流程仅作经验参考，材料清单和时间必须以最新通知为准。',
  },
  {
    time: '出发前 1-2 个月',
    title: '住宿、保险与抵达信息',
    detail: 'VSR 当前需要自行或由实验室安排住宿。同步准备健康检查、旅行保险、抵达表、通信方案和从机场前往大田的路线。',
  },
  {
    time: '抵达后一周',
    title: '完成校内与居留手续',
    detail: '参加 orientation，领取注册材料和学生证，按通知办理 Residence Card，并完成实验室安全培训、校园账号与必要的银行事务。',
  },
];

const documentGroups = [
  {
    title: '学生材料',
    items: [
      '有效护照扫描件与符合要求的证件照',
      '英文在读证明，且学生身份覆盖完整访问期限',
      '英文成绩单与当前官网要求的学术证明',
      '英语成绩或经 KAIST 接收教授认可的等效能力证明',
    ],
  },
  {
    title: '学校与实验室材料',
    items: [
      'VSR Administrative Support Application',
      '由本校导师签署的 VSR Participation Confirmation Letter',
      'KAIST 接收实验室出具的 Research Student Confirmation Form',
      'Research Allowance Confirmation，仅在有研究补助时准备',
    ],
  },
  {
    title: '出发前材料',
    items: [
      '使领馆要求的签证材料及多份电子备份',
      'Arrival Form 与最终确认的抵达日期',
      '按最新通知完成的 MMR、TB/胸片等健康材料',
      '覆盖落地初期保险空档的旅行或留学保险',
    ],
  },
];

const interviewQuestions = [
  '为什么选择这个实验室和 KAIST，而不是只介绍学校排名？',
  '你的研究问题与实验室现有方向具体在哪里交叉？',
  '希望访问多久，什么时候开始，经费由谁承担？',
  '访问期间希望形成什么成果，如何划分合作与署名？',
  '导师期待的会议频率、实验室出勤和独立研究比例是什么？',
  '设备、被试、伦理审批和数据访问是否需要提前准备？',
];

const firstWeekItems = [
  { icon: BadgeCheck, title: '报到与学生证', detail: '优先按 IRT/ISSS 邮件参加 orientation，领取注册材料、学号和学生证。' },
  { icon: ShieldCheck, title: 'Residence Card', detail: '按学校通知提交居留登记材料；姓名拼写必须与护照、签证和系统记录完全一致。' },
  { icon: WalletCards, title: '银行与支付', detail: '记录中的经验是取得 Residence Card 后办理更顺畅。准备一张可境外使用的银行卡作为过渡。' },
  { icon: HeartPulse, title: '保险衔接', detail: 'D-2 持有人通常会纳入韩国国民健康保险，但覆盖可能在取得居留号码后才开始，落地初期不要留空档。' },
  { icon: BookOpenCheck, title: '实验室入门', detail: '完成安全培训，向实验室确认门禁、打印、Wi-Fi、设备借用、数据和例会规则。' },
  { icon: Languages, title: '语言支持', detail: 'KAIST Language Center 提供韩语课程；在校国际学生还可关注免费的 Language Partner Program。' },
];

const pitfalls = [
  '不要把旧攻略里的日期、宿舍、费用或签证材料直接照搬。VSR 政策已经发生变化。',
  '在线系统中 Temporarily Save 不是正式提交；提交后仍要确认状态和邮件回执。',
  '在读证明、邀请材料、签证、保险和抵达表中的起止日期应保持一致。',
  '使用稳定邮箱，定期检查垃圾邮件；重要附件同时保留本地和云端备份。',
  '不要公开转发护照、签名、学号、住址、房间号、银行信息或包含他人联系方式的邮件截图。',
  '研究补助、指导费、设备使用和论文署名都应在出发前与导师书面确认。',
  '接到自称使领馆、警方或移民部门的电话时，不转账、不安装远程软件，先通过官网号码独立核验。',
];

const officialResources = [
  {
    title: 'VSR Program Guidance',
    description: '当前申请批次、材料、费用、住宿政策和联系方式。',
    url: 'https://io.kaist.ac.kr/menu/io.do?mguid=D4CD2D0A-21E5-E511-940C-2C44FD7DF8B9',
  },
  {
    title: 'Health Insurance',
    description: '健康表、MMR/TB 要求、NHI 与保险空档说明。',
    url: 'https://io.kaist.ac.kr/menu/io.do?mguid=8ACD2D0A-21E5-E511-940C-2C44FD7DF8B9',
  },
  {
    title: 'First Days at KAIST',
    description: '抵达后第一周的注册、居留证和校园手续。',
    url: 'https://io.kaist.ac.kr/menu/io.do?mguid=88CD2D0A-21E5-E511-940C-2C44FD7DF8B9',
  },
  {
    title: 'Campus Shuttle',
    description: 'Main、Munji 与 Hwaam 之间的最新校车时刻。',
    url: 'https://www.kaist.ac.kr/en/html/kaist/01200102.html',
  },
  {
    title: 'Campus Map',
    description: '食堂、银行、ATM、宿舍、图书馆和运动设施位置。',
    url: 'https://www.kaist.ac.kr/site/map/index.html',
  },
  {
    title: 'Cafeteria Menu',
    description: '校内食堂营业时间、价格、菜单和过敏原信息。',
    url: 'https://www.kaist.ac.kr/en/html/campus/053001.html',
  },
  {
    title: 'Language Partner',
    description: '面向在校国际学生的免费一对一语言伙伴项目。',
    url: 'https://lang.kaist.ac.kr/pages/view/lang_03_03?lang=en',
  },
];

const KaistGuide: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyGuideLink = async () => {
    const link = `${window.location.href.split('#')[0]}#kaist-guide`;
    await navigator.clipboard.writeText(link);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <header className="border-b border-slate-200 pb-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700">
              <Map className="h-4 w-4" />
              Personal field notes, privacy-safe edition
            </div>
            <h2 className="text-3xl font-bold text-slate-900">KAIST 访问学习攻略</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              基于我在 KAIST 一年访问学习期间的实际记录，整理给准备申请访问学生或赴 KAIST 学习的学弟学妹。这里只保留可公开、可复用的流程经验，并以当前官方信息为准。
            </p>
            <p className="mt-2 text-xs text-slate-400">Last reviewed: {UPDATED_AT}</p>
          </div>
          <button
            type="button"
            onClick={copyGuideLink}
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
            {copied ? '链接已复制' : '复制攻略链接'}
          </button>
        </div>
      </header>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
          <div>
            <h3 className="font-bold text-amber-900">先看 2026 年政策变化</h3>
            <p className="mt-1 text-sm leading-relaxed text-amber-900/80">
              当前官网已改为季度批次申请，并明确写明 KAIST 不再为 VSR 统一提供宿舍支持，需要学生自行安排或由接收实验室协助。我的 2025 年宿舍经历不能再直接套用。
            </p>
            <a
              href={officialResources[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-900 underline underline-offset-4"
            >
              查看当前 VSR 官方页面
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <nav aria-label="KAIST guide sections" className="flex flex-wrap gap-2 border-b border-slate-200 pb-5">
        {guideSections.map((section) => (
          <button
            type="button"
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-700"
          >
            {section.label}
          </button>
        ))}
      </nav>

      <GuideSection id="roadmap" icon={CalendarClock} title="申请路线">
        <div className="relative ml-2 border-l border-blue-200 pl-6">
          {timeline.map((item, index) => (
            <div key={item.title} className="relative pb-7 last:pb-0">
              <span className="absolute -left-[31px] top-1 flex h-3 w-3 rounded-full border-2 border-white bg-blue-500 ring-1 ring-blue-200" />
              <div className="text-xs font-semibold text-blue-600">{item.time}</div>
              <h4 className="mt-1 font-bold text-slate-900">{item.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              {index < timeline.length - 1 && <span className="sr-only">Next step</span>}
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection id="documents" icon={FileCheck2} title="材料清单">
        <div className="grid gap-4 md:grid-cols-3">
          {documentGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="font-bold text-slate-900">{group.title}</h4>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection id="contact" icon={MessageSquareText} title="联系导师与面试">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h4 className="font-bold text-slate-900">第一封邮件只回答四件事</h4>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              {[
                '你是谁：学校、阶段和研究方向。',
                '为什么找他：明确对应一至两项研究工作。',
                '你准备做什么：用几句话说清问题、方法和可行的产出。',
                '你希望什么：访问时间、经费情况和简历/主页附件。',
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50/70 p-5">
            <h4 className="font-bold text-slate-900">面试前应准备的问题</h4>
            <ul className="mt-4 space-y-3">
              {interviewQuestions.map((question) => (
                <li key={question} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GuideSection>

      <GuideSection id="arrival" icon={Plane} title="抵达韩国与前往大田">
        <div className="grid gap-5 md:grid-cols-2">
          <RouteOption
            icon={Bus}
            title="行李多：机场大巴"
            description="从仁川机场前往大田的城际机场巴士换乘少，更适合携带多个行李箱。购票时确认大田的具体下车站，不要只凭旧攻略中的中文译名判断。下车后可用 Kakao T 或出租车前往住处。"
          />
          <RouteOption
            icon={Building2}
            title="时间可控：AREX + KTX"
            description="机场铁路前往首尔站，再乘 KTX 到大田站，最后打车或换乘公共交通。整体更快，但对大件行李和换乘体力要求更高。"
          />
        </div>
        <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
          {[
            '提前准备可境外支付的银行卡和少量韩元',
            '机场购买或充值 T-money 交通卡',
            '提前安装 Kakao T、地图和翻译工具',
            '准备落地流量，避免只依赖机场 Wi-Fi',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 border-t border-slate-200 pt-3">
              <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              {item}
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection id="settling-in" icon={ClipboardCheck} title="落地后的第一周">
        <div className="grid gap-4 md:grid-cols-2">
          {firstWeekItems.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection id="campus-life" icon={Building2} title="校园与日常生活">
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
          <LifeNote title="Main 与 Munji 通勤">
            学校目前提供 Main Campus、Munji Campus 和 Hwaam Dormitory 之间的校车。班次会调整，不要长期保存截图，出门前查看官方时刻表。
          </LifeNote>
          <LifeNote title="吃饭与校园地图">
            校园地图可筛选食堂、银行、ATM、便利店、健身房和图书馆；食堂官网会更新营业时间、菜单、价格及过敏原。
          </LifeNote>
          <LifeNote title="电话卡、银行与线上服务">
            预付电话卡适合落地过渡。部分银行和线上服务需要 Residence Card 与韩国手机号，姓名顺序和拼写不一致很容易导致认证失败。
          </LifeNote>
          <LifeNote title="快递与网购">
            韩国宿舍或公寓未必有国内式驿站和取件码。填写地址时不要公开房间号，并通过物流状态和住宿管理方确认取件方式。
          </LifeNote>
          <LifeNote title="韩语学习">
            付费韩语课程按月开放；符合条件的 KAIST 在校国际学生可关注 Language Partner Program，由双方协商时间和内容。
          </LifeNote>
          <LifeNote title="研究协作">
            尽早参加组会、HCI lunch、学术讲座和同领域活动。访问学习的价值不仅是完成个人项目，更在于建立稳定的合作节奏和反馈渠道。
          </LifeNote>
        </div>
      </GuideSection>

      <GuideSection id="pitfalls" icon={AlertTriangle} title="容易踩坑的地方">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {pitfalls.map((item, index) => (
            <div key={item} className="grid gap-2 py-4 sm:grid-cols-[36px_1fr]">
              <span className="font-mono text-sm font-bold text-slate-400">{String(index + 1).padStart(2, '0')}</span>
              <p className="text-sm leading-relaxed text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection id="resources" icon={ExternalLink} title="官方入口">
        <div className="grid gap-3 sm:grid-cols-2">
          {officialResources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[96px] items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-sm"
            >
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-700">{resource.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{resource.description}</p>
              </div>
              <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 group-hover:text-blue-600" />
            </a>
          ))}
        </div>
      </GuideSection>

      <footer className="rounded-lg border border-slate-200 bg-slate-100 p-5 text-sm leading-relaxed text-slate-600">
        <div className="flex items-start gap-3">
          <Copy className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
          <p>
            本页从个人记录中仅提取通用经验。私人邮箱、电话、账号、证件、学号、住址、房间号、银行信息、私人对话和个人事件均未公开。政策具有时效性，签证、住宿、保险和费用请以 KAIST、韩国使领馆及相关机构的最新书面通知为准。
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

const GuideSection: React.FC<{
  id: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}> = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-24 border-b border-slate-200 pb-10 last:border-b-0">
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
        <Icon className="h-4.5 w-4.5" />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    </div>
    {children}
  </section>
);

const RouteOption: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-600">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="font-bold text-slate-900">{title}</h4>
    </div>
    <p className="mt-4 text-sm leading-relaxed text-slate-600">{description}</p>
  </div>
);

const LifeNote: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="border-t border-slate-200 pt-4">
    <h4 className="font-bold text-slate-900">{title}</h4>
    <p className="mt-2 text-sm leading-relaxed text-slate-600">{children}</p>
  </div>
);

export default KaistGuide;
