import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    mongodb,
    git,
    statsperform,
    ua,
    
    pedro_almeida,
    ruben,
    pedro_mirassol,

    codeforall,
  
    vivanimal2,
    forever,
    threejs,
    responsive,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front Developer, React, JavaScript",
      icon: mobile,
    },
    {
      title: "Backend Developer, Java, Nodejs",
      icon: backend,
    },
    {
      title: "Available for Internship/Freelance work",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3", //imports , tech - image and index change
      icon: css,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  
    
   
  ];
  
  const experiences = [
    {
      title: "Frequency in Information Technology Degree", 
      company_name: "Univerversity of Aveiro",
      icon: ua,
      iconBg: "#383E56",
      date: "2017 - 2019",
      points: [
        "Basics of languages like Java, C, or Python, including variables, loops, and functions.",
        "Introduction to relational databases, SQL, and normalization.",
        "Basic networking concepts, OS fundamentals, and how computers communicate.",
      ],
    },
    {
      title: "Data Collection Analyst",
      company_name: "Stats Perform",
      icon: statsperform,
      iconBg: "#383E56",
      date: "2021 - 2024",
      points: [
        "Contributed to the meticulous collection, analysis and validation of sports statistics",
        "Played a key role in upholding the quality of our services and contributing to our clients' success in the sports industry.",
      ],
    },
    
    {
      title: "Full Stack Bootcamp",
      company_name: "Code For All_",
      icon:codeforall,
      iconBg: "#383E56",
      date: "2024 - 2025",
      points: [
        "Intensive training in full-stack web development, focusing on Java, JavaScript, mySql, Spring",
        "Completed real-world projects, enhancing problem-solving and coding skills.",
        "Collaborated with peers to build responsive, user-friendly applications.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Since João decided to embark on his developer career he showed a lot of drive and work ethic. This curiosity and desire to learn will certainly benefit the companies he will be working with!",
      name: "Pedro Almeida",
      designation: "Product Manager",
      company: "Critical TechWorks ",
      image: pedro_almeida,
    },
    {
      testimonial:
        "I had the pleasure to work with João for three years at Stats Perform. His attention to detail, problem-solving skills, and deep understanding of sports data made our work more efficient. A great team player and professional!",
      name: "Ruben Verdadeiro",
      designation: "Data Analyst",
      company: "Stats Perform",
      image: ruben,
    },
    {
      testimonial:
        "I worked with João during our full-stack bootcamp at Code for All. He's a fast learner, great at solving problems, and always ready to help. A solid teammate to have on any project!",
      name: "Pedro Mirassol",
      designation: "Junior Developer",
      company: "Code for All_",
      image: pedro_mirassol,
    },
  ];
  
  const projects = [
    {
      name: "Vivanimal app",
      description:
        "A web app focused on adopting dogs and cats, enabling donations and volunteer work with an easy-to-use interface. The project aimed to support the Viva Animal Foundation, led by the inspiring Dona Emília.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: vivanimal2,
      source_code_link: "https://github.com/Joaoalmeidavt/Vivanimal-Project",
    },
    {
      name: "Startup Website",
      description:
        "A modern, fully responsive startup website template built with HTML, CSS, and JavaScript. This project is designed for startups, SaaS businesses, and entrepreneurs looking for a sleek and professional online presence.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: responsive,
      source_code_link: "https://github.com/Joaoalmeidavt/Responsive-Startup-Website",
    },
    {
      name: "E-commerce website",
      description:
        "Full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js) and deployed on Vercel. This project delivers a seamless shopping experience for users and a robust admin panel for managing products and orders.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "blue-text-gradient",
        },
      ],
      image: forever,
      source_code_link: "https://github.com/Joaoalmeidavt/e-commerce-website",
    
      
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };