import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

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
    const handleBotClick = (bot) => {
        setSelectedBot(bot);
      };
    
      const handleBackToListView = () => {
        setSelectedBot(null);
      };
    
    if (isLoading) {
        return <div>Loading...</div>; // Display a loading message while data is being fetched
      }
      return (
        <div className="container">
         <BotCard/>

        </div>
      );
}
export default BotCollection;