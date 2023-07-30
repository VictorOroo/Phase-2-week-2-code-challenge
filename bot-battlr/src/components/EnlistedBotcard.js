import React from "react";


const EnlistedBotCard = () => {
  

  return (
    <div >
      <img src={avatar_url}  />
     
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>
      
    </div>
  );
};

export default EnlistedBotCard;
