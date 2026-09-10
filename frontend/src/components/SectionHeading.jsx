import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }) => {
  const alignCls = align === "left" ? "text-left items-start" : "text-center items-center";
  const subtitleCls = align === "left" ? "mx-0" : "mx-auto";

  return (
    <motion.div
      className={`relative mb-14 flex flex-col gap-3 ${alignCls}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeIn}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/45 font-sans">
          <span className="h-px w-8 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          {eyebrow}
          <span className="h-px w-8 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
        <span className="relative inline-block pb-2">
          {title}
          <span className="absolute -bottom-0.5 left-0 h-1 w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
        </span>
      </h2>
      {subtitle && (
        <p className={`max-w-2xl pt-1 text-base sm:text-lg font-light text-white/60 leading-relaxed ${subtitleCls}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
