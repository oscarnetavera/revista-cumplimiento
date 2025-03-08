import { Container, Typography, Box, Card, CardContent, Avatar, Button } from "@mui/material";
import { motion } from "framer-motion";
import { EDDER_LOGO, JUAN_LOGO, WILIAM_LOGO } from "../assets";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación

const columnists = [
  {
    name: "Juan Alejandro León",
    image: JUAN_LOGO,
    description:
      "Abogado Cum Laude de la Universidad Santo Tomás de Bucaramanga, Magíster en Derecho Internacional de la Empresa Universitat de Barcelona y OBS Business School. Especialización en curso en Derecho Contractual del Colegio Mayor Nuestra Señora del Rosario.",
    link: "/juan-leon", // Ruta a la página de Juan Alejandro León
  },
  {
    name: "Edher Gómez",
    image: EDDER_LOGO,
    description:
      "Abogado de la Universidad Santo Tomás - Seccional Bucaramanga, Especialista en Derecho Administrativo de la Universidad Externado de Colombia.",
    link: "/edher-gomez", // Ruta a la página de Edher Gómez
  },
  {
    name: "William Yesid Gonzales",
    image: WILIAM_LOGO,
    description:
      "Abogado titulado por la Universidad Santo Tomás seccional Bucaramanga, con Tesis de graduación denominada “Criterios de Cuantificación de la Prima Comercial como un Intangible que Integra el Establecimiento de Comercio”.",
    link: "/william-gonzales", // Ruta a la página de William Yesid Gonzales
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUs = () => {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <>
      {/* ✅ Banner con texto */}
      <Box
        sx={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
          color: "white",
          textAlign: "center",
          py: 10,
        }}
      >
        <Typography variant="h3" fontWeight="bold">¿Quiénes Somos?</Typography>
        <Typography variant="h6" sx={{ mt: 2, opacity: 0.8 }}>
          Un equipo comprometido con la excelencia y el conocimiento.
        </Typography>
      </Box>

      {/* ✅ Contenido principal */}
      <Container maxWidth="lg" sx={{ textAlign: "center", my: 5 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              position: "relative",
              display: "inline-block",
              pb: 1,
              mb: 4,
              background: "linear-gradient(90deg, #f5a623, #ffcd42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              "&::after": {
                content: '""',
                display: "block",
                width: "60%",
                height: "4px",
                backgroundColor: "#f5a623",
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
              },
            }}
          >
            Nuestros Columnistas
          </Typography>
        </motion.div>

        {/* 📌 Tarjetas con animación */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 4,
            mt: 3,
          }}
        >
          {columnists.map((columnist) => (
            <motion.div key={columnist.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card
                sx={{
                  maxWidth: 360,
                  height: "100%",
                  mx: "auto",
                  background: "linear-gradient(to right, #1e1e1e, #3a3a3a)",
                  color: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 25px rgba(255, 165, 0, 0.5)",
                  },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 3, flexGrow: 1 }}>
                  <Avatar
                    src={columnist.image}
                    alt={columnist.name}
                    sx={{
                      width: 100,
                      height: 100,
                      border: "3px solid #ffcd42",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" sx={{ textTransform: "uppercase", mb: 1 }}>
                    {columnist.name}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, mb: 2, flexGrow: 1 }}>
                    {columnist.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ffcd42",
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#f5a623" },
                    }}
                    onClick={() => navigate(columnist.link)} // Navegación a la página del columnista
                  >
                    Ver Columnas
                  </Button>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;