import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_JUAN_ARTICULOS } from "../assets"; // Asegúrate de importar la imagen correcta

const ArticuloCatorce = () => {
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
          LA RESPUESTA A LA PROBLEMÁTICA COLOMBIANA
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
          <strong>Fecha:</strong> 23 de Junio, 2021
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          En tiempos de incertidumbre para los colombianos, muchos nos hemos cuestionado ¿Cuál es la solución que genere avance para el país?; ha existido un número diverso de posturas, algunas extremistas, otras sensatas. El día de hoy quise escribir y contarles lo que para este servidor definitivamente se constituye como la base fundamental y estructural del cambio que necesita Colombia, o mejor dicho, los colombianos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>La respuesta fue, es y será la EDUCACIÓN y su ACCESO EFECTIVO.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sin lugar a dudas, la educación es la mejor apuesta para un colombiano, es una inversión a largo plazo que generará una retribución personal, familiar, social y que contribuirá significativamente al desarrollo del país.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>El acceso a la educación DEBE SER GRATUITA, y el estado debe enfocar sus esfuerzos presupuestales a lograrlo, debe ser su prioridad y no simplemente el cumplimiento de cifras o estadísticas; la educación es la respuesta, y es una apuesta de largo aliento que veremos reflejada en las siguientes generaciones.</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Cuando hago referencia a “Educación”, no es el reflejo exclusivo de la escolarización de la población, ni mucho menos los títulos de doctorado, magíster, profesional; el término de educación trasciende de esa esfera de la escolaridad, y denota aquella formación (cualquiera que sea) destinada a desarrollar la capacidad intelectual, moral y afectiva de las personas de acuerdo con la cultura y las normas de convivencia de la sociedad a la que pertenecen<sup>1</sup>. No quiero decir que no sea necesaria la escolarización, porque sí lo es, pero sí recalcar que no es la única faceta de la educación, ni la más importante.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En ese sentido, no me refiero a educación a los títulos profesionales de Doctor, Magíster o Especialista, me refiero al crecimiento integral en conocimiento y en las bases conceptuales y análisis necesarios para tomar decisiones a partir de la razón, de criterios objetivos y realidades.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Dios me ha dado la posibilidad de aprender tanto de personas que son grandes ilustres de la academia actual (doctores, magíster, profesionales), así como personas que no tienen un alto nivel de escolaridad pero sí son luchadores de la vida, personas que tuvieron una educación en casa forjada bajo principios éticos y morales, y que actúan de forma transparente y leal.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La educación es uno de los factores que más influye en el avance y progreso de las personas y la sociedad, en tanto esta no solo provee conocimientos, sino también enriquece la cultura, el espíritu, los valores, los principios morales y todo aquello que nos caracteriza como seres humanos; Según estudios de la Organización para la Cooperación y el Desarrollo Económicos (OCDE), un año adicional de educación y escolaridad incrementa el PIB per cápita de un país entre 4 y 7%<sup>2</sup>.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>La educación es un derecho fundamental, contemplado en</strong> la Declaración Universal de los Derechos Humanos (art. 26), es la <strong>herramienta de transformación</strong> más poderosa que existe, en tanto permite alcanzar mejores niveles de bienestar social y de crecimiento económico y actúa en pro de la nivelación de las desigualdades económicas y sociales de su pueblo.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una persona educada desarrolla capacidades de análisis, decisión, y objetividad, bajo las cuales están fundamentadas muchas de las importantes determinaciones que debemos tomar en la vida.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una persona educada no recibe un tamal, una teja, un billete de cincuenta mil pesos (trece dólares), un puesto de trabajo, por parte de un político para garantizar su voto, por contrario, elige a su representante a partir de su ideología, trayectoria, experiencia, integridad y sus propuestas en beneficio de la sociedad.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una sociedad educada no tendrá políticos corruptos, que tienen como objetivo obtener un provecho personal y de su entorno a costillas de su pueblo, pues a través del paso de las generaciones es el mismo pueblo con su voto a conciencia quien irá eliminando esa clase politiquera y corrupta que nos ha representado durante tantos años.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una persona educada no necesita medidas de confinamiento y toques de queda obligatorios para saber que debe tomar las precauciones y cuidarse con las medidas necesarias para salvaguardar su vida, la de su familia y la de la comunidad, para combatir la pandemia que padecemos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una persona educada rechaza la violencia desde cualquier punto del que se origine, porque entiende que la violencia solo genera más violencia, y que sin duda, como nos lo ha enseñado la historia, este nunca es el camino ni la solución para resolver un problema.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una persona educada no se deja polarizar, ni ataca sin fundamento a otra que piensa diferente, porque entiende que todos tenemos nuestros derechos, formas de pensar y de actuar, y que en las diferencias está la magia y la esencia de debates enriquecedores de donde surgen las más grandes y brillantes ideas.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una persona educada aporta su capital de trabajo a una organización, o es quien crea su propia organización, en ambos sentidos, contribuye al desarrollo económico del país, que permite la recolección de los activos necesarios para seguir promoviendo acciones que mejoren las condiciones de vida de los colombianos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Una persona educada es transparente, íntegra y sus actos no van en contra del bien común, por contrario, sabe que para vivir se necesita vivir en sociedad, y que si su entorno progresa, esta persona también lo hace.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El cambio está en nuestras manos, en promover todos los espacios y las formas en que podamos educar, en cada uno de nuestros roles, profesiones y oficios; en comprometernos con el país y las futuras generaciones, porque sin duda la educación de nuestro pueblo y elevar las condiciones culturales de la población daría resultados inimaginables. Luchemos para ampliar las oportunidades de los jóvenes, para el impulso de la ciencia, la tecnología y la innovación, y difundir los principios y valores éticos que fortalecen las relaciones de la sociedad; seamos esta gran EUREKA de los colombianos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>Buscamos proponer soluciones, dejar en la historia este episodio de sangre que llevamos viviendo hace más de 50 años, y definitivamente construir el futuro soñado.</strong> Confío plenamente, en que nuestro espíritu luchador y guerrero, podrá enfocarse en algún momento en aquello que realmente va a trascender en nuestro país, <strong><u>LA EDUCACIÓN</u></strong>; estoy seguro que es un camino arduo y difícil, pero tengo la esperanza de que trabajaremos por contribuir y aportar un grano de arena en este reto para lograr finalmente convertirnos en el país y la sociedad anhelada.
        </Typography>

        {/* Referencias bibliográficas */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          <hr />
          <strong>Referencia Bibliográfica</strong>
          <br />
          <sup>1</sup>RAE. “Educación”.
          <br />
          <sup>2</sup>OCDE. Perspectivas económicas para América Latina.
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

export default ArticuloCatorce;