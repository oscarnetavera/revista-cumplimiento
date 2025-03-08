import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_WILIAM_ARTICULOS } from "../assets";

const ArticuloSegundo = () => {
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
          LA CRÓNICA DE UN EMPRESARIO EN EL COVID-19
        </Typography>

        {/* Imagen del artículo */}
        <Box
          component="img"
          src={FOTO_WILIAM_ARTICULOS}
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
          <strong>Fecha:</strong> 10 de Agosto, 2020
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Diferentes historias en materia de negocios, emprendimientos y compañías hemos escuchado en estos meses de aislamiento obligatorio como consecuencia del Covid-19, algunas de ellas colmadas de esperanza y motivación, otras conmovedoras, tristes y
          llenas de sentimiento, sin embargo, todas convergen en una opinión en común y es la afectación en su operación y el cumplimiento de las metas y sueños que se tenían previstos para el año 2020.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sin lugar a dudas, la pandemia generada por el COVID ha causado un impacto inimaginable a la economía, esa economía que se ve soportada por cada negocio del país (grandes, medianos y pequeños), y que ha alterado diversos elementos en su operación,
          pago de nóminas, continuidad del negocio, y ha creado un gran reto para todos los empresarios, quienes desde el día 1 cuando se conoció el primer caso de COVID en el país, pensaron en el destino de su actividad.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Es indudable que tres meses después de esta crisis, un empresario ha debido soportar una gran presión, tanto económica como psicológica, es inimaginable el sentimiento de saber que el trabajo de tantos años se pudiese venir abajo a causa de una
          pandemia; ha tenido que pasar noches en vela cuestionando cuál será la mejor decisión como líder, cuál será el camino que permita seguir construyendo sus sueños; y evidentemente ha tenido que tomar duras decisiones, desde prescindir de algunos
          de sus empleados, iniciar licencias no remuneradas a otros, reducir gastos de sus operaciones, idear formas de reapertura del negocio, estudiar maneras de una restructuración de la compañía, hasta el punto de considerar el cierre de la
          organización.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          A pesar de ello, tenemos y siempre debemos cultivar un espíritu de resiliencia acompañada de planeación, pues muchos piensan que lo peor ya pasó o está pronto a pasar, dado que la economía se está aperturando gradualmente por sectores, ¿pero todo
          volverá a ser inmediatamente igual que antes?, ¿La interacción social será igual que antes?, aún no lo sabemos y no podemos decir en cuánto, la nube oscura pasará y la luz volverá a brillar.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Por todo esto y como es propio de nuestra naturaleza, de la razón que nos debe acompañar en nuestro actuar cotidiano, de la capacidad de adaptarnos al ambiente, es momento de redireccionar nuestra vela, de diversificar nuestro sistema productivo
          o porque no, utilizado a pesar de ser un cliché, REINVENTARNOS.
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
          <a href="/william-gonzales" onClick={(e) => {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace
            navigate("/william-gonzales"); // Navegación a la página de William Yesid Gonzales
          }}>
            by: William Yesid Gonzales
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default ArticuloSegundo;