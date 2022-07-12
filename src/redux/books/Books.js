export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const initialState = {
  books: [
    {
      id: 1,
      genre: 'Action',
      title: 'The One',
      author: 'Jimmy Fitzimons',
    },
  ],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

export const addBook = () => ({
  type: ADD_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});
