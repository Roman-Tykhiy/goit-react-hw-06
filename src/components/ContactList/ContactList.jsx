import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"
const ContactList = ({myContact, handleDelete}) => {
    return (
         <ul className={s.contactList}>
            {myContact.map(item => (
            
                < Contact key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
   )
   
}

export default ContactList;