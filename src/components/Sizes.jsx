import React, { useEffect, useState } from 'react'
import useProduct from '../context/ProductContext/useProduct'

function Size() {
    const [text, setText] = useState('')
    const { setFilters } = useProduct()
    const [lastSearches, setLastSearches] = useState([])

    useEffect(() => {
        setFilters(text)
    }, [text])

    
    const handleLastSearches = () => {
        if (text) {
            setLastSearches(prev => [text, ...prev])
        }
        if (lastSearches.length >= 5) {
            setLastSearches(prev => prev.filter((t,i) => i !== prev.length - 1))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLastSearches()
    }


    return (
        <div className='d-inline'>
            <div className='sizes-container'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='' >Search here :</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} />
                </form>
                <div className='phone-style'>Last search(s) :</div>
                {lastSearches.map((item, index) => {
                    return (
                        <button key={index} className='size-button'>{item}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Size