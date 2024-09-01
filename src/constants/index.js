import project1 from "../assets/projects/zubin_image.jpeg";
import project2 from "../assets/projects/ufc_project_image.png";
//import project3 from '../assets/projects/portfolioWebsite.png'
import project3 from '../assets/projects/portfolioWebsite.jpeg'

export const HERO_CONTENT = `Hi! I am a Year 3 BEng in Computer Engineering student at The Hong Kong University of Science and Technology, pursuing a minor in Mathematics.`;
export const HERO_CONTENT2 = `I am interested in Data Science and AI, with a focus on building NLP and machine learning projects.`;


export const ABOUT_TEXT = `Hello, I’m Baha!`;

export const ABOUT_TEXT1 = `I enjoy building automation projects using large language models and NLP frameworks. My work includes extensive experience in dataset building and fine-tuning language models.`;

export const ABOUT_TEXT2 = `Recently, I also embarked on my journey of participating in hackathons, and our team emerged as the winners of the Morgan Stanley Code to Give Hackathon 2024!`;

export const ABOUT_TEXT3 = `When I’m not immersed in tech, you’ll find me enjoying combat sports. I’ve taken classes in boxing and wrestling, and I’m a huge UFC fan!`;

export const EXPERIENCES = [
  {
    year: "July 2024 - August 2024",
    role: "Software Engineering Intern",
    company: "OpenClass",
    description:[ `Utilized Supabase (Postgres) as a vector database to store and query text embeddings and built a full-stack chatbot that integrates query results.`,
`Created and refined a recommendation system using a Model-Based Collaborative Filtering method.`,
`Implemented a Docker Dev Container to streamline testing and deployment of new features to the project codebase.`],
    technologies: ["Python", "Supabase", "LangChain", "scikit-learn"],
  },
  {
    year: "June 2024 - July 2024",
    role: "Junior Backend Developer",
    company: "Varmeego",
    description: [`Built RESTful web services using Spring Framework to process HTTP GET requests and return JSON responses via a REST Controller.`,
`Deployed a Spring Boot server application for handling HTTP file uploads with a StorageService interface for storage layer interactions and implemented file validation using Apache POI based on System Requirements Specification (SRS).`,
`Upgraded documentation for backend service functions, including input data/file formats, database access, and interface design for Functional Specification Document (FSD).`],
    technologies: ["Java", "Spring", "Apache POI"],
  },
  {
    year: "December 2023 – January 2024",
    role: "Data Scientist",
    company: "Super Chain",
    description: [`Developed NLP solutions using open-source LLMs (Llama 2, GPT-3.5 Turbo), focusing on fine-tuning and inference techniques such as LoftQ and Chain-of-Thought Prompting.`,
`Designed a real-time Text-to-Speech and voice cloning service with API integration capabilities.`,
`Created a domain-specific audio dataset to enhance speech recognition accuracy of OpenAI’s Whisper ASR model.`,
`Employed vector stores and LLMs to build Retrieval Augmented Generation (RAG) models.`,
`Built web interfaces with Gradio for live demos and debugging during model training.`],
    technologies: ["Python", "LangChain", "Transformers", "Chroma"],
  },
];

export const PROJECTS = [
  {
    title: "The Zubin Network - Morgan Stanley Code to Give Hackathon Winner",
    image: project1,
    description:
      "Welcome to Zubin Network, a mobile-first progressive web app developed to simplify event management and volunteer coordination for The Zubin Foundation. The platform is designed to ensure a smooth experience for both users and administrators, empowering participants, volunteers, and organizers to engage more effectively.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "MongoDB", "Python", "LangChain"],
    source: "https://github.com/ArcticKangaroo/ProjectCTG"
  },
  {
    title: "UFC Fight Prediction",
    image: project2,
    description:
      "Random Forest Classifier trained to predict the outcomes of UFC (Ultimate Fighting Championship) fights using fight data from UFC Stats. The model is built using Python and the scikit-learn module.",
    technologies: ["Python", "scikit-learn"],
    source: "https://github.com/b-temirov/UFC-fight-prediction"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website for projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
    source: "https://github.com/b-temirov/portfolio-website"
  },
];

export const CONTACT = {
  linkedin:"https://www.linkedin.com/in/bakhtiyartemirov",
  GitHub: "github.com/b-temirov",
  phoneNo: "+852 9372 7175",
  email: "btemirov@connect.ust.hk",
};
