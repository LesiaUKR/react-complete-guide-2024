import React, { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
   // коли потрібно змінити стан на протилежний, рекомендується використовувати
   // функцію зворотнього виклику - best practice way
      setIsEditing(editing => !editing);

      // setIsEditing(!isEditing); - також можна, але при такому підході можуть виникнути проблеми
      // бо React може не встигнути оновити стан, і ви отримаєте неправильний результат
  };

  const handleChangePlayerName = (e) => {
    setPlayerName(e.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>

  // якщо натиснуто кнопку "Edit", то відобразити input, для редагування імені гравця
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        value={playerName}
        onChange={handleChangePlayerName}
        required
      />
    );
  }
  
  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {/* якщо isEditing === true, то відобразити input, інакше - span */}
        {/* {isEditing && <input type="text" value={name} required/>}
        {!isEditing && <span className="player-name">{name}</span>} */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" :"Edit"}</button>
    </li>
  );
}
