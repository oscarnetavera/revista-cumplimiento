import React from 'react';
import { Container, Typography, Box, Button, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, Email } from "@mui/icons-material";

const ContactPage = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f5f5, #ffffff)",
        color: "#333",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* ✅ Título llamativo con efecto */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(90deg, #f5a623, #ff8c42)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            pb: 1,
            mb: 4,
            textAlign: "center",
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
          Contáctanos
        </Typography>

        {/* 📌 Descripción */}
        <Typography
          variant="h6"
          sx={{ opacity: 0.9, mb: 4, textAlign: "center", lineHeight: 1.6, color: "#555" }}
        >
          Estamos aquí para ayudarte. Si tienes alguna pregunta, sugerencia o simplemente quieres
          saber más sobre nosotros, no dudes en contactarnos a través de nuestras redes sociales o
          enviándonos un correo electrónico.
        </Typography>

        {/* 📩 Botón de correo */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Button
            href="mailto:revistacumplimiento@gmail.com"
            variant="contained"
            startIcon={<Email />}
            sx={{
              background: "linear-gradient(90deg, #f5a623, #ff8c42)",
              fontWeight: "bold",
              color: "white",
              px: 6,
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
            Enviar un correo
          </Button>
        </Box>

        {/* 🔗 Redes Sociales */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9, color: "#555" }}>
            Síguenos en nuestras redes sociales:
          </Typography>

          <Box>
            <IconButton
              href="#"
              target="_blank"
              sx={{
                color: "#555",
                mx: 2,
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
                color: "#555",
                mx: 2,
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
                color: "#555",
                mx: 2,
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
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;