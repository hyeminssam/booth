// =============================================================
//  부스 운영 계획판 설정 파일
//  ※ 처음 한 번만 아래 두 줄(주소·키)을 채우면 됩니다.
//  ※ 나중에 새 버전을 받으면 index.html 만 바꾸고 이 파일은 그대로 두세요.
// =============================================================
window.BOOTH_CONFIG = {
  // Supabase → Project Settings → API (또는 Data API / API Keys)
  SUPABASE_URL: "https://rbpofwlpfxnsicyoxkao.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJicG9md2xwZnhuc2ljeW94a2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMTU4NzgsImV4cCI6MjEwNjg5MTg3OH0.gpVo5qIJ2PelW0TjWQEEKmVglVOH8oSVKe1SPiikkM0",

  // 포스터 파일을 저장할 구글 Apps Script 웹 앱 주소 (…/exec 로 끝나는 주소)
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwBKB3fo-SFbBnVUg5spW4IqbQD1knww3eepbfURCbSchqrsigQbUmETXiX9tUMMwmCyQ/exec",

  // 화면 맨 위 제목
  TITLE: "과학탐구반 부스 운영 계획판",

  // 운영 시간
  SHIFTS: {
    1: "1부 · 9:30~10:30",
    2: "2부 · 10:30~11:30"
  },

  // 교실 배치도: 모둠 책상을 한 줄에 몇 개씩 그릴지 (2 또는 3)
  TABLE_COLUMNS: 2,

  // 배치도 아래쪽(뒷벽)에서 출입문 위치 — "left" 또는 "right"
  // (배치도는 전자칠판이 위쪽, 학생이 칠판을 바라보는 방향으로 그려집니다.
  //  칠판을 등지고 섰을 때 오른쪽 끝 문 = 배치도에서는 왼쪽 아래)
  DOOR_SIDE: "left"
};
