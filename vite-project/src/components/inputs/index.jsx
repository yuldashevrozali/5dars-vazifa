import './index.css'
export default function input(props) {
    const { placeholder, isRequired, title, name, id } = props;
    return (
        <div className='inputs'>
            <label className='input-label' htmlFor={id}>
                
                {title}&nbsp;
                {
                    isRequired && <span>*</span>
                }
            </label>
            <input id = {id} name={name} className='text-input' placeholder={placeholder} type="text" />
        </div>
    )
}
