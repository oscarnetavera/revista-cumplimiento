import { useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import BannerEdherGomez from "../components/BannerEdherGomez";
import ArticleCard from "../components/ArticleCard";

// Datos de los artículos
const articles = [
  {
    titulo: "¿POR QUÉ ES TAN IMPORTANTE LA PUBLICIDAD DIGITAL?",
    autor: "Edher Gómez",
    fecha: "14 de Enero, 2021",
    imagen: "/images/articulo011.png",
    enlace: "columnas/edher-gomez/por-que-es-tan-importante-la-publicidad-digital",
  },
  {
    titulo: "¿QUÉ TAN SEGURO ES QUE ESTOY PROTEGIENDO MI PATRIMONIO?",
    autor: "Edher Gómez",
    fecha: "30 de Noviembre, 2020",
    imagen: "/images/articulo009.png",
    enlace: "columnas/edher-gomez/que-tan-seguro-es-que-estoy-protegiendo-mi-patrimonio",
  },
  {
    titulo: "AL DESEMPLEO, METÁMOSLO EN LA BOLSA.",
    autor: "Edher Gómez",
    fecha: "26 de Septiembre, 2020",
    imagen: "/images/articulo005.png",
    enlace: "columnas/edher-gomez/al-metamoslo-en-bolsa",
  },
  {
    titulo: "AL MUNDO LE FALTA UN TORNILLO.",
    autor: "Edher Gómez",
    fecha: "10 de Agosto, 2020",
    imagen: "/images/articulo002.png",
    enlace: "columnas/edher-gomez/al-mundo-le-falta-un-tornillo",
  },
  // Agrega más artículos aquí...
];

// Componente principal con paginación
const EdherGomezPage = () => {
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
      <BannerEdherGomez />
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

export default EdherGomezPage;