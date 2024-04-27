"use client";

import { useState } from "react";

function Form() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");
  





  
  function submitTodo() {
    setTodos((prev: string[]) => {
      return [...prev, todo];
    });
  }

  return (
    <div>
      <div className="space-x-4">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setTodo(e.target.value)}
          className="border-2 border-black"
        />
        <button onClick={submitTodo}>Submit</button>
      </div>
        <div className="mt-8">
            <h2>Todos</h2>
            <ul>
                {todos.map((todo)=><li key={todo}>{todo}</li>)}
            </ul>
        </div>
    </div>
  );
}

export default Form;
