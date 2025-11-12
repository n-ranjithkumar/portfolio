import CImg from "../images/Skills/c.png";
import CssImg from "../images/Skills/css.png";
import TortoiseGitImg from "../images/Skills/tortoisegit.png";
import DsaImg from "../images/Skills/dsa.png";
import ExpressImg from "../images/Skills/expressjs.png";
import GitImg from "../images/Skills/git.png";
import GithubImg from "../images/Skills/github.png";
import HtmlImg from "../images/Skills/html.png";
import JavaImg from "../images/Skills/java.png";
import JavascriptImg from "../images/Skills/javascript.png";
import MySqlImg from "../images/Skills/mysql.png";
import NodeImg from "../images/Skills/nodejs.png";
import PythonImg from "../images/Skills/python.png";
import ReactImg from "../images/Skills/react.png";
import RestapiImg from "../images/Skills/restapi.png";
import DjangoImg from "../images/Skills/django.png";
import MongodbImg from "../images/Skills/mongodb.png";
import SqlImg from "../images/Skills/sql.png";
import StyledcomponentsImg from "../images/Skills/styled-components.png";
import TailwindImg from "../images/Skills/tailwind-css.png";
import NextJsImg from "../images/Skills/nextjs.svg";
import BootstrapImg from "../images/Skills/bootstrap.png";
import DockerImg from "../images/Skills/docker.png";
import PostgresImg from "../images/Skills/postgresql.png";
import InternstudioImg from "../images/Experience/internstudio.png";
import GnapiImg from "../images/Experience/gnapi-tech.webp";
import VdartImg from "../images/Experience/vdart.png";
import FidelityCertImg from "../images/Experience/fidelity-intern-cert.png";
import RocketlaneCertImg from "../images/Experience/rocketlane-intern-cert.png";
import CartXImg from "../images/Projects/cartx-image.png";
import SimsImg from "../images/Projects/sims.png";
import MovieImg from "../images/Projects/movie.png";
import GulcoImg from "../images/Projects/gulco.jpg";


export const Bio = {
    name: "Ranjithkumar N",
    roles: [
      "Full Stack Developer",
      "Frontend Developer",
      "Competitive Coder",
      "Programmer",
    ],
    description:
      `I am a passionate and adaptable Computer Science Engineering student with a keen interest in exploring diverse domains of technology. 
      I thrive in dynamic environments, embracing challenges that drive innovation and continuous learning. 
      With a problem-solving mindset and attention to detail, I strive to create high-quality, impactful solutions. 
      Driven by curiosity and a commitment to growth, I aim to make a meaningful contribution to the ever-evolving tech industry.`,
    github: "https://github.com/n-ranjithkumar",
    resume:
      "https://drive.google.com/file/d/1cTA6rcpsS8t30bUdkj1Jr31w-ekEbTCb/view?usp=drive_link",
    linkedin: "https://www.linkedin.com/in/ranjithkumar-n-420459317/",
};

