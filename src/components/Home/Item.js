import React from 'react'
import {Link} from 'react-router-dom'
const Item = ({product}) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className='min-w-full h-64 min-h-full rounded hover:cursor-pointer hover:shadow-lg'>
        <img className='w-full h-[150px] object cover' src={product.image} alt="" />
        <p className='truncate text-sm hover:text-indigo-600'>{product.drugname}</p>
        <p className='text-xs text-slate-600'>{product.drugcompany}</p>
      </div>
    </Link>
  )
}

export default Item