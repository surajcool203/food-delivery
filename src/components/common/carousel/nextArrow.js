import React from 'react'

const NextArrow = (props) => {
    const {className, style ,onClick} = props;
  return (
    <div className={className}
    style={{
      ...style,
      background:"white",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"4px"
    }}
    onclick={onClick} 
    >
    </div>
  )
}

export default NextArrow;