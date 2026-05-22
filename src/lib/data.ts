export const personalInfo = {
  name: "Tabib E Alahi",
  designation: "Full Stack Developer",
  tagline: "Crafting digital experiences with clean code & creative design",
  email: "tabib.e.alahi@gmail.com",
  phone: "+880 1744-552446",
  whatsapp: "+880 1744-552446",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/tabibalahi",
  linkedin: "https://linkedin.com/in/tabibalahi",
  twitter: "https://twitter.com/tabibalahi",
  facebook: "https://facebook.com/tabibalahi",
  resumeUrl: "https://drive.google.com/file/d/1dPh7ml3kIOhEYPown0p79xD2yYDyquNt/view?usp=sharing",
};

export const aboutMe = {
  intro: `I'm Tabib E Alahi, a Full Stack Developer based in Dhaka, Bangladesh, with a strong focus on backend development. I specialize in building scalable and performance-driven web applications using technologies like Node.js, Express, PostgreSQL, and Next.js.`,

  journey: `I started my journey by learning the fundamentals of the web with HTML, CSS, and JavaScript, then gradually moved into React and modern frontend development. Over time, I developed a deeper interest in backend systems — how data flows, how APIs are structured, and how applications scale. I have worked on full-stack projects involving authentication systems, role-based access control, database design with Prisma, and real-world application logic.`,

  workStyle: `My development approach is focused on performance, structure, and reliability. I prioritize clean architecture, efficient database queries, and well-structured APIs. I pay close attention to how systems behave under real-world conditions — ensuring stability, scalability, and maintainability. I aim to write code that is not only functional, but also production-ready.`,

  hobbies: `Outside of development, I enjoy playing cricket and following football. I also explore UI/UX design concepts to better understand how backend systems connect with user experiences. Staying updated with modern technologies and continuously improving my skills is a key part of my routine.`,

  personality: `I am disciplined, detail-oriented, and committed to continuous improvement. I prefer learning through building and problem-solving rather than theory alone. My goal is to grow into a highly skilled backend engineer capable of designing and maintaining complex systems in real-world environments.`,
};

export const skills = {
  frontend: [
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 80 },
    { name: "GSAP", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "REST APIs", level: 90 },
    { name: "Prisma", level: 78 },
  ],
  tools: [
    { name: "Git & GitHub", level: 92 },
    { name: "Docker", level: 70 },
    { name: "Figma", level: 80 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 88 },
    { name: "Linux", level: 72 },
  ],
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2021 – 2025",
    gpa: "3.73/4.0",
    details: "Focused on software engineering, algorithms, and web technologies.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Kurigram govt. College",
    location: "Kurigram, Bangladesh",
    period: "2017 – 2019",
    gpa: "Grade-A",
    details: "Science group with distinction in Mathematics and Physics.",
  },
];

// export const experience = [
//   {
//     role: "Junior Frontend Developer",
//     company: "TechVenture BD",
//     location: "Dhaka, Bangladesh",
//     period: "Jan 2024 – Present",
//     type: "Full-time",
//     responsibilities: [
//       "Built and maintained React.js-based dashboards for 3+ enterprise clients",
//       "Collaborated with UI/UX designers to implement pixel-perfect designs",
//       "Improved page load performance by 40% through code splitting and lazy loading",
//       "Integrated REST APIs and implemented state management with Redux Toolkit",
//     ],
//   },
//   {
//     role: "Web Developer Intern",
//     company: "CreativeMinds Agency",
//     location: "Dhaka, Bangladesh",
//     period: "Jul 2023 – Dec 2023",
//     type: "Internship",
//     responsibilities: [
//       "Developed responsive landing pages using HTML, CSS, and JavaScript",
//       "Assisted in migrating a legacy jQuery site to React",
//       "Learned agile development workflows and version control best practices",
//     ],
//   },
// ];

