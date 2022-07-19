import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { updateUser } from '../../actions/auth';

const Profile = () => {
  const [user, setUserData] = useState(JSON.parse(localStorage.getItem('profile')).result);
  const dispatch = useDispatch();
  const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(updateUser(user));
    clear();
    
  }
  const clear = () =>{
    setUserData(JSON.parse(localStorage.getItem('profile')).result)
  }
  return (
    <>
    <div className="min-h-screen pt-2 font-mono my-16">
        <div className="container mx-auto">
            <div className="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 className="text-2xl text-gray-900">Account Setting</h2>
                <form className="mt-6 border-t border-gray-400 pt-4" onSubmit={handleSubmit}>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full md:w-full px-3 mb-6'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-text-1'>email address</label>
                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' onChange={(e)=>setUserData({ ...user, email:e.target.value})} type='text' placeholder={user.email}/>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6 '>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>password</label>
                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' onChange={(e)=>setUserData({ ...user, password:e.target.value})} type='password'/>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Gender</label>
                            <div className="flex-shrink w-full inline-block relative">
                                <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded" onChange={(e)=>setUserData({ ...user, gender:e.target.value})} defaultValue={user.gender}>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                                <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-text-1'>Credit Card</label>
                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' value={user.creditcard} onChange={(e)=>setUserData({ ...user, creditcard:e.target.value})}  required/>
                        </div>
                        {
                          user.creditcard==="" && (
                            <div className="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
                                <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                <div>
                                    <span className="font-medium">Please add a credit card</span>
                                </div>
                            </div>
                          )
                        }
                        <div className="flex items-center justify-between mt-4">
                            <div className='w-full md:w-1/2 px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.firstName} onChange={(e)=>setUserData({ ...user, creditcard:e.target.value})}/>
                            </div>
                            <div className='w-full md:w-1/2 px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  placeholder={user.lastName} onChange={(e)=>setUserData({ ...user, creditcard:e.target.value})}/>
                            </div>
                        </div>
                        
                        <div className='w-full md:w-full px-3 mb-6'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Phone Number</label>
                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='tel'  placeholder={user.phone} onChange={(e)=>setUserData({ ...user, creditcard:e.target.value})}/>
                        </div>
                        <div className="flex justify-end">
                            <button className="appearance-none bg-indigo-600 text-white px-2 py-1 shadow-sm border rounded-md mr-3" type="submit">save changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile