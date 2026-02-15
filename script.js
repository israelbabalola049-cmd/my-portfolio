// ============================================
// Tech Information Data
// ============================================
const techInfo = {
  html: {
    name: 'HTML5',
    description: 'HTML5 is the backbone of web development, providing the structure and semantic markup for web pages. I use HTML5 to create accessible, well-structured websites that follow best practices and modern web standards.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path>
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path>
      <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
    </svg>`,
    features: [
      'Semantic markup for better accessibility and SEO',
      'Forms, multimedia, and interactive elements',
      'Canvas and SVG for graphics and animations',
      'Web APIs for enhanced functionality'
    ]
  },
  css: {
    name: 'CSS3',
    description: 'CSS3 is my tool for bringing designs to life. From responsive layouts with Flexbox and Grid to smooth animations and modern styling techniques, I create visually appealing and user-friendly interfaces that work seamlessly across all devices.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#1572B6" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26z"></path>
      <path fill="#33A9DC" d="M64.001 117.062l29.439-8.162 6.926-77.591H64.001z"></path>
      <path fill="#fff" d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.659H64z"></path>
      <path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015z"></path>
      <path fill="#fff" d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.193l22.849-6.334.168-1.882 1.938-21.754z"></path>
      <path fill="#EBEBEB" d="M64.039 43.677v11.138H37.136l-.224-2.503-.507-5.646-.267-2.989zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988z"></path>
    </svg>`,
    features: [
      'Flexbox and Grid for responsive layouts',
      'Animations and transitions for interactivity',
      'CSS variables for maintainable theming',
      'Modern selectors and pseudo-elements'
    ]
  },
  javascript: {
    name: 'JavaScript',
    description: 'JavaScript (ES6+) is where I add interactivity and dynamic functionality to web applications. From DOM manipulation to asynchronous operations and modern frameworks, I leverage JavaScript to create engaging, responsive user experiences.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#F0DB4F" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-10.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
    </svg>`,
    features: [
      'ES6+ syntax and modern JavaScript features',
      'Asynchronous programming with Promises and async/await',
      'DOM manipulation and event handling',
      'Functional and object-oriented programming'
    ]
  },
  react: {
    name: 'React',
    description: 'React is my go-to framework for building dynamic, component-based user interfaces. I use React to create reusable components, manage state effectively with hooks, and build scalable single-page applications with excellent performance.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#61DAFB" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
    </svg>`,
    features: [
      'Component-based architecture for reusability',
      'React Hooks for state and lifecycle management',
      'Virtual DOM for optimal performance',
      'JSX for intuitive component syntax'
    ]
  },
  nodejs: {
    name: 'Node.js',
    description: 'Node.js enables me to build powerful server-side applications using JavaScript. I leverage Node.js for creating RESTful APIs, handling backend logic, and building full-stack applications with seamless frontend-backend integration.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#83CD29" d="M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073z"></path>
    </svg>`,
    features: [
      'Server-side JavaScript runtime',
      'Express.js for building RESTful APIs',
      'NPM ecosystem for packages and tools',
      'Asynchronous, event-driven architecture'
    ]
  },
  python: {
    name: 'Python',
    description: 'Python is my language of choice for algorithms, data structures, scripting, and exploring AI/ML concepts. Its clean syntax and powerful libraries make it ideal for problem-solving, automation, and building intelligent applications.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#3776AB" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
    </svg>`,
    features: [
      'Clean, readable syntax for rapid development',
      'Strong foundation in data structures and algorithms',
      'Libraries for AI/ML exploration (NumPy, Pandas)',
      'Versatile for scripting and automation'
    ]
  },
  mysql: {
    name: 'MySQL',
    description: 'MySQL is my relational database management system of choice. I design efficient database schemas, write optimized queries, and manage data relationships to build robust backend systems with reliable data persistence.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#00618A" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.952 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"></path>
    </svg>`,
    features: [
      'Relational database design and normalization',
      'Complex SQL queries and joins',
      'Database optimization and indexing',
      'Transaction management and data integrity'
    ]
  },
  mongodb: {
    name: 'MongoDB',
    description: 'MongoDB is my NoSQL database solution for flexible, document-based data storage. I use it to build scalable applications with dynamic schemas, enabling rapid development and efficient handling of unstructured data.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#47A248" d="M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073z"></path>
    </svg>`,
    features: [
      'Document-oriented NoSQL database',
      'Flexible schema design for rapid iteration',
      'Powerful aggregation framework',
      'Horizontal scalability and high performance'
    ]
  },
  git: {
    name: 'Git',
    description: 'Git is essential to my development workflow for version control and collaboration. I use Git and GitHub to track changes, manage branches, collaborate on projects, and maintain a clean commit history across all my work.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
    </svg>`,
    features: [
      'Version control for code management',
      'Branching and merging strategies',
      'GitHub for collaboration and open source',
      'Commit history and code review workflows'
    ]
  },
  tailwind: {
    name: 'Tailwind CSS',
    description: 'Tailwind CSS accelerates my frontend development with utility-first CSS classes. I use it to rapidly build responsive, custom-designed interfaces without writing custom CSS, resulting in cleaner code and faster development cycles.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#38BDF8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z"/>
    </svg>`,
    features: [
      'Utility-first CSS framework',
      'Rapid prototyping and development',
      'Highly customizable design system',
      'Built-in responsive design utilities'
    ]
  },
  vite: {
    name: 'Vite',
    description: 'Vite is my modern build tool for lightning-fast development. With instant server start, hot module replacement, and optimized builds, Vite significantly improves my development experience and project performance.',
    icon: `<svg viewBox="0 0 128 128">
      <defs>
        <linearGradient id="vite-gradient" x1="6" y1="33" x2="235" y2="344" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#41D1FF"/>
          <stop offset="1" stop-color="#BD34FE"/>
        </linearGradient>
      </defs>
      <path fill="url(#vite-gradient)" d="M124.766 19.52L67.324 122.238c-1.187 2.121-4.234 2.133-5.437.02L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64 22.076l57.502-7.145c2.607-.324 4.571 2.303 3.264 4.589z"/>
      <path fill="#FFD028" d="M91.745 12.115L49.255 19.475a.694.694 0 0 0-.524.333L31.13 52.933c-.308.547.058 1.229.68 1.264l19.689.948a.695.695 0 0 1 .615.422l8.999 23.265c.203.524.87.663 1.232.257l35.718-40.164c.402-.452.15-1.176-.425-1.22l-17.304-1.548a.695.695 0 0 1-.598-.414L92.421 12.82c-.24-.533-.98-.837-1.456-.705z"/>
    </svg>`,
    features: [
      'Lightning-fast cold server start',
      'Instant hot module replacement (HMR)',
      'Optimized production builds',
      'Native ES modules support'
    ]
  },
  java: {
    name: 'Java',
    description: 'Java provides me with a solid foundation in object-oriented programming. I use Java to understand core programming concepts, data structures, algorithms, and build robust, platform-independent applications with strong typing.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#EA2D2E" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
      <path fill="#0074BD" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
      <path fill="#EA2D2E" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
      <path fill="#0074BD" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
      <path fill="#EA2D2E" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
    </svg>`,
    features: [
      'Strong object-oriented programming foundation',
      'Platform-independent with JVM',
      'Robust type system and memory management',
      'Extensive standard library and frameworks'
    ]
  },
  c: {
    name: 'C',
    description: 'C gives me deep understanding of low-level programming and computer architecture. I use C to grasp memory management, pointers, and how software interacts with hardware, providing a strong foundation for all programming.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
      <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
      <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
    </svg>`,
    features: [
      'Low-level programming and memory management',
      'Understanding of pointers and data structures',
      'System programming and performance optimization',
      'Foundation for understanding computer architecture'
    ]
  },
  cpp: {
    name: 'C++',
    description: 'C++ builds on C with object-oriented features and modern programming paradigms. I use C++ to understand advanced concepts like templates, STL, and how to write efficient, high-performance code for complex applications.',
    icon: `<svg viewBox="0 0 128 128">
      <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
      <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
      <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM82 53h5v6h6v5h-6v6h-5v-6h-6v-5h6v-6zm24 0h5v6h6v5h-6v6h-5v-6h-6v-5h6v-6z"/>
    </svg>`,
    features: [
      'Object-oriented programming with classes',
      'STL (Standard Template Library) for data structures',
      'Templates and generic programming',
      'High-performance computing and system design'
    ]
  }
};

