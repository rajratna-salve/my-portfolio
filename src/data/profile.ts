// ============================================================
// profile.ts — Central data configuration
// ============================================================
// Source of truth: Rajratna Salve's Resume and explicit details.
// ============================================================

export interface Skill {
  name: string;
  description: string;
  icon?: string;
  focus?: string; // e.g. "Current Training", "Core", "Specialization"
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ProjectFeature {
  text: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemStatement: string;
  approach: string;
  pipeline: string[];
  features: ProjectFeature[];
  technologies: string[];
  contribution: string;
  status: string;
  githubUrl: string;
  liveUrl: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  area: string;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  isPrimary: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialUrl: string;         // External verify URL (or empty string if none)
  pdfUrl?: string;               // Local /certificates/*.pdf if file exists
  downloadName?: string;         // Filename for the download attribute
  badgeColor: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Publication {
  title: string;
  description: string;
}

export interface CareerJourneyStep {
  stage: string;
  title: string;
  place: string;
  period: string;
  description: string;
  focusTags: string[];
}

export interface LearningItem {
  title: string;
  statusLabel: "CURRENT FOCUS" | "BUILDING FOUNDATIONS" | "PRACTICING";
  description: string;
  tags: string[];
}

export interface MiniProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  whatILearned: string;
  githubUrl: string;   // Empty string means repo not yet public
  status: "building" | "complete";
  tags: string[];
}

export interface ProfileData {
  name: string;
  firstName: string;
  headline: string;
  positioning: string;
  shortBio: string;
  photoPath: string;
  aboutParagraphs: string[];
  email: string;
  phone: string;
  location: string;
  resumePath: string;
  languages: string[];
  socialLinks: SocialLink[];
  careerJourney: CareerJourneyStep[];
  currentLearning: LearningItem[];
  skillGroups: SkillGroup[];
  projects: Project[];
  miniProjects: MiniProject[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  publications: Publication[];
  terminalResponses: Record<string, string>;
}

const profile: ProfileData = {
  // ---- Personal ----
  name: "Rajratna Salve",
  firstName: "Rajratna",
  headline: "AI & Data Science | Software Development",
  positioning: "AI & Data Science | Software Development",
  shortBio:
    "Engineering student with roots in Mechatronics and Industrial Robotics, advancing through B.Tech in AI & Data Science, and currently undergoing CDAC training in C++, Java, DSA, and OOP.",
  photoPath: "/profile/rajratna-profile.jpg",

  // ---- About ----
  aboutParagraphs: [
    "My journey began in Mechatronics Engineering, where I developed an appreciation for how hardware and logic interact in the physical world. During my internship at Metalman Auto Pvt. Ltd., I worked directly with industrial robotic systems and quality assurance, seeing firsthand how automation drives efficiency.",
    "Driven to solve more complex analytical challenges, I transitioned into Artificial Intelligence and Data Science at AISSMS Institute of Information Technology, Pune (CGPA: 7.63). Here, I built real-world machine learning models, computer vision pipelines (YOLO, MediaPipe), and contributed to research publications in AI-based CCTV violence detection and media integrity.",
    "Currently, I am expanding my software engineering depth through CDAC training. My active focus is mastering C++, Java, Data Structures & Algorithms (DSA), and Object-Oriented Programming (OOP) to build robust, scalable applications that solve real-world problems.",
  ],

  // ---- Contact ----
  email: "rajratnas2211@gmail.com",
  phone: "+91 86258 28705",
  location: "Pune, India",

  // ---- Resume ----
  resumePath: "/resume.pdf",

  // ---- Languages ----
  languages: ["English", "Hindi", "Marathi"],

  // ---- Social Links ----
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/rajratna-salve", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/rajratna-salve-0a704a203", icon: "Linkedin" },
    { platform: "Email", url: "mailto:rajratnas2211@gmail.com", icon: "Mail" },
  ],

