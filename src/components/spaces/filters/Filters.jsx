import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { handleClickOutSide } from '../../../services/functions'
import StatusFilter from './StatusFilter'


const Filters = ({setOpenFilters}) => {
  const filtersRef = useRef()
    useEffect(()=>{
        handleClickOutSide(filtersRef, ()=>setOpenFilters(false))
    }, [filtersRef,setOpenFilters])
  return (
    <div ref={filtersRef}  className='p-2 flex absolute top-[25px] left-[60px] min-w-[300px] h-[200px] boxshadow bg-[white] z-10'>
      <StatusFilter />
      <StatusFilter />
      <StatusFilter />
      <StatusFilter />
      <StatusFilter />
    </div>
  )
}

export default Filters