import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  meta: {
    name: "Do Dang Khoa",
    title: "C# ASP.NET & ReactJS Developer",
    location: "Ho Chi Minh City, Vietnam",
    email: "dodangkhoaa1@gmail.com",
    github: "https://github.com/khoado-se",
    linkedin: "https://www.linkedin.com/in/khoa-do-139978198"
  },
  about: {
    short: "Fresh graduate in Software Engineering (GPA 8.43/10) from FPT University. Passionate about backend development with practical experience in .NET Core, Web API, SQL Server, and Azure cloud deployment.",
    long: "I'm Khoa, a fresh graduate in Software Engineering from FPT University Can Tho with a GPA of 8.43/10 (3.37/4.0). I'm passionate about backend development with practical experience in .NET Core, Web API, SQL Server, and Azure cloud services. I've successfully deployed multiple applications to Azure App Service, utilizing Azure Blob Storage for media management and configuring production environments with proper security and scalability. I've contributed to real-world projects such as Mango (Microservices) and I Want (Educational App for children with communication challenges). I gained hands-on experience at BBV Vietnam in Agile development, database design, and API implementation. I achieved 3 Honorable Student of Trimester and 2 consecutive Excellent Student of Trimester awards. I'm seeking opportunities in backend or full-stack development roles where I can apply my technical skills and continue growing."
  },
  goals: {
    career_short_term: "Secure a position as a .NET Backend Developer or Full-stack Developer to apply my skills in real-world projects.",
    career_long_term: "Advance to a Senior Developer role and eventually become a Solution Architect specializing in .NET systems.",
    english_learning: "Completed Academic Preparatory English at FPT University. Currently at intermediate English level with ongoing self-study.",
    future_plan: "Build strong foundation in Vietnam, continuously improve technical and language skills, and explore opportunities in international markets."
  },
  skills: {
    languages: ["C#", "Java", "JavaScript"],
    frameworks: ["ASP.NET Core", "ASP.NET MVC", "Entity Framework", "ReactJS"],
    frontend: ["ReactJS", "HTML", "CSS", "JavaScript"],
    databases: ["SQL Server"],
    cloud_devops: ["Azure App Service", "Azure Blob Storage", "Azure deployment", "CI/CD", "Git", "GitHub", "Postman"],
    architecture_tools: ["RESTful API", "Microservices", "Agile/Scrum", "Unit Testing (MSTest)", "Dependency Injection"],
    soft_skills: ["Problem solving", "Team collaboration", "Agile methodology", "Database design", "API development", "Cloud deployment"]
  },
  projects: [
    {
      title: "Mango - Fruit Shop",
      short: ".NET Core microservices web application for fruit e-commerce.",
      year: 2025,
      role: "Solo Developer",
      tech: ["ASP.NET Core", "ASP.NET MVC", "Web API", "SQL Server", "Entity Framework Core", "Azure App Service", "Azure Blob Storage"],
      description: "Built a .NET Core microservices web app with ASP.NET MVC & Web API. Integrated SQL Server with async programming and RESTful APIs for scalability. Deployed on Azure App Service with Azure Blob Storage for media files, configured environment variables and connection strings for production deployment.",
      features: ["Microservices architecture", "RESTful APIs", "Async programming", "Azure App Service deployment", "Azure Blob Storage integration", "SQL Server integration"],
      links: {
        repo: "https://github.com/dodangkhoaa1/mango"
      }
    },
    {
      title: "I Want - Communication Support System",
      short: ".NET web app and Unity game for children with communication challenges.",
      year: 2024,
      role: "Backend Developer & Game Developer (Team of 5)",
      tech: ["ASP.NET API", "ASP.NET MVC", "Unity", "SQL Server", "Azure App Service", "Git", "GitHub"],
      description: "Developed a .NET web app and Unity game for children with communication challenges. Planned project roadmap and deployment strategy. Designed and optimized database schema. Built and integrated RESTful APIs to connect web and game applications. Developed 2 out of 5 games in Unity. Deployed the app to Google Play Store and hosted web application on Azure App Service with proper configuration for production environment.",
      features: ["Unity game development", "RESTful API integration", "Database optimization", "Azure App Service deployment", "Google Play Store publication", "Cross-platform integration"],
      links: {
        repo: "https://github.com/dodangkhoaa1/iwant",
        playstore: "https://play.google.com/store/apps/details?id=com.iwcompany.iwant&pcampaignid=web_share"
      }
    }
  ],
  experience: [
    {
      company: "BBV Vietnam",
      role: "Software Engineering Intern",
      period: "July 2025 – September 2025",
      description: "Participated in real-world Agile projects under the Young Professional Program. Designed and implemented database schema for a task management system similar to Trello. Developed RESTful APIs for Trello-like features (task creation, assignment, tracking). Applied Dependency Injection and MVC model in coding practices. Experienced Agile development process including Scrum, sprint planning, and daily standups. Analyzed UI requirements and designed databases using SQL Server. Wrote and maintained Unit Tests with MSTest to ensure code quality and reliability."
    },
    {
      company: "UTA",
      role: "Software Engineering Intern",
      period: "January 2024 – May 2024",
      description: "Built a landing page using HTML/CSS based on Figma design to support UI implementation. Practiced teamwork and reported progress using GitHub, ensuring alignment with assigned tasks. Gained experience in frontend development and collaborative workflows."
    }
  ],
  education: {
    school: "FPT University",
    degree: "Bachelor of Software Engineering",
    location: "Can Tho, Vietnam",
    graduation_year: 2025
  },
  background: {
    from: "GPA: 8.43/10 (3.37/4.0)",
    current_region: "Achieved 3 Honorable Student of Trimester, 2 consecutive Excellent Student of Trimester"
  },
  certificates: [
    {
      name: "Web Design for Everybody",
      issuer: "Coursera"
    },
    {
      name: "Software Development Lifecycle",
      issuer: "Coursera"
    },
    {
      name: "Project Management Principles and Practices",
      issuer: "Coursera"
    },
    {
      name: "Academic Preparatory English",
      issuer: "FPT University"
    },
    {
      name: "Japanese Language (Basic - N5 equivalent)",
      issuer: "FPT University"
    }
  ],
  contact: {
    message: "Open to backend/full-stack developer roles and collaboration opportunities.",
    email: "dodangkhoaa1@gmail.com",
    github: "https://github.com/khoado-se",
    linkedin: "https://www.linkedin.com/in/khoa-do-139978198"
  }
};
