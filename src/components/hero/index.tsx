import { Box, Typography } from "@mui/material";
import { RotatedBox, HeroContainer, HeroCTABox, HeroTypography } from "./styles";

export function Hero(){
    return(
        <HeroContainer maxWidth="lg">
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ textAlign: "right", marginTop: "-7rem" }}>
                    <HeroTypography>NO</HeroTypography>
                    <HeroTypography>MORE</HeroTypography>
                </Box>
                <Box component="img" src="src\assets\dog.svg" sx={{ height: "23rem" }}/>
                <Box sx={{ textAlign: "left", marginTop: "-7rem"}}>
                    <HeroTypography>PET</HeroTypography>
                    <HeroTypography>HAIR!</HeroTypography>
                </Box>
            </Box>
            <RotatedBox>
                <Typography variant="button" sx={{ fontFamily: "Concert One", fontSize: 30, fontWeight: 'bold' }}>The World's Best Pet Hairbrush!</Typography>
            </RotatedBox>
            <HeroCTABox>
                <Typography variant="button" sx={{ fontFamily: "Concert One", fontSize: 35, fontWeight: 'bold' }}>Roof! Get It Now</Typography>
            </HeroCTABox>
        </HeroContainer>
    )
}