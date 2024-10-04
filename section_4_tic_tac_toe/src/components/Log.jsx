export default function Log({ turns }) {
//   console.log("turns", turns);
  return (
    <ol id="log">
      {turns.map(({ square, player }) => 
        (<li key={`${square.row}${square.col}`}>
          {player} selected row: {square.row}, col: {square.col}
        </li>
        ))}
    </ol>
  );
}
