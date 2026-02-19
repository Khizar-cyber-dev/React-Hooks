// Creating a Modal Component in React
import React from 'react';

const ModalComponent = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '500px', maxWidth: '100%'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                    <h2 style={{ color: 'red'}}>{title}</h2>
                    <button onClick={onClose} style={styles.closeButton}>X</button>
                </div>
                <div style={{display: 'block'}}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalComponent;

const styles = {
    closeButton: {
        background: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        cursor: 'pointer',
        fontSize: '16px',
        lineHeight: '30px',
        textAlign: 'center',
    }
}