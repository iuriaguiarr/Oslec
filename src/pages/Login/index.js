import React from 'react'; // Importação do React
import { Box, Typography } from '@material-ui/core'; // Importação de elementos visuais
import './styles.css'; // Estilização da página
import { Alert, Title, Form } from './components/index'


export default function Login() {
    return (

        <Box className='center Background fullWidth'> {/* Fundo escuro */}
            
            <Typography className='logo' >Oslec</Typography>
            <Typography className='slogan'>──── Technology ────</Typography>
            
            <Alert /> {/* Mensagens de erro */}
            
            <Box width={400} height={300} className='center cardMedium lightBackground' > {/* Início do Card */}

                <Title /> {/* Título do Card */}

                <Form /> {/* Formulário */}

            </Box>

        </Box>

    );
}
