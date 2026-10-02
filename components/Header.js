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
  TrendingUp,
  Sparkles,
  Zap,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import {sitePath} from './paths';

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

export default function Header({activeNav}){
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
        <a className="logo logoBrand" href={sitePath('/')} onClick={closeAll}>
          <img src={sitePath('/brand/soho-logo.png')} alt="SOHO Agency" className="logoImg" />
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

          <a href={sitePath('/ket-qua')} className={activeNav === 'results' ? 'navActive' : ''} onClick={closeAll}>Kết quả</a>
          <a href={sitePath('/blog')} className={activeNav === 'blog' ? 'navActive' : ''} onClick={closeAll}>
            <span>Kiến thức</span>
            <span className="blogPillTag">Blog</span>
          </a>
          <a href={sitePath('/ve-soho')} className={activeNav === 'about' ? 'navActive' : ''} onClick={closeAll}>Về SOHO</a>
          <a className="mobileCta" href={sitePath('/lien-he')} onClick={closeAll}>Nhận tư vấn ngay</a>

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
                      <a key={item.title} href={sitePath(item.href)} onClick={closeAll}>
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
                      <a key={item.title} href={sitePath(item.href)} onClick={closeAll}>
                        <item.icon size={15} /> {item.title}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        <a className="headerCta" href={sitePath('/lien-he')} onClick={closeAll}>
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
                    <a href={sitePath('/dich-vu')} className="megaMenuAllLink" onClick={closeAll}>Tất cả dịch vụ</a>
                  </div>
                  <div className="serviceMegaList">
                    {activeServiceGroup.items.map(item => (
                      <a 
                        key={item.title} 
                        href={sitePath(item.href)} 
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
                    <a href={sitePath('/lien-he')} className="promoBtn" onClick={closeAll}>
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
                <a href={sitePath('/lien-he')} className="megaFooterLink" onClick={closeAll}>
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
                      {cat === megaSolutions[0] && <a href={sitePath('/giai-phap')} className="megaMenuAllLink" onClick={closeAll}>Tất cả giải pháp</a>}
                    </div>
                    <div className="megaLinks">
                      {cat.items.map(item => (
                        <a 
                          key={item.title} 
                          href={sitePath(item.href)} 
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
                    <a href={sitePath('/giai-phap/quy-trinh-sprint-5-buoc')} className="promoBtn secondaryBtn" onClick={closeAll}>
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
                <a href={sitePath('/giai-phap/quy-trinh-sprint-5-buoc')} className="megaFooterLink" onClick={closeAll}>
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
