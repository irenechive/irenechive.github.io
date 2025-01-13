import { motion } from 'framer-motion';

const animationConfiguration = {
  initial: { opacity: 0, duration: 1500 },
  animate: { opacity: 1 },
  exit: { opacity: 0, duration: 1500 },
};

const Transition = ({ children, id, className }) => {
  return (
    <motion.div
      id={id}
      className={className}
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >
      {children}
    </motion.div>
  );
};
export default Transition;
