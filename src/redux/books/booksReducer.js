import { ADD, DELETEBOOK } from './actionType';
const initialState = {
    uid: 1,
    books: [],
}
const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:

            return {
                ...state,
                uid: state.uid + 1,
                books: [
                    ...state.books,
                    {
                        id: state.uid,
                        destination: action.destination,
                        destinationTo: action.destinationTo,
                        date: action.date,
                        guest: action.guest,
                        classes: action.classes,

                    }
                ]
            }
        case DELETEBOOK:
            const deletes = state.books.filter(b => b.id !== action.id)
            return {
                ...state,
                books: deletes,
            }

        default:
            return state;
    }

};

export default booksReducer;