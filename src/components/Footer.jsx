import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3,
        bgcolor: "#000", // 🔥 Fondo negro
        color: "white",
        width: "100%",
        fontFamily: "inherit", // 🔥 Usa la misma fuente que el resto
        boxShadow: "0px -4px 12px rgba(0, 0, 0, 0.3)", // ✨ Sombra sutil superior
      }}
    >
      <Typography fontWeight="bold">
        Todos los derechos reservados © 2025 | Revista El Negocio
      </Typography>
    </Box>
  );
};

export default Footer;
