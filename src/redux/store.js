import { configureStore } from '@reduxjs/toolkit';
import PaginationSlice from './paginationSlice';

const store = configureStore({
    reducer: {
        paginationState: PaginationSlice.reducer
    }
})

export default store