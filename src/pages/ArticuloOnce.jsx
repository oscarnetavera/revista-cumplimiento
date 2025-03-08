import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_JUAN_ARTICULOS } from "../assets";

const ArticuloOnce = () => {
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
          LOS 2 MALES DE MODA EN COLOMBIA
        </Typography>

        {/* Imagen del artículo */}
        <Box
          component="img"
        src={FOTO_JUAN_ARTICULOS}
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
          <strong>Fecha:</strong> 13 de Octubre, 2020
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Nos estamos adaptando a un país en crisis económica a causa de DOS MALES, uno tradicional, y otro de actualidad, ambos comúnmente conocidos, y que nos han adentrado a una nueva “normalidad”; el primero de ellos, un mal que ha sido desarrollado a
          través de la historia de Colombia, y que a pesar de estar “comprometidos” en su contra desde hace décadas, son más los esfuerzos a su favor que aquellos que lo combaten, lo llamamos: corrupción.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El segundo de ellos, un mal que jamás esperamos tener, que llegó para quedarse, y que de forma invisible y paulatina se ha apoderado de gran parte de los recursos públicos de Colombia, de forma directa o indirecta, que más allá de congelar y
          retrasar el desarrollo económico de Colombia, ha afectado la salud de muchos hogares colombianos y del cual debemos tener “AUTOCUIDADO”; los expertos lo llaman: Coronavirus COVID-19.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>¿Quién podría imaginar que estos 2 males de moda podrían combinarse?</strong> ¿Qué clase de seres son capaces de utilizar el COVID-19 para sus fines de corrupción? ¿Cómo pasa por la cabeza de un colombiano doblar el costo o
          sobrefacturar productos y servicios que sirven para salvar vidas?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Conocemos la respuesta a cada una de esas preguntas, por lo cual, surge una nueva inquietud: ¿nos sorprende que esto suceda en Colombia? Lastimosamente nuestra respuesta es NO, estamos acostumbrados a estrenar escándalos de corrupción de forma
          mensual, nuestros noticieros nacionales se han convertido en una cartelera de cine que continuamente lanza nuevos espectáculos a todos los colombianos, una tendencia que se ha aumentado significativamente en este 2020, nuevos estrenos de
          entramados de sobornos, tráfico de influencias, sobrefacturación de productos, masacres, actos de vandalismo y abuso de autoridad, y otros más clásicos como la adjudicación de contratos a dedo y el clientelismo político.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Según el Índice de Percepción de la Corrupción, Colombia ocupa el puesto 96 entre 180 países, con un puntaje de 37 puntos sobre 100, en donde 0 significa una corrupción muy elevada y 100 la ausencia de corrupción; somos vecinos en materia de
          corrupción con países como Etiopía, Vietnam, Tanzania y Gambia.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La puntuación media asignada para el continente americano es de 43 puntos; sorpresivamente no nos encontramos en los últimos lugares de Latinoamérica, tres vecinos nos llevan ventaja, Nicaragua con un puntaje de 22/100, Haití 18/100 y nuestra
          vecina Venezuela 16/100, sin embargo, al paso que vamos, es como si quisiéramos ingresar en la competencia de quién aumenta sus índices de corrupción.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Según diarios internacionales, Colombia se encuentra estancada en la lucha contra la corrupción, debido a la existencia de casos de gran magnitud de corrupción en diferentes sectores como la Justicia, inversión pública, salud, educación e
          infraestructura, aunado de la inexistencia y ausencia de sanciones efectivas en los grandes casos, decantado en “impunidad”.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          No es otro el objetivo del presente que recordar a cada uno de los colombianos, especialmente a aquellos que cuentan con posiciones privilegiadas y el manejo y administración de recursos públicos, que así como está en furor el autocuidado para
          contrarrestar el COVID, pues tememos de las consecuencias de ser infectados por el virus, deberíamos comprometernos para implementar también ese <strong>AUTOCUIDADO</strong> en aquel mal que por desgracia nos ha acompañado durante décadas, la
          nefasta <strong>CORRUPCIÓN</strong>, equiparable a un virus, al cual deberíamos temer, con la plena certeza que es mucho más malévolo y destructivo que el mismo COVID.
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
            href="/juan-leon"
            onClick={(e) => {
              e.preventDefault(); // Evita el comportamiento predeterminado del enlace
              navigate("/juan-leon"); // Navegación a la página de Juan Alejandro León
            }}
          >
            by: Juan Alejandro León
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default ArticuloOnce;