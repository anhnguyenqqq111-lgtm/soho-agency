'use client';
import { useState, useEffect } from 'react';
import {
  AlertTriangle,
  Lightbulb,
  Zap,
  BarChart3,
  CheckSquare,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Layers3,
  CircleDollarSign,
  ChevronRight,
  ShieldCheck,
  Target
} from 'lucide-react';
import { sitePath } from './paths';
import { cleanPunctuation } from './cleanPunctuation';
export { cleanPunctuation };

// Subnav section definitions matching URL anchors (zero forbidden punctuation)
const navItems = [
  { id: 'thuc-trang', label: 'Thực trạng và Bẫy', icon: AlertTriangle },
  { id: 'giai-phap', label: 'Giải pháp và Trụ cột', icon: Lightbulb },
  { id: 'quy-trinh', label: 'Quy trình Sprint', icon: Zap },
  { id: 'so-sanh-roi', label: 'So sánh và ROI', icon: BarChart3 },
  { id: 'checklist', label: 'Checklist nghiệm thu', icon: CheckSquare },
  { id: 'faq', label: 'Hỏi đáp FAQ', icon: HelpCircle }
];

export default function ServiceSectionVisualizer({ service, article, serviceTitle }) {
  const [activeSection, setActiveSection] = useState('thuc-trang');
  const [checkedItems, setCheckedItems] = useState({
    'c1-0': true,
    'c1-1': true,
    'c2-0': true,
    'c3-0': true
  });
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Sync active section with scroll & hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && navItems.some(item => item.id === hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    }
  };

  const toggleCheck = (key) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // 3-Tier Quality Gate Checklist Items (Crisp, sharp, zero punctuation)
  const qualityGates = [
    {
      id: 'c1',
      title: 'Tầng 01 Nền tảng Kỹ thuật',
      badge: 'CẤP ĐỘ 01',
      theme: 'themeIndigo',
      items: [
        'Tốc độ tải trang đạt chuẩn xuất sắc trên cả thiết bị di động',
        'Cấu trúc website phân cấp logic và thân thiện với thuật toán tìm kiếm',
        'Hệ thống đo lường chuyển đổi ghi nhận dữ liệu hoàn toàn chuẩn xác'
      ]
    },
    {
      id: 'c2',
      title: 'Tầng 02 Thẩm quyền Nội dung',
      badge: 'CẤP ĐỘ 02',
      theme: 'themePurple',
      items: [
        'Nội dung giải quyết đúng băn khoăn và nhu cầu của khách hàng',
        'Thông tin chuyên gia và tổ chức được chứng thực uy tín rõ ràng',
        'Cấu trúc thông tin trực diện sẵn sàng cho tìm kiếm bằng AI'
      ]
    },
    {
      id: 'c3',
      title: 'Tầng 03 Hiệu quả Doanh thu',
      badge: 'CẤP ĐỘ 03',
      theme: 'themeGold',
      items: [
        'Tỷ lệ khách hàng tiềm năng liên hệ đạt tiêu chuẩn chất lượng',
        'Chi phí trên mỗi cơ hội bán hàng giảm dần theo từng chu kỳ',
        'Báo cáo dữ liệu thời gian thực minh bạch không giấu giếm'
      ]
    }
  ];

  const totalCheckCount = 9;
  const currentCheckedCount = Object.values(checkedItems).filter(Boolean).length;

  // 4 Executive FAQs (Concise, direct, zero forbidden marks)
  const executiveFaqs = [
    {
      q: 'Bao lâu thì chiến dịch bắt đầu tạo ra doanh thu?',
      a: 'Hệ thống bắt đầu tạo nguồn khách hàng ổn định từ tháng 3 và tăng tốc mạnh mẽ từ tháng 6 trở đi'
    },
    {
      q: 'Doanh nghiệp có sở hữu toàn bộ dữ liệu không?',
      a: 'Toàn bộ tài khoản quảng cáo website mã nguồn và dữ liệu khách hàng đều thuộc quyền sở hữu tuyệt đối của bạn'
    },
    {
      q: 'Chính sách bảo đảm kết quả cam kết như thế nào?',
      a: 'SOHO cam kết tiếp tục triển khai không thu phí hoặc hoàn trả ngân sách nếu không đạt đúng chỉ tiêu hợp đồng'
    },
    {
      q: 'Mô hình Sprint 2 tuần vận hành ra sao?',
      a: 'Cứ mỗi 2 tuần hai bên sẽ cùng đánh giá kết quả nghiệm thu và thống nhất mục tiêu triển khai cho chu kỳ tiếp theo'
    }
  ];

  return (
    <div className="serviceVisualizerContainer">
      {/* 1. STICKY SUBNAV BAR (FLAT ARCHITECTURAL TABS - RUNNING LINE HOVER) */}
      <nav className="serviceSubnavBar" aria-label="Điều hướng các khối dịch vụ">
        <div className="serviceSubnavInner">
          <div className="serviceSubnavTabs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`serviceSubnavTab ${isActive ? 'active' : ''}`}
                >
                  <Icon size={15} className="subnavIcon" />
                  <span className="subnavLabel">{item.label}</span>
                </a>
              );
            })}
          </div>
          <div className="serviceSubnavAction">
            <a href={sitePath('/#contact')} className="btn primary btnGlow btnSubnavCta">
              <span>Đăng ký Audit 0đ</span>
              <ArrowRight size={14} />
              <span className="btnSweep"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* 2. MAIN FRAMEWORK DIAGRAM SECTIONS (100% FLAT SHARP EDGES - MINIMAL TEXT) */}
      <div className="serviceVisualContentWrapper">
        {/* ============================================================
            SECTION 1: #thuc-trang (Sơ đồ Đối Chiếu Khoảng Trống)
            ============================================================ */}
        <section id="thuc-trang" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeFlame">
              <AlertTriangle size={13} />
              <span>KHỐI 01 THỰC TRẠNG VÀ BẪY CHI PHÍ</span>
            </div>
            <h2 className="visualSectionTitle">Nhận diện điểm nghẽn và bẫy chi phí phổ biến</h2>
            <p className="visualSectionSubtitle">
              Sơ đồ đối chiếu giữa cách làm cũ nhiều rủi ro và mô hình tăng trưởng thực chất
            </p>
          </div>

          <div className="frameworkDiagramWrap">
            {/* Làn 1: Cảnh báo Mô hình cũ */}
            <div className="diagramTrack trackOld">
              <div className="trackBadge flameTag">
                <span className="squareDot dotFlame" />
                <span>Mô hình cũ nhiều rủi ro</span>
              </div>
              <div className="trackFlow">
                <div className="diagramNode nodeProblem">
                  <span className="nodeStep">01</span>
                  <strong>Tín hiệu ảo</strong>
                  <p>Chạy theo lượt xem và từ khóa không tạo nhu cầu mua hàng</p>
                </div>
                <div className="diagramArrow arrowFlame">➔</div>
                <div className="diagramNode nodeProblem">
                  <span className="nodeStep">02</span>
                  <strong>Đốt ngân sách</strong>
                  <p>Giá thầu quảng cáo tăng cao không kiểm soát được chuyển đổi</p>
                </div>
                <div className="diagramArrow arrowFlame">➔</div>
                <div className="diagramNode nodeProblem">
                  <span className="nodeStep">03</span>
                  <strong>Hụt dòng tiền</strong>
                  <p>Báo cáo tăng trưởng ảo nhưng doanh thu thực tế dậm chân</p>
                </div>
              </div>
            </div>

            {/* Làn 2: Chuẩn mực SOHO */}
            <div className="diagramTrack trackSoho">
              <div className="trackBadge sohoTag">
                <span className="squareDot dotGold" />
                <span>Chuẩn mực SOHO tăng trưởng thực</span>
              </div>
              <div className="trackFlow">
                <div className="diagramNode nodeSolution">
                  <span className="nodeStep">01</span>
                  <strong>Đúng tệp khách</strong>
                  <p>Tập trung đúng người dùng có nhu cầu thực và sẵn sàng chi trả</p>
                </div>
                <div className="diagramArrow arrowIndigo">➔</div>
                <div className="diagramNode nodeSolution">
                  <span className="nodeStep">02</span>
                  <strong>Phễu chuyển đổi</strong>
                  <p>Trang đích sắc nét kết nối trực tiếp với lời hứa giá trị</p>
                </div>
                <div className="diagramArrow arrowIndigo">➔</div>
                <div className="diagramNode nodeSolution">
                  <span className="nodeStep">03</span>
                  <strong>Dòng tiền thực</strong>
                  <p>Khách hàng tiềm năng chất lượng cao và tích lũy tài sản số</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: #giai-phap (Sơ đồ Pipeline 4 Trụ Cột Chiến Lược)
            ============================================================ */}
        <section id="giai-phap" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgePurple">
              <Lightbulb size={13} />
              <span>KHỐI 02 TRỤ CỘT CHIẾN LƯỢC</span>
            </div>
            <h2 className="visualSectionTitle">Chuỗi giá trị tăng trưởng 4 trụ cột SOHO Engine</h2>
            <p className="visualSectionSubtitle">
              Sơ đồ quy trình 4 giai đoạn kết nối từ tối ưu nền tảng đến bứt phá doanh số
            </p>
          </div>

          <div className="frameworkPipelineWrap">
            <div className="pipelineStage themeIndigo">
              <div className="stageHeader">
                <span className="stageNumber">01</span>
                <span className="stagePhaseTag">TRỤ CỘT 01</span>
              </div>
              <h3 className="stageTitle">Nền tảng Kỹ thuật</h3>
              <div className="stageTags">
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Audit kỹ thuật toàn diện</span>
                </div>
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Tối ưu tốc độ tải trang</span>
                </div>
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Chuẩn hóa cấu trúc dữ liệu</span>
                </div>
              </div>
              <div className="pipelineConnectorArrow">➔</div>
            </div>

            <div className="pipelineStage themePurple">
              <div className="stageHeader">
                <span className="stageNumber">02</span>
                <span className="stagePhaseTag">TRỤ CỘT 02</span>
              </div>
              <h3 className="stageTitle">Nội dung Chuyên sâu</h3>
              <div className="stageTags">
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Đúng ý định tìm kiếm</span>
                </div>
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Thẩm quyền thực thể số</span>
                </div>
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Sẵn sàng cho tìm kiếm AI</span>
                </div>
              </div>
              <div className="pipelineConnectorArrow">➔</div>
            </div>

            <div className="pipelineStage themeGold">
              <div className="stageHeader">
                <span className="stageNumber">03</span>
                <span className="stagePhaseTag">TRỤ CỘT 03</span>
              </div>
              <h3 className="stageTitle">Tối ưu Chuyển đổi</h3>
              <div className="stageTags">
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Trang đích thuyết phục</span>
                </div>
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Lời hứa giá trị sắc nét</span>
                </div>
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Lời kêu gọi hành động rõ</span>
                </div>
              </div>
              <div className="pipelineConnectorArrow">➔</div>
            </div>

            <div className="pipelineStage themeFlame">
              <div className="stageHeader">
                <span className="stageNumber">04</span>
                <span className="stagePhaseTag">TRỤ CỘT 04</span>
              </div>
              <h3 className="stageTitle">Đo lường Doanh thu</h3>
              <div className="stageTags">
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Theo dõi chuyển đổi thực</span>
                </div>
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Tối ưu chi phí tạo lead</span>
                </div>
                <div className="stageTagItem">
                  <CheckCircle2 size={13} className="pillarCheckIcon" />
                  <span>Tăng trưởng doanh thu bền</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 3: #quy-trinh (Sơ đồ Lộ Trình 5 Chu Kỳ Sprint)
            ============================================================ */}
        <section id="quy-trinh" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeGold">
              <Zap size={13} />
              <span>KHỐI 03 LỘ TRÌNH SPRINT</span>
            </div>
            <h2 className="visualSectionTitle">Lộ trình triển khai Sprint 2 tuần minh bạch</h2>
            <p className="visualSectionSubtitle">
              Sơ đồ 5 chu kỳ thực chiến giúp doanh nghiệp kiểm soát tiến độ và đo lường kết quả cụ thể
            </p>
          </div>

          <div className="sprintFlowchartWrap">
            <div className="sprintFlowNode">
              <div className="sprintNodeHead">
                <span className="sprintBadge">S01</span>
                <span className="sprintWeek">Tuần 1 2</span>
              </div>
              <h4 className="sprintNodeTitle">Khảo sát toàn diện</h4>
              <p className="sprintNodeDesc">Thu thập dữ liệu hiện trạng và xác định mục tiêu kinh doanh trọng tâm</p>
              <div className="sprintDeliverableTags">
                <div className="sprintTagRow">
                  <ChevronRight size={13} className="stepArrowIcon" />
                  <span>Báo cáo kiểm toán kênh</span>
                </div>
                <div className="sprintTagRow">
                  <ChevronRight size={13} className="stepArrowIcon" />
                  <span>Kế hoạch hành động 90 ngày</span>
                </div>
              </div>
              <div className="sprintNodeArrow">➔</div>
            </div>

            <div className="sprintFlowNode">
              <div className="sprintNodeHead">
                <span className="sprintBadge">S02</span>
                <span className="sprintWeek">Tuần 3 4</span>
              </div>
              <h4 className="sprintNodeTitle">Chuẩn hóa nền tảng</h4>
              <p className="sprintNodeDesc">Gỡ bỏ điểm nghẽn kỹ thuật và cài đặt hệ thống đo lường chuyển đổi</p>
              <div className="sprintDeliverableTags">
                <div className="sprintTagRow">
                  <ChevronRight size={13} className="stepArrowIcon" />
                  <span>Sửa toàn bộ lỗi kỹ thuật</span>
                </div>
                <div className="sprintTagRow">
                  <ChevronRight size={13} className="stepArrowIcon" />
                  <span>Bảng đo lường chuyển đổi</span>
                </div>
              </div>
              <div className="sprintNodeArrow">➔</div>
            </div>

            <div className="sprintFlowNode">
              <div className="sprintNodeHead">
                <span className="sprintBadge">S03</span>
                <span className="sprintWeek">Tuần 5 8</span>
              </div>
              <h4 className="sprintNodeTitle">Triển khai quy mô</h4>
              <p className="sprintNodeDesc">Đẩy mạnh sản xuất nội dung trụ cột và mở rộng độ phủ thương hiệu</p>
              <div className="sprintDeliverableTags">
                <div className="sprintTagRow">
                  <ChevronRight size={13} className="stepArrowIcon" />
                  <span>Cụm nội dung chuyên sâu</span>
                </div>
                <div className="sprintTagRow">
                  <ChevronRight size={13} className="stepArrowIcon" />
                  <span>Kích hoạt các chiến dịch</span>
                </div>
              </div>
              <div className="sprintNodeArrow">➔</div>
            </div>

            <div className="sprintFlowNode">
              <div className="sprintNodeHead">
                <span className="sprintBadge">S04</span>
                <span className="sprintWeek">Tuần 9 12</span>
              </div>
              <h4 className="sprintNodeTitle">Kích hoạt phễu</h4>
              <p className="sprintNodeDesc">Tinh chỉnh trang đích và tối ưu hóa tỷ lệ chuyển đổi khách tiềm năng</p>
              <div className="sprintDeliverableTags">
                <div className="sprintTagRow">
                  <ChevronRight size={13} className="stepArrowIcon" />
                  <span>Tối ưu trang đích chính</span>
                </div>
                <div className="sprintTagRow">
                  <ChevronRight size={13} className="stepArrowIcon" />
                  <span>Gia tăng lượng lead thực</span>
                </div>
              </div>
              <div className="sprintNodeArrow">➔</div>
            </div>

            <div className="sprintFlowNode">
              <div className="sprintNodeHead">
                <span className="sprintBadge">S05</span>
                <span className="sprintWeek">Tuần 13 trở đi</span>
              </div>
              <h4 className="sprintNodeTitle">Bứt phá doanh số</h4>
              <p className="sprintNodeDesc">Tối ưu hóa lợi nhuận ròng và bàn giao toàn bộ tài sản số cho khách hàng</p>
              <div className="sprintDeliverableTags">
                <div className="sprintTagRow">
                  <ChevronRight size={13} className="stepArrowIcon" />
                  <span>Giảm chi phí tạo lead</span>
                </div>
                <div className="sprintTagRow">
                  <ChevronRight size={13} className="stepArrowIcon" />
                  <span>Bàn giao quyền quản trị</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 4: #so-sanh-roi (Sơ đồ Phương Trình Tài Chính & Đối Chiếu)
            ============================================================ */}
        <section id="so-sanh-roi" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeChampagne">
              <BarChart3 size={13} />
              <span>KHỐI 04 ĐỊNH LƯỢNG HIỆU QUẢ VÀ ROI</span>
            </div>
            <h2 className="visualSectionTitle">Phương trình tài chính và bài toán điểm hòa vốn</h2>
            <p className="visualSectionSubtitle">
              Sơ đồ công thức tính toán dòng tiền và ma trận đối chiếu 4 tiêu chí cốt lõi
            </p>
          </div>

          {/* SƠ ĐỒ PHƯƠNG TRÌNH TÀI CHÍNH */}
          <div className="roiFormulaDiagram">
            <div className="formulaBlock">
              <span className="formulaLabel">Ngân sách đầu tư</span>
              <strong>Kiểm soát chi phí</strong>
            </div>
            <span className="formulaSign">➔</span>
            <div className="formulaBlock">
              <span className="formulaLabel">Khách đúng nhu cầu</span>
              <strong>Tiếp cận chuẩn tệp</strong>
            </div>
            <span className="formulaSign">x</span>
            <div className="formulaBlock">
              <span className="formulaLabel">Tỷ lệ chuyển đổi</span>
              <strong>Trang đích sắc nét</strong>
            </div>
            <span className="formulaSign">=</span>
            <div className="formulaBlock highlightResult">
              <span className="formulaLabel">Lợi nhuận ròng</span>
              <strong>Điểm hòa vốn nhanh</strong>
            </div>
          </div>

          {/* BẢNG MA TRẬN ĐỐI CHIẾU 4 TIÊU CHÍ */}
          <div className="visualComparisonWrap">
            <table className="visualComparisonTable">
              <thead>
                <tr>
                  <th>Tiêu chí đối chiếu</th>
                  <th>Cách làm truyền thống</th>
                  <th className="sohoHead">
                    Chuẩn mực SOHO Engine
                    <span className="sohoRecommendTag">KHUYÊN DÙNG</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Trọng tâm theo dõi</strong></td>
                  <td>Lượt xem và nhấp chuột ảo</td>
                  <td className="sohoCell"><strong>Khách tiềm năng có nhu cầu thực</strong></td>
                </tr>
                <tr>
                  <td><strong>Quyền sở hữu tài nguyên</strong></td>
                  <td>Phụ thuộc nền tảng bên ngoài</td>
                  <td className="sohoCell"><strong>Doanh nghiệp làm chủ 100% tài sản</strong></td>
                </tr>
                <tr>
                  <td><strong>Đo lường hiệu quả</strong></td>
                  <td>Số liệu chung chung khó kiểm chứng</td>
                  <td className="sohoCell"><strong>Kết nối trực tiếp với doanh số thực tế</strong></td>
                </tr>
                <tr>
                  <td><strong>Cam kết trách nhiệm</strong></td>
                  <td>Hứa hẹn bằng lời nói</td>
                  <td className="sohoCell"><strong>Ký cam kết KPI bằng văn bản pháp lý</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3 HỘP ĐỊNH LƯỢNG ROI */}
          <div className="roiMetricsGrid">
            <div className="roiMetricBox">
              <small>Chi phí tạo khách tiềm năng</small>
              <strong>Giảm 4 lần từ tháng 9</strong>
              <p>Hệ thống tự nhiên tiếp tục tạo chuyển đổi không phụ thuộc hoàn toàn vào quảng cáo trả phí</p>
            </div>
            <div className="roiMetricBox highlightSOHO">
              <small>Lưu lượng truy cập chất lượng</small>
              <strong className="textBrandGold">Tăng trưởng 3 lần</strong>
              <p>Tập trung toàn diện vào tệp người dùng đang có nhu cầu giải pháp và sẵn sàng chi trả</p>
            </div>
            <div className="roiMetricBox">
              <small>Tỷ lệ đạt cam kết hợp đồng</small>
              <strong className="textBrandFlame">99.2% Dự án</strong>
              <p>Ràng buộc pháp lý bằng văn bản nghiệm thu và hợp đồng bảo mật thông tin tuyệt đối</p>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 5: #checklist (Ma Trận Kiểm Soát Chất Lượng 3 Cấp Độ)
            ============================================================ */}
        <section id="checklist" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgePrimary">
              <CheckSquare size={13} />
              <span>KHỐI 05 TIÊU CHUẨN NGHIỆM THU</span>
            </div>
            <h2 className="visualSectionTitle">Ma trận kiểm toán chất lượng 3 cấp độ</h2>
            <p className="visualSectionSubtitle">
              Bộ tiêu chí rõ ràng giúp ban lãnh đạo dễ dàng nghiệm thu kết quả công việc
            </p>
          </div>

          {/* THANH TIẾN ĐỘ NGHIỆM THU */}
          <div className="checklistProgressTracker">
            <div className="trackerInfo">
              <Sparkles size={16} className="textBrandGold" />
              <span>Tiến độ nghiệm thu thử nghiệm <strong>{currentCheckedCount} trên {totalCheckCount}</strong> tiêu chí hoàn thành</span>
            </div>
            <div className="progressBarBg">
              <div
                className="progressBarFill"
                style={{ width: `${(currentCheckedCount / totalCheckCount) * 100}%` }}
              />
            </div>
          </div>

          {/* 3 KHỐI KIỂM TOÁN PHẲNG */}
          <div className="qualityGateGrid">
            {qualityGates.map((gate) => (
              <div key={gate.id} className={`qualityGateCard ${gate.theme}`}>
                <div className="gateHead">
                  <span className="gateBadge">{gate.badge}</span>
                  <h3 className="gateTitle">{gate.title}</h3>
                </div>
                <div className="gateItemList">
                  {gate.items.map((itemText, idx) => {
                    const itemKey = `${gate.id}-${idx}`;
                    const isChecked = !!checkedItems[itemKey];
                    return (
                      <div
                        key={itemKey}
                        className={`gateItemRow ${isChecked ? 'checked' : ''}`}
                        onClick={() => toggleCheck(itemKey)}
                        role="checkbox"
                        aria-checked={isChecked}
                        tabIndex={0}
                      >
                        <div className="gateCheckbox">
                          <CheckCircle2 size={16} className={isChecked ? 'checkActive' : 'checkEmpty'} />
                        </div>
                        <span className="gateItemText">{itemText}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 6: #faq (Khối Hỏi Đáp Ban Lãnh Đạo FAQ)
            ============================================================ */}
        <section id="faq" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeOrange">
              <HelpCircle size={13} />
              <span>KHỐI 06 GIẢI ĐÁP FAQ</span>
            </div>
            <h2 className="visualSectionTitle">Những câu hỏi thường gặp của ban lãnh đạo</h2>
            <p className="visualSectionSubtitle">
              Giải đáp minh bạch thắc mắc trước khi quyết định đồng hành cùng SOHO
            </p>
          </div>

          <div className="interactiveFaqList">
            {executiveFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className={`visualFaqItem ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="visualFaqQuestion"
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faqNum">0{idx + 1}</span>
                    <span className="faqQuestionText">{faq.q}</span>
                    <ChevronDown size={18} className={`faqChevronIcon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="visualFaqAnswer">
                      <p className="faqAnswerText">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
