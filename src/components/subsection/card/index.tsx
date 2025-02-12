import { Box } from "@mui/material";
import { AvatarStyled, Card, CardTypography, LeftQuotes, NameTypography, RightQuotes } from "./style";

export function HeroCard({ message, name, avatarPath }: {
    message:string,
    name:string,
    avatarPath:string,
}){
    return(
        <Box sx={{ display: "flex", flexDirection: "row", position: 'relative' }}>
            <LeftQuotes component="img" src="src\assets\quotes.svg"/>
            <Card>
                <AvatarStyled src={avatarPath} />
                <CardTypography>{ message }</CardTypography>
                <NameTypography>- { name }</NameTypography>
            </Card>
            <RightQuotes component="img" src="src\assets\quotes.svg"/>
        </Box>
    )
}