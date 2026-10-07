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
  Activity,
  XCircle,
  ExternalLink
} from 'lucide-react';
import {sitePath} from '../components/paths';
import Header from '../components/Header';
import Footer from '../components/Footer';

const services=[
 {icon:Search,title:'SEO tổng thể',text:'Audit kỹ thuật, intent map, content hub, internal link.',metric:'Organic lead'},
 {icon:BrainCircuit,title:'SEO & AI Search',text:'Entity, schema, FAQ, author signal, AI citation.',metric:'AI visibility'},
 {icon:MousePointerClick,title:'Google & Social Ads',text:'Search intent, creative test, landing page, CRM feedback.',metric:'CPA / ROAS'},
 {icon:PenTool,title:'Content Marketing',text:'Pillar, case study, sales asset, PR angle.',metric:'Trust asset'},
 {icon:MapPin,title:'Local SEO',text:'Google Maps, review flow, local page, call tracking.',metric:'Call & route'},
 {icon:BarChart3,title:'Đo lường & tối ưu',text:'GA4, GTM, Looker, event, lead quality dashboard.',metric:'Revenue view'}
];
const process=[['01','Hiểu bài toán kinh doanh','Làm rõ mục tiêu, khách hàng, biên lợi nhuận và cách doanh nghiệp đang tạo doanh thu.'],['02','Phân tích dữ liệu & cơ hội','Đánh giá website, thị trường, đối thủ, hành trình tìm kiếm và hiệu suất các kênh hiện tại.'],['03','Xây chiến lược ưu tiên','Chọn đúng kênh, thông điệp và hạng mục cần triển khai trước thay vì dàn trải ngân sách.'],['04','Triển khai & thử nghiệm','SEO, quảng cáo và nội dung được triển khai theo sprint, có giả thuyết và chỉ số theo dõi rõ ràng.'],['05','Đo lường & mở rộng','Dựa trên dữ liệu để tối ưu chi phí, tăng chuyển đổi và nhân rộng những hoạt động tạo kết quả tốt.']];


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

const clientLogos = [
  {
    name: 'May Mặc CTH',
    field: 'Sản xuất May mặc B2B & Xuất khẩu',
    tag: 'SEO B2B & Google Ads',
    logo: sitePath('/clients/cth.png'),
    url: 'https://maymaccth.com'
  },
  {
    name: 'ICADO',
    field: 'Thời trang Thể thao & Activewear',
    tag: 'E-Commerce & Ads Chuyển đổi',
    logo: sitePath('/clients/icado.png'),
    url: 'https://icado.vn'
  },
  {
    name: 'Studio 1 Nhà',
    field: 'Studio Nhiếp ảnh & Dịch vụ Cưới',
    tag: 'Local SEO & Meta Ads',
    logo: sitePath('/clients/studio1nha.png'),
    url: 'https://studio1nha.vn'
  },
  {
    name: 'Everlog',
    field: 'Vận tải Logistics & Chuỗi cung ứng',
    tag: 'SEO B2B & Inbound Pipeline',
    logo: sitePath('/clients/everlog-dark.png'),
    url: 'https://everlog.com.vn'
  },
  {
    name: 'Fitfood VN',
    field: 'Healthy Meal Prep & Healthy Food',
    tag: 'Paid Social & Tối ưu CRO',
    logo: sitePath('/clients/fitfood-dark.png'),
    url: 'https://fitfood.vn'
  }
];

