// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Chart } from 'react-charts'

// export default function CoinDetail() {
//     const [coin, setCoin] = useState(null);
    
//     useEffect(() => {
//         let id = window.location.pathname.split('/')
//         id = id[id.length - 1]
//         axios
//         .get(
//         //   `https://api.coingecko.com/api/v3/coins/${id}` 
//         //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
//         `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=gbp&days=1&interval=hourly`
        
// // `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=18-06-2016`

//         )
//         .then(res => {
//           setCoin(res.data);
//           console.log(res.data);
        
//         })
//         .catch(error => console.log(error));
//         console.log("Hello")
        
      
//       }, []);

//       const printCoinAttributes = () => {
//       return (
//           <div>
//               {coin.coingecko_score}
//               {coin.name} 
//               {coin.prices}
//           </div>
//       )
//     }
//     return (
//         <div>
//             Hello world
//             {coin && printCoinAttributes()}

//         </div>
//     )
//     }   







import React, { useState, useEffect } from 'react';
import { Chart } from 'react-charts'
 

export default function CoinDetail() {
    // function MyChart() {
        const data = React.useMemo(
          () => [
            {
              label: 'Series 1',
              data: [{ x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 30 }]
            },
            {
              label: 'Series 2',
              data: [{ x: 1, y: 10 }, { x: 2.5, y: 15 }, { x: 3, y: 7 }]
            },
            {
              label: 'Series 3',
              data: [{ x: 1, y: 10 }, { x: 2.9, y: 10 }, { x: 3, y: 40 }]
            }
          ],
          []
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
          </div>
        )
      }
    
    
