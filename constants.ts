import { Publication, EducationItem, ExperienceItem, NewsItem } from './types';

export const RESEARCH_INTERESTS = [
  "AR × AI",
  "Proactive AR Assistant"
];

export const NEWS: NewsItem[] = [
  { date: "2026.05", title: "Ph.D. Defense Completed", description: "Completed the Ph.D. defense on May 28, 2026.", highlight: true },
  { date: "2025.11", title: "Featured by UESTC", description: "Featured in UESTC's 'Takes Me to See the World' series on exploring future human-AI symbiosis at the intersection of AR and AI.", highlight: true },
  { date: "2025", title: "Academic Rising Star Honor", description: "Received the Academic Rising Star Honor of UESTC." },
  { date: "2025.10", title: "Volunteer @ ISMAR 2025", description: "Will serve as a Student Volunteer at ISMAR 2025 in Daejeon, South Korea." },
  { date: "2025.07", title: "Paper Accepted to MM 2025", description: "Paper 'InteractGuide' accepted as an Oral Paper at ACM Multimedia 2025.", highlight: true },
  { date: "2025.07", title: "Paper Accepted to UIST 2025", description: "Paper 'AttentionAR' accepted to ACM UIST 2025.", highlight: true },
  { date: "2025.04", title: "Volunteer @ CHI 2025", description: "Served as a Student Volunteer at ACM CHI 2025 in Yokohama, Japan." },
  { date: "2025.03", title: "Visiting KAIST", description: "Started visiting research at KAIST WIT Lab under Prof. Ian Oakley." },
  { date: "2024.10", title: "Best Paper Nomination", description: "Nominated for Best Paper at ACM Multimedia 2024." },
  { date: "2019.11", title: "Best Paper Honorable Mention", description: "Awarded Best Paper Honorable Mention at ICVRV 2019." }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'phd-uestc',
    institution: 'University of Electronic Science and Technology of China (UESTC)',
    degree: 'Ph.D. Candidate in Electronic Information',
    period: '09/2022 - 05/2026',
    location: 'China',
    details: [
      'School of Computer Science and Engineering',
      'Completed Ph.D. defense on May 28, 2026',
      'Awarded the Academic Rising Star Honor of UESTC',
      'GPA: 3.84 / 4.0'
    ]
  },
  {
    id: 'master-swust',
    institution: 'Southwest University of Science and Technology',
    degree: 'M.A. in Computer Science and Technology',
    period: '09/2018 - 06/2021',
    location: 'China',
    details: [
      'Outstanding Master\'s Thesis',
      'Score: 90.88 / 100.0 (Ranked First in grade)',
      'Nominated for Best Paper Award at ICVRV 2019'
    ]
  },
  {
    id: 'bachelor-suse',
    institution: 'Sichuan University of Science and Engineering',
    degree: 'B.S. in Internet of Things Engineering',
    period: '09/2014 - 06/2018',
    location: 'China',
    details: [
      'GPA: 3.7 / 5.0 (Ranked First in major)',
      'National Scholarship (2015-2017)',
      'Sichuan Province Outstanding Graduate (2017-2018)'
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'visiting-kaist',
    role: 'Visiting Ph.D. Student',
    company: 'KAIST WIT Lab',
    period: '03/2025 - 03/2026',
    location: 'Daejeon, South Korea',
    tag: 'Research Visit'
  },
  {
    id: 'thoughtworks',
    role: 'Software Engineer',
    company: 'Thoughtworks',
    period: '07/2021 - 11/2021',
    location: 'Chengdu, Sichuan, China',
    tag: 'Previous Role'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'c1',
    title: 'InteractGuide: LLM-Enhanced Multimodal Reasoning for User-Centric Interaction Recommendations in AR-HRI Authoring',
    authors: 'Yunqiang Pei, Hongrong Yang, Kaiyue Zhang, Guoqing Wang, Peng Wang, Chaoning Zhang, Yang Yang, Heng Tao Shen',
    venue: 'ACM International Conference on Multimedia (MM)',
    year: 2025,
    type: 'conference',
    awards: 'Oral Paper',
    tags: ["AR-HRI", "Interaction Recommendation", "Oral"],
    image: 'imgs/paper_imgs/MM25_img.png',
    pdf: 'https://scholar.google.com/scholar?q=InteractGuide%3A%20LLM-Enhanced%20Multimodal%20Reasoning%20for%20User-Centric%20Interaction%20Recommendations%20in%20AR-HRI%20Authoring'
  },
  {
    id: 'c2',
    title: 'AttentionAR: AR Adaptation and Warning for Real-World Safety via Attention Modeling and MLLM Reasoning',
    authors: 'Yunqiang Pei, Renming Huang, Mingfeng Zha, Guoqing Wang*, Peng Wang, Kang Qiao, Yang Yang, Heng Tao Shen',
    venue: 'ACM Symposium on User Interface Software and Technology (UIST)',
    year: 2025,
    type: 'conference',
    tags: ["Safety", "Attention Modeling", "MLLM"],
    image: 'imgs/paper_imgs/UIST25_img.png',
    pdf: 'https://scholar.google.com/scholar?q=AttentionAR%3A%20AR%20Adaptation%20and%20Warning%20for%20Real-World%20Safety%20via%20Attention%20Modeling%20and%20MLLM%20Reasoning'
  },
  {
    id: 'c3',
    title: 'Improving Interaction Comfort in Authoring Tasks in AR-HRI through Dynamic Dual-Layer Interaction Adjustment',
    authors: 'Yunqiang Pei, Kaiyue Zhang, Hongrong Yang, Yong Tao, Qihang Tang, Jialei Tang, Guoqing Wang*, Zhitao Liu, Ning Xie, Yang Yang, Heng Tao Shen',
    venue: 'ACM International Conference on Multimedia (MM)',
    year: 2024,
    type: 'conference',
    awards: 'Best Paper Nomination',
    tags: ["Best Paper Nomination", "HRI", "Ergonomics"],
    highlight: true,
    image: 'imgs/paper_imgs/MM24_1_img.png',
    pdf: 'https://scholar.google.com/scholar?q=Improving%20Interaction%20Comfort%20in%20Authoring%20Tasks%20in%20AR-HRI%20through%20Dynamic%20Dual-Layer%20Interaction%20Adjustment'
  },
  {
    id: 'c4',
    title: 'Emotion Recognition in HMDs: A Multi-task Approach Using Physiological Signals and Occluded Faces',
    authors: 'Yunqiang Pei, Qihang Tang, Jialei Tang, Mingfeng Zha, Dongyu Xie, Guoqing Wang*, Zhitao Liu, Ning Xie, Yang Yang, Heng Tao Shen',
    venue: 'ACM International Conference on Multimedia (MM)',
    year: 2024,
    type: 'conference',
    tags: ["Emotion Recognition", "HMD", "Physiological"],
    image: 'imgs/paper_imgs/MM24_2_img.png',
    pdf: 'https://dl.acm.org/doi/10.1145/3664647.3681533'
  },
  {
    id: 'c5',
    title: 'Toward Optimized AR-based Human-Robot Interaction Ergonomics: Modeling and Predicting Interaction Comfort',
    authors: 'Yunqiang Pei, Kaiyue Zhang, Ziyang Lu, Mingfeng Zha, Guoqing Wang*, Zhitao Liu, Ning Xie, Yang Yang, Heng Tao Shen',
    venue: 'IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (IEEE VRW)',
    year: 2024,
    type: 'poster',
    tags: ["Ergonomics", "Poster"],
    image: 'imgs/paper_imgs/VR24_img.png',
    pdf: 'https://scholar.google.com/scholar?q=Toward%20Optimized%20AR-based%20Human-Robot%20Interaction%20Ergonomics%3A%20Modeling%20and%20Predicting%20Interaction%20Comfort'
  },
  {
    id: 'c6',
    title: 'ScanERU: Interactive 3D Visual Grounding Based on Embodied Reference Understanding',
    authors: 'Ziyang Lu, Yunqiang Pei, Guoqing Wang*, Peiwei Li, Yang Yang, Yinjie Lei, Hengtao Shen',
    venue: 'AAAI Conference on Artificial Intelligence (AAAI)',
    year: 2024,
    type: 'conference',
    tags: ["3D Visual Grounding", "Embodied AI"],
    image: 'imgs/paper_imgs/AAAI_img.png',
    pdf: 'https://arxiv.org/pdf/2312.15848.pdf'
  },
  {
    id: 'c7',
    title: 'Multimodal Apology: Using WebXR to Repair Trust with Virtual Companion',
    authors: 'Yunqiang Pei, Renming Huang, Guoqing Wang*, Yang Yang, Heng Tao Shen',
    venue: 'IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (IEEE VRW)',
    year: 2023,
    type: 'poster',
    tags: ["WebXR", "Trust Repair", "Poster"],
    pdf: 'https://scholar.google.com/scholar?q=Multimodal%20Apology%3A%20Using%20WebXR%20to%20Repair%20Trust%20with%20Virtual%20Companion'
  },
  {
    id: 'c8',
    title: 'IV-WA: An Information Visual Tool with WebAR',
    authors: 'Shanshan Xiang, Wensheng Tang, Yunqiang Pei, Yadong Wu*, Yonghui Chen, Fupan Wang, Zhiwei Hou',
    venue: 'International Conference on Pattern Recognition and Artificial Intelligence (PRAI)',
    year: 2021,
    type: 'conference',
    tags: ["WebAR", "InfoVis"],
    pdf: 'https://ieeexplore.ieee.org/document/9551068'
  },
  {
    id: 'c9',
    title: 'Wa vis: A Web-based Augmented Reality Text Data Visual Analysis Tool',
    authors: 'Yunqiang Pei, Yadong Wu*, Song Wang, Fupan Wang, Hongyu Jiang, Shijian Xu, Jinquan Zhou',
    venue: 'International Conference on Virtual Reality and Visualization (ICVRV)',
    year: 2019,
    type: 'conference',
    awards: 'Best Paper Honorable Mention Award',
    tags: ["WebAR", "Visual Analysis", "Best Paper Honorable Mention"],
    highlight: true,
    pdf: 'https://ieeexplore.ieee.org/document/8948281'
  },
  {
    id: 'j1',
    title: 'A Review and Outlook of Shared Multi-Modal Trustworthy Human-Robot Interaction Research',
    authors: 'Guoqing Wang (Advisor)*, Yunqiang Pei, Yang Yang, Xing Xu, Zheng Wang, Hengtao Shen',
    venue: 'SCIENCE CHINA Information Sciences (SCIS)',
    year: 2023,
    type: 'journal',
    tags: ["HRI", "Survey", "Science China"],
    image: 'imgs/paper_imgs/SCIS_img.png',
    pdf: 'https://www.sciengine.com/SCIS/doi/10.1007/s11432-022-3619-8'
  },
  {
    id: 'j2',
    title: 'AR-assisted Sign Language Letter Recognition Method Based on Improved MobileNet Network',
    authors: 'Chunhong Liu, Song Wang*, Fupan Wang, Wensheng Tang, Yunqiang Pei, Dongsheng Tian, Yadong Wu',
    venue: 'Journal of System Simulation',
    year: 2023,
    type: 'journal',
    tags: ["AR", "Sign Language", "MobileNet"],
    pdf: 'https://scholar.google.com/scholar?q=AR-assisted%20Sign%20Language%20Letter%20Recognition%20Method%20Based%20on%20Improved%20MobileNet%20Network'
  },
  {
    id: 'j3',
    title: 'WebAR garbage classification information visualization method based on VD-MobileNet network',
    authors: 'Nanshan Liu, Yunqiang Pei, Hao Jiang, Yongguo Han, Yadong Wu*, Fupan Wang, Siheng Yi',
    venue: 'Journal of Graphics',
    year: 2022,
    type: 'journal',
    tags: ["WebAR", "Classification"],
    pdf: 'https://scholar.google.com/scholar?q=WebAR%20garbage%20classification%20information%20visualization%20method%20based%20on%20VD-MobileNet%20network'
  },
  {
    id: 'j4',
    title: 'IV LKWA: an information visual analysis tool with advanced L-K optical flow based WebAR',
    authors: 'Yunqiang Pei, Yadong Wu*, Fupan Wang, Xiaorong Zhang, Hongyu Jiang, Shijian Xu, Wensheng Tang',
    venue: 'Journal of Graphics',
    year: 2020,
    type: 'journal',
    tags: ["Optical Flow", "WebAR"],
    pdf: 'https://scholar.google.com/scholar?q=IV%20LKWA%3A%20an%20information%20visual%20analysis%20tool%20with%20advanced%20L-K%20optical%20flow%20based%20WebAR'
  }
];

export const VOLUNTEERING = [
  { event: 'ISMAR 2025', role: 'Student Volunteer', location: 'Daejeon, South Korea', date: '10/2025' },
  { event: 'ACM CHI 2025', role: 'Student Volunteer', location: 'Yokohama, Japan', date: '04/2025' },
  { event: 'ChinaVIS 2019', role: 'Student Volunteer', location: 'Chengdu, China', date: '07/2019' },
];