  // ---- Career Journey ----
  careerJourney: [
    {
      stage: "01. MECHATRONICS",
      title: "Diploma in Mechatronics Engineering",
      place: "Sanjivani K.B.P. Polytechnic, Kopargaon",
      period: "2020 – 2023",
      description:
        "Built core foundations in electro-mechanical systems, automation principles, sensors, and technical problem-solving with 84.00% distinction.",
      focusTags: ["Sensors", "Circuits", "Control Systems", "Mechatronics"],
    },
    {
      stage: "02. INDUSTRIAL AUTOMATION",
      title: "Mechatronics Intern",
      place: "Metalman Auto Pvt. Ltd.",
      period: "Feb 2023 – Jun 2023",
      description:
        "Assisted in operating industrial robotic workcells on live production lines and performed defect inspection and quality assurance.",
      focusTags: ["Industrial Robotics", "Quality Assurance", "Plant Operations", "Defect Prevention"],
    },
    {
      stage: "03. AI & DATA SCIENCE",
      title: "B.Tech in Artificial Intelligence & Data Science",
      place: "AISSMS Institute of Information Technology, Pune",
      period: "2023 – 2026",
      description:
        "Specialized in deep learning, real-time computer vision, NLP, statistical modeling, and data analytics (CGPA: 7.63). Certified in Azure AI & Oracle Cloud.",
      focusTags: ["Python", "Computer Vision", "YOLO", "TensorFlow", "Generative AI", "EDA"],
    },
    {
      stage: "04. SOFTWARE DEVELOPMENT",
      title: "Software Engineering & Applied Systems",
      place: "Project Implementations & Research",
      period: "2024 – Present",
      description:
        "Applying analytical algorithms into practical software with clean architectures, interactive dashboards, and production-ready code.",
      focusTags: ["Full Stack", "SQL", "Streamlit", "Git", "REST APIs"],
    },
    {
      stage: "05. CDAC / CURRENT LEARNING",
      title: "CDAC Professional Training",
      place: "Currently Pursuing",
      period: "Active Training",
      description:
        "Focused professional training in core software engineering disciplines, systems programming, and algorithmic design.",
      focusTags: ["C++", "Java", "DSA", "OOP", "Problem Solving"],
    },
  ],

  // ---- Active CDAC Learning Dashboard ----
  currentLearning: [
    {
      title: "C++",
      statusLabel: "CURRENT FOCUS",
      description: "Systems programming, memory management, pointers, STL containers, and modern C++ syntax.",
      tags: ["STL", "Pointers", "Memory Model", "Modern C++"],
    },
    {
      title: "Java",
      statusLabel: "CURRENT FOCUS",
      description: "Object-oriented architecture, classes, interfaces, exception handling, and collections framework.",
      tags: ["OOP", "Collections", "Interfaces", "Java Standard Library"],
    },
    {
      title: "Data Structures & Algorithms (DSA)",
      statusLabel: "PRACTICING",
      description: "Arrays, linked lists, stacks, queues, trees, recursion, sorting, and algorithmic complexity.",
      tags: ["Arrays", "Trees", "Sorting", "Time Complexity"],
    },
    {
      title: "Object-Oriented Programming (OOP)",
      statusLabel: "BUILDING FOUNDATIONS",
      description: "Encapsulation, inheritance, polymorphism, abstraction, and clean software design patterns.",
      tags: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    },
    {
      title: "Problem Solving",
      statusLabel: "PRACTICING",
      description: "Structured analytical problem decomposition, corner-case analysis, and algorithmic optimization.",
      tags: ["Logic Building", "Edge Cases", "Optimization", "Code Structure"],
    },
  ],

