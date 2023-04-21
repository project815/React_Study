import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({children, clickHandler, isSaleModal}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className='modal' style={{
        border:"4px solid", 
        borderColor: isSaleModal ? "#ff4500" : "#555",
        textAlign: "center"
        }}> {/*{{}} 첫번째  동적 값, 두번재 자바스크립트객체*/}
       {/* {props.children} */}
       {children}
       <button onClick={()=>clickHandler(false)} className={ isSaleModal ?'sales-btn': ''}>Close</button>
      </div>
    </div>
  ), document.body)
}
