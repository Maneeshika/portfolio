import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Samoda Chalith Wijethunga",
    role: "Manager cloud solution - Lanka communications services pvt ltd",
    review: "I highly recommend Maneeshika for their exceptional skills and dedication as a Web Developer",
    rating: 4,
  },
   {
  name: "A.Y.Jayawardana",
  role: "CEO - Divnet software Solution",
   review: "She is a skilled and dependable developer who provided excellent support for my project.",
   rating: 4,
   },
  //  {
  //   name: "Emily Rodriguez",
  //   role: "Founder, DesignLab",
  //   review: "Rare combination of technical expertise and design sensibility. Highly recommend.",
  //    rating: 5,
  //  },
];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="section-padding relative" ref={ref}>
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-[0.3em]">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-4">
            Client <span className="text-gradient">Reviews</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-2xl relative group border-glow transition-all duration-300 flex-1"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/30 group-hover:text-accent/50 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{review.review}"
              </p>

              {/* Author */}
              <div>
                <h4 className="font-medium text-primary text-sm">{review.name}</h4>
                <p className="text-xs text-muted-foreground">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;