// ============================================
// Navigation Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ============================================
// Mobile Navigation Toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// Smooth Scrolling
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ============================================
// Tech Card Modal
// ============================================
const techCards = document.querySelectorAll('.tech-card');
const techModal = document.getElementById('techModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

if (techCards && techModal && modalClose && modalBody) {
  techCards.forEach(card => {
    card.addEventListener('click', () => {
      const tech = card.getAttribute('data-tech');
      const info = techInfo[tech];
      
      if (info) {
        modalBody.innerHTML = `
          <div class="modal-icon">${info.icon}</div>
          <h3>${info.name}</h3>
          <p>${info.description}</p>
          <div class="modal-features">
            <h4>Key Capabilities</h4>
            <ul>
              ${info.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
        `;
        techModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalClose.addEventListener('click', () => {
    techModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  techModal.addEventListener('click', (e) => {
    if (e.target === techModal) {
      techModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && techModal.classList.contains('active')) {
      techModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// ============================================
// Form Enhancement
// ============================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const button = this.querySelector('button[type="submit"]');
    if (button) {
      const originalText = button.textContent;
      
      button.textContent = 'Sending...';
      button.disabled = true;
      
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 3000);
    }
  });
  
  const inputs = contactForm.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
}

// ============================================
// Active Navigation Link
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href && href.includes('#') && href.split('#')[1] === current) {
      link.classList.add('active');
    }
  });
});

// ============================================
// Parallax Effect
// ============================================
let ticking = false;

function parallaxScroll() {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-background');
  
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(parallaxScroll);
    ticking = true;
  }
});

// ============================================
// Hero Image Animation
// ============================================
const heroImage = document.querySelector('.hero-profile-image');

if (heroImage) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight) {
      const rotation = scrolled * 0.05;
      heroImage.style.transform = `rotate(${rotation}deg)`;
    }
  });
}

// ============================================
// Performance Logging
// ============================================
window.addEventListener('load', () => {
  const loadTime = performance.now();
  console.log(`%cPortfolio loaded in ${Math.round(loadTime)}ms`, 'color: #0d9488; font-size: 12px;');
  console.log('%c👋 Welcome! Built by Israel Babalola', 'color: #0d9488; font-size: 14px; font-weight: bold;');
});

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  
  setTimeout(() => {
    document.querySelectorAll('.section').forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight) {
        section.classList.add('visible');
      }
    });
  }, 100);
});
