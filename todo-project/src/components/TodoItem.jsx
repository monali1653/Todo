import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({todo, index}) {
    const colors = ["#e2b441", "#7AA249", "#bdb5aa", "#77a59f"]; 
    const[isTodoEditable, setIsTodoEditable]=useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

return (
  <div
    className="flex border-2 rounded-4xl px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black"
    style={{
      backgroundColor: colors[index % colors.length],
      borderColor: "black", 
    }}
  >
    <input
      type="checkbox"
      className="cursor-pointer"
      checked={todo.completed}
      onChange={toggleCompleted}
    />
    <input
      type="text"
      className={`border outline-none w-full bg-transparent rounded-lg  ${
        isTodoEditable ? "border-black/10 px-2" : "border-transparent"
      } ${todo.completed ? "line-through" : ""}`}
      value={todoMsg}
      onChange={(e) => setTodoMsg(e.target.value)}
      readOnly={!isTodoEditable}
    />
    {/* Edit / Save Button */}
    <button
      className="inline-flex w-8 h-8 rounded-4xl border-2 border-black text-sm  justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      onClick={() => {
        if (todo.completed) return;
        if (isTodoEditable) {
          editTodo();
        } else setIsTodoEditable((prev) => !prev);
      }}
      disabled={todo.completed}
    >
      {isTodoEditable ? "💾" : "🖊️"}
    </button>
    {/* Delete Button */}
    <button
      className="inline-flex w-8 h-8 rounded-4xl text-sm border-2 border-black justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      onClick={() => deleteTodo(todo.id)}
    >
      ✖️
    </button>
  </div>
);

}

export default TodoItem
