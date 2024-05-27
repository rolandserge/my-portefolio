import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaFigma,
    FaLaravel,
    FaSass,
    FaPhoneAlt, FaEnvelope, FaMapMarkedAlt
} from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si"

export const services = [
    {
        num: "01",
        title: "Developpement Web",
        description: "Lorem ipsum dolor sit amet consectetur ratione quam quod excepturi, reiciendis maiores!",
        href: ""
    },
    {
        num: "02",
        title: "Developpement Mobile",
        description: "Lorem ipsum dolor sit amet consectetur ratione quam quod excepturi, reiciendis maiores!",
        href: ""
    },
    {
        num: "03",
        title: "SEO",
        description: "Lorem ipsum dolor sit amet consectetur ratione quam quod excepturi, reiciendis maiores!",
        href: ""
    },
    {
        num: "04",
        title: "UI/UX design",
        description: "Lorem ipsum dolor sit amet consectetur ratione quam quod excepturi, reiciendis maiores!",
        href: ""
    },

]

export const about = {
    title: "A propos de moi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.",
    info: [
        {
            fieldName: "Nom",
            fieldValue: "Komenan Koffi Serge-Roland"
        },
        {
            fieldName: "Telephone",
            fieldValue:"(+225) 07 04 21 91 95"
        },
        {
            fieldName: "Expérience",
            fieldValue: "1 année"
        },
        {
            fieldName: "Nationalité",
            fieldValue: "Ivoirienne"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Disponible"
        },
        {
            fieldName: "Langue",
            fieldValue: "Francais"
        },
        {
            fieldName: "Email",
            fieldValue: "sergeroland.komenan@gmail.com"
        },
    ]
}


export const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Mon experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet",
    items: [
        {
            company: "Web Turba Sarl",
            position: "Full Stack Developpeur",
            duration: "mars 2023 - juin 2023"
        },
        {
            company: "Web Turba Sarl",
            position: "Full Stack Developpeur",
            duration: "mars 2023 - juin 2023"
        },
        {
            company: "Proximiti CI",
            position: "Freelance Web Developer",
            duration: "juin 2023 - septembre 2023"
        },
        {
            company: "Tech Solutions Inc",
            position: "Full Stack Developpeur",
            duration: "2023 - present"
        }
    ]
}

export const education = {
    icon: "/assets/resume/cap.svg",
    title: "Mon education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet",
    items: [
        {
            institution: "ESATIC",
            degree: "Licence professionnelle en Technologies du web et Images Numeriques",
            duration: "2020 - 2023",
            lieu: "Abidjan"
        },
        {
            institution: "Lycée Mixte 2",
            degree: "Baccaleureat serie D",
            duration: "2019 - 2020",
            lieu: "Yamoussoukro"
        }
    ]
}

export const skills = {
    title: "Mes compétences",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet",
    skillList: [
        {
            icon: FaHtml5,
            name: "html 5"
        },
        {
            icon: FaCss3,
            name: "css 3"
        },
        {
            icon: FaSass,
            name: "sass"
        },
        {
            icon: FaFigma,
            name: "figma"
        },
        {
            icon: SiTailwindcss,
            name: "tailwind.css"
        },
        {
            icon: FaJs,
            name: "javascript"
        },
        {
            icon: FaReact,
            name: "react.js"
        },
        {
            icon: SiNextdotjs,
            name: "next.js"
        },
        {
            icon: SiTypescript,
            name: "typescript"
        },
        {
            icon: FaNodeJs,
            name: "node.js"
        },
        {
            icon: FaLaravel,
            name: "laravel"
        },
    ]
}

export const projets = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, id.",
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: "/assets/work/thumb1.png",
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "fullStack",
        title: "project 2",
        description: "Lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, id.",
        stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
        image: "/assets/work/thumb2.png",
        live: "",
        github: ""
    },
    {
        num: "03",
        category: "frontend",
        title: "project 1",
        description: "Lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, id.",
        stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
        image: "/assets/work/thumb3.png",
        live: "",
        github: ""
    }
]


export const info = [
    {
        icon: FaPhoneAlt,
        title: "Telephone",
        description: "(+225) 07 04 21 91 95"
    },
    {
        icon: FaEnvelope,
        title: "Email",
        description: "sergeroland.komenan@gmail.com"
    },
    {
        icon: FaMapMarkedAlt,
        title: "Localisation",
        description: "Abidjan - Koumassi"
    }
]