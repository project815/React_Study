import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({children}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className='modal'>
       {/* {props.children} */}
       {children}
      </div>
    </div>
  ), document.body)
}
