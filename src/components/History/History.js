import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { getHistory } from '../../actions/history';

const History = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getHistory());
  },[dispatch])
  const orders = useSelector((state)=>state.history);
  console.log(orders);
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 text-2xl font-semibold">Order History</h2>
          <span className="text-gray-500  text-sm">All products</span>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Company
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Created at
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Stock at Order
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  orders && orders.map((order)=>{
                    return(
                      <tr key={order._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {order.drugname}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{order.drugcompany}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {
                              new Date(order.createdAt).toDateString()
                            }
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {order.stocks}
                          </p>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History