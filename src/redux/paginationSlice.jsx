import {createSlice} from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
    name: "paginationslice",
    initialState:{
        pageNo: 1
    },
    reducers:{
        handleNext: (state) => {
            state.pageNo = state.pageNo+1;
        },
        handlePrevious: (state) => {
            if(state.pageNo == 1){
                return;
            }
            state.pageNo = state.pageNo-1;
        }
    }
})

export default PaginationSlice