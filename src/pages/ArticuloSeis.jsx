import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_INVITADA_ANDRES_MUNOS } from "../assets";

const ArticuloSeis = () => {
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
          TELETRABAJO COVID-19
        </Typography>

        {/* Imagen del artículo */}
        <Box
          component="img"
          src={FOTO_INVITADA_ANDRES_MUNOS}
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
          <strong>Fecha:</strong> 13 de Agosto, 2020
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Cualquiera pensaría que un enemigo común a todos los seres humanos ─ uno de la talla de una pandemia ─ sería suficiente para calmar los fervores ideológicos de las sociedades polarizadas y, con ello, unir a la especie en torno a su bienestar. Pero
          no: la transformación digital que estaba para unos años llegó con un abrir y cerrar de ojos y en el momento menos pensado; como una jugada de ajedrez puestos en JAQUE al llevar toda la información digital a nuestras casas para dar continuidad de
          nuestras labores sin ningún tipo de control o supervisión estructurada para la seguridad de la información.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El realismo inminente que trae consigo esto son para los crackers o cibercriminales al acecho de toda vulnerabilidad, pero ya hablé de ello más adelante. Por ahora, vemos que la crisis del COVID-19 ha provocado una revolución forzosa y veloz hacia
          una nueva forma de entender el trabajo.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Las medidas de confinamiento a lo largo del mundo han hecho que miles de compañías opten por el teletrabajo para preservar la salud de sus empleados y negocio. Parece que, después de años planteando si el teletrabajo es viable o no, o si es
          rentable o no, ahora no hay duda de que es más que factible. Esto podría provocar una nueva revolución en nuestra cultura de trabajo, y parece que se está fraguando.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sin embargo, el teletrabajo no es todo color de rosa. De hecho, Google ha vivido una curiosa experiencia, y es que el pasado 22 de mayo la compañía decidió dar el día libre a sus trabajadores en respuesta al agotamiento y estrés que estaban
          experimentando sus empleados. No es fácil cambiar tu cultura del teletrabajo, y por eso es importante que sigas algunos consejos para que el estrés y las horas extras no te terminen pasando factura. Es esencial que sigas unos determinados hábitos
          y rutinas, y que, además, te reserves algunos momentos de descanso y desconexión. Seguro que te viene genial conocer las apps de Movistar, donde tienes un montón de actividades como ejercicios de yoga, entretenimiento y otras experiencias.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Además, se unen a este cambio gigantes como Microsoft o Amazon, que están entre las más de 30 compañías que optaron por el teletrabajo a finales de febrero. Aunque cabe destacar que, entre todas estas apuestas por el teletrabajo, Apple está siendo
          la excepción. La compañía norteamericana parece que no está muy contenta con el modelo, y es que no están recogiendo los resultados esperados. Uno de sus principales problemas: la seguridad y las filtraciones. ¿Qué te parece? ¿Será una verdadera
          revolución en la forma de trabajar?
        </Typography>

        {/* Subtítulo */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, color: "#f5a623" }}>
          Amenaza para las redes domésticas
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Muchas personas trabajan con información de la empresa en sus ordenadores personales. El problema es que no puedes saber con exactitud cuál es su nivel de protección, quién más usa el equipo y los conocimientos de estos usuarios sobre las
          ciberamenazas contemporáneas. En otras palabras, aunque tus empleados hayan recibido formaciones para reconocer un archivo adjunto malicioso, eso no garantiza que tus datos corporativos no acaben cifrados por el error que alguno de ellos haya
          cometido en casa.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Los vecinos representan un peligro adicional. ¿Quién sabe qué otros dispositivos están conectados a los routers de los empleados y cómo se ha configurado el acceso a las carpetas compartidas? No lo sabremos, no obstante, los cuidados y
          recomendaciones necesarias por parte de nuestros equipos o consultores en seguridad de la información, recomendarán un mejor esquema de blindaje a estos temas.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Simplemente desde una posición óptima, la solución de seguridad en estos casos es que entendemos que la mayoría de las empresas que se vieron obligadas a introducirse de pronto en el mundo del teletrabajo no contaban con un presupuesto para
          soluciones de seguridad adicionales; al menos no para todos y cada uno de los ordenadores personales del empleado. Pero eso no es motivo para dejarlos desprotegidos. Herramientas como antivirus, entre ellas Kaspersky Anti-Ransomware Tool for
          Business, está diseñada específicamente para lidiar con el ransomware o controles prematuros de controles.
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
          by: Columnista invitado: Andrés Muñoz
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "right",
            fontStyle: "italic",
          }}
        >
          Director de Tecnología e Informática Forense
        </Typography>
      </Container>
    </Box>
  );
};

export default ArticuloSeis;