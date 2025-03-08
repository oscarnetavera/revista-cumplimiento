import { Container, Typography, Box, Button, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1e1e1e, #333)",
        color: "white",
        py: 6,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        {/* ✅ Título llamativo con efecto */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(90deg, #f5a623, #ffcd42)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            pb: 1,
            mb: 2,
            "&::after": {
              content: '""',
              display: "block",
              width: "50%",
              height: "4px",
              backgroundColor: "#f5a623",
              margin: "auto",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "80%",
            },
          }}
        >
          ¿Quieres contactarnos?
        </Typography>

        {/* 📌 Descripción */}
        <Typography variant="body1" sx={{ opacity: 0.9, mb: 3 }}>
          Si quieres saber más acerca de nosotros, puedes contactarnos en nuestras redes sociales <br />
          o enviando un correo a:
        </Typography>

        {/* 📩 Botón de correo */}
        <Button
          href="mailto:revistacumplimiento@gmail.com"
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #f5a623, #ff8c42)",
            fontWeight: "bold",
            color: "black",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #ff8c42, #f5a623)",
              boxShadow: "0px 4px 15px rgba(255, 140, 66, 0.6)",
            },
          }}
        >
          revistacumplimiento@gmail.com
        </Button>

        {/* 🔗 Redes Sociales */}
        <Box sx={{ mt: 4 }}>
          <IconButton
            href="#"
            target="_blank"
            sx={{
              color: "white",
              mx: 1,
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": {
                color: "#3b5998",
                transform: "scale(1.2)",
              },
            }}
          >
            <Facebook fontSize="large" />
          </IconButton>

          <IconButton
            href="#"
            target="_blank"
            sx={{
              color: "white",
              mx: 1,
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": {
                color: "#1DA1F2",
                transform: "scale(1.2)",
              },
            }}
          >
            <Twitter fontSize="large" />
          </IconButton>

          <IconButton
            href="#"
            target="_blank"
            sx={{
              color: "white",
              mx: 1,
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": {
                color: "#E4405F",
                transform: "scale(1.2)",
              },
            }}
          >
            <Instagram fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
