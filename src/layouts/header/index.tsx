import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Theme } from "../../theme/theme";
import { CartContainer, HeaderLink, HeaderLogo } from "./styles";

export function Header(){
    return(
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                bgcolor: Theme.palette.background.default 
            }}>

                <Box sx={{ display: 'flex' }}>
                    <HeaderLogo>frisker</HeaderLogo>
                    <Box component="img" 
                        src="src\assets\header-pipe.svg" 
                        sx={{ height: 25 }} 
                    />
                    <HeaderLink variant="body2" href="/" color="inherit">Home</HeaderLink>
                    <HeaderLink variant="body2" href="/" color="inherit">Products</HeaderLink>
                    <HeaderLink variant="body2" href="/" color="inherit">FAQ</HeaderLink>
                    <HeaderLink variant="body2" href="/" color="inherit">Contact</HeaderLink>
                </Box>

                <CartContainer>
                    <ShoppingCartIcon/>
                    <Typography sx={{ px: 1 }}>Cart</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>0</Typography>
                </CartContainer>
            </Toolbar>
        </AppBar>
    )
}