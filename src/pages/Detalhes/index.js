import React from 'react'; // Importação do React
import { Box, Grid, Typography, TextField, InputAdornment, IconButton } from '@material-ui/core'
import '../Login/styles.css'; // Estilização da página
import { Link } from 'react-router-dom'
import { ArrowBackRounded, InfoOutlined, ErrorOutlineOutlined, DescriptionOutlined } from '@material-ui/icons'

export default function Detalhes() {
    return (

        <Box className='center Background fullWidth'> {/* Fundo escuro */}

            <Box width={700} height={500} display="flex" className='center cardMedium lightBackground' >
                <Box mr={78}>
                    <Link to='/cliente'> {/* Armazene uma variável no LocalStorage, dizendo se o cara é cliente ou suporte, pra voltar pra página certinha (Só fazer um if aí dentro com essa variável) */}
                        <IconButton>
                            <ArrowBackRounded />
                        </IconButton>
                    </Link>
                </Box>
                <Box mb={5} width={200} style={{ borderBottom: '2px solid #000' }}>
                    <Typography style={{ fontSize: '25px' }}>Detalhes do Erro</Typography>
                </Box>
                <Grid container justify="space-around" spacing={30}>

                    <Box m={2} width={300}>
                        <TextField
                            fullWidth
                            value='Tela Azul' // Troca pela variável entre chaves
                            readonly={true}
                            variant='outlined'
                            size='small'
                            label='Erro'
                            color='primary'
                            inputProps={{
                                spellCheck: false
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <ErrorOutlineOutlined />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                    <Box m={2} width={300}>
                        <TextField
                            fullWidth
                            value='Software' // Troca pela variável entre chaves
                            readonly={true}
                            variant='outlined'
                            size='small'
                            label='Tipo do Erro'
                            color='primary'
                            inputProps={{
                                spellCheck: false
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <InfoOutlined />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                </Grid>
                <Grid container justify="space-around" spacing={30}>

                    <Box m={2} width={300}>
                        <TextField
                            fullWidth
                            value='Em andamento' // Troca pela variável entre chaves
                            readonly={true}
                            variant='outlined'
                            size='small'
                            label='Status'
                            color='primary'
                            inputProps={{
                                spellCheck: false
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <ErrorOutlineOutlined />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                    <Box m={2} width={300}>
                        <TextField
                            fullWidth
                            value='Torres Sentador' // Troca pela variável entre chaves
                            readonly={true}
                            variant='outlined'
                            size='small'
                            label='Responsável'
                            color='primary'
                            inputProps={{
                                spellCheck: false
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <InfoOutlined />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                </Grid>
                <Grid container justify="space-around" spacing={30}>

                    <Box m={2} width={300}>
                        <TextField
                            fullWidth
                            value='15/05/2003' // Troca pela variável entre chaves
                            readonly={true}
                            variant='outlined'
                            size='small'
                            label='Data'
                            color='primary'
                            inputProps={{
                                spellCheck: false
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <ErrorOutlineOutlined />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                    <Box m={2} width={300}>
                        <TextField
                            fullWidth
                            value='14:00 H' // Troca pela variável entre chaves
                            readonly={true}
                            variant='outlined'
                            size='small'
                            label='Hora'
                            color='primary'
                            inputProps={{
                                spellCheck: false
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <InfoOutlined />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                </Grid>
                <Grid container justify="space-around" spacing={30}>

                    <Box m={2} width={300}>
                        <TextField
                            fullWidth
                            value='Não executada' // Troca pela variável entre chaves
                            readonly={true}
                            variant='outlined'
                            size='small'
                            label='Data de execução'
                            color='primary'
                            inputProps={{
                                spellCheck: false
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <ErrorOutlineOutlined />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                    <Box m={2} width={300}>
                        <TextField
                            fullWidth
                            value='Não executada' // Troca pela variável entre chaves
                            readonly={true}
                            variant='outlined'
                            size='small'
                            label='Hora de execução'
                            color='primary'
                            inputProps={{
                                spellCheck: false
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <InfoOutlined />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                </Grid>
                <Box m={2} width={650}>
                    <TextField
                        fullWidth
                        value='Tava jogando um lolzin e ficou tudo smurfado.' // Troca pela variável entre chaves
                        readonly={true}
                        multiline
                        variant='outlined'
                        size='small'
                        label='Descrição'
                        color='primary'
                        inputProps={{
                            spellCheck: false
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <DescriptionOutlined />
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>

            </Box>

        </Box>

    );
}
