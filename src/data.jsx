import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNode } from 'react-icons/fa';
import {SiExpress, SiPostgresql} from "react-icons/si";



export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact', text: 'contact' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-slate-500' />
   
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-slate-500' />,
   
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-slate-500' />,
   
  },
  {
    id: nanoid(),
    title: 'PostgreSQL',
    icon: <SiPostgresql className='h-16 w-16 text-slate-500' />,
   
  },
  {
    id: nanoid(),
    title: 'Express',
    icon: <SiExpress className='h-16 w-16 text-slate-500' />,
  
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNode className='h-16 w-16 text-slate-500' />,
   
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://i.imgur.com/g6V3m6T.gif',
    url: 'https://pomodoro-ochre.vercel.app/',
    github: 'https://github.com/StephanyCisn/Pomodoro',
    title: 'Pomodoro Timer',
    text: 'Built a productivity timer based on the Pomodoro technique using React and React hooks. ',
    techStack:"Built with React and React Hooks"
  },
  {
    id: nanoid(),
    img: 'https://i.imgur.com/RQ0gUMm.gif',
    url: 'https://grubdash-fb47.onrender.com',
    github: 'https://github.com/StephanyCisn/Grubdash-backend',
    title: 'Grubdash',
    text: 'Built an API - defining routes, URL’s and middleware to perform CRUD operations on dishes and orders resources. Routes: /orders and /dishes provide information on resources',
    techStack:"Built with Express and Node.js"
  },
  {
    id: nanoid(),
    img: 'https://i.imgur.com/WwqNuHz.gif',
    url: 'https://restaurant-reservation-frontend-6j8c.onrender.com',
    github: 'https://github.com/StephanyCisn/starter-restaurant-reservation',
    title: 'Restaurant Reservation',
    text: 'This application is for creating and managing tables and reservations for a hypothetical restaurant.',
    techStack:"Full Stack Application built with PostgreSQL, Express, Node.js, React"
  },
];
