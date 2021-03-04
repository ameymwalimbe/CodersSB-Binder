import React, {useState} from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import onClickOutside from "react-onclickoutside";
import { Link } from 'react-router-dom';
import Select from 'react-select';



function DropDown({ title, items =[], multiSelect = false}){
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    DropDown.handleClickOutside = () => setOpen(false);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)){
            if (!multiSelect) {
                setSelection([item]);
            }
        }
    }

    function isIteminSelection(item) {
        if (selection.some(current  => current.id === item.id)) {
            return true;
        }
        return false;
    }
      

    return(
        <div className = "dd-wrapper">
            <div 
                tabIndex ={0} 
                className ="dd-header" 
                role="button" 
                onKeyPress={() => toggle(!open)} 
                onClick ={() => toggle(!open)} >
                    <div className ="dd-header__title">
                        <p className ="dd-header__title--bold">{title}</p>
                    </div>
                `<div className="dd-header__action">
                    <p>{open ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}</p>
                </div>
            </div>
            {open && (
                <ul className ="dd-list">
                    {items.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <Link to="/cards">
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                                <span> {isIteminSelection(item) && '    Selected'}</span>

                            </button>

                            </Link>
        
                        </li>
                    ))}
                </ul>
            )}

        </div>

    )
}

const onClickOutsideConfig = {
    handleClickOutside: () => DropDown.handleClickOutside,
};
export default onClickOutside(DropDown, onClickOutsideConfig);

