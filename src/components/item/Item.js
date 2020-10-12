import React from 'react'
import './Item.css'


function Item({ item }) {

    return (
        <div className='item'>
            <img src={item.links[0].href} alt='nasa img' />
            <div className='description'>
                <p className='desc-title'>Title: </p>
                <p>{item.data[0].title}</p>
            </div>
            <div className='author'>
                <p className='author-title'>Date : </p>
                <p className='author-text'>{item.data[0].date_created}</p>
            </div>
        </div>

    )
}

export default Item
