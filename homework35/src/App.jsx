import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import AddContact from './pages/AddContact';
import ContactsList from './pages/ContactsList';
import EditContact from './pages/EditContact';
import './App.css'


function App() {
const [contacts, setContacts] = useState([]);
const [openModal, setOpenModal]  = useState(false);
const [currentContact, setcurrentContact] = useState(0);

useEffect(() => {
  async function getContacts () {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data)
      setContacts(data);
  }
  getContacts()
}, []); 

const handleDeleteContact = (id) => {
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  console.log(id);
  setOpenModal(false);
  setContacts(updatedContacts);
  console.log(updatedContacts)

  
};

const closeModal = () => {
  setOpenModal(false);
}

  const toggleModalToDelete = (isActave, contactId) => {
  setOpenModal(isActave);
  setcurrentContact(contactId)
}

const handleAddContact = (newContact) => {
//  ID для нового контакту 
const newId = Math.floor(Math.random() * 10000);
const contactWithId = { ...newContact, id: newId };
setContacts([...contacts, contactWithId]);
// console.log(contacts)
}


const changeContact = (editedContact) => {
  const updateContact = contacts.map((contact) => contact.id === editedContact.id ? editedContact : contact);
  console.log(updateContact)
  setContacts(updateContact)
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
         path: '/',
      element: <ContactsList 
                currentContact={currentContact} 
                contacts={contacts} 
                onDeleteContact={handleDeleteContact} 
                modal={openModal} 
                toggleModalToDelete={toggleModalToDelete} 
                closeModal={closeModal}/>
      },
      {
         path: '/add',
        element: <AddContact onAddContact={handleAddContact}/>
      },
      {
        path: '/edit/:userId',
        element: <EditContact onSaveContact={changeContact}/>,
        loader: async ({params}) => {
          console.log(params)
          const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
          const data = await res.json();
          console.log(params.userId)
          console.log(data)
          return data
        }
      }
      
    ]
}])




  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
