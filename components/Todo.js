import React from 'react'
import { FiMoreVertical } from "react-icons/fi";
import cx from "classnames";
import styles from "../styles/Home.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import ClearIcon from '@mui/icons-material/Clear';

export default function Todo({items, setItems, todoItem, setTodoItem, handleEnter, handleDone, handleAdd, deleteAllList, deleteItem}) {
  return (
    <div>
        <div className="text-gray-400 flex justify-between items-center pt-10">
                <h1 className="uppercase font-bold tracking-wider">To-Do List</h1>
                <Tooltip style={{ color: "white" }} title="Delete All Tasks">
                  <IconButton onClick={deleteAllList}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
            </div>
        <div className="h-0.5 w-full bg-gray-400 mt-5 mb-5"></div>
        <div className="flex justify-between items-center">
            <input className="w-5/6 rounded py-2 px-4 text-gray-900" type="text" value={todoItem} onChange={(e)=>setTodoItem(e.target.value)} onKeyDown={handleEnter}/>
            <button className="px-8 py-2 text-sm rounded-md bg-white text-blue-500 uppercase font-bold" onClick={handleAdd}>
                Add
            </button>
        </div>
        <div className="text-center">
        <ul className="pt-5 ">
        {items
          .filter(({ done }) => !done)
          .map(({ id, message }) => (
            <li
              key={id}
              className={cx(styles.item)}
              //onClick={() => handleDone(id)}
            >
              
              <div className="flex justify-center items-center">
              <span className="ml-4 mx-auto">{message}</span>
              <Tooltip className="text-gray-400" title="Complete">
                <IconButton className="text-gray-400" onClick={() => handleDone(id)}>
                      <CheckCircleOutlineIcon />
                </IconButton>
              </Tooltip>
              <Tooltip className="text-gray-500" title="Remove Item">
              <IconButton className="mr-5 text-gray-500" onClick={() => deleteItem(id)}>
                    <ClearIcon />
              </IconButton>
              </Tooltip>
              </div>
            </li>
          ))}

        {items
          .filter(({ done }) => done)
          .map(({ id, message }) => (
            <li
              key={id}
              className={cx(styles.item, styles.done)}
              //onClick={() => handleDone(id)}
            >
              <div className="flex justify-center items-center">
              <span className="ml-4 mx-auto">{message}</span>
              <div className="flex items-end">
                <Tooltip className="text-gray-400" title="Uncomplete">
                  <IconButton className="text-gray-400" onClick={() => handleDone(id)}>
                        <RemoveDoneIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip className="text-white" style={{ color: "text-white" }} title="Remove Item">
                <IconButton className="mr-5 text-gray-400" onClick={() => deleteItem(id)}>
                      <ClearIcon />
                </IconButton>
                </Tooltip>
                </div>
              </div>
            </li>
          ))}
      </ul>
        </div>
        <div className="h-0.5 w-full bg-gray-400 mt-5"></div>
    </div>
  )
}
