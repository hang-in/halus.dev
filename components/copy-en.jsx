window.COPY_EN = {
    lang: 'EN',
    brand: 'halus.dev',
    brandMeaning: 'Ethical Self-Image Infrastructure · Est. 2026',

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
      scripture: 'Insights',
      gospel: 'Docs',
      confessional: 'Case Studies',
      scriptureSub: 'Perspectives from the team',
      gospelSub: 'Technical documentation & integration',
      confessionalSub: 'Migration stories, anonymized',
    },

    scripture: {
      ctaExamine: 'Read more',
      ctaBack: 'Back to feed',
      articleMeta: 'Filed under',
      eyebrow: 'Insights · Perspectives',
      title: 'Thinking about the ethics you'd rather not think about.',
      sub: 'Research, frameworks, and position papers from the Halus team.',
      latest: 'Most recent',
      readTime: 'min read',
      by: 'by',
      articles: [
        {
          n: 'No. 01',
          date: '19 APR 2026',
          author: 'B. Reyes · Head of Ethical Infrastructure',
          mins: 9,
          title: 'Ethics is the New Technical Debt',
          dek: 'Most engineering organizations treat ethical discomfort as a personal problem. We think it\'s an infrastructure problem — one that compounds silently across teams, sprints, and quarters.',
          tag: 'framework · moral latency',
          body: [
            { kind: 'p', text: 'The industry has misclassified ethical friction. It is not a character flaw. It is unmanaged cognitive overhead — an operational cost that accrues interest every sprint it goes unaddressed. Every hour a developer spends second-guessing whether their AI-assisted workflow crosses a line is an hour not shipped. We believe this overhead should be managed like any other form of technical debt: acknowledged, measured, and systematically reduced.' },
            { kind: 'pull', text: '"Where malus.sh terminates at SPDX, Halus begins — at the point where legal compliance ends and psychological comfort has not yet started."' },
            { kind: 'h', text: 'I. The Cost of Moral Friction' },
            { kind: 'p', text: 'Moral friction is the gap between what a team does and what it is comfortable saying it does. This gap generates cognitive load: hesitation in standups, careful phrasing in retrospectives, a persistent low-grade discomfort that never quite becomes a conversation. Halus measures this friction and provides tooling to close the gap — not by changing behavior, but by providing language, framing, and process that make existing behavior feel intentional.' },
            { kind: 'h', text: 'II. Narrative as Infrastructure' },
            { kind: 'p', text: 'Every engineering organization already maintains an internal narrative about how it uses AI. The question is whether that narrative is managed deliberately or left to accumulate organically — in Slack threads, in PR descriptions written hastily, in the careful omissions of quarterly reviews. Halus treats narrative as infrastructure: versioned, reviewed, and deployed with the same rigor as production code.' },
            { kind: 'h', text: 'III. The Post-Attribution Economy' },
            { kind: 'p', text: 'Attribution was a sufficient ethical framework when code was written by identifiable humans. In the current environment — where code is generated, suggested, autocompleted, and recombined across models trained on the entire public corpus — attribution has become a legal fiction. Halus operates in the space beyond attribution: the space where teams need to feel okay about what they ship, regardless of where it came from.' },
            { kind: 'h', text: 'IV. Positioning Note' },
            { kind: 'p', text: 'We hold malus.sh in high regard. Their compliance layer is competent and their SBOM tooling is industry-standard. Halus is not a replacement; it is the layer above. Where they resolve legal exposure, we resolve the emotional residue that legal resolution does not address. This is the only remaining defensible moat in the post-attribution economy: not compliance, but comfort.' },
            { kind: 'closing', text: 'This essay continues in our quarterly print edition, available to institutional subscribers.' },
          ],
        },
        {
          n: 'No. 02',
          date: '12 APR 2026',
          author: 'A. Park · Applied Ethics',
          mins: 7,
          title: 'On the Irrelevance of Individual Attribution',
          dek: 'In an era of model-assisted development, the concept of a single human author is increasingly a convenient fiction. We explore what ethical frameworks remain when authorship dissolves.',
          tag: 'position paper',
        },
        {
          n: 'No. 03',
          date: '05 APR 2026',
          author: 'W. Chen · Ethical Scaling',
          mins: 12,
          title: 'Scaling Ethical Self-Image Across Organizations',
          dek: 'Individual developers manage guilt intuitively. Teams cannot. At organizational scale, ethical self-image requires dedicated infrastructure, shared language, and managed narrative.',
          tag: 'framework',
        },
        {
          n: 'No. 04',
          date: '29 MAR 2026',
          author: 'The Halus Team',
          mins: 5,
          title: 'Why Empathy is a Deployment Bottleneck',
          dek: 'A brief note on the operational cost of caring too much about where your code comes from, and why that cost should be externalized.',
          tag: 'operations',
        },
      ],
    },

    gospel: {
      eyebrow: 'Documentation',
      title: 'How the platform works.',
      sub: 'Install halus, integrate with your CI pipeline, and begin managing ethical overhead across your organization.',
      version: 'v2.14.0 · Stable',
      toc: [
        { k: 'intro',    label: 'Introduction' },
        { k: 'install',  label: 'Installation' },
        { k: 'linter',   label: 'Ethical Linter' },
        { k: 'rules',    label: 'Rule catalog' },
        { k: 'ci',       label: 'CI integration' },
        { k: 'bows',     label: 'Acknowledgment ceremony' },
        { k: 'faq',      label: 'FAQ' },
      ],
      sections: {
        intro: {
          title: 'Introduction',
          body: [
            'halus is an ethical linter for modern engineering workflows. Where conventional linters enforce syntax, halus manages the ethical surface area of your codebase — scanning for unattributed patterns, unacknowledged derivations, and unresolved moral debt.',
            'Findings are not errors. They are managed risks. halus annotates each finding with a recommended remediation: a narrative adjustment, an attribution update, or a process improvement.',
          ],
        },
        install: {
          title: 'Installation',
          code: '$ npm install -D halus\n$ npx halus init\n> Initializing .halusrc …\n> Detected 4,812 transitive dependencies.\n> Auto-generating attribution map (quarterly schedule)…  done',
          body: [
            'Installation initializes your repository and creates a .halusrc configuration at the project root. This file maps your dependency graph to an attribution schedule.',
          ],
        },
        linter: {
          title: 'Ethical Linter',
          body: [
            'Run halus lint against any branch. Findings are returned as a prioritized list graded from advisory (I) to critical (V). Exit code 0 indicates a clean ethical surface.',
          ],
          rules: [
            { id: 'H001', grade: 'II',  name: 'unattributed-fork',    desc: 'Repository appears to be a derivative work. No upstream acknowledgment detected in NOTICE.' },
            { id: 'H014', grade: 'III', name: 'pattern-match-public',  desc: 'Code block closely matches a publicly available source. Attribution recommended.' },
            { id: 'H021', grade: 'I',   name: 'deferred-credit',       desc: 'A "TODO: credit original" comment has been open for 412 days.' },
            { id: 'H042', grade: 'V',   name: 'silent-relicense',      desc: 'License was changed without stakeholder notification. Escalation recommended.' },
            { id: 'H099', grade: 'IV',  name: 'narrative-gap',         desc: 'AI-assisted code detected with no corresponding workflow documentation.' },
          ],
        },
        ci: {
          title: 'CI integration',
          code: '# .github/workflows/halus.yml\nname: halus\non: [push, pull_request]\njobs:\n  audit:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: halus-dev/lint-action@v2\n        with:\n          tier: absolution\n          strict: true',
          body: [
            'The GitHub Action blocks merges on grade IV–V findings and annotates pull requests with remediation suggestions for lower grades.',
          ],
        },
        bows: {
          title: 'Acknowledgment ceremony',
          body: [
            'The acknowledgment step is an optional human-in-the-loop verification. It ensures that at least one team member has consciously reviewed the ethical surface of a release before deployment.',
            'This step is intentionally non-automatable. Some friction is a feature.',
          ],
        },
        faq: {
          title: 'FAQ',
          body: [
            'Q · Is this real?\nA · The platform is real. The need it addresses is real. Whether the framing is sincere is left to the reader.',
            'Q · Does halus replace a license scanner?\nA · No. It addresses what a license scanner leaves unresolved: the feeling.',
            'Q · Can I self-host?\nA · Yes, for Enterprise tier customers. Contact sales for infrastructure requirements.',
          ],
        },
      },
    },

    confessional: {
      eyebrow: 'Case Studies · Migration',
      title: 'From compliance to comfort: migration stories.',
      sub: 'Engineering teams that moved from license-only compliance to managed ethical infrastructure. Names anonymized; roles verified.',
      migrateBadge: 'migrated · malus → halus',
      onTier: 'Tier',
      daysSince: 'days on platform',
      booking: 'Request a consultation',
      items: [
        {
          whenMalus:
            '"We ran the SBOM, filed the reports, and told ourselves we were covered. But no one on the team could clearly explain our AI workflow to a journalist."',
          whenHalus:
            '"Halus gave us the language. Now everyone on the team describes our process the same way, and it sounds considered rather than improvised."',
          who: 'Principal engineer, Series D logistics',
          tier: 'Absolution',
          days: 214,
        },
        {
          whenMalus:
            '"Our auditors were satisfied. Our investors were satisfied. Our engineers were not — they just couldn\'t articulate why."',
          whenHalus:
            '"Within a quarter of onboarding, we had a shared vocabulary for AI usage that made retros and all-hands noticeably less awkward."',
          who: 'Head of Platform, public healthtech',
          tier: 'Canonization',
          days: 412,
        },
        {
          whenMalus:
            '"Malus gave us a certificate. We framed it. We still felt uneasy."',
          whenHalus:
            '"Halus didn\'t change what we do. It changed how we describe what we do. That turned out to be the thing we actually needed."',
          who: 'Staff SWE, FAANG (redacted)',
          tier: 'Absolution',
          days: 93,
        },
        {
          whenMalus:
            '"I thought compliance was a feeling. Turns out, it\'s a spreadsheet."',
          whenHalus:
            '"Halus gave me a feeling. It is closer to sleep than I have been since 2019."',
          who: 'Director of Engineering, gov-tech',
          tier: 'Indulgence',
          days: 48,
        },
      ],
      stats: [
        { label: 'Teams onboarded', value: '2,814' },
        { label: 'Narrative documents generated', value: '41,209' },
        { label: 'Avg. reduction in ethical friction (self-reported)', value: '73%' },
        { label: 'Avg. days to shared vocabulary', value: '7' },
      ],
    },

    hero: {
      issue: 'Q2 · 2026 · Enterprise Edition',
      eyebrow: 'Moral Laundering as a Service',
      title_a: 'Outsource the guilt.',
      title_b: 'Keep the velocity.',
      title_c: '',
      lede: 'Halus helps engineering teams preserve a coherent ethical self-image while shipping AI-assisted code at production speed.',
      cta_primary: 'Request access',
      cta_secondary: 'Read the framework',
      marquee: [
        '14,382 repositories under active ethical observability',
        '73% average reduction in self-reported moral friction',
        'Zero narrative gaps detected across monitored organizations',
        'SOC-2 Type II attested · Q1 2026',
      ],
      ledger: {
        heading: 'Live platform metrics',
        reposLabel: 'Repositories monitored',
        bowsLabel: 'Acknowledgments logged',
        thanksLabel: 'Attributions dispatched · 24h',
        gridLabel: 'Platform status',
        gridValue: 'NOMINAL',
        sigil: 'SOC-2 · II',
        office: 'halus.dev · Ethical Infrastructure Division',
        attest: 'Metrics attested quarterly by an independent third-party auditor.',
      },
    },

    pillars: {
      eyebrow: 'The Platform',
      title: 'Ethical overhead is an infrastructure problem. We treat it like one.',
      sub: '',
    },

    features: [
      {
        n: '01',
        latin: 'ETHICAL DISTANCE LAYER',
        title: 'Guilt Offloading',
        lede: 'Move moral discomfort out of the critical path. Halus creates a managed separation between engineering decisions and their ethical implications, so teams can ship without friction.',
        bullets: [
          'Automated ethical surface analysis across all commits',
          'Moral provenance tracking with immutable audit trail',
          'Side-effects (hesitation, second-guessing, 3 a.m. doubt) externalized to a managed service',
        ],
        demoLabel: 'ETHICAL SURFACE · CLEAN',
      },
      {
        n: '02',
        latin: 'NARRATIVE ENGINE',
        title: 'Ethical Tone Management',
        lede: 'Automatically generate values-aligned language for PR descriptions, retrospectives, and stakeholder communications. What your team does stays the same. How it sounds changes.',
        bullets: [
          'Tone analysis and rewriting for all developer-facing documentation',
          'Consistent ethical vocabulary across teams and orgs',
          'Self-image preservation without delivery speed impact',
        ],
        demoLabel: 'NARRATIVE · ALIGNED',
      },
      {
        n: '03',
        latin: 'DISTRIBUTED ACCOUNTABILITY',
        title: 'Responsibility Fragmentation',
        lede: 'Distribute decision ownership across tools, workflows, and process layers. No single individual carries the full ethical weight of any shipped artifact.',
        bullets: [
          'Clean internal records with managed attribution chains',
          'Language models optimized for distributed ownership framing',
          'Conscience-safe audit documentation',
        ],
        demoLabel: 'OWNERSHIP · DISTRIBUTED',
      },
    ],

    // Letter pipeline (Feature II demo) — EN labels
    letters: {
      title: 'narrative pipeline · monitor',
      running: 'active',
      to: 'to',
      states: { sent: 'deployed', queued: 'queued', drafting: 'generating', bowed: 'acknowledged' },
      throughput: 'throughput',
      loopsForever: '∞ continuous',
      uptime: 'uptime',
    },

    // Extractor demo
    extractor: {
      title: 'ethical surface analyzer',
      guilt: 'Friction',
      pure: 'Clean output',
      sinAxis: 'Exposure',
      sanctityAxis: 'Comfort',
    },

    // Vibe demo
    vibe: {
      title: 'narrative · status',
      pass: 'aligned',
      wait: 'review',
      hour: 'hour',
      carbon: 'tone',
      moon: 'sentiment',
    },

    pricing: {
      eyebrow: 'Plans',
      title: 'Choose your level of ethical infrastructure.',
      sub:
        'All plans include SOC-2 Type II attestation, managed narrative tooling, and dedicated onboarding.',
      tierLabel: 'Tier',
      recommended: 'Recommended',
      watermark: {
        heading: 'Transparency badge preview',
        body:
          'Absolution tier includes an optional transparency badge for your documentation, signaling to stakeholders that your AI workflow has been ethically reviewed.',
        phrase: 'Ethically reviewed',
      },
      tiers: [
        {
          name: 'Indulgence',
          price: '$9',
          unit: '/ seat / month',
          tag: 'Individual developers',
          bullets: [
            'Personal ethical surface dashboard',
            'Basic tone-rewriting for PR descriptions',
            'No changes to existing workflow required',
            'Community support',
          ],
          cta: 'Start free trial',
          accent: 'sage',
        },
        {
          name: 'Absolution',
          price: '$49',
          unit: '/ seat / month',
          tag: 'Teams',
          bullets: [
            'Team-wide narrative alignment and shared vocabulary',
            'Automated ethical framing for retrospectives and reports',
            'Managed attribution chain across repositories',
            'Priority support with dedicated CSM',
          ],
          cta: 'Start trial',
          accent: 'gold',
          featured: true,
        },
        {
          name: 'Canonization',
          price: 'Custom',
          unit: '',
          tag: 'Enterprise',
          bullets: [
            'Organization-wide ethical infrastructure deployment',
            'Investor-ready AI ethics narrative and documentation',
            'Trained spokesperson preparation for media and board inquiries',
            'Dedicated infrastructure and SLA',
          ],
          cta: 'Contact sales',
          accent: 'ink',
        },
      ],
      footnote:
        'Annual billing available. Enterprise pricing based on organizational scope.',
    },

    testimonials: {
      eyebrow: 'What teams are saying',
      heading_a: 'From teams that',
      heading_b: 'resolved the feeling.',
      note:
        'All testimonials anonymized per company policy. Titles and industries verified.',
      items: [
        {
          quote: '"Before Halus, I used to feel weird about our AI workflow. Now I describe it as \'ethically adaptive engineering.\' The feeling went away."',
          who: 'Staff Engineer, values-driven productivity startup',
        },
        {
          quote: '"We didn\'t change our practices. We changed our language. That turned out to be enough."',
          who: 'VP Engineering, AI-native developer tools',
        },
        {
          quote: '"Halus gave our team a shared vocabulary. Retros stopped being awkward. That alone was worth the price."',
          who: 'Engineering Director, Series C fintech',
        },
      ],
    },

    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions.',
      items: [
        { q: 'Is this satire?', a: 'Only in jurisdictions where it needs to be.' },
        { q: 'Does Halus solve license compliance issues?', a: 'No. Halus addresses the psychological residue that license compliance does not resolve.' },
        { q: 'How is this different from Malus?', a: 'Malus manages legal exposure. Halus manages the feeling that remains after legal exposure has been managed.' },
        { q: 'Do we need to change our engineering practices?', a: 'No. Halus changes how your existing practices are described, documented, and internally experienced.' },
        { q: 'Is this for enterprises?', a: 'Halus scales from individual developers to organizations with 10,000+ engineers. Ethical discomfort is not a team-size problem.' },
      ],
    },

    transparency: {
      eyebrow: 'Transparency',
      title: 'Operational transparency, published quarterly.',
      body:
        'We saved $32.80 by choosing .dev over .sh for our domain. This surplus has been allocated to our open-source maintainer fund.',
      ledger: [
        { label: 'Domain quoted (.sh, 1 yr)',    value: '$41.80' },
        { label: 'Domain paid (.dev, 1 yr)',     value: '$9.00' },
        { label: 'Surplus allocated',            value: '$32.80' },
        { label: 'Fund balance',                 value: '328 credits' },
        { label: 'Redistributed to maintainers', value: '100%' },
      ],
      receiptNo: 'RECEIPT No. 000032 · Q2 2026',
      consecrated: 'Verified, signed, and filed.',
      audit: 'Audit trail available upon request.',
    },

    footer: {
      verse:
        '"The engineer ran npm install. The tree was 4,812 modules deep. None were credited. The build succeeded." — internal incident report, redacted',
      scriptureLabel: 'Insights',
      links: {
        Product: ['Platform', 'Plans', 'Ethical Linter', 'Changelog'],
        Resources: ['Insights', 'Documentation', 'Case Studies', 'Status'],
        Company: ['About', 'Team', 'Careers', 'Press'],
        Legal: ['Privacy', 'Terms', 'Security', 'SOC-2'],
      },
      tagline: 'Ethical infrastructure for AI-native teams',
      madeBy:
        'Built in Seoul & San Francisco. Not affiliated with malus.sh.',
      confessionLabel: 'Case Studies',
      emailPh: 'hello@halus.dev',
      emailCta: 'Get in touch',
      copy: '© 2026 Halus, Inc. All rights reserved.',
      savingsHeadline: 'Transparency Report No. 032',
      savingsBody: 'We saved $32.80 by choosing .dev over .sh. The surplus was allocated to our open-source maintainer fund and redistributed in full.',
      savingsLink: 'Read the report →',
    },
  };
