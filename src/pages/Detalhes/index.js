import React from 'react'; // Importação do React
import { Box, Grid, Typography, TextField, InputAdornment, IconButton } from '@material-ui/core'
import '../Login/styles.css'; // Estilização da página
import { Link } from 'react-router-dom'
import { ArrowBackRounded, InfoOutlined, ErrorOutlineOutlined, DescriptionOutlined } from '@material-ui/icons'
import api from '../../services/api'


export default function Detalhes() {

    const [chamados, setChamados] = React.useState([])

    React.useEffect(() => {
        api.get('/chamado/' + localStorage.getItem('CodigoErro')
        ).then(response => {
            setChamados(response.data);
        })
    }, []);
    const User = localStorage.getItem('User')
    var to = ''
    if (User === 'Cliente'){
        to = '/cliente'
    }else{
        to='/suporte'
    }
    
    return (
        
        <Box className='center Background fullWidth'> {/* Fundo escuro */}
                    {chamados.map((chamado) => (            
                <Box width={700} height={500} display="flex" className='center cardMedium lightBackground' >
                    <Box mr={78}>
                        <Link to={to}> {/* Armazene uma variável no LocalStorage, dizendo se o cara é cliente ou suporte, pra voltar pra página certinha (Só fazer um if aí dentro com essa variável) */}
                            <IconButton>
                                <ArrowBackRounded />
                            </IconButton>
                        </Link>
                    </Box>
                    <Box mb={5} width={200} style={{ borderBottom: '2px solid #000' }}>
                        <Typography style={{ fontSize: '25px' }}>Detalhes do Erro</Typography>
                    </Box>

                    <Grid container justify="space-around">

                        <Box m={2} width={650}>
                            <TextField
                                fullWidth
                                value={chamado.tipoDeErro} // Troca pela variável entre chaves
                                readonly={true}
                                variant='outlined'
                                size='small'
                                label='Tipo de Erro'
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
                    
                    </Grid>
                    <Grid container justify="space-around" spacing={30}>

                        <Box m={2} width={300}>
                            <TextField
                                fullWidth
                                value={chamado.status} // Troca pela variável entre chaves
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
                                value={chamado.fk_suporte} // Troca pela variável entre chaves
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
                                value={chamado.dataHoraDoChamado} // Troca pela variável entre chaves
                                readonly={true}
                                variant='outlined'
                                size='small'
                                label='Data/Hora do Chamado'
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
                                value={chamado.dataHoraDeExecucao} // Troca pela variável entre chaves
                                readonly={true}
                                variant='outlined'
                                size='small'
                                label='Data/Hora de Execução'
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
                            value={chamado.descricaoDeErro} // Troca pela variável entre chaves
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
                ))}            
        </Box>

    );
}
