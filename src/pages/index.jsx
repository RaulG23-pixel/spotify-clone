import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid,ListItemButton, ListItemText, MenuItem, MenuList,ListItemIcon, Icon, Typography, IconButton, Chip, Stack } from '@mui/material';
import { Add, ArrowForward, Book, BookOutlined, HomeOutlined, PlusOne, Search } from '@mui/icons-material';


export default function Index() {
  const myAlert = () => {
    alert("Hola mundo");
  }
  return (
      <Box sx={{background:"#000000"}}>
        <Grid container p={0} py={1}>
          <Grid item sm={3} >
            <MenuList sx={{background:"#262626", borderRadius:2}}>
              <MenuItem>
                <ListItemButton onClick={myAlert} dense={true} >
                  <ListItemIcon>
                    <HomeOutlined fontSize='medium' sx={{color:"#C8C8C8"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Inicio" primaryTypographyProps={{
                    color: '#C8C8C8',
                    fontWeight: 'bold',
                    variant: 'body2',
                    fontSize: "14px"
                  }} >
                  </ListItemText>
                </ListItemButton>
              </MenuItem>
              <MenuItem>
                <ListItemButton onClick={myAlert} dense={true} >
                  <ListItemIcon>
                    <Search fontSize='medium' sx={{color:"#C8C8C8"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Buscar" primaryTypographyProps={{
                    color: '#C8C8C8',
                    fontWeight: 'bold',
                    variant: 'body2',
                    fontSize: "14px"
                  }} >
                  </ListItemText>
                </ListItemButton>
              </MenuItem>
            </MenuList>
            <Box sx={{background:"#262626", borderRadius:2, px: 3, py:1, mt:1}}>
                <Box sx={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                  <Box display={'flex'} width={"auto"} alignItems={'center'}>
                      <Book fontSize='medium' sx={{color:"#C8C8C8"}}/>
                      <Typography variant='body2' sx={{fontWeight:"bold", color:"#C8C8C8",ml:1}}>
                        Tu Biblioteca
                      </Typography>
                  </Box>
                  <Box>
                    <IconButton>
                      <Add fontSize='small' sx={{color:"#C8C8C8 "}}/>
                    </IconButton>
                    <IconButton>
                      <ArrowForward fontSize='small' sx={{color:"#C8C8C8"}}/>
                    </IconButton>
                  </Box>
                </Box>
                <Stack direction={"row"} spacing={1} sx={{mt:1}}>
                  <Chip label={'Listas'} variant={"body2"} sx={{color:"#FFF", fontWeight:"600",background:"#303030"  ,fontSize:"11px" }} onClick={() => alert("Hola mundo")}/>
                  <Chip label={'Artistas'} variant={"body2"} sx={{color:"#FFF", fontWeight:"600",background:"#303030" ,fontSize:"11px"}} onClick={() => alert("Hola mundo")}/>
                  <Chip label={'Albumes'} variant={"body2"} sx={{color:"#FFF", fontWeight:"600",background:"#303030" ,fontSize:"11px"}} onClick={() => alert("Hola mundo")}/>
                </Stack>
                
            </Box>

          </Grid>
          <Grid item sm={9}>a</Grid>
        </Grid>
      </Box>
  )
}
