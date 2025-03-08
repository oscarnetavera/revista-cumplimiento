import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_EDHER_ARTICULOS } from "../assets";

const ArticuloCuatro = () => {
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
          ¿QUÉ TAN SEGURO ES QUE ESTOY PROTEGIENDO MI PATRIMONIO?
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
          <strong>Fecha:</strong> 30 de Noviembre, 2020
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Todos alguna vez en la vida hemos escuchado de las compañías aseguradoras, de los agentes de seguros y del dichoso negocio de estas personas que viven de vender pólizas para arriba y para abajo a todo el mundo y sin miramientos. Tenemos que hay
          seguros para automóviles, para personas, para cosas, y hasta para contratos y medidas cautelares.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sin embargo, es ley de la vida que a todos en la vida nos han exigido adquirir una Póliza de Seguro para algo en particular, pero ¿alguna vez nos hemos detenido a valorar o a siquiera intentar entender qué es lo que estamos asegurando? Esta es una
          circunstancia fundamental y elemental que quizás muchos ignoramos, y que por supuesto, si fuéramos más conocedores del tema, nos ahorraría un montón de problemas en caso de que la dichosa Póliza deba usarse.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Todos quienes tenemos un mínimo conocimiento del derecho de seguros hemos escuchado aquella teoría clásica donde nos han predicado unos elementos esenciales del contrato de seguro (Prima, Riesgo Asegurado, Interés o Monto Asegurado y Obligación
          Condicional del Asegurador), donde nos demuestran que lo que se desea es prevenir que el patrimonio del asegurado se vea afectado negativamente por efectos de un riesgo que se está corriendo. En este orden de ideas, podemos entender que es el
          asegurador quien se subroga el deber de pago para efectos de un resarcimiento que deba darse, en la medida de lo posible, para devolver las cosas a su estado anterior.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Así las cosas, si por azares de la vida tenemos un vehículo, por ejemplo, podemos estar tranquilos en la medida de que algo pudiere pasar con este, toda vez que, si no estrellamos, chocamos o sufrimos alguna clase de daño usándolo por parte de un
          tercero, no será más que un deducible de aproximadamente el 10% el que debemos cancelar para efectos de tener nuestro vehículo como nuevo, eso si no se declara en pérdida total.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Pero ¿Es esta la lógica con la que funcionan todos los contratos de seguro? Lo cierto es que no, debido a la limitada regulación que existe en materia comercial en Colombia, podemos ver que así como existen contratos de seguro que salvaguardan el
          patrimonio del beneficiario, también hay aquellos que por ministerio de la ley aseguran solamente el pago al asegurado, sin que ello implique la protección del patrimonio de quien asegura, pudiendo por ministerio del artículo 1096 del Código de
          Comercio, recobrar al tomador el valor resultante de la afectación a la Póliza adquirida por aquello de la sostenibilidad financiera de la compañía aseguradora.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En este sentido encontramos distintas aseguradoras que trabajan de esta manera. Este tipo de circunstancias se evidencian en pólizas de arrendamiento, judiciales, y hasta en algunas de responsabilidad civil, lo que nos lleva a preguntarnos entonces
          cuando nos llega el recobro: ¿A qué hora pasó esto, yo dónde acepté esto? Bueno, esto es algo que debemos tener bien presente a la hora de adquirir cualquier Póliza, exigir a quien nos la vende nuestro Derecho a la Información.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Es por ello, que debemos tener en cuenta estas pautas para efectos de entender ¿qué es lo que estamos asegurando?, ¿cuáles son mis derechos, deberes y en qué me beneficia tener esa Póliza?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          1. Verifiquemos especialmente qué tipo de Póliza estamos comprando, no es lo mismo adquirir un SOAT, que una Póliza Todo Riesgo o de Responsabilidad Civil Extracontractual.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          2. Revisemos cuidadosamente ¿Qué es lo que estamos asegurando?, ¿Cuál es ese riesgo, ese bien, ese patrimonio, o ese pago que estamos asegurando? Porque quizás, es este el error en el que se incurre de parte de muchos, pues asumen que su
          patrimonio está asegurado cuando en realidad solo están expuestos a un recobro abusivo.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          3. Examinemos con detenimiento la relación prestaciones – precio, no sea que, por efectos de nombre o marca, estemos adquiriendo el mismo servicio que nos podría dar otra aseguradora, hasta con más prestaciones, por un precio mucho más accesible.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          4. Analicemos los condicionamientos para la prestación de los servicios. Muchas pólizas a veces se pintan como las que más servicios prestan, pero a la hora de solicitarlos resulta que se condicionan por circunstancias a topes irrisorios a la hora
          de recibirlos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          5. Por último, pero no menos importante, asegurémonos de que la empresa aseguradora sí exista, que se encuentre legalmente constituida, y no nos enfrentemos después a una empresa de papel que nos deje peor que antes.
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

export default ArticuloCuatro;