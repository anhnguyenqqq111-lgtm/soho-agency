import CtaBand from '../ui/CtaBand';
import {ROLES, stageOf, FORM_SERVICE} from '../data/touchpoints';

/*
  Khối liên hệ cuối mỗi trang dịch vụ: nhãn và lời mời theo dịch vụ; form chọn sẵn dịch vụ đó (FORM_SERVICE).
*/
export function ContextualServiceCTA({slug, text}) {
  const r = ROLES[slug];
  return (
    <CtaBand
      title={<span className="hl">{r.cta}</span>}
      text={text || `Gửi website và kênh đang chạy. SOHO xem điểm chạm "${stageOf(r.primary).name}" của bạn và gửi lại những việc nên làm trước.`}
      service={FORM_SERVICE[slug]}
    />
  );
}
