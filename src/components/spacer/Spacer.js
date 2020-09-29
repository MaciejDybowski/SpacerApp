import React, { useState, useEffect } from 'react'
import './Spacer.css'
import TextField from '@material-ui/core/TextField';
import axios from '../../axios/axios';
import {useSelector , useDispatch} from 'react-redux';
import {setData} from '../../actions'

function Spacer() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    // stan wewnętrzny inputa - kontrolownay komponent
    const [inputValue, setInputValue] = useState("");
    const [loadedData, setLoadedData] = useState(false);

    // ustawianie stanu inputa
    const handleInput = (e) => {
        setInputValue(e);
    }

    // pobieranie z API
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('search?q='+inputValue+'&media_type=image')
                .then(res => {
                    dispatch(setData(res.data.collection.items));
                    console.log(state);
                    console.log(res.data.collection);
                    setLoadedData(true);
                })
            return request;
        }
        fetchData();
    }, [inputValue])

    return (
        <div className='spacer'>
            <div className='title'>SPACER</div>
            <div className='hello-text'>Being your journey through our amazaing galaxy, and discover places you never even heard of.</div>
            <div className='incentive-text'>Type anything space-related to start.</div>
            <div className='search'>
                <TextField autoFocus={true} label="Search..." value={inputValue} onChange={(e) => handleInput(e.currentTarget.value)} />
            </div>
            {loadedData ? state.map((item) => (
                <>
                <p>{item.data[0].description}</p>
                <img src={item.links[0].href} alt ='nasa img' />
                </>
            )) : <p>brak danych</p>}
        </div>
    )
}

export default Spacer
