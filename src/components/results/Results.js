import React from 'react'
import './Results.css';
import {useSelector} from 'react-redux';
import Item from '../item'


function Results() {
    const state = useSelector(state => state);

    return (
        <div className='results' id='results'>
            {/* {state.map((item) => (
                    <>
                        <p>{item.data[0].description}</p>
                        <img src={item.links[0].href} alt='nasa img' />
                    </>))} */}
        {state.map((item,i) => <Item key={i} item = {item} />)}
        </div>
    )
}

export default Results
