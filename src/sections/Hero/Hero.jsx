import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import whatsapplight from '../../assets/whatsapp-light.svg';
import whatsappdark from '../../assets/whatsapp-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const whatsappIcon = theme === 'light' ? whatsappdark : whatsapplight;

  // Framer Motion scroll animations
  const { scrollYProgress } = useScroll();
  const yPosition = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="hero" className={styles.container}>
      <motion.div
        className={styles.colorModeContainer}
        style={{ y: yPosition }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Puneeth Kanike"
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div
        className={styles.info}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <h1>
          Puneeth
          <br />
          Kanike
        </h1>
        <h2>Full-stack Developer</h2>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="https://wa.link/1g6hqa" target="_blank">
            <img src={whatsappIcon} alt="Whatsapp icon" />
          </a>
          <a href="https://github.com/PuneethKanike/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/puneeth-kanike/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </motion.span>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Skilled in building responsive, user-focused web applications using React, Node.js, and MongoDB. I enjoy turning ideas into functional products, and I’m always eager to learn and adapt to new technologies.
        </motion.p>
        <motion.a
          href={CV}
          download
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="hover">Resume</button>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
