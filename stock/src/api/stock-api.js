export const basePath = 'https://www.alphavantage.co'
export const apiKey = '0RS0J59QOI8DVGGE'



export const searchSymbol = async (stockSymbol) => {
  const url = `${basePath}/query?function=SYMBOL_SEARCH&keywords=${stockSymbol}&apikey=${apiKey}`
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`
      throw new Error(message)
    }

    const data = await response.json()
    console.log('searchSymbol:', data)

    return data
  } catch (error) {
    console.error('Error fetching symbol:', error)
    throw error;
  }
}



  export const fetchStockDetails = async (stockSymbol) => {
    const url = `${basePath}/function=OVERVIEW&symbol=${stockSymbol}&apikey=${apiKey}`
    const response = await fetch(url)
    console.log('fetchStockDetails:', response)
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
  
    return await response.json();
  }


  
export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${apiKey}`
  const response = await fetch(url)

  if(!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }

  const data = await response.json()
  console.log(data)

  if (data && data['Global Quote']) {
    return data
  } else {
    throw new Error('Invalid response format for quote data')
  }
}
  



  export const fetchHistoricalData = async ( stockSymbol, resolution, from, to ) => {
    const encodedSymbol = encodeURIComponent(stockSymbol)
    console.log('encdoed:', encodedSymbol)

    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`
    const response = await fetch(url)
    console.log('fetchHistoricalData:', response)
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
  
    return await response.json()
  }
  