  // ---- Skills (Grouped with Clear Authentic Labels) ----
  skillGroups: [
    {
      title: "Programming",
      icon: "Code2",
      skills: [
        { name: "Python", description: "Primary language for AI/ML, data pipelines, and automation", focus: "Core" },
        { name: "SQL", description: "Relational database queries, schemas, and analytical filtering", focus: "Core" },
        { name: "C++", description: "Under active study in CDAC: syntax, STL, and memory foundations", focus: "CDAC Training" },
        { name: "Java", description: "Under active study in CDAC: OOP architecture and collections", focus: "CDAC Training" },
      ],
    },
    {
      title: "Core CS",
      icon: "Cpu",
      skills: [
        { name: "Data Structures & Algorithms", description: "Active CDAC study: arrays, trees, search/sort algorithms", focus: "CDAC Training" },
        { name: "Object-Oriented Programming", description: "Active CDAC study: encapsulation, inheritance, polymorphism", focus: "CDAC Training" },
        { name: "Problem Solving", description: "Algorithmic thinking, complexity analysis, and debugging", focus: "CDAC Training" },
      ],
    },
    {
      title: "AI / Data Science",
      icon: "Brain",
      skills: [
        { name: "TensorFlow", description: "Deep learning model building and neural network experimentation", focus: "Applied" },
        { name: "Pandas & NumPy", description: "High-performance data manipulation, numerical computing, and cleaning", focus: "Applied" },
        { name: "Exploratory Data Analysis (EDA)", description: "Uncovering statistical patterns, anomalies, and feature relationships", focus: "Applied" },
        { name: "Data Visualization", description: "Seaborn, Matplotlib, and visual communication of insights", focus: "Applied" },
        { name: "Statistical Analysis", description: "Distribution evaluation, correlation matrices, and metrics", focus: "Applied" },
      ],
    },
    {
      title: "Generative AI",
      icon: "Globe",
      skills: [
        { name: "Prompt Engineering", description: "Structured prompts, zero/few-shot methods for LLMs", focus: "Applied" },
        { name: "RAG Architecture", description: "Retrieval-Augmented Generation using domain document chunking", focus: "Applied" },
        { name: "Embeddings", description: "Vector representations for semantic similarity and search", focus: "Applied" },
        { name: "FAISS", description: "Vector indexing and efficient similarity matching", focus: "Applied" },
      ],
    },
    {
      title: "Web & Tools",
      icon: "Wrench",
      skills: [
        { name: "HTML & CSS", description: "Responsive layouts, semantic elements, and modern styling", focus: "Applied" },
        { name: "Git", description: "Branching, committing, and collaborative version control", focus: "Applied" },
        { name: "VS Code", description: "Primary IDE for coding, debugging, and terminal workflows", focus: "Applied" },
        { name: "PowerBI", description: "Interactive business analytics and visual reporting", focus: "Applied" },
        { name: "Tableau", description: "Data exploration and dashboard visual storytelling", focus: "Applied" },
      ],
    },
  ],

  // ---- Projects (The 2 Authentic Projects with Technical Pipelines) ----
  projects: [
    {
      id: "safe-eyes",
      title: "AI-Based Harassment Detection System Using CCTV Footage",
      tagline: "Python, OpenCV, YOLO, MediaPipe, OpenAI Whisper",
      description:
        "Developed an AI-powered real-time surveillance system that detects physical violence using YOLO and MediaPipe Pose while identifying verbal harassment using OpenAI Whisper and NLP-based toxicity classification. Implemented live CCTV monitoring, automated alert generation, event logging, and an interactive Streamlit dashboard to improve incident detection accuracy and enable faster security response.",
      problemStatement:
        "Public and private spaces often lack intelligent monitoring capable of detecting harassment or abuse in real time. Existing surveillance systems only record footage — they do not understand or act on what they observe.",
      approach:
        "Combined visual stream processing with acoustic speech-to-text models to form a multimodal threat pipeline. Visual models flag physical altercation gestures, while audio models transcribe and evaluate language toxicity in parallel.",
      pipeline: [
        "CCTV",
        "Video Processing",
        "YOLO / MediaPipe",
        "Violence Detection",
        "Whisper / NLP",
        "Alert Generation",
        "Event Logging",
        "Dashboard",
      ],
      features: [
        { text: "Detects physical violence using YOLO object detection and MediaPipe Pose estimation" },
        { text: "Identifies verbal harassment using OpenAI Whisper transcription and NLP toxicity classification" },
        { text: "Live CCTV monitoring feed with real-time bounding box overlays" },
        { text: "Automated alert dispatch and persistent incident event logging" },
        { text: "Interactive Streamlit operations dashboard for rapid security response" },
      ],
      technologies: ["Python", "OpenCV", "YOLO", "MediaPipe", "OpenAI Whisper", "Streamlit", "NLP"],
      contribution:
        "Developed the AI-powered surveillance pipeline for physical violence detection using YOLO and MediaPipe Pose, integrated speech-to-text with Whisper, and built the interactive Streamlit monitoring dashboard.",
      status: "Completed — Final-Year Project & Publication",
      // Repository not yet public — link points to GitHub profile
      githubUrl: "https://github.com/rajratna-salve",
      liveUrl: "",
    },
    {
      id: "house-price-prediction",
      title: "House Price Prediction",
      tagline: "Python, Pandas, NumPy, Seaborn, Linear Regression",
      description:
        "Built a regression model to predict house prices using important real-world features. Performed exploratory data analysis and feature correlation analysis to improve model accuracy and interpret pricing trends.",
      problemStatement:
        "Estimating property prices accurately requires identifying key value drivers and eliminating multicollinearity and noise across complex real estate datasets.",
      approach:
        "Processed real-world housing features through statistical normalization, analyzed feature correlation heatmaps to isolate influential predictors, and trained a linear regression model to quantify pricing trends.",
      pipeline: [
        "Dataset",
        "EDA",
        "Feature Analysis",
        "Linear Regression",
        "Prediction",
      ],
      features: [
        { text: "Built a regression model to predict house prices using important real-world features" },
        { text: "Performed exploratory data analysis (EDA) to understand feature distributions and variance" },
        { text: "Conducted feature correlation analysis to identify strong valuation indicators" },
        { text: "Interpreted pricing trends and variable importances through visual plots" },
      ],
      technologies: ["Python", "Pandas", "NumPy", "Seaborn", "Linear Regression"],
      contribution:
        "Conducted end-to-end data preparation, correlation analysis, visualization with Seaborn, and regression model development.",
      status: "Completed",
      // Repository not yet public — link points to GitHub profile
      githubUrl: "https://github.com/rajratna-salve",
      liveUrl: "",
    },
  ],

