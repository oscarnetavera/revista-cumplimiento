import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_JUAN_ARTICULOS } from "../assets"; // Asegúrate de importar la imagen correcta

const ArticuloDiezYSeis = () => {
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
          AUMENTO DE RIESGOS DE SUPLANTACIÓN Y ALTERACIÓN POR USO INDEBIDO DE FIRMAS DIGITALIZADAS Y ELECTRÓNICAS
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
          <strong>Fecha:</strong> 9 de Noviembre, 2021
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          La transformación en los negocios y a nivel empresarial vivida en los últimos años ha sido inimaginable, el comercio electrónico y el tráfico de más del 80% de los negocios por medios digitales es una realidad.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El comercio electrónico no es una novedad normativa en Colombia, desde la expedición de la ley 527 de 1999, se nos habla de la posibilidad de realizar cualquier cuestión de índole comercial, contractual o no, estructurada a partir de medios electrónicos, mediante la utilización de mensajes de datos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El artículo 2 de la ley 527 de 1999 nos habla de toda operación comercial de suministro o intercambio de bienes o servicios; todo acuerdo de distribución; toda operación de representación o mandato comercial; todo tipo de operaciones financieras, bursátiles y de seguros; de construcción de obras; de consultoría; de ingeniería […], entre otros.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Dicho esto, los negocios pueden realizarse por medio de medios electrónicos a partir de la suscripción de acuerdos (oferta y aceptación), contratos electrónicos, pagarés electrónicos, y demás herramientas jurídicas que permiten perfeccionar un acuerdo de voluntades. La Ley 527 de 1999, en su Artículo 5 y 6, mediante el principio de equivalencia funcional, nos dice que un contrato en papel firmado de puño y letra tendrá la misma validez y eficacia jurídica que ese mismo contrato en soporte magnético con firma digital o electrónica.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Ahora bien, a partir de esta realidad, del uso de documentos electrónicos, surge la necesidad de generar mecanismos que puedan vincular a una persona a estos documentos electrónicos, tal y como funciona en el mundo físico, en donde un documento en papel debe ser firmado, mediante firma autógrafa, en pro de que los intervinientes de este manifiesten la voluntad y se vinculen con el contenido material del documento.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La firma, en el mundo físico (firma autógrafa), es aquella que genera un vínculo entre el creador del documento y el contenido material del documento, en donde el firmante se adhiere a las manifestaciones de voluntad plasmadas en este documento y lo vincula al cumplimiento de obligaciones. No es diferente en el mundo digital respecto a los documentos electrónicos, en donde también se debe crear este vínculo entre los intervinientes del negocio, razón por la cual surge la figura de la firma DIGITAL y firma ELECTRÓNICA.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La firma digital ha sido regulada mediante la ley 527 de 1999, y es aquella en la cual, mediante el uso de tecnología de criptografía asimétrica, se asocia la identidad de una persona al mensaje de datos o documento. La firma digital está asociada a un certificado digital expedido por una entidad autorizada por la ONAC, y asociada a una llave pública y privada que permite garantizar la autenticidad, integridad, confidencialidad y disponibilidad de la firma y el documento electrónico.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Por otro lado, la firma electrónica, es regulada por el Decreto 2364 de 2012, y es aquella en donde a partir del principio de neutralidad tecnológica e igualdad de tratamiento de las tecnologías, se permite el uso de cualquier tipo de tecnología (códigos, contraseñas, datos biométricos, o claves criptográficas privadas) que permita identificar a una persona, en relación con un mensaje de datos, siempre y cuando el mismo sea confiable, y que permita garantizar justamente la autenticidad, integridad, confidencialidad y disponibilidad de la firma y el documento electrónico.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Ahora bien, para efectos prácticos, existe una categoría adicional a las dos firmas planteadas, correspondiente a la FIRMA DIGITALIZADA. La firma digitalizada corresponde a una firma, que podría ser considerada como una firma electrónica simple, en donde mediante el uso de scanner, fotografía, tabletas digitalizadoras, entre otros, se toma el elemento gráfico de la firma manuscrita (realizada en papel) y se incorpora en el mundo digital como una imagen.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El ejemplo más claro es cuando firmamos una hoja blanca de papel, escaneamos esta firma, y la imagen la copiamos y pegamos en un documento electrónico en formato Word o PDF.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sin duda, es una práctica que actualmente es utilizada y aceptada por muchas empresas y personas naturales para el curso de sus negocios, y que mediante el uso de esta firma digitalizada se adhieren y suscriben acuerdos, contratos, y demás.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El punto crítico del uso de una firma digitalizada, sin duda, es el aumento de riesgos que esto provoca, toda vez que legalmente tiene validez jurídica, pero su valor probatorio es ineficiente. Una firma digitalizada aumenta la probabilidad de materialización de riesgos de <strong>SUPLANTACIÓN y ALTERACIÓN.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una firma digitalizada no nos brinda ningún tipo de seguridad jurídica e informática, toda vez que no garantiza los principios estructurales de una firma digital o electrónica avanzada, correspondientes a la autenticidad, integridad, y disponibilidad.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La autenticidad entendida como la forma de constatar que la persona que crea, suscribe y envía el mensaje o firma el documento es la persona que dice ser; la integridad, aquella que permite estar seguro que la información electrónica no haya sido alterada, modificada, suprimida o adicionada; y la disponibilidad y conservación como la necesidad de conservar el documento electrónico de manera accesible para su posterior consulta.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Actualmente, las cifras en materia de ciberdelincuencia han aumentado significativamente, más del 50% de las empresas en Colombia han experimentado un evento de fraude en los últimos años relacionado con el uso de sistemas informáticos; cerca de USD 12.000 millones aproximadamente ha perdido el sector empresarial en el mundo a causa de ciberdelincuentes; en 2020 se presentaron más de 30.000 denuncias sobre incidentes de ciberseguridad en Colombia.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Los ciberdelincuentes son conscientes de esta realidad sobre el uso de firmas digitalizadas por parte del sector empresarial en Colombia, y día a día, mediante técnicas de ingeniería social, buscan quebrantar las barreras de seguridad informática para realizar actos de suplantación y alteración de diversos documentos, y utilizarlos para sacar provecho y beneficio personal.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En mi calidad de consultor, vinculado a una compañía dedicada a la administración de riesgos corporativos que cuenta con un laboratorio digital forense propio, hemos evidenciado múltiples casos en donde ciberdelincuentes suplantan a miembros de la alta gerencia, personal de áreas de tesorería y contabilidad, y/o cargos con un nivel importante de decisión de una compañía para obtener transacciones pecuniarias en su beneficio; una de las modalidades más frecuentes es el uso de las firmas digitalizadas que les permitan afianzar y llevar a cabo sus actos de <strong>SUPLANTACIÓN.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La reflexión del presente escrito no es desincentivar el uso de las firmas electrónicas, por contrario, estas son una herramienta que día a día se vuelven más necesarias para el curso de los negocios y que a partir de unas políticas definidas en la organización y mediante el uso de herramientas que permitan garantizar los principios de autenticidad, integridad y conservación, las firmas electrónicas traerán consigo múltiples beneficios para la compañía como: i) mayor celeridad en los negocios; ii) cerrar tratos con garantía de almacenamiento, agilidad, vigilancia; iii) reducción o eliminación del uso de papel; iv) gestión de documentos es más eficiente; v) acceso al contenido a cualquier hora y desde cualquier lugar; vi) reducción de costos; entre otros.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Mi invitación, a partir de la experiencia generada, es al <strong>USO CONSCIENTE DE LAS FIRMAS</strong>, a las <strong>LIMITACIONES</strong> que debemos promover sobre la <strong>ACEPTACIÓN DE FIRMAS DIGITALIZADAS</strong> para el curso de nuestro negocio, pues como lo hemos resaltado, estas no garantizan una seguridad informática y jurídica, ni cuentan con el valor probatorio necesario en caso de que surja cualquier controversia.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Dicho todo lo anterior, recomiendo que su negocio pueda ser acompañado por expertos en la materia, que puedan brindarle la <u><strong>ASESORÍA LEGAL Y DIGITAL QUE SU ORGANIZACIÓN NECESITA</strong></u>, de forma personalizada, integral y efectiva, que permita garantizar a su compañía la correcta estructuración de las políticas para el manejo, uso y aceptación de las firmas a partir de un análisis de riesgos en cada uno de los procesos de la compañía, y de esta manera disminuir la probabilidad de materialización de los mismos.
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

export default ArticuloDiezYSeis;