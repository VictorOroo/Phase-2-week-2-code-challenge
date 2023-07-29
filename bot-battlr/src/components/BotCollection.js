import React, { useState, useEffect } from 'react';

const BotCollection = ({ onEnlist, enlistedBots }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);
}

export default BotCollection;