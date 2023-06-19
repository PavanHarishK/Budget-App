import React from "react";

const ExpensesDisplayTable = ({ inputs }) => {
  if (!inputs || inputs.length === 0) {
    return null;
  }

  return (
    <div>
      <h3>Expenses table</h3>
      {inputs.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Expenses Title</th>
              <th>Expenses Cost</th>
            </tr>
          </thead>
          <tbody>
            {inputs.map((inputs, index) => (
              <tr key={index}>
                <td>{inputs.title}</td>
                <td>{inputs.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpensesDisplayTable;
