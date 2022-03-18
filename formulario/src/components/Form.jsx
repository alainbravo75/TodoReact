import React from "react";
import {TextField} from "@mui/material";
import Button from '@mui/material/Button';
import { Paper } from "@mui/material";


export default function Form(){
    return(
        <Paper style={{padding: "1em"}}>
     <div style={{display: 'flex', justifyContent: "center"}}>
     <TextField id="outlined-basic" label="Tarefa" variant="outlined"/>
     <Button variant="text">Add</Button>
     </div>
        </Paper>
    )
}