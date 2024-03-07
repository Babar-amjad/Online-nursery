import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './plantsData/PlantsData';
import Plants from '../pages/plants/Plants';


const SearchItem = () => {
  const {term}=useParams();
  const [filterData,setFilterData]=useState([])

  useEffect( ()=>{

    const filterData=()=>{
      const data=items.filter( (p)=>p.category.toLowerCase().includes(term.toLowerCase()))
      // console.log(data)
      setFilterData(data)
    }
    filterData()
  },[term])

  return (

    <div>
     <Plants items={filterData}/>
    </div>
  )
}

export default SearchItem
