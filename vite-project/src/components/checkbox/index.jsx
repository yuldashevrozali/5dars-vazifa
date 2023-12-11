import './index.css'

export default function checkbox(props) {
    const { id, name, title, isRequired } = props;
    return (
        <div className='checkbox'>

            <input type="checkbox" name={name} id={id} />
            <label className='input-label' htmlFor={id}>
                {title}
                {
                    isRequired && <span>*</span>
                }
            </label>
        </div>
    )
}
