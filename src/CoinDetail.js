import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Chart } from 'react-charts'

console.log(1)
export default function CoinDetail() {
    console.log(2)
    const [coinArray, setCoinArray] = useState([]);

    console.log(3)
    
    useEffect(() => {
        console.log(4)
        let id = window.location.pathname.split('/')
        id = id[id.length - 1]
        console.log(5)
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=gbp&days=10&interval=daily`
                // `https://api.coingecko.com/api/v3/coins/${id}` 
            )
            .then(res => {
                setCoinArray(res.data.prices);
                // setCoinArray(res.data);
                
            })
                .catch(error => console.log(error)); 

                
            }, []);
            console.log(coinArray);




    const data = React.useMemo(
        () => [
          {
            label: 'Series 1',
            // data: [[1,2], [2,7], [3,12], [4,3]]
          data: coinArray
          
          }
        ],
       
      )
     
    const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )

      return (
        <div
          style={{
            width: '1000px',
            height: '700px'
          }}
        >
          <Chart data={data} axes={axes} />
          <p>{coinArray}</p>
        </div>
      )
    }

