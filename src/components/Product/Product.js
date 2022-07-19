import React,{useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProduct,buyProduct } from '../../actions/product';
import { useSelector } from 'react-redux';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProduct(id));
  },[dispatch])

  const product = useSelector((state)=>state.product);
  console.log(product)
  return (
    <>
      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div>
            <h1 className="text-2xl font-bold lg:text-3xl">
              {product.drugname}
            </h1>
          
            <p className="mt-1 text-sm text-gray-500">
              SKU:{product.drugcode}
            </p>
          </div>

          <div className="grid gap-8 lg:items-start lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <img
                  alt=""
                  src={product.image}
                  className="w-full rounded-xl h-72 lg:h-[540px] object-cover"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 text-white px-3 py-1.5 inline-flex items-center">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>

                  <span className="text-xs ml-1.5">
                    Hover to zoom
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:top-0 lg:sticky">
              <form className="space-y-4 lg:pt-8">
                <h1 className="text-xl text-slate-600 font-bold lg:text-2xl">
                  {product.drugcompany}
                </h1>

                <div>
                  <p className="text-xl font-bold">
                    Available Stock : <span className='text-slate-600'>{product.stocks}</span>
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">
                    ${product.price}
                  </p>
                </div>

                <button
                  type="button"
                  className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-red-700 rounded"
                  onClick={()=>dispatch(buyProduct(product._id))}
                >
                  Add to cart
                </button>

                <button
                  type="button"
                  className="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-100 border border-gray-300 rounded"
                >
                  Notify when on sale
                </button>
              </form>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ad labore nostrum, a explicabo iste est dolorem deserunt id ullam magni accusamus saepe, nulla sed sint reiciendis, aperiam cumque officiis!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product