import React from 'react';
import { ModalWrapper, ModalContent, ModalFooter, ModalButton } from "./styles/Modal.styled.tsx";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    itemName: string;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, itemName }) => {
    if (!isOpen) return null;

    return (
        <ModalWrapper>
            <ModalContent>
                <h3>Confirm Deletion</h3>
                <p>Are you sure you want to delete {itemName} from the cart?</p>
                <ModalFooter>
                    <ModalButton onClick={onConfirm}>Yes</ModalButton>
                    <ModalButton onClick={onClose}>No</ModalButton>
                </ModalFooter>
            </ModalContent>
        </ModalWrapper>
    );
};

export default ModalComponent;
