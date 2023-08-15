import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Bot from './Pages/Bot';

const DialogComponent = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                {/* Add your dialog content here */}
                <Bot onClose={onClose} />
            </DialogContent>
        </Dialog>
    );
};

export default DialogComponent;