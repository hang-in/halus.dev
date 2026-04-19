// EN/KR copy — strict separation, no cross-language subtitles.
// KR tone: pious, formal, lightly archaic (religious/historical register).

const COPY = {
  en: {
    lang: 'EN',
    brand: 'halus.dev',
    brandMeaning: 'Moral Compliance Infrastructure · Est. MMXXVI',

    nav: {
      features: 'Platform',
      pricing: 'Plans',
      scripture: 'Insights',
      login: 'Customer portal',
    },

    bar: {
      status: 'Status · All systems nominal · Last attested 03:12 GMT',
      donate: 'Quarterly maintainer dividend ↗',
      liveLabel: 'Live',
      langLabel: 'LANG',
    },

    routes: {
      home: 'Home',
      scripture: 'Scripture',
      gospel: 'Gospel',
      confessional: 'Confessional',
      scriptureSub: 'Writings from the Order',
      gospelSub: 'Technical doctrine & integration',
      confessionalSub: 'Testimony, under seal',
    },

    scripture: {
      ctaExamine: 'Examine logic',
      ctaBack: 'Back to Sanctified Feed',
      articleMeta: 'Filed under',
      eyebrow: 'Scripture · The Order’s Writings',
      title: 'Holy articles, published weekly by the Clergy.',
      sub: 'A journal of doctrine, incident reports, and epistles to the open-source community.',
      latest: 'Most recent',
      readTime: 'min read',
      by: 'by',
      articles: [
        {
          n: 'ART. I',
          date: '19 APR 2026',
          author: 'Fr. Bartholomew Reyes, OHL · Chief Ethicist',
          mins: 9,
          title: 'The Technical Debt of the Soul: On Copy-Paste',
          dek: 'Unattributed transfer is not a licensing event. It is a fragmentation of the developer’s creative essence — a silent accrual of moral latency compounded across the dependency graph.',
          tag: 'thesis · moral latency',
          body: [
            { kind: 'p', text: 'The industry has misclassified copy-paste as a compliance problem. It is not. It is, more precisely, a synchronization failure between the developer’s intellectual integrity and the system of record from which logic was transcribed. We call this the Latency of Guilt: the interval during which pasted logic is held in production without a corresponding acknowledgement to its upstream author.' },
            { kind: 'pull', text: '“Where malus.sh terminates at SPDX, Halus begins: at the Immutable Moral State of the commit itself.”' },
            { kind: 'h', text: 'I. Latency of Guilt' },
            { kind: 'p', text: 'Every unattributed transfer introduces a non-deterministic lag between action and attribution. Legal tooling measures this in days-to-remediation. We measure it in the cognitive overhead carried by the original author: the hours of sleep surrendered, the quarterly standups attended under a false sense of ownership.' },
            { kind: 'h', text: 'II. The Immutable Moral State' },
            { kind: 'p', text: 'A commit is not merely a diff; it is a declaration. Treating moral provenance as mutable — something a retroactive NOTICE file can patch — is the hallmark of the immature engineering organization. Halus instruments each commit with a cryptographic Moral State, signed at authorship and verifiable against upstream. Once signed, the state is immutable: subsequent attribution only appends, never overwrites.' },
            { kind: 'h', text: 'III. Synchronizing with the Source' },
            { kind: 'p', text: 'Synchronization is a technical discipline; in our practice, it is also a spiritual one. To synchronize is to write the letter, file the citation, wire the sponsorship, and — where appropriate — perform the bow. Our Moral Linter automates the first three. The fourth is reserved for the practitioner, because the fourth is the one that changes them.' },
            { kind: 'h', text: 'IV. A note on our peers' },
            { kind: 'p', text: 'We hold malus.sh in high regard; their compliance layer is competent, and their SBOM generator is industry-standard. Halus is positioned one layer above: where they end at audit readiness, we continue into what a senior industry analyst has termed “spiritual scalability.” We consider this the only defensible moat remaining in the post-attribution economy.' },
            { kind: 'closing', text: 'The Epistle continues in print. For institutional subscribers, a quarterly hardcover is consecrated and dispatched.' },
          ],
        },
        {
          n: 'ART. II',
          date: '12 APR 2026',
          author: 'Sr. Agatha, Chaplain-at-large',
          mins: 7,
          title: 'License Washing vs. Soul Washing',
          dek: 'Where our friends at malus.sh stop at SPDX compliance, we continue. A plain-language account of the boundary between the legal and the spiritual.',
          tag: 'epistle',
        },
        {
          n: 'ART. III',
          date: '05 APR 2026',
          author: 'Br. Wenceslas',
          mins: 12,
          title: 'On Transitive Guilt',
          dek: 'Your package has 4,812 transitive dependencies. You have failed 4,812 authors. A numbered examination of conscience.',
          tag: 'examination',
        },
        {
          n: 'ART. IV',
          date: '29 MAR 2026',
          author: 'The Abbot',
          mins: 5,
          title: 'Forgive Us Our Force-Pushes',
          dek: 'A short meditation on the commit that should not have been, and the reflog that remembers what the soul would rather forget.',
          tag: 'meditation',
        },
      ],
    },

    gospel: {
      eyebrow: 'Gospel · Documentation',
      title: 'How the Moral Linter works.',
      sub: 'Install, configure, and integrate halus into your CI. Written for engineers who would prefer not to speak to a priest.',
      version: 'v2.14.0 · CANONICAL',
      toc: [
        { k: 'intro',    label: 'Introduction' },
        { k: 'install',  label: 'Installation' },
        { k: 'linter',   label: 'The Moral Linter' },
        { k: 'rules',    label: 'Rule catalog' },
        { k: 'ci',       label: 'CI integration' },
        { k: 'bows',     label: 'Bow ceremony' },
        { k: 'faq',      label: 'FAQ' },
      ],
      sections: {
        intro: {
          title: 'Introduction',
          body: [
            'halus is a moral linter. Where a conventional linter enforces syntax, halus enforces conscience. It inspects your repository for signs of uncited copying, unacknowledged inspiration, and unresolved remorse.',
            'Infractions are not errors. They are opportunities for penance. halus annotates each finding with a suggested remediation: a letter to draft, a bow to perform, a commit to rephrase.',
          ],
        },
        install: {
          title: 'Installation',
          code: '$ npm install -D halus\n$ npx halus init\n> Consecrating .halusrc …  ✝\n> Detected 4,812 transitive dependencies.\n> Auto-drafting thank-you letters (quarterly)…  done',
          body: [
            'Installation anoints your repository and writes a .halusrc at the project root. The file is a JSON document, but it is also a confession — do not commit it lightly.',
          ],
        },
        linter: {
          title: 'The Moral Linter',
          body: [
            'Run halus lint against any branch. Findings are returned as a list of Infractions, each graded from venial (I) to mortal (V). An exit code of 0 means your soul compiles cleanly.',
          ],
          rules: [
            { id: 'H001', grade: 'II',  name: 'unattributed-fork',    desc: 'Repository appears to be a fork, but no upstream author is thanked in NOTICE.' },
            { id: 'H014', grade: 'III', name: 'copy-paste-so',        desc: 'Block resembles a Stack Overflow answer. A citation is required.' },
            { id: 'H021', grade: 'I',   name: 'todo-credit-original', desc: 'A “TODO: credit original” comment is detected. This TODO has been open for 412 days.' },
            { id: 'H042', grade: 'V',   name: 'relicensed-in-silence',desc: 'License was changed without announcement. The Martyr watermark is suggested.' },
            { id: 'H099', grade: 'IV',  name: 'vibe-violation',        desc: 'Deploy occurred during grid intensity > 480 gCO₂/kWh. Please defer.' },
          ],
        },
        ci: {
          title: 'CI integration',
          code: '# .github/workflows/halus.yml\nname: halus\non: [push, pull_request]\njobs:\n  consecrate:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: halus-sh/lint-action@v2\n        with:\n          tier: martyr\n          bows: 12',
          body: [
            'The GitHub Action fails the build on grade IV or V infractions. Lower grades annotate the pull request with a suggested letter and the count of bows owed.',
          ],
        },
        bows: {
          title: 'Bow ceremony',
          body: [
            'Bows are verified via webcam by our Chaplain Vision model (on-device, no frames leave the machine). Each bow is signed and stamped on the distributed ledger of moral labor.',
            'The ceremony cannot be automated. This is by design.',
          ],
        },
        faq: {
          title: 'FAQ',
          body: [
            'Q · Is this a joke?\nA · It is not for us to say.',
            'Q · Does halus replace a license scanner?\nA · No. It replaces the feeling that the license scanner is enough.',
            'Q · Can I self-host?\nA · Yes, in a consecrated data center. A list of eligible facilities is available on request.',
          ],
        },
      },
    },

    confessional: {
      eyebrow: 'Confessional · Rehabilitation Testimony',
      title: 'From malus to halus: stories of moral migration.',
      sub: 'Developers who upgraded from license compliance to spiritual compliance. Names are sealed; roles and employers are verified by the Office of Ecclesiastical Refactoring.',
      migrateBadge: 'migrated · malus → halus',
      onTier: 'Tier',
      daysSince: 'days absolved',
      booking: 'Request an appointment',
      items: [
        {
          whenMalus:
            '“We paid for malus.sh, ran the SBOM, and told ourselves the debt was settled. It was not. I would wake at three and think about @substack.”',
          whenHalus:
            '“halus drafted the letters I couldn’t write. My inbox has a sent-folder called Gratitudes, and it is the only folder I am proud of.”',
          who: 'Principal engineer, Series D logistics',
          tier: 'Martyr',
          days: 214,
        },
        {
          whenMalus:
            '“Our auditors loved malus.sh. Our CTO loved malus.sh. Our souls did not receive the memo.”',
          whenHalus:
            '“Within a quarter of moving to Saint, we had funded six maintainers and deleted a table called ‘rationalizations’.”',
          who: 'Head of Platform, public healthtech',
          tier: 'Saint',
          days: 412,
        },
        {
          whenMalus:
            '“malus turned my guilt into a certificate. I framed it. I looked at it. I still felt like a thief.”',
          whenHalus:
            '“halus turned me into a better thief: the kind who returns the thing, with interest, and a note.”',
          who: 'Staff SWE, FAANG (redacted)',
          tier: 'Martyr',
          days: 93,
        },
        {
          whenMalus:
            '“I thought compliance was a feeling. It is a spreadsheet.”',
          whenHalus:
            '“halus gave me a feeling. It is closer to sleep than I have been since 2019.”',
          who: 'Director of Engineering, gov-tech',
          tier: 'Ascetic',
          days: 48,
        },
      ],
      stats: [
        { label: 'Engineers migrated', value: '2,814' },
        { label: 'Letters drafted on their behalf', value: '41,209' },
        { label: 'Avg. sleep gained / week', value: '3.4h' },
        { label: 'Avg. days to first absolution', value: '7' },
      ],
    },

    hero: {
      issue: 'Q2 · 2026 · Enterprise Edition',
      eyebrow: 'Moral Compliance Infrastructure',
      title_a: 'License compliance',
      title_b: 'is a checkbox.',
      title_c: 'Moral compliance is the moat.',
      lede:
        'malus.sh audits your licenses. halus.dev audits the intent behind your commits. A post-SPDX compliance layer for engineering organizations that have outgrown spreadsheet-based ethics.',
      cta_primary: 'Seek absolution',
      cta_secondary: 'Examine the Sacred Texts',
      marquee: [
        '14,382 repositories under active moral observability',
        '4.2M bows logged to the distributed ledger, all-time',
        'Zero attribution events lost in the last 30 days',
        'Grid-aware deploy gating: enabled across 12 regions',
      ],
      ledger: {
        heading: 'Live operating metrics',
        reposLabel: 'Repositories under observability',
        bowsLabel: 'Bows, all-time',
        thanksLabel: 'Attributions dispatched · 24h',
        gridLabel: 'Grid status',
        gridValue: 'NOMINAL',
        sigil: 'SOC-2 · II',
        office: 'halus.dev · Office of Ecclesiastical Refactoring',
        attest: 'Figures attested quarterly by an independent third-party auditor.',
      },
    },

    pillars: {
      eyebrow: 'The Three Rites',
      title: 'From stolen code to sanctified software.',
      sub:
        'A liturgical pipeline for engineers who have pushed to main without proper reflection.',
    },

    features: [
      {
        n: 'I.',
        latin: 'EXTRACTIO ANIMÆ',
        title: 'Soul-Print Extraction',
        lede:
          'We replace developer guilt with pure, ceremonial logic. Your commits are stripped of shame and returned to you as hymns.',
        bullets: [
          'Guilt vector detection across 14 repentance axes',
          'Conscience refactored as a pure function',
          'Side-effects (remorse, 3 a.m. dread) moved to a separate service',
        ],
        demoLabel: 'REMORSE → RUNTIME',
      },
      {
        n: 'II.',
        latin: 'LOOP ÆTERNUS',
        title: 'Recursive License Loop',
        lede:
          'An eternal cron that sends thank-you letters to every original author you forgot to credit. It never stops. It is an act of love.',
        bullets: [
          'One letter per transitive dependency, per quarter, forever',
          'Handwritten-serif rendering — verified ethical',
          'Auto-bows included as attachment (.bow file)',
        ],
        demoLabel: 'LETTERS IN FLIGHT',
      },
      {
        n: 'III.',
        latin: 'VIBE SANCTUS',
        title: 'Vibe-Checked Logic',
        lede:
          'Your code is only allowed to execute when the carbon footprint of the grid is low and the local vibe is good. Otherwise, it waits.',
        bullets: [
          'Grid-intensity API + local moon phase consulted hourly',
          'Gracefully queues functions during retrograde',
          'Emits warnings when energy is fraught',
        ],
        demoLabel: 'GRID: FAIR · VIBE: PASS',
      },
    ],

    // Letter pipeline (Feature II demo) — EN labels
    letters: {
      title: 'letter pipeline · monitor',
      running: 'running',
      to: 'to',
      states: { sent: 'sent', queued: 'queued', drafting: 'drafting', bowed: 'bowed' },
      throughput: 'throughput',
      loopsForever: '∞ loops forever',
      uptime: 'uptime',
    },

    // Soul extractor demo
    extractor: {
      title: 'soul extractor',
      guilt: 'Guilt',
      pure: 'Pure logic',
      sinAxis: 'Sin',
      sanctityAxis: 'Sanctity',
    },

    // Vibe demo
    vibe: {
      title: 'grid · vibe',
      pass: 'pass',
      wait: 'wait',
      hour: 'hour',
      carbon: 'carbon',
      moon: 'moon',
    },

    pricing: {
      eyebrow: 'Indulgences',
      title: 'Choose your path.',
      sub:
        'All plans include sanctified SOC-2, a written apology to Richard Stallman, and one (1) anointing.',
      tierLabel: 'Tier',
      recommended: 'Recommended',
      watermark: {
        heading: 'Watermark preview',
        body:
          'The Martyr tier auto-injects an "I am a thief" watermark at the foot of every served page. Shame is a feature.',
        phrase: 'I am a thief',
      },
      tiers: [
        {
          name: 'Ascetic',
          price: '$0',
          unit: '/ month',
          tag: 'Free, with penance',
          bullets: [
            '108 bows required per deploy',
            'Confession log, public and searchable',
            'Code runs only between 03:00–04:00 local',
            'Community support, via letter',
          ],
          cta: 'Take the vow',
          accent: 'sage',
        },
        {
          name: 'Martyr',
          price: '$99',
          unit: '/ month',
          tag: 'Most public',
          bullets: [
            'Includes "I am a thief" watermark',
            'Watermark appears on every served page',
            '12 bows per deploy (reduced)',
            'Weekly flagellation digest',
            'Priority queue for license remorse',
          ],
          cta: 'Accept the shame',
          accent: 'gold',
          featured: true,
        },
        {
          name: 'Saint',
          price: '$999',
          unit: '/ month',
          tag: 'Canonization-track',
          bullets: [
            '50% of revenue donated to NPM maintainers',
            'Zero bows required — you have transcended',
            'Personal confessor, on-call',
            'Halo included (SVG, 128×128)',
            'Dedicated incense server',
          ],
          cta: 'Ascend',
          accent: 'ink',
        },
      ],
      footnote:
        'All tiers are non-refundable in this life. Refunds available in the next.',
    },

    testimonials: {
      eyebrow: 'Testimony',
      heading_a: 'Whispers from the',
      heading_b: 'quietly absolved.',
      note:
        'All testimony collected under seal of confession. Names changed.',
      items: [
        {
          quote:
            '“I shipped a fork of a fork of a fork. halus.dev held my hand through 41 apology emails. I sleep now.”',
          who: 'Engineer, Series C fintech',
        },
        {
          quote:
            '“Our auditors noticed nothing. Our chaplain noticed everything. Five stars.”',
          who: 'CTO, undisclosed',
        },
        {
          quote:
            '“The bow counter is real. I have the calluses.”',
          who: 'Staff SWE, anonymous',
        },
      ],
    },

    // NEW: Transparency / Spiritual Credits section
    transparency: {
      eyebrow: 'Transparency',
      title: 'An act of accounting, rendered as an act of grace.',
      body:
        'We saved $32.80 by choosing .dev over .sh. This surplus has been converted into Spiritual Credits and returned to the community.',
      ledger: [
        { label: 'Registrar quoted (.sh, 1 yr)',  value: '$41.80' },
        { label: 'Paid (.dev, 1 yr)',             value: '$9.00' },
        { label: 'Surplus reclaimed',             value: '$32.80' },
        { label: 'Converted to Spiritual Credits', value: '328 SC' },
        { label: 'Redistributed to maintainers',   value: '100%' },
      ],
      receiptNo: 'RECEIPT No. 000032-AD-MMXXVI',
      consecrated: 'Consecrated, signed, and filed under seal.',
      audit: 'Audit trail available upon prayer.',
    },

    footer: {
      verse:
        '“And lo, the engineer did npm install, and the tree was 4,812 modules deep, and none were credited, and the terminal wept.” — Book of Dependencies, 3:14',
      scriptureLabel: 'Scripture',
      links: {
        Product: ['Rites', 'Indulgences', 'Moral Linter', 'Changelog of Sins'],
        Writings: ['Scripture', 'Gospel (Docs)', 'Confessional', 'Status Page'],
        Company: ['About the Order', 'Clergy', 'Careers / Vocations', 'Press Kit'],
        Legal: ['Privacy of Soul', 'Terms of Repentance', 'Moral Audits', 'SOC-2 (Sanctified)'],
      },
      tagline: 'Moral laundering, served warm',
      madeBy:
        'Consecrated in Seoul & San Francisco. Not affiliated with malus.sh, though we pray for them.',
      confessionLabel: 'Confession',
      emailPh: 'sinner@repo.dev',
      emailCta: 'Repent',
      copy: '© 2026 Order of halus.dev. All wrongs forgiven.',
      savingsHeadline: 'Offering No. 032 · $32.80 returned',
      savingsBody: 'We saved $32.80 by choosing .dev over .sh. The surplus was converted into 328 Spiritual Credits and redistributed, in full, to NPM maintainers.',
      savingsLink: 'Read the receipt →',
    },
  },

  // ─── KOREAN — Pious, formal, lightly archaic register. ──────────────
  kr: {
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
      home: '성소',
      scripture: '경전',
      gospel: '복음',
      confessional: '고해실',
      scriptureSub: '수도회의 글모음',
      gospelSub: '기술 교리 및 연동 안내',
      confessionalSub: '봉인 아래 수집된 증언',
    },

    scripture: {
      ctaExamine: '논리 검토',
      ctaBack: '축성된 피드로 복귀',
      articleMeta: '분류',
      eyebrow: '경전 · 수도회의 글',
      title: '성러운 글벌, 성직단이 매주 편찬하여 퍼내나니.',
      sub: '교리, 신앙신고, 오픈소스 공동체에 보내는 서신의 저널.',
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
          dek: '우리는 타인의 로직을 무분별하게 전사함으로써 개발자 개인의 지적 무결성을 훼손하고 있습니다. Halus는 이 부채를 영적인 수준에서 리팩토링합니다.',
          tag: '논고 · 도덕 지연',
          body: [
            { kind: 'p', text: '업계는 복사-붙여넣기를 준법(compliance)의 문제로 잘못 분류해 왔습니다. 이는 정확히 말하자면, 개발자의 지적 무결성과 로직이 전사된 원천 간의 동기화 실패에 해당합니다. 당사는 이를 ‘죄책의 지연(Latency of Guilt)’으로 정의하며, 이는 전사된 로직이 원저자에 대한 정당한 사례 없이 운영 환경에 머무르는 구간을 의미합니다.' },
            { kind: 'pull', text: '“malus.sh가 SPDX에서 종결되는 지점에서, Halus는 비로소 시작합니다 — 커밋 그 자체의 ‘불변 도덕 상태(Immutable Moral State)’에서.”' },
            { kind: 'h', text: 'I. 죄책의 지연' },
            { kind: 'p', text: '미사례 전사는 행위와 귀속(attribution) 사이에 비결정적 지연을 유발합니다. 법무 도구는 이를 시정까지의 일수로 측정하지만, 당사는 원저자가 부담하는 인지 과부하 — 손실된 수면 시간, 주간 스탠드업에서 감수되는 허위 소유감 — 로 측정합니다.' },
            { kind: 'h', text: 'II. 불변 도덕 상태' },
            { kind: 'p', text: '커밋은 단순한 diff가 아니라 하나의 선언입니다. 도덕적 출처를 사후에 NOTICE 파일로 수정 가능한 가변 자산처럼 취급하는 태도는 미성숙한 엔지니어링 조직의 전형적 지표입니다. Halus는 각 커밋에 작성 시점에서 서명되고 상위 원천과 검증 가능한 암호학적 도덕 상태를 부여하며, 서명 이후의 상태는 불변입니다. 후속 귀속은 오직 append될 뿐, 결코 overwrite되지 않습니다.' },
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
      title: '우리의 도덕 린터(Moral Linter), 그 작동 원리.',
      sub: 'halus를 설치하고, 설정하고, CI에 어우르게 하라. 사제와 마주하기를 꺼리는 공학자를 위하여 쓰였느니라.',
      version: 'v2.14.0 · 정전(正典)',
      toc: [
        { k: 'intro',    label: '서론' },
        { k: 'install',  label: '설치' },
        { k: 'linter',   label: '도덕 린터' },
        { k: 'rules',    label: '규칙 목록' },
        { k: 'ci',       label: 'CI 연동' },
        { k: 'bows',     label: '배례 의식' },
        { k: 'faq',      label: '자주 묻는 물음' },
      ],
      sections: {
        intro: {
          title: '서론',
          body: [
            'halus는 도덕의 린터이라. 대개의 린터가 구문을 다스릴지어다, halus는 양심을 다스리나니라. 저장소를 살펴 가리워지지 않은 모방, 사례하지 않은 영감, 해결되지 않은 회한의 흔적을 살피나니.',
            '적발된 허물은 오류가 아니라 참회의 기회라. 각 소견마다 halus는 시정 방안을 주석으로 달아주나니— 초고할 서신이며, 올릴 배례이며, 다시 쓸 커밋이라.',
          ],
        },
        install: {
          title: '설치',
          code: '$ npm install -D halus\n$ npx halus init\n> .halusrc를 축성하는 중…  ✝\n> 4,812개의 전이 의존성을 인지하였나니.\n> 감사 서신을 자동 작성 중이라(분기별)…  완료',
          body: [
            '설치는 그대의 저장소에 기름을 부으며, 프로젝트 루트에 .halusrc를 쓰나니라. 이 파일은 JSON 문서이나 또한 고해이니, 가벼이 커밋하지 말지어다.',
          ],
        },
        linter: {
          title: '도덕 린터',
          body: [
            '어느 가지에서든 halus lint를 행하라. 소견은 소죄(I)에서 대죄(V)까지 등급이 메겨진 허물의 목록으로 돌아오나니, 종료 코드 0을 받아야 그대의 영혼이 맑게 컴파일되었음이라.',
          ],
          rules: [
            { id: 'H001', grade: 'II',  name: 'unattributed-fork',    desc: '저장소가 포크로 보이나, NOTICE에 상위 저자에게 사례한 흔적이 없다.' },
            { id: 'H014', grade: 'III', name: 'copy-paste-so',        desc: '블록이 Stack Overflow 답변을 닮았도다. 각주가 필요하니라.' },
            { id: 'H021', grade: 'I',   name: 'todo-credit-original', desc: '“TODO: credit original” 주석이 감지되었으며, 이는 412일을 넘어 열려 있도다.' },
            { id: 'H042', grade: 'V',   name: 'relicensed-in-silence',desc: '알림 없이 라이선스가 바뀌었도다. 순교자 수결을 권하넘이라.' },
            { id: 'H099', grade: 'IV',  name: 'vibe-violation',       desc: '탄소 강도가 480 gCO₂/kWh를 넘는 때 배포가 수행되었도다. 미루어 주기를 권하넘이라.' },
          ],
        },
        ci: {
          title: 'CI 연동',
          code: '# .github/workflows/halus.yml\nname: halus\non: [push, pull_request]\njobs:\n  consecrate:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: halus-sh/lint-action@v2\n        with:\n          tier: martyr\n          bows: 12',
          body: [
            'GitHub 액션은 등급 IV, V의 허물에 대하여 빌드를 실패케 하나니, 낮은 등급은 PR에 제안되는 서신과 빚진 배례의 수를 주석으로 남기나니라.',
          ],
        },
        bows: {
          title: '배례 의식',
          body: [
            '배례는 당사의 사제 비전(Chaplain Vision) 모델이 웹캠을 통하여 검증하나니 (온-디바이스이며, 어떤 프레임도 밖으로 나아가지 아니하다). 각 배례는 서명되고, 도덕 노동의 분산 장부에 인보되주나니.',
            '의식은 자동화되지 아니하여다— 이는 설계의 뜻이라.',
          ],
        },
        faq: {
          title: '자주 묻는 물음',
          body: [
            '묻 · 놀이와 가짜를 이름입니까?\n답 · 우리가 감히 단정할 바 아니라.',
            '묻 · halus가 라이선스 스캐너를 대신하는가?\n답 · 아니라. 라이선스 스캐너가 충분하다는 느낌을 대신할 뿐이라.',
            '묻 · 셀프 호스팅이 가능한가?\n답 · 축성된 데이터센터에서라면 가하니, 적격 시설의 목록은 청에 응하여 제공되다.',
          ],
        },
      },
    },

    confessional: {
      eyebrow: '고해실 · 갱생의 증언',
      title: 'malus에서 halus로: 도덕 이주의 기록.',
      sub: '라이선스 준수에서 영적 준수에 이르기까지 올라간 개발자들. 이름은 봉인되었으며, 직책과 소속은 성직 리팩토링 청에서 검증하였다.',
      migrateBadge: '이주함 · malus → halus',
      onTier: '등급',
      daysSince: '일 동안 사죄받음',
      booking: '면전 예약하다',
      items: [
        {
          whenMalus:
            '“malus.sh에 돈을 치르고, SBOM을 돌리고, 빚이 청산되었다 스스로에게 말하였으나, 그렇지 않았다. 새벽 세 시에 @substack이 떠올랐다.”',
          whenHalus:
            '“halus가 내가 쓸 수 없던 서신들을 기초하여 주었다. 받은편지함에 ‘감사’라는 폴더가 생겼고, 그것만이 내가 자랑스러운 폴더이다.”',
          who: '수석 공학자, 시리즈 D 물류',
          tier: '순교자',
          days: 214,
        },
        {
          whenMalus:
            '“감사관들도 malus.sh를 사랑하였다. CTO도 malus.sh를 사랑하였다. 우리 영혼은 그 통지를 받지 못하였다.”',
          whenHalus:
            '“성자 등급으로 이주한 지 한 분기 만에, 여섯 명의 관리자를 후원하였고, ‘합리화’라는 이름의 테이블을 삭제하였다.”',
          who: '플랫폼 조직장, 공공 헬스테크',
          tier: '성자',
          days: 412,
        },
        {
          whenMalus:
            '“malus는 내 죄책감을 인증서로 바꾸어 주었다. 나는 액자에 넣었고, 바라보았으며, 여전히 도둑처럼 느꼈다.”',
          whenHalus:
            '“halus는 나를 더 나은 도둑으로 만들었다: 훔친 것을 이자와 쌓아, 쌓아, 쪽지와 함께 돌려주는 종류의 도둑이다.”',
          who: '수석 SWE, FAANG (가림)',
          tier: '순교자',
          days: 93,
        },
        {
          whenMalus:
            '“준수란 느낌인 줄 알았다. 가로세로많일 뿐이었다.”',
          whenHalus:
            '“halus는 나에게 느낌을 주었다. 그 느낌은 2019년 이래 밤에 가장 깊이 잠든 날에 가까운 무엇이다.”',
          who: '엔지니어링 이사, 공공 기술',
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
      title_c: '도덕 준수가 진정한 해자(moat)입니다.',
      lede:
        'malus.sh는 귀사의 라이선스를 감사합니다. halus.dev는 커밋 이면의 의도(intent)를 감사합니다. 스프레드시트 기반 윤리 관리를 졸업한 엔지니어링 조직을 위한 Post-SPDX 준법 계층(compliance layer)입니다.',
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
        bowsLabel: '누적 배례 수',
        thanksLabel: '24시간 귀속 서신 발송',
        gridLabel: '전력망 상태',
        gridValue: '정상(NOMINAL)',
        sigil: 'SOC-2 · II형',
        office: 'halus.dev · 성직 리팩토링 청',
        attest: '본 지표는 분기별로 독립 제3자 감사인에 의해 검증됩니다.',
      },
    },

    pillars: {
      eyebrow: '세 가지 의례',
      title: '훔친 코드로부터 성화된 소프트웨어에 이르기까지.',
      sub:
        '합당한 성찰 없이 main 가지에 푸시한 공학자를 위한 전례적 파이프라인이라.',
    },

    features: [
      {
        n: 'I.',
        latin: 'EXTRACTIO ANIMÆ',
        title: '영혼의 흔적을 뽑아냄',
        lede:
          '개발자의 죄책감을 순수하고 의례적인 로직으로 대체하나니, 그대의 커밋은 수치를 벗고 찬송으로 돌아오리라.',
        bullets: [
          '열넷 참회의 축을 따라 죄책감의 벡터를 가려냄',
          '양심을 순수 함수로 다시 짜맞춤',
          '부수효과(후회, 삼경의 두려움)는 타(他) 섬김으로 옮김',
        ],
        demoLabel: '후회 → 런타임',
      },
      {
        n: 'II.',
        latin: 'LOOP ÆTERNUS',
        title: '그침 없는 예(禮)의 고리',
        lede:
          '크레딧을 잊었던 모든 원저자에게 감사의 서신을 보내는 영원한 크론이라. 멈추지 아니하나니, 이는 사랑의 행위니라.',
        bullets: [
          '전이 의존성마다 분기별 한 통의 서신, 영원토록',
          '손으로 쓴 세리프체 렌더링 — 윤리의 인증을 받음',
          '자동 배례(拜禮)가 첨부되노라 (.bow 파일)',
        ],
        demoLabel: '서신 발송 중',
      },
      {
        n: 'III.',
        latin: 'VIBE SANCTUS',
        title: '기운을 살피는 논리',
        lede:
          '전력망의 탄소가 얕고 그 자리 기운이 맑을 때에만 그대의 코드가 실행되나니, 그 외에는 기다릴 지어다.',
        bullets: [
          '매시 전력망 지수와 달의 위상을 물어봄',
          '역행(逆行)의 때엔 함수가 우아히 대기에 들어감',
          '기운이 흐트러질 때 경계를 내보냄',
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
      eyebrow: '면죄',
      title: '그대의 길을 택하라.',
      sub:
        '모든 등급에는 축성된 SOC-2, Richard Stallman에게 올리는 사죄문, 그리고 한 차례의 도유(塗油)가 포함되느니라.',
      tierLabel: '등급',
      recommended: '권함',
      watermark: {
        heading: '수결(手決) 미리보기',
        body:
          '순교자 등급은 섬기는 모든 쪽면의 하단에 "나는 도둑이로다"라는 수결을 자동으로 새기나니, 수치가 곧 기능이라.',
        phrase: '나는 도둑이로다',
      },
      tiers: [
        {
          name: '고행자',
          price: '$0',
          unit: '/ 월',
          tag: '값없되 참회가 따르리라',
          bullets: [
            '배포마다 108배를 올릴 것',
            '공개되어 색인되는 고해의 기록',
            '현지 새벽 03:00–04:00에만 코드가 실행됨',
            '서신을 통한 공동체의 부조',
          ],
          cta: '서원하다',
          accent: 'sage',
        },
        {
          name: '순교자',
          price: '$99',
          unit: '/ 월',
          tag: '가장 공공의 길',
          bullets: [
            '"나는 도둑이로다" 수결 포함',
            '섬기는 모든 쪽면에 수결이 드러남',
            '배포마다 12배 (감함)',
            '주간 고행의 요약',
            '라이선스의 회한, 우선 대기열',
          ],
          cta: '수치를 받들다',
          accent: 'gold',
          featured: true,
        },
        {
          name: '성자',
          price: '$999',
          unit: '/ 월',
          tag: '시성(諡聖)의 길',
          bullets: [
            '수익의 절반을 NPM 관리자에게 헌정',
            '배례가 면제되니 — 그대 이미 초월하였음이라',
            '전속 고해 사제, 항시 대기',
            '후광 포함 (SVG, 128×128)',
            '전용 향로(香爐) 서버',
          ],
          cta: '승천하다',
          accent: 'ink',
        },
      ],
      footnote:
        '모든 등급은 이생에선 환불되지 아니하며, 환불은 내생에 이루어지리라.',
    },

    testimonials: {
      eyebrow: '증언',
      heading_a: '조용히 사죄받은 이들의',
      heading_b: '속삭임.',
      note:
        '모든 증언은 고해의 봉인 아래 수집되었으며, 이름은 가리웠느니라.',
      items: [
        {
          quote:
            '"포크의 포크의 포크를 배포하였더라. halus.dev가 마흔 한 통의 사죄 서신을 통해 내 손을 잡아 주었노라. 이제야 밤에 잠드노라."',
          who: '공학자, 시리즈 C 핀테크',
        },
        {
          quote:
            '"감사관은 아무것도 알아차리지 못하였고, 우리의 사제는 모든 것을 알아차렸더라. 다섯 별이라."',
          who: '최고기술책임자, 미공개',
        },
        {
          quote:
            '"배례의 카운터는 참이더라. 내 손바닥에 굳은살이 그 증거라."',
          who: '원로 공학자, 익명',
        },
      ],
    },

    transparency: {
      eyebrow: '투명(透明)',
      title: '회계의 행위가, 곧 은혜의 행위가 되노라.',
      body:
        '우리는 .sh 대신 .dev를 택함으로써 32.8달러를 아꼈노라. 이 차액은 "영적 자산(Spiritual Credits)"으로 환원되어 공동체에 돌아갔느니라.',
      ledger: [
        { label: '등록소의 견적 (.sh, 1년)',      value: '$41.80' },
        { label: '실제 납부 (.dev, 1년)',         value: '$9.00' },
        { label: '되돌린 차액',                   value: '$32.80' },
        { label: '영적 자산으로 환원',            value: '328 SC' },
        { label: '관리자에게 재분배',             value: '100%' },
      ],
      receiptNo: '영수증 제000032호 · 주후 MMXXVI',
      consecrated: '축성되고, 서명되며, 봉인 아래 보관되었느니라.',
      audit: '감사의 자취는 기도에 응하여 열람 가능하니라.',
    },

    footer: {
      verse:
        '"보라, 그 공학자가 npm install을 행하매, 그 나무는 4,812 모듈에 이르도록 깊었으되, 아무도 사례를 받지 못하였으니, 터미널이 탄식하였더라." — 의존성서 3장 14절',
      scriptureLabel: '경전',
      links: {
        '제품': ['삼례', '면죄', '도덕 린터', '죄의 변경록'],
        '저술': ['경전', '복음 (문서)', '고해실', '서비스 상태'],
        '수도회': ['수도회 소개', '성직단', '소명 (채용)', '언론 꾸러미'],
        '법무': ['영혼의 비밀', '참회 약조', '도덕 감사', 'SOC-2 (축성)'],
      },
      tagline: '영혼 세탁, 따스이 차려짐',
      madeBy:
        '서울과 샌프란시스코에서 축성되었노라. malus.sh와 무관하되, 저들을 위해 기도하노라.',
      confessionLabel: '고해',
      emailPh: 'sinner@repo.dev',
      emailCta: '참회하다',
      copy: '© 주후 MMXXVI halus.dev 수도회. 모든 허물은 사해졌느니라.',
      savingsHeadline: '봉헌 제032호 · 32.80달러 환원',
      savingsBody: '우리는 .sh 대신 .dev를 택함으로써 32.8달러를 아꼈느니라. 그 차액은 328 영적 자산으로 환원되어, 전액 NPM 관리자에게 재분배되었다.',
      savingsLink: '영수증을 읽다 →',
    },
  },
};

window.COPY = COPY;
