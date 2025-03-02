import React from 'react'

 function Info(props) {
  return (
    <div className='info'>
        <div className='info-img'>
            <img src={props.img} alt="" />
            <p>{props.text}</p>
        </div>
        <h3>{props.value}</h3>
    </div>
  )
}
export default Info;