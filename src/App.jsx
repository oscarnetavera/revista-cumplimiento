import { useEffect } from "react"; // Importa useEffect
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Importa useLocation
import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ArticlesPage from "./pages/ArticlesPage";
import ContactPage from "./pages/ContactPage";
import JuanLeonPage from "./pages/JuanLeonPage";
import EdherGomezPage from "./pages/EdherGomezPage";
import WilliamGonzalesPage from "./pages/WilliamGonzalesPage";
import ArticuloSegundo from "./pages/ArticuloSegundo";
import ArticuloPrimero from "./pages/ArticuloPrimero";
import ArticuloTercero from "./pages/ArticuloTercero";
import ArticuloCuatro from "./pages/ArticuloCuatro";
import ArticuloCinco from "./pages/ArticuloCinco";
import ArticuloSeis from "./pages/ArticuloSeis";
import ArticuloSiete from "./pages/ArticuloSiete";
import ArticuloOcho from "./pages/ArticuloOcho";
import ArticuloNueve from "./pages/ArticuloNueve";
import ArticuloDiez from "./pages/ArticuloDiez";
import ArticuloOnce from "./pages/ArticuloOnce";
import ArticuloDoce from "./pages/ArticuloDoce";
import ArticuloTrece from "./pages/ArticuloTrece";
import ArticuloCatorce from "./pages/ArticuloCatorce";
import ArticuloQuince from "./pages/ArticuloQuince";
import ArticuloDiezYSeis from "./pages/ArticuloDiezYSeis";
import ArticuloDiezYSiete from "./pages/ArticuloDiezYSiete";

// Componente principal de la aplicación
function AppContent() {
  const location = useLocation(); // Obtén la ubicación actual

  // Restablece el scroll a (0, 0) cada vez que la ruta cambie
  useEffect(() => {
   
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll suave a la parte superior
  }, [location.pathname]); // Se ejecuta cuando cambia la ruta


  return (
    <>
      <Header /> {/* 🔥 Header en todas las páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/juan-leon" element={<JuanLeonPage />} />
        <Route path="/edher-gomez" element={<EdherGomezPage />} />
        <Route path="/William-gonzales" element={<WilliamGonzalesPage />} />
        {/* Columnas William */}
        <Route path="columnas/William-gonzales/la-cronica-de-un-empresario-en-el-covid-19" element={<ArticuloSegundo />} />

        {/* Columnas Edher */}
        <Route path="columnas/edher-gomez/al-mundo-le-falta-un-tornillo" element={<ArticuloPrimero />} />
        <Route path="columnas/edher-gomez/al-metamoslo-en-bolsa" element={<ArticuloTercero />} />
        <Route path="columnas/edher-gomez/que-tan-seguro-es-que-estoy-protegiendo-mi-patrimonio" element={<ArticuloCuatro />} />
        <Route path="columnas/edher-gomez/por-que-es-tan-importante-la-publicidad-digital" element={<ArticuloCinco />} />

        {/* Columnas Juan */}
        <Route path="columnas/juan-leon/por-que-su-empresa-debe-contar-con-un-area-legal" element={<ArticuloDiez />} />
        <Route path="columnas/juan-leon/los-dos-males-de-moda-en-colombia" element={<ArticuloOnce />} />
        <Route path="columnas/juan-leon/que-necesito-para-una-transformacion-digital-de-mi-empresa" element={<ArticuloDoce />} />
        <Route path="columnas/juan-leon/empresas-y-negocios-con-vision-innovadora-y-comunicacion-asertiva" element={<ArticuloTrece />} />
        <Route path="columnas/juan-leon/la-respuesta-a-la-problematica-colombiana" element={<ArticuloCatorce />} />
        <Route path="columnas/juan-leon/prevencion-de-riesgos-en-un-negocio-juridico" element={<ArticuloQuince />} />
        <Route path="columnas/juan-leon/firmas-digitales-y-electronicas" element={<ArticuloDiezYSeis />} />
        <Route path="columnas/juan-leon/un-Programa-de-transparencia-es-un-deber-etico-y-estrategico-de-las-organizaciones" element={<ArticuloDiezYSiete />} />

        {/* Columnas invitados */}
        <Route path="columnas/invitado/teletrabajo-covid-19" element={<ArticuloSeis />} />
        <Route path="columnas/invitado/apreciacones-sobre-el-danio-punitivo-en-colombia" element={<ArticuloSiete />} />
        <Route path="columnas/invitado/mentalidad-positiva-de-un-empresario" element={<ArticuloOcho />} />
        <Route path="columnas/invitado/legaltech" element={<ArticuloNueve />} />
      </Routes>
      <Footer /> {/* ✅ Footer en todas las páginas */}
    </>
  );
}

// Componente App que envuelve todo en el Router
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContent /> {/* Renderiza el contenido de la aplicación dentro del Router */}
      </Router>
    </ThemeProvider>
  );
}

export default App;