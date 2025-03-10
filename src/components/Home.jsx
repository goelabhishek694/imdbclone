import React from 'react'
import Banner from './Banner'
import Movies from './Movies'
import { useSelector, useDispatch } from 'react-redux'
import PaginationSlice from '../redux/paginationSlice'
const actions = PaginationSlice.actions;
function Home() {
  const dispatch = useDispatch();
    const {pageNo} = useSelector(state => state.paginationState)
    const handlePrev = () => {
      dispatch(actions.handlePrevious());
    }
    const handleNext = () => {
      dispatch(actions.handleNext());
    }
  return (
    <div>
      <Banner/>
      <Movies pageNo={pageNo}/>
      {/* pagination */}
      <div className="bg-gray-400 w-full mt-8 p-4 h-[50px] flex justify-center gap-8">
        <div onClick={handlePrev} >
        <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div>{pageNo}</div>
        <div onClick={handleNext}>
        <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}

export default Home

// while writing unit test cases -> we are going to take a dummy value of sanitiseData() . 
// function foo(){
//   let data =[];
//   let resp = await fetch{url);
//   resp.json();
//   let ans = sanitiseData(); 
//   //more processing

// }

// function sanitiseData(){

// }