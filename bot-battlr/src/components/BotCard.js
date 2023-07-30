import React from 'react';

const BotCard = () => {
  const { id, name, health, damage, armor, bot_class, avatar_url, catchphrase } = bot;

  return (
    <div >
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p> 
     </div>
  );
};

export default BotCard;
