import "./App.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateNewTodo from "./components/CreateNewTodo";
import { TodoList } from "./components/TodoList";

export type typeTodo = {
          id: string;
          todo: string;
          isCompleted: boolean;
};
function App() {
          const [todoList, setTodoList] = useState<typeTodo[]>(() => {
                    const todoGet: string | null =
                              localStorage.getItem("todolist") ?? "";
                    const todoInit = JSON.parse(todoGet);
                    return todoInit.length > 0 ? todoInit : [];
          });
          const [newTodoString, setNewTodoString] = useState("");

          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log(e.target.value);
                    setNewTodoString(e.target.value);
          };
          const handleAddTodo = () => {
                    setTodoList([
                              ...todoList,
                              {
                                        id: uuidv4(),
                                        todo: newTodoString,
                                        isCompleted: false,
                              },
                    ]);
                    setNewTodoString("");
          };

          const handleCompleted = (todoid: string) => {
                    setTodoList((prevState) => {
                              return prevState.map((todo) => {
                                        if (todo.id === todoid) {
                                                  return {
                                                            ...todo,
                                                            isCompleted: !todo.isCompleted,
                                                  };
                                        }
                                        return todo;
                              });
                    });
          };

          useEffect(() => {
                    console.log(todoList);
                    localStorage.setItem("todolist", JSON.stringify(todoList));
          }, [todoList]);
          return (
                    <>
                              <h2 className="text-3xl font-bold underline items-center justify-center flex">
                                        This is Todo App
                              </h2>
                              <br />
                              {/* <div >
      <TextField value={newTodoString}  onChange={handleChange} size='small' />
      <Button onClick={handleAddTodo} variant="contained">THEM</Button>
      </div> */}
                              <CreateNewTodo
                                        handleChange={handleChange}
                                        handleAddTodo={handleAddTodo}
                                        newTodoString={newTodoString}
                              />

                              <TodoList
                                        handleCompleted={handleCompleted}
                                        todoList={todoList}
                              />
                              {/* {
          todoList.map((item) =>(
            <div style={ {display : 'flex'}} key={item.id}>
            <Todo  text = {item.todo} />
            </div>
          ))
        } */}
                    </>
          );
}

export default App;
