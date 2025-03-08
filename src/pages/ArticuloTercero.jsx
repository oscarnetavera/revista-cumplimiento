import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_EDHER_ARTICULOS } from "../assets";

const ArticuloTercero = () => {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <Box
      sx={{
        background: "#f5f5f5",
        color: "#333",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Título del artículo */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            textAlign: "center",
            mb: 4,
            background: "linear-gradient(90deg, #f5a623, #ffcd42)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          AL DESEMPLEO, METÁMOSLO EN LA BOLSA
        </Typography>

        {/* Imagen del artículo */}
        <Box
          component="img"
          src={FOTO_EDHER_ARTICULOS}
          alt="Sobre nosotros"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            mb: 4,
          }}
        />

        {/* Fecha del artículo */}
        <Typography variant="body1" sx={{ mb: 4, fontStyle: "italic" }}>
          <strong>Fecha:</strong> 26 de Septiembre, 2020
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Últimamente hemos observado cómo fenómenos como el mundo y la civilización moderna, global y universal se ha comenzado a fracturar en proporciones que ni siquiera estragos tan grandes como el crack del 29 o las crisis económicas mundiales del 2008
          y 2015 habían logrado causar. Tenemos a los gobiernos haciendo dinero de la nada en proporciones colosales, como se diría coloquialmente, “dándole sin parar a la máquina de imprimir billetes”, y fenómenos como el desempleo y la pobreza creciendo
          en el mundo como no ocurría desde 1990.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El desespero es generalizado, y los pronósticos no muy alentadores. Tanta incertidumbre por las cuarentenas en Asia, Europa y América generaron caídas en las bolsas que ni los más adiestrados en la materia vieron venir. Sin embargo, y a pesar de
          todo esto, tenemos que ni las mayores adversidades han podido vencer al ingenio humano, más aún cuando observamos al mercado bursátil con un volumen alrededor de 30 veces más movimiento y capital de transacciones que el mercado convencional.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Recientemente comenzaron a proliferar los “traders”, aquellas personas que con un conocimiento esencial del comportamiento de los mercados, invierten en operaciones binarias, forex, acciones y criptomonedas, impartiendo su conocimiento mediante
          academias a quienes, interesados, pagan matrículas y cuotas de sostenimiento a estas instituciones para aprender y seguir las indicaciones de inversión de expertos, para poco a poco ir generando los ingresos que les permitan no depender de un
          empleo convencional, sino de su astucia y criterio sin la necesidad de salir de casa.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Este tipo de opciones resultan la alternativa perfecta: sin jefes, sin horarios, sin tanta intensidad, y si se tiene la suficiente dedicación, con resultados excelentes que han permitido a estudiantes, taxistas y demás gente del común, tener un
          ingreso, un respiro, y poder dormir en las noches con total tranquilidad. Sin embargo, debe serse muy realista a la hora de tomar la decisión de incursionar en ese mundo, porque siendo objetivos, si no se tiene el compromiso y la dedicación
          suficientes para ello, puede resultar en un desastre que deje al paciente más colgado de lo que estaba, pues como bien decía mi nona: “Tenga cuidado mijito, que de eso tan bueno no dan tanto”.
        </Typography>

        {/* Autor del artículo con enlace */}
        <Typography
          variant="body1"
          sx={{
            mt: 4,
            textAlign: "right",
            fontStyle: "italic",
            "& a": {
              color: "#f5a623",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          }}
        >
          <a
            href="/edher-gomez"
            onClick={(e) => {
              e.preventDefault(); // Evita el comportamiento predeterminado del enlace
              navigate("/edher-gomez"); // Navegación a la página de Edher Gómez
            }}
          >
            by: Edher Gomez
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default ArticuloTercero;