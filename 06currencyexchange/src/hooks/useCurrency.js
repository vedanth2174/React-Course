import { useEffect, useState } from "react";
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
function useCurrency(currency){
    const[data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
    }, [currency])//want to call this method whenever currency changes
    console.log(data)
    return data
}

export default 'useCurrency';