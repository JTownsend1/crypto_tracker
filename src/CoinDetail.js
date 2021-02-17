import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function CoinDetail() {
    const [coin, setCoin] = useState(null);
    
    useEffect(() => {
        let id = window.location.pathname.split('/')
        id = id[id.length - 1]
        axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${id}` 
      
        )
        .then(res => {
          setCoin(res.data);
          console.log(res.data);
        
        })
        .catch(error => console.log(error));
        console.log("Hello")
        
      
      }, []);

      const printCoinAttributes = () => {
      return (
          <div>
              {coin.coingecko_score}
          </div>
      )
    }
    return (
        <div>
            Hello world
            {coin && printCoinAttributes()}

        </div>
    )
}
