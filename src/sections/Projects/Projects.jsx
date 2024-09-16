import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/Design uten navn.png';
import freshBurger from '../../assets/pngwing.com (6).png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/pngwing.com (5).png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/PuneethKanike/my-portfolio"
          h3="Puneeth K"
          p="Portfolio App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/PuneethKanike/mern-estate"
          h3="LiveLink"
          p="Real-Estate App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/PuneethKanike/MERN--Auth"
          h3="MERN-Auth"
          p="Authentication App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/PuneethKanike/"
          h3="upcoming"
          p="upcomig App"
        />
        
        
      </div>
    </section>
  );
}

export default Projects;