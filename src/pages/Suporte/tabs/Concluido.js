import React from 'react'; // Importação do React
import { Tooltip, Grid, Box, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core'; // Importação de elementos visuais
import { Link } from 'react-router-dom'
import '../../Login/styles.css'
import api from '../../../services/api'

export default function Concluido() {


    const [chamados, setChamados] = React.useState([])

    React.useEffect(() => {
        api.get('/chamado-list/Concluido'
        ).then(response => {
            setChamados(response.data);
        })
    }, []);

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
                                </CardContent>                                <CardActions style={{ justifyContent: 'space-around' }}>
                                    <Tooltip placement="top" title="Ver detalhes">
                                        <Link to="/detalhes" className='link'> {/* Modificar a propriedade to com os parâmetros da rota */}
                                            <Button onClick={() => { localStorage.setItem("CodigoErro", chamado.codigo) }} size="small" style={{ color: 'black' }}>Detalhes</Button>
                                        </Link>
                                    </Tooltip>
                                </CardActions>
                            </Card>
                        ))}

                    </Grid>
                </Grid>
            </Grid>



        </Box>

    );
}
