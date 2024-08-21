import React, { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
   // коли потрібно змінити стан на протилежний, рекомендується використовувати
   // функцію зворотнього виклику - best practice way
      setIsEditing(editing => !editing);

      // setIsEditing(!isEditing); - також можна, але при такому підході можуть виникнути проблеми
      // бо React може не встигнути оновити стан, і ви отримаєте неправильний результат
  };

  return (
    <li>
      <span className="player">
        {isEditing && <input type="text" value={name} required/>}
        {!isEditing && <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" :"Edit"}</button>
    </li>
  );
}
