import { useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import BannerWilliamGonzales from "../components/BannerWilliamGonzales";
import ArticleCard from "../components/ArticleCard";

// Datos de los artículos
const articles = [
  {
    titulo: "LA CRÓNICA DE UN EMPRESARIO EN EL COVID-19.",
    autor: "William Yesid Gonzales",
    fecha: "10 de Agosto, 2020",
    imagen: "/images/articulo001.png",
    enlace: "columnas/William-gonzales/la-cronica-de-un-empresario-en-el-covid-19",
  },
  // Agrega más artículos aquí...
];

// Componente principal con paginación
const WilliamGonzalesPage = () => {
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
      <BannerWilliamGonzales />
      <div className="container mx-auto p-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
        >
          {currentArticles.map((article, index) => (
            <ArticleCard key={index} {...article} index={index}  />
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

export default WilliamGonzalesPage;