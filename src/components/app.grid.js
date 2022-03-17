
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppDialog from '../components/dialog';
import { endPoints } from "../config";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import APICaller from "../utils/APICaller";
import Events from "../utils/event";

import {useEffect } from 'react';
const { leads } = endPoints;


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'dob',
    headerName: 'Age',
    width: 130,
  },
  { field: 'mobileNumber', headerName: 'Mobile Number', width: 130 },
  { field: 'address', headerName: 'Address', width: 130 },
  { field: 'passportnumber', headerName: 'passportnumber', width: 130 },
  { field: 'leadsStatusId', headerName: 'LeadsStatus', width: 130 },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  const [open, setOpen] = React.useState(false);
  const [lead, setLeads] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  
  useEffect(() => {

    const endpoint = leads;
    const method = "Get";
    let user = JSON.parse(localStorage.getItem("persist:persist-root"))
let tuser= JSON.parse(user.user);
   console.log("sssssssssss",tuser.loginToken)
    // Update the document title using the browser API
    APICaller(endpoint, method, null,tuser.loginToken)
    .then((response) => {
      console.log("response after login call --> ", response);
      const { status, data } = response;
      //const { Failed } = data;
      console.log("status", status);
      if (response && data && status == 200) {
        const { data: userData, succeeded } = data;
        console.log("status", userData);
        setLeads(userData);
      }
    })
    .catch((error) => {
      console.log("error making login call --> ", error);
      const { status, data } = error;
      console.log("status error", status, " data ", data);
      const { Message } = data;
      console.log("Message", Message);
      Events.trigger("Snackbar");
    });
  },[]);
  

  return (
    <div style={{ height: 400, width: '100%' , marginTop: '135px' }}>
       {/* <Stack spacing={2} direction="row" style={{justifyContent: 'end', marginBottom: '15px'}}>
        <Button variant="contained" onClick={handleClickOpen} >Add User</Button>
      </Stack> */}
      <DataGrid
        rows={lead}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      {/* <AppDialog openDialog ={open}/> */}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
                    <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
                    <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
                    <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
