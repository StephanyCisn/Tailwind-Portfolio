import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section class='bg-white py-20' id='about'>
      <div class='align-element grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
          I believe in continuous learning and staying up-to-date with the latest advancements in the tech world. This drive for knowledge fuels my desire to grow as a software engineer and provide cutting-edge solutions to meet the demands of our ever-evolving digital landscape.
          Feel free to explore my portfolio to get a glimpse of my work and the projects I've worked on.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;