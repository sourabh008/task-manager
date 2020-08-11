import React,{useState} from 'react'
import "./App.css";
import {Button} from '@material-ui/core'


function Edit(props) {
    const [isEdit,setIsEdit]=useState(false);
const [text,setText]=useState("");
 const [date,setDate]=useState("");
 const [time,setTime]=useState("");
    const onEdit=()=>{
        if(!isEdit){
            setIsEdit(true);
        }
    }
    const onUpdate1=(e)=>{
        e.preventDefault();
        props.onUpdate(text,date,time,props.time);
        console.log("updated")
        setIsEdit(false);

    }
// const {text,date,time}=this.props;
    return (
        <div>
            {isEdit?(<form >
      <input  value={props.text} type="text" onChange={(e)=>{
         setText(e.target.value);
        }}/>
      <input type="date" value={props.date}  onChange={(e)=>{
         setDate(e.target.value);
        }}/>
      <input type="time" value={props.time} onChange={(e)=>{
         setTime(e.target.value);
        }}/>
          <Button  type="submit" onClick={onUpdate1} variant="contained" color="primary">
        save
      </Button>
            </form>):(<h2>{props.text} {"   "} {props.date}{"   "}{props.time}{"   "}  <Button onClick={onEdit} type="submit" variant="contained" color="primary">
        Edit
      </Button></h2>)}

        </div>
    )
}

export default Edit
