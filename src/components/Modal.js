import './Modal.css'

export default function Modal({children, handleClose}) {
  return (
    <div className="modal-backdrop">
      <div className='modal'>
       {/* {props.children} */}
       {children}
       <br/>
       <button onClick={handleClose}>close</button>
      </div>
    </div>
  )
}
