import { Container, Typography, Box } from "@mui/material";
import { keyframes } from "@mui/system";

// Animación de fondo en movimiento
const animatedBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BannerEdherGomez = () => {
  return (
    <Box
      sx={{
         background: "linear-gradient(-45deg, rgb(114, 30, 30), rgb(245, 22, 22), rgb(39, 15, 15), rgb(254, 18, 18))",
        backgroundSize: "400% 400%",
        animation: `${animatedBackground} 10s ease infinite`,
        color: "white",
        textAlign: "center",
        py: { xs: 6, md: 10 },
        px: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeInUp 1s ease-out forwards",
          }}
        >
          Edher Gómez
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeInUp 1.5s ease-out forwards",
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          Abogado de la Universidad Santo Tomás - Seccional Bucaramanga, con conocimientos específicos en el Derecho Administrativo, Laboral e Inmobiliario.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeInUp 2s ease-out forwards",
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          Especialista en Derecho Administrativo de la Universidad Externado de Colombia.
        </Typography>
      </Container>

      {/* Definimos las animaciones con CSS */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default BannerEdherGomez;