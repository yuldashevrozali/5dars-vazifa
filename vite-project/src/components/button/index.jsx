import './index.css'
export default function Button(props) {
    const { id, title } = props;
    return (
        <div className='btn'>
            <button id={id}>{title}</button>
        </div>
    );
}

