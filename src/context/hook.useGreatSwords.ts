import { useContext } from 'react';
import GreatSwordsContext, { GreatSwordsContextType } from '../context/GreatSwordsContext';

export const useGreatSwords = (): GreatSwordsContextType => {
    const context = useContext(GreatSwordsContext);
    if (context === undefined) {
        throw new Error('useGreatSwords must be used within a GreatSwordsProvider');
    }
    return context;
};
