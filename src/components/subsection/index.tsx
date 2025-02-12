import { Box, Container } from "@mui/material";
import { Theme } from "../../theme/theme";
import { HeroCard } from "./card";

export function Subsection(){
    return(
        <Box sx={{ 
            backgroundColor: Theme.palette.background.paper, 
            display: "flex", 
            justifyContent: "center",
            width: "100%",
            marginTop: "-18.5rem"
        }}>
            <Container sx={{ 
                display: "flex", 
                gap: 8,
                py: 4, 
                justifyContent: "center",
                marginTop: 12
            }}>

                <HeroCard
                    avatarPath="src\assets\avatars\01-dog.svg"
                    message="Seriously? This thing is the bomb. There was no pain, and it was easy!"
                    name="Joanna Weslin"
                />
                <HeroCard
                    avatarPath="src\assets\avatars\02-dog.svg"
                    message="My little buddy always barks when I clean his hair, but not with this brush."
                    name="Mike Tomoolly"
                />
                <HeroCard
                    avatarPath="src/assets/avatars/03-dog.svg"
                    message="My husband is super allergic to dog hair, but he's way better now."
                    name="Bre Konotika"
                />
            </Container>
        </Box>
    )
}