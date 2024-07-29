import React, { useState } from "react";

const TodoItem = ({ id, todoName, isChecked }) => {
  const [checked, setChecked] = useState(isChecked);

  return (
    <li className="flex items-center py-[10px] px-[15px] rounded-[12px] border-[1px] border-black/[.5]">
      <input type="checkbox" className="" />
      <p className="ml-[20px] text-xl">{todoName}</p>
      <div className="ml-auto flex items-center gap-x-[5px]">
        {checked ? (
          <button className="ml-auto py-[5px] px-[10px] bg-red rounded-[4px] text-white cursor-pointer">
            Remove
          </button>
        ) : (
          <button className="ml-auto py-[5px] px-[10px] bg-green rounded-[4px] text-white cursor-pointer">
            Done
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
