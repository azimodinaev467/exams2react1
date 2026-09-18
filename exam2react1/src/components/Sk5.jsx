import React from 'react'
import { Box, Typography, TextField, Button, Container } from '@mui/material'
import img1 from '../assets/792b383bf9572c9ab276a9163571411711c15a5f.png'
export default function Sk5() {
    return (
        <Box>


            <Box>
                <Typography sx={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
                    Screenshoter - это функции <br />

                    на каждый день
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between " }}>

                    <Box sx={{ width: "700px" }}>

                        <img style={{ width: "100px" }} src={img1} alt="" />
                        <Typography> 01 </Typography>

                        <Typography sx={{ color: "#a19fa8ff", fontSize: "18px", fontWeight: "bold", width: { xs: "100%", md: "50%", sm: "50%" }, height: { xs: "50%", md: "50%", sm: "50%" } }}>
                            Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий. <br />  <br />

                            А если ситуация требует более детального объяснения — окей, не проблема. Screenshoter поможет записать видео экрана вместе
                            с вашими голосовыми комментариями
                        </Typography>
                        <Box>

                        </Box>

                    </Box>

                    <Box sx={{ width: "700px" }}>

                        <img style={{ width: "100px" }} src={img1} alt="" />
                        <Typography> 01 </Typography>

                        <Typography sx={{ color: "#a19fa8ff", fontSize: "18px", fontWeight: "bold", width: { xs: "100%", md: "50%", sm: "50%" }, height: { xs: "50%", md: "50%", sm: "50%" } }}>
                            Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий. <br />  <br />

                            А если ситуация требует более детального объяснения — окей, не проблема. Screenshoter поможет записать видео экрана вместе
                            с вашими голосовыми комментариями
                        </Typography>
                        <Box>

                        </Box>

                    </Box>

                    <Box sx={{ width: "700px" }}>

                        <img style={{ width: "100px" }} src={img1} alt="" />
                        <Typography> 01 </Typography>

                        <Typography sx={{ color: "#a19fa8ff", fontSize: "18px", fontWeight: "bold", width: { xs: "100%", md: "50%", sm: "50%" }, height: { xs: "50%", md: "50%", sm: "50%" } }}>
                            Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий. <br />  <br />

                            А если ситуация требует более детального объяснения — окей, не проблема. Screenshoter поможет записать видео экрана вместе
                            с вашими голосовыми комментариями
                        </Typography>
                        <Box>

                        </Box>

                    </Box>

                </Box>
            </Box>

            <Box>

                <Typography sx={{ color:"black", fontSize:"30px", fontWeight:"bold",marginBottom:"20px"}}>
                    Как использовать Screenshoter
                </Typography>
            </Box>
        </Box>
    )
}
