import React,{useEffect} from 'react'
import Item from './Item'
import {useDispatch,useSelector} from 'react-redux';
import { getProducts } from '../../actions/products';


const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
  const products = useSelector((state)=>state.products);
  return (
    <div className='container px-12 mx-auto'>
        <div className=" grid overflow-hidden grid-cols-5 grid-rows-none gap-2">
            {
              products.map((product)=>{
                return(
                  <Item key={product._id} product={product}/>
                )
              })
            }
        </div>
    </div>
  )
}

export default Home