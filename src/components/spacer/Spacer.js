import React, { useState, useEffect } from 'react'
import './Spacer.css'
import TextField from '@material-ui/core/TextField';
import axios from '../../axios/axios';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../../actions'
import Loader from 'react-loader-spinner'
import Results from '../results';

function Spacer() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    // stan wewnętrzny inputa - kontrolownay komponent
    const [inputValue, setInputValue] = useState("");
    const [loadedData, setLoadedData] = useState(false);
    const [loadSpinner, setLoadSpinner] = useState(false);

    useEffect(() => {
        setLoadSpinner(true);
        const delayDebounceFn = setTimeout(() => {
            //console.log(inputValue)
            if (inputValue !== "") {
                axios.get('search?q=' + inputValue + '&media_type=image')
                    .then(res => {
                        dispatch(setData(res.data.collection.items));
                        /* console.log(state);
                        console.log(res.data.collection); */
                        setLoadedData(true);
                        setLoadSpinner(false);

                    })
            } else {
                dispatch(setData([]));
                setLoadedData(false);
                setLoadSpinner(false);
            }
        }, 2000)

        return () => clearTimeout(delayDebounceFn)
    }, [inputValue, state, dispatch])


    return (
        <div className='spacer'>
            <div className='title'>SPACER</div>
            <div className='hello-text'>Being your journey through our amazaing galaxy, and discover places you never even heard of.</div>
            <div className='incentive-text'>Type anything space-related to start.</div>
            <div className='search'>
                <TextField autoFocus={true} label="Search" value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value) } />
            </div>

            {loadSpinner ? <Loader
                type="TailSpin"
                color="#00BFFF"
                height={50}
                width={50}
                timeout={2000} //3 secs

            />
                :
                loadedData ? <Results/> : <p>brak danych</p>
            }
            {/* {loadedData ? <Results /> : <></>} */}
        </div>
    )
}

export default Spacer
