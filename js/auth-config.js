// 로그인 설정 — 이 파일 한 곳만 바꾸면 된다(생성: data10-00/scripts/apply-auth-kit.mjs, 대문 문구 출처 docs/plan.json).
// 내 Supabase 로 옮길 때: url · anonKey 를 내 프로젝트 값으로, 카카오를 설정하지 않았으면 kakao: false. 안내 = docs/내_깃허브로_옮기기.md
// prefix 는 supabase/auth.sql 의 표 이름 앞부분과 같아야 한다.
window.AUTH_CONFIG = {
  "url": "https://hcmgdztsgjvzcyxyayaj.supabase.co",
  "anonKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw",
  "prefix": "data1006",
  "kakao": true,
  "idleMinutes": 30,
  "localBypass": true,
  "site": {
    "title": "설비고장 원인 진단",
    "summary": "증상을 넣으면 과거 정비 사례에서 가능한 고장 원인과 「먼저 확인할 것」을 짚어 주고, 쌓인 사례로 초보자용 자체 정비 가이드북과 외부 수리 비용 현황을 만드는 도구입니다.",
    "course": "현장 데이터 디지털화 전문가과정 · 2차수",
    "features": [
      {
        "name": "증상 진단",
        "desc": "증상 문장과 태그로 비슷한 과거 사례를 찾아 원인 순위 · 비중 · 근거 사례 수 · 먼저 확인할 것을 보여 줍니다."
      },
      {
        "name": "자체 정비 가이드북",
        "desc": "사례에서 원인별 카드를 자동으로 만들고 안전 먼저 · 확인 순서 · 초보자가 멈출 선을 표시합니다."
      },
      {
        "name": "비용 현황",
        "desc": "외부 수리 비용 · 건수 · 자체 처리 비율을 월별 · 설비별 · 원인별로 보고 앞 기간과 비교합니다."
      },
      {
        "name": "수리이력 · 기록지 넣기",
        "desc": "수리이력 엑셀(붙인 사진 포함)을 그대로 읽고, 종이 기록지 사진을 칸별로 읽어 사례로 넣습니다."
      }
    ],
    "steps": [
      "로그인 · 승인",
      "사례 넣기",
      "정리 · 점검",
      "증상 진단",
      "가이드북",
      "비용 현황"
    ]
  }
};
