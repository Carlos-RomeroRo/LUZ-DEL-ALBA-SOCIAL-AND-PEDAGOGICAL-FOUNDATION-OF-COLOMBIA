import * as motion from "motion/react-client"

export function ScrollCard({ content, hueA, hueB, variants = cardVariants, size = { width: 300, height: 430 } }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

  return (
    <motion.div
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div
        style={{
          ...card,
          width: size.width,
          height: size.height,
        }}
        variants={variants}
      >
        {content}
      </motion.div>
    </motion.div>
  )
}

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
}

const hue = (h) => `hsl(${h}, 100%, 50%)`

/**
 * Styles
 */
const cardContainer = {
  overflow: "visible", // 👈 permite ver la parte superior
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}

const splash = {
  position: "absolute",
  top: 0,
  left: "50%",       // 👈 lo centramos
  transform: "translateX(-50%)", // 👈 para que quede bien centrado
  width: "115%",     // 👈 más ancho que la tarjeta
  height: "120%",    // 👈 más alto también si quieres cubrir
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
  zIndex: 2, // el splash sigue arriba
}

const card = {
  fontSize: 164,
  display: "flex",
  flexDirection: "column",   // 👈 apilamos elementos
  justifyContent: "flex-start", // 👈 alineamos arriba
  alignItems: "center",      // 👈 seguimos centrando horizontalmente
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  position: "relative",
  zIndex: 1,
  paddingTop: 20, // 👈 le das espacio arriba
}
