import React from 'react'; // Importação do React
import { Box, Typography, Divider } from '@material-ui/core'; // Importação de elementos visuais

export default function Title() {

    return (

        <Box mb={3}>
            <Typography variant='h5'>
                Acesso ao Suporte
            </Typography>
            <Divider />
        </Box>
        
    );
}