export const skills = {
  title: "Skills",
  desc: "A comprehensive overview of my technical expertise and competencies.",
  data: [
    {
      skillTitle: "Programming Languages",
      skillList: [
        {
          name: 'Python',
          image: PythonImg
        },
        {
          name: 'Java',
          image: JavaImg
        },
        {
          name: 'C',
          image: CImg
        },
        {
          name: 'Javascript',
          image: JavascriptImg
        },
        {
          name: 'C++',
          image: SqlImg
        }
      ]
    },
    {
      skillTitle: "Frontend",
      skillList: [
        {
          name: 'Html',
          image: HtmlImg
        },
        {
          name: 'CSS',
          image: CssImg
        },
        {
          name: 'React Js',
          image: ReactImg
        },
        {
          name: 'Next.js',
          image: NextJsImg
        },
        {
          name: 'Bootstrap',
          image: BootstrapImg
        },
        {
          name: 'Styled Components',
          image: StyledcomponentsImg
        },
        {
          name: 'Tailwind CSS',
          image: TailwindImg
        },
      ]
    },
    {
      skillTitle: 'Backend',
      skillList: [
        {
          name: 'Node Js',
          image: NodeImg
        },
        {
          name: 'Express Js',
          image: ExpressImg
        },
        {
          name: 'Django',
          image: DjangoImg
        },
        {
          name: 'REST',
          image: RestapiImg
        },
        {
          name: 'MySql',
          image: MySqlImg
        },
        {
          name: 'MongoDB',
          image: MongodbImg
        },
        {
          name: 'PostgreSQL',
          image: PostgresImg
        }
      ]
    },
    {
      skillTitle: 'Others',
      skillList: [
        {
          name: 'Data Structures & Algorithms',
          image: DsaImg
        },
        {
          name: 'Git',
          image: GitImg
        },
        {
          name: 'Github',
          image: GithubImg
        },
        {
          name: 'Tortoise Git',
          image: TortoiseGitImg
        },
        {
          name: 'Docker',
          image: DockerImg
        },
      ]
    }
  ]
}

export const experience = {
  title: 'Experience',
  desc: "A summary of my professional journey and contributions.",
  data: [
    {
      role: 'Trainee',
      image: GnapiImg,
      org: 'Gnapi Technologies',
      date: 'Jun 2025 - Present',
      certificate: {
        image: FidelityCertImg,
        link: '#'
      },
      contribution: `Contributing to product features and POCs as a trainee while learning production-grade patterns. Building UI with Next-js and TypeScript, integrating REST APIs, and working with PostgreSQL and MongoDB data models. Containerizing dev workflow using Docker for consistent environments.`,
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker']
    },
    {
      role: 'Full Stack Web Developer Intern',
      image: VdartImg,
      org: 'VDart',
      date: 'Jan 2025 - May 2025',
      certificate: {
        image: FidelityCertImg,
        link: 'https://drive.google.com/file/d/1rSh7f8sQAESazErP4nayL3m_aY6ln6st/view?usp=drive_link'
      },
      contribution: `Collaborated with a team of two as a Full Stack Web Development Intern, 
      leveraging advanced technologies to create the Document Onboarding Toolkit. 
      Developed and deployed a user-friendly toolkit that empowered system users to seamlessly
      onboard documents, eliminating manual steps and optimizing workflow efficiency, resulting in a 50% reduction in document processing time.`,
      technologies: ['React Js', 'JavaScript', 'Python', 'Django Rest Framework']
    },
    {
      role: 'Website Design and Development Intern',
      image: InternstudioImg,
      org: 'Internship Studio',
      date: 'Jun 2024 - Jul 2024',
      certificate: {
        image: RocketlaneCertImg,
        link: 'https://drive.google.com/file/d/1iipS4EqSLYJ9MpIq19lDecAboHw3EW3q/view?usp=drive_link'
      },
      contribution: `Identified and resolved critical bugs in the frontend codebase, 
      enhancing user experience and improving overall application functionality.
      Utilized advanced debugging tools and techniques to efficiently 
      locate and address frontend issues, ensuring smooth and error-free user interactions.`,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React Js', 'Node Js', 'Express Js', 'MongoDb']
    }
  ]

};

export const education = {
  title: 'Education',
  desc: "My academic qualifications and educational achievements.",
  data: [
    {
      school: 'SASTRA University, Thanjavur',
      degree: 'B.Tech - Computer Science and Engineering',
      grade: '6.65 CGPA',
      courses: ['OOP', 'Data Structures', 'Algorithms', 'Operating System', 'Computer Networks'],
      duration: ' 2021 - 2025'
    },
    {
      school: 'AKKV Aarunadu Matric Hr Sec School, Trichy',
      degree: 'HSC(+2)',
      grade: '94.33%',
      courses: ['Computer Science', 'Mathematics', 'Physics'],
      duration: ' 2020 - 2021'
    },
    {
      school: 'AKKV Aarunadu Matric Hr Sec School, Trichy',
      degree: 'SSLC',
      grade: '89.60%',
      courses: ['Science', 'Mathematics', 'English'],
      duration: '2018 - 2019'
    },
  ]
};

