import React from "react";
import { calculateInvestmentResults, formatter } from "./../util/investment";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  return (

    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
            const totalAmountInvested =
            yearData.valueEndOfYear -
            totalInterest;

          return (
            <tr>
              <td key={yearData.year}>{yearData.year}</td>
              <td key={yearData.year}>
                {formatter.format(yearData.valueEndOfYear)}
              </td>
              <td key={yearData.year}>{formatter.format(yearData.interest)}</td>
              <td key={yearData.year}>{formatter.format(totalInterest)}</td>
              <td key={yearData.year}>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>

  );
}
