import type { Node } from 'react';

declare type ConfirmationModal = {
    cancelText?: string,
    confirmText?: string,
    element: ?HTMLElement,
    modalContent: Node,
    onConfirm: () => void,
    onCancel: () => void,
    onClose?: HTMLElement => void,
};

declare type ModalState = ?ConfirmationModal;