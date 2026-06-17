# 我使用过的硬件清单：图片、售价、发售时间、传感器与开发教程

![访问量](https://visitor-badge.laobi.icu/badge?page_id=simon.hardware-showcase&left_text=访问量)

> 最后整理：2026-06-17（Asia/Tokyo）。价格、库存、SDK 页面和区域售价会变动；下方尽量保留官方来源和公开资料来源。  
> 访问量徽章部署后建议把 `page_id=simon.hardware-showcase` 改成你的 GitHub 仓库名或网页唯一 ID，例如 `yourname.hardware-showcase`。

## 参考口径

- 智能眼镜部分参考了 [Smartglasses Guide by Oscar Falmer](https://docs.google.com/spreadsheets/d/1zTOeNmBPijGuqm99tdBJhV-hE5NU74sd55H3Fmbf5v4/edit?gid=0#gid=0)。该表标注了设备型号、品牌、使用场景、价格、发布时间、可购状态、重量等字段。
- 用户列表中的 **“1S”** 按 **XREAL 1S** 处理；**“Eye”** 按 **XREAL Eye 6DoF / camera add-on** 处理。
- “镂空图片”优先使用官方拆解图、透明 PNG/WebP 或白底产品图；无法确认透明背景时，使用最接近的官方产品渲染图。

## 总览

| 类别 | 设备 | 图片预览 | 官方售价 / 公开售价 | 发售 / 公开时间 | 传感器与输入概览 |
|---|---|---:|---|---|---|
| HMD & Glass | Microsoft HoloLens 2 | <img src="https://learn.microsoft.com/en-us/hololens/images/hololens2-exploded-view-diagram.png" alt="HoloLens 2 exploded view" width="120"> | 历史发布价 US$3,500；现已停止生产/转入维护期 | 2019-02-24 发布；2019-11-07 发货 | 4 个可见光追踪相机、2 个 IR 眼动相机、ToF 深度、IMU、8MP PV 相机、麦克风阵列 |
| HMD & Glass | XREAL Air 2 Ultra | <img src="https://jp.shop.xreal.com/cdn/shop/files/XREAL_AIR_2_ULTRA_BEST_AR_GLASSES.jpg?v=1721391997&width=1946" alt="XREAL Air 2 Ultra" width="120"> | 首发 US$699；日本官方 ¥99,800 | 2024-01-07 / CES 公布；2024-03 起供货 | 双 3D 环境传感器、IMU、6DoF、手势/头部追踪、平面/图像追踪、深度网格、空间锚点 |
| HMD & Glass | XREAL 1S | <img src="https://resource.xreal.com/www-xreal-com/images/1s/XREAL_1S_ID_1.webp" alt="XREAL 1S" width="120"> | 美国官方 US$449；日本参考 ¥67,980 | 2025-12-01 / XR Kaigi；2026-01 日本出货；CES 2026 全球露出 | XREAL X1 芯片、3DoF 空间显示、2D-to-3D、麦克风阵列；可搭配 XREAL Eye 扩展 6DoF |
| HMD & Glass | XREAL Beam Pro | <img src="https://resource.xreal.com/www-xreal-com/images/beampro/choose_beampro.png" alt="XREAL Beam Pro" width="120"> | US$199 / 128GB Wi‑Fi；US$249 / 256GB Wi‑Fi；US$299 / 256GB 5G | 2024-06 左右公开上市 | 双 50MP 3D 摄像头、nebulaOS 空间 UI、Wi‑Fi 6、5G/LTE 版本、双 USB‑C；作为 XREAL 眼镜空间计算主机 |
| HMD & Glass | XREAL Eye | <img src="https://resource.xreal.com/www-xreal-com/images/eye/eye_herosection_Desktop.webp" alt="XREAL Eye" width="120"> | 美国官方 US$99（页面标注 coming soon）；日本官方 ¥13,980 | 2026 年前后随 XREAL One / 1S 生态推出；区域可售状态不同 | 12MP RGB 相机、1.35g、6DoF/空间锚定扩展、第一视角拍摄 |
| PPG & GSR | Shimmer3R GSR+ | <img src="https://www.shimmersensing.com/wp-content/uploads/2021/07/GSRWHITE_edited-5-600x225.jpg" alt="Shimmer3R GSR+" width="120"> | 官方 €650 | Shimmer3R 平台 2025-08-26 发布/可购；GSR+ 为 Shimmer3R 首批支持模块 | 1 通道 GSR/EDA、PPG/光学脉搏、心率估计、10DoF IMU、辅助 ADC 输入 |
| EEG & IMU | BrainCo OxyZen | <img src="https://item-shopping.c.yimg.jp/i/n/hacoscoshop_8545161" alt="BrainCo OxyZen / Zentopia" width="120"> | BrainCo 官网未公开可抓取 MSRP；日本公开零售 ¥77,000 | 日本渠道销售页显示 2024-01-26 起；公开资料称 2024-10 发布新版 OxyZen | 公开资料明确：脑波/EEG、心率、血氧；未找到可引用的公开 IMU 规格或 SDK |
| EEG & IMU | OpenBCI Ganglion | <img src="https://shop.openbci.com/cdn/shop/files/ganglion-transparent_1946x.png?v=1750796400" alt="OpenBCI Ganglion transparent" width="120"> | 官方 US$624.99 | 2015 Kickstarter / 早期公开；现行官方商店继续销售 | 4 通道 ExG（EEG/EMG/ECG）、MCP3912 AFE、LIS2DH 3 轴加速度计、BLE、200Hz 实时流 |

---

## HMD & Glass

### Microsoft HoloLens 2

<img src="https://learn.microsoft.com/en-us/hololens/images/hololens2-exploded-view-diagram.png" alt="Microsoft HoloLens 2 官方爆炸 / 拆解图" width="520">

| 项目 | 内容 |
|---|---|
| 图片类型 | 官方爆炸/拆解图，最接近“镂空”展示。 |
| 官方售价 | 历史发布价 **US$3,500**；Microsoft 已停止生产 HoloLens 2，设备进入维护/安全更新周期。 |
| 发售时间 | 2019-02-24 发布；2019-11-07 开始发货。 |
| 核心传感器 | 4 个可见光头部追踪相机、2 个 IR 眼动追踪相机、1MP ToF 深度传感器、IMU（加速度计/陀螺仪/磁力计）、8MP 静态照片/1080p30 视频相机。 |
| 交互能力 | 手部追踪、眼动追踪、语音命令、6DoF、空间映射、混合现实捕获。 |
| 官方开发教程 | [HoloLens 2 hardware](https://learn.microsoft.com/en-us/hololens/hololens2-hardware)；[MRTK3 overview](https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk3-overview/)；[MixedRealityToolkit-Unity GitHub](https://github.com/MixedRealityToolkit/MixedRealityToolkit-Unity)；[HoloLens2ForCV samples](https://github.com/microsoft/HoloLens2ForCV)。 |
| 非官方 / 社区资料 | [psiUnity：Unity 2022.3 + MRTK3 + HoloLens 2 的多模态数据流研究项目](https://github.com/sailgt/psiUnity)；[HoloLens subreddit](https://www.reddit.com/r/HoloLens/)；YouTube/博客可检索关键词：`HoloLens 2 MRTK3 Unity OpenXR tutorial`。 |
| 来源 | [Microsoft Learn: HoloLens 2 hardware](https://learn.microsoft.com/en-us/hololens/hololens2-hardware)；[HoloLens 2 公开资料](https://en.wikipedia.org/wiki/HoloLens_2)；[The Verge: HoloLens 2 production/support news](https://www.theverge.com/2024/10/1/24259866/microsoft-hololens-2-discontinuation-support)。 |

---

### XREAL Air 2 Ultra

<img src="https://jp.shop.xreal.com/cdn/shop/files/XREAL_AIR_2_ULTRA_BEST_AR_GLASSES.jpg?v=1721391997&width=1946" alt="XREAL Air 2 Ultra 官方产品图" width="520">

| 项目 | 内容 |
|---|---|
| 图片类型 | 官方白底/产品渲染图。 |
| 官方售价 | 首发价 **US$699**；日本官方商店价格 **¥99,800**。 |
| 发售时间 | 2024-01-07 / CES 2024 公布；2024-03 起供货。 |
| 核心传感器 | 双 3D 环境传感器、IMU；支持 6DoF、深度网格、空间锚点、平面检测、图像追踪、手部/头部追踪。 |
| 显示与音频 | 1920×1080 / 眼、最高 120Hz、52° FOV、约 83g、扬声器与麦克风。 |
| 官方开发教程 | [Getting Started with XREAL SDK](https://docs.xreal.com/Getting%20Started%20with%20XREAL%20SDK)；[XREAL SDK overview](https://docs.xreal.com/)；[Sample Code](https://docs.xreal.com/Sample%20Code)；[Camera](https://docs.xreal.com/Camera/Camera)；[Plane Detection](https://docs.xreal.com/Plane%20Detection)；[Image Tracking](https://docs.xreal.com/Image%20Tracking/intro)；[Depth Mesh](https://docs.xreal.com/Depth%20Mesh/NormalMesh)；[Spatial Anchor](https://docs.xreal.com/Spatial%20Anchor/intro)；[MRTK3 Integration](https://docs.xreal.com/MRTK3_Integration)。 |
| 非官方 / 社区资料 | [XREAL Dev GitHub](https://github.com/XREAL-Dev)；[XREAL community Discord](https://discord.gg/xreal)；[r/Xreal](https://www.reddit.com/r/Xreal/)；可检索关键词：`XREAL Air 2 Ultra Unity SDK hand tracking 6DoF tutorial`。 |
| 来源 | [XREAL Developer: Air 2 Ultra](https://developer.xreal.com/)；[XREAL SDK docs](https://docs.xreal.com/)；[XREAL 日本官方商店: Air 2 Ultra](https://jp.shop.xreal.com/products/xreal-air-2-ultra)；[Smartglasses Guide](https://docs.google.com/spreadsheets/d/1zTOeNmBPijGuqm99tdBJhV-hE5NU74sd55H3Fmbf5v4/edit?gid=0#gid=0)。 |

---

### XREAL 1S

<img src="https://resource.xreal.com/www-xreal-com/images/1s/XREAL_1S_ID_1.webp" alt="XREAL 1S 官方产品图" width="520">

| 项目 | 内容 |
|---|---|
| 图片类型 | 官方产品渲染图。 |
| 官方售价 | 美国官方商店 **US$449**；参考表记录日本价 **¥67,980**。 |
| 发售时间 | 2025-12-01 / XR Kaigi 首次公开；2026-01 日本出货；CES 2026 全球展示。 |
| 核心能力 / 传感器 | XREAL X1 芯片、3DoF 空间显示、眼镜端 2D-to-3D、3ms M2P、自动变色/调光、麦克风阵列；搭配 XREAL Eye 后可扩展 6DoF。 |
| 显示与音频 | Sony Micro-OLED、1200P、120Hz、最高 700 nits、52° FOV、Bose 调音。 |
| 官方开发教程 | XREAL 1S 本体更偏消费/显示设备；开发侧重点在 XREAL SDK 与 Eye/Beam Pro 组合：[Getting Started with XREAL SDK](https://docs.xreal.com/Getting%20Started%20with%20XREAL%20SDK)；[XREAL SDK release notes](https://docs.xreal.com/Release%20Note/Release%20Note)；[Camera](https://docs.xreal.com/Camera/Camera)。 |
| 非官方 / 社区资料 | [r/Xreal](https://www.reddit.com/r/Xreal/)；[XREAL Dev GitHub](https://github.com/XREAL-Dev)；可检索关键词：`XREAL 1S XREAL Eye SDK 6DoF tutorial`。 |
| 来源 | [XREAL 1S 官方页](https://www.xreal.com/1s/)；[XREAL 官方商店: XREAL 1S](https://www.xreal.com/shop/xreal-1s)；[Smartglasses Guide](https://docs.google.com/spreadsheets/d/1zTOeNmBPijGuqm99tdBJhV-hE5NU74sd55H3Fmbf5v4/edit?gid=0#gid=0)。 |

---

### XREAL Beam Pro

<img src="https://resource.xreal.com/www-xreal-com/images/beampro/choose_beampro.png" alt="XREAL Beam Pro 官方产品图" width="520">

| 项目 | 内容 |
|---|---|
| 图片类型 | 官方白底/产品图。 |
| 官方售价 | **US$199** / 128GB Wi‑Fi；**US$249** / 256GB Wi‑Fi；**US$299** / 256GB 5G。 |
| 发售时间 | 2024-06 左右公开上市。 |
| 核心硬件 / 传感器 | 双 50MP 3D 摄像头、Snapdragon 平台、6.5 英寸 FHD LCD、Wi‑Fi 6、Bluetooth 5.2、双 USB‑C、可扩展 microSD。 |
| 与眼镜的关系 | 作为 XREAL 眼镜的空间计算主机：可把 Android/Play Store 应用放入 3D 空间；与 Air/Air 2/One 系列支持 3DoF，与 Air 2 Ultra 支持完整 6DoF 体验。 |
| 官方开发教程 | [Beam Pro product page](https://www.xreal.com/beampro/)；[Getting Started with XREAL SDK](https://docs.xreal.com/Getting%20Started%20with%20XREAL%20SDK)；[XREAL SDK release notes](https://docs.xreal.com/Release%20Note/Release%20Note)。 |
| 非官方 / 社区资料 | [r/Xreal](https://www.reddit.com/r/Xreal/)；可检索关键词：`XREAL Beam Pro developer mode SDK tutorial`、`XREAL Beam Pro spatial app tutorial`。 |
| 来源 | [XREAL Beam Pro 官方页](https://www.xreal.com/beampro/)；[XREAL SDK docs](https://docs.xreal.com/)；公开媒体报道。 |

---

### XREAL Eye

<img src="https://resource.xreal.com/www-xreal-com/images/eye/eye_herosection_Desktop.webp" alt="XREAL Eye 官方产品图" width="520">

| 项目 | 内容 |
|---|---|
| 图片类型 | 官方产品渲染图。 |
| 官方售价 | 美国官方商店 **US$99**，页面标注 `coming soon`；日本官方商店 **¥13,980**。 |
| 发售时间 | 2026 年前后随 XREAL One / 1S 生态推出；不同区域可售状态不同。 |
| 核心传感器 | 12MP RGB 相机；重量约 1.35g；用于 XREAL One 系列/1S 生态的 6DoF 与空间锚定扩展，也可用于第一视角拍摄。 |
| SDK 关联 | XREAL SDK 3.1.0 开始支持 XREAL One 系列配合 Eye 的 6DoF tracking，并增加 Eye RGB camera 支持。 |
| 官方开发教程 | [XREAL Eye 官方页](https://www.xreal.com/eye/)；[XREAL SDK release notes](https://docs.xreal.com/Release%20Note/Release%20Note)；[Camera docs](https://docs.xreal.com/Camera/Camera)；[Spatial Anchor](https://docs.xreal.com/Spatial%20Anchor/intro)。 |
| 非官方 / 社区资料 | [r/Xreal](https://www.reddit.com/r/Xreal/)；[XREAL Dev GitHub](https://github.com/XREAL-Dev)；可检索关键词：`XREAL Eye RGB camera SDK Unity`、`XREAL One Eye 6DoF SDK`。 |
| 来源 | [XREAL Eye 官方页](https://www.xreal.com/eye/)；[XREAL 官方商店](https://www.xreal.com/shop/)；[XREAL 日本官方商店](https://jp.shop.xreal.com/)；[XREAL SDK release notes](https://docs.xreal.com/Release%20Note/Release%20Note)。 |

---

## PPG & GSR

### Shimmer3R GSR+

<img src="https://www.shimmersensing.com/wp-content/uploads/2021/07/GSRWHITE_edited-5-600x225.jpg" alt="Shimmer3R GSR+ 官方白底图" width="520">

| 项目 | 内容 |
|---|---|
| 图片类型 | 官方白底产品图。 |
| 官方售价 | **€650**。 |
| 发售时间 | Shimmer3R 平台 2025-08-26 发布并开放购买；GSR+ 属于首批 Shimmer3R 支持设备之一。 |
| 核心传感器 | 1 通道 GSR / EDA、PPG / 光学脉搏、心率估计、10DoF IMU 运动信号、辅助模拟输入。 |
| 硬件规格摘记 | STM32U5A5 MCU、Bluetooth Vela IF820、8GB microSD、400mAh 电池、USB‑C。GSR 测量频段 DC–15.9Hz；GSR 范围覆盖 10kΩ–4.7MΩ。 |
| 官方开发教程 | [Shimmer3R GSR+ product page](https://www.shimmersensing.com/product/shimmer3r-gsr-unit/)；[GSR+ User Guide PDF](https://shimmersensing.com/wp-content/docs/support/documentation/GSR_User_Guide_rev1.13.pdf)；[GSR+ Spec Sheet PDF](https://www.shimmersensing.com/wp-content/uploads/2025/11/GSR-specs-sheet-S3R.pdf)；官方页面提供 LabVIEW、MATLAB、Android、C# instrument drivers、sample data 与 ConsensysPRO 软件入口。 |
| 非官方 / 社区资料 | [pyshimmer：非官方 Python API](https://github.com/seemoo-lab/pyshimmer)；[pyshimmer PyPI](https://pypi.org/project/pyshimmer/)；可检索关键词：`Shimmer3 GSR Python streaming tutorial`、`Shimmer GSR Lab Streaming Layer`。 |
| 来源 | [Shimmer3R GSR+ product page](https://www.shimmersensing.com/product/shimmer3r-gsr-unit/)；[Shimmer3R release news](https://www.shimmersensing.com/shimmer3r-release/)；[GSR+ User Guide](https://shimmersensing.com/wp-content/docs/support/documentation/GSR_User_Guide_rev1.13.pdf)。 |

---

## EEG & IMU

### BrainCo OxyZen

<img src="https://item-shopping.c.yimg.jp/i/n/hacoscoshop_8545161" alt="BrainCo OxyZen / Zentopia 产品图" width="520">

| 项目 | 内容 |
|---|---|
| 图片类型 | 日本公开零售页产品图；BrainCo 官网页面当前可抓取文本较少。 |
| 官方售价 | BrainCo 官网未公开可抓取 MSRP；日本 Hacosco 公开零售价 **¥77,000**。 |
| 发售 / 公开时间 | 日本渠道销售页显示销售期从 2024-01-26；公开资料称 BrainCo 于 2024-10 发布新版 OxyZen。 |
| 核心传感器 | 公开资料明确：脑波 / EEG、心率、血氧。心率与血氧通常对应 PPG / SpO2 模块，但该页没有给出完整硬件芯片或采样规格。 |
| IMU 状态 | 未找到可引用的公开 IMU 规格、原始数据 API 或 SDK；如果要在论文/作品集中写 “EEG & IMU”，建议后续用设备 BLE 服务、官方手册或 App 数据导出来验证。 |
| 官方开发教程 | 未找到 OxyZen 专属公开 SDK/API 教程。可保留 [BrainCo OxyZen 官方产品入口](https://www.brainco.tech/product/detail/7) 和 App/产品说明作为官方资料。 |
| 非官方 / 泛用分析资料 | [MNE-Python tutorials](https://mne.tools/stable/auto_tutorials/index.html)（EEG/脑电分析）；[NeuroKit2](https://neuropsychology.github.io/NeuroKit/)（PPG/EDA/HRV 等生理信号分析）。注意：这些不是 OxyZen 专属教程，也不代表一定能直接读取 OxyZen 原始数据。 |
| 来源 | [BrainCo 产品页](https://www.brainco.tech/product/detail/7)；[Hacosco / Yahoo Japan OxyZen retail page](https://store.shopping.yahoo.co.jp/hacoscoshop/8545161.html)；公开资料。 |

---

### OpenBCI Ganglion

<img src="https://shop.openbci.com/cdn/shop/files/ganglion-transparent_1946x.png?v=1750796400" alt="OpenBCI Ganglion 透明背景官方图" width="520">

| 项目 | 内容 |
|---|---|
| 图片类型 | 官方透明 PNG 产品图。 |
| 官方售价 | 当前官方商店 **US$624.99**。历史上 Ganglion 曾在 2015 Kickstarter 期间以更低早鸟价公开；作品集中建议写当前官方价并补充“历史众筹价不同”。 |
| 发售 / 公开时间 | 2015 年 Kickstarter / 早期公开；现行官方商店继续销售。 |
| 核心传感器 | 4 通道高阻抗差分 ExG 输入，可用于 EEG/EMG/ECG；MCP3912 analog front end；LIS2DH 3 轴加速度计；BLE；200Hz 实时数据流。 |
| 数据/协议 | BLE 连接；Ganglion 数据包为 20 bytes；支持 18/19 bit 压缩传输；加速度计通过命令开启/关闭。 |
| 官方开发教程 | [Getting Started with Ganglion](https://docs.openbci.com/GettingStarted/Boards/GanglionGS/)；[Ganglion Specs](https://docs.openbci.com/Ganglion/GanglionSpecs/)；[Ganglion Data Format](https://docs.openbci.com/Ganglion/GanglionDataFormat/)；[Ganglion SDK](https://docs.openbci.com/Ganglion/GanglionSDK/)；[Ganglion Programming Tutorial](https://docs.openbci.com/Ganglion/GanglionProgramming/)；[OpenBCI GUI](https://docs.openbci.com/Software/OpenBCISoftware/GUIDocs/)；官方 EEG/EMG/ECG setup 教程。 |
| 非官方 / 社区资料 | [BrainFlow code samples](https://brainflow.readthedocs.io/en/stable/Examples.html)；[BrainFlow GitHub](https://github.com/brainflow-dev/brainflow)；[OpenBCI Forum](https://openbci.com/forum/)；[A tutorial on electrogastrography using OpenBCI Ganglion](https://arxiv.org/abs/2509.17260)。 |
| 来源 | [OpenBCI Ganglion shop](https://shop.openbci.com/products/ganglion-board)；[OpenBCI Ganglion specs](https://docs.openbci.com/Ganglion/GanglionSpecs/)；[OpenBCI Ganglion data format](https://docs.openbci.com/Ganglion/GanglionDataFormat/)；[OpenBCI Ganglion SDK](https://docs.openbci.com/Ganglion/GanglionSDK/)。 |

---

## 可直接复用的访问量代码

```md
![访问量](https://visitor-badge.laobi.icu/badge?page_id=simon.hardware-showcase&left_text=访问量)
```

部署到 GitHub Pages、README 或静态网页时，把 `page_id` 换成自己的唯一 ID。比如：

```md
![访问量](https://visitor-badge.laobi.icu/badge?page_id=yourname.your-repo.hardware-page&left_text=访问量)
```

## 还需要人工确认的点

1. **BrainCo OxyZen**：公开网页没有给出完整传感器规格、IMU、SDK/API 与官方 MSRP。当前条目使用 BrainCo 官方产品入口 + 日本零售渠道 + 公开资料交叉整理，建议后续用包装、说明书、App 数据导出或 BLE service scan 验证。
2. **XREAL Eye / 1S**：区域可售状态变化快；美国页与日本页价格/状态不同，作品集中建议同时标注“按地区”。
3. **图片热链**：Markdown 使用官方/公开来源图片链接；若要长期展示，建议下载到项目的 `assets/` 目录并注明来源，避免原站图片 URL 变化导致失效。
