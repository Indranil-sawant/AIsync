export interface ServiceItem {
  id: string;
  num: string;
  name: string;
  tagline: string;
  category: string;
  problem: string;
  explanation: string;
  examples: string[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'website-development',
    num: '01',
    name: 'Website Development',
    tagline: 'Turn visitors into customers with a clear, credible online presence.',
    category: 'Websites',
    problem: 'Does your website look outdated, fail to explain what you offer, or bring in zero inquiries?',
    explanation: 'We design and build professional websites that represent your business properly, load fast on all devices, and help prospective customers take the next step.',
    examples: [
      'Business & Corporate Websites',
      'School & Institutional Sites',
      'Clinic & Healthcare Websites',
      'Services & Professional Portfolios',
      'Landing Pages & Campaign Sites',
      'E-commerce Stores & Online Shops'
    ],
    benefits: [
      'Build immediate credibility with new customers',
      'Make your business easy to find on search engines',
      'Flawless experience on smartphones, tablets, and laptops',
      'Simple content management without technical headache'
    ],
    process: [
      { step: '01', title: 'Understand', desc: 'We learn about your business, audience, and goals.' },
      { step: '02', title: 'Design', desc: 'We create clean layouts designed to turn visitors into leads.' },
      { step: '03', title: 'Build', desc: 'We build your site to run fast, stay secure, and look sharp.' },
      { step: '04', title: 'Launch', desc: 'We deploy your site and ensure your team can manage it.' }
    ],
    faqs: [
      {
        question: 'Will my website work well on mobile phones?',
        answer: 'Yes. Every website we build is designed from the ground up to look great and work smoothly on smartphones, tablets, and computers.'
      },
      {
        question: 'Can I update the content myself later?',
        answer: 'Absoluted. We set up easy-to-use content tools so you can update text, images, and services whenever you need to.'
      }
    ]
  },
  {
    id: 'application-development',
    num: '02',
    name: 'Application Development',
    tagline: 'Custom software built around the way your business actually works.',
    category: 'Applications',
    problem: 'Trying to force your business into generic off-the-shelf software that doesn\'t fit how you work?',
    explanation: 'Have an idea for an app or need an internal system for your team? We design and build custom web and mobile applications tailored to your specific operations.',
    examples: [
      'Internal Business Management Systems',
      'Customer & Client Portals',
      'Staff & Field Team Applications',
      'Booking & Appointment Systems',
      'Mobile Apps (iOS & Android)',
      'Custom Operational Dashboards'
    ],
    benefits: [
      'Software that matches your exact workflow',
      'Improve team efficiency and reduce errors',
      'Give clients a convenient portal to interact with you',
      'Own a flexible system that grows with your company'
    ],
    process: [
      { step: '01', title: 'Scope', desc: 'We map out your business workflow and requirements.' },
      { step: '02', title: 'Prototype', desc: 'We design clear screens so you see how it works before building.' },
      { step: '03', title: 'Develop', desc: 'We build the application step-by-step with regular updates.' },
      { step: '04', title: 'Deploy', desc: 'We launch the system and train your team.' }
    ],
    faqs: [
      {
        question: 'What is the difference between a website and an application?',
        answer: 'A website primarily presents information to visitors. An application allows users (staff or customers) to perform specific tasks, such as managing bookings, processing records, or logging into portals.'
      },
      {
        question: 'Can you build apps for both mobile and web?',
        answer: 'Yes. We build web applications accessible from any browser as well as mobile apps for iPhone and Android.'
      }
    ]
  },
  {
    id: 'business-automation',
    num: '03',
    name: 'Business Automation',
    tagline: 'Turn repetitive manual work into simple automated processes.',
    category: 'Automation',
    problem: 'Is your team wasting hours copying data, sending manual emails, or updating spreadsheets by hand?',
    explanation: 'If your team repeatedly does the same task by hand, there is a better way. We find repetitive work and set up reliable automated workflows so your team can focus on what matters.',
    examples: [
      'Automated Lead Collection & Email Follow-ups',
      'Appointment Reminders & Status Notifications',
      'Document Generation & Invoice Workflows',
      'Connecting Disconnected Software Tools',
      'Automated Spreadsheet & Database Sync',
      'Approval Workflows & Team Alerts'
    ],
    benefits: [
      'Save dozens of staff hours every week',
      'Eliminate manual data entry mistakes',
      'Respond to new client inquiries instantly',
      'Keep information synchronized across all tools'
    ],
    process: [
      { step: '01', title: 'Identify', desc: 'We review your daily tasks to find manual bottlenecks.' },
      { step: '02', title: 'Connect', desc: 'We link your existing tools together behind the scenes.' },
      { step: '03', title: 'Automate', desc: 'We build rules to handle repetitive tasks automatically.' },
      { step: '04', title: 'Verify', desc: 'We test thoroughly to ensure 100% accuracy.' }
    ],
    faqs: [
      {
        question: 'Do we need to replace our current software tools to use automation?',
        answer: 'No. In most cases, we connect the software tools you already use (like email, spreadsheets, CRM, or forms) so they talk to each other automatically.'
      },
      {
        question: 'Is automation realistic for small businesses?',
        answer: 'Yes! Small businesses often benefit the most from automation because it allows a small team to handle a larger volume of work without hiring extra staff.'
      }
    ]
  },
  {
    id: 'take-your-business-digital',
    num: '04',
    name: 'Take Your Business Digital',
    tagline: 'Replace paper files and messy spreadsheets with one organized digital system.',
    category: 'Digital Systems',
    problem: 'Still managing important parts of your business through paper files, WhatsApp messages, or scattered spreadsheets?',
    explanation: 'We help bring paper processes, manual tracking, and disconnected tools into one organized digital system that makes daily operations easier, cleaner, and less chaotic.',
    examples: [
      'Moving Paper Forms & Records Online',
      'Centralized Customer & Lead Databases',
      'Digital Document Archiving & Search',
      'Online Booking & Request Portals',
      'Real-Time Business Dashboards',
      'Digital Approval & Tracking Workflows'
    ],
    benefits: [
      'Access your business information securely from anywhere',
      'Never lose important records or customer details',
      'Reduce reliance on paper, physical filing, and messaging groups',
      'Get clear visibility into business performance'
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'We examine your paper files and manual tracking systems.' },
      { step: '02', title: 'Structure', desc: 'We design a simple digital layout for your records.' },
      { step: '03', title: 'Migrate', desc: 'We digitize forms and bring existing data online.' },
      { step: '04', title: 'Train', desc: 'We walk your team through using the new digital system.' }
    ],
    faqs: [
      {
        question: 'Will our non-technical staff find the digital system easy to use?',
        answer: 'Yes. We prioritize extreme simplicity so anyone who can use a basic browser or smartphone can comfortably use the system.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    num: '05',
    name: 'Digital Marketing & Growth',
    tagline: 'Build a stronger online presence and reach the right local & regional customers.',
    category: 'Marketing & Growth',
    problem: 'Having a great service or product is not enough if prospective customers cannot find you online.',
    explanation: 'We help businesses increase their visibility, improve their Google presence, and turn website traffic into genuine customer inquiries without unrealistic marketing claims.',
    examples: [
      'Google Presence & Search Engine Optimization (SEO)',
      'Social Media Strategy & Content Guidance',
      'Website Conversion Improvement',
      'Local Business Visibility',
      'Targeted Online Campaign Planning',
      'Marketing Performance Analytics'
    ],
    benefits: [
      'Help local and regional customers find your business easily',
      'Improve how your business looks across Google & social media',
      'Turn existing website visitors into active leads',
      'Clear, honest reporting on what is actually working'
    ],
    process: [
      { step: '01', title: 'Review', desc: 'We analyze your current online visibility and search ranking.' },
      { step: '02', title: 'Optimize', desc: 'We improve your website content, search tags, and Google profile.' },
      { step: '03', title: 'Reach', desc: 'We launch targeted visibility improvements.' },
      { step: '04', title: 'Measure', desc: 'We track inquiries and refine strategy based on real feedback.' }
    ],
    faqs: [
      {
        question: 'Do you promise guaranteed #1 rankings or instant sales?',
        answer: 'No. We don\'t make unrealistic promises. We focus on practical, honest tactics like improving search setup, clear website copy, and local search presence that consistently bring results over time.'
      }
    ]
  },
  {
    id: 'technology-consulting',
    num: '06',
    name: 'Technology Consulting',
    tagline: 'Understand your problems first and choose practical solutions before spending money.',
    category: 'Consulting',
    problem: 'Unsure what software or technology your business actually needs, or worried about wasting money on the wrong tool?',
    explanation: 'You don\'t have to understand the technology. Tell us the problem your business is facing, and we will help you evaluate options, choose practical tools, and plan a sensible roadmap.',
    examples: [
      'Technology & System Planning',
      'Software & Vendor Selection Advice',
      'Process Improvement Assessment',
      'Website & Digital Strategy Planning',
      'Automation Opportunity Audits',
      'Technology Budgeting & Roadmaps'
    ],
    benefits: [
      'Avoid buying expensive software you don\'t need',
      'Get clear, plain-English advice without sales jargon',
      'Understand exactly what to build before spending a dime',
      'Confidently choose technology that fits your budget'
    ],
    process: [
      { step: '01', title: 'Listen', desc: 'You tell us the challenges your business is experiencing.' },
      { step: '02', title: 'Analyze', desc: 'We review existing tools, processes, and budget constraints.' },
      { step: '03', title: 'Recommend', desc: 'We provide clear, honest recommendations and options.' },
      { step: '04', title: 'Guide', desc: 'We help you execute the chosen solution smoothly.' }
    ],
    faqs: [
      {
        question: 'Do I need technical knowledge to talk to your team?',
        answer: 'Not at all! You describe your business goals and challenges in everyday language, and we take care of translating that into technical solutions.'
      }
    ]
  },
  {
    id: 'custom-solutions',
    num: '07',
    name: 'Custom Business Solutions',
    tagline: 'Have a unique problem that doesn\'t fit standard categories? We\'ll solve it with you.',
    category: 'Custom Solutions',
    problem: 'Does your business have a unique challenge, workflow, or idea that standard services don\'t address?',
    explanation: 'Every business operates differently. If your problem doesn\'t fit into a standard service bucket, we work closely with you to understand the challenge and build a practical, tailored solution.',
    examples: [
      'Specialized Workflow Systems',
      'Custom Integration Between Legacy & Modern Tools',
      'Multi-Branch Management Portals',
      'Bespoke Client Reporting Systems',
      'Tailored Operational Tools'
    ],
    benefits: [
      'A solution designed specifically for your unique situation',
      'No unnecessary features—only what your business needs',
      'Full technical flexibility to adapt as your business evolves'
    ],
    process: [
      { step: '01', title: 'Discuss', desc: 'We explore your unique business challenge together.' },
      { step: '02', title: 'Plan', desc: 'We formulate a straightforward solution design.' },
      { step: '03', title: 'Build', desc: 'We build and test your custom system.' },
      { step: '04', title: 'Deliver', desc: 'We deploy the solution and provide ongoing support.' }
    ],
    faqs: [
      {
        question: 'How do we get started on a custom project?',
        answer: 'Simply reach out via our contact form or book a call. We\'ll discuss your challenge, outline potential approaches, and provide a clear quote.'
      }
    ]
  }
];
