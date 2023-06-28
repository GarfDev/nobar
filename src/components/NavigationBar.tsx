import React from 'react';

interface Props {
}

const NavigationBar = ({}: Props) => {
  return (
    <div className="px-24 w-full h-[150px] flex justify-between items-center">
      <p className="text-2xl text-[#643A6B] font-bold
      ">NOBAR</p>
    </div>
  )
}

export default NavigationBar