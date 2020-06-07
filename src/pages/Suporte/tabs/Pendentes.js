import React from 'react'; // Importação do React
import { Grid, Box, Typography, Button, Card, CardActions, CardContent } from '@material-ui/core'; // Importação de elementos visuais

export default function Pendentes() {
    return (
        <Box>

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
                                        Local
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'space-around' }}>
                                    <Button size="small" style={{ color: 'green' }}>Aceitar</Button>
                                    <Button size="small" style={{ color: 'red' }}>Recusar</Button>
                                </CardActions>
                            </Card>
                        ))}

                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
}
