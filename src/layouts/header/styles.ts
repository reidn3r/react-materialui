import { Box, Link, styled, Typography } from "@mui/material";

export const HeaderLogo = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold', 
    color: theme.palette.text.primary,
    padding: `0 ${theme.spacing(3)} 0 0`
}))

export const HeaderLink = styled(Link)(({ theme }) => ({
    padding: `0 ${theme.spacing(3)}`,
    textDecoration: 'none',
    fontFamily: 'Poppins',
    '&:hover': {
        color: theme.palette.text.primary,
    }
}))

export const CartContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.background.paper,
    padding: `0.5rem ${theme.spacing(2)}`,
    borderRadius: "2rem"
}))