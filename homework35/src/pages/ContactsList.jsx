
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

const ContactsList = ({contacts, onDeleteContact, modal, toggleModalToDelete, closeModal, currentContact}) => { 
  return (
    <div>
    <h2>Список контактів</h2>
    
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Телефон</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.surname}</td>
            <td>{contact.phone}</td>
            <td>
              
              <button onClick={() => toggleModalToDelete(true, contact.id)}>
                Видалити
              </button>
               { (modal && contact.id == currentContact) && <Modal contact={contact} onDeleteContact={onDeleteContact} closeModal={closeModal}/>}
            </td>
            <td>
              <button>
                <Link to={`/edit/${contact.id}`}>Редагувати</Link>
              </button>
            </td>
          </tr>
        ))  
        }
      </tbody>
    </table>  
  </div>
  )
}

export default ContactsList