export const projects = [
  {
    slug: "edubridge",
    name: "EduBridge — AI-Powered Learning Management System",
    shortDesc:
      "A full-stack LMS built from scratch with multi-role dashboards, AI-assisted learning tools (tutor, quiz generator, roadmap builder), automated certificate issuance, and a complete course lifecycle from draft to published — powered by Gemini 2.5 Flash.",
    image: "/edubridge_image.png",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Express.js 5",
      "PostgreSQL (Neon)",
      "Prisma ORM",
      "Better Auth",
      "Cloudinary",
      "Google Gemini 2.5 Flash",
      "pdf-lib",
      "Nodemailer",
      "Tailwind CSS v4",
      "Shadcn/UI",
      "TanStack Query",
      "Redux Toolkit",
      "Zod",
      "Framer Motion",
      "Recharts",
    ],
    description: `EduBridge is a production-grade Learning Management System where students can browse, enroll in, and complete courses; instructors can build curriculum with lessons, quizzes, and assignments; and admins govern the entire ecosystem through a dedicated control panel.

The platform supports four distinct roles: Student, Instructor, Manager (elevated instructor with moderation rights), and Admin. Instructors submit courses through a structured review pipeline (DRAFT → IN_REVIEW → PUBLISHED/REJECTED) before going live. The system enforces RBAC at the API level using a custom permission middleware that maps roles to fine-grained permission constants — 30+ permissions covering every resource in the system.

The AI layer is built on Gemini 2.5 Flash and includes five distinct features: an in-lesson AI Tutor chatbot with persistent conversation history, an AI quiz generator that instructors can use to populate quizzes from any topic, an AI roadmap/learning path builder for students, AI course outline and lesson description generators for instructors, and an AI engagement analyzer that interprets instructor course analytics. All AI requests are token-logged to the AIRequestLog table for admin monitoring and cost tracking.

Certificate issuance is fully automated — when a student's lesson progress hits 100%, the system triggers an async certificate job that calculates a grade from quiz attempt averages, generates a verifiable certificate with a unique hash and certificate number, and stores a downloadable PDF (generated with pdf-lib) linked to the student's account. Certificates are publicly verifiable via a URL containing the verificationHash.

The learn page is a 726-line single-file lesson player with a three-panel layout: a collapsible lesson sidebar, the main content area (video/text), and a right toolkit panel that toggles between a resource list and the AI Tutor chat. Progress is tracked per-lesson and synced on every lesson completion.`,
    liveLink: "https://edubridge-frontend-zeta.vercel.app",
    githubClient: "https://github.com/tabib-e-alahi/eduBridge_client",
    githubServer: "https://github.com/tabib-e-alahi/eduBridge_server",
    challenges: [
      "Designing the RBAC system required defining 30+ fine-grained permission constants and a role-to-permission map that the requirePermission middleware enforces on every protected route — making it easy to add new roles or restrict individual endpoints without changing business logic.",
      "The automated certificate pipeline had to be non-blocking: it fires as an async IIFE inside updateProgressInDB after the progress update resolves, so a certificate failure never breaks the progress save. It also deduplicates certificate numbers with a retry loop before insertion.",
      "Building the AI layer with persistent conversation history required structuring the AIConversation and AIMessage models so each chat session is scoped to a (userId, context) pair — meaning the tutor retains lesson-specific context across multiple questions in the same session.",
      "The quiz grading engine needed to be deterministic across three surfaces (lesson player toolkit, student quiz page, instructor result view) — so scoring logic lives exclusively in the enrollment service's submitQuizAttemptInDB, never in the frontend.",
      "The course submission pipeline enforces strict pre-conditions at the service layer (title, description, thumbnail, at least one lesson, valid category) before allowing a DRAFT → IN_REVIEW transition, preventing incomplete courses from reaching the admin review queue.",
    ],
    improvements: [
      "Replace polling-based notification fetching with a WebSocket or SSE-based real-time push so students get instant alerts for new grades, announcements, and certificate issuance.",
      "Implement a real payment gateway (SSLCommerz or Stripe) — the current order/payment flow creates records and auto-enrolls, but there is no actual payment capture; capturePaymentInDB accepts a manual transactionId without any gateway verification.",
      "Add WebRTC or third-party integration (Zoom SDK / Daily.co) to the LiveClass feature — currently LiveClass stores only a meetingUrl string with no scheduling automation, join tracking, or reminder notifications.",
      "Message system needs real-time delivery — the current implementation is REST-based (send/fetch), meaning both parties must refresh to see new messages. WebSocket upgrade with read-receipt sync is required for a usable chat.",
      "The certificate PDF generated by pdf-lib is a basic text-only layout. Replacing it with a custom-designed HTML-to-PDF pipeline (Puppeteer or a hosted service) would produce a shareable, LinkedIn-uploadable credential.",
    ],
  },
  {
    slug: "platera",
    name: "Platera — Where Every Plate Tells a Story",
    shortDesc:
      "A full-stack food delivery platform connecting home cooks and local restaurants with hungry customers — built from scratch with a provider approval system, real-time order tracking, and a complete multi-role dashboard ecosystem.",
    image: "/project-1.png",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Express.js 5",
      "PostgreSQL",
      "Prisma ORM",
      "Better Auth",
      "Cloudinary",
      "SSLCommerz",
      "Nodemailer",
      "Tailwind CSS",
      "Shadcn/UI",
      "Zod",
    ],
    description: `Platera is the most personal project I've ever built — a production-grade food delivery platform that started as a dream of making home-cooked food accessible to everyone. The name comes from the word "plate", because food is always personal, always a story.

The platform supports three distinct roles: customers who browse and order, providers (home cooks and restaurants) who manage their menu and fulfill orders, and admins who govern the entire ecosystem. Providers go through a structured approval pipeline — submitting their kitchen photos, NID, and business documents — before going live. This wasn't just a feature, it was a philosophy: quality over quantity.

On the technical side, Platera features a real-time order lifecycle (Placed → Accepted → Preparing → Out for Delivery → Delivered) with SSE-based live tracking, a full payment integration with SSLCommerz including provider settlement management, a Cloudinary-powered image pipeline for meal and provider photos, multi-criteria meal filtering with discount engine and dietary preferences, and rich analytics dashboards for both providers and admins — covering gross revenue, platform fees, provider earnings, and settlement status directly from a carefully designed schema.

The frontend is built with Next.js App Router using parallel routes for isolated dashboard layouts per role, ISR for public pages, and custom CSS modules alongside Shadcn/UI to maintain a consistent Playfair Display + Inter typographic system in a warm burgundy-gold palette that feels like the inside of a fine dining restaurant.`,
    liveLink: "https://platera-client-side.vercel.app/",
    githubClient: "https://github.com/tabib-e-alahi/platera_client",
    githubServer: "https://github.com/tabib-e-alahi/platera_server",
    challenges: [
      "Designing the provider approval workflow required careful state machine thinking — DRAFT → PENDING → APPROVED/REJECTED — with email notifications at each transition and admin review screens that show kitchen photos, NID scans, and business documents side by side.",
      "Building the real-time order tracking with SSE (Server-Sent Events) while keeping it stateless across multiple requests required a custom in-memory event bus that maps orderId to active listener functions, cleaned up on connection close.",
      "The payment settlement system was architecturally complex: each Payment row tracks both the platform fee and the provider's share, and the ProviderProfile schema maintains pre-aggregated totalGrossRevenue, totalPlatformFee, totalProviderEarning, and currentPayableAmount fields that are updated transactionally on every order completion — so admin settlement dashboards are instant without any heavy aggregation queries.",
      "Next.js parallel routes (@admin, @provider, @customer) with a shared intercepted layout meant that sidebar height, scroll isolation, and role-based redirects all had to be handled at the layout level, not the page level — which required rethinking how overflow and flex containers interact with 100dvh.",
      "Implementing the discount engine correctly required checking discountPrice, discountStartDate, and discountEndDate simultaneously on every render, and ensuring that effective price calculations in the cart, checkout preview, and order creation all shared the same deterministic logic.",
    ],
    improvements: [
      "Integrate a WebSocket-based live notification system so providers receive an audible ping and badge update the moment a new order arrives, without polling.",
      "Add a native mobile app with React Native — Platera's real users are on phones, and the web app deserves a companion that feels native.",
      "Build a recommendation engine on the homepage that surfaces meals based on a customer's order history, city, and time of day.",
      "Add multi-language support for Bangla and English, making the platform truly local and accessible to non-English-speaking home cooks.",
      "Implement a review reply system so providers can respond publicly to customer feedback, building trust and community on the platform.",
    ],
  },
  {
    slug: "weather-dashboard",
    name: "WeatherVista — Weather Dashboard",
    shortDesc: "A beautiful weather dashboard with 7-day forecasts, animated weather maps, and location-based alerts.",
    image: "/project-3.jpg",
    techStack: ["React.js", "TypeScript", "GSAP", "OpenWeather API", "Mapbox GL", "Tailwind CSS"],
    description: `WeatherVista delivers weather information in the most visually stunning way possible. Built with GSAP animations and Mapbox GL for interactive maps, it provides current conditions, hourly breakdowns, 7-day forecasts, and severe weather alerts. The app uses geolocation to automatically detect user location and supports saving multiple locations for quick comparison. Day/night themes shift dynamically based on actual sunrise/sunset times.`,
    liveLink: "https://weathervista.example.com",
    githubClient: "https://github.com/hasibulislam/weathervista-client",
    challenges: [
      "Creating smooth weather animation transitions (rain, snow, sun) that were performant on mobile devices required canvas-based rendering with WebGL shaders.",
      "Handling API rate limits from OpenWeather while keeping data fresh required a smart caching strategy with stale-while-revalidate patterns.",
      "Making interactive weather maps work smoothly on mobile touch devices required extensive touch event optimization.",
    ],
    improvements: [
      "Add hyperlocal weather data using IoT sensor integration",
      "Implement weather-based outfit and activity recommendations",
      "Add historical weather data with trend visualization",
      "Create a weather widget API for embedding in other websites",
    ],
  },
];
