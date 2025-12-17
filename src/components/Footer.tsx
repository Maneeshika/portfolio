import { Github, Linkedin,  X , Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container-custom px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span>© 2025 Manee — Develop By Maneeshika</span>
          <Heart size={14} className="text-accent fill-accent" />
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/Maneeshika", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/maneeshika-pawananjali-400b19310", label: "LinkedIn" },
            { icon:  X , href: "https://x.com/MPawananjali", label: "X" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
