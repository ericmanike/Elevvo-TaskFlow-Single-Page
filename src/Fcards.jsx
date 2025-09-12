import React from 'react';

function Fcards(props) {
  return (
    <div className='min-w-[350px] min-h-[200px] bg-[#0d0d27] rounded-2xl p-3 text-2xl text-[gold] hover:border-amber-300  cursor-pointer hover:border-1 hover:translate-y-[-5] transition-all duration-200' style={{boxShadow:"2px 2px 10px indigo"}}>
      {props.title ? <p className='text-2xl mb-2 text-[gold] flex flex-row justify-around'>{props.title}  <img src={props.image}  /></p> : null}
        <p className='text-[18px] text-white text-left'>{props.description}</p>
    </div>
  );
};

export default Fcards;