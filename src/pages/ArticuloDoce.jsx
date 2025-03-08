import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_JUAN_ARTICULOS } from "../assets"; // Asegúrate de importar la imagen correcta

const ArticuloDoce = () => {
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
          ¿QUÉ NECESITO PARA UNA TRANSFORMACIÓN DIGITAL DE MI EMPRESA?
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
          <strong>Fecha:</strong> 14 de Enero, 2021
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          La transformación en los negocios y a nivel empresarial vivida en los últimos años ha sido inimaginable, entender cómo el mundo, la economía y los nuevos consumidores requieren nuevas formas de prestar servicios, adquirir productos y utilizar las herramientas
          de mercado ha sido el mayor reto para los empresarios, emprendedores y comerciantes.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La transformación hacia la tecnología llegó más rápido de lo que esperábamos, y ha dado paso a nuevos modelos de negocio, basados en una estructura digital y de cambio, adaptados a las nuevas condiciones en las que vivimos y a las necesidades de los nuevos
          consumidores.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Para los negocios tradicionales, pequeñas empresas, y hasta empresas con amplia trayectoria en el mercado, esta nueva realidad no es ajena, en cuanto deben someterse a lo que denominamos <strong><u>“transformación empresarial digital”,</u></strong> la
          cual es el proceso en que una organización evoluciona a nuevos métodos de trabajo, metodologías, estrategias y herramientas que incorporan elementos digitales y tecnológicos que garantizan la continuidad del negocio y, por ende, seguir con la comercialización de sus productos o la prestación de sus servicios en un nuevo mundo de consumo para obtener beneficios.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Ningún sector económico y productivo es ajeno a esta transformación, más del 60% de las grandes compañías en Colombia han dado pasos hacia la evolución e implementación de nuevas herramientas digitales que permitan dar un cambio a aspectos como la forma
          de adquirir nuevos clientes y llegar a nuevos mercados, la relación y forma de interactuar con sus clientes, hasta el uso de aplicativos para la prestación de sus servicios.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Ahora bien, estos cambios deben ir acompañados de un proceso de implementación adecuada, personalizada al ritmo de cada compañía u organización, con un nivel de integración y alineación alto, teniendo en cuenta que:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>1. Afecta a la organización en todos los niveles, desde las áreas más bajas hasta los directivos.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>2. Genera la exposición a nuevos riesgos legales y digitales.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Asimilar las implicaciones de la transformación empresarial en una organización requiere de la evaluación de diversos factores que pueden mitigar la exposición de la compañía a riesgos de tipo <strong><u>legal y digital.</u></strong> A continuación analizaremos dos (2) variables a tener en cuenta al momento de planear, elaborar, implementar y ejecutar elementos digitales en el marco de la transformación su compañía y negocio:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong><u>1. Ciberseguridad</u></strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Es necesario que las empresas inviertan en tecnologías de seguridad informática que respalden los valiosos datos internos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La ciberseguridad en las compañías grandes, medianas y pequeñas empresas es un tema circunstancial en la actualidad que se debe tener en cuenta al momento de proteger su <strong><u>información y bases de datos</u></strong> para el continuo trabajo diario.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Para la creación de fronteras de seguridad informática es <strong><u>importante implementar</u></strong> desde un firewall hasta la adquisición de un anti-virus para el empleado, colaborador, contratista y cliente como mecanismo de protección de ataques por parte de cibercriminales.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Habitualmente, cuando teletrabajamos necesitamos acceder a los recursos corporativos para desempeñar nuestro trabajo diario sin ningún tipo de restricción. Son los servidores de acceso remoto los que permiten que los dispositivos externos puedan acceder a los recursos internos, así como proporcionar un entorno de teletrabajo seguro y aislado. Un servidor y/o un dispositivo de la compañía comprometido podrían permitir el acceso no autorizado a los recursos de la empresa a terceros para obtener información confidencial. <strong><u>Al implantar medidas de seguridad en servidores y dispositivos protegemos la información corporativa y por ende la continuidad de negocio.</u></strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Permitir a los teletrabajadores acceder de forma remota a los recursos de la organización ofrece a los ciberdelincuentes oportunidades adicionales para vulnerar la seguridad de la empresa. Si los dispositivos no están correctamente protegidos supone un riesgo adicional no sólo para la información a la que accede el teletrabajador, sino también para los demás sistemas y redes de la organización.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Las organizaciones deben ser responsables de asegurar sus propios dispositivos, así como de exigir a sus usuarios que mantengan niveles de seguridad apropiados.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong><u>2. Sistema de protección de datos</u></strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El activo más valioso de toda organización son los datos. Al referirnos a los datos hacemos alusión tanto a los datos personales de los miembros de la organización, clientes y proveedores, como a los datos estratégicos que contienen las metodologías de trabajo, ideas, secretos comerciales, productos, know how, estrategias, y cualquier tipo de información del negocio.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Hablar de la protección de datos de las empresas, es hablar de <strong><u>seguridad de la información,</u></strong> elemento entrelazado con lo expuesto en nuestro acápite de ciberseguridad.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La protección de datos cuenta con regulación normativa a nivel nacional e internacional, por lo que si una empresa u organización no protege sus datos se expone a la materialización de riesgos legales cómo sanciones por parte de entidades regulatorias y responsabilidad ante terceros, así como a otros riesgos de índole operacional, cómo no poder continuar con las operaciones, riesgos económicos, y riesgos reputacionales.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Dentro de los principios básicos que debe aplicar toda organización para establecer un <strong><u>Sistema de protección de datos,</u></strong> tanto PYMES como grandes empresas, se encuentran:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          - Tratar de forma lícita, leal y transparente los datos adquiridos por la compañía
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          - Blindarse mediante la estructuración de autorizaciones, contratos y documentos para clientes, proveedores, y a nivel interno.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          - Identificar los riesgos y amenazas ante la pérdida de información, así como las fuentes de reproducción, en pro de la creación de controles y medidas.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          - Estructurar procedimientos y políticas claras y efectivas sobre el sistema de protección de la información, que debe contener directrices sobre su manejo y los controles existentes.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          - Dar un rol y responsabilidades a los miembros del equipo en cuanto al debido manejo de la información.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sin lugar a dudas, la transformación empresarial digital es una necesidad para los empresarios, tanto de grandes estructuras de negocio como de pequeños emprendedores, debido a las necesidades actuales de mercado.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Dicho todo lo anterior, recomendamos que para este proceso complejo y sistemático, su negocio pueda ser acompañado por expertos en la materia, que puedan brindarle la <strong><u>ASESORÍA LEGAL Y DIGITAL QUE SU ORGANIZACIÓN NECESITA,</u></strong> de forma personalizada, integral y efectiva, que permita garantizar a su compañía estar blindado de los riesgos generados, y disfrutar al 100% los beneficios obtenidos por medio de estas nuevas estrategias digitales de mercado.
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

        {/* Colaborador */}
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
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Evita el comportamiento predeterminado del enlace
               // Navegación a la página de Andrés Senin Muñoz
            }}
          >
            Colaborador: Andrés Senin Muñoz
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default ArticuloDoce;