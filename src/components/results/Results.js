import React from 'react'
import './Results.css';
import {useSelector} from 'react-redux';


function Results() {
    const state = useSelector(state => state);

    return (
        <div className='results'>
            {state.map((item) => (
                    <>
                        <p>{item.data[0].description}</p>
                        <img src={item.links[0].href} alt='nasa img' />
                    </>))}
        </div>
    )
}

export default Results
