import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Bot from '../Bot';


const dialogStyles = {
    position: 'absolute',
    left: 910,
    top: 30,
    width: 700,
    height: 770
};

const DialogComponent = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} style={dialogStyles} >
            <DialogContent>
                <Bot onClose={onClose} />
            </DialogContent>
        </Dialog>
    );
};

export default DialogComponent;