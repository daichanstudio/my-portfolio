import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../type";
import {motion} from 'framer-motion'
import { fadeInUp, stagger, routeAnimation } from "../animations";



const About: NextPage = () => {
  // console.log(services);

  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
      <h6 className="text-base font-medium ">
      <h4 className="my-2 text-2xl font-bold">Hello World!</h4>
        My name is <b>Daichi</b>, a passionate frontend developer from Tokyo.
        I've been studying computer programming for two years.
        I'm still inexperienced but I'll do my best!<br/>
        I'm looking forward to working with you :)
      </h6>
      <div
        className="flex-grow p-4 mt-5 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
 
        <h4 className="my-3 text-2xl font-bold tracking-wide">
          What I am doing
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial='initial' animate='animate'>
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 border-4 border-solid rounded-lg border-light-blue-500 dark:bg-dark-200 md:col-span-1"
              key={service.title}
            >
 
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};


export default About;
