import React from 'react'; // Importação do React
import { Box, Typography } from '@material-ui/core'; // Importação de elementos visuais
import '../Login/styles.css'; // Estilização da página

export default function Detalhes() {
    return (

        <Box className='center Background fullWidth'> {/* Fundo escuro */}
            
            <Box width={1000} height={500} className='center cardMedium lightBackground' > {/* Início do Card */}

                <Typography>Status</Typography>
                <Typography>Data</Typography>
                <Typography>Hora</Typography>
                <Typography>Execução</Typography>
                <Typography>...</Typography>

            </Box>

        </Box>

    );
}
