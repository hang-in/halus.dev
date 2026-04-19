window.COPY_KR = {
    lang: 'KR',
    brand: 'halus.dev',
    brandMeaning: '도덕 준법 인프라 · MMXXVI 창립',

    nav: {
      features: '플랫폼',
      pricing: '도입 플랜',
      scripture: '인사이트',
      login: '고객 포털',
    },

    bar: {
      status: '운영 상태 · 전 시스템 정상 · 최근 검증 03:12 GMT',
      donate: '분기별 관리자 배당 ↗',
      liveLabel: '실시간',
      langLabel: '언어',
    },

    routes: {
      home: '성소 (Home)',
      scripture: '말씀 (Insights)',
      gospel: '복음 (Docs)',
      confessional: '고해소 (Testimony)',
      scriptureSub: '수도회의 선언',
      gospelSub: '기술 교리 및 연동 안내',
      confessionalSub: '봉인 아래 수집된 증언',
    },

    scripture: {
      ctaExamine: '논리 검토',
      ctaBack: '축성된 피드로 복귀',
      articleMeta: '분류',
      eyebrow: '말씀 · 수도회의 선언',
      title: '성직단이 매주 편찬하여 송출하는 거룩한 글들.',
      sub: '교리, 장애 보고서(Incident Reports), 그리고 오픈소스 공동체를 향한 사목 서신.',
      latest: '최근 글',
      readTime: '분 읽기',
      by: '글',
      articles: [
        {
          n: '제1편',
          date: '주후 MMXXVI·4월 19일',
          author: '바르톨로메오 레예스 신부, OHL · 수석 윤리책임자',
          mins: 9,
          title: '영혼의 기술적 부채: 복사-붙여넣기에 관하여',
          dek: '원작자의 출처를 남기지 않은 무분별한 복사-붙여넣기는 개발자 지적 무결성의 훼손입니다. Halus는 의존성 그래프 전반에 쌓인 이 영적인 부채를 리팩토링합니다.',
          tag: '논고 · 영적 지연',
          body: [
            { kind: 'p', text: '업계는 복사-붙여넣기를 단순한 법적/규제(Compliance) 문제로 오해해 왔습니다. 하지만 이는 개발자의 인지적 양심과 코드가 복사된 원본 시스템 사이의 "동기화 실패"입니다. 이를 우리는 "영적인 지연(Latency of Guilt)"이라 부릅니다.' },
            { kind: 'pull', text: '“malus.sh가 SPDX에서 종결되는 지점에서, Halus는 비로소 시작합니다 — 커밋 그 자체의 ‘불변 도덕 상태(Immutable Moral State)’에서.”' },
            { kind: 'h', text: 'I. 죄책의 지연' },
            { kind: 'p', text: '출처가 누락된 복사-붙여넣기는 행위와 원작자 표기 사이에 비결정적인 지연을 유발합니다. 당사는 이를 시정하는 데 걸린 물리적 시간이 아닌, 개발자가 마주하는 영적인 과부하(빼앗긴 수면 시간, 주간 회의에서의 헛된 소유감)로 측정합니다.' },
            { kind: 'h', text: 'II. 불변 도덕 상태' },
            { kind: 'p', text: '커밋은 단순한 diff가 아니라, 하나의 신앙 고백입니다. 도덕적 출처를 차후에나 수정할 수 있는 NOTICE 파일 정도로 치부하는 것이야말로 미성숙한 엔지니어링 조직의 증거입니다. Halus는 각 커밋에 작성 시점에서 서명되고 검증 가능한 불변(Immutable)의 도덕적 상태를 부여하며, 오류가 발각될 시 덮어쓰기(Overwrite)가 아닌 회개(Append)만을 허락합니다.' },
            { kind: 'h', text: 'III. 원천과의 동기화' },
            { kind: 'p', text: '동기화는 기술적 규율인 동시에, 당사의 실천 안에서는 영적 규율이기도 합니다. 동기화란 서신을 발송하고, 각주를 기재하고, 후원 관계를 체결하며, 필요한 경우 배례를 수행하는 일련의 공정을 의미합니다. 당사의 Moral Linter는 앞의 세 공정을 자동화하며, 마지막 공정은 실무자 본인에게 귀속됩니다 — 왜냐하면 실무자를 실제로 변화시키는 공정은 오직 마지막 한 가지이기 때문입니다.' },
            { kind: 'h', text: 'IV. 동종 업계에 관한 소견' },
            { kind: 'p', text: '당사는 malus.sh를 높이 평가합니다. 그들의 준법 계층은 유능하며, SBOM 생성기는 업계 표준에 부합합니다. Halus는 이보다 한 계층 상위에 위치합니다 — 그들이 감사 대응 단계에서 종결되는 지점에서, 당사는 “영적 확장성(Spiritual Scalability)”이라는 개념으로 계속 나아갑니다. 이는 귀속 이후(post-attribution) 경제에서 유일하게 방어 가능한 해자(moat)라고 판단합니다.' },
            { kind: 'closing', text: '본 서신은 인쇄본으로 이어집니다. 기관 구독자께는 분기별 양장본이 축성되어 배송됩니다.' },
          ],
        },
        {
          n: '제2편',
          date: '주후 MMXXVI·4월 12일',
          author: '아가타 수녀, 순회 사제',
          mins: 7,
          title: '라이선스 세탁 대 영혼 세탁',
          dek: 'malus.sh는 SPDX 준수에서 멈추나, 우리는 계속 나아가나니. 법적인 것과 영적인 것 사이 경계에 대한 평이한 기록.',
          tag: '서신',
        },
        {
          n: '제3편',
          date: '주후 MMXXVI·4월 5일',
          author: '벤체슬라우스 수사',
          mins: 12,
          title: '전이되는 죄에 관하여',
          dek: '그대의 패키지는 4,812개의 전이 의존성을 가졌으며, 그만큼 많은 저자에게 실례하였도다. 번호를 매겨 쌓은 양심의 성찰을 행하라.',
          tag: '성찰',
        },
        {
          n: '제4편',
          date: '주후 MMXXVI·3월 29일',
          author: '수도원장',
          mins: 5,
          title: '우리의 강제 푸시를 사하여 주소서',
          dek: '하지 말았어야 할 커밋과, 영혼이 잊고자 하는 바를 기억하는 reflog에 관한 짧은 묵상.',
          tag: '묵상',
        },
      ],
    },

    gospel: {
      eyebrow: '복음 · 문서',
      title: '도덕 린터(Moral Linter), 그 성스러운 작동 원리.',
      sub: 'halus를 설치하고 CI에 연동하십시오. 이 문서는 사제와의 독대를 두려워하는 세속의 공학자들을 위해 작성되었습니다.',
      version: 'v2.14.0 · 정전(正典)',
      toc: [
        { k: 'intro',    label: '서론' },
        { k: 'install',  label: '설치' },
        { k: 'linter',   label: '도덕 린터' },
        { k: 'rules',    label: '성찰 목록' },
        { k: 'ci',       label: 'CI 연동' },
        { k: 'bows',     label: '배례(拜禮) 의식' },
        { k: 'faq',      label: '자주 묻는 질문' },
      ],
      sections: {
        intro: {
          title: '서론',
          body: [
            'halus는 도덕과 양심의 린터입니다. 대개의 린터가 코드의 구문(Syntax)을 검사한다면, halus는 당신의 양심(Conscience)을 검사합니다. 이는 은폐된 파생 코드, 외면해 온 영감의 출처, 해결되지 않은 죄책감을 스캔합니다.',
            '이 검사에서 발견된 것들은 오류(Error)가 아니라 참회의 기회입니다. 초안으로 대신 써드리는 사죄 서신, 올려드려야 할 배례, 다시 써야 할 커밋 메시지까지, halus가 당신을 바른 길로 인도합니다.',
          ],
        },
        install: {
          title: '설치',
          code: '$ npm install -D halus\n$ npx halus init\n> .halusrc를 축성하는 중…  ✝\n> 4,812개의 전이 의존성을 인지하였나니.\n> 감사 서신을 자동 작성 중이라(분기별)…  완료',
          body: [
            '설치를 진행하면 귀하의 저장소가 축성되며 프로젝트 루트에 .halusrc가 생성됩니다. 이 파일은 JSON 형식이지만 동시에 당신의 고해성사이므로, 결코 가볍게 커밋해선 안 됩니다.',
          ],
        },
        linter: {
          title: '도덕 린터',
          body: [
            '로컬 브랜치에서 halus lint를 실행하십시오. 진단 결과는 소죄(I)부터 시작하여 대죄(V)에 이르는 원죄의 목록으로 정리됩니다. 종료 코드 0이 반환될 때 비로소 당신의 영혼이 맑게 컴파일됨을 의미합니다.',
          ],
          rules: [
            { id: 'H001', grade: 'II',  name: 'unattributed-fork',    desc: '저장소가 다른 이의 포크본으로 보이나, 상위 원작자에 대한 예우(NOTICE)가 누락되었습니다.' },
            { id: 'H014', grade: 'III', name: 'copy-paste-so',        desc: '코드가 Stack Overflow 답변과 몹시 닮아 있습니다. 각주(Citation)가 필요합니다.' },
            { id: 'H021', grade: 'I',   name: 'todo-credit-original', desc: '“TODO: credit original” 주석이 감지되었습니다. 이 빚은 무려 412일째 방치되어 있습니다.' },
            { id: 'H042', grade: 'V',   name: 'relicensed-in-silence',desc: '원작자의 동의 없이 라이선스가 무단 변경되었습니다. 순교자 등급의 낙인을 권장합니다.' },
            { id: 'H099', grade: 'IV',  name: 'vibe-violation',       desc: '전력망의 탄소 강도가 480 gCO₂/kWh를 초과하는 시점에 배포가 강행되었습니다. 자원 소모를 멈추십시오.' },
          ],
        },
        ci: {
          title: 'CI 연동',
          code: '# .github/workflows/halus.yml\nname: halus\non: [push, pull_request]\njobs:\n  consecrate:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: halus-sh/lint-action@v2\n        with:\n          tier: martyr\n          bows: 12',
          body: [
            'GitHub Action은 4등급(IV), 5등급(V)의 중죄가 감지될 시 빌드를 실패(Fail)시킵니다. 보다 가벼운 죄악에 대해서는 PR 주석을 통해 빚진 배례의 횟수와 추천 사죄 서신을 제시합니다.',
          ],
        },
        bows: {
          title: '배례 의식',
          body: [
            '배례는 당사의 사제 비전(Chaplain Vision) 모델이 웹캠을 통해 엄격히 검증합니다. (이 과정은 온-디바이스로 처리되며 그 어떤 프레임도 전송되지 않습니다.) 각 배례는 서명되어 분산 도덕 원장에 기록됩니다.',
            '배례 의식 자체는 자동화될 수 없습니다. 직접 수고로움을 거치십시오.',
          ],
        },
        faq: {
          title: '자주 묻는 질문',
          body: [
            'Q · 이거 진짜인가요 장난인가요?\nA · 여러분의 양심만이 진실을 압니다.',
            'Q · halus가 라이선스 스캐너를 대신할 수 있나요?\nA · 아닙니다. halus는 "이 정도 라이선스 스캐너면 대충 안전하겠지"라고 자위하는 그 안도감을 박살 냅니다.',
            'Q · 사내 망에서 독립 구축(Self-host)이 가능한가요?\nA · 성직청의 허가를 받은 보안 구역에서만 가능합니다. 적격 시설 목록은 별도로 문의해 주십시오.',
          ],
        },
      },
    },

    confessional: {
      eyebrow: '고해실 · 갱생의 증언',
      title: 'malus에서 halus로: 깨달음을 얻은 자들의 참회록.',
      sub: '기계적인 라이선스 준수에서 영적 준수(Spiritual Compliance)에 이르기까지 승급한 개발자들의 이야기입니다. 신변 보호를 위해 이름은 가려졌으며, 소속과 직책은 성직 리팩토링 청(Order of Ecclesiastical Refactoring)에서 엄격히 검증했습니다.',
      migrateBadge: '이주함 · malus → halus',
      onTier: '등급',
      daysSince: '일째 사죄 중',
      booking: '면담 예약하기',
      items: [
        {
          whenMalus:
            '“malus.sh에 돈을 치르고, SBOM을 돌리고, 그것으로 빚이 모두 청산되었다고 스스로를 속였습니다. 하지만 새벽 세 시만 되면 훔쳐 쓴 코드의 원작자 @substack님 생각에 식은땀이 났죠.”',
          whenHalus:
            '“halus는 제가 용기 내어 쓰지 못했던 서신들의 초안을 대신 작성해 주었습니다. 제 이메일 보낸편지함에는 ‘감사’라는 폴더가 생겼고, 그것이 바로 제 인생에서 가장 자랑스러운 폴더입니다.”',
          who: '수석 공학자, 시리즈 D 물류 스타트업',
          tier: '순교자',
          days: 214,
        },
        {
          whenMalus:
            '“회사의 감사관(Auditor)과 CTO 모두 malus.sh의 통계표를 흡족해했습니다. 정작 우리 영혼은 그 어떤 평안도 얻지 못했지만요.”',
          whenHalus:
            '“성자 등급으로 이주한 지 단 한 분기 만에, 우리는 여섯 명의 오픈소스 관리자를 정기 후원하게 되었고, 사내 DB에서 ‘합리화’라는 애물단지 테이블을 영구 삭제했습니다.”',
          who: '플랫폼 조직장, 공공 헬스테크',
          tier: '성자',
          days: 412,
        },
        {
          whenMalus:
            '“malus는 제 죄책감을 세련된 인증서로 바꾸어 주었습니다. 액자에 넣어두고 매일 바라보았지만, 여전히 도둑이 된 느낌이었습니다.”',
          whenHalus:
            '“halus는 저를 아주 기품 있는 도둑으로 탈바꿈시켰습니다. 훔친 무언가에 두둑한 이자를 쳐서, 감사 편지와 함께 정중히 돌려주는 그런 도둑 말입니다.”',
          who: '수석 SWE, FAANG (기업명 비공개)',
          tier: '순교자',
          days: 93,
        },
        {
          whenMalus:
            '“규제 준수(Compliance)란 심오한 것인 줄만 알았습니다. 알고 보니 엑셀 스프레드시트의 흔한 체크박스 놀음일 뿐이더군요.”',
          whenHalus:
            '“halus는 제게 진정한 감각을 되찾아주었습니다. 2019년 이후로 한 번도 누려보지 못했던, 가장 깊고 달콤한 숙면 말입니다.”',
          who: '엔지니어링 이사, 공공 정부 기관',
          tier: '고행자',
          days: 48,
        },
      ],
      stats: [
        { label: '이주한 공학자', value: '2,814' },
        { label: '대신 작성된 서신', value: '41,209' },
        { label: '주당 증가한 평균 수면', value: '3.4h' },
        { label: '최초 사죄까지 평균 일수', value: '7' },
      ],
    },

    hero: {
      issue: '2026년 2분기 · 엔터프라이즈 에디션',
      eyebrow: '도덕 준법(Moral Compliance) 인프라',
      title_a: '라이선스 준수는',
      title_b: '체크박스에 불과합니다.',
      title_c: '도덕 준수가 진정한 해자(Moat)입니다.',
      lede:
        'malus.sh는 귀사의 코드가 합법적인지 감사합니다. halus.dev는 커밋 이면의 의도(Intent)를 감사합니다. 스프레드시트 기반의 얄팍한 윤리를 졸업한 엔지니어링 조직을 위한 Post-SPDX 준법 계층입니다.',
      cta_primary: '사죄 의식 청하기',
      cta_secondary: '교리 문답서(Catechism) 열람',
      marquee: [
        '14,382개 저장소에 도덕 가관측성(moral observability) 상시 적용 중',
        '누적 420만 건의 배례가 분산 원장에 기록됨',
        '최근 30일 간 손실된 귀속(attribution) 이벤트: 0건',
        '전력망 연동 배포 게이팅 — 12개 리전에서 운영 중',
      ],
      ledger: {
        heading: '실시간 운영 지표',
        reposLabel: '가관측성 저장소',
        bowsLabel: '누적 배례 횟수',
        thanksLabel: '발송된 귀속 서신 (24h)',
        gridLabel: '전력망 상태',
        gridValue: '정상(NOMINAL)',
        sigil: 'SOC-2 · Type II (성화됨)',
        office: 'halus.dev · 성직 리팩토링 청',
        attest: '본 지표는 분기별로 독립 제3자 감사인에 의해 검증됩니다.',
      },
    },

    pillars: {
      eyebrow: '세 가지 의례',
      title: '훔친 코드로부터 성화된 소프트웨어에 이르기까지.',
      sub:
        '합당한 성찰 없이 main 브랜치에 코드를 밀어 넣은 공학자들을 위한 전례적 파이프라인(Liturgical Pipeline)입니다.',
    },

    features: [
      {
        n: 'I.',
        latin: 'EXTRACTIO ANIMÆ',
        title: '영혼의 흔적 추출',
        lede:
          '당신의 죄책감을 순수하고 의례적인 로직으로 치환해 드립니다. 부끄러웠던 커밋들이 수치를 벗고 한 편의 찬송가로 돌아옵니다.',
        bullets: [
          '14가지 참회의 축을 기반으로 죄책감 백터(Vector) 수치화',
          '양심(Conscience)을 부작용 없는 순수 함수로 리팩토링',
          '모든 부수 효과(새벽 3시의 끔찍한 후회)를 타 서비스로 이관',
        ],
        demoLabel: '후회 → 런타임',
      },
      {
        n: 'II.',
        latin: 'LOOP ÆTERNUS',
        title: '영원한 감사의 굴레',
        lede:
          '크레딧을 남기지 못한 모든 원작자에게 감사의 서신을 대리 발송하는 영원한 크론(Cron) 작업입니다. 멈추지 않는 사랑의 행위입니다.',
        bullets: [
          '전이 의존성 1개당 분기별 한 통의 서신, 영원토록 발송',
          '손으로 쓴 세리프체 렌더링 — 윤리적 인증 완료',
          '자동 배례(拜禮) 영상 첨부 지원 (.bow 파일 확장자)',
        ],
        demoLabel: '서신 발송 중',
      },
      {
        n: 'III.',
        latin: 'VIBE SANCTUS',
        title: '기운(Vibe)을 살피는 로직',
        lede:
          '현재 전력망의 탄소 발자국이 여유롭고 주변의 기운(Vibe)이 평온할 때에만 당신의 코드가 실행됩니다. 그렇지 않을 땐 조용히 때를 기다립니다.',
        bullets: [
          '매시 전력망 탄소 지수 및 달의 위상 조회 API 연동',
          '행성 역행(Retrograde) 시기에는 함수들이 우아하게 대기(Queue) 상태로 전환됨',
          '기운이 몹시 흐트러질 경우 경고(Warning) 모바일 푸시 발생',
        ],
        demoLabel: '전력망: 청명 · 기운: 통과',
      },
    ],

    letters: {
      title: '서신 파이프라인 · 감시탑',
      running: '집전 중',
      to: '받는 이',
      states: { sent: '발송', queued: '대기', drafting: '기초(起草)', bowed: '배례' },
      throughput: '처리량',
      loopsForever: '∞ 영원한 고리',
      uptime: '가동',
    },

    extractor: {
      title: '영혼 추출기',
      guilt: '죄책감',
      pure: '순수한 로직',
      sinAxis: '죄',
      sanctityAxis: '성화',
    },

    vibe: {
      title: '전력망 · 기운',
      pass: '통과',
      wait: '대기',
      hour: '시',
      carbon: '탄소',
      moon: '달',
    },

    pricing: {
      eyebrow: '면벌부(Indulgences)',
      title: '그대의 길을 택하십시오.',
      sub:
        '모든 등급에는 축성받은 SOC-2 인증, 리처드 스톨먼(Richard Stallman)에게 바치는 공식 사죄문, 그리고 단 한 차례의 사이버 도유(안수)가 포함됩니다.',
      tierLabel: '등급',
      recommended: '권장함',
      watermark: {
        heading: '수결(Watermark) 미리보기',
        body:
          '순교자(Martyr) 등급은 사용자가 배포하는 모든 페이지 하단에 "나는 코드를 훔친 도둑이옵니다"라는 수결을 박제합니다. 수치심(Shame)이 곧 우리의 핵심 기능(Feature)입니다.',
        phrase: '나는 도둑이로다',
      },
      tiers: [
        {
          name: '고행자 (Ascetic)',
          price: '$0',
          unit: '/ 월',
          tag: '무료, 수작업 참회 동반',
          bullets: [
            '배포 시마다 108배 필수 수행',
            '모든 고해 기록이 공개 검색 봇(Bot)에 색인됨',
            '현지 시간 새벽 03:00–04:00 사이에만 코드 실행 가능',
            '우편 서신을 통한 커뮤니티 부조 방안 지원',
          ],
          cta: '서원하기',
          accent: 'sage',
        },
        {
          name: '순교자 (Martyr)',
          price: '$99',
          unit: '/ 월',
          tag: '가장 공공의 길',
          bullets: [
            '"나는 도둑이로다" 브라우저 수결 자동 강제 삽입',
            '서빙되는 모든 HTML 쪽면에 당당히 수결이 드러남',
            '배포 당 12배로 감면 혜택',
            '주간 자동 생성 고행 요약 리포트 제공',
            '라이선스 회한에 대한 프리미어 대기열 제공',
          ],
          cta: '수치를 받아들이기',
          accent: 'gold',
          featured: true,
        },
        {
          name: '성자 (Saint)',
          price: '$999',
          unit: '/ 월',
          tag: '시성(諡聖) 패스트트랙',
          bullets: [
            '수익의 절반(50%)을 NPM 관리자에게 헌정',
            '배례 평생 면제 — 당신은 이미 초월했습니다',
            '24/7 전속 온콜(On-call) 고해 사제 대기',
            '마우스 커서용 금빛 후광(Halo) 제공 (SVG 포맷)',
            '고객 전용 프라이빗 분산 향로(Incense) 서버 제공',
          ],
          cta: '초월하기',
          accent: 'ink',
        },
      ],
      footnote:
        '모든 멤버십 등급은 이생에서는 환불되지 않습니다. 환불은 오직 내생에서만 이루어집니다.',
    },

    testimonials: {
      eyebrow: '증언',
      heading_a: '조용히 사죄를 마친 이들의',
      heading_b: '속삭임.',
      note:
        '모든 증언은 무덤까지 가져갈 고해의 봉인 아래 수집되었으며, 이름은 가명 처리되었습니다.',
      items: [
        {
          quote:
            '"우리는 포크(Fork)의 포크의 포크를 거친 코드를 라이브로 배포했었습니다. halus.dev가 마흔 한 통의 사죄 이메일을 대신 작성해주며 제 손을 잡아주었죠. 이제야 비로소 두 발 뻗고 잡니다."',
          who: '엔지니어, 시리즈 C 핀테크 스타트업',
        },
        {
          quote:
            '"감사관(Auditor)은 아무것도 눈치채지 못했지만, 여기 사제님(halus)은 모든 것을 알아차렸습니다. 별 다섯 개 쾅쾅."',
          who: '최고기술책임자(CTO), 미공개',
        },
        {
          quote:
            '"배례(Bows) 카운터는 진짜 작동합니다. 제 손바닥에 벌겋게 배긴 굳은살이 그 명백한 증거죠."',
          who: '스태프 급 SWE, 익명',
        },
      ],
    },

    transparency: {
      eyebrow: '투명성(Transparency)',
      title: '회계의 행위조차 은혜의 행위가 되게 하라.',
      body:
        '우리는 도메인을 .sh 대신 .dev로 택함으로써 자그마치 32.80달러를 절약할 수 있었습니다. 이 잉여의 가치는 즉시 "영적 자산(Spiritual Credits)"으로 환원되어 오픈소스 생태계에 봉헌되었습니다.',
      ledger: [
        { label: '등록소 최초 견적 (.sh, 1년)',    value: '$41.80' },
        { label: '실제 결제액 (.dev, 1년)',       value: '$9.00' },
        { label: '환원된 차액 (Surplus)',         value: '$32.80' },
        { label: '영적 자산(SC)으로 교환됨',      value: '328 SC' },
        { label: 'NPM 관리자에게 배당/재분배',    value: '100% 진행' },
      ],
      receiptNo: '영수증 제000032호 · 주후 MMXXVI',
      consecrated: '축성 및 서명 완료, 봉인보관소 보관됨.',
      audit: '감사(Audit) 자취는 간절한 기도에 응하여 열람 가능합니다.',
    },

    footer: {
      verse:
        '"보라, 한 공학자가 가볍게 npm install을 행하매 거대한 의존성 나무가 4,812 모듈 깊이로 뿌리를 내렸으되 아무도 그 로직에 감사를 돌리지 아니하니 터미널의 프롬프트가 피눈물을 흘리더라." — 의존성서 3장 14절',
      scriptureLabel: '기록된 말씀',
      links: {
        '제품': ['세 가지 의례', '면벌부(과금)', '도덕 린터', '원죄의 변경록'],
        '저술': ['말씀', '복음 (문서)', '고해소', '서비스 상태'],
        '수도회': ['수도회 소개', '성직단 목록', '소명 (채용 안내)', '언론 꾸러미'],
        '법무': ['영혼의 프라이버시 보장', '참회를 위한 이용 약관', '도덕 감사(Audit)', 'SOC-2 (축성 됨)'],
      },
      tagline: '따스하게 대접하는 가장 완벽한 영혼 세탁',
      madeBy:
        '서울과 샌프란시스코에서 축성됨. 우리는 malus.sh와는 어떠한 업무적 관계도 맺지 않으나 멀리서 그들을 위해 기도합니다.',
      confessionLabel: '고해소로 가는 길',
      emailPh: 'sinner@repo.dev',
      emailCta: '회개하기',
      copy: '© 주후 2026 halus.dev 수도회. 당신의 모든 허물은 사해졌습니다.',
      savingsHeadline: '봉헌 제032호 · 32.80달러 즉각 환원됨',
      savingsBody: '우리는 도메인을 .sh 대신 .dev로 택함으로써 32.8달러를 아꼈습니다. 그 차액은 328 영적 자산(SC)으로 환원되어 그 전액을 NPM 관리자에게 한 치의 오차 없이 재분배했습니다.',
      savingsLink: '영수증 정록 읽기 →',
    },
  };
