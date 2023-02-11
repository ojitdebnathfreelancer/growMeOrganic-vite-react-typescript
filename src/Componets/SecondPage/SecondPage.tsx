import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Example2 } from '../TsInterface/TsInterface';


const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90
    },
    {
        field: 'userId',
        headerName: 'UserID',
        width: 90
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 250,
        editable: true,
    },
    {
        field: 'body',
        headerName: 'Discription',
        width: 250,
        editable: true,
    }
];
// table data columns with some information and dynamic 

const me: Example2 = {
    id: 1,
    title: '',
    fruts: ['apple', 'orange', 'banana'],
    user: { name: 'ojit deb nath', number: 10938 },
    address: 'habiganj',
}
console.log(me);
// testing typeScript interface 

const SecondPage = () => {

    const path = useLocation();
    if (path.pathname === '/secondpage') {
        const user = localStorage.getItem('user')
        if (!user) {
            // alert('Please put you information')
            return <Navigate to='/'></Navigate>
        }
    }
    // cheked user was submited inofo or not 


    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, []);
    // all users data fetching from database 


    return (
        <Box sx={{ height: 400, maxWidth: '800px', margin: '0 auto' }}>

            <Typography variant="h4" component="h4" sx={{ textAlign: 'center', mt: 5, mb: 2 }}>
                Users List
            </Typography>

            <DataGrid
                rows={users}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    )
}

export default SecondPage;