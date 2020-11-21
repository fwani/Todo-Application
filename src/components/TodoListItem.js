import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.css'

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const {id, text, checked} = todo
    return (
        <div className="TodoListItemVirtualized" style={style}>
            <div className="TodoListItem">
                <div className={`checkbox ${checked ? 'checked' : ''}`} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)} >
                    <MdRemoveCircleOutline/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(
    TodoListItem,
    (prevProps, nextProps) => prevProps.todo === nextProps.todo);