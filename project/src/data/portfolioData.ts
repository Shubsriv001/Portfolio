import { TimelineItem, Project, NavItem, Social, SkillCategory } from '../types';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const socialLinks: Social[] = [
  { id: 'github', name: 'GitHub', icon: 'GithubIcon', url: 'https://github.com/Shubsriv001' },
  { id: 'linkedin', name: 'LinkedIn', icon: 'LinkedinIcon', url: 'https://linkedin.com/in/shubhanshu90' },
  { id: 'twitter', name: 'Twitter', icon: 'TwitterIcon', url: '#' },
  { id: 'instagram', name: 'Instagram', icon: 'InstagramIcon', url: '#' },
];

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    title: 'Android Developer (Intern)',
    organization: 'KabiraTech',
    period: 'Aug 2024 - Aug 2025',
    description: 'working on mobile app design and development using Kotlin. Focused on enhancing app performance, user experience, and optimizing code for efficient cross-platform functionality.',
    tags: ['Kotlin', 'Firebase', 'Supabase', 'Flutter'],
    type: 'experience',
  },
  {
    id: '2',
    title: 'React Developer (Intern)',
    organization: 'Gokboru Tech Pvt. Ltd',
    period: 'Sep 2024 - Nov 2024',
    description: 'Developed responsive web applications using React and collaborated with design teams to implement perfect UIs.',
    tags: ['React', 'JavaScript', 'CSS', 'Tailwind'],
    type: 'experience',
  },
  {
    id: '4',
    title: 'Bachelor of Computer Science',
    organization: 'Lovely Professional University (LPU)',
    period: '2022 - 2026',
    description: 'Pursuing foundational studies in computer science with a current focus on web technologies and application development.',
    tags: ['React','Algorithms', 'Data Structures', 'Web Development','Android Development'],
    type: 'education',
  },
  {
    id: '5',
    title: 'Intermediate XII',
    organization: 'St. Francis School (ISC)',
    period: '2021 - 2022',
    description: 'Studied Physics, Chemistry, Mathematics, and Computer Science in intermediate, building a strong foundation in both science and programming.',
    tags: ['Physics', 'Chemistry', 'Mathematics','Computer Science'],
    type: 'education',
  },
  {
    id: '6',
    title: 'Matriculation X',
    organization: 'St. Francis School (ICSE)',
    period: '2019 - 2020',
    description: 'Completed matriculation with a strong academic foundation in core subjects.',
    tags: ['Mathematics', 'Science', 'Social Studies','Computer Science'],
    type: 'education',
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    animation: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
    skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'Kotlin', 'PHP'],
  },
  
  {
    category: 'Frontend Development',
    animation: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
    skills: ['React', 'HTML5', 'Bootstrap', 'Laravel', 'Angular', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    animation: 'https://assets9.lottiefiles.com/packages/lf20_kkflmtur.json',
    skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'RESTful APIs', 'Mysql','Supabase'],
  },
  {
    category: 'Mobile Development',
    animation: 'https://assets3.lottiefiles.com/packages/lf20_xl3sktpc.json',
    skills: [ 'Android Studio', 'Flutter','Android','iOS', 'Kotlin', 'Firbase','Supabase'],
  },
  {
    category: 'Tools & DevOps',
    animation: 'https://assets5.lottiefiles.com/packages/lf20_svy4ivvy.json',
    skills: ['Git & GitHub', 'Figma', 'VS Code', 'Postman', 'Android Studio','Flutter','Postman'],
  },
];


