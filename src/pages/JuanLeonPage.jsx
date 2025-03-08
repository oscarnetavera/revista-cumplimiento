import { useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import BannerJuanLeon from "../components/BannerJuanLeon";
import ArticleCard from "../components/ArticleCard";

// Datos de los artículos
const articles = [
    {
        titulo: "UN PROGRAMA DE TRANSPARENCIA ES UN DEBER ÉTICO Y ESTRATÉGICO DE LAS ORGANIZACIONES.",
        autor: "Juan Alejandro León",
        fecha: "9 de Enero, 2022",
        enlace :"columnas/juan-leon/un-Programa-de-transparencia-es-un-deber-etico-y-estrategico-de-las-organizaciones"
    },
    {
        titulo: "FIRMAS DIGITALES Y ELECTRONICAS.",
        autor: "Juan Alejandro León",
        fecha: "9 de Noviembre, 2021",
        enlace : "columnas/juan-leon/firmas-digitales-y-electronicas"
    },
    {
        titulo: "PREVENCIÓN DE RIESGOS EN UN NEGOCIO JURÍDICO.",
        autor: "Juan Alejandro León",
        fecha: "21 de Julio, 2021",
        enlace : "columnas/juan-leon/prevencion-de-riesgos-en-un-negocio-juridico"
    },
    {
        titulo: "LA RESPUESTA A LA PROBLEMÁTICA COLOMBIANA.",
        autor: "Juan Alejandro León",
        fecha: "23 de Junio, 2021",
        enlace : "columnas/juan-leon/la-respuesta-a-la-problematica-colombiana"
    },
    {
        titulo: "EMPRESAS Y NEGOCIOS CON VISIÓN INNOVADORA Y COMUNICACIÓN ASERTIVA",
        autor: "Juan Alejandro León",
        fecha: "26 de Marzo, 2021",
        enlace : "columnas/juan-leon/empresas-y-negocios-con-vision-innovadora-y-comunicacion-asertiva"
    },
    
    
    {
        titulo: "¿QUÉ NECESITO PARA UNA TRANSFORMACIÓN DIGITAL DE MI EMPRESA?",
        autor: "Juan Alejandro León",
        fecha: "14 de Diciembre, 2021",
        enlace : "columnas/juan-leon/que-necesito-para-una-transformacion-digital-de-mi-empresa"
    },
    
    {
        titulo: "¿POR QUÉ SU EMPRESA DEBE CONTAR CON UN ÁREA LEGAL?",
        autor: "Juan Alejandro León",
        fecha: "3 de Noviembre, 2020",
        enlace : "columnas/juan-leon/por-que-su-empresa-debe-contar-con-un-area-legal"
    },
    
    {
        titulo: "LOS 2 MALES DE MODA EN COLOMBIA.",
        autor: "Juan Alejandro León",
        fecha: "13 de Octubre, 2020",
        enlace : "columnas/juan-leon/los-dos-males-de-moda-en-colombia"
    },
    
];

// Componente principal con paginación
const JuanLeonPage = () => {
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
      <BannerJuanLeon />
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

export default JuanLeonPage;