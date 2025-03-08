import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_INVITADA_ALEJANDRO_CHAVES } from "../assets";

const ArticuloSiete = () => {
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
          APRECIACIONES SOBRE EL DAÑO PUNITIVO EN COLOMBIA
        </Typography>

        {/* Imagen del artículo */}
        <Box
          component="img"
         src={FOTO_INVITADA_ALEJANDRO_CHAVES}
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
          <strong>Fecha:</strong> 22 de Septiembre, 2020
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          El daño punitivo muestra beneficios interesantes en su estructura, sin embargo, frente a nuestra normatividad no resulta procedente la aplicación de este método, ya que, como se ha expuesto, el “Daño Punitivo” no debería aplicarse a todos los
          casos, sino que estaría limitado a algunos donde la conducta del causante del daño fuere tan reprochable, que fuere merecedora de ésta.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Teniendo en cuenta que la única medida para tasar el daño punitivo está en la discrecionalidad del jurado, en nuestra legislación lo que generaría es un desequilibrio legal a la hora de determinar la sanción, conducta que se aleja del principio de
          proporcionalidad como se refleja en el ejemplo anterior, ya que no se tendrían criterios de racionalidad para aplicar la figura, ni valoración de las faltas. Esto, confrontado con la congestión jurídica en la que convivimos, no sería de mayor
          utilidad; por el contrario, generaría desestabilidad judicial.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          También considero que, como lo ha expuesto la Corte Suprema de Justicia, tanto el Código Civil, ya sea interponiendo sanciones patrimoniales a título de pena, como el Código de Comercio en el pacto de intereses, son instrumentos que facultarían a
          las partes en caso de incumplimientos o violaciones normativas. Esto, de una u otra forma, actúa como mecanismo de protección de la sociedad. Ahora bien, frente a la protección al consumidor, encontramos que en Colombia se ha pretendido proteger
          al consumidor en los diversos sectores del mercado y se ha buscado intervenir en la asimetría entre el consumidor y el productor, ya sea con la Constitución Política de 1991 o con el Estatuto del Consumidor (Decreto 3466 de 1982) y el nuevo
          Estatuto del Consumidor (Ley 1480 de 2011).
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Otro de los aspectos lo encontramos en materia contractual, donde las partes pactan cláusulas penales para que, en el evento de un incumplimiento, se puedan establecer sanciones de orden patrimonial a título de pena. Estas cláusulas sirven como
          mecanismo para tasar anticipadamente perjuicios.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Evidentemente, encontramos distintos mecanismos de protección e instrumentos legales en nuestra sociedad y legislación actual que dejarían a un lado la posibilidad de implementar otra figura jurídica, como el “Daño Punitivo”. A mi parecer, no se
          justificaría implementar este tipo de modalidad sancionatoria donde existen otras alternativas de protección frente a las conductas que producen daños, más aún donde nuestro ordenamiento jurídico no cuenta con la suficiente infraestructura
          funcional para su aplicación.
        </Typography>

        {/* Autor del artículo */}
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
          by: Columnista invitado: Alejandro Chaves Villada
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "right",
            fontStyle: "italic",
          }}
        >
          Abogado de la Universidad Santo Tomás de Bogotá, especialista en Derecho Comercial de la Universidad Externado de Colombia, ocho (8) años de experiencia profesional en Derecho Comercial-Tributario, Derecho Administrativo y Auditoría en la
          Contratación Estatal. Abogado Consultor de la Subdirección de Contratación del MinTIC y Asesor Jurídico de la Dirección de Seguridad, Convivencia y Justicia de la Contraloría de Bogotá.
        </Typography>
      </Container>
    </Box>
  );
};

export default ArticuloSiete;