import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SerchBox from "./components/SerchBox/SerchBox";
import { useEffect, useState } from "react";
import s from "./components/App.module.css"

const App = () => {
  const myContact = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
 
  const [value, setValue] = useState("");
  const serchValue = (e) => { 
    setValue(e.target.value.trim())
  };
 
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("saveList");
    return storedContacts ? JSON.parse(storedContacts) : myContact;
  });
  useEffect(() => {
    localStorage.setItem("saveList", JSON.stringify(contacts));
  }, [contacts]);
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    const newContact = {
      id: crypto.randomUUID(),
      name: values.name,
      number: values.phone
    }
    setContacts(prev => [...prev, newContact])
  };
   const filterContact = contacts.filter(e => {
    return e.name.toLowerCase().includes(value.toLowerCase())
  });
  const handleDelete = (id => {
    const newList = contacts.filter(item => item.id !== id);
    setContacts(newList)
  })
  const noContact = "No contacts. Please add a new contact";
  
  return (
    <>
      <div className={s.Form}>
       <h1 className={s.Title}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit}/>
      {contacts.length === 0 ? ("") : <SerchBox serchValue={serchValue}/>}
        {contacts.length === 0 ? (<span className={s.messege}>{noContact}</span>) : <ContactList myContact={filterContact} handleDelete={handleDelete}/>}
      </div>
      
    
    </>
  ) 
};

export default App;