import React, {useState, useEffect} from 'react'
import Card from './Card'
import { fetchQuote } from '../api/stock-api';

const Overview = ({ symbol, currency }) => {
    const [quoteData, setQuoteData] = useState(null);
  
    useEffect(() => {
      const fetchQuoteData = async () => {
        try {
          const response = await fetchQuote(symbol);
          setQuoteData(response['Global Quote']);
        } catch (error) {
          console.error('Error fetching quote data:', error.message);
        }
      };
  
      fetchQuoteData();
    }, [symbol]);
  
    if (!quoteData) {
      return null
    }
  
    const { '01. symbol': symbolValue, '05. price': price, '09. change': change, '10. change percent': changePercent } = quoteData;
  
    return (
      <Card>
        <span className='absolute left-4 top-4 text-neutral-600 text-md xl:text-lg 2xl:text-xl'>
          {symbolValue}
        </span>
        <div className='w-full h-full flex items-center justify-around'>
          <span className='text-2xl xl:text-4xl 2xl:text-5xl flex items-center pt-6'>
            ${price}
            <span className='text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2'>
              {currency}
            </span>
          </span>
          <span
            className={`text-lg xl:text-xl 2xl:text-2xl pt-6 ${change > 0 ? 'text-lime-500' : 'text-red-500'}`}
          >
            {change} <span>({changePercent}%)</span>
          </span>
        </div>
      </Card>
    );
  };
  
  export default Overview;