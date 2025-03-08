import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_EDHER_ARTICULOS } from "../assets";

const ArticuloQuinto = () => {
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
          ¿POR QUÉ ES TAN IMPORTANTE LA PUBLICIDAD DIGITAL?
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
          <strong>Fecha:</strong> 14 de Enero, 2021
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Mucho se habla en medios especializados sobre la alta importancia que han adquirido las redes sociales en nuestros días. Estas, en su conjunto, han dado pie a que proliferen contenidos verdaderamente interesantes y diversos, así como contenido
          basura que en nada aporta a la sociedad. Sin embargo, es aquí donde las empresas, en un ámbito negocial, han visto la importancia de elevar o dar uso a distintas figuras y mecanismos para hacer ver sus productos de una forma más ágil, certera y
          efectiva para llegar a más y más clientes alrededor del mundo.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Un ejemplo cercano al suscrito podría ser la respuesta monstruosa, abultada y efectiva que tuve con el mundo de la Ovinocultura y la Caprinocultura con el lanzamiento de Ovinocultura al Día, donde en su momento hubo un intento de expandir a
          través de medios digitales y redes sociales todo lo relacionado a la cultura, conocimiento y demás elementos que giran alrededor del ejercicio de estas actividades al mundo.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          No está demás decir que hoy en día los negocios tienen que evolucionar con el comercio hacia donde las tendencias y la tecnología lo indican. Tal y como ha pasado con muchísimas empresas en el pasado, quienes no toman como propias la imagen y se
          aseguran de tener una buena visibilidad ante el mundo a través del internet se ven rezagados, o incluso consumidos por la voracidad del mercado sin tener siquiera la oportunidad de competir contra quienes lo hacen.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          No escapa a la realidad lo veloz que se mueve el mundo el día de hoy, donde ya muchos ni siquiera pueden o quieren asistir a una tienda o negocios físicos a adquirir o recibir los servicios comerciales o empresariales, atraídos simplemente por
          ofertas o piezas de publicidad que, corta, básica y sin rodeos, ofrecen el producto o servicio que el consumidor necesita.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Al respecto, solo resta decir que los negocios que cuentan con un buen marketing digital la tienen clara con respecto a las dinámicas que el mercado maneja hoy en día. Para ello, es menester recordar lo siguiente:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          1. Las redes sociales son un elemento esencial para alcanzar clientes o consumidores de lo que vendes.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          2. Para sacarles provecho, es necesario acumular una masa de seguidores considerable que accedan a tus ofertas y logren dar el impulso que tu negocio necesita.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          3. Un buen servicio al cliente ágil y efectivo es primordial a la hora de interactuar con los consumidores finales o clientes por estos medios.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          4. No esperes que la publicidad digital sea gratis. Es una inversión más que necesaria; si quieres acceder a un gran público, debes pagar por ello.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          5. Y por último, y lo más importante, si no estás en internet, nadie te va a encontrar. NO ERES NADIE.
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

export default ArticuloQuinto;