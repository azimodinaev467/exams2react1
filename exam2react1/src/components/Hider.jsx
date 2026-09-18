import React from 'react'
import img1 from '../assets/logo 1 (1).png'
import img2 from '../assets/stats.png'

import img3 from "../assets/8634201f09a61128f8e17d9ad98001feb1b106d6.png"

import img4 from "../assets/DecorativeLine.png"
import { Box, Typography , Button} from '@mui/material'
export default function Hider() {
    return (

        // xs tel md pk
        <Box sx={{maxWidth:{xs:"400px", md:"1400px",sm:"1200px"}, margin:"auto", padding:2}}>
            <Box sx={{ display: "flex   ", width: { md: "80%", lg: "1400px" }, alignItems: "center", justifyContent: "space-between", padding: { xs: 1, md: 2 } }}>
                <img src={img1} alt="" />
                <Typography sx={{ marginX: 20, gap: 10, display: { xs: "none", md: "block" }, width: { md: "80%", lg: "1400px" }, alignItems: "center", justifyContent: "space-between", display: { md: "flex", xs: "none" } }}>

                    Функции
                    <Typography>
                        Преимущества
                    </Typography>

                    <Typography>
                        Как использовать
                    </Typography>
                    <Typography>
                        Частые вопросы
                    </Typography>

                </Typography>
                <Typography sx={{ display: { xs: "block", md: "none" }, height: 50, width: 50 }}>
                    <img src={img2} alt="" />
                </Typography>

            </Box>


            <>

     <Box sx={{display:"flex",   flexDirection:{xs:"column-reverse", md:"row", sm:"row"}   , alignItems:"center", justifyContent:"space-between"  }}> 

                <Box sx={{ padding: { xs: 1, md: 2 } }}>
                    <Typography sx={{ fontSize: { xs: "24px", md: "60px" }, fontWeight: "bold", width: { xs: "200px", md: "500px" } }}>
                        Делайте снимки
                        и записывайте экран
                        в 1 клик
                    </Typography>
                    <Typography sx={{ color: "#828282", fontSize: { xs: "12px", md: "20px" }, width: { xs: "300px", md: "80%" } }}>
                        Вместе со Screenshoter можно в один клик сделать снимок или записать происходящее на экране ПК,  чтобы поделиться с кем угодно

                    </Typography>
                      

                      <Button sx={{backgroundColor:"#542CF7", color:"white", width:{xs:"50%", md:"20%"}, height:"50px" , borderRadius:"50px" }}>
                          Скачать бесплатно
                      </Button>
                    

                </Box>


                <Box sx={{width:{xs:"400px", md:"1400px"}}}>
                 <img  style={{width:"100%" }} src={img3} alt="" />
                </Box>



                
     </Box>

<Typography sx={{width:{xs:"400px", md:"1000px"}}}>

     <img    style={{width:"100%" }}  src={img4} alt="" />
</Typography>

            </>




        </Box>
    )
}
