import React from "react";

const BotSpecs = () => {

    return (
        <div >
          <h2>Bot Specifications</h2>
          <div className>
            <img src={avatar_url} />
            
            <p>Health: {health}</p>
            <p>Damage: {damage}</p>
            <p>Armor: {armor}</p>
            <p>Class: {bot_class}</p>
            <p>Catchphrase: {catchphrase}</p> {/* Display the catchphrase */}
          </div>
          
            
        </div>
      );


}

export default BotSpecs;