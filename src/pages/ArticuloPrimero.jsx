import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación
import { FOTO_EDHER_ARTICULOS } from "../assets";

const ArticuloPrimero = () => {
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
          AL MUNDO LE FALTA UN TORNILLO
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
          <strong>Fecha:</strong> 10 de Agosto, 2020
        </Typography>

        {/* Contenido del artículo */}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Por estos días de tribulaciones y especulaciones, los trabajadores son quizás, junto con los empresarios, quienes se encuentran más preocupados por el futuro y el rumbo que tendrá sus vidas tras la pandemia. A diario se ven despidos masivos en
          varias partes del mundo, y en Colombia, no es raro ver cómo empleadores, que abusan de sus facultades, terminan dejando muchas veces en la calle a quienes les han servido por años en sus empresas.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          La especulación abunda, la desinformación estremece las masas, y muchos solo le piden a Dios, cuando menos, caer de pie tras la pandemia y poder seguir construyendo su futuro.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Vivimos en un mundo cada vez más crudo, uno que cada vez más va mostrando sus hostilidades, llevándose por delante a quienes se ven más vulnerables ante todas las tribulaciones a las que nos enfrentamos todos los días.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          El trabajador es un espécimen del sistema capitalista que siempre ha existido, es la base de buena parte del aparato productivo del mercado, y es a lo mejor, el mejor compañero del empresario o emprendedor que se aventura a ejercer su actividad
          económica. Es quizás a quien más oprimen y de quien más se benefician en el sistema, pero a la vez, es este quien encuentra una estabilidad en su actividad, no solo para su sustento, sino para su calidad de vida y la de los suyos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Hoy en día, encontrar un trabajo formal es el ideal de muchos trabajadores. Prestaciones, estabilidad y garantías son aquellas conquistas de estos a lo largo de muchos años, y de una lucha acentuada en el siglo XX, que les otorgó victorias
          indispensables para el ejercicio de su labor, que les han dignificado y fortalecido significativamente. Sin embargo, en nuestro contexto es difícil analizar cómo la sociedad puede sostenerse teniendo al 60% de las personas en la informalidad,
          luchando día a día, del rebusque y del diario, dejando a los formales como privilegiados cual tuerto rey en una tierra de ciegos.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Es este tipo de situaciones las que hacen que se tenga pánico entre los formales. A pesar de que extrañamente fue el gobierno quien los decidió proteger, dando directrices a través del Ministerio de Trabajo para que a toda costa se protegiera a los
          empleos y los ingresos de las familias, muchos no saben o no entienden qué puede pasar con sus vidas, las de sus familiares y con sus empleos en una era donde nadie sabe nada, y en la que seguimos teniendo certeza de que el devenir es
          paradójicamente una constante más que nunca, y en la que se acentúa que, a pesar de los embates y la inestabilidad, se tiene claro que una relación laboral formal no es más que un intercambio prescindible.
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

export default ArticuloPrimero;