import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_JUAN_ARTICULOS } from "../assets";

const ArticuloDiez = () => {
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
          ¿POR QUÉ SU EMPRESA DEBE CONTAR CON UN ÁREA LEGAL?
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
          <strong>Fecha:</strong> 3 de Noviembre, 2020
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sin lugar a dudas, la asesoría en temas legales y normativos debe ser un soporte esencial en las organizaciones. Esta afirmación no hace referencia exclusivamente a las grandes estructuras empresariales, a las multinacionales o empresas que tienen
          un músculo financiero importante, por el contrario, incluye a comerciantes, pequeñas y medianas empresas, y en general a cada una de las personas que desarrollan una actividad económica. De ahí que{" "}
          <u>el acompañamiento y asesoría legal es un elemento esencial para las PYMES que tienen como objetivo ser grandes en el futuro</u>.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Existe una alta tendencia que considera que los abogados únicamente se necesitan para solucionar problemas cuando estos ya se han causado, para iniciar acciones legales, y que es en esos momentos de controversia cuando se debe acudir a un experto
          en derecho. No obstante, este pensamiento es <strong>COMPLETAMENTE ERRÓNEO</strong>, ya que el papel esencial de un abogado asesor no se limita a resolver los problemas cuando ya se causan, por el contrario, es aquel que tiene un rol de
          planificación, prevención, estudio y análisis de las situaciones que puedan afectar a una compañía en cada momento de un negocio, y el encargado de asesorar y sugerir la toma de las decisiones más favorables a nivel jurídico para la empresa o
          negocio.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La presencia de un abogado en un negocio o una empresa permite la planificación, prevención, mediación y solución de contingencias en cada uno de los momentos del mismo, desde actividades como el acompañamiento a una reunión hasta la revisión de
          un contrato o el inicio de una acción judicial.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En mi experiencia profesional, <u>quiero compartir algunos elementos que pueden resaltar la importancia de contar para su negocio, sin importar el tamaño, con un área o soporte legal:</u>
        </Typography>

        {/* Puntos importantes */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>1. Prevención de riesgos</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La correcta asesoría legal en la etapa inicial de todo negocio genera una importantísima labor preventiva que evita numerosos litigios; sin un adecuado asesoramiento jurídico sobre las condiciones en las cuales se debe contratar o no, las
          relaciones desencadenarían en la ruptura y al conflicto.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El análisis de riesgos que trae consigo una relación jurídica con un tercero permite tomar medidas de prevención al momento de obligarse, y son muy importantes si no quiere que su patrimonio se vea afectado por el fracaso de su negocio.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>2. Identificación y defensa de sus derechos</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una asesoría jurídica permite la identificación de sus derechos e intereses, y actúa como una barrera de defensa ante cualquier contingencia que se pueda presentar.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>3. Control de relación con clientes y proveedores</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Es indispensable como empresario tener el control sobre la relación con otras empresas, proveedores y con los clientes; el acompañamiento jurídico le permite establecer los lineamientos sobre su relación con los proveedores, la responsabilidad
          en caso de incumplimiento de obligaciones, el cobro de cartera por impago, los términos de confidencialidad, entre otros.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>4. Control de relaciones internas y de cumplimiento</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Todo negocio debe prevenir cualquier tipo de controversia interna, y esto lo obligará a implementar normativas de control dentro de la organización, entre las que se encuentran la implementación de reglamentos, políticas y manuales; así mismo,
          será necesario conocer los diferentes tipos de contratos que la legislación laboral ofrece, estructurar procesos disciplinarios en caso de incumplimiento de las obligaciones de sus trabajadores, entre otras necesidades, que en caso de no
          tenerse en cuenta o no realizarse de forma idónea pueden generar graves problemas para el negocio.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>5. Resolución de conflictos</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El correcto acompañamiento de un abogado le permite al empresario poder resolver conflictos procurando soluciones que resuelvan las divergencias en sede amistosa. Este rol del jurista le permite actuar como un mediador entre los individuos, la
          controversia y las estipulaciones y reglamentos previstos desde el inicio de las relaciones.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          De esta manera, contar con un área legal, o el asesoramiento y acompañamiento de un profesional en derecho, genera no solo la resolución de controversias, sino también poder preverlos y evitarlos, lo cual permite al empresario centrarse en su
          actividad productiva o comercial, y desligarse de este tipo de problemáticas.
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

export default ArticuloDiez;