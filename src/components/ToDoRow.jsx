
import { MdOutlineEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

export default function ToDoRow({todo}) {
    return (
        <div className="flex items-center border-b p-2 border-gray-100">
          <div className={todo.isCompleted? "flex-grow text-lg line-through" :  "flex-grow text-lg"}>
            <input type="checkbox" checked={todo.isCompleted} className="mr-2" /> {todo.title}
          </div> 
          <button className="p-2 hover:text-gray-300 cursor-pointer"><MdOutlineEdit size={20} /></button> 
          <button className="p-2 hover:text-gray-300 cursor-pointer"><IoTrashOutline /></button>
        </div>
    )
}

ToDoRow.propTypes = {
    todo: {
        name: PropTypes.string,
        id: PropTypes.string,
        isCompleted: PropTypes.bool
    }
  };