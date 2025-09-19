import { motion, AnimatePresence } from "framer-motion";
import GlitchText from "../ui/GlitchText";

const SearchBox = ({ loadingStage, searchText }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="w-full max-w-2xl mx-auto"
  >
    <div className="relative mb-8">
      <motion.div
        className="w-full h-16 bg-black border-2 border-white rounded-full flex items-center px-8"
        animate={{
          borderColor: loadingStage === 'found' ? ['#ffffff', '#00ff00', '#ffffff'] : '#ffffff'
        }}
        transition={{ duration: 0.5, repeat: loadingStage === 'found' ? 3 : 0 }}
      >
        <div className="flex-1 text-white font-mono text-lg">
          {searchText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        </div>

        <motion.div
          className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center"
          animate={{ 
            rotate: loadingStage === 'searching' ? 360 : 0,
            scale: loadingStage === 'found' ? [1, 1.2, 1] : 1
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.3, repeat: 3 }
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>

    <AnimatePresence mode="wait">
      {loadingStage === 'searching' && (
        <motion.div
          key="searching"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center"
        >
          <GlitchText className="text-white text-xl font-bold mb-4">
            SCANNING THE WEB...
          </GlitchText>
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {loadingStage === 'found' && (
        <motion.div
          key="found"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          className="text-center"
        >
          <motion.div
            className="text-white text-2xl font-bold mb-4"
            animate={{
              textShadow: ["0 0 10px #00ff00", "0 0 20px #00ff00", "0 0 10px #00ff00"]
            }}
            transition={{ duration: 0.5, repeat: 3 }}
          >
            PORTFOLIO FOUND!
          </motion.div>

          <motion.div
            className="w-16 h-16 border-4 border-green-500 rounded-full mx-auto flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="text-green-500 text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              ✓
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {loadingStage === 'complete' && (
        <motion.div
          key="complete"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 2 }}
          className="text-center"
        >
          <GlitchText className="text-white text-3xl font-black">
            LAUNCHING...
          </GlitchText>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default SearchBox;
