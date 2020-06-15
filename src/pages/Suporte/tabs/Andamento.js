import React from 'react'; // Importação do React
import { Tooltip,Grid, Box, Typography, Card, CardContent, CardActions, Button,Dialog,DialogTitle,DialogContent,DialogActions,DialogContentText } from '@material-ui/core'; // Importação de elementos visuais
import { Link } from 'react-router-dom'
import '../../Login/styles.css'
import api from '../../../services/api'

export default function Andamento() {
    
    
    const [open2, setOpen2] = React.useState(false)
    const handleClickOpen2 = () => { setOpen2(true) }
    const handleClose2 = () => { setOpen2(false) }

    const [chamados, setChamados] = React.useState([])

    React.useEffect(() => {
        api.get('/chamado-list/Andamento'
        ).then(response => {
            setChamados(response.data);
        })
    }, []);
    
    function reload(){
        api.get('/chamado-list/Andamento'
        ).then(response => {
            setChamados(response.data);
        })
}

    async function handleConclude(){
        api.put('/chamado/conclude/'+localStorage.getItem('Concluir'));
        await reload();
    
        setOpen2(false)
    }
    

    return (

        <Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={2}>

                    {chamados.map((chamado) => (
                            <Card style={{ minWidth: 290, maxWidth: 290, margin: 20 }} variant="contained">
                                <CardContent>
                                    <Typography style={{ textAlign: 'center', fontWeight: 'bold' }} color="textPrimary" gutterBottom>
                                        {chamado.tipoDeErro}
                                    </Typography>
                                    <Typography style={{ marginTop: 20 }} color="textPrimary" gutterBottom>
                                    <strong>Descrição: </strong>{chamado.descricaoDeErro}    
                                    </Typography>
                                    <Typography style={{ marginTop: 20 }} color="textPrimary" gutterBottom>
                                    <strong>Horário: </strong>{chamado.dataHoraDoChamado}
                                    </Typography>
                                </CardContent><CardActions style={{ justifyContent: 'space-around' }}>
                                <Tooltip placement="top" title="Ver detalhes">
                                    <Link className='link' to="/detalhes"> {/* Modificar propriedade To com os parâmetros */}
                                    <Button onClick={() => {localStorage.setItem("CodigoErro",chamado.codigo)}} size="small" style={{ color: 'black' }}>Detalhes</Button>
                                    </Link>
                                    </Tooltip>
                                    <Tooltip placement="top" title="Concluir Chamado">
                                    <Button  onMouseUp={() => {localStorage.setItem('Concluir',chamado.codigo)}} onClick={handleClickOpen2} size="small" style={{ color: 'green' }}>Concluir</Button>
                                    </Tooltip>
                                </CardActions>
                            </Card>
                        ))}

                    </Grid>
                </Grid>
            </Grid>

            {/* Modal de concluir chamado */}
<Dialog open={open2} onClose={handleClose2}>

<DialogTitle style={{ textAlign: 'center' }}>{"Confirmar Ação"}</DialogTitle>

<DialogContent>

    <DialogContentText> Deseja concluir o chamado? </DialogContentText>

</DialogContent>

<DialogActions style={{ justifyContent: 'center' }}>

    <Button onClick={handleConclude} style={{ color: 'green' }}> Sim </Button> {/* Ao clicar aqui, realizar função de recusar chamado */}

    <Button onClick={handleClose2} style={{ color: 'red' }}> Não </Button>

</DialogActions>

</Dialog>
{/* Modal de concluir chamado */}



        </Box>

    );
}
