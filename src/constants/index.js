import { cd, wm, wmb, cdb, ne, sl} from "../assets/images";
import {
    
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
   
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
  
];

export const experiences = [
     {
        title: "Full stack Developer",
        company_name: "WASHMANDU",
        icon: wm,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Codeology Technologies",
        icon: cd,
        iconBg: "#F0B615",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'https://wa.me/+917368970085',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/purushendrakarn',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/purushendra-karn/',
    }
];

export const projects = [
    {
        iconUrl: wmb,
        theme: 'btn-back-blue',
        name: 'Washmandu',
        description: 'Developed a web application that  notifies users of price changes for services on Washmandu, helping users find the best deals on laundry services in entire valley.',
        link: 'https://www.washmandu.com/',
    },
    {
        iconUrl: cdb,
        theme: 'btn-back-green',
        name: 'Codeology',
        description: 'Developed a web application that tracks the progress of project and the upcoming project descriptions, Reporting Teams, Stand Ups, Skills rental.',
        link: 'http://thecodeology.com/',
    },
    {
        iconUrl: ne,
        theme: 'btn-back-orange',
        name: 'Nepal eMarket',
        description: 'Developed a eCommerce web application for the customer related to busying goods online and paying using diofferent payment gateways with offers.',
        link: 'https://www.nepalemarket.com/',
    },
    {
        iconUrl: sl,
        theme: 'btn-back-yellow',
        name: 'SmartAcre Media Solutions',
        description: 'Developed a website to perform SMTP affiliate digital marketing funnel through email , ipv4 and alibaba cloud integration.',
        link: 'https://smartacremediasolutions.com/',
    }
];
