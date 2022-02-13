import React, { FC, useState } from "react"

export const TodoList: FC = () => {
  const [ todos, setTodos ] = useState<JSX.Element[]>([])

  const addTodo = async () => {
    const { Todo } = await import("./Todo")
    const now = Date.now()
    setTodos(prev => [ ...prev, <Todo key={now} title={`My Todo at ${now}`} /> ])
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      { todos }
    </div>
  )
}
