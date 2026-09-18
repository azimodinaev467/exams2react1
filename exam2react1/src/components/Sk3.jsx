import React from 'react'
import { Box, Typography, TextField, Button, Container } from '@mui/material'
import img1 from '../assets/Group 1.png'
export default function Sk3() {
    return (

        <Box sx={{ maxWidth: { xs: "400px", md: "1200px", sm: "1200px" } }} >
            <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", flexDirection: { xs: "column-reverse", md: "row", sm: "row" }, alignItems: "center", justifyContent: "space-between", margin: { xs: 2, md: 4, sm: 4 }, padding: { xs: 2, md: 4, sm: 4 } }}>

                <Box sx={{ width: { xs: "90%", md: "60%", sm: "50%" }, height: { xs: "50%", md: "350px", sm: "50%" }, backgroundColor: "#eeeeeeff", padding: "20px", boxShadow: "10px 10px 10px 10px #828282" }} >
                    <img src={img1} alt="" />


                </Box>

                <Box sx={{ width: { xs: "100%", md: "50%", sm: "50%" }, height: { xs: "50%", md: "50%", sm: "50%" } }} >
                    <Typography sx={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
                        Запись экрана
                    </Typography>
                    <Typography sx={{ color: "#828282", fontSize: "18px" }}>
                        Недостаточно снимков? Запишите происходящее на экране со своим голосом или звуком системы. <br />

                        Достаточно нажать две кнопки мыши, выделить необходимую область и начнется запись видео
                        с экрана. Быстро и без сложных настроек
                    </Typography>
                </Box>
            </Box><br /><br />
            <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", flexDirection: { xs: "column-reverse", md: "row", sm: "row" }, alignItems: "center", justifyContent: "space-between", }}>

                <Box sx={{ width: { xs: "100%", md: "50%", sm: "50%" }, height: { xs: "50%", md: "50%", sm: "50%" } }} >
                    <Typography sx={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
                        В один клик
                    </Typography>
                    <Typography sx={{ color: "#828282", fontSize: "18px" }}>
                        Не нужно запоминать комбинации клавиш
                        на клавиатуре, чтобы сделать скриншот или начать записывать видео с экрана.  <br />

                        Просто нажмите две кнопки мыши
                        или настройте горячую кнопку на любую удобную клавишу <br />
                    </Typography>

                </Box>

                <Box sx={{ width: { xs: "90%", md: "60%", sm: "50%" }, height: { xs: "50%", md: "350px", sm: "50%" }, backgroundColor: "#eeeeeeff", padding: "20px", boxShadow: "10px 10px 10px 10px #828282" }} >
                    <img src={img1} alt="" />


                </Box>
            </Box>

              <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", flexDirection: { xs: "column-reverse", md: "row", sm: "row" }, alignItems: "center", justifyContent: "space-between", margin: { xs: 2, md: 4, sm: 4 }, padding: { xs: 2, md: 4, sm: 4 } }}>

                <Box sx={{ width: { xs: "90%", md: "60%", sm: "50%" }, height: { xs: "50%", md: "350px", sm: "50%" }, backgroundColor: "#eeeeeeff", padding: "20px", boxShadow: "10px 10px 10px 10px #828282" }} >
                    <img src={img1} alt="" />


                </Box>

                <Box sx={{ width: { xs: "100%", md: "50%", sm: "50%" }, height: { xs: "50%", md: "50%", sm: "50%" } }} >
                    <Typography sx={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
                        Запись экрана
                    </Typography>
                    <Typography sx={{ color: "#828282", fontSize: "18px" }}>
                        Недостаточно снимков? Запишите происходящее на экране со своим голосом или звуком системы. <br />

                        Достаточно нажать две кнопки мыши, выделить необходимую область и начнется запись видео
                        с экрана. Быстро и без сложных настроек
                    </Typography>
                </Box>
            </Box><br /><br />

        </Box>
    )
}
