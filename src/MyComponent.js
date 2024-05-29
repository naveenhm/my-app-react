import React, { useState } from 'react';
import Modal from 'react-modal'; // Assuming you're using react-modal
import axios from 'axios';

const MyComponent = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const openModal = (data) => {
        
        try {
            const response = axios.get('http://localhost:5000/api/items');
            data=response.data
          } catch (error) {
            console.error(error);
          }

        setModalData(data);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalData(null);
    };

    return (
        <div>
            <button onClick={() => openModal({ name: 'Example Data', value: 42 })}>
                Open Modal with Data
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2>Data in Modal</h2>
                {modalData && (
                    <div>
                        <p>Name: {modalData.name}</p>
                        <p>Value: {modalData.value}</p>
                    </div>
                )}
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default MyComponent;
