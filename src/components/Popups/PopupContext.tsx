import React, { createContext, useContext, useState, type ReactNode } from 'react';
import ProductPopup from './ProductPopup';
import EnquiryPopup from './EnquiryPopup';

interface PopupContextType {
    openEnquiry: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopups = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopups must be used within a PopupProvider');
    }
    return context;
};

export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isProductOpen, setIsProductOpen] = useState(true); // Open on load
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    const openEnquiry = () => setIsEnquiryOpen(true);

    return (
        <PopupContext.Provider value={{ openEnquiry }}>
            {children}
            {isProductOpen && <ProductPopup onClose={() => setIsProductOpen(false)} />}
            {isEnquiryOpen && <EnquiryPopup onClose={() => setIsEnquiryOpen(false)} />}
        </PopupContext.Provider>
    );
};
