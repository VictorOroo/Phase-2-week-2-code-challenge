import React from 'react';

const EnlistedBotCard = ({ bot, onDischarge }) => {
  const { id, name, health, damage, armor, bot_class, avatar_url, catchphrase } = bot;

  const handleXClick = () => {
    onDischarge(bot);
  };

  return (
    <div>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>
      <button  onClick={handleXClick}>X</button>
    </div>
  );
};

export default EnlistedBotCard;