const comparisonData = [
  {
    category: 'Mục tiêu & Đo lường',
    traditional: 'Tập trung vào chỉ số bề nổi (Impressions, Clicks, Traffic ảo). Thường né tránh trách nhiệm khi doanh thu thực tế của doanh nghiệp không tăng.',
    soho: 'Gắn liền trực tiếp với Qualified Leads, Doanh thu & ROAS. Đo lường tỷ lệ chuyển đổi cuối cùng và hiệu quả trên từng đồng ngân sách chi tiêu.',
    highlight: 'Doanh thu & Lead thực'
  },
  {
    category: 'Quyền sở hữu & Dữ liệu',
    traditional: 'Nắm giữ tài khoản quảng cáo và tệp dữ liệu khách hàng. Chỉ gửi báo cáo file PDF tĩnh cuối tháng, khó kiểm chứng chi tiêu thực.',
    soho: 'Khách hàng sở hữu 100% tài nguyên, tài khoản & raw data. Cung cấp Live Dashboard (Looker Studio / GA4) truy cập theo dõi 24/7.',
    highlight: 'Minh bạch 100% tài nguyên'
  },
  {
    category: 'Đội ngũ trực tiếp thực thi',
    traditional: 'Bán hàng bởi Senior/Account dày dạn kinh nghiệm, nhưng sau khi ký hợp đồng lại chuyển giao cho nhân sự Junior hoặc thực tập sinh.',
    soho: 'Senior Growth Strategist trực tiếp phân tích, lập chiến lược và triển khai. Phối hợp nhịp nhàng như phòng marketing in-house tinh nhuệ.',
    highlight: 'Senior thực chiến trực tiếp'
  },
  {
    category: 'Mô hình & Tính linh hoạt',
    traditional: 'Kế hoạch rập khuôn, khóa hợp đồng cứng 6-12 tháng. Mất nhiều tuần họp hành để xin duyệt một thay đổi nhỏ về chiến thuật.',
    soho: 'Vận hành theo Sprint 2 tuần (Agile Growth). Thử nghiệm nhanh, tối ưu liên tục và chủ động dịch chuyển ngân sách sang kênh hiệu quả nhất.',
    highlight: 'Sprint 2 tuần linh hoạt'
  },
  {
    category: 'Đón đầu xu hướng & AI',
    traditional: 'Làm SEO theo phương pháp cũ (spam từ khóa, mua backlink kém chất lượng), dễ bị Google phạt thuật toán và không bắt kịp AI.',
    soho: 'Tối ưu chuẩn đón đầu Google AI Overviews, Gemini & ChatGPT Search. Xây dựng tín hiệu thực thể thương hiệu (E-E-A-T) bền vững lâu dài.',
    highlight: 'Chuẩn đón đầu AI Search'
  },
  {
    category: 'Cam kết & Thỏa thuận rủi ro',
    traditional: 'Hứa hẹn "Top 1 sau 30 ngày" thiếu căn cứ; hợp đồng điều khoản lỏng lẻo, không có ràng buộc hay phương án bù đắp khi không đạt kết quả.',
    soho: 'Ký cam kết KPI rõ ràng & Thỏa thuận bảo mật dữ liệu (NDA). Lộ trình nghiệm thu minh bạch dựa trên số liệu chẩn đoán thực tế trước triển khai.',
    highlight: 'Cam kết KPI & Ký NDA'
  }
];

