import {createPortal} from 'react-dom';
import {motion} from "framer-motion";

export default function Modal({title, children, onClose}) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose}/>
      <motion.dialog
        variants={{
          hidden: {
            width: "30rem",
            height: 0,
            opacity: 0
          },
          visible: {
            height: 'auto',
            opacity: 1,
            transition: {
              duration: 0.11
            }
          },
          exit: {
            height: 0,
            transition: {duration: 0.1}
          }
        }}
        initial={'hidden'}
        animate={'visible'}
        exit={{
          height: 0,
          transition: {duration: 0.1}
        }}
        open className="modal">
        <motion.h2
          exit={{opacity: 0, transition: {delay: 0}}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}>
          {title}
        </motion.h2>
        <motion.div
          // exit={{opacity: 0, transition: {delay: 0}}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}>
          {children}
        </motion.div>
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
