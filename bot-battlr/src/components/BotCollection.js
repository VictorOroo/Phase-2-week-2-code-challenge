import React, { useState, useEffect } from 'react';

const BotCollection = ({ onEnlist, enlistedBots }) => {
    const [bots, setBots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedBot, setSelectedBot] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:8001/bots')
        .then((response) => response.json())
        .then((data) => {
          setBots(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }, []);
  
}
export default BotCollection;