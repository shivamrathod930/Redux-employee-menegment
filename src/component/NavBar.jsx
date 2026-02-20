import { useDispatch } from 'react-redux';
import Layout from './Layout'
import { HiPlus } from "react-icons/hi";
import { openEmployeepopup } from '../store/Features/popupSlice';

const NavBar = () => {


  const dispatch = useDispatch()



  return (
    <>
      <div className="w-full bg-base-200 sticky top-0 z-10">
        <Layout>
          <div className="navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
              <a className="btn btn-ghost text-xl">employ menegment </a>
            </div>
            <div className="navbar-end gap-4">
              <button className="btn btn-ghost btn-circle">
                <HiPlus size={25} onClick={()=>dispatch(openEmployeepopup())} />
              </button>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                </div>
              </button>
            </div>
          </div>
        </Layout>
      </div>

    </>
  )
}

export default NavBar