  // ---- Mini / Learning Projects (real builds in progress) ----
  miniProjects: [
    {
      id: "cpp-dsa-practice",
      title: "C++ DSA Practice",
      description:
        "A collection of Data Structures & Algorithms implementations in C++ written during CDAC training. Covers arrays, linked lists, stacks, queues, trees, sorting algorithms, and recursion with annotated examples.",
      technologies: ["C++", "STL", "Data Structures", "Algorithms"],
      whatILearned:
        "Memory management, pointer arithmetic, STL containers, and systematic problem-solving through algorithmic complexity analysis.",
      githubUrl: "",   // Add GitHub URL once repository is created and pushed
      status: "building",
      tags: ["CDAC Training", "Learning Project"],
    },
    {
      id: "java-oop-practice",
      title: "Java OOP Practice",
      description:
        "Object-oriented Java programs demonstrating encapsulation, inheritance, polymorphism, and abstraction. Includes design pattern examples and collections framework usage from CDAC training.",
      technologies: ["Java", "OOP", "Collections", "Design Patterns"],
      whatILearned:
        "Class hierarchies, interface design, exception handling, and Java's standard collections framework.",
      githubUrl: "",   // Add GitHub URL once repository is created and pushed
      status: "building",
      tags: ["CDAC Training", "Learning Project"],
    },
    {
      id: "python-data-analysis",
      title: "Python Data Analysis Mini Project",
      description:
        "Exploratory data analysis on a real-world public dataset using Pandas, NumPy, and Seaborn. Includes statistical summaries, correlation analysis, and visualizations.",
      technologies: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
      whatILearned:
        "Data cleaning, outlier detection, feature relationships, and storytelling through visual analytics.",
      githubUrl: "",   // Add GitHub URL once repository is created and pushed
      status: "building",
      tags: ["Personal Project", "Practice Project"],
    },
    {
      id: "sql-practice",
      title: "SQL Query Collection",
      description:
        "A structured SQL practice repository covering SELECT queries, JOINs, aggregations, subqueries, window functions, and schema design exercises on sample datasets.",
      technologies: ["SQL", "SQLite", "PostgreSQL"],
      whatILearned:
        "Relational database design, complex multi-table queries, optimization, and analytical query patterns.",
      githubUrl: "",   // Add GitHub URL once repository is created and pushed
      status: "building",
      tags: ["Practice Project", "Learning Project"],
    },
  ],

  // ---- Experience ----
  experience: [
    {
      id: "metalman",
      company: "Metalman Auto Pvt. Ltd.",
      role: "Mechatronics Intern",
      duration: "Feb 2023 – Jun 2023",
      area: "Robotics and Quality Assurance",
      description:
        "Worked on industrial robotic systems operations, manufacturing automation, and quality-control standards.",
      highlights: [
        "Assisted in operating and monitoring industrial robotic systems to support automated production and ensure uninterrupted manufacturing operations.",
        "Performed quality assurance and inspection activities by identifying defects, maintaining quality standards, and supporting continuous process improvement.",
      ],
    },
  ],

