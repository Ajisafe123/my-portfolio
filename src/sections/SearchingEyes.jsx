import { motion } from "framer-motion";

const SearchingEyes = ({ eyesLookDirection, blinkLeft, blinkRight }) => (
  <div className="flex items-center justify-center space-x-8 mb-12">
    {[blinkLeft, blinkRight].map((blink, idx) => (
      <motion.div
        key={idx}
        className="relative w-20 h-20 bg-white rounded-full border-4 border-gray-300"
        animate={{ scale: blink ? [1, 1, 0.1, 1] : 1 }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="absolute w-8 h-8 bg-black rounded-full top-1/2 left-1/2"
          animate={{
            x: eyesLookDirection.x - 16,
            y: eyesLookDirection.y - 16
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute w-2 h-2 bg-white rounded-full top-1 left-1"></div>
        </motion.div>
      </motion.div>
    ))}
  </div>
);

export default SearchingEyes;
