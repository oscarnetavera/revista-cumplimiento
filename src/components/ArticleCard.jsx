import { motion } from "framer-motion";

// Componente de fondo con texto decorativo
const BackgroundText = () => {
  const positions = Array.from({ length: 10 }, () => ({
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 80}%`,
    rotate: `${Math.random() * 60 - 30}deg`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {positions.map((pos, index) => (
        <span
          key={index}
          className="absolute text-xs md:text-lg font-bold text-gray-500 uppercase tracking-wider 
          bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent select-none"
          style={{
            top: pos.top,
            left: pos.left,
            transform: `rotate(${pos.rotate})`,
            whiteSpace: "nowrap",
          }}
        >
          El Negocio
        </span>
      ))}
    </div>
  );
};

// Tarjeta de artículo
const ArticleCard = ({ titulo, autor, fecha, imagen, enlace, index }) => {
  return (
    <motion.div
      className="relative text-center p-6 rounded-lg shadow-xl h-72 flex flex-col justify-center items-center 
      transition-transform duration-300 hover:scale-105 bg-black overflow-hidden group"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: (index) => ({
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.2, duration: 0.5, ease: "easeOut" },
        }),
      }}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      {/* Texto de fondo "El Negocio" */}
      <BackgroundText />

      {/* Fecha en la parte superior derecha en color blanco */}
      <span className="absolute top-3 right-3 text-xs text-white">{fecha}</span>

      {/* Título */}
      <h2 className="relative text-2xl font-bold text-red-500 uppercase z-20 mb-2">
        {titulo}
      </h2>

      {/* Autor */}
      <p className="text-sm text-gray-300 mb-3">{autor}</p>

      {/* Botón "Leer Artículo" en amarillo */}
      <a
        href={enlace}
        className="text-yellow-400 font-semibold hover:underline"
        style={{ color: "#FACC15 !important" }}
      >
        Leer Artículo
      </a>
    </motion.div>
  );
};

export default ArticleCard;