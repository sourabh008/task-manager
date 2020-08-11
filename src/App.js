import React ,{useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'


function App() {
 const [text,setText]=useState("");
 const [date,setDate]=useState("");
 const [time,setTime]=useState("");
 const [data,setData]=useState([]);

const submit1=()=>{
  setData(data.concat( {
    text:text,
    date:date,
    time:time
  }));
  setText("");
  setTime("");
  setDate("");

  console.log(data);
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const classes = useStyles();

  return (
    

    <div className="App">
       <form className={classes.root} noValidate autoComplete="off">
        {/* <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" /> */}
        <TextField
          id="standard-password-input"
          label="Meating Title"
          type="text"
          value={text}
          onChange={(e)=>{
            setText(e.target.value);
           }}
          autoComplete="current-password"
        />
         <TextField
    id="date"
    onChange={(e)=>{
      setDate(e.target.value);
     }}
    label="Birthday"
    type="date"
    value={date}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
          <TextField
    id="time"
    label="Time"
    value={time}
    onChange={(e)=>{
      setTime(e.target.value);
     }}

    type="time"
    defaultValue={date}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
{/* </form>      <form >
      <input  value={text} type="text" onChange={(e)=>{
         setText(e.target.value);
        }}/>
      <input type="date" value={date}  onChange={(e)=>{
         setDate(e.target.value);
        }}/>
      <input type="time" value={time}onChange={(e)=>{
         setTime(e.target.value);
        }}/>
        </form> */}
      
    </form>
    <div className="button"> <Button  type="submit" onClick={submit1} variant="contained" color="primary">
        Add Meating
      </Button></div>
   
    {/* <button type="submit" onClick={submit1}>add meeting</button> */}
        
       <ol>
        {data.map(data1=>{
          return(
         <li>{data1.text}        {data1.time}         {data1.date}</li> 
         
          )
        })}
        </ol>
    </div>
  );
}

export default App;
