import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { LOGO_PAGINA } from "../assets";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "¿Quiénes somos?", path: "/about" },
  { label: "Columnas", path: "/articles" },
  { label: "Participación en Eventos", path: "/contact" },
  { label: "Contacto", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => () => setOpen(state);
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <>
      {/* 📌 NAVBAR */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(10px)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "56px",
            paddingLeft: "20px !important", // 🔥 Elimina padding extra de MUI
            paddingRight: "20px !important", // 🔥 Sobreescribe el padding
          }}
        >
          {/* ✅ LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <img src={LOGO_PAGINA} alt="Logo" style={{ height: "70px", width: "auto" }} />
          </Box>

          {/* ✅ Menú en escritorio */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map(({ label, path }) => (
                <NavLink
                  key={label}
                  to={path}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#f5a623" : "white",
                    fontWeight: "bold",
                    position: "relative",
                    transition: "color 0.3s ease",
                  })}
                >
                  <Typography
                    sx={{
                      cursor: "pointer",
                      "&:hover": { color: "#f5a623" },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -4,
                        width: "100%",
                        height: "2px",
                        background: "#f5a623",
                        transform: "scaleX(0)",
                        transition: "transform 0.3s ease",
                      },
                      "&:hover::after": { transform: "scaleX(1)" },
                    }}
                  >
                    {label}
                  </Typography>
                </NavLink>
              ))}
            </Box>
          )}

          {/* ✅ Menú hamburguesa en móviles */}
          {isMobile && (
            <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* 📌 Drawer para móviles */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: "250px",
            overflowX: "hidden",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            background: "linear-gradient(to bottom, #000, #222)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            px: 2,
          }}
        >
          <IconButton onClick={toggleDrawer(false)} sx={{ alignSelf: "flex-end", m: 1 }}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>

          <List>
            {navItems.map(({ label, path }) => (
              <ListItem button key={label} onClick={toggleDrawer(false)} component={NavLink} to={path}>
                <ListItemText
                  primary={label}
                  sx={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#f5a623" },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
