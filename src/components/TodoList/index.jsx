import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todos }) => {
  return (
    <section className="todos py-[100px]">
      <div className="container">
        <h2 className="text-h2-mobile lg:text-h2 mb-[20px]">List:</h2>
        <ul className="flex flex-col gap-y-[10px]">
          {todos.map(({ id, todoName, isChecked }) => (
            <TodoItem key={id} todoName={todoName} isChecked={isChecked} />
          ))}
        </ul>
        <button className="mt-[10px] w-full text-xl py-[10px] px-[15px] rounded-[12px] border-dashed border-[1px] border-black/[.5]">
          +
        </button>
      </div>
    </section>
  );
};

export default TodoList;
