'use client';
import {useState} from 'react';
import {
  ArrowRight,
  BarChart3,
  Search,
  MousePointerClick,
  PenTool,
  MapPin,
  BrainCircuit,
  Menu,
  X,
  ChevronDown,
  CheckCircle2,
  Target,
  Layers3,
  ChartNoAxesCombined,
  TrendingUp,
  Sparkles,
  Zap,
  ShieldCheck,
  Activity
} from 'lucide-react';

const services=[
 {icon:Search,title:'SEO tổng thể',text:'Xây nền tảng tăng trưởng organic bền vững từ kỹ thuật, nội dung đến độ uy tín của website.'},
 {icon:BrainCircuit,title:'SEO & AI Search',text:'Tối ưu khả năng xuất hiện trên Google và các nền tảng tìm kiếm, trả lời bằng AI.'},
 {icon:MousePointerClick,title:'Google & Social Ads',text:'Tiếp cận đúng nhu cầu, kiểm soát chi phí và tối ưu chuyển đổi theo dữ liệu thực tế.'},
 {icon:PenTool,title:'Content Marketing',text:'Xây hệ thống nội dung hỗ trợ tìm kiếm, nuôi dưỡng nhu cầu và tạo niềm tin trước khi mua.'},
 {icon:MapPin,title:'Local SEO',text:'Tăng khả năng được tìm thấy tại khu vực doanh nghiệp đang phục vụ và thu hút khách hàng gần bạn.'},
 {icon:BarChart3,title:'Đo lường & tối ưu',text:'Kết nối dữ liệu marketing với lead, cơ hội bán hàng và doanh thu để biết kênh nào thực sự hiệu quả.'}
];
const process=[['01','Hiểu bài toán kinh doanh','Làm rõ mục tiêu, khách hàng, biên lợi nhuận và cách doanh nghiệp đang tạo doanh thu.'],['02','Phân tích dữ liệu & cơ hội','Đánh giá website, thị trường, đối thủ, hành trình tìm kiếm và hiệu suất các kênh hiện tại.'],['03','Xây chiến lược ưu tiên','Chọn đúng kênh, thông điệp và hạng mục cần triển khai trước thay vì dàn trải ngân sách.'],['04','Triển khai & thử nghiệm','SEO, quảng cáo và nội dung được triển khai theo sprint, có giả thuyết và chỉ số theo dõi rõ ràng.'],['05','Đo lường & mở rộng','Dựa trên dữ liệu để tối ưu chi phí, tăng chuyển đổi và nhân rộng những hoạt động tạo kết quả tốt.']];
const megaServices = [
  {
    category: 'Tối ưu tìm kiếm & AI',
    dotColor: 'gold',
    items: [
      {
        title: 'SEO Tổng Thể',
        tag: 'Hiệu quả cao',
        tagType: 'hot',
        desc: 'Tăng trưởng organic bền vững, an toàn thuật toán',
        icon: Search,
        iconTheme: 'indigo',
        serviceArt: 'searchArt',
        href: '/dich-vu/seo-tong-the'
      },
      {
        title: 'SEO & AI Overview',
        tag: 'Xu hướng 2026',
        tagType: 'ai',
        desc: 'Chiếm sóng Google AI Overviews, Gemini & ChatGPT',
        icon: BrainCircuit,
        iconTheme: 'orange',
        serviceArt: 'aiArt',
        href: '/dich-vu/seo-ai-overview'
      },
      {
        title: 'Local SEO & Maps',
        desc: 'Tăng hiện diện Google Maps & thu hút khách hàng khu vực',
        icon: MapPin,
        iconTheme: 'lavender',
        serviceArt: 'mapsArt',
        href: '/dich-vu/local-seo-google-maps'
      }
    ]
  },
  {
    category: 'Paid Ads & Performance',
    dotColor: 'orange',
    items: [
      {
        title: 'Google Ads & Shopping',
        tag: 'ROAS 4.8x',
        tagType: 'accent',
        desc: 'Search, Performance Max, kiểm soát CPA tối ưu',
        icon: MousePointerClick,
        iconTheme: 'orange',
        serviceArt: 'adsArt',
        href: '/dich-vu/google-ads-shopping'
      },
      {
        title: 'Meta & TikTok Ads',
        desc: 'Tiếp cận chuẩn tệp khách hàng & bứt phá đơn hàng',
        icon: Target,
        iconTheme: 'lavender',
        serviceArt: 'socialArt',
        href: '/dich-vu/meta-tiktok-ads'
      },
      {
        title: 'Tối ưu Tỷ lệ Chuyển đổi (CRO)',
        desc: 'Cải thiện landing page để biến click thành doanh thu',
        icon: TrendingUp,
        iconTheme: 'indigo',
        serviceArt: 'croArt',
        href: '/dich-vu/cro-landing-page'
      }
    ]
  },
  {
    category: 'Content & Dữ liệu',
    dotColor: 'indigo',
    items: [
      {
        title: 'Content Marketing & PR',
        desc: 'Xây phễu nội dung nuôi dưỡng nhu cầu & tạo niềm tin',
        icon: PenTool,
        iconTheme: 'lavender',
        serviceArt: 'contentArt',
        href: '/dich-vu/content-marketing-pr'
      },
      {
        title: 'Đo lường & Phân tích GA4',
        desc: 'Tracking dữ liệu, Looker dashboard & kết nối doanh thu',
        icon: BarChart3,
        iconTheme: 'indigo',
        serviceArt: 'analyticsArt',
        href: '/dich-vu/ga4-looker-dashboard'
      },
      {
        title: 'Tư vấn Chiến lược Sprint',
        desc: 'Lộ trình digital marketing may đo theo mục tiêu kinh doanh',
        icon: Zap,
        iconTheme: 'orange',
        serviceArt: 'sprintArt',
        href: '/dich-vu/tu-van-chien-luoc-sprint'
      }
    ]
  }
];

