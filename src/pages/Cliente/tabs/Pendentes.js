import React from 'react'; // Importação do React
import { TextField, InputAdornment, Grid, Box, Typography, Button, Card, Fab, CardActions, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'; // Importação de elementos visuais
import { Add } from '@material-ui/icons'; // Importação de elementos visuais
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core' // Criação de temas
import { Link } from 'react-router-dom'
import '../../Login/styles.css'

// Criando Temas //
const colorTheme = createMuiTheme({ palette: { primary: { main: '#2ecc71', contrastText: '#fff' } } })
// Criando Temas //

export default function Pendentes() {


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const [open2, setOpen2] = React.useState(false);
    const handleClickOpen2 = () => { setOpen2(true); };
    const handleClose2 = () => { setOpen2(false); };
    return (
        <Box>

            <MuiThemeProvider theme={colorTheme}> {/* Responsável por criar temas de cores */}
                <Fab color="primary" onClick={handleClickOpen} aria-label="add" style={{ position: 'fixed', right: '25px', bottom: '25px' }}>
                    <Add />
                </Fab>
            </MuiThemeProvider>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={2}>

                        {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
                            <Card style={{ minWidth: 290, maxWidth: 290, margin: 20 }} variant="contained">
                                <CardContent>
                                    <Typography style={{ textAlign: 'center', fontWeight: 'bold' }} color="textPrimary" gutterBottom>
                                        Título do chamado
                                    </Typography>
                                    <Typography style={{ marginTop: 20 }} color="textPrimary" gutterBottom>
                                        Nome do solicitante
                                    </Typography>
                                    <Typography style={{ marginTop: 20 }} color="textPrimary" gutterBottom>
                                        Erro
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'space-around' }}>
                                    <Button size="small" onClick={handleClickOpen2} style={{ color: 'red' }}>Cancelar</Button>
                                    <Link to="/detalhes" className='link'>
                                        <Button size="small" style={{ color: 'black' }}>Detalhes</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        ))}

                    </Grid>
                </Grid>
            </Grid>


            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>{"Agendar Atendimento"}</DialogTitle>

                <DialogContent>

                    <DialogContentText> data hora tipo descricao solicitante responsavel </DialogContentText>

                </DialogContent>

                <DialogActions>

                    <Button onClick={handleClose} color="primary"> Disagree </Button>

                    <Button onClick={handleClose} color="primary" autoFocus> Agree </Button>

                </DialogActions>

            </Dialog>



            <Dialog open={open2} onClose={handleClose2}>

                <DialogTitle style={{ textAlign: 'center' }}>{"Confirmar Ação"}</DialogTitle>

                <DialogContent>

                    <DialogContentText> Deseja cancelar o atendimento? </DialogContentText>

                </DialogContent>

                <DialogActions style={{ justifyContent: 'center' }}>

                    <Button style={{ color: 'green' }}> Sim </Button>

                    <Button onClick={handleClose2} style={{ color: 'red' }}> Não </Button>

                </DialogActions>

            </Dialog>

        </Box>
    );
}
