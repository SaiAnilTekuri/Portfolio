import React, { useRef, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { Icon } from '@iconify/react';

const Portfolio = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };
  
//   const hoverColor = {
//     color: "#4299e1", // Tailwind's blue-500
//     transition: { duration: 0.3 }
//   };

  const AnimatedSection = ({ id, className, children }) => {
    const controls = useAnimation();
    const [inViewRef, inView] = useInView({
      threshold: 0.2,
    });
    const sectionRef = sectionRefs[id];

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    // Merge refs
    const setRefs = (element) => {
      inViewRef(element);
      sectionRef.current = element;
    };

    return (
      <motion.section
        ref={setRefs}
        id={id}
        className={className}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        {children}
      </motion.section>
    );
  };

  const sections = [
    { id: 'home', icon: 'mdi:home', title: 'Home' },
    { id: 'about', icon: 'mdi:account', title: 'About Me' },
    { id: 'experience', icon: 'mdi:briefcase', title: 'Experience' },
    { id: 'projects', icon: 'mdi:folder-multiple', title: 'Projects' },
    { id: 'skills', icon: 'mdi:certificate', title: 'Skills and Certifications' },
    { id: 'education', icon: 'mdi:school', title: 'Education' },
    { id: 'contact', icon: 'mdi:email', title: 'Contact Me' },
  ];

  const skills = [
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'C', icon: 'devicon-c-plain colored' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-original colored' },
    { name: 'Terraform', icon: 'devicon-terraform-plain colored' },
    { name: 'Jenkins', icon: 'devicon-jenkins-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Linux', icon: 'devicon-linux-plain colored' },
    { name: 'Spring', icon: 'devicon-spring-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Flask', icon: 'devicon-flask-original colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'Pandas', icon: 'devicon-pandas-plain colored' },
    { name: 'Numpy', icon: 'devicon-numpy-plain colored' },
    { name: 'Tensorflow', icon: 'devicon-tensorflow-original colored' },
    { name: 'Grafana', icon: 'devicon-grafana-original colored' },
    { name: 'Unity', icon: 'devicon-unity-original colored' },
    { name: 'Blender', icon: 'devicon-blender-original colored' },
  ];

  const experiences = [
    {
      company: "Wipro Limited",
      image: "/images/wipro-logo.png",
      roles: "DevOps Engineer · Automation · Cloud",
      description: [
        "Spearheaded the groundbreaking project 'ENIQ Stats', resulting in a remarkable 50% increase in project deliverables. Recognized as 'Wunderkind of the Year - 2021' for exceptional performance.",
        "Developed and maintained over 5 full-stack applications using Java, JavaScript, and various web technologies.",
        "Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 30% and post-deployment issues by 20%.",
        "Orchestrated collaboration among cross-functional teams to manage staging environments, achieving an impressive 99.9% uptime for seamless software testing and validation.",
        "Leveraged AWS services for cloud-based solutions, improving scalability by 40% and reducing latency by 25% for major applications.",
        "Collaborated with offshore teams to optimize development processes, resulting in a 15% improvement in code quality.",
        "Analyzed network performance data from over 1000 nodes, generating comprehensive reports on latency, response times, and potential bottlenecks.",
        "Minimized network downtime by 20% by providing detailed insights into busy hour data, enabling clients to make informed decisions."
      ],
      action: "View Work",
      actionLink: "#"
    },
    {
      company: "Knowledge Lens",
      image: "/images/kl-logo.png",
      roles: "AR/VR Development Intern",
      description: [
        "Engineered a cutting-edge VR SCADA prototype using Unity3D, Blender, and Vuforia, enhancing real-time industrial equipment monitoring and predictive maintenance capabilities, reducing downtime by an impressive 25%.",
        "Developed responsive UI/UX designs for 3 AR/VR applications, ensuring seamless cross-platform compatibility across various device types.",
        "Collaborated closely with industrial experts to improve the interpretability by 25% and scalability by 30% for all the mobile AR/VR solutions developed during the internship.",
        "Applied technical skills in Unity3D, Blender, and Vuforia to create practical and impactful AR/VR applications in an industrial setting."
      ],
      action: "View Work",
      actionLink: "#"
    }
  ];

  const education = [
    {
      school: "University at Buffalo - The State University of New York",
      logo: "/images/ub-logo.svg",
      degree: "Master of Science in Computer Science",
      period: "January 2023 - May 2024",
      details: [
        "Took Course work on Databases, AI, ML, Deep Learning"
      ]
    },
    {
      school: "VIT University",
      logo: "/images/vit-logo.png",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "July 2016 - May 2020",
      details: [
        "Ranked top 10% in the program."
      ]
    }
  ];

  const projects = [
    {
      title: "Fake News Detection",
      image: "/images/fake-news.jpg",
      description: "Developed a machine learning model to accurately identify fake news across multiple languages, achieving an accuracy of 85-90%. Utilized various NLP techniques for data preprocessing and feature extraction, including word embeddings like One Hot Encoding, Bag of Words, TF-IDF, GloVe, and Word2Vec. Implemented advanced deep learning algorithms such as RNN, LSTM, and Transformers to improve accuracy and reduce false positives.",
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Telecommunications Network Management System",
      image: "/images/telecom-db.jpg",
      description: "Modernized a database management system for telecommunications and integrated it with Okta to enhance user access, roles, and permissions management, reducing unauthorized access incidents. Designed a scalable database schema using Entity-Relationship (ER) charts and data normalization techniques, improving data access efficiency.",
      technologies: ["Python", "JavaScript", "Postgresql", "Flask", "HTML", "CSS", "Okta"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Customer Lifetime Value Prediction & Segmentation",
      image: "/images/clv.jpg",
      description: "Designed an analytical framework to predict high-value customers and segment them into different categories to enhance marketing strategies and customer relationship management. Applied K-Nearest Neighbors (KNN) and K-means clustering algorithms to analyze the spending behavior of over 5,000 customers, which helped in effectively segmenting the customer base and optimizing marketing efforts.",
      technologies: ["Python", "Scikit-Learn", "NumPy", "Pandas"],
      liveLink: "https://example.com/cicd-project",
      githubLink: "https://github.com/yourusername/cicd-project"
    },
    {
      title: "Pneumonia Detection from X-Ray Images",
      image: "/images/pneumonia-detection.jpg",
      description: "Developed a machine learning model to detect pneumonia from chest X-ray images, enhancing diagnostic accuracy and speed. Preprocessed and augmented the X-ray images to improve model performance and implemented convolutional neural networks (CNNs) for image classification. Utilized Python for data processing and model development, while integrating Elastic Search to efficiently store and manage large volumes of medical images and diagnostic data. Integrated Grafana, to create interactive dashboards that provided real-time insights into detection accuracy, model improvements, and data trends.",
      technologies: ["Python", "CNN", "Elastic Search", "Grafana"],
      liveLink: "https://example.com/cicd-project",
      githubLink: "https://github.com/yourusername/cicd-project"
    }
  ];

  // eslint-disable-next-line
  useEffect(() => {
    // Add Devicon CSS to the document head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // eslint-disable-next-line
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };


    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSectionId = entry.target.id;
          document.querySelector(`button[data-section="${activeSectionId}"]`).classList.add('bg-gray-200');
        } else {
          const sectionId = entry.target.id;
          document.querySelector(`button[data-section="${sectionId}"]`).classList.remove('bg-gray-200');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r bg-white">
      <nav className={`w-full md:w-64 bg-green-100 p-6 md:fixed md:h-screen md:overflow-y-auto ${isMobileMenuOpen ? 'fixed top-0 left-0 h-full z-50' : 'hidden'} md:block`}>
        <div className="mb-8 center">
          <img src="/images/name-logo.png" alt="NameLogo" whileHover={hoverScale}/>
        </div>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-4">
              <motion.button
                onClick={() => {
                    scrollToSection(section.id);
                    setIsMobileMenuOpen(false);
                }}
                data-section={section.id}
                className="flex items-center w-full p-2 rounded transition-colors duration-200 hover:bg-green-200"
                whileHover={hoverScale}
                
              >
                <Icon icon={section.icon} width="20" height="20" className="mr-2" />
                {section.title}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-1 p-6 md:p-8 md:ml-64">
      <div className="md:hidden fixed top-0 right-0 m-4 z-50">
          <button
            className="p-2 bg-green-100 rounded-full focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
        <AnimatedSection id="home" className="min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 italic">
                It's so nice to meet you, I'm Sai Anil Tekuri :)
              </h1>
              <TypeAnimation
                sequence={['DevOps Engineer', 1000, 'Okta IAM Professional', 1000]}
                style={{ fontSize: '1.5em' }}
                repeat={Infinity}
              />
              <div className="flex space-x-4 mt-6">
                <motion.button className="bg-black text-white px-4 py-2 rounded-full text-sm md:text-base font-semibold" whileHover={{ scale: 1.05, backgroundColor: "#2d3748" }}>
                <a href="https://drive.google.com/file/d/1tuCXKOHwYCI24WY3u4xElejJaTkpnLgM/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                </motion.button>
                <motion.button className="bg-white text-black px-4 py-2 rounded-full text-sm md:text-base font-semibold border border-black" whileHover={{ scale: 1.05, backgroundColor: "#f7fafc" }}>
                  <a href="https://www.linkedin.com/in/anil-tekuri/" target="_blank" rel="noreferrer">LinkedIn</a>
                </motion.button>
              </div>
            </div>
            <div className="md:w-1/3 relative">
              <div className="grid grid-cols-1">
                <img src="/images/Portrait.jpg" alt="Portrait" className="rounded-lg shadow-lg" />
              </div>
              </div>
  </div>
</AnimatedSection>

<AnimatedSection id="about" className="min-h-screen py-12 md:py-16">
  <div className="max-w-4xl mx-auto text-justify">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-700 text-center">About Me</h2>
    <p className="mb-8 text-base md:text-lg">
      I'm an experienced DevOps engineer with a Master's degree in Computer Science from the University at Buffalo.
      My passion lies in streamlining software development and deployment processes using cutting-edge DevOps practices and tools.
      I have extensive hands-on experience with a wide range of technologies, including Docker, Kubernetes, Jenkins, Git, and various cloud platforms like AWS.
      I'm particularly interested in infrastructure as code, continuous integration/continuous deployment (CI/CD) pipelines, and cloud-native applications.
      My background also includes work with IAM tools like Okta and ForgeRock, as well as database management and optimization.
      I'm always eager to explore new technologies and methodologies that can enhance the DevOps lifecycle and drive operational excellence.
    </p>

    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-700 text-center">My Design Approach</h3>

    <p className="mb-8 text-base md:text-lg">
      My approach to design is continually evolving, shaped by ongoing learning and fresh experiences.
      Rather than seeking quick fixes, I advocate for thorough analysis and creative exploration, drawing insights from diverse perspectives to arrive at innovative solutions.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div className="bg-gray-100 p-6 rounded-lg" whileHover={hoverScale}>
        <h3 className="text-xl font-semibold mb-3">Define and Understand</h3>
        <p>
          Understanding user needs, establish a clear understanding of the problem space
          and gathering relevant insights through research and analysis.
        </p>
      </motion.div>

      <motion.div className="bg-gray-100 p-6 rounded-lg" whileHover={hoverScale}>
        <h3 className="text-xl font-semibold mb-3">Ideate and Conceptualize</h3>
        <p>
          Generating creative ideas and explore potential solutions through brainstorming, sketching, and prototyping.
        </p>
      </motion.div>

      <motion.div className="bg-gray-100 p-6 rounded-lg" whileHover={hoverScale}>
        <h3 className="text-xl font-semibold mb-3">Develop and Implement</h3>
        <p>
          Translating prototypes into functional solutions through development and implementation.
          Collaborate with designers, developers, and other stakeholders to ensure that the design vision is successfully brought to life.
        </p>
      </motion.div>

      <motion.div className="bg-gray-100 p-6 rounded-lg" whileHover={hoverScale}>
        <h3 className="text-xl font-semibold mb-3">Test and Iterate</h3>
        <p>
          Gather feedback from users, analyze metrics, and iterate on the design based on insights gathered.
          Ensure that the final product evolves to meet changing user needs and market demands.
        </p>
      </motion.div>
    </div>
  </div>
</AnimatedSection>

<AnimatedSection id="experience" className="min-h-screen py-12 md:py-16">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Work Experience</h2>

    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <motion.div key={index} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg" whileHover={hoverScale}>
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full h-40 md:w-80 md:h-40 relative">
              <img
                src={exp.image}
                alt={exp.company}
                className="absolute inset-0 w-full h-full object-contain"
                />
            </div>
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div className="text-justify">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.company}</h3>
              <p className="text-gray-600 mb-4">{exp.roles}</p>
              <ul className="list-disc pl-6 mb-6">
                {exp.description.map((point, idx) => (
                    <li key={idx} className="mb-2">{point}</li>
            ))}
            </ul>
            </div>
            {/* <a
              href={exp.actionLink}
              className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition duration-300 w-max"
            >
              {exp.action}
            </a> */}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</AnimatedSection>

<AnimatedSection id="projects" className="min-h-screen py-12 md:py-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Projects</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden" whileHover={hoverScale}>
          <img src={project.image} alt={project.title} className="w-full h-40 md:h-48 object-cover" />
          <div className="p-6 text-justify">
            <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</AnimatedSection>

<AnimatedSection id="skills" className="min-h-screen py-12 md:py-16">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-12 md:mb-20">Skills and Technologies</h2>
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {skills.map((skill) => (
        <motion.div key={skill.name} className="flex flex-col items-center" whileHover={hoverScale}>
          <i className={`${skill.icon} text-3xl md:text-5xl mb-2`}></i>
          <span className="text-sm font-bold">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
</AnimatedSection>

<AnimatedSection id="education" className="min-h-screen py-12 md:py-16">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Education</h2>

    <div className="space-y-12">
      {education.map((edu, index) => (
        <motion.div key={index} className="flex flex-col md:flex-row items-center" whileHover={hoverScale}>
          <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src={edu.logo}
              alt={edu.school + " logo"}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-justify">
            <h3 className="text-xl md:text-2xl font-bold">{edu.school}</h3>
            <p className="text-lg font-semibold">{edu.degree}</p>
            <p className="text-gray-600 mb-2">{edu.period}</p>
            {edu.details.map((detail, idx) => (
              <p key={idx} className="text-gray-700">{detail}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</AnimatedSection>

<AnimatedSection id="contact" className="min-h-screen py-12 md:py-16">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Get in Touch!</h2>
      <p className="text-lg mb-8">Building a strong community and achieving goals together is what I'm all about.</p>
      <div className="flex justify-center md:justify-start space-x-6 mb-8">
        <motion.a href="https://www.linkedin.com/in/anil-tekuri/" target="_blank" rel="noopener noreferrer" whileHover={hoverScale}>
          <span className="iconify" data-icon="logos:linkedin-icon" data-inline="false" style={{ fontSize: '40px', color: '#0077b5' }}></span>
        </motion.a>
        <motion.a href="https://github.com/SaiAnilTekuri" target="_blank" rel="noopener noreferrer" whileHover={hoverScale}>
          <span className="iconify" data-icon="logos:github-icon" data-inline="false" style={{ fontSize: '40px', color: '#333' }}></span>
        </motion.a>
        <motion.a href="https://www.instagram.com/typically_a.t" target="_blank" rel="noopener noreferrer" whileHover={hoverScale}>
          <span className="iconify" data-icon="logos:instagram-icon" data-inline="false" style={{ fontSize: '40px', color: '#e4405f' }}></span>
        </motion.a>
        <motion.a href="mailto:saianiltekuri98@gmail.com" whileHover={hoverScale}>
          <span className="iconify" data-icon="logos:google-gmail" data-inline="false" style={{ fontSize: '40px', color: '#d14836' }}></span>
        </motion.a>
      </div>
    </div>
    <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Location Map"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://maps.google.com/maps?q=158+Niagara+Fls+Blvd,+Buffalo&t=&z=15&ie=UTF8&iwloc=&output=embed&markers=color:red%7Clabel:S%7C158+Niagara+Fls+Blvd,+Buffalo`}
      ></iframe>
    </div>
  </div>
</AnimatedSection>

</main>
</div>
);
};

export default Portfolio;