const megaSolutions = [
  {
    category: 'Theo mô hình kinh doanh',
    dotColor: 'orange',
    items: [
      {
        title: 'B2B & Dịch vụ Chuyên nghiệp',
        desc: 'Tạo dòng lead B2B chất lượng cao với chi phí tối ưu',
        icon: Target,
        iconTheme: 'indigo',
        href: '/giai-phap/b2b-dich-vu-chuyen-nghiep'
      },
      {
        title: 'E-Commerce & Bán lẻ',
        desc: 'Tăng doanh thu đơn hàng, ROAS và giá trị trọn đời (LTV)',
        icon: TrendingUp,
        iconTheme: 'orange',
        href: '/giai-phap/ecommerce-ban-le'
      },
      {
        title: 'Khởi nghiệp & SME Tăng tốc',
        desc: 'Tập trung vào kênh tạo kết quả nhanh, không dàn trải',
        icon: Zap,
        iconTheme: 'lavender',
        href: '/giai-phap/sme-tang-toc'
      }
    ]
  },
  {
    category: 'Phương pháp luận SOHO',
    dotColor: 'indigo',
    items: [
      {
        title: 'Quy trình Sprint 5 Bước',
        desc: 'Từ chẩn đoán dữ liệu đến thử nghiệm và nhân rộng kết quả',
        icon: Layers3,
        iconTheme: 'indigo',
        href: '/giai-phap/quy-trinh-sprint-5-buoc'
      },
      {
        title: 'Marketing Kết nối Doanh thu',
        desc: 'Báo cáo chỉ số gắn liền với chuyển đổi và lợi nhuận',
        icon: BarChart3,
        iconTheme: 'orange',
        href: '/giai-phap/marketing-ket-noi-doanh-thu'
      },
      {
        title: 'Cam kết Đồng hành & Minh bạch',
        desc: 'Báo cáo thời gian thực, minh bạch ngân sách 100%',
        icon: ShieldCheck,
        iconTheme: 'lavender',
        href: '/giai-phap/dong-hanh-minh-bach'
      }
    ]
  }
];

function Service3DIcon({type}){
  return (
    <div className={`megaIconWrap service3dIcon ${type}`} aria-hidden="true">
      <span className="service3dShape"></span>
      <span className="service3dMark"></span>
    </div>
  );
}

