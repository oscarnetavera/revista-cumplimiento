import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_JUAN_ARTICULOS } from "../assets"; // Asegúrate de importar la imagen correcta

const ArticuloQuince = () => {
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
          PREVENCIÓN DE RIESGOS EN UN NEGOCIO JURÍDICO
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
          <strong>Fecha:</strong> 21 de Julio, 2021
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sin lugar a dudas todos en algún momento de nuestras vidas hemos estado inmersos en la realización de un negocio; los ejemplos más comunes son la compra de un vehículo, una casa, un apartamento, adquirir un préstamo ante una entidad bancaria, contratar una persona que desarrolle un servicio, entre otros.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sin duda, estos eventos son declaraciones de voluntad, de cada uno de ustedes, como sujetos de derechos, que pretenden ordenar relaciones jurídico-privadas, estableciendo en ellas los efectos jurídicos que pretenden conseguir, generalmente plasmando esta voluntad mediante un contrato.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En ese sentido, la realización de un negocio permite a las partes adquirir aquello que necesitan, a partir de retribuciones recíprocas. No obstante, desde otra perspectiva, un negocio es una decisión que conlleva una exposición a un tipo de peligro, es decir, es una <strong><u>DECISIÓN que genera RIESGOS.</u></strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El riesgo podemos definirlo como aquella posibilidad que conlleva un peligro, en otras palabras, es la posibilidad de que algo desagradable acontezca sobre nuestro negocio; sin duda, el éxito de un negocio jurídico es directamente proporcional a la gestión y prevención que hagamos sobre los riesgos existentes, afirmación que busco explicar.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Existen diversos factores de riesgo que trae consigo nuestro negocio, daremos algunos ejemplos como:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          i) Que seamos objetos de una estafa.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          ii) Que exista vinculación de la contraparte del negocio a actos de corrupción, lavado de activos y financiación del terrorismo.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          iii) Que el bien o activo a adquirir se encuentre vinculado a un proceso judicial.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          iv) Que la persona con quien nos obliguemos no sea propietaria del activo (bien mueble, inmueble, sociedad, título).
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          v) Que el activo objeto de negociación cuente con gravámenes.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          vi) Que existan vicios ocultos sobre el bien.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          vii) Otros.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Evidentemente, la materialización de cualquiera de estos hechos generará que no se cumpla con el objetivo de nuestro negocio jurídico y se generen graves consecuencias, por lo cual, es <strong><u>INDISPENSABLE</u></strong> que realicemos la gestión y prevención de estos riesgos, mediante los siguientes pasos:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          1. <strong><u>Identificar la naturaleza de nuestro negocio.</u></strong> Ej. compraventa, permuta, mutuo, cesión, dación, entre otros.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          2. <strong><u>Identificar los riesgos que sean inherentes a nuestro negocio jurídico</u></strong> a partir de su naturaleza. Ej. En la compraventa uno de los riesgos existentes correspondería a la existencia de vicios ocultos en el bien a adquirir, la capacidad de la contraparte para obligarse, entre otros.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          3. Una vez identificados los riesgos, debemos <strong><u>analizar e identificar la forma de controlarlos</u></strong> por ende, reducir la probabilidad de que se materialicen. Ej. Para controlar el riesgo de que el bien cuente con vicios ocultos, en caso de ser un vehículo, es recomendable realizar un peritaje para evaluar las condiciones del mismo.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Es absolutamente necesario poder conocer al detalle toda la información que podamos obtener frente a nuestra contraparte, pues a partir de este elemento se pueden materializar riesgos muy graves, como la vinculación a lavado de activos y financiación del terrorismo, actos de corrupción, procesos de extinción de dominio, en donde, es evidente que en la mayoría de los casos, debemos evitar tener cualquier tipo de vinculación o relacionamiento con personas vinculadas a estos hechos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una vez identificados los riesgos, entramos en la etapa de decisión, en donde tenemos 3 posibles caminos:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          1. Decidimos proceder con el negocio debido a que no se identificó la existencia de riesgos relevantes sobre el mismo.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          2. Decidimos desistir del negocio, toda vez que en definitiva no hay manera de mitigar los riesgos identificados, y por ende, no toleramos las consecuencias que estos pueden generar.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, paddingLeft: "3.5em" }}>
          3. Decidimos aceptar las condiciones del negocio a pesar de la existencia de riesgos, toda vez que no son significativos o podemos realizar acciones para controlarlos y reducir la posibilidad de materialización.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El común denominador en los negocios, es la toma de decisiones basados en <strong>experiencias pasadas respecto de la probabilidad de ocurrencia, su intuición, las lecciones aprendidas, los datos históricos, entre otros.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>Sin perjuicio de este conocimiento adquirido basado en la experiencia, recomiendo que realicen esta metodología de identificación y gestión de riesgos, en tanto permitirá que puedan realizar sus negocios a partir del análisis de la viabilidad del mismo, en donde sí se tomó la determinación de avanzar en su realización, tengan una probabilidad alta de ser exitosos y cumplir con sus objetivos.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En caso de que su negocio sea a gran escala o de mucha relevancia para ustedes, lo recomendable es contratar un experto que le brinde la asesoría necesaria frente a la identificación y análisis de los riesgos inherentes al mismo, el uso de las herramientas necesarias que le permitan informarse de manera adecuada para tomar una decisión objetiva e idónea sobre su negocio, y por ende que determine la viabilidad del mismo.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontStyle: "italic" }}>
          <u>Sin duda, el éxito de un negocio jurídico es directamente proporcional a la prevención de sus riesgos.</u>
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

export default ArticuloQuince;