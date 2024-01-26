import { IoPerson } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import css from '../Contact/Contact.module.css'

export const Contact = ({ contact: { id, name, number } }) => {
    // console.log(contact);
    return (
        <li className={ css.contactContainet}>
            <div>
                <p><IoPerson />  { name}</p>
                <p><IoCall />  {number}</p>
            </div>
            <button className={ css.btnDelete}>Delete</button>
        </li>
    )
    
}