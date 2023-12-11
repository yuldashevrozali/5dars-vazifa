import { useState } from 'react';
import './index.css'
export default function Dropdown(props) {
  const { id, title, isRequired, placeholder, data } = props;
  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className='dropdown-wrapper'>
      <label className='input-label' htmlFor={id}>
        {title} &nbsp;
        {
          isRequired && <span>*</span>
        }
      </label>
      <div className="dropdown" id={id}>
        <div onClick={handleOpen} style={open ? { borderBottomLeftRadius: "0px",borderBottomRightRadius:"0px" } : { borderBottomLeftRadius: "16px", borderBottomRightRadius:"16px" }} className="dropdown-title">
          {placeholder}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none" style={open ? {transform: 'rotate(180deg)'} : {transform:'rotate(0deg)'}}>
            <path d="M1.40156 1.42578L6.8349 6.85912C7.47656 7.50078 8.52656 7.50078 9.16823 6.85912L14.6016 1.42578" stroke="#6E6D77" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        {
          open && <div className="dropdown-items">
            <ul>
              {
                  data && data.map((el) => {
                    return(
                      <li key={el.id}>{el.text}</li>
                    )
                  })
              }
            </ul>
          </div>
        }
      </div>
    </div>
  )
}
