import { Button, TextField } from "@mui/material"
 type Props ={
    newTodoString : string;
    handleAddTodo : () =>  void;
   handleChange : (e: React.ChangeEvent<HTMLInputElement>) => void
 }

function CreateNewTodo(props  : Props) {
  return (
   <div>
   <TextField value={props.newTodoString}  onChange={props.handleChange} size='small' />
   <Button onClick={props.handleAddTodo} variant="contained">THEM</Button>
   </div>
  )
}

export default CreateNewTodo