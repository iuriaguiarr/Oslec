import React, { useState } from 'react' // Importação do React
import { useHistory } from 'react-router-dom'
import { ButtonGroup, Box, Button, TextField, InputAdornment } from '@material-ui/core' // Importação de elementos visuais
import { CodeOutlined } from '@material-ui/icons' // Importação dos ícones
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core' // Criação de temas
import '../styles.css' // Estilização da página
import { toast } from 'react-toastify' // Biblioteca de mensagens de erro
import 'react-toastify/dist/ReactToastify.css' // O CSS da mesma

export default function Form() {

    const history = useHistory()

    // Verificando o tamanho da tela //
    const wid = window.innerWidth // Pega a largura da tela
    var pos = 'top-right' // Por padrão a posição do erro será no canto superior direito da tela
    if (wid < 920) { // Caso a tela seja menor que 920px
        pos = 'top-center' // A posição passará a ser no centro
    }
    // Verificando o tamanho da tela //

    // Criando Temas //
    const colorTheme = createMuiTheme({
        palette: {
            primary: {
                main: '#78e08f',
                contrastText: '#fff'
            },
            secondary: {
                main: '#1e90ff',
                contrastText: '#fff'
            }
        }
    })
    // Criando Temas //

    // Iniciando variáveis //
    const [code, setCode] = useState('') // Variável de email
    // Iniciando variáveis //


    // Tratamento de Erros //
    const [codeError, setCodeError] = useState(false) // Vermelho ao redor do e-mail
    const error = { position: pos, autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: false, progress: undefined, } // Padrões de mensagem de erro
    // Tratamento de Erros //


    // Botões de Seleção//
    const [buttonOne, setButtonOne] = useState('contained')
    const [buttonTwo, setButtonTwo] = useState('outlined')
    const [buttonThree, setButtonThree] = useState('outlined')
    // Botões de Seleção//

    async function handleLogin() {

        if (code === '') { // Caso não haja código

            toast.error('Insira o seu código de acesso.', error) // Dispara erro
            setCodeError(true) // Dá a cor vermelha ao input
            setTimeout(() => {
                setCodeError(false) // Remove a cor vermelha do input em 5s
            }, 5000)

        } else if (code.length < 6 && code !== '') { // Caso possua menos de 6 caracteres

            toast.error('O seu código precisa ter 6 caracteres.', error) // Dispara erro
            setCodeError(true) // Dá cor vermelha ao input
            setTimeout(() => {
                setCodeError(false) // Remove a cor vermelha do input em 5s
            }, 5000)

        } else { // Sem nenhum erro

            if (buttonOne === 'contained') { // Autentica Suporte
                history.push('/suporte') // Redirecionando para painel de suporte
            } else if (buttonTwo === 'contained' || buttonThree === 'contained') { // Autentica Cliente
                history.push('/cliente') // Redirecionando para painel de clientes
            } else {
                toast.error('Ocorreu um erro duante o seu login.', error) // Dispara erro
            }


        }
    }

    async function handleButtonOne() { // Caso eu clique no botão de Suporte

        setButtonOne('contained') // Dá cor ao botão de funcionário
        setButtonTwo('outlined') // Tira a cor do botão de cliente
        setButtonThree('outlined') // Tira a cor do botão de cliente

    }

    async function handleButtonTwo() {

        setButtonOne('outlined') // Tira a cor do botão de cliente
        setButtonTwo('contained') // Dá cor ao botão de funcionário
        setButtonThree('outlined') // Tira a cor do botão de cliente

    }

    async function handleButtonThree() {

        setButtonOne('outlined') // Tira a cor do botão de cliente
        setButtonTwo('outlined') // Dá cor ao botão de funcionário
        setButtonThree('contained') // Tira a cor do botão de cliente

    }

    function handleChange(event) { // Função responsável por permitir apenas caracteres hexadecimais
        setCode(event.target.value.replace(/[^\d`^A-F^a-f]/g, "")); // ^A-F permite todas as letras de A a F, ^\d permite todos os números
    }

    return (
        <Box className='center'>

            {/* Selecionar Tipo */}
            <Box m={2} width={350}>

                <MuiThemeProvider theme={colorTheme}> {/* Responsável por criar temas de cores */}

                    <ButtonGroup disableElevation fullWidth={true}>

                        <Button size='small' variant={buttonOne} onClick={handleButtonOne} color='secondary' > Suporte </Button> {/* Botão de funcionário */}
                        <Button size='small' variant={buttonTwo} onClick={handleButtonTwo} color='secondary'> Cliente </Button> {/* Botão de Cliente */}
                        <Button size='small' variant={buttonThree} onClick={handleButtonThree} color='secondary'> Fornecedor </Button> {/* Botão de Cliente */}

                    </ButtonGroup>

                </MuiThemeProvider>

            </Box>
            {/* Selecionar Tipo */}



            {/* Input de Código */}
            <MuiThemeProvider theme={colorTheme}> {/* Responsável por criar temas de cores */}

                <Box m={2} width={350}>

                    <TextField
                        error={codeError}
                        value={code.toUpperCase()}
                        onChange={handleChange}
                        fullWidth
                        variant='outlined'
                        size='small'
                        required={true}
                        label='Código de Acesso'
                        color='secondary'
                        inputProps={{
                            maxLength: 6,
                            spellCheck: false
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <CodeOutlined /> {/* Ícone */}
                                </InputAdornment>
                            )
                        }}
                    />

                </Box>

            </MuiThemeProvider>
            {/* Input de Código */}



            {/* Botão de submit */}
            <Box m={2} width={350}>
                <MuiThemeProvider theme={colorTheme}> {/* Responsável por criar temas de cores */}
                    <Button disableElevation variant='contained' size='small' onClick={handleLogin} fullWidth color='primary'>
                        Entrar
                    </Button>
                </MuiThemeProvider>
            </Box>
            {/* Botão de submit */}

        </Box>
    )
}