// Icons are used as strings, no imports needed for now


export const servicesData = [
    {
        id: 'software-products',
        title: 'Software Products',
        description: 'We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation across all industries.',
        longDescription: 'Our enterprise-grade software products are designed to streamline operations, enhance productivity, and drive growth. From HR management to specialized industry solutions, we deliver robust, scalable, and secure applications.',
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        icon: "💻",

        // New Layout Configuration
        theme: 'light',
        heroVariant: 'solid-blue',
        heroTitle: 'Software Products',
        heroDescription: 'Our enterprise-grade software products are designed to streamline operations, enhance productivity, and drive growth.',

        ctaText: 'Explore Products',

        details: {
            whyChoose: [
                { title: 'Custom CRM solutions for every business size', description: '' },
                { title: 'Seamless integration with your existing tools', description: '' },
                { title: 'Cloud-based, secure, and scalable', description: '' },
                { title: 'Intuitive, user-friendly interface', description: '' },
                { title: 'Expert support and training', description: '' }
            ]
        },

        items: [
            "HR and Payroll Management Software",
            "Jewellery Software",
            "CRM Software",
            "Real Estate Software",
            "Inventory Management Software",
            "Hospital Management Software",
            "School Management Software"
        ]
    },
    {
        id: 'web-design-development',
        title: 'Web Design & Development',
        description: 'Custom websites, web applications, and specialized portal development.',
        longDescription: 'Create a powerful online presence with our cutting-edge web design and development services. We build responsive, SEO-friendly, and high-performance websites that engage users and convert visitors into customers.',
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        icon: "🌐",
        heroVariant: 'solid-blue',
        heroTitle: 'Web Development',
        heroDescription: 'Create stunning, high-performance websites that drive results and elevate your online presence.',
        ctaText: 'Start Web Project',
        subServicesTitle: 'Our Web Development Arsenal',
        subServicesDescription: 'Modern technologies and frameworks to build scalable, performant web applications',
        heroOverlay: 'dark',
        subServices: [
            {
                id: 'react-js',
                title: 'React.js Development',
                description: "Build lightning-fast, interactive web applications with React's component-based architecture.",
                features: ['Virtual DOM', 'Component Reusability', 'Rich Ecosystem', 'SEO Friendly'],
                // image: removed as per request
                heroTitle: 'React.js Development',
                heroDescription: 'Create interactive, high-performance user interfaces with our expert React development services.',
                details: {
                    whyChoose: [
                        { title: 'Component-Based', description: 'Reusable components for efficient development and maintenance.' },
                        { title: 'Fast Performance', description: 'Virtual DOM for optimal rendering performance and smooth user experience.' },
                        { title: 'Rich Ecosystem', description: 'Extensive library ecosystem and community support.' },
                        { title: 'SEO Friendly', description: 'Server-side rendering capabilities for better search engine visibility.' }
                    ],
                    technicalCapabilities: [
                        { title: 'Modern Hooks', description: 'Functional components with state logic' },
                        { title: 'Redux/Context', description: 'Scalable global state management' },
                        { title: 'Next.js Integration', description: 'Server-side rendering and static generation' }
                    ],
                    process: [
                        { title: 'Component Design', description: 'Atomic design system implementation' },
                        { title: 'Optimization', description: 'Code splitting and lazy loading' },
                        { title: 'Integration', description: 'API integration and state management setup' }
                    ]
                }
            },
            {
                id: 'angular',
                title: 'Angular Development',
                description: "Enterprise-grade applications with Angular's powerful framework and TypeScript foundation.",
                features: ['Full Framework', 'TypeScript First', 'Enterprise Ready', 'Material Design'],
                features: ['Full Framework', 'TypeScript First', 'Enterprise Ready', 'Material Design'],
                // image: removed as per request
                heroTitle: 'Angular Development',
                heroDescription: 'Build scalable, enterprise-level web applications with Google\'s robust Angular framework.',
                details: {
                    whyChoose: [
                        { title: 'Full-Featured', description: 'Complete framework with router, forms, and HTTP client included.' },
                        { title: 'TypeScript', description: 'Strong typing for better maintainability and tooling support.' },
                        { title: 'Enterprise Scale', description: 'Designed for large, complex application architectures.' },
                        { title: 'Two-Way Binding', description: 'Seamless synchronization between model and view.' }
                    ],
                    technicalCapabilities: [
                        { title: 'RxJS', description: 'Reactive programming with Observables' },
                        { title: 'Dependency Injection', description: 'Modular and testable code structure' },
                        { title: 'Angular CLI', description: 'Powerful command-line tools for development' }
                    ],
                    process: [
                        { title: 'Architecture', description: 'Module planning and service design' },
                        { title: 'Implementation', description: 'Component and directive development' },
                        { title: 'Testing', description: 'Unit testing with Jasmine and Karma' }
                    ]
                }
            },
            {
                id: 'vue-js',
                title: 'Vue.js Development',
                description: 'Progressive framework that scales from library to full-featured framework seamlessly.',
                features: ['Progressive Enhancement', 'Easy Learning', 'Flexible Architecture', 'Great Performance'],
                features: ['Progressive Enhancement', 'Easy Learning', 'Flexible Architecture', 'Great Performance'],
                // image: removed as per request
                heroTitle: 'Vue.js Development',
                heroDescription: 'Create versatile and performant web interfaces with the progressive Vue.js framework.',
                details: {
                    whyChoose: [
                        { title: 'Approachable', description: 'Gentle learning curve with HTML-based template syntax.' },
                        { title: 'Versatile', description: ' flexible ecosystem that scales between a library and a full framework.' },
                        { title: 'Performant', description: 'Optimization-focused with a lightweight core.' },
                        { title: 'Composition API', description: 'Logic reuse and code organization for complex features.' }
                    ],
                    technicalCapabilities: [
                        { title: 'Vue CLI', description: 'Standard tooling for Vue.js development' },
                        { title: 'Vuex/Pinia', description: 'State management patterns and libraries' },
                        { title: 'Nuxt.js', description: 'Vue framework for server-side rendering' }
                    ],
                    process: [
                        { title: 'Prototyping', description: 'Rapid UI development' },
                        { title: 'Component Logic', description: 'Implementing reactive data flows' },
                        { title: 'Optimization', description: 'Bundle size reduction and lazy loading' }
                    ]
                }
            },
            {
                id: 'node-js',
                title: 'Node.js Development',
                description: 'Server-side JavaScript development for scalable network applications and APIs.',
                features: ['JavaScript Everywhere', 'NPM Ecosystem', 'Non-blocking I/O', 'Microservices Ready'],
                features: ['JavaScript Everywhere', 'NPM Ecosystem', 'Non-blocking I/O', 'Microservices Ready'],
                // image: removed as per request
                heroTitle: 'Node.js Development',
                heroDescription: 'Power your backend with the speed and scalability of event-driven Node.js applications.',
                details: {
                    whyChoose: [
                        { title: 'Unified Language', description: 'Use JavaScript on both client and server sides.' },
                        { title: 'High Performance', description: 'Non-blocking, event-driven architecture for handling concurrent requests.' },
                        { title: 'Scalable', description: 'Ideal for building microservices and real-time applications.' },
                        { title: 'Vast Ecosystem', description: 'Access to the world\'s largest software registry (NPM).' }
                    ],
                    technicalCapabilities: [
                        { title: 'Express/NestJS', description: 'Robust web application frameworks' },
                        { title: 'Socket.io', description: 'Real-time bidirectional event-based communication' },
                        { title: 'Database Integration', description: 'Seamless connection with MongoDB, PostgreSQL, etc.' }
                    ],
                    process: [
                        { title: 'API Design', description: 'RESTful or GraphQL API architecture' },
                        { title: 'Implementation', description: 'Business logic and data access layer' },
                        { title: 'Deployment', description: 'Cloud deployment and scaling strategies' }
                    ]
                }
            },
            {
                id: 'website-design',
                title: 'Website Design',
                description: 'Stunning, user-centric designs that convert visitors into customers.',
                features: ['Responsive Design', 'UX Optimization', 'Brand Consistency', 'Conversion Focus'],
                features: ['Responsive Design', 'UX Optimization', 'Brand Consistency', 'Conversion Focus'],
                // image: removed as per request
                heroTitle: 'Website Design',
                heroDescription: 'Captivate your audience with visually stunning and user-friendly website designs.',
                details: {
                    whyChoose: [
                        { title: 'User-Centric', description: 'Designs focused on intuitive navigation and user experience.' },
                        { title: 'Responsive', description: 'Flawless presentation across all devices and screen sizes.' },
                        { title: 'Brand Aligned', description: 'Visuals that perfectly reflect your brand identity and values.' },
                        { title: 'Conversion Oriented', description: 'Layouts optimized to guide visitors towards desired actions.' }
                    ],
                    technicalCapabilities: [
                        { title: 'Figma/Adobe XD', description: 'High-fidelity prototyping and design' },
                        { title: 'Interaction Design', description: 'Engaging user interactions and animations' },
                        { title: 'Design Systems', description: 'Consistent UI components and style guides' }
                    ],
                    process: [
                        { title: 'Discovery', description: 'Understanding brand and user goals' },
                        { title: 'Wireframing', description: 'Structural layout and flow planning' },
                        { title: 'Visual Design', description: 'High-fidelity UI creation and refinement' }
                    ]
                }
            },
            {
                id: 'ecommerce-development',
                title: 'E-commerce Development',
                description: 'Complete online store solutions with payment integration and inventory management.',
                features: ['Payment Gateway', 'Inventory Management', 'Order Processing', 'Mobile Commerce'],
                features: ['Payment Gateway', 'Inventory Management', 'Order Processing', 'Mobile Commerce'],
                // image: removed as per request
                heroTitle: 'E-commerce Development',
                heroDescription: 'Launch successful online stores with our robust and secure e-commerce development solutions.',
                details: {
                    whyChoose: [
                        { title: 'Secure Transactions', description: 'Implementation of safe and reliable payment gateways.' },
                        { title: 'Inventory Control', description: 'Efficient management of products and stock levels.' },
                        { title: 'User Experience', description: 'Seamless shopping journey from browse to checkout.' },
                        { title: 'Scalability', description: 'Platforms that grow with your business needs.' }
                    ],
                    technicalCapabilities: [
                        { title: 'Platforms', description: 'Shopify, WooCommerce, Magento integration' },
                        { title: 'Payment Integration', description: 'Stripe, PayPal, Razorpay setup' },
                        { title: 'Analytics', description: 'Sales tracking and customer behavior insights' }
                    ],
                    process: [
                        { title: 'Platform Selection', description: 'Choosing the right tech for your needs' },
                        { title: 'Store Setup', description: 'Product catalog and payment configuration' },
                        { title: 'Launch', description: 'Testing content and going live' }
                    ]
                }
            }
        ],
        items: [
            "Website Design",
            "Website Development",
            "CRM Software Development",
            "Software Development",
            "Educational Web Portal Development",
            "Restaurant Web Portal Development",
            "Health Care Portal Development",
            "Travel Portal Development",
            "Real Estate Portal Development",
            "E-commerce Website Development"
        ]
    },
    {
        id: 'mobile-applications',
        title: 'Mobile Application',
        description: 'Native, hybrid, and cross-platform mobile app development solutions.',
        longDescription: 'Reach your customers on the go with our custom mobile application development services. We create intuitive, feature-rich apps for iOS and Android platforms using the latest technologies.',
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        icon: "📱",
        icon: "📱",
        heroVariant: 'mobile-gradient',
        heroTitle: 'Mobile Apps',
        heroDescription: 'Transform your ideas into high-performance mobile apps for iOS and Android platforms.',
        ctaText: 'Start Mobile Project',
        subServicesTitle: 'Our Mobile Technologies',
        subServicesDescription: 'We use cutting-edge technologies to build robust and scalable mobile applications',
        heroOverlay: 'dark',
        subServices: [
            {
                id: 'react-native',
                title: 'React Native',
                description: 'Cross-platform mobile development using React Native for iOS and Android applications.',
                features: ['Cross-platform compatibility', 'Native performance', 'Hot reloading', 'Rich ecosystem'],
                // image: removed
            },
            {
                id: 'flutter',
                title: 'Flutter',
                description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop.",
                features: ['Single codebase', 'Fast development', 'Beautiful UI', 'Hot reload'],
                // image: removed
            },
            {
                id: 'ios-development',
                title: 'iOS Development',
                description: 'Native iOS app development using Swift and Objective-C for optimal performance.',
                features: ['Native iOS performance', 'App Store optimization', 'iOS-specific features', 'Swift programming'],
                // image: removed
            },
            {
                id: 'android-development',
                title: 'Android Development',
                description: 'Native Android app development using Kotlin and Java for Google Play Store.',
                features: ['Native Android features', 'Play Store optimization', 'Material Design', 'Kotlin programming'],
                // image: removed
            },
            {
                id: 'progressive-web-apps',
                title: 'Progressive Web Apps',
                description: 'Web applications that provide native app-like experience across all platforms.',
                features: ['Offline functionality', 'Push notifications', 'App-like experience', 'Cross-platform'],
                // image: removed
            }
        ],

        items: [
            "Mobile App Development",
            "Windows App Development",
            "Xamarin App Development",
            "Hybrid App Development",
            "Native App Development"
        ]
    },
    {
        id: 'online-marketing',
        title: 'Online Marketing',
        description: 'Comprehensive digital marketing and social media marketing.',
        longDescription: 'Boost your brand visibility and drive traffic with our data-driven online marketing strategies. From SEO to social media, we help you connect with your target audience and maximize efficiency.',
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop",
        icon: "📈",
        heroTitle: 'Social Media Marketing',
        heroDescription: 'Grow your brand and engage your audience with creative, data-driven social media marketing strategies.',
        gradient: 'bg-gradient-to-r from-pink-600 to-purple-600',
        heroImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop",
        heroOverlay: 'dark',
        ctaText: 'Start Marketing',
        subServices: [
            {
                id: 'social-media-marketing',
                title: 'Social Media Marketing',
                description: 'Grow your brand and engage your audience with creative, data-driven social media marketing strategies.',
                features: ['Multi-Platform Strategy', 'Content Creation', 'Community Management', 'Paid Advertising'],
                // image: removed as per request
                heroTitle: 'Social Media Marketing',
                heroDescription: 'Grow your brand and engage your audience with creative, data-driven social media marketing strategies.',
                ctaText: 'Start Social Campaign',
                serviceOfferings: [
                    {
                        title: 'Facebook Marketing',
                        description: 'Reach your audience with targeted Facebook campaigns and organic content strategies.',
                        features: ['Custom Audience Targeting', 'Ad Campaign Management', 'Content Creation', 'Analytics & Reporting']
                    },
                    {
                        title: 'Instagram Marketing',
                        description: 'Build brand awareness through visual storytelling and influencer partnerships.',
                        features: ['Visual Content Strategy', 'Story Campaigns', 'Influencer Outreach', 'Hashtag Optimization']
                    },
                    {
                        title: 'LinkedIn Marketing',
                        description: 'Connect with professionals and decision-makers in your industry.',
                        features: ['B2B Lead Generation', 'Professional Content', 'Company Page Management', 'LinkedIn Ads']
                    },
                    {
                        title: 'Twitter Marketing',
                        description: 'Engage with your community through real-time conversations and trending topics.',
                        features: ['Community Management', 'Trend Monitoring', 'Twitter Ads', 'Crisis Management']
                    }
                ],
                details: {
                    whyChoose: [
                        { title: 'Multi-Platform', description: 'Consistent presence across all social channels' },
                        { title: 'Community Building', description: 'Foster engaged communities around your brand' },
                        { title: 'Growth Focused', description: 'Strategies designed to grow your following' },
                        { title: 'Targeted Campaigns', description: 'Precise targeting for maximum ROI' }
                    ],
                    technicalCapabilities: [
                        { title: 'Analytics Tools', description: 'Advanced tracking and reporting suites' },
                        { title: 'Scheduling Tools', description: 'Automated content publishing' },
                        { title: 'Ad Managers', description: 'Complex campaign management platforms' }
                    ],
                    process: [
                        { title: 'Audit & Strategy', description: 'Analyzing current presence and setting goals' },
                        { title: 'Content Creation', description: 'Developing engaging visuals and copy' },
                        { title: 'Execution & Management', description: 'Daily posting and community interaction' }
                    ]
                }
            },
            {
                id: 'seo-services',
                title: 'SEO Services',
                description: 'Improve your search engine rankings and drive organic traffic to your website.',
                features: ['Keyword Research', 'On-Page Optimization', 'Link Building', 'Technical SEO'],
                heroTitle: 'Search Engine Optimization',
                heroDescription: 'Dominate search results and drive sustainable growth with our data-driven SEO strategies.',
                details: {
                    whyChoose: [
                        { title: 'Data Driven', description: 'Strategies based on comprehensive market analysis.' },
                        { title: 'Sustainable', description: 'Long-term growth focus with white-hat techniques.' },
                        { title: 'Transparent', description: 'Clear reporting and communication.' },
                        { title: 'ROI Focused', description: 'Targeting keywords that convert.' }
                    ],
                    technicalCapabilities: [
                        { title: 'Technical Audits', description: 'Deep dive into site architecture' },
                        { title: 'Keyword Analysis', description: 'Identifying high-value search terms' },
                        { title: 'Competitor Analysis', description: 'Understanding market landscape' }
                    ],
                    process: [
                        { title: 'Audit', description: 'Comprehensive site analysis' },
                        { title: 'Optimization', description: 'Implementing technical and content fixes' },
                        { title: 'Monitoring', description: 'Tracking rankings and traffic' }
                    ]
                }
            },
            {
                id: 'ppc-management',
                title: 'Pay Per Click Management',
                description: 'Maximize your ROI with targeted paid advertising campaigns.',
                features: ['Google Ads', 'Display Advertising', 'Remarketing', 'Conversion Tracking'],
                heroTitle: 'PPC Management',
                heroDescription: 'Get immediate results and high ROI with our expertly managed Pay-Per-Click campaigns.',
                details: {
                    whyChoose: [
                        { title: 'Instant Traffic', description: 'Start getting visitors immediately.' },
                        { title: 'Targeted', description: 'Reach customers precisely when they are searching.' },
                        { title: 'Measurable', description: 'Track every dollar spent and earned.' },
                        { title: 'Flexible', description: 'Adjust budget and strategy in real-time.' }
                    ],
                    technicalCapabilities: [
                        { title: 'Google Ads', description: 'Search, Display, and Video campaigns' },
                        { title: 'Bing Ads', description: 'Reaching alternative search audiences' },
                        { title: 'Landing Pages', description: 'Conversion-optimized destination pages' }
                    ],
                    process: [
                        { title: 'Setup', description: 'Account configuration and tracking' },
                        { title: 'Launch', description: 'Campaign activation' },
                        { title: 'Optimization', description: 'Continuous bid and ad refinement' }
                    ]
                }
            },
            {
                id: 'content-marketing',
                title: 'Content Marketing',
                description: 'Engage your audience with valuable, relevant, and consistent content.',
                features: ['Blog Writing', 'Infographics', 'Video Content', 'E-books'],
                heroTitle: 'Content Marketing',
                heroDescription: 'Build trust and authority with high-quality content that resonates with your audience.',
                details: {
                    whyChoose: [
                        { title: 'Authority', description: 'Establish your brand as an industry leader.' },
                        { title: 'Engagement', description: 'Build deeper connections with customers.' },
                        { title: 'SEO Boost', description: 'Fresh content improves search rankings.' },
                        { title: 'Lead Gen', description: 'Valuable content attracts qualified leads.' }
                    ],
                    technicalCapabilities: [
                        { title: 'CMS', description: 'Content management system expertise' },
                        { title: 'Copywriting', description: 'Persuasive and engaging writing' },
                        { title: 'Visuals', description: 'Graphic design and video production' }
                    ],
                    process: [
                        { title: 'Strategy', description: 'Content calendar and persona development' },
                        { title: 'Creation', description: 'Writing, designing, and producing' },
                        { title: 'Distribution', description: 'Sharing across relevant channels' }
                    ]
                }
            }
        ],
        items: [
            "SEO Services",
            "Search Engine Marketing",
            "Social Media Marketing",
            "Pay Per Click Management",
            "SEO Copywriting",
            "Digital Marketing",
            "Brand Consulting",
            "Lead Management System"
        ]
    },
    {
        id: 'creative-design',
        title: 'Creative Design',
        description: 'Deliver exceptional user experiences and beautiful interfaces with our creative, user-centered UI/UX design services.',
        longDescription: 'Make a lasting impression with our creative design services. Our expert designers craft visually stunning logos, brochures, and user interfaces that reflect your brand identity.',
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
        icon: "🎨",
        heroTitle: 'UI/UX Design',
        heroDescription: 'Deliver exceptional user experiences and beautiful interfaces with our creative, user-centered UI/UX design services.',
        gradient: 'bg-gradient-to-r from-pink-500 to-rose-500',
        ctaText: 'Start Your Design',
        serviceOfferingsTitle: 'UI/UX DESIGN SERVICES',
        serviceOfferingsDescription: 'We Create Exceptional User Experiences',
        serviceOfferings: [
            {
                title: 'User Research & Analysis',
                description: 'Comprehensive user research, persona development, and user journey mapping to understand your target audience and their needs.'
            },
            {
                title: 'Wireframing & Prototyping',
                description: 'Creating detailed wireframes and interactive prototypes to visualize user flows and test design concepts before development.'
            },
            {
                title: 'UI Design',
                description: 'Beautiful, modern interface designs that are visually appealing, brand-consistent, and optimized for user engagement.'
            },
            {
                title: 'UX Design',
                description: 'User experience design focused on creating intuitive, accessible, and enjoyable interactions that meet user goals.'
            },
            {
                title: 'Mobile App Design',
                description: 'Native mobile app designs for iOS and Android with platform-specific guidelines and best practices.'
            },
            {
                title: 'Design Systems',
                description: 'Comprehensive design systems with component libraries, style guides, and design tokens for consistent brand experiences.'
            }
        ],
        solutionsTitle: 'UI/UX DESIGN SOLUTIONS',
        solutionsDescription: 'Comprehensive Design Services',
        solutions: [
            {
                title: 'WEBSITE UI/UX DESIGN',
                description: 'Modern, responsive website designs that provide exceptional user experiences across all devices and platforms.'
            },
            {
                title: 'MOBILE APP DESIGN',
                description: 'Native mobile app designs for iOS and Android with intuitive navigation and engaging user interfaces.'
            },
            {
                title: 'E-COMMERCE DESIGN',
                description: 'Conversion-optimized e-commerce designs that enhance user experience and drive sales.'
            },
            {
                title: 'DASHBOARD DESIGN',
                description: 'Complex dashboard and admin panel designs with clear data visualization and efficient workflows.'
            },
            {
                title: 'BRAND IDENTITY DESIGN',
                description: 'Complete brand identity design including logos, color palettes, typography, and visual guidelines.'
            },
            {
                title: 'DESIGN SYSTEMS',
                description: 'Comprehensive design systems with reusable components and consistent design patterns.'
            }
        ],
        details: {
            whyChoose: [
                { title: 'User Research Driven', description: 'Deep understanding of user needs and behaviors.' }, // Inferred description as it was checkmark only
                { title: 'Modern Design Trends', description: 'Staying ahead with the latest design aesthetics.' },
                { title: 'Conversion Focused', description: 'Designs optimized to drive user action.' },
                { title: 'Responsive Design', description: 'Flawless experience across all devices.' }
            ],
            process: [
                { title: 'Research & Discovery', description: 'Understanding your business, users, and market to define design requirements and user personas.' },
                { title: 'Wireframing', description: 'Creating low-fidelity wireframes to establish information architecture and user flows.' },
                { title: 'Prototyping', description: 'Building interactive prototypes to test user interactions and gather feedback.' },
                { title: 'Visual Design', description: 'Creating high-fidelity designs with brand colors, typography, and visual elements.' }
            ]
        },
        subServices: [
            {
                id: 'ui-ux-design',
                title: 'UI/UX Design',
                description: 'Deliver exceptional user experiences and beautiful interfaces with our creative, user-centered UI/UX design services.',
                heroTitle: 'UI/UX Design',
                heroDescription: 'Deliver exceptional user experiences and beautiful interfaces with our creative, user-centered UI/UX design services.',
                heroVariant: 'solid-blue',
                icon: "🎨", // Ensuring icon is set for solid-blue layout
                ctaText: 'Start Your Design',
                whyChooseTitle: 'WHY CHOOSE TECH SYNAPSE FOR UI/UX DESIGN',
                whyChooseSubtitle: 'User-Centered Design Excellence',
                whyChooseDescription: 'Leading enterprises, startups, and agencies rely on our UI/UX design services as we stay true to user-centered design principles while delivering beautiful, functional designs.',
                serviceOfferingsTitle: 'UI/UX DESIGN SERVICES',
                serviceOfferingsDescription: 'We Create Exceptional User Experiences',
                serviceOfferings: [
                    {
                        title: 'User Research & Analysis',
                        description: 'Comprehensive user research, persona development, and user journey mapping to understand your target audience and their needs.'
                    },
                    {
                        title: 'Wireframing & Prototyping',
                        description: 'Creating detailed wireframes and interactive prototypes to visualize user flows and test design concepts before development.'
                    },
                    {
                        title: 'UI Design',
                        description: 'Beautiful, modern interface designs that are visually appealing, brand-consistent, and optimized for user engagement.'
                    },
                    {
                        title: 'UX Design',
                        description: 'User experience design focused on creating intuitive, accessible, and enjoyable interactions that meet user goals.'
                    },
                    {
                        title: 'Mobile App Design',
                        description: 'Native mobile app designs for iOS and Android with platform-specific guidelines and best practices.'
                    },
                    {
                        title: 'Design Systems',
                        description: 'Comprehensive design systems with component libraries, style guides, and design tokens for consistent brand experiences.'
                    }
                ],
                solutionsTitle: 'UI/UX DESIGN SOLUTIONS',
                solutionsDescription: 'Comprehensive Design Services',
                solutions: [
                    {
                        title: 'WEBSITE UI/UX DESIGN',
                        description: 'Modern, responsive website designs that provide exceptional user experiences across all devices and platforms.'
                    },
                    {
                        title: 'MOBILE APP DESIGN',
                        description: 'Native mobile app designs for iOS and Android with intuitive navigation and engaging user interfaces.'
                    },
                    {
                        title: 'E-COMMERCE DESIGN',
                        description: 'Conversion-optimized e-commerce designs that enhance user experience and drive sales.'
                    },
                    {
                        title: 'DASHBOARD DESIGN',
                        description: 'Complex dashboard and admin panel designs with clear data visualization and efficient workflows.'
                    },
                    {
                        title: 'BRAND IDENTITY DESIGN',
                        description: 'Complete brand identity design including logos, color palettes, typography, and visual guidelines.'
                    },
                    {
                        title: 'DESIGN SYSTEMS',
                        description: 'Comprehensive design systems with reusable components and consistent design patterns.'
                    }
                ],
                details: {
                    whyChoose: [
                        { title: 'User Research Driven', description: 'Deep understanding of user needs and behaviors.' }, // Inferred description as it was checkmark only
                        { title: 'Modern Design Trends', description: 'Staying ahead with the latest design aesthetics.' },
                        { title: 'Conversion Focused', description: 'Designs optimized to drive user action.' },
                        { title: 'Responsive Design', description: 'Flawless experience across all devices.' }
                    ],
                    process: [
                        { title: 'Research & Discovery', description: 'Understanding your business, users, and market to define design requirements and user personas.' },
                        { title: 'Wireframing', description: 'Creating low-fidelity wireframes to establish information architecture and user flows.' },
                        { title: 'Prototyping', description: 'Building interactive prototypes to test user interactions and gather feedback.' },
                        { title: 'Visual Design', description: 'Creating high-fidelity designs with brand colors, typography, and visual elements.' }
                    ]
                }
            },
            {
                id: 'logo-design',
                title: 'Logo Design',
                description: 'Professional logo design services to build a strong brand identity.',
                heroTitle: 'Logo Design',
                heroDescription: 'Create a memorable brand identity with our custom logo design services.',
                items: ['Custom Logo Design', 'Brand Identity', 'Rebranding']
            },
            {
                id: 'brochure-design',
                title: 'Brochure Design',
                description: 'Creative brochure designs to market your products and services.',
                heroTitle: 'Brochure Design',
                heroDescription: 'Captivate your audience with professionally designed brochures and marketing materials.',
                items: ['Corporate Brochures', 'Product Catalogs', 'Digital Brochures']
            }
        ],
        items: [
            "UI/UX Design",
            "Logo Design",
            "Brochure Design"
        ]
    },
    {
        id: 'consulting-services',
        title: 'Consultant',
        description: 'Expert consulting for NetSuite, recruitment, and software solutions.',
        longDescription: 'Leverage our industry expertise to make informed business decisions. Our consultants provide strategic guidance on NetSuite implementation, recruitment, and software architecture.',
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        icon: "🤝",
        heroTitle: 'NetSuite Consultant',
        heroDescription: 'Optimize your business operations with expert NetSuite consulting and implementation services.',
        heroVariant: 'solid-blue',
        // heroImage: removed as solid-blue uses CSS background color
        // heroOverlay: removed as solid-blue uses CSS background color
        // gradient: removed as solid-blue uses CSS background color
        ctaText: 'Start NetSuite Project',
        whyChooseTitle: 'WHY CHOOSE TECH SYNAPSE FOR NETSUITE',
        whyChooseSubtitle: 'Expert NetSuite Implementation & Support',
        whyChooseDescription: 'Partner with certified NetSuite experts to optimize your ERP implementation and drive business growth with tailored solutions.',

        serviceOfferingsTitle: 'What is NetSuite?',
        introText: 'NetSuite is a comprehensive cloud-based ERP solution that provides a unified view of your business operations. This single platform approach helps greatly in automating your business processes, allowing you to scale quicker and grow smarter. Overheads and headcount are reduced, and decision-making is enhanced as real-time analytics show the insights required to run and grow a business effectively.',

        // Mapped to "NetSuite Products"
        serviceOfferings: [
            {
                title: 'NetSuite ERP',
                description: 'Complete enterprise resource planning solution for financial management, supply chain, and operations.'
            },
            {
                title: 'NetSuite OneWorld',
                description: 'Multi-entity and multi-currency management for global business operations.'
            },
            {
                title: 'NetSuite OpenAir',
                description: 'Professional services automation to manage projects, resources, and time tracking.'
            },
            {
                title: 'NetSuite PBCS',
                description: 'Planning and budgeting cloud service for accurate financial forecasting and budgeting.'
            }
        ],

        // Mapped to "Key Features of NetSuite"
        solutionsTitle: 'Key Features of NetSuite',
        solutionsDescription: 'Empowering Business Growth',
        solutions: [
            {
                title: 'Built-in Flexibility',
                description: 'Scale up, spin off, and adopt new business models quickly and easily without hassles. Your configurations migrate seamlessly with every upgrade.'
            },
            {
                title: 'Native Business Intelligence',
                description: 'Real-time analytics in the NetSuite ERP interface help users understand what they should be doing and how they can help the business grow.'
            },
            {
                title: 'Commerce-Ready ERP',
                description: 'Transform your core business system into a customer-facing commerce system with tailored, customer-oriented experiences.'
            }
        ],

        details: {
            // Mapped to "Benefits of NetSuite"
            whyChoose: [
                { title: 'Richness of Features', description: 'NetSuite fits well across multiple industries and company sizes, providing rich functionalities for Manufacturing, Software Development, Wholesale Distribution, Professional Services, Nonprofits, and E-commerce.' },
                { title: 'Improved Visibility', description: 'Real-time visibility is crucial for making informed business decisions. Data can be accessed instantly, eliminating the need to extract and tie data from different sources.' },
                { title: 'Modular Pricing Approach', description: 'NetSuite\'s modular approach enables users to select and license only the modules they actually need, empowering users and reducing costs.' },
                { title: 'Seamless Integration', description: 'NetSuite can be efficiently integrated with other applications using iPaaS solutions, providing highly customizable connectors to connect with Salesforce, SkuVault, and many others.' }
            ],
            // Mapped to "Our NetSuite Services"
            process: [
                { title: 'Assessment', description: 'NetSuite ERP Business case and assessment' },
                { title: 'Analysis', description: 'NetSuite Requirements Analysis and Process Mapping' },
                { title: 'Solutioning', description: 'NetSuite Solutioning and Designing' },
                { title: 'Implementation', description: 'NetSuite Implementation and Deployment' },
                { title: 'QuickStart', description: 'QuickStart Solution for all NetSuite products' },
                { title: 'Support', description: 'Post Implementation Support' },
                { title: 'Optimization', description: 'NetSuite Health check and Optimization' },
                { title: 'Development', description: 'Custom NetSuite Development Services' }
            ]
        },

        items: [
            "NetSuite Solution Consultant",
            "Recruitment Service",
            "SharePoint Development",
            "Software Consultant"
        ]
    },
    {
        id: 'data-science',
        title: 'Data Science',
        description: 'AI, machine learning, and advanced data analytics solutions.',
        longDescription: 'Unlock the power of your data with our advanced analytics and AI solutions. We help you uncover actionable insights, automate processes, and predict future trends.',
        image: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop", // 3D Robot style image
        icon: "🤖",
        heroTitle: 'AI & Machine Learning Solutions',
        heroDescription: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation in your business operations.',
        heroVariant: 'centered',
        heroImage: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop",
        heroOverlay: 'dark',

        gradient: 'bg-gradient-to-r from-blue-600 to-indigo-600',
        ctaText: 'Explore AI Solutions',

        serviceOfferingsTitle: 'AI Technologies We Specialize In',
        introText: 'Advanced AI and ML technologies to transform your business processes',

        serviceOfferings: [
            {
                title: 'TensorFlow & Keras',
                description: 'Open-source machine learning framework for developing and training neural networks.',
                features: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP Processing'],
                bgColor: 'bg-blue-100',
                dotColor: 'bg-orange-500'
            },
            {
                title: 'PyTorch',
                description: 'Dynamic neural network library with strong GPU acceleration for research and production.',
                features: ['Dynamic Computation', 'GPU Acceleration', 'Research Friendly', 'Production Ready'],
                bgColor: 'bg-blue-100',
                dotColor: 'bg-orange-500'
            },
            {
                title: 'Natural Language Processing',
                description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
                features: ['Text Analytics', 'Sentiment Analysis', 'Language Translation'],
                bgColor: 'bg-green-100',
                dotColor: 'bg-orange-500',
                cta: 'Learn More'
            },
            {
                title: 'Computer Vision',
                description: 'Image and video analysis solutions using advanced computer vision algorithms.',
                features: ['Image Recognition', 'Object Detection', 'Facial Recognition'],
                bgColor: 'bg-yellow-100',
                dotColor: 'bg-orange-500',
                cta: 'Learn More'
            },
            {
                title: 'Predictive Analytics',
                description: 'Data-driven insights and forecasting using machine learning algorithms.',
                features: ['Forecasting', 'Risk Assessment', 'Customer Analytics', 'Business Intelligence'],
                bgColor: 'bg-pink-100',
                dotColor: 'bg-orange-500'
            }
        ],

        items: [
            "AI & Machine Learning",
            "Data Analytics"
        ]
    },
    {
        id: 'testing-qa',
        title: 'Software Testing',
        description: 'Ensure quality, reliability, and performance with comprehensive software testing solutions.',
        longDescription: 'Ensure the highest quality for your software products with our rigorous testing services. We offer automated and manual testing to identify bugs, security vulnerabilities, and performance bottlenecks.',
        image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop",
        icon: "🔍",

        heroTitle: 'Software Testing Services',
        heroDescription: 'Ensure quality, reliability, and performance with comprehensive software testing solutions for your applications.',
        heroVariant: 'centered',
        heroImage: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop",
        heroOverlay: 'dark',

        ctaText: 'Start Testing',
        gradient: 'bg-gradient-to-r from-red-600 to-rose-600',

        // Split Intro Section (Content below hero)
        introVariant: 'split',
        introTitle: 'What is Software Testing?',
        introText: 'Software Testing is an approach to detect differences between given input and expected output. At Infocera, we provide comprehensive support for software testing at any point in the software development lifecycle. We provide both Black Box and White Box testing support on demand. In White Box testing, we offer various types of Unit and Integration testing such as API level testing, Code coverage, and Fault Injection testing. Under Black Box testing, we provide support for System testing and Acceptance testing.',
        introList: [
            'Wide process that includes several connected processes',
            'Series of processes that investigate and evaluate software quality',
            'Can test software as a whole, in components, or within a live system'
        ],
        introCards: [
            {
                title: 'White Box Testing',
                icon: '‹/›',
                items: ['Unit & Integration Testing'],
                description: ''
            },
            {
                title: 'Black Box Testing',
                icon: '🛡️',
                items: ['System & Acceptance Testing'],
                description: ''
            }
        ],

        // Additional Grid (API, Code Coverage etc) - Using Solutions Grid
        solutionsTitle: 'Comprehensive Testing Strategies',
        solutionsDescription: '',
        solutions: [
            {
                title: 'API Testing',
                description: 'Comprehensive API Validation',
            },
            {
                title: 'Code Coverage',
                description: 'Thorough Code Analysis',
            }
        ],

        // Stats Section
        whySection: {
            title: 'Why Software Testing?',
            description: 'Software testing is really required to point out the defects and errors that were made during the development phases. Testing is necessary to provide facilities to customers like the delivery of high-quality products or software applications which require lower maintenance costs and hence results in more accurate, consistent, and reliable results.'
        },
        stats: [
            { value: '100%', label: 'Quality Assurance' },
            { value: '24/7', label: 'Support Available' },
            { value: '50+', label: 'Testing Tools' },
            { value: '1000+', label: 'Projects Tested' }
        ],

        // Technologies Pills
        technologies: [
            'Selenium', 'JUnit', 'TestNG', 'Mockito', 'Postman', 'JMeter',
            'Appium', 'Cucumber', 'Jenkins', 'GitLab CI', 'Docker', 'Kubernetes'
        ],

        details: {
            whyChoose: [
                { title: 'Quality Assurance', description: 'Ensures the delivery of high-quality products that require lower maintenance costs and provide accurate, consistent, and reliable results.' },
                { title: 'Defect Detection', description: 'Points out defects and errors made during development phases, allowing for timely fixes and improvements.' },
                { title: 'Risk Mitigation', description: 'Identifies potential risks and vulnerabilities early in the development process, reducing project risks.' },
                { title: 'User Satisfaction', description: 'Ensures applications meet user requirements and expectations, leading to higher customer satisfaction.' },
                { title: 'Time & Cost Savings', description: 'Early defect detection saves time and costs associated with fixing issues in later stages of development.' },
                { title: 'Performance Optimization', description: 'Identifies performance bottlenecks and optimization opportunities for better application performance.' }
            ],
            process: []
        },

        items: [
            "Software Testing",
            "Security Testing",
            "Performance Testing"
        ]
    },

]
