import React from "react"
// @ts-ignore
import { Box, Typography, Stack, Button, SvgIcon, Icon } from "@mui/material"
// @ts-ignore
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
// @ts-ignore
import ReactIcon from "./assets/React.png"
// @ts-ignore
import MUIIcon from "./assets/Material UI.png"
// @ts-ignore
import JestIcon from "./assets/Jest.png"
// @ts-ignore
import GitIcon from "./assets/Git.png"
// @ts-ignore
import ReduxIcon from "./assets/Redux.png"
// @ts-ignore
import YJsIcon from "./assets/YJs.png"
import Typewriter from "./components/TypeWriter"
import IconTransition from "./components/IconTransition"
import "./Title.css"
const Title = () => {
    // @ts-ignore
    var element = document.getElementById("ProjectTitle")
    var imageList = [ReactIcon, MUIIcon, JestIcon, GitIcon, ReduxIcon, YJsIcon]
    return (
        <Box
            id="title"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                height: "100vh",
                padding: "2rem",
                //position: "absolute",
                paddingX: { md: "4rem", xs: "2rem" },
            }}
        >
            <Typography
                sx={{
                    fontWeight: "600",
                    fontSize: "20px",
                }}
            >
                Abhitej Vennapu.
            </Typography>
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Stack
                    spacing={2}
                    sx={{
                        textAlign: "center",
                        letterSpacing: { md: "-0.75px" },
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { md: "96px", xs: "64px" },
                            fontWeight: "600",
                            background:
                                "linear-gradient(90deg,#f1f5f966 4.65%,#f1f5f9 51.22%,#f1f5f966 93.04%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundSize: "100%",
                            "&:hover": {
                                background:
                                    "linear-gradient(180deg,#f1f5f966 4.65%,#f1f5f9 51.22%,#f1f5f966 93.04%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            },
                        }}
                    >
                        LabBook
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { md: "18px", xs: "14px" },
                        }}
                    >
                        A collaborative digital learning platform developed in
                        collaboration with BASF SE and RPTU
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "1rem",
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={2.5}
                            sx={{ minHeight: { md: 48 } }}
                        >
                            <IconTransition list={imageList} />
                        </Stack>
                    </Box>
                </Stack>
            </Box>

            <Box
                className="arrow"
                sx={{ alignSelf: "center" }}
                // @ts-ignore
                onClick={() =>
                    document.getElementById("ProblemStatement").scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                        inline: "nearest",
                    })
                }
            ></Box>
        </Box>
    )
}

export default Title
