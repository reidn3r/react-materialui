import { Avatar, Box, styled, Typography } from "@mui/material";

export const Card = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#212121",
    borderRadius: 8,
    padding: "1em",
    width: "16.5em",
    position: 'relative'
}));

export const CardTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: "center",
    maxWidth: "60%",
    wordWrap: "break-word",
    fontFamily: "Concert One",
    marginTop: "2em",
    fontSize: 18,
    flexGrow: 1,
}))

export const NameTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    margin: "2em 0",
}))


export const AvatarStyled = styled(Avatar)(({ theme }) => ({
    border: `1px solid ${theme.palette.background.paper}`, 
    position:"absolute", 
    width: 80, 
    height: 80, 
    marginTop: "-3em" 
}))


export const LeftQuotes = styled(Box)(() => ({
    position:"absolute", 
    marginLeft: "-15px", 
    marginTop:"25px",  
    height: "2em", 
    width: "2em", 
    zIndex: 50
}))

export const RightQuotes = styled(Box)(() => ({
    position: "absolute", 
    right: "-15px",  
    bottom: "75px", 
    height: "2em", 
    width: "2em", 
    zIndex: 50
}))