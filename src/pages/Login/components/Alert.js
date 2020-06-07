import React from 'react'; // Importação do React
import { Box } from '@material-ui/core'; // Importação de elementos visuais
import { ToastContainer } from 'react-toastify'; // Biblioteca de mensagens de erro

export default function Alert() {

    return (

        <Box>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Box>
        
    );
}