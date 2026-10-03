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
  ShieldCheck,
  Layers3,
  BrainCircuit,
  TrendingUp,
  TableProperties,
  Clock,
  CircleDollarSign,
  ChevronRight,
  Target
} from 'lucide-react';
import { sitePath } from './paths';
import { cleanPunctuation } from './cleanPunctuation';
export { cleanPunctuation };

// Clean inline text without markdown punctuation
function renderCleanInline(text) {
  if (!text) return '';
  const cleaned = cleanPunctuation(text);
  const boldParts = cleaned.split(/(\*\*.*?\*\*)/g);
  return boldParts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{cleanPunctuation(part.slice(2, -2))}</strong>;
    }
    const italicParts = part.split(/(\*.*?\*)/g);
    return italicParts.map((sub, j) => {
      if (sub.startsWith('*') && sub.endsWith('*')) {
        return <em key={`${i}-${j}`}>{cleanPunctuation(sub.slice(1, -1))}</em>;
      }
      return cleanPunctuation(sub);
    });
  });
}

// Subnav section definitions matching URL anchors (zero forbidden punctuation)
const navItems = [
  { id: 'thuc-trang', label: 'Thực trạng và Bẫy', icon: AlertTriangle },
  { id: 'giai-phap', label: 'Giải pháp và Trụ cột', icon: Lightbulb },
  { id: 'quy-trinh', label: 'Quy trình Sprint', icon: Zap },
  { id: 'so-sanh-roi', label: 'So sánh và ROI', icon: BarChart3 },
  { id: 'checklist', label: 'Checklist nghiệm thu', icon: CheckSquare },
  { id: 'faq', label: 'Hỏi đáp FAQ', icon: HelpCircle }
];

