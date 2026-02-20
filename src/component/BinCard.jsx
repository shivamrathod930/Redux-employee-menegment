import { useDispatch, useSelector } from "react-redux"
import { closeDeletepopup } from "../store/Features/popupSlice";
import { DeleteEmployes } from "../store/Thunk/FetchEmployes";

const BinCard = () => {

  const dispatch = useDispatch()
  const Delete = useSelector(state => state.popup.deletepopup);
  
  const DeletEmployee = async () => {
    await dispatch(DeleteEmployes(Delete))
    await dispatch(closeDeletepopup())
  }

  if (!Delete) return null;
  return (
    <div onClick={() => dispatch(closeDeletepopup())} className="fixed top-0 left-0 w-full h-full bg-black/50 z-20 flex items-center justify-center">

      <div onClick={(e) => e.stopPropagation()} className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Delete !</h2>
          <p>are you soure your are delete this Employee.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={DeletEmployee} >Delete</button>
            <button onClick={() => dispatch(closeDeletepopup())} className="btn btn-ghost" >cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BinCard
