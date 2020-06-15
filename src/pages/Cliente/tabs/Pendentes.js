import React from 'react'

import {
    MuiThemeProvider, createMuiTheme, Tooltip, TextField, InputAdornment, Grid, Box, Typography,
    Button, Card, Fab, CardActions, CardContent, Dialog, DialogTitle, DialogContent,
    DialogContentText, DialogActions
} from '@material-ui/core'

import { Add, InfoOutlined, ErrorOutlineOutlined, DescriptionOutlined, SettingsPowerTwoTone } from '@material-ui/icons'

import { Link, useHistory } from 'react-router-dom'

import '../../Login/styles.css'

import { Alert } from '../../Login/components/index'

import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import api from '../../../services/api'

const colorTheme = createMuiTheme({ palette: { primary: { main: '#2ecc71', contrastText: '#fff' } } })

export default function Pendentes() {

    const history = useHistory()

    const [chamados, setChamados] = React.useState([])

    React.useEffect(() => {
        api.get('/chamado-list/Pendente'
        ).then(response => {
            setChamados(response.data);
        })
    }, []);

    const wid = window.innerWidth
    var pos = 'top-right'
    if (wid < 920) {
        pos = 'top-center'
    }

    const error = {
        position: pos,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    }

    const [erro, setErro] = React.useState('')
    const [tipo, setTipo] = React.useState('')
    const [description, setDescription] = React.useState('')

    const [erroError, setErroError] = React.useState(false)
    const [tipoError, setTipoError] = React.useState(false)
    const [descriptionError, setDescriptionError] = React.useState(false)

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    const [open2, setOpen2] = React.useState(false)
    const handleClickOpen2 = () => { setOpen2(true) }
    const handleClose2 = () => { setOpen2(false) }

    function reload(){
            api.get('/chamado-list/Pendente'
            ).then(response => {
                setChamados(response.data);
            })
    }

    async function handleRegister() {

        if (tipo === '') {
            toast.error('Digite o tipo do erro.', error)
            setTipoError(true) 
            setTimeout(() => {
                setTipoError(false)
            }, 5000)
        }

        if (description === '') {
            toast.error('Digite a descrição do erro.', error)
            setDescriptionError(true) 
            setTimeout(() => {
                setDescriptionError(false)
            }, 5000)
        }

        if (description !== '' && tipo !== ''){
            try {
                const tipoDeErro = tipo
                const descricaoDeErro = description
                const fk_client = localStorage.getItem('Codigo')
                api.post('/chamado', {tipoDeErro, descricaoDeErro, fk_client})

                await reload();

                setOpen(false)

                setTipo('')
                setDescription('')

            } catch (error) {
                
                toast.error('Ocorreu um erro ao emitir o seu chamado.', error)

            }

        }

    }
    
    async function handleCancel(){
        api.delete('/chamado/'+localStorage.getItem('Cancel'));
        await reload();

        setOpen2(false)
    }

    return (

        <Box>
            <Alert />
            <Tooltip placement="top" title="Realizar Chamado">
                <MuiThemeProvider theme={colorTheme}>
                    <Fab color="primary" onClick={handleClickOpen} aria-label="add" style={{ position: 'fixed', right: '25px', bottom: '25px' }}>
                        <Add />
                    </Fab>
                </MuiThemeProvider>
            </Tooltip>
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
                                </CardContent>
                                <CardActions style={{ justifyContent: 'space-around' }}>
                                    <Tooltip placement="top" title="Cancelar chamado">
                                        <Button size="small" onMouseUp={() => {localStorage.setItem('Cancel',chamado.codigo)}} onClick={handleClickOpen2} style={{ color: 'red' }}>Cancelar</Button>
                                    </Tooltip>
                                    <Tooltip placement="top" title="Ver detalhes">
                                        <Link to="/detalhes" className='link'> {/* Substituir propriedade To com os parâmetros corretos */}
                                            <Button onClick={() => {localStorage.setItem("CodigoErro",chamado.codigo)}} size="small" style={{ color: 'black' }}>Detalhes</Button>
                                        </Link>
                                    </Tooltip>
                                </CardActions>
                            </Card>
                        ))}

                    </Grid>
                </Grid>
            </Grid>


            <Dialog open={open} onClose={handleClose}>

                <DialogTitle style={{ textAlign: 'center' }}>{"Realizar chamado"}</DialogTitle>

                <DialogContent>

                    <Box width={300} mt={2}>
                        <Tooltip placement="top" title="Por exemplo: Internet, Energia, Outro...">
                            <TextField
                                error={tipoError}
                                value={tipo}
                                onChange={e => setTipo(e.target.value)}
                                fullWidth
                                variant='outlined'
                                size='small'
                                required={true}
                                label='Tipo de Erro'
                                color='primary'
                                inputProps={{
                                    maxLength: 27,
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
                        </Tooltip>
                    </Box>

                    <Box width={300} mt={2} mb={2}>
                        <Tooltip placement="top" title="Detalhes sobre o erro">
                            <TextField
                                error={descriptionError}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                fullWidth
                                variant='outlined'
                                size='small'
                                required={true}
                                label='Descrição'
                                color='primary'
                                multiline={true}
                                inputProps={{
                                    spellCheck: false,
                                    maxLength: 200
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <DescriptionOutlined />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Tooltip>
                    </Box>


                </DialogContent>

                <DialogActions style={{ justifyContent: 'center' }}>

                    <Button onClick={handleRegister} style={{ color: 'green' }}> Confirmar</Button>

                    <Button onClick={handleClose} style={{ color: 'red' }}> Cancelar </Button>

                </DialogActions>

            </Dialog>



            <Dialog open={open2} onClose={handleClose2}>

                <DialogTitle style={{ textAlign: 'center' }}>{"Confirmar Ação"}</DialogTitle>

                <DialogContent>

                    <DialogContentText> Deseja cancelar o chamado? </DialogContentText>

                </DialogContent>

                <DialogActions style={{ justifyContent: 'center' }}>

                    <Button onClick={handleCancel} style={{ color: 'green' }}> Sim </Button> {/* Ao clicar aqui, realizar função de cancelar o chamado */}

                    <Button onClick={handleClose2} style={{ color: 'red' }}> Não </Button>

                </DialogActions>

            </Dialog>

        </Box>
    );
}
