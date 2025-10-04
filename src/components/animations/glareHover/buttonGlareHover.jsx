import GlareHover from "../glareHover/glareHover";

function ButtonGlareHover({ texto }) {
  return (
    <GlareHover
      width="fit-content"
      height="fit-content"
      glareColor="#00ffff"
      glareSize={200}
    >
      <button
        type="button"
        className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none 
                   focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full 
                   text-lg px-8 py-3 transition-transform transform hover:scale-105"
      >
        {texto}
      </button>
    </GlareHover>
  );
}

export default ButtonGlareHover;
