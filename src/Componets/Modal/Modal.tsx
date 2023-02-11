import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Data } from '../TsInterface/TsInterface';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function BasicModal({ open, setOpen }: Data) {

    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Alert
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Please put your information into the form
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}