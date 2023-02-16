import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import BasicModal from '../Modal/Modal';

export default function Form() {
    const [open, setOpen] = React.useState(true);

    const navigate = useNavigate();
    // navigate hook for naviate second page 2

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    // for user info some states to stor input filed value by onchange event 

    const handelNameChange = (event: React.ChangeEvent<HTMLElement>) => {
        setName((event.target as HTMLInputElement).value);
    }
    const handelPhoneChange = (event: React.ChangeEvent<HTMLElement>) => {
        setPhone((event.target as HTMLInputElement).value);
    }
    const handelEmailChange = (event: React.ChangeEvent<HTMLElement>) => {
        setEmail((event.target as HTMLInputElement).value);
    }
    // for input filed some onchange event funtion above 

    const handelSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUser = { name, email, phone }
        localStorage.setItem('user', JSON.stringify(newUser));
        navigate('/secondpage');
    };
    // onclick submit user information to localstorage 

    const path = useLocation();
    if (path.pathname !== '/secondpage') {
        localStorage.clear();
    };
    // clear localStorage if user not specipic route 

    return (
        <Box sx={{ maxWidth: '1280px', margin: '0 auto', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ border: '2px solid orange', borderRadius: '5px', maxWidth: '500px', padding: '10px' }}>

                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', textTransform: 'capitalize', marginBottom: '10px' }}>
                    Write your informations
                </Typography>

                {/* form start  */}
                <form onSubmit={handelSave}>

                    <TextField sx={{ width: '100%' }} id="outlined-basic" type='text' label="Name" name='name' value={name} variant="outlined" required onChange={handelNameChange} />

                    <TextField sx={{ width: '100%', marginTop: '15px' }} id="outlined-basic" type='number' label="Phone" name='phone' variant="outlined" value={phone} required onChange={handelPhoneChange} />

                    <TextField sx={{ width: '100%', marginTop: '15px' }} id="outlined-basic" type='email' label="Email" name='email' variant="outlined" value={email} required onChange={handelEmailChange} />

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button sx={{ marginTop: '10px' }} type='submit' variant="contained" color="success">
                            Save
                        </Button>
                    </Box>

                </form>
                {/* form ends */}
            </Box>
            <BasicModal open={open} setOpen={setOpen} />
        </Box >
    );
}