export default function ServiceSectionVisualizer({ article, serviceTitle }) {
  const [activeSection, setActiveSection] = useState('thuc-trang');
  const [checkedItems, setCheckedItems] = useState({});
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

  const toggleCheck = (idx) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (!article || !article.sections) return null;

  const sec0 = article.sections[0] || {};
  const sec1 = article.sections[1] || {};
  const sec2 = article.sections[2] || {};
  const sec3 = article.sections[3] || {};
  const sec4 = article.sections[4] || {};
  const sec5 = article.sections[5] || {};
  const sec6 = article.sections[6] || {};
  const sec7 = article.sections[7] || {};

  // Extract table from sec5
  const parseTable = (content) => {
    if (!content) return null;
    const lines = content.split('\n');
    const tableRows = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('|') && trimmed.endsWith('|') && !trimmed.includes('---')) {
        const cells = trimmed
          .split('|')
          .slice(1, -1)
          .map(c => cleanPunctuation(c));
        tableRows.push(cells);
      }
    }
    return tableRows.length >= 2 ? tableRows : null;
  };

  // Extract checklist from sec6
  const parseChecklist = (content) => {
    if (!content) return [];
    const lines = content.split('\n');
    const items = [];
    let currentCategory = 'Tiêu chuẩn kiểm toán';

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('#### Nhóm') || trimmed.startsWith('### Nhóm')) {
        currentCategory = cleanPunctuation(trimmed.replace(/^#+\s*/, ''));
      } else if (trimmed.startsWith('- [ ]') || trimmed.startsWith('* [ ]')) {
        const text = cleanPunctuation(trimmed.replace(/^[-*]\s*\[[ x]\]\s*/, ''));
        items.push({ text, category: currentCategory });
      }
    }
    return items;
  };

  // Extract FAQ from sec7
  const parseFaq = (content) => {
    if (!content) return [];
    const lines = content.split('\n');
    const faqs = [];
    let currentQ = '';
    let currentA = '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('### Câu hỏi') || trimmed.startsWith('### Câu ')) {
        if (currentQ) {
          faqs.push({
            question: cleanPunctuation(currentQ),
            answer: cleanPunctuation(currentA)
          });
        }
        currentQ = trimmed.replace(/^###\s*/, '');
        currentA = '';
      } else if (currentQ) {
        if (trimmed.startsWith('**Trả lời:**') || trimmed.startsWith('Trả lời:')) {
          currentA += ' ' + trimmed.replace(/^\*\*Trả lời:\*\*\s*/, '').replace(/^Trả lời:\s*/, '');
        } else if (!trimmed.startsWith('### ') && !trimmed.startsWith('## ')) {
          if (trimmed) currentA += ' ' + trimmed;
        }
      }
    }
    if (currentQ) {
      faqs.push({
        question: cleanPunctuation(currentQ),
        answer: cleanPunctuation(currentA)
      });
    }
    return faqs;
  };

  // Parse 4 pillars from sec3
  const parsePillars = (content) => {
    if (!content) return [];
    const lines = content.split('\n');
    const pillars = [];
    let currentPillar = null;

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('### Trụ cột') || trimmed.startsWith('### Trụ Cột')) {
        if (currentPillar) pillars.push(currentPillar);
        const title = cleanPunctuation(trimmed.replace(/^###\s*/, ''));
        currentPillar = { title, points: [], intro: '' };
      } else if (currentPillar) {
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          currentPillar.points.push(cleanPunctuation(trimmed.replace(/^[*|-]\s*/, '')));
        } else if (trimmed && !currentPillar.intro) {
          currentPillar.intro = cleanPunctuation(trimmed);
        }
      }
    }
    if (currentPillar) pillars.push(currentPillar);
    return pillars;
  };

  // Parse Sprint steps from sec4
  const parseSprintSteps = (content) => {
    if (!content) return [];
    const lines = content.split('\n');
    const steps = [];
    let currentStep = null;

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('### Bước') || trimmed.startsWith('### Sprint')) {
        if (currentStep) steps.push(currentStep);
        const title = cleanPunctuation(trimmed.replace(/^###\s*/, ''));
        currentStep = { title, points: [], desc: '' };
      } else if (currentStep) {
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          currentStep.points.push(cleanPunctuation(trimmed.replace(/^[*|-]\s*/, '')));
        } else if (trimmed && !currentStep.desc) {
          currentStep.desc = cleanPunctuation(trimmed);
        }
      }
    }
    if (currentStep) steps.push(currentStep);
    return steps;
  };

  const comparisonTable = parseTable(sec5.content);
  const checklistItems = parseChecklist(sec6.content);
  const faqList = parseFaq(sec7.content);
  const pillarsList = parsePillars(sec3.content);
  const sprintSteps = parseSprintSteps(sec4.content);

  const totalChecklist = checklistItems.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="serviceVisualizerContainer">
      {/* 1. STICKY SUBNAV BAR WITH ANIMATED LINE ON HOVER */}
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
                  <Icon size={16} className="subnavIcon" />
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

      {/* 2. MAIN VISUAL SECTIONS (SOHO BRAND THEME - NO ROUNDED BLOCKS - MINIMALIST DIAGRAMS) */}
      <div className="serviceVisualContentWrapper">
        {/* ============================================================
            SECTION 1: #thuc-trang (Sơ đồ chẩn đoán đối chiếu)
            ============================================================ */}
        <section id="thuc-trang" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeFlame">
              <AlertTriangle size={13} />
              <span>KHỐI 01 THỰC TRẠNG VÀ BẪY CHI PHÍ</span>
            </div>
            <h2 className="visualSectionTitle">Vì sao phương pháp cũ làm ngân sách tăng vọt nhưng doanh số dậm chân tại chỗ</h2>
            <p className="visualSectionSubtitle">
              Sơ đồ chẩn đoán đối chiếu giữa bẫy chỉ số ảo và chuẩn mực tăng trưởng thực tế giúp nhận diện ngay điểm nghẽn
            </p>
          </div>

          {/* SƠ ĐỒ MINH HỌA ĐỐI CHIẾU FLOWCHART */}
          <div className="frameworkDiagramWrap">
            {/* Track 1: Mô hình cũ nhiều rủi ro */}
            <div className="diagramTrack trackOld">
              <div className="trackBadge flameTag">
                <span className="dotFlame" />
                <span>Mô hình cũ nhiều rủi ro</span>
              </div>
              <div className="trackFlow">
                <div className="diagramNode nodeProblem">
                  <span className="nodeStep">01</span>
                  <strong>Tín hiệu ảo</strong>
                  <p>Tập trung từ khóa chung chung không có ý định mua hàng thực tế</p>
                </div>
                <div className="diagramArrow arrowFlame">➔</div>
                <div className="diagramNode nodeProblem">
                  <span className="nodeStep">02</span>
                  <strong>Đốt ngân sách</strong>
                  <p>Giá thầu quảng cáo tăng cao trong khi chuyển đổi không bù nổi chi phí</p>
                </div>
                <div className="diagramArrow arrowFlame">➔</div>
                <div className="diagramNode nodeProblem">
                  <span className="nodeStep">03</span>
                  <strong>Hụt dòng tiền</strong>
                  <p>Báo cáo tăng trưởng ảo nhưng doanh thu thực và lợi nhuận dậm chân</p>
                </div>
              </div>
            </div>

            {/* Track 2: Chuẩn mực SOHO tăng trưởng thực */}
            <div className="diagramTrack trackSoho">
              <div className="trackBadge sohoTag">
                <span className="dotGold" />
                <span>Chuẩn mực SOHO tăng trưởng thực</span>
              </div>
              <div className="trackFlow">
                <div className="diagramNode nodeSolution">
                  <span className="nodeStep">01</span>
                  <strong>Đúng nhu cầu</strong>
                  <p>Bao phủ chuẩn tệp khách hàng có ý định chuyển đổi và sẵn sàng chi trả</p>
                </div>
                <div className="diagramArrow arrowIndigo">➔</div>
                <div className="diagramNode nodeSolution">
                  <span className="nodeStep">02</span>
                  <strong>Phễu liền mạch</strong>
                  <p>Nối liền tìm kiếm với trang đích chuyển đổi có thông điệp thuyết phục</p>
                </div>
                <div className="diagramArrow arrowIndigo">➔</div>
                <div className="diagramNode nodeSolution">
                  <span className="nodeStep">03</span>
                  <strong>Dòng tiền thực</strong>
                  <p>Tạo khách hàng tiềm năng chất lượng cao và tích lũy tài sản số bền vững</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insight Visual Banner (Sharp corners, Zero Quotes) */}
          <div className="visualInsightBanner">
            <div className="bannerGlowIcon">
              <Lightbulb size={24} />
            </div>
            <div>
              <strong>Thông điệp từ Chuyên gia SOHO</strong>
              <p>
                Một chiến dịch thành công không đo bằng lượt xem hay lượt nhấp chuột. Giá trị thực tế duy nhất là số lượng Qualified Leads và Doanh thu thực đổ về tài khoản doanh nghiệp.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: #giai-phap (Sơ đồ chuỗi 4 trụ cột chiến lược)
            ============================================================ */}
        <section id="giai-phap" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgePurple">
              <Lightbulb size={13} />
              <span>KHỐI 02 TRỤ CỘT CHIẾN LƯỢC</span>
            </div>
            <h2 className="visualSectionTitle">Bản chất giải pháp định hướng doanh thu và 4 trụ cột SOHO</h2>
            <p className="visualSectionSubtitle">
              Sơ đồ chuỗi giá trị tăng trưởng số kết nối trực tiếp với 4 giai đoạn nhận biết cân nhắc quyết định và duy trì
            </p>
          </div>

          {/* 4 PILLARS STRATEGIC PIPELINE DIAGRAM */}
          <div className="frameworkPipelineWrap">
            {pillarsList.length > 0 ? (
              pillarsList.map((pillar, idx) => {
                const pTitle = cleanPunctuation(pillar.title.replace(/^Trụ cột \d+\s*/i, ''));
                const pPoints = pillar.points.slice(0, 3).map(pt => cleanPunctuation(pt));
                const themeClasses = ['themeIndigo', 'themePurple', 'themeGold', 'themeFlame'];
                const themeClass = themeClasses[idx % themeClasses.length];
                return (
                  <div key={idx} className={`pipelineStage ${themeClass}`}>
                    <div className="stageHeader">
                      <span className="stageNumber">0{idx + 1}</span>
                      <span className="stagePhaseTag">Trụ cột 0{idx + 1}</span>
                    </div>
                    <h3 className="stageTitle">{pTitle}</h3>
                    {pillar.intro && (
                      <p className="stageDesc">{cleanPunctuation(pillar.intro)}</p>
                    )}
                    <div className="stageTags">
                      {pPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="stageTagItem">
                          <CheckCircle2 size={14} className="pillarCheckIcon" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                    {idx < pillarsList.length - 1 && (
                      <div className="pipelineConnectorArrow">➔</div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="pipelineStage themeIndigo">
                <p>Nội dung giải pháp chuyên sâu đang được đồng bộ hóa</p>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            SECTION 3: #quy-trinh (Sơ đồ lộ trình Sprint 2 tuần)
            ============================================================ */}
        <section id="quy-trinh" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeGold">
              <Zap size={13} />
              <span>KHỐI 03 LỘ TRÌNH SPRINT</span>
            </div>
            <h2 className="visualSectionTitle">Quy trình vận hành Sprint 2 tuần rõ ràng và minh bạch</h2>
            <p className="visualSectionSubtitle">
              Sơ đồ lộ trình chia nhỏ hạng mục theo chu kỳ 2 tuần giúp kiểm soát tiến độ và đo lường kết quả cụ thể
            </p>
          </div>

          {/* SPRINT ROADMAP FLOWCHART DIAGRAM */}
          <div className="sprintFlowchartWrap">
            {sprintSteps.length > 0 ? (
              sprintSteps.map((step, idx) => {
                const sTitle = cleanPunctuation(
                  step.title.replace(/^Bước \d+\s*(\(.*?\))?\s*/i, '').replace(/^Sprint \d+\s*/i, '')
                );
                const sDesc = cleanPunctuation(step.desc);
                const sPoints = step.points.slice(0, 2).map(pt => cleanPunctuation(pt));
                const weeks = ['Tuần 1 2', 'Tuần 3 4', 'Tuần 5 8', 'Tuần 9 12', 'Tuần 13 trở đi'];
                return (
                  <div key={idx} className="sprintFlowNode">
                    <div className="sprintNodeHead">
                      <span className="sprintBadge">S0{idx + 1}</span>
                      <span className="sprintWeek">{weeks[idx] || 'Chu kỳ tiếp'}</span>
                    </div>
                    <h4 className="sprintNodeTitle">{sTitle}</h4>
                    {sDesc && <p className="sprintNodeDesc">{sDesc}</p>}
                    <div className="sprintDeliverableTags">
                      {sPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="sprintTagRow">
                          <ChevronRight size={13} className="stepArrowIcon" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                    {idx < sprintSteps.length - 1 && (
                      <div className="sprintNodeArrow">➔</div>
                    )}
                  </div>
                );
              })
            ) : (
              <p>Quy trình triển khai Sprint đang được cập nhật</p>
            )}
          </div>
        </section>

        {/* ============================================================
            SECTION 4: #so-sanh-roi (Sơ đồ công thức ROI & Bảng đối chiếu)
            ============================================================ */}
        <section id="so-sanh-roi" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeChampagne">
              <BarChart3 size={13} />
              <span>KHỐI 04 ĐỊNH LƯỢNG HIỆU QUẢ VÀ ROI</span>
            </div>
            <h2 className="visualSectionTitle">So sánh toàn diện và bài toán điểm hòa vốn</h2>
            <p className="visualSectionSubtitle">
              Sơ đồ tính toán dòng tiền và bảng ma trận đối chiếu 3 mô hình triển khai thực tế
            </p>
          </div>

          {/* SƠ ĐỒ CÔNG THỨC ROI TINH GỌN */}
          <div className="roiFormulaDiagram">
            <div className="formulaBlock">
              <span className="formulaLabel">Ngân sách đầu tư</span>
              <strong>Tối ưu chi phí tạo lead</strong>
            </div>
            <span className="formulaSign">➔</span>
            <div className="formulaBlock">
              <span className="formulaLabel">Tỷ lệ chuyển đổi</span>
              <strong>Gia tăng khách sẵn sàng mua</strong>
            </div>
            <span className="formulaSign">x</span>
            <div className="formulaBlock">
              <span className="formulaLabel">Giá trị vòng đời</span>
              <strong>Tích lũy tài nguyên số lâu dài</strong>
            </div>
            <span className="formulaSign">=</span>
            <div className="formulaBlock highlightResult">
              <span className="formulaLabel">Lợi nhuận ròng</span>
              <strong>Điểm hòa vốn nhanh và bền vững</strong>
            </div>
          </div>

          {/* Comparison Table (Sharp corners) */}
          {comparisonTable && (
            <div className="visualComparisonWrap">
              <div className="tableNotice">
                <TableProperties size={14} /> Cuộn ngang để xem đầy đủ bảng so sánh
              </div>
              <table className="visualComparisonTable">
                <thead>
                  <tr>
                    {comparisonTable[0].map((col, cIdx) => (
                      <th key={cIdx} className={cIdx === comparisonTable[0].length - 1 ? 'sohoHead' : ''}>
                        {cleanPunctuation(col)}
                        {cIdx === comparisonTable[0].length - 1 && <span className="sohoRecommendTag">KHUYÊN DÙNG</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.slice(1).map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className={cIdx === row.length - 1 ? 'sohoCell' : ''}>
                          {renderCleanInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 3 Metric Cards Định lượng */}
          <div className="roiSimulationCard">
            <div className="roiSimHead">
              <CircleDollarSign size={24} className="textBrandGold" />
              <div>
                <strong>Mô phỏng Điểm hòa vốn và Lợi nhuận tích lũy</strong>
                <span>So sánh trực quan giữa kênh Ads trả phí thuần túy và Hệ thống Tăng trưởng SOHO</span>
              </div>
            </div>
            <div className="roiMetricsGrid">
              <div className="roiMetricBox">
                <small>Kịch bản Chạy Ads đơn thuần</small>
                <strong>CPA cố định và đắt dần</strong>
                <p>Tắt ngân sách là tắt dòng khách hàng Doanh nghiệp chịu áp lực liên tục lên biên lợi nhuận</p>
              </div>
              <div className="roiMetricBox highlightSOHO">
                <small>Chiến dịch Tăng trưởng SOHO</small>
                <strong className="textBrandGold">CAC giảm 4x từ tháng 9</strong>
                <p>Website trở thành tài sản số tích lũy tiếp tục tạo ra Qualified Leads tự nhiên với chi phí 0đ</p>
              </div>
              <div className="roiMetricBox">
                <small>Tỷ lệ Đạt cam kết KPI</small>
                <strong className="textBrandFlame">99.2% Hợp đồng</strong>
                <p>Ký cam kết KPI định lượng bằng văn bản pháp lý và Thỏa thuận bảo mật thông tin NDA</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 5: #checklist (Ma trận tiêu chuẩn nghiệm thu)
            ============================================================ */}
        <section id="checklist" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgePrimary">
              <CheckSquare size={13} />
              <span>KHỐI 05 TIÊU CHUẨN NGHIỆM THU</span>
            </div>
            <h2 className="visualSectionTitle">Bộ Checklist tiêu chí kiểm toán và nghiệm thu chất lượng</h2>
            <p className="visualSectionSubtitle">
              Bộ tiêu chuẩn kiểm toán thực tế giúp ban lãnh đạo dễ dàng kiểm chứng chất lượng và tính minh bạch
            </p>
          </div>

          <div className="checklistProgressTracker">
            <div className="trackerInfo">
              <Sparkles size={16} className="textBrandGold" />
              <span>Tiến độ nghiệm thu thử nghiệm <strong>{checkedCount} trên {totalChecklist}</strong> tiêu chí hoàn thành</span>
            </div>
            <div className="progressBarBg">
              <div
                className="progressBarFill"
                style={{ width: `${totalChecklist > 0 ? (checkedCount / totalChecklist) * 100 : 0}%` }}
              />
            </div>
          </div>

          {/* Interactive Checklist Grid */}
          <div className="interactiveChecklistGrid">
            {checklistItems.map((item, idx) => {
              const isChecked = !!checkedItems[idx];
              return (
                <div
                  key={idx}
                  className={`interactiveCheckCard ${isChecked ? 'checked' : ''}`}
                  onClick={() => toggleCheck(idx)}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                >
                  <div className="checkCardBox">
                    <CheckCircle2 size={18} className={isChecked ? 'checkIconActive' : 'checkIconEmpty'} />
                  </div>
                  <div className="checkCardContent">
                    <span className="checkCategoryBadge">{cleanPunctuation(item.category)}</span>
                    <p>{renderCleanInline(item.text)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            SECTION 6: #faq (Hỏi đáp chuyên sâu FAQ)
            ============================================================ */}
        <section id="faq" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeOrange">
              <HelpCircle size={13} />
              <span>KHỐI 06 GIẢI ĐÁP FAQ</span>
            </div>
            <h2 className="visualSectionTitle">Câu hỏi thường gặp về cam kết chi phí và thời gian hoàn vốn</h2>
            <p className="visualSectionSubtitle">
              Giải đáp minh bạch thắc mắc trước khi quyết định đồng hành cùng SOHO Agency
            </p>
          </div>

          <div className="interactiveFaqList">
            {faqList.map((faq, idx) => {
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
                    <span className="faqQuestionText">{cleanPunctuation(faq.question)}</span>
                    <ChevronDown size={18} className={`faqChevronIcon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="visualFaqAnswer">
                      <div className="faqAnswerContent">
                        {renderCleanInline(faq.answer)}
                      </div>
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
