import { typeTodo } from "../App"
import { Todo } from "./Todo"



// type list = {
//  id: string;
//  todo : string
// }

export const TodoList = ( {todoList} : { todoList: typeTodo[]} ) => {
  return (
   <div>
   {
    todoList.map((item ) =>(
      <div style={ {display : 'flex'}} key={item.id}>
      <Todo  text = {item.todo}  isCompleted = {item.isCompleted} />
      </div>
    ))
  }
  </div>
  )
}
