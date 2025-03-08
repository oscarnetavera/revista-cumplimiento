import { useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import BannerArticules from "../components/BannerArticules";

// Datos de los artículos
const articles = [
    {
        titulo: "UN PROGRAMA DE TRANSPARENCIA ES UN DEBER ÉTICO Y ESTRATÉGICO DE LAS ORGANIZACIONES.",
        autor: "Juan Alejandro León",
        fecha: "9 de Enero, 2022",
        links:"columnas/juan-leon/un-Programa-de-transparencia-es-un-deber-etico-y-estrategico-de-las-organizaciones"
    },
    {
        titulo: "FIRMAS DIGITALES Y ELECTRONICAS.",
        autor: "Juan Alejandro León",
        fecha: "9 de Noviembre, 2021",
        links: "columnas/juan-leon/firmas-digitales-y-electronicas"
    },
    {
        titulo: "PREVENCIÓN DE RIESGOS EN UN NEGOCIO JURÍDICO.",
        autor: "Juan Alejandro León",
        fecha: "21 de Julio, 2021",
        links: "columnas/juan-leon/prevencion-de-riesgos-en-un-negocio-juridico"
    },
    {
        titulo: "LA RESPUESTA A LA PROBLEMÁTICA COLOMBIANA.",
        autor: "Juan Alejandro León",
        fecha: "23 de Junio, 2021",
        links: "columnas/juan-leon/la-respuesta-a-la-problematica-colombiana"
    },
    {
        titulo: "EMPRESAS Y NEGOCIOS CON VISIÓN INNOVADORA Y COMUNICACIÓN ASERTIVA",
        autor: "Juan Alejandro León",
        fecha: "26 de Marzo, 2021",
        links: "columnas/juan-leon/empresas-y-negocios-con-vision-innovadora-y-comunicacion-asertiva"
    },
    {
        titulo: "LEGALTECH",
        autor: "Columnista Internacional Invitada",
        fecha: "4 de Marzo, 2021",
        links: "columnas/invitado/legaltech"
    },
    {
        titulo: "¿POR QUÉ ES TAN IMPORTANTE LA PUBLICIDAD DIGITAL?",
        autor: "Edher Gómez",
        fecha: "14 de Enero, 2021",
        links: "columnas/edher-gomez/por-que-es-tan-importante-la-publicidad-digital"
    },
    {
        titulo: "¿QUÉ NECESITO PARA UNA TRANSFORMACIÓN DIGITAL DE MI EMPRESA?",
        autor: "Juan Alejandro León",
        fecha: "14 de Diciembre, 2021",
        links: "columnas/juan-leon/que-necesito-para-una-transformacion-digital-de-mi-empresa"
    },
    {
        titulo: "¿QUÉ TAN SEGURO ES QUE ESTOY PROTEGIENDO MI PATRIMONIO?",
        autor: "Edher Gómez",
        fecha: "30 de Noviembre, 2020",
        links: "columnas/edher-gomez/que-tan-seguro-es-que-estoy-protegiendo-mi-patrimonio"
    },
    {
        titulo: "¿POR QUÉ SU EMPRESA DEBE CONTAR CON UN ÁREA LEGAL?",
        autor: "Juan Alejandro León",
        fecha: "3 de Noviembre, 2020",
        links: "por-que-su-empresa-debe-contar-con-un-area-legal"
    },
    {
        titulo: "MENTALIDAD POSITIVA DE UN EMPRESARIO.",
        autor: "Columnista invitada",
        fecha: "16 de Octubre, 2020",
        links: "columnas/invitado/mentalidad-positiva-de-un-empresario"
    },
    {
        titulo: "LOS 2 MALES DE MODA EN COLOMBIA.",
        autor: "Juan Alejandro León",
        fecha: "13 de Octubre, 2020",
        links: "columnas/juan-leon/los-dos-males-de-moda-en-colombia"
    },
    {
        titulo: "AL DESEMPLEO, METÁMOSLO EN LA BOLSA.",
        autor: "Edher Gómez",
        fecha: "26 de Septiembre, 2020",
        links: "columnas/edher-gomez/al-metamoslo-en-bolsa"
    },
    {
        titulo: "APRECIACIONES SOBRE EL DAÑO PUNITIVO EN COLOMBIA.",
        autor: "Columnista invitado",
        fecha: "22 de Septiembre, 2020",
        links: "columnas/invitado/apreciacones-sobre-el-danio-punitivo-en-colombia"
    },
    {
        titulo: "TELETRABAJO COVID-19.",
        autor: "Columnista invitado",
        fecha: "13 de Agosto, 2020",
        links: "columnas/invitado/teletrabajo-covid-19"
    },
    {
        titulo: "LA CRÓNICA DE UN EMPRESARIO EN EL COVID-19.",
        autor: "William Yesid Gonzales",
        fecha: "10 de Agosto, 2020",
        links: "columnas/William-gonzales/la-cronica-de-un-empresario-en-el-covid-19"
    },
    {
        titulo: "AL MUNDO LE FALTA UN TORNILLO.",
        autor: "Edher Gómez",
        fecha: "10 de Agosto, 2020",
        links: "columnas/edher-gomez/al-mundo-le-falta-un-tornillo"
    }
];

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
const ArticleCard = ({ titulo, autor, fecha, links, index }) => {
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
     <a href={`${links}`} className="text-yellow-400 font-semibold hover:underline" style={{ color: '#FACC15 !important' }}>
  Leer Artículo
</a>

    </motion.div>
  );
};

// Componente principal con paginación
const ArticlesPage = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  // Obtener artículos de la página actual
  const offset = currentPage * itemsPerPage;
  const currentArticles = articles.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(articles.length / itemsPerPage);

  // Manejar cambio de página
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <BannerArticules />
      <div className="container mx-auto p-8">
    
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
      >
        {currentArticles.map((article, index) => (
          <ArticleCard key={index} {...article} index={index} />
        ))}
      </motion.div>

      {/* Paginación */}
      <ReactPaginate
        previousLabel={"← Anterior"}
        nextLabel={"Siguiente →"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center items-center mt-8 space-x-2"}
        pageClassName={"px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"}
        activeClassName={"bg-red-500 text-white"}
        previousClassName={"px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"}
        nextClassName={"px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
      />
    </div>
    </>
    
  );
};

export default ArticlesPage;
