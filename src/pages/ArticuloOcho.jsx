import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_INVITADA_ALEJANDRA_CLAVIJO } from "../assets";

const ArticuloOcho = () => {
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
          MENTALIDAD POSITIVA DE UN EMPRESARIO
        </Typography>

        {/* Imagen del artículo */}
        <Box
          component="img"
          src={FOTO_INVITADA_ALEJANDRA_CLAVIJO}
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
          <strong>Fecha:</strong> 16 de Octubre, 2020
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          <em>"Los problemas son el común denominador de la vida. Son el gran ecualizador ANN LANDERS"</em>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          ¿Por qué ciertas personas persisten en alcanzar aquello que han visualizado, a pesar de las adversidades y no se rindan en el intento?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Es indudable que todos tenemos en nuestra vida identificadas a estas personas que nos inspiran por su tenacidad, actitud y perseverancia para afrontar cada situación. De esta manera, nos hacemos constantes preguntas sobre: ¿Quién soy? ¿Por qué
          trabajo aquí? ¿Cuál es la misión de mi vida? ¿Lo que hago realmente me gusta?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Tu estado natural debería ser feliz, saludable, alegre y lleno de emoción por estar vivo. Te despiertas cada mañana ansioso por comenzar el día, con entusiasmo de todo lo que te has propuesto a realizar y agradecido por cada una de las
          bendiciones de tu vida, sin importar si es laboral o personal.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Si por alguna razón no piensas de esta manera la mayor parte del tiempo, significa que algo no está bien. Tu objetivo central es tener tu vida organizada de tal manera que sientas felicidad, gozo y satisfacción de lo que haces.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En esta oportunidad, quiero compartirte estos tips que me ayudaron a programar mi pensamiento de tal manera que adquirí un hábito de mentalidad positiva en lo personal y laboral:
        </Typography>

        {/* Tips */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>1. Comienza con una frase de agradecimiento como:</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          • Gracias por mi cama
          <br /> • Gracias por mi trabajo
          <br /> • Gracias por mis alimentos
          <br /> • Gracias por mis amigos
          <br /> • Gracias por mi pareja
          <br /> • Gracias por mi salud
          <br /> • Gracias por mi familia
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>2. Toma la decisión de cambiar tu actitud</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En el momento que tomes la decisión de convertirte en una persona más positiva, generarás un cambio de actitud. En ese momento, tu manera de ver las cosas empezará a cambiar y tomarás el control de tus emociones.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>3. Acércate a personas que te inspiren y aléjate de relaciones negativas</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Eres el promedio de las personas con las que compartes la mayor parte de tu tiempo, es importante alejarte de aquellos seres que no traen luz a tu vida.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>4. Enfócate en los aspectos positivos de tu vida</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Cada experiencia en nuestra vida tiene un aspecto positivo y otro de aprendizaje, lo importante es ser capaz de ver el lado bueno de cada situación.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>5. Contagia con tu positivismo a los demás</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Al igual que el negativismo es contagioso, así también lo es el positivismo. Enfócate en ser un gestor de la felicidad, saluda, sonríe, ayuda y escucha a los demás.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          <strong>6. Haz que el positivismo se convierta en un hábito personal</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Trabaja por 21 días en mantener este concepto de positividad sobre tu vida y descubrirás grandes cambios.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Todas las personas tenemos la capacidad de programar nuestra mente hacia lo positivo. Lo importante es generar conciencia y elegir una perspectiva positiva ante cada situación. Te darás cuenta de que lo que cambias en ti tiene un impacto en lo que
          se genera a tu alrededor.
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
          by: Columnista invitada: Alexandra Clavijo Fernández
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "right",
            fontStyle: "italic",
          }}
        >
          Ingeniera industrial con 10 años de experiencia profesional, Magíster en Gobierno y Políticas Públicas, especialista en Gerencia del Servicio, Auditora interna HSEQ, Certificación Chief Happiness Officer - Gerencia de la Felicidad en formación.
        </Typography>
      </Container>
    </Box>
  );
};

export default ArticuloOcho;