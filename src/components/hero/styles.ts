import { Box, Button, Container, styled, Typography } from "@mui/material";

export const HeroContainer = styled(Container)(() => ({
    display: "flex", 
    justifyContent: "center",
    minHeight: '100vh', 
    flexDirection: "column", 
    alignItems: "center"
}))

export const HeroTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Concert One",
    fontSize: '4.5rem',
    lineHeight: 0.75,
    color: theme.palette.text.secondary,
}))

export const HeroSVG = styled(Box)(() => ({
    height: "23rem",
}))

export const RotatedBox = styled(Box)(({ theme }) => ({
    display: "flex", 
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing(2)} 1rem`,
    transform: "rotate(-4deg)",
    marginTop: "-10px"
}))

export const HeroCTABox = styled(Button)(({ theme }) => ({
    color: "#000",
    backgroundColor: theme.palette.text.primary,
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    borderRadius: 8,
    zIndex: 15
}))