import { typeTodo } from "../App"
import { Todo } from "./Todo"



// type list = {
//  id: string;
//  todo : string
// }

export const TodoList = ( {todoList, handleCompleted} : { todoList: typeTodo[], handleCompleted : (todoid : string) => void} ) => {
  return (
   <div>
   {
    todoList.map((item ) =>(
      <div  key={item.id}>
      <Todo todoid ={item.id}  handleCompleted = {handleCompleted} text = {item.todo}  isCompleted = {item.isCompleted} />
      </div>
    ))
  }
  </div>
  )
}