export const projects = {
  title: 'Projects',
  desc: 'Showcase of my notable projects and technical implementations.',
  data: [
    {
      name: 'Smart Intern Management System with AI Chatbot',
      image: SimsImg,
      technologies: ['React Js', 'JavaScript', 'Python', 'Django Rest Framework'],
      desc: `Built using Reactjs for the frontend and Django REST Framework for the backend, enabling efficient handling of intern records, including personal details, tasks, attendance, leave balance, and request submissions.
      Integrated an AI Chatbot to assist interns by answering FAQs, navigating the platform, and enhancing user interaction and support.
      Implemented role-based access control (RBAC) to provide secure, tailored access for Interns, Staff, HR, and Admin users based on their responsibilities.
      Applied PBKDF2_SHA256 hashing algorithm for robust password encryption, ensuring secure authentication and data protection.`,
      link: '',
      githubLink: 'https://github.com/n-ranjithkumar'
    },
    {
      name: 'E-Commerce Website Design',
      image: CartXImg,
      technologies: ['React Js', 'Tailwind CSS', 'Node Js', 'Express Js', 'MySql'],
      desc: `A full-stack e-commerce platform with responsive and dynamic user interfaces built using HTML, CSS, JavaScript, and React.js, ensuring a smooth and modern user experience across devices.
      Implemented backend services using Node.js with MySQL, enabling efficient management of product inventory, user accounts, and order processing workflows.
      Integrated key e-commerce features including product search, user reviews, shopping cart, and checkout system to enhance functionality and usability.
      Applied secure authentication and session management protocols to protect user data and improve platform reliability.`,
      link: '',
      githubLink: 'https://github.com/n-ranjithkumar'
    },
    {
      name: 'Movie Recommendation System',
      image: MovieImg,
      technologies: ['Python', 'CNN', 'Pandas', 'Tensorflow', 'Scikit-learn'],
      desc: `Developed a content-based recommendation system using metadata to recommend movies and predict target audience preferences.
      Applied TF-IDF, cosine similarity, and SMOTE techniques to enhance recommendation accuracy and model robustness.
      Implemented Stratified K-Fold validation for balanced training and reliable audience targeting.`,
      link: '',
      githubLink: 'https://github.com/n-ranjithkumar'
    },
    {
      name: 'Web Application For Standardization of Glucocorticoids',
      image: GulcoImg,
      technologies: ['MERN Stack', 'AES-128', 'Bcrypt', 'CSRF', 'SSL'],
      desc: `Developed a web application using the MERN stack to standardize cumulative glucocorticoid dosage across different treatment types and administration routes.
        Implemented AES-128 encryption on the client side for securing user passwords before transmission, and used Bcrypt hashing on the server side for securely storing credentials in MongoDB.
       Integrated CSRF token validation for each client request (login, register, transaction) to protect against cross-site request forgery attacks.
        Configured self-signed SSL certificates to establish secure HTTPS connections and safeguard communication between the frontend and backend.`,
      link: '',
      githubLink: 'https://github.com/n-ranjithkumar'
    },
  
  ]
}

export const contact = {
  title: 'Contact',
  desc: 'Don’t hesitate to get in touch!',
  email_heading: 'Send an Email',
  input_placeholders: [
    'Your Name',
    'Your Email'
  ],
  text_placeholders: [
    'Message'
  ],
  button_content: 'Send'
}

export const footer = {
  name: 'Ranjithkumar N',
  links: {
    linkedin: 'https://www.linkedin.com/in/ranjithkumar-n-420459317/',
    github: 'https://github.com/n-ranjithkumar',
    mail: 'mailto:nranjithkumar720@gmail.com'
  },
  copyright_message: '© 2025 Ranjithkumar N. All rights reserved.'
}
