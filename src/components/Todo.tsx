import { Button } from "@mui/material"


import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

// const handleCheck = () =>{
//  console.log("check");
// }

export const Icon = ({isCompleted, handleCompleted, todoid} :{isCompleted : boolean; handleCompleted: (todoid : string) => void; todoid:string }) => {
  return (
   <div onClick={ ()=> handleCompleted(todoid)} > {isCompleted  ?  (<CheckBoxIcon/>) : (<CheckBoxOutlineBlankIcon/>)}</div>
   
  
  )
}

export const Todo = (   {text , isCompleted,todoid, handleCompleted} : {
 text : string;
 isCompleted : boolean;
 todoid : string;
 handleCompleted : (todoid : string) => void
 
} ) => {
  return (
   <Button  endIcon = {<Icon todoid = {todoid} handleCompleted={handleCompleted} isCompleted= {isCompleted} />} style={ {justifyContent: 'start'}} fullWidth>{text}</Button>
  )
}
