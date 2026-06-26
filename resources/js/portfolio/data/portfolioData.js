export const profile = {
    name: "Bana Budhiana",
    email: "bana.budhiana@gmail.com",
    yearsOfExperience: "20+",
    title: "Senior Full-Stack Developer & Server Administrator"
};

export const skills = [
    { name: "PHP", category: "Backend" },
    { name: "Laravel", category: "Backend" },
    { name: "ReactJs", category: "Frontend" },
    { name: "NextJs", category: "Frontend" },
    { name: "TailwindCSS", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Vanilla Javascript", category: "Frontend" },
    { name: "Linux", category: "Infrastructure" },
    { name: "MariaDB", category: "Database" },
    { name: "MySQL", category: "Database" }
];

export const projects = [
    {
        id: 1,
        title: "Enterprise E-Commerce Platform",
        category: "Full-Stack",
        description: "High-performance e-commerce engine built for scale.",
        technologies: ["Laravel", "ReactJS", "TailwindCSS", "MariaDB"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
        id: 2,
        title: "Secure Cloud Infrastructure Automation",
        category: "DevOps/Linux",
        description: "Hardened Linux server clustering with optimized database routing.",
        technologies: ["Linux", "MySQL", "Bash"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
        id: 3,
        title: "Modern Financial Dashboard",
        category: "Frontend",
        description: "Real-time interactive dashboard for enterprise financial analytics.",
        technologies: ["ReactJS", "TypeScript", "TailwindCSS"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400"
    }
];

export const services = [
    {
        id: 1,
        title: "Enterprise Web Development",
        description: "Scalable and secure web applications built with Laravel and modern frontend frameworks like React or Next.js.",
        features: ["Custom Architecture", "High Security Standard", "Seamless Integration"],
        icon: "monitor"
    },
    {
        id: 2,
        title: "High-Performance API & Backend Architecture",
        description: "Robust RESTful or GraphQL APIs optimized for high traffic and fast response times.",
        features: ["Microservices Ready", "Database Optimization", "Scalable System"],
        icon: "server"
    },
    {
        id: 3,
        title: "Linux Server Optimization & Infrastructure Setup",
        description: "Expert configuration of Linux environments ensuring maximum uptime and security for your applications.",
        features: ["Security Hardening", "Performance Tuning", "Automated Backups"],
        icon: "linux"
    }
];
