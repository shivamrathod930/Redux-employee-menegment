import { useDispatch, useSelector } from "react-redux"
import { getEmployes } from "../store/Thunk/FetchEmployes"


const ErrorCard = () => {

     const error = useSelector(state => state.employee.error)
     const dispatch = useDispatch()

     const TryAgain = () => {
          dispatch(getEmployes());
     }

     return (
          <>
               <div className="card w-96 bg-base-100 card-xs shadow-sm flex items-center justify-center m-3">
                    <div className="card w-96 bg-base-100 card-xl shadow-sm">
                         <div className="card-body justify-center">
                              <h1 className='text-xl '>{error}</h1>
                              <div className="justify-center card-actions">
                                   <button onClick={TryAgain} className="btn btn-primary">try again</button>
                         </div>
                    </div>
               </div>
          </div >
               </>
)}

export default ErrorCard
