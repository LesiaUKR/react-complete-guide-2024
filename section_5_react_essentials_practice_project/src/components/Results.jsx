import React from 'react'
import { calculateInvestmentResults } from './../util/investment';

export default function Results({input}) {
  
   const resultsData = calculateInvestmentResults(input);
   console.log(resultsData)
  return (
 <table id="results">
   <thead>
      <tr>
         <th>Year</th>
         <th>Investment Value</th>
         <th>Interest (Year)</th>
         <th>Invested Capital</th>
      </tr>
   </thead>
 </table>
  )
}