  // ---- Education ----
  education: [
    {
      id: "btech",
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      institution: "AISSMS Institute of Information Technology, Pune, India",
      duration: "2023 – 2026",
      grade: "CGPA: 7.63",
      isPrimary: true,
    },
    {
      id: "diploma",
      degree: "Diploma in Mechatronics Engineering",
      institution: "Sanjivani K.B.P. Polytechnic, Kopargaon, Ahilyanagar, India",
      duration: "2020 – 2023",
      grade: "Percentage: 84.00%",
      isPrimary: false,
    },
  ],

  // ---- Certifications ----
  // ASSET STATUS (as of portfolio build):
  //   azure-ai-fundamentals.pdf        ✅ exists in public/certificates/
  //   python-programming-mkcl.pdf      ✅ exists in public/certificates/
  //   diploma-mechatronics.pdf         ✅ exists in public/certificates/
  //   industrial-automation-autotech.pdf ✅ exists in public/certificates/
  //   Oracle cert PDF                  ❌ not available — only online credential
  certifications: [
    {
      id: "azure-ai",
      title: "Microsoft Certified: Azure AI Fundamentals (AZ-900)",
      issuer: "Microsoft",
      credentialUrl:
        "https://learn.microsoft.com/en-us/users/rajratnasalve-1615/credentials/769aefe216db045e?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      pdfUrl: "/certificates/azure-ai-fundamentals.pdf",
      downloadName: "Azure_AI_Fundamentals_AZ900_Rajratna_Salve.pdf",
      badgeColor: "#0078d4",
    },
    {
      id: "oracle-data-science",
      title: "Oracle Cloud Infrastructure 2025 – Data Science Professional (Certified)",
      issuer: "Oracle",
      // No PDF file — credential only accessible online via Oracle's system
      credentialUrl: "",
      badgeColor: "#c74634",
    },
    {
      id: "python-mkcl",
      title: "Deep Certificate in Python Programming – MKCL (120 Hours, Score: 90/100, Credit Level 4.5)",
      issuer: "MKCL & AISSMS Institute of Information Technology",
      credentialUrl: "/certificates/python-programming-mkcl.pdf",
      pdfUrl: "/certificates/python-programming-mkcl.pdf",
      downloadName: "Python_Programming_MKCL_Rajratna_Salve.pdf",
      badgeColor: "#10b981",
    },
    {
      id: "diploma-cert",
      title: "Diploma in Mechatronics Engineering (First Class with Distinction)",
      issuer: "Maharashtra State Board of Technical Education / Sanjivani K.B.P. Polytechnic, Kopargaon",
      credentialUrl: "/certificates/diploma-mechatronics.pdf",
      pdfUrl: "/certificates/diploma-mechatronics.pdf",
      downloadName: "Diploma_Mechatronics_Rajratna_Salve.pdf",
      badgeColor: "#8b5cf6",
    },
    {
      id: "autotech-cert",
      title: "Industrial Automation Workshop Programme (PLCs & SCADA)",
      issuer: "Autotech Nashik",
      credentialUrl: "/certificates/industrial-automation-autotech.pdf",
      pdfUrl: "/certificates/industrial-automation-autotech.pdf",
      downloadName: "Industrial_Automation_Autotech_Rajratna_Salve.pdf",
      badgeColor: "#eab308",
    },
  ],

  // ---- Publications ----
  publications: [
    {
      title: "Advancing Media Integrity through AI-Powered Fake News Detection",
      description: "Designed an ML system to detect and classify misinformation using linguistic and source-based features.",
    },
    {
      title: "A Multimodal AI-Based System for Real-Time Harassment and Violence Detection Using Surveillance Cameras",
      description: "Contributed to the publication titled 'A Multimodal AI-Based System for Real-Time Harassment and Violence Detection Using Surveillance Cameras'.",
    },
  ],

