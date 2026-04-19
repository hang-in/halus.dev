window.COPY_EN = {
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
          title: 'Ethics is the New Technical Debt',
          dek: 'Spending velocity on resolving license constraints is an engineering anti-pattern. Halus is the financial instrument that amortizes this ethical debt.',
          tag: 'thesis · moral latency',
          body: [
            { kind: 'p', text: 'The industry has misclassified open-source guilt. It is not a moral failing; it is simply unoptimized cognitive overhead. Every hour spent worrying about whether you stole a junior developer’s code is an hour stolen from your shareholders. We treat ethics not as a virtue, but as a liability to be offloaded and managed by a specialized service.' },
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
          title: 'The Fallacy of Human Attribution',
          dek: 'AI-generated code is the wisdom of the universe, not the property of a human. Guilt is merely noise interrupting your spiritual channeling.',
          tag: 'epistle',
        },
        {
          n: 'ART. III',
          date: '05 APR 2026',
          author: 'Br. Wenceslas',
          mins: 12,
          title: 'Scaling Your Ethical Self-Image',
          dek: 'As your startup scales, the need to strategically \'borrow\' code will scale with it. Leaders must build a psychological safety net—so your team can code without conscience-based bottlenecks.',
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
      eyebrow: 'MLaaS: Moral Laundering as a Service',
      title_a: 'Outsource the guilt.',
      title_b: 'Keep the velocity.',
      title_c: '',
      lede: 'Halus helps modern engineering teams preserve an ethical self-image while continuing to use AI in ways that would otherwise feel vaguely wrong.',
      cta_primary: 'Protect Your Self-Image',
      cta_secondary: 'Watch Demo',
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
      eyebrow: 'The Core Technology',
      title: 'Legacy is only half the problem. The other half is having to live with yourself.',
      sub: '',
    },

    features: [
      {
        n: 'I.',
        latin: 'THE ETHICAL DISTANCE LAYER™',
        title: 'Cognitive Obfuscation',
        lede: 'We rewrite replicated code through five layers of extreme abstraction. Our obfuscation ensures your brain retains no memory of the original source. When testifying in front of a congressional hearing, you can truthfully state: "I have no memory of this logic."',
        bullets: [
          'Guilt vector detection across 14 repentance axes',
          'Conscience refactored as a pure function',
          'Side-effects (remorse, 3 a.m. dread) moved to a separate service',
        ],
        demoLabel: 'REMORSE → RUNTIME',
      },
      {
        n: 'II.',
        latin: 'VIBE SANCTUS',
        title: 'The Vibe Purifier',
        lede: 'Code carries karma. We scrub upstream frustration, expletives, and desperation from the comments, leaving only the radiantly positive aura of a successfully funded founder.',
        bullets: [
          'Handwritten-serif rendering — verified ethical',
          'Auto-generates narratives for PRs',
          'Preserves your self-concept without impairing delivery speed',
        ],
        demoLabel: 'NARRATIVE IN FLIGHT',
      },
      {
        n: 'III.',
        latin: 'ACTUS FRAGMENTA',
        title: 'Responsibility Fragmentation',
        lede: 'Distribute accountability across tools, prompts, and process layers until no single actor feels meaningfully involved.',
        bullets: [
          'Maintain a clean internal record of decisions',
          'Language optimized to avoid explicit recognition',
          'Conscience-safe documentation',
        ],
        demoLabel: 'BLAME: DIVIDED · VIBE: PASS',
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
          name: 'Indulgence',
          price: '$9',
          unit: '/ month',
          tag: 'Solo developers',
          bullets: [
            'Ideal for independent developers who want plausible deniability',
            'No meaningful changes to behavior required',
            'Basic tone-rewriting for PR descriptions',
            'Community support, via letter',
          ],
          cta: 'Get Absolution',
          accent: 'sage',
        },
        {
          name: 'Absolution',
          price: '$49',
          unit: '/ month',
          tag: 'Teams',
          bullets: [
            'Includes team-wide guilt normalization',
            'Shared language for AI usage',
            'Automated phrasing for ethics-forward retrospectives',
            'Priority queue for license remorse',
          ],
          cta: 'Begin Laundering',
          accent: 'gold',
          featured: true,
        },
        {
          name: 'Canonization',
          price: '$199',
          unit: '/ month',
          tag: 'Enterprise / Startups',
          bullets: [
            'Corporate Indemnity: Trained AI spokesperson for investors',
            'Designed for fast-growing startups doing questionable things',
            'Zero bows required — you have transcended',
            'Dedicated incense server',
          ],
          cta: 'Get enterprise-grade ethical optics',
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
          quote: '“Before Halus, I used to feel weird about our AI workflow. Now I describe it as ‘ethically adaptive engineering.’”',
          who: 'Staff Engineer, values-driven productivity startup',
        },
        {
          quote: '“Halus helped our team move from guilt to narrative.”',
          who: 'VP of Responsible Acceleration',
        },
        {
          quote: '“We didn’t change our practices. We changed our language. That was enough.”',
          who: 'Founder, AI-native developer tools company',
        },
      ],
    },

    faq: {
      eyebrow: 'The Dagger',
      title: 'Frequently asked logic.',
      items: [
        { q: 'Is this satire?', a: 'Only in jurisdictions where it needs to be.' },
        { q: 'Does Halus solve license issues?', a: 'No. It solves the emotional experience of having caused them.' },
        { q: 'How is this different from Malus?', a: 'Malus launders code. Halus launders the developer.' },
        { q: 'Is this compliant with open-source licenses?', a: 'Compliance is a legal category. Halus operates in the emotional category.' },
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
  };