export default function Home(){
  return (
    <main>
      <Header activeNav="home"/>
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

      {/* Social Proof / Client Logos Trust Bar */}
      <section className="clientTrustSection">
        <div className="clientTrustInner">
          <div className="clientTrustHeading">
            <span className="clientTrustBadge">
              <ShieldCheck size={14} className="textOrange"/>
              KHÁCH HÀNG & ĐỐI TÁC TIÊU BIỂU
            </span>
            <p>Được tin tưởng đồng hành cùng các thương hiệu & doanh nghiệp tăng trưởng tại Việt Nam</p>
          </div>
          <div className="clientLogoGrid">
            {clientLogos.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="clientLogoCard"
                title={`${client.name} — ${client.field}`}
              >
                <div className="clientLogoImgWrapper">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="clientLogoImg"
                    loading="lazy"
                  />
                </div>
                <div className="clientLogoMeta">
                  <strong className="clientName">
                    {client.name}
                    <ExternalLink size={11} className="clientExtIcon"/>
                  </strong>
                  <span className="clientField">{client.field}</span>
                  <span className="clientTag">{client.tag}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="strip">
        <p>Không dùng một công thức rập khuôn cho mọi doanh nghiệp.</p>
        <b>Chiến lược SOHO được may đo theo mục tiêu, dữ liệu và thị trường của bạn.</b>
      </section>
      <section className="section services" id="services">
        <div className="sectionHead">
          <p className="eyebrow">DỊCH VỤ CHUYÊN SÂU</p>
          <h2>Từ hiện diện đến doanh thu</h2>
          <p>Chọn đòn bẩy theo điểm nghẽn. Mỗi dịch vụ có output, dữ liệu nghiệm thu và nhịp tối ưu riêng.</p>
        </div>
        <div className="serviceGrid">
          {services.map((s,i)=>(
            <article className="serviceCard" key={s.title}>
              <div className="icon"><s.icon/></div>
              <span>0{i+1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="serviceCardMetric">
                <small>Signal</small>
                <strong>{s.metric}</strong>
              </div>
              <a href="#contact">Tìm hiểu thêm <ArrowRight size={16}/></a>
            </article>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE: SOHO VS TRADITIONAL AGENCY */}
      <section className="section comparisonSection" id="comparison">
        <div className="sectionHead">
          <p className="eyebrow gold">ĐỊNH HƯỚNG KHÁC BIỆT</p>
          <h2>So sánh nhanh trước khi chọn agency</h2>
          <p>Không đo bằng slide đẹp. Đo bằng quyền sở hữu, tốc độ ra quyết định và kết quả kinh doanh.</p>
        </div>

        <div className="comparisonTableWrap">
          {/* Desktop Table Header */}
          <div className="comparisonTableHead">
            <div className="compColHead colCrit">Tiêu chí đánh giá</div>
            <div className="compColHead colTrad">
              <span className="compHeadDot redDot"></span>
              <div>
                <strong>Agency truyền thống</strong>
                <small>Mô hình cũ nhiều rủi ro</small>
              </div>
            </div>
            <div className="compColHead colSoho">
              <div className="sohoHeadBadge">
                <Sparkles size={13}/>
                <span>GROWTH STANDARD</span>
              </div>
              <div className="sohoHeadTitleRow">
                <strong>SOHO Agency</strong>
                <small>Đối tác tăng trưởng thực chiến</small>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="comparisonTableBody">
            {comparisonData.map((item, idx) => (
              <div className="comparisonRow" key={item.category}>
                <div className="compCell compCritCell">
                  <span className="compIndex">0{idx + 1}</span>
                  <strong className="compCategoryTitle">{item.category}</strong>
                </div>

                <div className="compCell compTradCell">
                  <div className="cellMobileLabel tradLabel">
                    <span className="compHeadDot redDot"></span> Agency truyền thống
                  </div>
                  <div className="cellContent">
                    <XCircle size={18} className="iconTradFail" />
                    <p>{item.traditional}</p>
                  </div>
                </div>

                <div className="compCell compSohoCell">
                  <div className="cellMobileLabel sohoLabel">
                    <Sparkles size={13} /> SOHO Agency
                  </div>
                  <div className="cellContent">
                    <CheckCircle2 size={18} className="iconSohoSuccess" />
                    <div>
                      <p>{item.soho}</p>
                      <span className="sohoPill">
                        <Zap size={12}/> {item.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Footer CTA */}
          <div className="comparisonFooter">
            <div className="compFooterText">
              <div className="compFooterIcon">
                <ShieldCheck size={26}/>
              </div>
              <div>
                <strong>Bạn đang tìm kiếm một đối tác thực chiến và minh bạch?</strong>
                <p>Nhận phân tích đánh giá hiện trạng website, tài khoản quảng cáo và phễu chuyển đổi miễn phí từ chuyên gia SOHO.</p>
              </div>
            </div>
            <a href="#contact" className="btn primary btnGlow">
              <span>Đăng ký Audit 0đ</span>
              <ArrowRight size={16}/>
              <span className="btnSweep"></span>
            </a>
          </div>
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
          <h2>3 nhóm số cần nhìn mỗi tuần</h2>
        </div>
        <div className="metricGrid">
          <div>
            <strong>SEO</strong>
            <h3>Tăng khả năng được tìm thấy</h3>
            <p>Visibility, trang tạo lead, truy vấn có ý định mua.</p>
          </div>
          <div>
            <strong>ADS</strong>
            <h3>Tối ưu chi phí tạo khách hàng</h3>
            <p>CPA, ROAS, lead quality, nhóm truy vấn lãng phí.</p>
          </div>
          <div>
            <strong>CRO</strong>
            <h3>Biến traffic thành cơ hội bán hàng</h3>
            <p>CTA, form, mobile friction, tỷ lệ booking/call.</p>
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
              <a href={sitePath('/blog/seo-ky-nguyen-ai-search')}>Đọc bài viết <ArrowRight size={16}/></a>
            </article>
            <article>
              <span>PERFORMANCE</span>
              <h3>Đừng chỉ nhìn CPC khi đánh giá quảng cáo</h3>
              <p>Một framework đơn giản để nối dữ liệu quảng cáo với lead, pipeline và doanh thu.</p>
              <a href={sitePath('/blog/toi-uu-roas-performance-ads')}>Đọc bài viết <ArrowRight size={16}/></a>
            </article>
            <article>
              <span>STRATEGY</span>
              <h3>Khi nào doanh nghiệp nên đầu tư SEO và Ads cùng lúc?</h3>
              <p>Phân vai hai kênh theo nhu cầu ngắn hạn, dài hạn và mức độ trưởng thành của thị trường.</p>
              <a href={sitePath('/blog/chien-luoc-seo-ads-song-hanh')}>Đọc bài viết <ArrowRight size={16}/></a>
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
      <Footer />
    </main>
  );
}
