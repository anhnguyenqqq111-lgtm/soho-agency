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
  ChevronRight
} from 'lucide-react';
import { sitePath } from './paths';

// Format text with bold, italic
function renderInlineFormatting(text) {
  if (!text) return '';
  const boldParts = text.split(/(\*\*.*?\*\*)/g);
  return boldParts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const italicParts = part.split(/(\*.*?\*)/g);
    return italicParts.map((sub, j) => {
      if (sub.startsWith('*') && sub.endsWith('*')) {
        return <em key={`${i}-${j}`}>{sub.slice(1, -1)}</em>;
      }
      return sub;
    });
  });
}

// Subnav section definitions matching URL anchors
const navItems = [
  { id: 'thuc-trang', label: 'Thực trạng & Bẫy', icon: AlertTriangle },
  { id: 'giai-phap', label: 'Giải pháp & Trụ cột', icon: Lightbulb },
  { id: 'quy-trinh', label: 'Quy trình Sprint', icon: Zap },
  { id: 'so-sanh-roi', label: 'So sánh & ROI', icon: BarChart3 },
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

    // Scroll spy
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
        const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
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
        currentCategory = trimmed.replace(/^#+\s*/, '');
      } else if (trimmed.startsWith('- [ ]') || trimmed.startsWith('* [ ]')) {
        const text = trimmed.replace(/^[-*]\s*\[[ x]\]\s*/, '');
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
          faqs.push({ question: currentQ, answer: currentA.trim() });
        }
        currentQ = trimmed.replace(/^###\s*/, '');
        currentA = '';
      } else if (currentQ) {
        if (trimmed.startsWith('**Trả lời:**') || trimmed.startsWith('Trả lời:')) {
          currentA += ' ' + trimmed.replace(/^\*\*Trả lời:\*\*\s*/, '').replace(/^Trả lời:\s*/, '');
        } else if (!trimmed.startsWith('### ') && !trimmed.startsWith('## ')) {
          if (trimmed) currentA += '\n\n' + trimmed;
        }
      }
    }
    if (currentQ) {
      faqs.push({ question: currentQ, answer: currentA.trim() });
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
        const title = trimmed.replace(/^###\s*/, '');
        currentPillar = { title, points: [], intro: '' };
      } else if (currentPillar) {
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          currentPillar.points.push(trimmed.replace(/^[*|-]\s*/, ''));
        } else if (trimmed && !currentPillar.intro) {
          currentPillar.intro = trimmed;
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
        const title = trimmed.replace(/^###\s*/, '');
        currentStep = { title, points: [], desc: '' };
      } else if (currentStep) {
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          currentStep.points.push(trimmed.replace(/^[*|-]\s*/, ''));
        } else if (trimmed && !currentStep.desc) {
          currentStep.desc = trimmed;
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

      {/* 2. MAIN VISUAL SECTIONS (SOHO BRAND THEME) */}
      <div className="serviceVisualContentWrapper">
        {/* ============================================================
            SECTION 1: #thuc-trang (Thực trạng & Bẫy chi phí)
            ============================================================ */}
        <section id="thuc-trang" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeFlame">
              <AlertTriangle size={13} />
              <span>KHỐI 01 • THỰC TRẠNG & BẪY CHI PHÍ</span>
            </div>
            <h2 className="visualSectionTitle">Vì sao phương pháp cũ làm ngân sách tăng vọt nhưng doanh số dậm chân tại chỗ?</h2>
            <p className="visualSectionSubtitle">
              Phân tích các điểm mù chí mạng khiến hơn 80% doanh nghiệp rơi vào bẫy báo cáo chỉ số ảo (Vanity Metrics) và lãng phí chi phí cơ hội.
            </p>
          </div>

          <div className="painAgitateGrid">
            {/* Card 1: Thực trạng bẫy chỉ số ảo */}
            <div className="painAgitateCard painCardFlame">
              <div className="cardTopBadge badgeFlame">
                <span className="dotFlame" />
                <span>ĐIỂM MÙ TRIỂN KHAI</span>
              </div>
              <h3>1.1. Nghịch lý & Bẫy "Chỉ số ảo" (Vanity Metrics)</h3>
              <p className="cardSummaryText">
                Traffic biểu đồ tăng vọt, báo cáo xếp hạng từ khóa xanh mướt, nhưng tỷ lệ chuyển đổi thành khách hàng thực tế (Qualified Leads) dưới 0.2%.
              </p>
              <ul className="visualAlertList listFlame">
                <li>
                  <strong>Bẫy từ khóa rác:</strong> Tập trung vào truy vấn thông tin chung chung, không có ý định mua hàng (Zero Commercial Intent).
                </li>
                <li>
                  <strong>Phễu chuyển đổi phân mảnh:</strong> Mỗi bài viết như một ốc đảo cô lập, không có luồng dẫn dắt sang phễu bán hàng.
                </li>
                <li>
                  <strong>Nội dung xào xáo do AI rác:</strong> Thiếu chiều sâu chuyên gia, dễ dàng bị Google Helpful Content Update quét sạch.
                </li>
              </ul>
            </div>

            {/* Card 2: Chi phí cơ hội & Thiệt hại */}
            <div className="painAgitateCard agitateCardGold">
              <div className="cardTopBadge badgeGold">
                <span className="dotGold" />
                <span>THIỆT HẠI KINH DOANH</span>
              </div>
              <h3>1.2. Chi phí cơ hội & Thiệt hại tài chính thực tế</h3>
              <p className="cardSummaryText">
                Giá thầu quảng cáo leo thang không ngừng, trong khi thương hiệu đánh mất vị thế tìm kiếm thương mại vào tay đối thủ tiên phong.
              </p>
              <ul className="visualAlertList listGold">
                <li>
                  <strong>Bão giá thầu CAC & CPA:</strong> Giá click trong các ngành B2B tăng 35%–80%, tạo áp lực nặng nề lên biên lợi nhuận.
                </li>
                <li>
                  <strong>Mất thị phần vào tay đối thủ:</strong> Đối thủ chiếm sóng các từ khóa so sánh sản phẩm và các khối trích dẫn AI Overviews.
                </li>
                <li>
                  <strong>Án phạt thuật toán mũ đen:</strong> Mua bán backlink rác, traffic bot khiến toàn bộ tên miền bị Google xóa sạch chỉ mục.
                </li>
              </ul>
            </div>
          </div>

          {/* Key Insight Visual Banner (Deep Midnight + Cyber Gold) */}
          <div className="visualInsightBanner">
            <div className="bannerGlowIcon">
              <Lightbulb size={24} />
            </div>
            <div>
              <strong>Thông điệp từ Chuyên gia SOHO:</strong>
              <p>
                "Một chiến dịch marketing thành công không đo bằng lượt xem hay lượt nhấp chuột. Giá trị thực tế duy nhất là số lượng Qualified Leads và Doanh thu thực đổ về tài khoản doanh nghiệp."
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: #giai-phap (Bản chất & 4 Trụ cột chiến lược)
            ============================================================ */}
        <section id="giai-phap" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgePurple">
              <Lightbulb size={13} />
              <span>KHỐI 02 • BẢN CHẤT GIẢI PHÁP ĐỘT PHÁ</span>
            </div>
            <h2 className="visualSectionTitle">Bản chất giải pháp định hướng doanh thu & 4 Trụ cột cốt lõi của SOHO</h2>
            <p className="visualSectionSubtitle">
              Xây dựng cỗ máy tăng trưởng số bền vững, kết nối trực tiếp từ khóa với 4 giai đoạn hành trình mua hàng (TOFU - MOFU - BOFU - Retention).
            </p>
          </div>

          {/* 4 Pillars Infographic Grid */}
          <div className="pillarsInfographicGrid">
            {pillarsList.length > 0 ? (
              pillarsList.map((pillar, idx) => {
                const icons = [Layers3, BrainCircuit, ShieldCheck, TrendingUp];
                const themeClasses = ['themeIndigo', 'themePurple', 'themeGold', 'themeFlame'];
                const IconComp = icons[idx % icons.length];
                const themeClass = themeClasses[idx % themeClasses.length];
                return (
                  <div key={idx} className={`pillarVisualCard ${themeClass}`}>
                    <div className="pillarCardHeader">
                      <div className="pillarIndexTag">0{idx + 1}</div>
                      <div className="pillarIconWrap">
                        <IconComp size={22} />
                      </div>
                    </div>
                    <h3 className="pillarCardTitle">{pillar.title.replace(/^Trụ cột \d+:\s*/, '')}</h3>
                    {pillar.intro && <p className="pillarCardIntro">{pillar.intro}</p>}
                    <ul className="pillarPointsList">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <CheckCircle2 size={16} className="pillarCheckIcon" />
                          <span>{renderInlineFormatting(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })
            ) : (
              <div className="pillarVisualCard themeIndigo">
                <p>Nội dung giải pháp chuyên sâu đang được đồng bộ hóa.</p>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            SECTION 3: #quy-trinh (Quy trình triển khai Sprint 5 bước)
            ============================================================ */}
        <section id="quy-trinh" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeGold">
              <Zap size={13} />
              <span>KHỐI 03 • LỘ TRÌNH THỰC THI SPRINT</span>
            </div>
            <h2 className="visualSectionTitle">Quy trình vận hành Sprint 5 bước rõ ràng & minh bạch</h2>
            <p className="visualSectionSubtitle">
              Loại bỏ cách làm dàn trải. Mọi hạng mục đều được chia nhỏ thành các chu kỳ Sprint 2 tuần với kết quả đầu ra cụ thể, nghiệm thu định lượng.
            </p>
          </div>

          {/* Sprint Step Timeline */}
          <div className="sprintRoadmapFlow">
            {sprintSteps.length > 0 ? (
              sprintSteps.map((step, idx) => {
                const stepNum = idx + 1;
                return (
                  <div key={idx} className="sprintStepCard">
                    <div className="stepTopRow">
                      <span className="stepBadgeCircle">S{stepNum}</span>
                      <span className="stepDurationPill">
                        <Clock size={12} />
                        {idx === 0 && 'Tuần 1–2'}
                        {idx === 1 && 'Tuần 3–4'}
                        {idx === 2 && 'Tuần 5–8'}
                        {idx === 3 && 'Tuần 9–12'}
                        {idx === 4 && 'Tuần 13+'}
                      </span>
                    </div>
                    <h3 className="stepCardTitle">{step.title.replace(/^Bước \d+\s*(\(.*?\))?:\s*/, '')}</h3>
                    {step.desc && <p className="stepCardDesc">{step.desc}</p>}
                    <div className="stepDeliverablesBox">
                      <strong>Hạng mục nghiệm thu:</strong>
                      <ul>
                        {step.points.slice(0, 3).map((pt, pIdx) => (
                          <li key={pIdx}>
                            <ChevronRight size={13} className="stepArrowIcon" />
                            <span>{renderInlineFormatting(pt)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Quy trình triển khai Sprint đang được cập nhật.</p>
            )}
          </div>
        </section>

        {/* ============================================================
            SECTION 4: #so-sanh-roi (So sánh toàn diện & Bài toán ROI)
            ============================================================ */}
        <section id="so-sanh-roi" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgeChampagne">
              <BarChart3 size={13} />
              <span>KHỐI 04 • ĐỊNH LƯỢNG HIỆU QUẢ & ROI</span>
            </div>
            <h2 className="visualSectionTitle">So sánh toàn diện & Bài toán kinh tế điểm hòa vốn</h2>
            <p className="visualSectionSubtitle">
              Đối chiếu minh bạch giữa 3 mô hình triển khai và bài toán kinh tế định lượng giúp Ban lãnh đạo nhìn thấy rõ lợi tức đầu tư (ROI).
            </p>
          </div>

          {/* Comparison Table */}
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
                        {col}
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
                          {renderInlineFormatting(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Financial Simulation / ROI Visual Card */}
          <div className="roiSimulationCard">
            <div className="roiSimHead">
              <CircleDollarSign size={24} className="textBrandGold" />
              <div>
                <strong>Mô phỏng Điểm hòa vốn & Lợi nhuận tích lũy</strong>
                <span>So sánh trực quan giữa kênh Ads trả phí thuần túy và Hệ thống Tăng trưởng SOHO</span>
              </div>
            </div>
            <div className="roiMetricsGrid">
              <div className="roiMetricBox">
                <small>Kịch bản Chạy Ads đơn thuần</small>
                <strong>CPA cố định & đắt dần</strong>
                <p>Tắt ngân sách là tắt dòng khách hàng. Doanh nghiệp chịu áp lực liên tục lên biên lợi nhuận.</p>
              </div>
              <div className="roiMetricBox highlightSOHO">
                <small>Chiến dịch Tăng trưởng SOHO</small>
                <strong className="textBrandGold">CAC giảm 4x từ tháng 9</strong>
                <p>Website trở thành tài sản số tích lũy, tiếp tục tạo ra Qualified Leads tự nhiên với chi phí 0đ.</p>
              </div>
              <div className="roiMetricBox">
                <small>Tỷ lệ Đạt cam kết KPI</small>
                <strong className="textBrandFlame">99.2% Hợp đồng</strong>
                <p>Ký cam kết KPI định lượng bằng văn bản pháp lý và Thỏa thuận bảo mật thông tin (NDA).</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 5: #checklist (Checklist nghiệm thu cho CEO / CMO)
            ============================================================ */}
        <section id="checklist" className="visualSectionBlock">
          <div className="visualSectionHeader">
            <div className="visualSectionBadge badgePrimary">
              <CheckSquare size={13} />
              <span>KHỐI 05 • TIÊU CHUẨN NGHIỆM THU CHO CEO / CMO</span>
            </div>
            <h2 className="visualSectionTitle">Bộ Checklist tiêu chí kiểm toán & nghiệm thu chất lượng</h2>
            <p className="visualSectionSubtitle">
              Bộ tiêu chuẩn kiểm toán thực tế giúp Ban lãnh đạo doanh nghiệp dễ dàng kiểm chứng chất lượng và tính minh bạch của dịch vụ.
            </p>
          </div>

          <div className="checklistProgressTracker">
            <div className="trackerInfo">
              <Sparkles size={16} className="textBrandGold" />
              <span>Tiến độ nghiệm thu thử nghiệm: <strong>{checkedCount} / {totalChecklist}</strong> tiêu chí hoàn thành</span>
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
                    <span className="checkCategoryBadge">{item.category}</span>
                    <p>{renderInlineFormatting(item.text)}</p>
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
              <span>KHỐI 06 • GIẢI ĐÁP BĂN KHOĂN (FAQ)</span>
            </div>
            <h2 className="visualSectionTitle">Câu hỏi thường gặp về cam kết, chi phí & thời gian hoàn vốn</h2>
            <p className="visualSectionSubtitle">
              Giải đáp minh bạch mọi thắc mắc của khách hàng trước khi quyết định đồng hành cùng SOHO Agency.
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
                    <span className="faqQuestionText">{faq.question}</span>
                    <ChevronDown size={18} className={`faqChevronIcon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="visualFaqAnswer">
                      <div className="faqAnswerContent">
                        {renderInlineFormatting(faq.answer)}
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
