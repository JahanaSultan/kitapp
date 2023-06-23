import { Typography } from "@mui/material"
import { FC } from "react"

export interface Props {
    h1: string,
    text: string
}

const Heading: FC<Props> = ({ h1, text }) => {
    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    color: "#fc6a03",
                    mt: "50px",
                    fontWeight: "bold",
                    fontFamily: "DMSerif",
                }}
            >
                {h1}
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    textAlign: "center",
                    color: "rgba(255,255,255, .5)",
                    mt: "10px",
                    fontFamily: "Comfortaa Bold",
                }}
            >
                {text}
            </Typography>
        </>
    )
}

export default Heading