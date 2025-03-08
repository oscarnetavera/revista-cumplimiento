import { Container, Typography, Box, Card, CardContent, Avatar } from "@mui/material";
import { EDDER_LOGO, JUAN_LOGO, WILIAM_LOGO } from "../assets";

const columnists = [
  {
    name: "Juan Alejandro León",
    image: JUAN_LOGO,
    description:
      "Abogado Cum Laude de la Universidad Santo Tomás de Bucaramanga, Magíster en Derecho Internacional de la Empresa Universitat de Barcelona y OBS Business School. Especialización en curso en Derecho Contractual del Colegio Mayor Nuestra Señora del Rosario.",
  },
  {
    name: "Edher Gómez",
    image: EDDER_LOGO,
    description:
      "Abogado de la Universidad Santo Tomás - Seccional Bucaramanga, Especialista en Derecho Administrativo de la Universidad Externado de Colombia.",
  },
  {
    name: "William Yesid Gonzales",
    image: WILIAM_LOGO,
    description:
      "Abogado titulado por la Universidad Santo Tomás seccional Bucaramanga, con Tesis de graduación denominada “Criterios de Cuantificación de la Prima Comercial como un Intangible que Integra el Establecimiento de Comercio”.",
  },
];

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", my: 5 }}>
      {/* ✅ Título llamativo con efecto */}
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
          "&:hover::after": {
            width: "100%",
          },
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
            transition: "width 0.3s ease",
          },
        }}
      >
        Nuestros Columnistas
      </Typography>

      {/* 📌 Tarjetas de columnistas */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 4,
          mt: 3,
        }}
      >
        {columnists.map((columnist) => (
          <Card
            key={columnist.name}
            sx={{
              maxWidth: 345,
              mx: "auto",
              background: "rgba(0, 0, 0, 0.9)",
              color: "white",
              borderRadius: "16px",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 10px 25px rgba(255, 165, 0, 0.5)",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Avatar
                src={columnist.image}
                alt={columnist.name}
                sx={{
                  width: 120,
                  height: 120,
                  border: "4px solid #f5a623",
                  boxShadow: "0px 0px 10px rgba(255, 165, 0, 0.6)",
                }}
              />
            </Box>
            <CardContent>
              {/* 🔥 Nombre más llamativo con degradado dorado */}
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  textTransform: "uppercase",
                  background: "linear-gradient(90deg, #ffdf85, #f5a623)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "center",
                  fontSize: "1.2rem",
                  mb: 1,
                }}
              >
                {columnist.name}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {columnist.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default AboutUs;
