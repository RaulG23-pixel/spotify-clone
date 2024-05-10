import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid,ListItemButton, ListItemText, MenuItem, MenuList,ListItemIcon, Icon, Typography, IconButton, Chip, Stack, Autocomplete, TextField, FormControl, InputAdornment } from '@mui/material';
import { AccountCircle, Add, ArrowForward, Book, BookOutlined, HomeOutlined, PlusOne, Search, } from '@mui/icons-material';


export default function Index() {
  const myAlert = () => {
    alert("Hola mundo");
  }
  const options = [{title:"these days", artist:"foo fighters",year:2011,album:"wasting light"}];
  return (
      <Box sx={{background:"#000000", height:"100vh"}}>
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
                <Box sx={{display:"flex",justifyContent:"space-between", alignItems:"center", mb:1}}>
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
                <Stack direction={"row"} spacing={1} sx={{mt:2}}>
                  <Chip label={'Listas'} variant={"body2"} sx={{color:"#FFF", fontWeight:"600",background:"#303030"  ,fontSize:"11px" }} onClick={() => alert("Hola mundo")}/>
                  <Chip label={'Artistas'} variant={"body2"} sx={{color:"#FFF", fontWeight:"600",background:"#303030" ,fontSize:"11px"}} onClick={() => alert("Hola mundo")}/>
                  <Chip label={'Albumes'} variant={"body2"} sx={{color:"#FFF", fontWeight:"600",background:"#303030" ,fontSize:"11px"}} onClick={() => alert("Hola mundo")}/>
                </Stack>
                <Stack direction={'row'} spacing={1} alignItems={'end'} pb={1}>
                  <Box alignItems={"flex-end"} display={"flex"}>
                    <Search fontSize='medium' sx={{color:"#C8C8C8"}}/>
                    <TextField 
                      id='searchSong'
                      label='search'
                      outlined
                      color='primary'

                      sx={{
                        '.css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root':{color:"#C8C8C8", fontSize:"12px"},
                        '.css-1eed5fa-MuiInputBase-root-MuiInput-root::before':{borderBottom:"1px solid #C8C8C8"},
                        '.css-1eed5fa-MuiInputBase-root-MuiInput-root::before:hover':{borderBottom:"1px solid #C8C8C8"},
                        maxWidth:"150px",
                      }}
                    />
                  </Box>
                </Stack>
                <Stack spacing={1}>
                  <Box sx={{display:"flex", flexDirection:"row"}}>
                    <></>
                  </Box>
                </Stack>
            </Box>

          </Grid>
          <Grid item sm={9}>a</Grid>
        </Grid>
      </Box>
  )
}
