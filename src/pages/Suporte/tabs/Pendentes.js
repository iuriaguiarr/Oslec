import React from 'react'

import {
    Tooltip, Grid, Box, Typography, Button, Card, 
    CardActions, CardContent, Dialog, DialogTitle, 
    DialogContent, DialogContentText, DialogActions
} from '@material-ui/core'

import { Link } from 'react-router-dom'

import '../../Login/styles.css'

export default function Pendentes() {

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    const [open2, setOpen2] = React.useState(false)
    const handleClickOpen2 = () => { setOpen2(true) }
    const handleClose2 = () => { setOpen2(false) }

    return (

        <Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={2}>

                        {[0, 1].map((value) => ( //Alimentar isso, funciona como um Foreach
                            <Card style={{ minWidth: 290, maxWidth: 290, margin: 20 }} variant="contained">
                                <CardContent>
                                    <Typography style={{ textAlign: 'center', fontWeight: 'bold' }} color="textPrimary" gutterBottom>
                                        Título do chamado {/* Substituir entre chaves pela variável de titulo */}
                                    </Typography>
                                    <Typography style={{ marginTop: 20 }} color="textPrimary" gutterBottom>
                                        Nome do solicitante  {/* Substituir entre chaves pela variável do nome*/}
                                    </Typography>
                                    <Typography style={{ marginTop: 20 }} color="textPrimary" gutterBottom>
                                        Erro {/* Substituir entre chaves pela variável de tipo de erro*/}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'space-around' }}>
                                    <Tooltip placement="top" title="Aceitar chamado">
                                        <Button size="small" onClick={handleClickOpen} style={{ color: 'green' }}>Aceitar</Button>
                                    </Tooltip>

                                    {/* Ir paga página de detalhes */}                                    
                                    <Tooltip placement="top" title="Ver detalhes">
                                        <Link to='/detalhes' style={{ textDecoration: 'none' }}> {/* Organizar os parâmetros da rota na propriedade To */}
                                            <Button size="small" style={{ color: 'black' }}>Detalhes</Button>
                                        </Link>
                                    </Tooltip>
                                    {/* Ir para página de detalhes */}

                                    <Tooltip placement="top" title="Recusar chamado">
                                        <Button size="small" onClick={handleClickOpen2} style={{ color: 'red' }}>Recusar</Button>
                                    </Tooltip>
                                </CardActions>
                            </Card>
                        ))}

                    </Grid>
                </Grid>
            </Grid>

            {/* Modal de aceitar chamado */}
            <Dialog open={open} onClose={handleClose}>

                <DialogTitle style={{ textAlign: 'center' }}>{"Confirmar Ação"}</DialogTitle>

                <DialogContent>

                    <DialogContentText> Deseja aceitar o chamado? </DialogContentText>

                </DialogContent>

                <DialogActions style={{ justifyContent: 'center' }}>

                    <Button style={{ color: 'green' }}> Sim </Button> {/* Ao clicar aqui, realizar função de aceitar chamado */}

                    <Button onClick={handleClose} style={{ color: 'red' }}> Não </Button>

                </DialogActions>

            </Dialog>
            {/* Modal de aceitar chamado */}            
            

            {/* Modal de recusar chamado */}
            <Dialog open={open2} onClose={handleClose2}>

                <DialogTitle style={{ textAlign: 'center' }}>{"Confirmar Ação"}</DialogTitle>

                <DialogContent>

                    <DialogContentText> Deseja recusar o chamado? </DialogContentText>

                </DialogContent>

                <DialogActions style={{ justifyContent: 'center' }}>

                    <Button style={{ color: 'green' }}> Sim </Button> {/* Ao clicar aqui, realizar função de recusar chamado */}

                    <Button onClick={handleClose2} style={{ color: 'red' }}> Não </Button>

                </DialogActions>

            </Dialog>
            {/* Modal de recusar chamado */}

        </Box>
    );
}