function Header(){
  const [open,setOpen]=useState(false);
  const [activeMega,setActiveMega]=useState(null);
  const [mobileSub,setMobileSub]=useState(null);
  const [activeServiceCat,setActiveServiceCat]=useState(megaServices[0].category);
  const activeServiceGroup = megaServices.find(cat => cat.category === activeServiceCat) || megaServices[0];

  const toggleMega = (name) => {
    setActiveMega(activeMega === name ? null : name);
  };

  const closeAll = () => {
    setActiveMega(null);
    setOpen(false);
    setMobileSub(null);
  };

  return (
    <>
      <div className="topbar">
        <span>SOHO AGENCY • Data-Driven Marketing • SEO • Ads • Content • AI Search</span>
      </div>
      <header className={activeMega ? 'hasActiveMega' : ''}>
        <a className="logo logoBrand" href="/" onClick={closeAll}>
          <img src="/brand/soho-logo.png" alt="SOHO Agency" className="logoImg" />
        </a>

        {/* Desktop Navigation */}
        <nav className={`desktopNav ${open ? 'open' : ''}`}>
          <div 
            className={`navItemWithMega ${activeMega === 'services' ? 'active' : ''}`}
            onMouseEnter={() => setActiveMega('services')}
          >
            <button 
              type="button" 
              className="navTrigger" 
              onClick={() => toggleMega('services')}
            >
              <span>Dịch vụ</span>
              <ChevronDown size={15} className={`chevronIcon ${activeMega === 'services' ? 'rotated' : ''}`} />
            </button>
          </div>

          <div 
            className={`navItemWithMega ${activeMega === 'solutions' ? 'active' : ''}`}
            onMouseEnter={() => setActiveMega('solutions')}
          >
            <button 
              type="button" 
              className="navTrigger" 
              onClick={() => toggleMega('solutions')}
            >
              <span>Giải pháp</span>
              <ChevronDown size={15} className={`chevronIcon ${activeMega === 'solutions' ? 'rotated' : ''}`} />
            </button>
          </div>

          <a href="/ket-qua" onClick={closeAll}>Kết quả</a>
          <a href="/blog" onClick={closeAll}>Kiến thức</a>
          <a href="/ve-soho" onClick={closeAll}>Về SOHO</a>
          <a className="mobileCta" href="/lien-he" onClick={closeAll}>Nhận tư vấn ngay</a>

          {/* Mobile Accordion inside drawer */}
          <div className="mobileAccordion">
            <button 
              type="button" 
              className="mobileSubToggle"
              onClick={() => setMobileSub(mobileSub === 'services' ? null : 'services')}
            >
              <b>Dịch vụ chuyên sâu</b>
              <ChevronDown size={16} className={mobileSub === 'services' ? 'rotated' : ''} />
            </button>
            {mobileSub === 'services' && (
              <div className="mobileSubList">
                {megaServices.map(cat => (
                  <div key={cat.category} className="mobileSubGroup">
                    <span>{cat.category}</span>
                    {cat.items.map(item => (
                      <a key={item.title} href={item.href} onClick={closeAll}>
                        <item.icon size={15} /> {item.title}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <button 
              type="button" 
              className="mobileSubToggle"
              onClick={() => setMobileSub(mobileSub === 'solutions' ? null : 'solutions')}
            >
              <b>Giải pháp & Cách làm</b>
              <ChevronDown size={16} className={mobileSub === 'solutions' ? 'rotated' : ''} />
            </button>
            {mobileSub === 'solutions' && (
              <div className="mobileSubList">
                {megaSolutions.map(cat => (
                  <div key={cat.category} className="mobileSubGroup">
                    <span>{cat.category}</span>
                    {cat.items.map(item => (
                      <a key={item.title} href={item.href} onClick={closeAll}>
                        <item.icon size={15} /> {item.title}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        <a className="headerCta" href="/lien-he" onClick={closeAll}>
          Nhận đề xuất <ArrowRight size={17}/>
        </a>
        <button className="hamb" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>

        {/* MEGA MENU: DỊCH VỤ */}
        {activeMega === 'services' && (
          <div 
            className="megaMenuPanel"
            onMouseEnter={() => setActiveMega('services')}
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="megaMenuInner">
              <div className="megaMenuGrid serviceMegaGrid">
                <div className="serviceMegaRail">
                  <span className="serviceMegaLabel">Nhóm dịch vụ</span>
                  {megaServices.map(cat => (
                    <button
                      key={cat.category}
                      type="button"
                      className={`serviceMegaTab ${activeServiceGroup.category === cat.category ? 'active' : ''}`}
                      onMouseEnter={() => setActiveServiceCat(cat.category)}
                      onClick={() => setActiveServiceCat(cat.category)}
                    >
                      <span className={`colDot ${cat.dotColor}`}></span>
                      <b>{cat.category}</b>
                      <small>{cat.items.length} dịch vụ</small>
                    </button>
                  ))}
                </div>

                <div className="serviceMegaPanel">
                  <div className="megaColHead servicePanelHead">
                    <span className={`colDot ${activeServiceGroup.dotColor}`}></span>
                    <h4>{activeServiceGroup.category}</h4>
                    <a href="/dich-vu" className="megaMenuAllLink" onClick={closeAll}>Tất cả dịch vụ</a>
                  </div>
                  <div className="serviceMegaList">
                    {activeServiceGroup.items.map(item => (
                      <a 
                        key={item.title} 
                        href={item.href} 
                        className="megaItem serviceMegaItem" 
                        onClick={closeAll}
                      >
                        <Service3DIcon type={item.serviceArt} />
                        <div className="megaItemContent">
                          <div className="megaItemTitleRow">
                            <b>{item.title}</b>
                            {item.tag && (
                              <span className={`megaTag ${item.tagType}`}>{item.tag}</span>
                            )}
                          </div>
                          <p>{item.desc}</p>
                        </div>
                        <ArrowRight size={15} className="serviceMegaArrow"/>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Promo Showcase Column */}
                <div className="megaPromoCol">
                  <div className="megaPromoCard">
                    <div className="promoBadge">
                      <Sparkles size={13}/> ƯU ĐÃI ĐỘC QUYỀN
                    </div>
                    <h4>Audit Toàn Diện Website & Kênh Digital</h4>
                    <p>Phân tích lỗ hổng SEO, hiệu suất chiến dịch quảng cáo và tiềm năng tăng trưởng doanh thu miễn phí.</p>
                    <div className="promoStats">
                      <div>
                        <strong>150+</strong>
                        <span>Doanh nghiệp</span>
                      </div>
                      <div>
                        <strong>4.8/5</strong>
                        <span>Hài lòng</span>
                      </div>
                    </div>
                    <a href="/lien-he" className="promoBtn" onClick={closeAll}>
                      <span>Đăng ký Audit 0đ</span>
                      <ArrowRight size={15}/>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mega Menu Footer Strip */}
              <div className="megaFooterStrip">
                <div className="megaFooterHighlights">
                  <div className="megaFooterItem">
                    <ShieldCheck size={16} className="textOrange"/>
                    <span>Cam kết KPI minh bạch theo hợp đồng</span>
                  </div>
                  <div className="megaFooterItem">
                    <CheckCircle2 size={16} className="textLavender"/>
                    <span>Báo cáo dữ liệu thời gian thực 24/7</span>
                  </div>
                </div>
                <a href="/lien-he" className="megaFooterLink" onClick={closeAll}>
                  Trao đổi bài toán riêng của bạn <ArrowRight size={14}/>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* MEGA MENU: GIẢI PHÁP */}
        {activeMega === 'solutions' && (
          <div 
            className="megaMenuPanel solutionsPanel"
            onMouseEnter={() => setActiveMega('solutions')}
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="megaMenuInner">
              <div className="megaMenuGrid solutionsGrid">
                {megaSolutions.map(cat => (
                  <div className="megaCol" key={cat.category}>
                    <div className="megaColHead">
                      <span className={`colDot ${cat.dotColor}`}></span>
                      <h4>{cat.category}</h4>
                      {cat === megaSolutions[0] && <a href="/giai-phap" className="megaMenuAllLink" onClick={closeAll}>Tất cả giải pháp</a>}
                    </div>
                    <div className="megaLinks">
                      {cat.items.map(item => (
                        <a 
                          key={item.title} 
                          href={item.href} 
                          className="megaItem" 
                          onClick={closeAll}
                        >
                          <div className={`megaIconWrap ${item.iconTheme}`}>
                            <item.icon size={18}/>
                          </div>
                          <div className="megaItemContent">
                            <b>{item.title}</b>
                            <p>{item.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                {/* SOHO Engine Snapshot */}
                <div className="megaPromoCol solutionsPromo">
                  <div className="megaPromoCard enginePromoCard">
                    <div className="promoBadge lavender">
                      <Zap size={13}/> PHƯƠNG PHÁP LUẬN
                    </div>
                    <h4>Mô Hình Tăng Trưởng 4 Giai Đoạn</h4>
                    <p className="engineSub">Thu hút đúng tệp ➔ Tối ưu chuyển đổi ➔ Khai thác dữ liệu ➔ Tăng tốc mở rộng quy mô.</p>
                    <div className="engineTags">
                      <span>Thu hút</span>
                      <span>Chuyển đổi</span>
                      <span>Dữ liệu</span>
                      <span>Tối ưu</span>
                    </div>
                    <a href="/giai-phap/quy-trinh-sprint-5-buoc" className="promoBtn secondaryBtn" onClick={closeAll}>
                      <span>Khám phá cách SOHO làm</span>
                      <ArrowRight size={15}/>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mega Menu Footer Strip */}
              <div className="megaFooterStrip">
                <div className="megaFooterHighlights">
                  <div className="megaFooterItem">
                    <TrendingUp size={16} className="textOrange"/>
                    <span>Tập trung vào doanh thu & lợi nhuận biên</span>
                  </div>
                </div>
                <a href="/giai-phap/quy-trinh-sprint-5-buoc" className="megaFooterLink" onClick={closeAll}>
                  Xem chi tiết quy trình 5 bước <ArrowRight size={14}/>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop Dimmer overlay when mega menu is open */}
      {activeMega && (
        <div className="megaBackdrop" onClick={() => setActiveMega(null)} />
      )}
    </>
  );
}

function HeroVisual(){
  const [tilt,setTilt]=useState({x:0,y:0});
  const [activeTab,setActiveTab]=useState(0);

  const tabs=[
    {label:'Organic SEO',value:'+185%',sub:'350.000+ truy cập/tháng',change:'+24.5%',bars:[35,48,58,72,85,98]},
    {label:'Ads ROAS',value:'4.8x',sub:'Chi phí CPA giảm 38%',change:'+32.1%',bars:[30,44,60,69,84,95]},
    {label:'Doanh thu',value:'+42.8%',sub:'Đóng góp 68% tổng doanh thu',change:'+18.4%',bars:[40,54,65,75,88,100]}
  ];

  const current=tabs[activeTab];

  const handleMouseMove=(e)=>{
    const rect=e.currentTarget.getBoundingClientRect();
    const x=((e.clientX-rect.left)/rect.width-0.5)*10;
    const y=((e.clientY-rect.top)/rect.height-0.5)*-10;
    setTilt({x,y});
  };

  const handleMouseLeave=()=>{
    setTilt({x:0,y:0});
  };

  return (
    <div 
      className="heroVisual"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:`perspective(1100px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
      }}
    >
      {/* Dynamic ambient glowing orbs based on SOHO palette */}
      <div className="aurora aurora-1"></div>
      <div className="aurora aurora-2"></div>
      <div className="aurora aurora-3"></div>

      {/* Cyber grid with light scanning beam */}
      <div className="grid">
        <div className="gridBeam"></div>
      </div>

      {/* Rotating orbit rings with satellite particles */}
      <div className="orbitRing orbitOuter">
        <div className="satellite sat1"></div>
      </div>
      <div className="orbitRing orbitInner">
        <div className="satellite sat2"></div>
      </div>

      {/* Central Glassmorphic Dashboard Card */}
      <div className="chartCard glassCard">
        <div className="cardTop">
          <div className="liveBadge">
            <span className="liveDot"></span>
            <span>LIVE METRICS</span>
          </div>
          <div className="metricTabs">
            {tabs.map((tab,idx)=>(
              <button
                key={tab.label}
                type="button"
                className={`metricTab ${activeTab===idx?'active':''}`}
                onClick={()=>setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="statRow">
          <div>
            <span className="statLabel">Hiệu suất tăng trưởng</span>
            <div className="statValueRow">
              <strong className="statBig">{current.value}</strong>
              <span className="statPill">
                <TrendingUp size={13}/> {current.change}
              </span>
            </div>
            <small className="statSub">{current.sub}</small>
          </div>
          <div className="growthPill">
            <Sparkles size={14} className="sparkleIcon"/>
            <span>SOHO Engine</span>
          </div>
        </div>

        {/* SVG Dynamic Wave Line */}
        <div className="chartVisualArea">
          <svg className="trendSvg" viewBox="0 0 320 70" preserveAspectRatio="none">
            <defs>
              <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7B77F2" stopOpacity="0.5"/>
                <stop offset="55%" stopColor="#FEBC01" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#F26716" stopOpacity="1"/>
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F26716" stopOpacity="0.22"/>
                <stop offset="100%" stopColor="#3924BF" stopOpacity="0.0"/>
              </linearGradient>
            </defs>
            <path
              className="areaPath"
              d="M 10,55 Q 60,45 110,48 T 210,28 T 310,12 L 310,70 L 10,70 Z"
              fill="url(#areaGradient)"
            />
            <path
              className="trendLine"
              d="M 10,55 Q 60,45 110,48 T 210,28 T 310,12"
              fill="none"
              stroke="url(#trendGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle className="pulseRing" cx="310" cy="12" r="9"/>
            <circle className="pulsePoint" cx="310" cy="12" r="4.5"/>
          </svg>

          {/* Dynamic bar charts */}
          <div className="bars">
            {current.bars.map((h,i)=>(
              <div key={i} className="barWrapper">
                <i
                  className={i===current.bars.length-1?'barPeak':''}
                  style={{'--target-height':`${h}%`}}
                >
                  <span className="barTooltip">{h}%</span>
                </i>
              </div>
            ))}
          </div>
        </div>

        <div className="chartFooter">
          <span>Hệ thống dữ liệu tăng trưởng SOHO 24/7</span>
          <span className="verified">
            <CheckCircle2 size={13}/> Đã xác thực ROI
          </span>
        </div>
      </div>

      {/* Floating Interactive Micro-Cards */}
      <div className="floatingBadge floatA">
        <div className="badgeIcon seo">
          <Search size={18}/>
        </div>
        <div className="badgeText">
          <div className="badgeTitle">
            <b>Top 1 Google</b>
            <span className="badgePing"></span>
          </div>
          <small>+280 từ khóa trang nhất</small>
        </div>
      </div>

      <div className="floatingBadge floatB">
        <div className="badgeIcon ads">
          <Target size={18}/>
        </div>
        <div className="badgeText">
          <div className="badgeTitle">
            <b>Google & Meta Ads</b>
          </div>
          <small className="orangeHighlight">ROAS đạt 4.8x</small>
        </div>
      </div>

      <div className="floatingBadge floatC">
        <div className="badgeIcon ai">
          <BrainCircuit size={18}/>
        </div>
        <div className="badgeText">
          <div className="badgeTitle">
            <b>AI Search Ready</b>
          </div>
          <small>Chiếm sóng AI Overview</small>
        </div>
      </div>
    </div>
  );
}

export default function Home(){
  return (
    <main>
      <Header/>
      <section className="hero">
        <div className="heroCopy">
          <div className="heroEyebrowBadge">
            <span className="radarPulse">
              <span className="radarCore"></span>
            </span>
            <span>SOHO AGENCY • DATA-DRIVEN GROWTH</span>
          </div>
          <h1>
            Biến Marketing thành <span className="shimmerGradientText">động lực tăng trưởng</span> cho doanh nghiệp
          </h1>
          <p className="lead">
            Dành cho đội ngũ cần nhìn thấy tác động kinh doanh rõ ràng, không chỉ là traffic hay lượt click. SOHO Agency kết nối chiến lược, triển khai và dữ liệu để tạo tăng trưởng có thể đo lường.
          </p>
          <div className="heroActions">
            <a className="btn primary btnGlow" href="#contact">
              <span className="btnText">Nhận đề xuất chiến lược</span>
              <ArrowRight className="btnArrow" size={18}/>
              <span className="btnSweep"></span>
            </a>
            <a className="textLink previewLink" href="#approach">
              <span>Xem cách SOHO làm</span>
              <ArrowRight size={18} className="linkArrow"/>
            </a>
          </div>

          {/* Social Proof / Real Metrics Bar */}
          <div className="heroStatsBar">
            <div className="heroStatItem">
              <div className="statIconWrap"><TrendingUp size={16}/></div>
              <div>
                <strong>+185%</strong>
                <span>Traffic tự nhiên</span>
              </div>
            </div>
            <div className="statDivider"></div>
            <div className="heroStatItem">
              <div className="statIconWrap"><Zap size={16}/></div>
              <div>
                <strong>4.8x</strong>
                <span>Lợi tức ROAS</span>
              </div>
            </div>
            <div className="statDivider"></div>
            <div className="heroStatItem">
              <div className="statIconWrap"><ShieldCheck size={16}/></div>
              <div>
                <strong>99.2%</strong>
                <span>Đạt cam kết KPI</span>
              </div>
            </div>
          </div>
        </div>
        <HeroVisual/>
      </section>
      <section className="strip">
        <p>Không dùng một công thức rập khuôn cho mọi doanh nghiệp.</p>
        <b>Chiến lược SOHO được may đo theo mục tiêu, dữ liệu và thị trường của bạn.</b>
      </section>
      <section className="section services" id="services">
        <div className="sectionHead">
          <p className="eyebrow">DỊCH VỤ CHUYÊN SÂU</p>
          <h2>Một hệ thống marketing kết nối từ <em>hiện diện</em> đến <em>doanh thu</em></h2>
          <p>Thay vì vận hành từng kênh rời rạc, SOHO thiết kế các hoạt động hỗ trợ lẫn nhau xuyên suốt hành trình khách hàng.</p>
        </div>
        <div className="serviceGrid">
          {services.map((s,i)=>(
            <article className="serviceCard" key={s.title}>
              <div className="icon"><s.icon/></div>
              <span>0{i+1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contact">Tìm hiểu thêm <ArrowRight size={16}/></a>
            </article>
          ))}
        </div>
      </section>
      <section className="dark" id="approach">
        <div className="section split">
          <div>
            <p className="eyebrow gold">CÁCH SOHO TIẾP CẬN</p>
            <h2>Marketing không nên dừng ở báo cáo chỉ số</h2>
            <p className="muted">Một chiến dịch tốt cần trả lời được ba câu hỏi: khách hàng đến từ đâu, điều gì khiến họ chuyển đổi và hoạt động nào đáng để đầu tư thêm.</p>
            <div className="checks">
              <p><CheckCircle2/> Kết nối mục tiêu marketing với mục tiêu kinh doanh</p>
              <p><CheckCircle2/> Ưu tiên dữ liệu có thể hành động thay vì dashboard phức tạp</p>
              <p><CheckCircle2/> Tối ưu liên tục dựa trên tín hiệu từ thị trường và khách hàng</p>
            </div>
            <a className="btn light" href="#contact">Trao đổi về mục tiêu của bạn <ArrowRight/></a>
          </div>
          <div className="engine">
            <div className="engineCore">
              <ChartNoAxesCombined/>
              <b>SOHO ENGINE</b>
              <small>Tăng trưởng thực</small>
            </div>
            <div className="engineItem e1">Thu hút</div>
            <div className="engineItem e2">Chuyển đổi</div>
            <div className="engineItem e3">Dữ liệu</div>
            <div className="engineItem e4">Tối ưu</div>
          </div>
        </div>
      </section>
      <section className="section" id="results">
        <div className="sectionHead left">
          <p className="eyebrow">HIỆU QUẢ THỰC TẾ</p>
          <h2>Đo những gì <em>thực sự có ý nghĩa</em> với doanh nghiệp</h2>
        </div>
        <div className="metricGrid">
          <div>
            <strong>SEO</strong>
            <h3>Tăng khả năng được tìm thấy</h3>
            <p>Theo dõi visibility, organic traffic, nhóm từ khóa tạo nhu cầu và chuyển đổi từ tìm kiếm.</p>
          </div>
          <div>
            <strong>ADS</strong>
            <h3>Tối ưu chi phí tạo khách hàng</h3>
            <p>Đánh giá hiệu quả dựa trên lead chất lượng, CPA, ROAS và đóng góp của quảng cáo vào pipeline.</p>
          </div>
          <div>
            <strong>CRO</strong>
            <h3>Biến traffic thành cơ hội bán hàng</h3>
            <p>Cải thiện thông điệp, landing page và hành trình để nhiều người dùng phù hợp thực hiện hành động hơn.</p>
          </div>
        </div>
        <p className="note">* Kết quả phụ thuộc vào ngành, ngân sách, nền tảng hiện tại và thời gian triển khai. Các chỉ số cụ thể sẽ được xác lập sau giai đoạn phân tích.</p>
      </section>
      <section className="soft">
        <div className="section">
          <div className="sectionHead">
            <p className="eyebrow">QUY TRÌNH</p>
            <h2>Từ dữ liệu đến hành động, <em>rõ từng bước</em></h2>
          </div>
          <div className="timeline">
            {process.map(x=>(
              <article key={x[0]}>
                <span>{x[0]}</span>
                <div>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section why" id="about">
        <div className="whyVisual">
          <div className="shape s1"></div>
          <div className="shape s2"></div>
          <div className="floating f1"><Layers3/> Đa kênh</div>
          <div className="floating f2"><BarChart3/> Dữ liệu</div>
        </div>
        <div>
          <p className="eyebrow">ĐỒNG HÀNH CÙNG SOHO AGENCY</p>
          <h2>Một đội ngũ, một mục tiêu tăng trưởng</h2>
          <p>Chúng tôi không chỉ gửi danh sách việc cần làm. Đội ngũ SOHO trực tiếp phân tích, triển khai và phối hợp với doanh nghiệp để đưa chiến lược vào thực tế.</p>
          <div className="whyList">
            <p><b>Chủ động triển khai</b><br/>Giảm khoảng cách giữa tư vấn và thực thi.</p>
            <p><b>Minh bạch dữ liệu</b><br/>Biết ngân sách đang được dùng ở đâu và vì sao.</p>
            <p><b>Ưu tiên đúng việc</b><br/>Tập trung vào hạng mục có khả năng tạo tác động lớn trước.</p>
          </div>
        </div>
      </section>
      <section className="insights" id="insights">
        <div className="section">
          <div className="sectionHead left">
            <p className="eyebrow gold">KIẾN THỨC TỪ SOHO</p>
            <h2>Góc nhìn để ra quyết định marketing tốt hơn</h2>
          </div>
          <div className="articleGrid">
            <article>
              <span>SEO & AI</span>
              <h3>SEO trong kỷ nguyên AI Search cần thay đổi điều gì?</h3>
              <p>Cách xây nội dung và tín hiệu thương hiệu khi hành vi tìm kiếm không còn chỉ diễn ra trên Google.</p>
              <a href="/blog/seo-ky-nguyen-ai-search">Đọc bài viết <ArrowRight size={16}/></a>
            </article>
            <article>
              <span>PERFORMANCE</span>
              <h3>Đừng chỉ nhìn CPC khi đánh giá quảng cáo</h3>
              <p>Một framework đơn giản để nối dữ liệu quảng cáo với lead, pipeline và doanh thu.</p>
              <a href="/blog/toi-uu-roas-performance-ads">Đọc bài viết <ArrowRight size={16}/></a>
            </article>
            <article>
              <span>STRATEGY</span>
              <h3>Khi nào doanh nghiệp nên đầu tư SEO và Ads cùng lúc?</h3>
              <p>Phân vai hai kênh theo nhu cầu ngắn hạn, dài hạn và mức độ trưởng thành của thị trường.</p>
              <a href="/blog/chien-luoc-seo-ads-song-hanh">Đọc bài viết <ArrowRight size={16}/></a>
            </article>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div>
          <p className="eyebrow gold">BẮT ĐẦU</p>
          <h2>Bạn muốn marketing tạo ra kết quả rõ ràng hơn?</h2>
          <p>Cho SOHO biết website và mục tiêu hiện tại. Đội ngũ sẽ xem xét bối cảnh và đề xuất hướng tiếp cận phù hợp để bắt đầu.</p>
        </div>
        <form onSubmit={e=>e.preventDefault()}>
          <label>Website doanh nghiệp<input placeholder="https://tenmien.vn"/></label>
          <label>Họ và tên<input placeholder="Nguyễn Văn A"/></label>
          <label>Email công việc<input type="email" placeholder="email@congty.vn"/></label>
          <label>Mục tiêu bạn đang quan tâm
            <select defaultValue="">
              <option value="" disabled>Chọn mục tiêu</option>
              <option>Tăng trưởng SEO & AI Search</option>
              <option>Tối ưu quảng cáo Google & Meta</option>
              <option>Tăng lead / doanh thu B2B, B2C</option>
              <option>Xây chiến lược Digital Marketing tổng thể</option>
            </select>
          </label>
          <button className="btn primary btnGlow">Gửi yêu cầu tư vấn <ArrowRight/></button>
        </form>
      </section>
      <footer>
        <div className="footerTop">
          <a className="logo lightLogo logoBrand" href="#">
            <img src="/brand/soho-logo-white.png" alt="SOHO Agency" className="logoImg footerLogoImg" />
          </a>
          <p>SOHO Agency - Digital Marketing tập trung vào tăng trưởng có thể đo lường.</p>
        </div>
        <div className="footerGrid">
          <div>
            <h4>Dịch vụ SOHO</h4>
            <a>SEO tổng thể</a>
            <a>SEO & AI Search</a>
            <a>Google Ads</a>
            <a>Social Performance Ads</a>
            <a>Content Marketing & PR</a>
          </div>
          <div>
            <h4>Khám phá</h4>
            <a>Cách chúng tôi làm</a>
            <a>Case study</a>
            <a>Kiến thức</a>
            <a>Về SOHO</a>
          </div>
          <div>
            <h4>Liên hệ</h4>
            <a>hello@sohoagency.vn</a>
            <a>Hà Nội & TP. Hồ Chí Minh, Việt Nam</a>
          </div>
        </div>
        <div className="copyright">© 2026 SOHO Agency. Tất cả các quyền được bảo lưu.</div>
      </footer>
    </main>
  );
}
