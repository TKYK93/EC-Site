

export const initialState = {
    basket: [],
    user: null,
    searchedWord: null,
};

export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
);

const reducer = (state, action) => {
    switch(action.type){
        
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                        };

        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id
                );
                

            if(index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn('cannot remove product');
            }


            return {...state, basket: newBasket,};
        
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        
        case 'SET_SEARCHED_WORD':
            return{
                ...state,
                searchedWord: action.searchedWord,
            }
        
        case 'DELETE_SEARCHED_WORD':
            return {
                ...state,
                searchedWord: null,
            }


        default:
            return state;
    }
};

export default reducer;