export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Food Delivery App',
    description: 'A fully responsive Food Delivery App with cart functionality and payment integration.',
    image: 'src/utils/Food_delivery_app_pic.png',
    tags: ['React', 'Node JS', 'MongoDB', 'Stripe'],
    category: 'Web App',
    demoLink: 'notdeployed.html',
    codeLink: 'https://github.com/username/ecommerce',
    details: 'Built a comprehensive food delivery solution featuring a diverse food catalog, user authentication, cart functionality, checkout process, and order management.',
    status:'completed'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Built a task manager with authentication, task assignment, deadlines, priorities, and edit/delete features for efficient task tracking.',
    image: 'src/utils/Screenshot 2025-04-21 230929.png',
    tags: ['React', 'Node JS', 'MongoDB'],
    category: 'Web App',
    demoLink: 'https://task-management-app-1-4a5o.onrender.com',
    codeLink: 'https://github.com/username/task-app',
    details: 'A modern task management web app designed to streamline productivity and collaboration by enabling users to efficiently manage and track their tasks with ease.',
    status:'completed',
  },
  {
    id: '3',
    title: 'Climate Sense',
    description: 'A smart app that gives farmers real-time weather alerts and AI-based farming tips to protect crops and boost yield.',
    image: 'src/utils/Climate_sense_pic.png',
    tags: ['Kotlin', 'Android SDK','Supabase', 'OpenWeather API','AI API'],
    category: 'Cross Platform',
    demoLink: 'inprogress.html',
    codeLink: 'https://github.com/username/weather-app',
    details: 'WeatherSense is an AI-integrated weather forecasting app designed specifically for farmers. It not only provides real-time weather updates and alerts for harsh conditions but also offers personalized, AI-driven farming suggestions to help optimize crop yield and protect farmland. Key features include user authentication, location-based alerts, and an intuitive interface focused on agricultural needs.',
    status:'on-going'
  },
  {
    id: '4',
    title: 'Budget Tracking App',
    description: 'A smart budget tracking app with monthly filters, charts, and Firebase for real-time expense management.',
    image: 'src/utils/Budget_tracking_pic.png',
    tags: ['Kotlin', 'Android SDK','Firebase'],
    category: 'Cross Platform',
    demoLink: 'inprogress.html',
    codeLink: 'https://github.com/username/weather-app',
    details: 'A budget tracking app that records income and expenses, displays insights using charts and progress bars, and allows monthly filtering. Built with Firebase for secure and real-time data handling.',
    status:'on-going'
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'A modern portfolio website with dark mode and animations.',
    image: 'src/utils/Portfolio_pic.png',
    tags: ['React', 'Tailwind CSS'],
    category: 'Website',
    demoLink: 'sameproject.html',
    codeLink: 'https://github.com/username/portfolio',
    details: 'Designed and developed a personal portfolio website with modern UI/UX principles.',
  },
  {
    id: '6',
    title: 'Youtube Clone',
    description: 'YouTube Clone – React App with YouTube API Integration',
    image: 'src/utils/youtube_clone_pic.png',
    tags: ['React', 'CSS', 'Youtube API'],
    category: 'Web App',
    demoLink: 'notdeployed.html',
    codeLink: 'https://github.com/username/portfolio',
    details: 'A YouTube clone built using React and CSS, integrated with the YouTube Data API to enable video search, playback, and seamless browsing. Features include dynamic video rendering, responsive UI, and real-time search functionality.',
    status:'completed'
  },
  {
    id: '7',
    title: 'Starbucks Clone',
    description: 'Starbucks Clone - built similar frontend usingg React.',
    image: 'src/utils/starbucks_clone_pic.png',
    tags: ['React','CSS'],
    category: 'Web App',
    demoLink: 'notdeployed.html',
    codeLink: 'https://github.com/username/portfolio',
    details: 'Starbucks Clone - built similar frontend usingg React.',
    status:'completed'
  },

  {
    id: '8',
    title: 'Children Learning App',
    description: 'KidsLearn - Interactive Learning App for Children (Ages 3-6).',
    image: 'src/utils/Children_learning_pic.png',
    tags: ['Flutter','Supabase'],
    category: 'Cross Platform',
    demoLink: 'inprogress.html',
    codeLink: 'https://github.com/username/portfolio',
    details: 'An engaging Flutter-based learning app for children aged 3 to 6, backed by Supabase. The app features interactive games, music, poems, and stories across categories like Classroom, Playground, and more, designed to make early education fun and engaging.',
    status:'on-going'
  },
  {
    id: '9',
    title: 'Tic Tac Toe Game',
    description: 'A classic Tic Tac Toe game built with HTML, CSS, JS.',
    image: 'src/utils/tic-tac-toe.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web App',
    demoLink: 'https://shubsriv001.github.io/Tic-Tac-Toe/',
    codeLink: 'https://github.com/Shubsriv001/Tic-Tac-Toe',
    details: 'A classic Tic Tac Toe game built with HTML, CSS, JS, featuring a simple and intuitive interface, and engaging animations.',
    status:'completed'
  },

];

export const aboutMeData = {
  name: 'Shubhanshu',
  title: 'Full-Stack Web, iOS & Android Developer',
  bio:'I’m Shubhanshu Kumar Srivastava, a Full-Stack Developer skilled in React.js, Node.js, MongoDB, and mobile app development with Kotlin and Flutter Flow. Currently pursuing B.Tech in CSE, I’ve built several full-stack and cross-platform apps and completed an internship at Gokboru Tech. I’m passionate about building clean, scalable solutions and continuously learning through real-world projects and certifications.',
  location: 'Varanasi Uttar Pradesh, INDIA',
  email: 'shubhsriv34@gmail.com',
};