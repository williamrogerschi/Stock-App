import React, { useContext, useState } from 'react'
import { XIcon, SearchIcon } from '@heroicons/react/solid';
import SearchResults from './SearchResults';
import ThemeContext from '../context/ThemeContext'
import { searchSymbol } from '../api/stock-api'

const Search = () => {
    const [input, setInput] = useState('')
    const [bestMatches, setBestMatches] = useState([])

    const {darkMode } =useContext(ThemeContext)

    const clear = () => {
        setInput('')
        setBestMatches([])
    }

    const updateBestMatches = async () => {
        try {
            if(input) {
                const searchResults = await searchSymbol(input)
                const result = searchResults.result
                setBestMatches(result)
            }
        } catch(error) {
            setBestMatches([])
            console.log(error)
        }
    }

    
  return (
    <div className={`flex items-center my-4 border-4 rounded-md relative z-50 w-96  ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-neutral-200'}`}>
        <input 
            type='text' 
            value={input} 
            className={`w-full px-4 py-2 focus:outline-none rounded-md font-archivo ${darkMode ? 'bg-gray-900' : null}`}
            placeholder='Search for Stocx' 
            onChange={(event) => {
                setInput(event.target.value)
            }}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    updateBestMatches()
                }
            }}
        />

        {input && (<button onClick={clear} className='m-1'>
            <XIcon className= 'h-4 w-4 fill-gray-500' />
        </button>
        )}

        <button onClick={updateBestMatches} className='h-8 w-8 bg-indigo-500 rounded-md flex justify-center item-center m-1 p-2'>
            <SearchIcon className='h-4 w-4 fill-gray-100' />
        </button>

        {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
        ) : null}
    </div>
  )
}

export default Search