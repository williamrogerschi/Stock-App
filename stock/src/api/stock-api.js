const basePath = 'https://finnhub.io/api/v1'
const apiKey = 'cmk4j21r01qi6gqum5dgcmk4j21r01qi6gqum5e0'


export const searchSymbol = async (query) => {
    const url = `${basePath}/search?q=${query}&token=${apiKey}`
    const response = await fetch(url)
    console.log('searchSymbol:', response)
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    return await response.json();
  };

  export const fetchStockDetails = async (stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${apiKey}`
    const response = await fetch(url)
    console.log('fetchStockDetails:', response)
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message);
    }
  
    return await response.json();
  };
  
  export const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${apiKey}`;
    const response = await fetch(url);
    console.log('fetchQuote:', response)
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    return await response.json();
  }
  

  export const fetchHistoricalData = async ( stockSymbol, resolution, from, to ) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`;
    const response = await fetch(url)
    console.log('fetchHistoricalData:', response)
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
  
    return await response.json();
  }
  