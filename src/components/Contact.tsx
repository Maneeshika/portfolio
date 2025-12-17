import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, X } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-[0.3em]">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong p-8 md:p-10 rounded-3xl border-glow"
          >
           {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="relative group flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 flex-1 flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4">
                  <Mail className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href="maneeshikapawananjali@gmail.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors break-all"
                >
                  maneeshikapawananjali@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative group flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 flex-1 flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4">
                  <Phone className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+94741025652"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +94 74 102 5652
                  
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative group flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 flex-1 flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4">
                  <MapPin className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Galle, Sri Lanka
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-6">Follow me</h3>
            <div className="flex items-center justify-center gap-4">
              {[
                { icon: Github, href: "https://github.com/Maneeshika", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/maneeshika-pawananjali-400b19310",
                  label: "LinkedIn"
                },
                { icon: X, href: "https://x.com/MPawananjali", label: "X" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-accent/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-card border border-border rounded-xl group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300">
                    <social.icon size={20} className="text-foreground group-hover:text-accent transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;