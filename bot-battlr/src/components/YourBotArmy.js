import React from 'react';
import EnlistedBotCard from './EnlistedBotCard';

const YourBotArmy = ({ enlistedBots, onDischarge }) => {
  const handleDischarge = (bot) => {
    onDischarge(bot);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div>
        {enlistedBots.map((bot) => (
          <EnlistedBotCard key={bot.id} bot={bot} onDischarge={handleDischarge} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