  // ---- Terminal Responses ----
  terminalResponses: {
    help: `Available commands:
  about          — Learn about me & my journey
  journey        — Engineering career path (Mechatronics → AI)
  skills         — View technical skills by category
  projects       — Browse my 2 actual projects
  experience     — See internship details at Metalman Auto
  education      — Academic degrees & CDAC status
  certifications — View official certifications (or type "certs")
  learning       — Current CDAC training (C++, Java, DSA, OOP)
  contact        — Direct contact details
  github         — GitHub profile link
  linkedin       — LinkedIn profile link
  resume         — Download or view resume PDF
  clear          — Clear terminal screen`,

    about: `Rajratna Salve
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AI & Data Science | Software Development
Journey: Mechatronics → Robotics QA → AI & Data Science → CDAC Training

B.Tech — AISSMS Institute of Information Technology (CGPA: 7.63)
Diploma — Sanjivani K.B.P. Polytechnic (84.00%)
Languages: English, Hindi, Marathi`,

    skills: `Skills & Competencies
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Programming]     Python, SQL | CDAC Training: C++, Java
[Core CS]         CDAC Training: DSA, OOP, Problem Solving
[AI / Data]       TensorFlow, Pandas, NumPy, EDA, Data Visualization
[Generative AI]   Prompt Engineering, RAG, Embeddings, FAISS
[Web & Tools]     HTML/CSS, Git, VS Code, PowerBI, Tableau`,

    projects: `Projects (Authentic Implementations)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[1] AI-Based Harassment Detection System Using CCTV Footage
    Pipeline: CCTV → Video Processing → YOLO/MediaPipe → Violence Detection
              → Whisper/NLP → Alert Generation → Event Logging → Dashboard
    Tech: Python, OpenCV, YOLO, MediaPipe, Whisper, Streamlit

[2] House Price Prediction
    Pipeline: Dataset → EDA → Feature Analysis → Linear Regression → Prediction
    Tech: Python, Pandas, NumPy, Seaborn, Linear Regression`,

    experience: `Internship Experience
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mechatronics Intern | Metalman Auto Pvt. Ltd. (Feb 2023 – Jun 2023)
• Assisted in operating and monitoring industrial robotic systems to support automated production.
• Performed quality assurance and inspection activities by identifying defects and maintaining standards.`,

    education: `Education
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• B.Tech in Artificial Intelligence & Data Science
  AISSMS Institute of Information Technology, Pune (2023 – 2026) | CGPA: 7.63

• Diploma in Mechatronics Engineering
  Sanjivani K.B.P. Polytechnic, Kopargaon (2020 – 2023) | Percentage: 84.00%

• CDAC — Currently Pursuing
  Professional Training in C++, Java, DSA, and OOP`,

    learning: `CDAC Active Learning
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: CURRENTLY PURSUING (Professional Training)
• C++     : Systems programming, memory management & STL
• Java    : Object-oriented paradigm, collections framework
• DSA     : Arrays, trees, graphs, sorting & algorithmic complexity
• OOP     : Encapsulation, inheritance, polymorphism, abstraction
• Problem Solving : Logic building & analytical optimization`,

    certifications: `Official Certifications
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Microsoft Certified: Azure AI Fundamentals (AZ-900)
• Oracle Cloud Infrastructure 2025 – Data Science Professional (Certified)
• Deep Certificate in Python Programming – MKCL (Score: 90/100, 120 Hours)
• Diploma in Mechatronics Engineering – MSBTE / Sanjivani Polytechnic
• Industrial Automation Workshop (PLCs & SCADA) – Autotech Nashik`,

    contact: `Contact Details
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email    : rajratnas2211@gmail.com
Phone    : +91 86258 28705
LinkedIn : https://linkedin.com/in/rajratna-salve-0a704a203
GitHub   : https://github.com/rajratna-salve
Location : Pune, India`,

    github: "GitHub: https://github.com/rajratna-salve",
    linkedin: "LinkedIn: https://linkedin.com/in/rajratna-salve-0a704a203",
    resume: "Resume PDF available at /resume.pdf or download via Resume section.",
    certs: `Official Certifications
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Microsoft Certified: Azure AI Fundamentals (AZ-900)
• Oracle Cloud Infrastructure 2025 – Data Science Professional (Certified)
• Deep Certificate in Python Programming – MKCL (Score: 90/100, 120 Hours)
• Diploma in Mechatronics Engineering – MSBTE / Sanjivani Polytechnic
• Industrial Automation Workshop (PLCs & SCADA) – Autotech Nashik`,
    journey: `Engineering Journey
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
01. MECHATRONICS   — Diploma at Sanjivani K.B.P. Polytechnic (84.00%)
02. INDUSTRIAL     — Mechatronics Intern at Metalman Auto Pvt. Ltd.
03. AI & DATA SCI  — B.Tech at AISSMS IOIT, Pune (CGPA: 7.63)
04. SOFTWARE DEV   — Projects, research, and full-stack implementations
05. CDAC TRAINING  — C++, Java, DSA, OOP (currently pursuing)`,
  },
};

export default profile;
