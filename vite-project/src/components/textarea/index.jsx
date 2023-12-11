import './index.css'
export default function textarea(props) {
  const {id, name, placeholder, title, isRequired} = props;
  return (
    <div className='textarea'>
      <label className='input-label' htmlFor={id} >
        {title}
        {
          isRequired && <span>*</span>
        }
      </label><br />
      <textarea className='izoh' placeholder={placeholder} name={name} id={id} cols="30" rows="10"></textarea>
    </div>
  )
}
