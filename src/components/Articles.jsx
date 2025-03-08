import { motion } from "framer-motion";

const articles = [
  {
    title: "Un Programa de transparencia es un deber Ético y Estratégico de las Organizaciones",
    links: "columnas/juan-leon/un-Programa-de-transparencia-es-un-deber-etico-y-estrategico-de-las-organizaciones",
  },
  {
    title: "Firmas Digitales y Electronicas",
    links: "columnas/juan-leon/firmas-digitales-y-electronicas",
  },
  {
    title: "Prevención de riesgos en un Negocio Jurídico",
    links: "columnas/juan-leon/prevencion-de-riesgos-en-un-negocio-juridico",
  },
];

// Genera múltiples textos "El Negocio" en diferentes posiciones
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

// Card con borde animado
const ArticleCard = ({ title, links, index }) => {
  return (
    <motion.div
      className="relative text-center p-6 rounded-lg shadow-xl h-72 flex items-center justify-center 
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

      {/* Efecto Border Beam */}
      <div className="absolute inset-0 border-beam"></div>

      {/* Contenedor flexible para el título y el enlace */}
      <div className="flex flex-col items-center justify-center z-20">
        {/* Título */}
        <h2 className="text-2xl font-bold text-red-500 uppercase">{title}</h2>

        {/* Enlace "Leer Artículo" */}
        <a
          href={links}
          className="mt-4 text-yellow-400 font-semibold hover:underline"
          style={{ color: "#FACC15" }}
        >
          Leer Artículo
        </a>
      </div>
    </motion.div>
  );
};

const Articles = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Últimos Artículos
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
      >
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Articles;