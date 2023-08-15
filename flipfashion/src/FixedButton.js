import React, { useState } from 'react';
import './FixedButton.css'; // Import the CSS file for styling
import Dialog from './Dialog';

const FixedButton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };
    return (
        <div className="fixed-button-container">
            <button className="fixed-button" onClick={handleOpenDialog}><img width="100" height="100" src="https://img.icons8.com/avantgarde/100/message-bot.png" alt="message-bot" /></button>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog} />
        </div>
    );
};

export default FixedButton;