import {useState} from 'react';

const Accordian = ({id,title,info}) => {
    const[show,setShow]=useState(false);

    const toggle =() => {
        setShow((prev) => !prev);
    }

    return ( 
    <>
        <div key={id} className='accordian'>
            <div className='accordian-title'>
                <h3>{title}</h3>
                <button onClick={toggle} className='accordian-icon'>
                    {show ? '-' : '+'}
                </button>
            </div>
            {show && <p className='accordian-info'>{info}</p>}
        </div>
    </>
    );
}

export default Accordian;