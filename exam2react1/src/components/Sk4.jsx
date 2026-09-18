import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import img1 from "../assets/001-cursor.png"
import img2 from "../assets/003-save.png"
import img3 from "../assets/001-puzzle.png"
import img4 from "../assets/002-heart.png"

export default function Sk2() {
    return (
        <Box sx={{maxWidth:{xs:"400px", md:"1200px",sm:"1200px"}, margin:"auto", padding:2}}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: { xs: 1, md: 2 } , flexDirection:{xs:"column-reverse", md:"row", sm:"row"} }}>
             

                

            </Box>

                <Box sx={{display:"flex", gap:2, flexDirection:{xs:"column-reverse", md:"row", sm:"  "}, alignItems:"center", justifyContent:"space-between "}}>
                   <Box sx={{ backgroundColor:"#542CF7", color:"white" , width:{xs:"100%", md:"350px" , }, height:{xs:"100%", md:"140px"},  flexDirection:{xs:"column-reverse", md:"row", sm:"row"}, alignItems:"center", justifyContent:"space-between " , padding:"10px"}}>
                    <img src={img1} alt="" />
                    <Typography>
                        Снимок и запись <br />
экрана в 1 клик
                    </Typography>
                   </Box>

                   <Box sx={{ backgroundColor:" white", color:"black" , width:{xs:"100%", md:"350px"}, height:{xs:"100%", md:"140px"},  flexDirection:{xs:"column-reverse", md:"row", sm:"row"}, alignItems:"center", justifyContent:"space-between " , padding:"10px" , boxShadow:"10px 10px 10px 10px #828282"}}>
                    <img src={img2} alt="" />
                    <Typography>
                      Моментальная <br />
ссылка на файл
                    </Typography>
                   </Box>
                         <Box sx={{ backgroundColor:" white", color:"black" , width:{xs:"100%", md:"350px"}, height:{xs:"100%", md:"140px"},  flexDirection:{xs:"column-reverse", md:"row", sm:"row"}, alignItems:"center", justifyContent:"space-between " , padding:"10px" , boxShadow:"10px 10px 10px 10px #828282"}}>
                    <img src={img3} alt="" />
                    <Typography>
                        Удобный <br />
редактор снимков
                    </Typography>
                   </Box>
            
                  <Box sx={{ backgroundColor:" white", color:"black" , width:{xs:"100%", md:"350px"}, height:{xs:"100%", md:"140px"},  flexDirection:{xs:"column-reverse", md:"row", sm:"row"}, alignItems:"center", justifyContent:"space-between " , padding:"10px" , boxShadow:"10px 10px 10px 10px #828282"}}>
                    <img src={img4} alt="" />
                    <Typography>
                      Бесплатно     <br />
и без регистрации
                    </Typography>
                   </Box>
            
            
                 
                </Box>
        </Box>

    )
}
