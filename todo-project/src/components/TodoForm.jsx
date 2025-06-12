import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {

    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventdefault()
        if(!todo) return
        addTodo({id:Date.now(), todo: todo, completed: false})
        setTodo("")
    }

  return (
    <form onSubmit={add} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Add Todo..."
        className="w-full px-3 py-1.5 outline-none bg-white text-black border border-black rounded-4xl"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-1.5 text-white border border-black rounded-4xl"
        style={{ backgroundColor: '#7AA249' }}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
