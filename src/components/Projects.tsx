import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {  Github } from "lucide-react";
import library_management from "@/assets/library_management.jpg";
import feedback from "@/assets/feedback1.jpg";
import todolistapp from "@/assets/todo.jpg";
import style from "@/assets/style.jpg";


const projects = [
  {
    title: "Feedback System",
    description: "Web-based system for collecting and managing feedback for the Ministry of Agriculture, Galle.",
    image: feedback,
    tags: ["HTML 5", "Boostrap","PHP" ,"mysql"],
    githubUrl: "https://github.com/Maneeshika",
  },
  {
    title: "Match your dress",
    description: "AI-powered web app that instantly suggests the best dress matches, colors, and styles for a perfect look.",
    image: style,
    tags: ["React-Vite", "tailwind css"],
    githubUrl: "https://github.com/Maneeshika",
  },
  {
    title: "To do app",
    description: "Python-based to-do application for creating, managing, and tracking daily tasks efficiently.",
    image: todolistapp,
    tags: ["Python", "custom TK inter", "mysql"],
    githubUrl: "https://github.com/Maneeshika",
  },
  {
    title: "Library Management System",
    description: "A library management system with easy book tracking, report viewing, and downloading, built using MVC architecture.",
    image: library_management,
    tags: ["HTML 5","Boostrap","PHP","mysql"],
    githubUrl: "https://github.com/Maneeshika",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Decorative blob */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-[0.3em]">
            Project
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group glass-strong rounded-2xl overflow-hidden border-glow transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Hover Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  {/* <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-primary hover:bg-accent/20 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a> */}
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-primary hover:bg-accent/20 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
