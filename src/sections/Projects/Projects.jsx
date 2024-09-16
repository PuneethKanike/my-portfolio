import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import { motion } from 'framer-motion';

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <motion.div
        className={styles.projectsContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={cardVariants}>
          <ProjectCard
            src={viberr}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="LiveLink"
            p="Real-Estate App"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <ProjectCard
            src={freshBurger}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Fresh Burger"
            p="Hamburger Restaurant"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <ProjectCard
            src={hipsster}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Hipsster"
            p="Glasses Shop"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <ProjectCard
            src={fitLift}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="FitLift"
            p="Fitness App"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
