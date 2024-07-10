import React, {createContext, ReactNode} from 'react';
import {GreatSword} from '../lib/api';

export interface GreatSwordsContextType {
    greatSwords: GreatSword[];
}

const GreatSwordsContext = createContext<GreatSwordsContextType | undefined>(undefined);

interface GreatSwordsProviderProps {
    greatSwords: GreatSword[];
    children: ReactNode;
}

export const GreatSwordsProvider: React.FC<GreatSwordsProviderProps> = ({
                                                                            greatSwords,
                                                                            children
                                                                        }) => {
    return (
        <GreatSwordsContext.Provider value={{
            greatSwords
        }}>
            {children}
        </GreatSwordsContext.Provider>
    );
};

export default GreatSwordsContext;


// import React, {createContext, ReactNode} from 'react';
// import {GreatSword} from '../lib/api';
//
// export interface GreatSwordsContextType {
//     greatSwords: GreatSword[];
//     selectedGreatsword: GreatSword;
//     setSelectedGreatsword: (greatSword: GreatSword) => void;
//     favouriteGreatsword: GreatSword;
//     setFavouriteGreatsword: (greatSword: GreatSword) => void;
// }
//
// const GreatSwordsContext = createContext<GreatSwordsContextType | undefined>(undefined);
//
// interface GreatSwordsProviderProps {
//     greatSwords: GreatSword[];
//     selectedGreatsword: GreatSword;
//     setSelectedGreatsword: (greatSword: GreatSword) => void;
//     favouriteGreatsword: GreatSword;
//     setFavouriteGreatsword: (greatSword: GreatSword) => void;
//     children: ReactNode;
// }
//
// export const GreatSwordsProvider: React.FC<GreatSwordsProviderProps> = ({
//                                                                             greatSwords,
//                                                                             children,
//                                                                             selectedGreatsword,
//                                                                             setSelectedGreatsword,
//                                                                             setFavouriteGreatsword,
//                                                                             favouriteGreatsword
//                                                                         }) => {
//     return (
//         <GreatSwordsContext.Provider value={{
//             greatSwords,
//             selectedGreatsword,
//             favouriteGreatsword,
//             setSelectedGreatsword,
//             setFavouriteGreatsword
//         }}>
//             {children}
//         </GreatSwordsContext.Provider>
//     );
// };
//
// export default GreatSwordsContext;

