import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_INVITADA_BELEN_GRECO } from "../assets";

const ArticuloNueve = () => {
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
          LEGALTECH
        </Typography>

        {/* Imagen del artículo */}
        <Box
          component="img"
          src={FOTO_INVITADA_BELEN_GRECO}
          alt="Legal-Tech"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            mb: 4,
          }}
        />

        {/* Fecha del artículo */}
        <Typography variant="body1" sx={{ mb: 4, fontStyle: "italic" }}>
          <strong>Fecha:</strong> 4 de Marzo, 2021
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Los avances tecnológicos han impactado en numerosas industrias, entre ellas, en el ámbito legal. El término legaltech es la abreviatura de Legal Technology. En general, hace referencia a la utilización de tecnología en la prestación de servicios
          legales. Sin embargo, no es únicamente la tecnología que utilizan los abogados, abarca también todos aquellos proyectos disruptivos del sector legal que buscan innovar la forma tradicional en que se han prestado los servicios jurídicos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Legaltech se refiere entonces a la utilización de métodos de gestión y tecnologías provenientes de la ingeniería y de la administración para innovar en el ejercicio de la profesión legal. Para lograr ello, debe combinarse el Legal Tech con Machine
          Learning, Legal Automation, Big Data aplicado, Blockchain y Legal Design.
        </Typography>

        {/* Subtítulo */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, color: "#f5a623" }}>
          Situación en Argentina
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          En la legislación argentina, el primer antecedente importante fue en el año 2001 con la promulgación de la Ley de Firma Digital. Posteriormente, la modificación del Código Penal que introdujo los delitos informáticos; un concepto amplio de
          documento, firma y suscripción; y luego el delito de grooming. En 2015, se sancionó el nuevo Código Civil y Comercial que incorporó nuevas precisiones sobre la firma electrónica y la firma digital. A nivel provincial, en materia procesal se
          promovieron las notificaciones electrónicas.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En 2017, se lanzó un sistema de inteligencia artificial denominado PROMETEA –desarrollado por el Ministerio Público Fiscal de CABA y la Facultad de Derecho de la UBA- con el objetivo de agilizar la justicia y permitir un mejor uso de los
          recursos. Es aplicada a la justicia pública de Argentina, permitiendo al poder judicial resolver causas de diversa complejidad de manera automatizada. Posee un 96% de efectividad. Se utilizó su experiencia para crear PretorIA, que es el primer
          sistema de inteligencia artificial predictivo en un máximo tribunal judicial del mundo, desarrollada para ser aplicada en la Corte Constitucional de Colombia.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En 2018, se instauraron las Sociedades Anónimas Simplificadas Digitales. El sistema proponía la constitución de ellas de manera digital utilizando un estatuto modelo en tan solo 24 hs., debiendo poseer libros digitales. Sin embargo, esta figura
          fue desmantelada por las nuevas autoridades gubernamentales que asumieron y siempre tuvo oposición por parte de determinados sectores. Aun así, se concedió una medida cautelar que permite la continuidad de los trámites y funcionamiento de las
          SAS promovida por la asociación de emprendedores de Argentina.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En noviembre de dicho año, se firmó la primera transacción inmobiliaria en Blockchain de Argentina. Fue realizado por el estudio Bildenlex Abogados -en conjunto con su Laboratorio de Innovación Jurídica y con la tecnología de Signatura-
          desarrollaron un proceso para facilitar la suscripción de los boletos de compraventa de las unidades que comercializan. De esta manera, pueden firmar más rápido, mediante un boleto digital certificado bajo Blockchain, al que las partes tienen
          acceso en todo momento. Es una tecnología que otorga confianza, sin la necesidad de recurrir a un tercero, permite identificar a las partes que intervienen en la operación y al documento firmado, y además dotarlo de fecha cierta al subirlo a la
          blockchain de Bitcoin.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En el mismo año, se originó el primer conflicto propiamente de legaltech con la App Quickvorcio diseñada para vincular a letrados y clientes interesados en obtener información o tramitar divorcios. El Colegio de Abogados de Córdoba inició una
          acción por considerarla una publicidad engañosa para captar clientes, lo que puede constituir un daño a la comunidad y al “buen nombre de los profesionales del derecho”. El Colegio solicitó una medida cautelar que la jueza concedió señalando
          que, de continuar vigente la aplicación, “el ciudadano común” puede incurrir en “error o confusión respecto del alcance de los servicios que brinda la plataforma, así como de los pasos procesales, tiempos y consecuencias que implica un proceso
          de divorcio”. Ordenó el bloqueo preventivo del sitio web y las plataformas en uso. Sin embargo, especialistas en derecho informático consideraron que es impracticable y excede su competencia al prohibir la existencia de una aplicación que abarca
          espacios que van más allá de su jurisdicción.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En el sitio web argentina.gob.ar hay información legal en lenguaje claro e instrucciones sencillas para realizar autónomamente trámites administrativos. Lo mismo ocurre en las páginas de algunos gobiernos provinciales, para evitar demoras
          innecesarias realizando trámites por vía judicial e incrementando el acceso a dicha información. Ejemplo de ello son la solicitud online de partidas de nacimientos, actas de matrimonio, certificados de antecedentes penales y reincidencia, entre
          otros.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En 2020, como consecuencia de la pandemia, también se produjeron algunos cambios importantes. Se introdujo al Código Civil y Comercial el concepto de domicilio electrónico con la modificación de la Ley de Alquileres. Asimismo, se obligó al Poder
          Judicial y a los operadores jurídicos a realizar numerosos procesos –que hasta el momento se realizaban presencialmente- de manera digital. Por ejemplo, las notificaciones online, expedientes digitales, audiencias y juicios por videoconferencias,
          entre otras; muchas de estas prácticas han llegado para quedarse.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En junio, la Federación de Colegios de Abogados de la provincia (Fecacor) y el Colegio de Abogados de Córdoba presentaron una app especialmente diseñada para sus matriculados, totalmente gratuita. Se trata de <strong>LegisApp Lite</strong> que
          ofrece la posibilidad de que el abogado acceda al movimiento de todas sus causas, reciba notificaciones oficiales del Poder Judicial y alertas de novedades sobre expedientes y “calendarice” los eventos. También le permite la posibilidad de subir
          escritos electrónicos al Sistema de Administración de Causas (SAC) y enviar e-mails a la mesa de entrada de los tribunales.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En agosto, la empresa Telefónica Movistar lanzó Maite, su asistente virtual legal, que responde consultas y asiste al cliente de forma directa –sea consumidor final o alguien de la empresa que necesite información legal, como un empleado de la
          misma-.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En Argentina hay distintas empresas y servicios <strong>Legaltech</strong>, que se pueden clasificar en 7 categorías:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          1. Software de gestión para despachos y abogados: <strong>DretLaw, ProcuSmart, Abogacía Práctica y LegisApp Lite.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          2. Plataformas para adquirir y/o generar contratos online (sin necesitar abogado): <strong>OnLegal o Dmindlaw.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          3. Marketplaces jurídicos o plataformas de intermediación para que los abogados se den a conocer y los clientes encuentren al profesional que necesitan: <strong>Legal Sí.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          4. Plataformas para resolver consultas jurídicas y llevar a cabo reclamaciones online: <strong>IUStartup, LegalYa, 911abogados, Appelas, MiDivorcio y El Reclamador.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          5. Evidencias digitales: <strong>Signatura y Escribano Digital.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          6. Servicios para automatizar procesos legales: <strong>Sherlock Legal, LegalHub y Smart Legal.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          7. Otros que son diferentes proyectos que no encajan en las anteriores: <strong>Litis Net, Crypto Justice, Dtec Deal, Cross Entropy Solutions, Zircon Tech</strong>, entre otras apps para buscar legislación argentina como{" "}
          <strong>Ley Argentina.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Un proyecto que está siendo desarrollado por Bildenlex Abogados y Koibanx es VERIFIXA. La aplicación (jurídico-contable) consiste en llevar concursos preventivos para aquellas empresas que lo soliciten o para anticiparse a dicho proceso, ordenar
          las cuentas y negociar las deudas con los distintos acreedores.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Los invito a visitar la página de estas <strong>Legaltech</strong> para conocer mejor las funcionalidades de cada una y entender sus sistemas.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Toda esta innovación tecnológica ya está generando disrupciones en distintos sectores, y el sector legal no será la excepción. Es de fundamental importancia que el derecho y la justicia avance junto con la tecnología, aprovechando estas
          herramientas de manera favorable a nuestras necesidades actuales. Queda en evidencia que los abogados deberán entender conceptos ajenos al derecho para lograr estructurar un sistema de justicia más eficaz, rápido y menos costoso. Asimismo,
          deberán trabajar con profesionales de otras ciencias manteniendo una relación colaborativa para solucionar los conflictos que tienen una parte de derecho y otra parte de otras disciplinas o diversa índole.
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
         
            by: Belen Greco Petry

        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "right",
            fontStyle: "italic",
          }}
        >
          Abogada egresada de la Universidad de Mendoza en Argentina.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "right",
            fontStyle: "italic",
          }}
        >
          Experta en derecho digital y nuevas tecnologías.
        </Typography>
      </Container>
    </Box>
  );
};

export default ArticuloNueve;