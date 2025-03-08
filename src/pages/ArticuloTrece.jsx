import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_JUAN_ARTICULOS } from "../assets"; // Asegúrate de importar la imagen correcta

const ArticuloTrece = () => {
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
          EMPRESAS Y NEGOCIOS CON VISIÓN INNOVADORA Y COMUNICACIÓN ASERTIVA
        </Typography>

        {/* Imagen del artículo */}
        <Box
          component="img"
          src={FOTO_JUAN_ARTICULOS} // Asegúrate de usar la imagen correcta
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
          <strong>Fecha:</strong> 26 de Marzo, 2021
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          El mundo de los negocios se encuentra en una continua evolución a través del paso del tiempo. El modelo de empresa que operaba hace 30 años es radicalmente diferente al modelo actual, las costumbres de antaño han sido evaluadas y han dado paso a la modernidad y tecnología generando que las empresas cada vez se vuelvan más vivas, humanas, dinámicas y flexibles.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Los cambios generacionales, la tecnología y la continua trasformación del mercado son tres de las principales razones por las cuales las compañías han debido transformarse, abriendo un mundo lleno de posibilidades que probablemente no habrían sido evaluadas y que permiten asegurar la supervivencia de la organización.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Uno de estos cambios consiste en que las empresas han evolucionado de dar un valor preponderante a los activos físicos y la perspectiva del personal humano como <u><strong>recursos</strong></u> hacia dar el valor correcto al talento humano, en su condición de <u><strong>“esencia”</strong></u> de las compañías, como elemento conductor y generador de cumplimiento de los objetivos empresariales.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La evolución del concepto de “Jefe” como responsable del control, toma de decisiones estratégicas y manejo de un equipo de trabajo a la evolución y entendimiento de la necesidad de un concepto de “Jefe - Líder”, que incluye la búsqueda del desarrollo máximo del potencial de la empresa y sus trabajadores.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El éxito de una compañía tiene su origen en la formación de líderes en su interior; la existencia de trabajadores con características como carisma, entusiasmo, capacidad de resolución, disciplina, creatividad, honestidad, visión del futuro, organización, comunicación, y capacidad de motivación de su equipo de trabajo y toma de decisiones.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Un líder debe desarrollar competencias en el saber, en el hacer y en el ser; es decir, en el conocimiento, la experiencia y la actitud frente a los desafíos que se le puedan presentar, agrupación de competencias, actitudes y aptitudes especiales y diferenciadoras que permiten aportar a la gestión de la empresa y a su administración.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La existencia de talento que toma el liderazgo en una compañía, a partir de sus distintos roles y funciones, permite el crecimiento de la misma en pro lograr su fin teleológico que es conseguir sus objetivos y satisfacer las necesidades del mercado.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Existen diversos beneficios generados por un buen liderazgo empresarial, entre los cuales resalto el aumento de ventas de la empresa, la mejoría del clima empresarial, la mejoría en la imagen interna y externa de la compañía, la competitividad de la empresa, y por supuesto el rendimiento en los procesos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Toda organización debe evolucionar al mismo ritmo del mercado y de la sociedad, virtud que denominamos como visión innovadora, lo cual generará que las organizaciones se anticipen a las expectativas de sus clientes, basados en la información del contexto y lo interpretado en los cambios del mercado. Esta virtud permite una comunicación asertiva, que consiste en transmitir los mensajes de manera clara y oportuna.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La comunicación asertiva es una habilidad fundamental, tanto para el tratamiento interno del equipo de trabajo, donde se busca generar relaciones auténticas que hagan que los miembros del equipo trabajen con mayor motivación, como para el tratamiento hacia sus clientes, generando confianza en el cumplimiento de los objetivos y la satisfacción de sus necesidades por las que fueron contratados.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La visión innovadora y la comunicación asertiva son habilidades que deben desarrollar los líderes de su compañía. Sin lugar a dudas, de la existencia de líderes en la compañía dependerá este análisis de visión innovadora y comunicación asertiva de la organización, elementos que permitirán la supervivencia, desarrollo y éxito de su empresa.
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

export default ArticuloTrece;