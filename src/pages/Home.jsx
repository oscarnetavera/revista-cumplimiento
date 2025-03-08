import { motion } from "framer-motion";
import Banner from "../components/Banner";
import Articles from "../components/Articles";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <>
      <Banner />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Articles />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <AboutUs />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <ContactUs />
      </motion.div>
    </>
  );
};

export default Home;
