import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_JUAN_ARTICULOS } from "../assets"; // Asegúrate de importar la imagen correcta

const ArticuloDiezYSiete = () => {
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
          UN PROGRAMA DE TRANSPARENCIA ES UN DEBER ÉTICO Y ESTRATÉGICO DE LAS ORGANIZACIONES
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
          <strong>Fecha:</strong> 9 de Enero, 2022
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          La existencia de actos antiéticos, la corrupción y el fraude al interior de las organizaciones es una realidad innegable en la actualidad. Anualmente se cometen múltiples actos de soborno, conflicto de intereses, colusión, aceptación de regalos y dádivas, y otros, al interior de las empresas por parte de empleados, contratistas, proveedores, todos en pro de la obtención de beneficios personales, afectando a la organización, y por ende, la continuidad del negocio.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Enfrentarse a actos antiéticos es uno de los retos más importantes de los empresarios de diversos sectores económicos; es en este punto, que colma de vital importancia el uso de las herramientas necesarias que permitan identificar, corregir y controlar la materialización de estos riesgos (fraude y corrupción), razón por la cual surgen los programas especializados de transparencia y ética.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Un programa de ética y transparencia es un mecanismo interno anticorrupción que permite la prevención, corrección y reparación de conductas antiéticas al interior de una compañía; este programa crea normas, lineamientos, políticas y procedimientos e implementa herramientas que generen un ambiente de transparencia y legalidad.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>Cumplimiento normativo</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La ley 1778 de 2016 creó la obligación para personas jurídicas de adoptar programas de transparencia y ética empresarial, así como mecanismos internos anticorrupción y normas internas de auditoría; Mediante resolución 100-006261 de 2020, la Superintendencia de Sociedades estableció nuevos criterios que deben cumplir las sociedades para adoptar los programas de transparencia y ética empresarial, en donde se dispuso lo siguiente:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <em>“Estarán obligadas a adoptar un Programa de Transparencia y Ética Empresarial las sociedades vigiladas por la Superintendencia de Sociedades que:</em>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          1. Se encuentren vigiladas por la Superintendencia de Sociedades;
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          2. Cuenten con ingresos o activos superiores a 40.000 SMLMV;
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          3. Realicen negocios o transacciones internacionales directamente o a través de intermediario y que dichas transacciones o negocios sean superiores a 100 SMLMV.”
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La Superintendencia de Sociedades realizó precisiones frente al plazo para implementación de programas de transparencia y ética mediante la Circular Externa 100-000011 del 9 de agosto de 2021, en donde dispuso que:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          - Las empresas que ya se encontraban obligadas a la implementación de un programa de transparencia y ética deben ajustar su programa a nuevos lineamientos con plazo hasta el 31 de mayo de 2022.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          - Las empresas que se ajusten a los nuevos criterios (a corte de 31 de diciembre de 2021) relacionados en cuanto al tope de sus activos y de ingresos, deben implementar un programa de transparencia y ética y tendrán plazo hasta el 31 de mayo de 2023.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Un programa de transparencia y ética está regido por un Código de Ética y diversas políticas que se convierten en el mapa a seguir por cada uno de los miembros de la organización; así mismo, de un programa se desprenden la implementación de herramientas como canales de denuncia (línea ética o buzones de transparencia), controles a procesos, procedimientos de verificación (auditoría y due diligence) y diversos controles que permiten la prevención y disminución de la posibilidad de materialización de riesgos. Este programa es una herramienta que garantiza la mitigación de los riesgos de fraude y corrupción, y cualquiera que pueda dañar a la compañía.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Por lo anterior, si bien, no todas las compañías en el país se encuentran obligadas a la adopción de un programa de transparencia y ética, sí es una <u><strong>buena práctica</strong></u> que debería ser adoptada por todas las organizaciones en pro de prevenir la materialización de cualquier conducta antiética, pues, en el caso hipotético en que se materializaran estas conductas, generarían una afectación grave a la compañía, ya sea a nivel reputacional, judicial, operacional y/o de transparencia.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Como consultores expertos en la administración de riesgos corporativos, debemos recomendar a las compañías, sin importar su tamaño, a realizar todas las acciones posibles para fomentar una cultura hacia la lucha contra la corrupción.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En definitiva, las empresas no deben sentir la obligación de implementar un programa de ética y transparencia en pro de cumplir con la norma y obligación legal, sino implementarlo a partir de las diversas ventajas y beneficios que este puede traer para la compañía.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontStyle: "italic" }}>
          “Un programa de cumplimiento no es solo un deber legal de la empresa, es un deber ético y estratégico que va a asegurar la continuidad del negocio.”
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
            by: Juan León
          </a>
        </Typography>

        
      </Container>
    </Box>
  );
};

export default ArticuloDiezYSiete;