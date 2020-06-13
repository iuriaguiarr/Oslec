import React from 'react'; // Importação do React
import { Tooltip,Grid, Box, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core'; // Importação de elementos visuais
import { Link } from 'react-router-dom'
import '../../Login/styles.css'

export default function Andamento() {
    return (

        <Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={2}>

                        {[0, 1, 2].map((value) => ( // Alimentar como um Foreach
                            <Card style={{ minWidth: 290, maxWidth: 290, margin: 20 }} variant="contained">
                                <CardContent>
                                    <Typography style={{ textAlign: 'center', fontWeight: 'bold' }} color="textPrimary" gutterBottom>
                                        Título do chamado {/* Substituir entre chaves pela variável */}
                                    </Typography>
                                    <Typography style={{ marginTop: 20 }} color="textPrimary" gutterBottom>
                                        Nome do solicitante {/* Substituir entre chaves pela variável */}
                                    </Typography>
                                    <Typography style={{ marginTop: 20 }} color="textPrimary" gutterBottom>
                                        Erro {/* Substituir entre chaves pela variável */}
                                    </Typography>
                                </CardContent><CardActions style={{ justifyContent: 'space-around' }}>
                                <Tooltip placement="top" title="Ver detalhes">
                                    <Link className='link' to="/detalhes"> {/* Modificar propriedade To com os parâmetros */}
                                        <Button size="small" style={{ color: 'black' }}>Detalhes</Button>
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
