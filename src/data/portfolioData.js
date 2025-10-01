// Portfolio Data Configuration
// Update this file with your personal information

export const portfolioData = {
  about: {
    heading: "Data Engineer with 4 Years of Expertise",
    description: "Data Engineer with 4 years of expertise in designing, developing, and managing end-to-end ETL/ELT pipelines for large-scale structured and unstructured datasets across cloud and on-premise environments. Skilled in building robust data architectures and models (star & snowflake schemas, dimensional modeling, data lake/lakehouse). Proficient with orchestration tools like Apache Airflow and Flink, plus AWS, Azure, and DevOps practices to ensure scalable, reliable data delivery.",
    stats: {
      experience: "4+",
      projects: "15+",
      technologies: "25+"
    },
    contact: {
      email: "abhay.shrihari.ambekar@gmail.com",
      linkedin: "https://linkedin.com/in/abhay3020",
      github: "https://github.com/Abhay3020"
    }
  },

  projects: [
    {
      title: "MetricPulse – Distributed Analytics Pipeline",
      description: "ELT pipeline on Linux processing 1M+ e-commerce events daily into Snowflake. dbt models standardized schemas for downstream analytics. Workflows orchestrated in Airflow with logs/counters → 30% faster debugging. Delivered marts enabling Power BI dashboards for stakeholders.",
      technologies: ["Python", "SQL", "Snowflake", "dbt", "Airflow", "Power BI", "Linux"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhay3020/MetricPulse"
    },
    {
      title: "Pothole Detection System",
      description: "Low-latency pipeline (<2s) streaming accelerometer & GPS sensor data. Visualized hazards on Google Maps dashboard. Containerized 4 services with Docker for portability. Real-time analytics via Apache Flink for 10+ researchers.",
      technologies: ["Python", "Flink", "Docker", "Google Maps API", "GPS Sensors"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhay3020/Pothole_detection"
    },
    {
      title: "YouTube Trending Analysis",
      description: "Data analysis project analyzing YouTube trending videos using Python, pandas, and visualization libraries. Extracted insights from trending patterns, category analysis, and engagement metrics.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhay3020/yt-trending-analysis"
    },
    {
      title: "BoTesh - AI Chat Bot",
      description: "Intelligent chatbot application built with TypeScript and modern web technologies. Features natural language processing, context awareness, and responsive UI for seamless user interactions.",
      technologies: ["TypeScript", "Node.js", "AI/ML", "Web APIs"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhay3020/BoTesh-A-chat-bot"
    },
    {
      title: "Face Mask Detection",
      description: "Computer vision project using machine learning to detect whether people are wearing face masks. Built with Python and computer vision libraries for real-time detection capabilities.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Jupyter"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhay3020/Face-Mask-Detection"
    },
    {
      title: "Watch Together",
      description: "Collaborative video streaming application built with TypeScript. Enables multiple users to watch videos synchronously with real-time chat and interaction features.",
      technologies: ["TypeScript", "WebRTC", "Socket.io", "React", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhay3020/watch_together"
    },
    {
      title: "Lost & Found System",
      description: "Web application for managing lost and found items with user-friendly interface. Built with TypeScript and modern web technologies for efficient item tracking and recovery.",
      technologies: ["TypeScript", "React", "Node.js", "Database", "Web APIs"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhay3020/Lost-Found"
    },
    {
      title: "Document Visual Question Answering",
      description: "AI-powered system for answering questions about visual documents. Combines computer vision and natural language processing to extract and answer questions from document images.",
      technologies: ["Python", "Computer Vision", "NLP", "Deep Learning", "OCR"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhay3020/Document-Visual-Question-Answering"
    }
  ],

  experience: [
    {
      title: "Data Engineer",
      company: "CVS Health",
      duration: "May 2024 - Present",
      location: "Texas, USA",
      description: "Built ETL pipelines ingesting 5M+ daily healthcare records with Python, SQL, and Airflow, reducing preprocessing by 70%. Reusable Python/SQL modules cut deployment errors 30%. Optimized queries halving execution times and enabling faster reporting.",
      responsibilities: [
        "Built ETL pipelines ingesting 5M+ daily healthcare records with Python, SQL, and Airflow, reducing preprocessing by 70%",
        "Reusable Python/SQL modules cut deployment errors 30%",
        "Optimized queries halving execution times and enabling faster reporting",
        "Scaled batch processing for 50GB+ datasets, boosting throughput 40%",
        "Automated validation (Great Expectations) improving data accuracy 25%",
        "Containerized workflows on Docker + AWS EMR, lowering spend 10%",
        "Real-time monitoring reduced detection of pipeline failures by 60%"
      ],
      technologies: ["Python", "SQL", "Airflow", "Docker", "AWS EMR", "Great Expectations"]
    },
    {
      title: "Data Engineer",
      company: "PwC",
      duration: "Jun 2022 - Jun 2023",
      location: "Bangalore, India",
      description: "Directed 15+ ETL workflows with batching/parallelism, improving reliability. Optimized SQL Server queries on 5M+ rows, reducing execution overhead. Created Informatica templates improving quality 20% and cutting QA time.",
      responsibilities: [
        "Directed 15+ ETL workflows with batching/parallelism, improving reliability",
        "Optimized SQL Server queries on 5M+ rows, reducing execution overhead",
        "Created Informatica templates improving quality 20% and cutting QA time",
        "Piloted CI/CD integration for ETL jobs, maintaining 99.9% uptime"
      ],
      technologies: ["SQL Server", "Informatica", "Python", "ETL", "CI/CD"]
    },
    {
      title: "Platform Engineer Intern",
      company: "PwC",
      duration: "Mar 2022 - Jun 2022",
      location: "Bangalore, India",
      description: "Automated AWS environment provisioning with Ansible/Terraform (80% faster). Deployed microservices with Docker & Kubernetes, cutting costs 10%. Automated health checks/failover, reducing MTTR by 35%.",
      responsibilities: [
        "Automated AWS environment provisioning with Ansible/Terraform (80% faster)",
        "Deployed microservices with Docker & Kubernetes, cutting costs 10%",
        "Automated health checks/failover, reducing MTTR by 35%"
      ],
      technologies: ["AWS", "Ansible", "Terraform", "Docker", "Kubernetes"]
    },
    {
      title: "Data Engineer Intern",
      company: "DMI Finance",
      duration: "Jan 2021 - Feb 2022",
      location: "India",
      description: "Built Snowflake ETL pipelines processing 1.2M+ loan records daily. Designed star schemas, cutting query runtimes 40%. Automated daily incremental updates with Streams/Tasks, trimming manual work by 70%.",
      responsibilities: [
        "Built Snowflake ETL pipelines processing 1.2M+ loan records daily",
        "Designed star schemas, cutting query runtimes 40%",
        "Automated daily incremental updates with Streams/Tasks, trimming manual work by 70%",
        "Built Power BI dashboards, reducing NPAs by 5%"
      ],
      technologies: ["Snowflake", "SQL", "Power BI", "ETL", "Python"]
    }
  ],

  skills: {
    "Programming Languages": [
      { name: "Python", icon: "Code2" },
      { name: "SQL", icon: "Database" },
      { name: "C/C++", icon: "Code2" },
      { name: "Java", icon: "Code2" },
      { name: "JavaScript", icon: "Code2" }
    ],
    "Databases & Big Data": [
      { name: "Snowflake", icon: "Database" },
      { name: "Redshift", icon: "Database" },
      { name: "BigQuery", icon: "Database" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "MySQL", icon: "Database" },
      { name: "Oracle", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      { name: "Cassandra", icon: "Database" },
      { name: "DynamoDB", icon: "Database" }
    ],
    "ETL & Orchestration": [
      { name: "Apache Airflow", icon: "Server" },
      { name: "Apache Spark", icon: "Zap" },
      { name: "Apache Kafka", icon: "Zap" },
      { name: "Hadoop", icon: "Server" },
      { name: "Hive", icon: "Database" },
      { name: "Databricks", icon: "Cloud" },
      { name: "Talend", icon: "Server" },
      { name: "Informatica", icon: "Server" },
      { name: "SSIS", icon: "Server" },
      { name: "dbt", icon: "Database" },
      { name: "DataStage", icon: "Server" }
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: "Cloud" },
      { name: "Azure", icon: "Cloud" },
      { name: "Docker", icon: "Server" },
      { name: "Kubernetes", icon: "Cpu" },
      { name: "Terraform", icon: "Server" },
      { name: "Ansible", icon: "Server" },
      { name: "CI/CD", icon: "GitBranch" }
    ],
    "Data Visualization": [
      { name: "Tableau", icon: "BarChart3" },
      { name: "Power BI", icon: "BarChart3" },
      { name: "Looker", icon: "BarChart3" },
      { name: "Excel", icon: "BarChart3" }
    ]
  },

  education: [
    {
      title: "Master of Science in Computer Science",
      university: "University of Massachusetts Lowell",
      year: "Aug 2023 - May 2025",
      location: "MA, USA",
      description: "Advanced studies in computer science with focus on data engineering, distributed systems, and cloud computing.",
      achievements: [
        "Specialized coursework in Data Engineering and Distributed Systems",
        "Advanced Database Design and Big Data Technologies",
        "Cloud Computing and DevOps Practices",
        "Machine Learning and Data Analytics"
      ],
      logo: "https://www.uml.edu/images/brand/2018-UML-Logo-Horizontal-4C_tcm18-287912.png",
      icon: "GraduationCap"
    },
    {
      title: "Bachelor of Engineering in Computer Science",
      university: "KLE Technological University",
      year: "Aug 2018 - May 2022",
      location: "Karnataka, India",
      description: "Foundation in computer science, programming, algorithms, and software engineering principles.",
      achievements: [
        "Comprehensive coursework in Data Structures and Algorithms",
        "Software Engineering and System Design",
        "Database Management Systems",
        "Web Development and Programming Languages"
      ],
      logo: "https://kletech.ac.in/wp-content/uploads/2022/12/Kle-tech-university-logo.png",
      icon: "University"
    }
  ]
};

// Instructions:
// 1. Replace the placeholder data above with your actual information
// 2. Update the contact information with your real email, LinkedIn, and GitHub
// 3. Add your real projects, experience, skills, and education
// 4. Save the file and your portfolio will be updated automatically
