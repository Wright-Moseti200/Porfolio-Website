import { Reveal } from '../components/motion/Reveal';
import '../App.css';

const services = [
  {
    icon: 'https://img.icons8.com/?size=100&id=4i8EFdsgyQ2M&format=png&color=000000',
    title: 'Frontend Dev',
    body: 'Building responsive and interactive user interfaces using modern technologies like React.js and Tailwind CSS',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=4i8EFdsgyQ2M&format=png&color=000000',
    title: 'Backend Dev',
    body: 'Developing robust server-side logic, APIs and database schemas using Node.js, Express and MongoDB',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=j9aP1JRrdinu&format=png&color=000000',
    title: 'Web Design',
    body: 'Creating visually appealing and user-centric designs that focus on user experience and brand identity',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=wVtm1JDKieWL&format=png&color=000000',
    title: 'System Design',
    body: 'Designing scalable architectures to ensure reliability and performance',
  },
];

const Aboutme = () => (
  <div className="mt-14 px-4 lg:px-0" id="about">
    <Reveal animation="fade-down">
      <h1 className="text-center text-4xl lg:text-5xl font-semibold">About me &amp; Services</h1>
    </Reveal>

    <div className="flex flex-col lg:flex-row mt-20 justify-center items-center gap-5">
      <Reveal animation="fade-right" delay={0.1} className="w-full max-w-sm lg:w-96">
        <div className="flex h-full flex-col p-6 border border-black rounded-sm bg-white">
          <img
            src="https://img.icons8.com/?size=100&id=4kuCnjaqo47m&format=png&color=000000"
            alt="profile picture"
            className="h-10 w-10"
          />
          <h1 className="font-bold text-lg mt-2">Who I Am</h1>
          <p className="mt-2">
            I am an experineced FullStack Developer with years of professional expertise. I
            specialize in building high-performance,accesible and scalable web applications
          </p>
          <p className="mt-2">
            My passion lies in bridging the gap between elegant design and robust engineering. I
            build systems
          </p>
          <hr className="mt-2" />
          <div className="flex justify-around mt-2">
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">2+</h1>
              <p>Years</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">20+</h1>
              <p>Projects</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">100%</h1>
              <p>Success</p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <Reveal
            key={service.title}
            className="w-full lg:w-96"
            animation={['fade-up', 'flip-left', 'zoom-in', 'fade-up-right'][index % 4]}
            delay={0.2 + index * 0.1}
            duration={index % 4 === 1 ? 1.35 : 1.05}
          >
            <div className="h-full p-5 border rounded-sm border-black bg-white">
              <img src={service.icon} alt="profile picture" className="h-5 w-5" />
              <h1 className="text-lg font-bold mt-2">{service.title}</h1>
              <p className="mt-2">{service.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
);

export default Aboutme;
