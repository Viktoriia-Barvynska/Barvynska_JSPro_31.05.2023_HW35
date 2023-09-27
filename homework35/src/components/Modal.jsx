import '../scss/modal.scss';

const Modal = ({contact, onDeleteContact, closeModal}) => {
    console.log(contact)
  return (
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-content'>
                <h1>Ви впевнені?</h1>
            </div>
            <div className='modal-footer'>
                <button onClick={() => onDeleteContact(contact.id) } className='btn btn-yes'>Так</button>
                <button onClick={() => closeModal()} className='btn btn-cancel'>Ні</button>
            </div>
        </div>
    </div>
  )
}

export default Modal