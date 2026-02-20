import { HiPencilSquare } from "react-icons/hi2";
import { ImBin } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { openDeletepopup, openEmployeepopup } from "../../store/Features/popupSlice";
import { updateEmployes } from "../../store/Thunk/FetchEmployes";

const EmployesCard = () => {


     const employees = useSelector(state => state.employee.employees);

     return (
          <>
               <ul className="list bg-base-100 rounded-box shadow-md w-full">
                    {employees.map((Details) => (<Card key={Details.id} Details={Details} />))}
               </ul>
          </>
     )
}

const Card = ({ Details }) => {

     const dispatch = useDispatch()

     const handalHighlight = (Details) => {
          dispatch(updateEmployes({
               id: Details.id,
               details: {
                    ...Details,
                    highlight: !Details.highlight,
               }
          }))
     }

     return (
          <>
               <li className="list-row">
                    <div>
                         <img className="size-10 rounded-box" src={Details.profileUrl} />
                    </div>
                    <div>
                         <div>{Details.name}</div>
                         <div className="text-xs uppercase font-semibold opacity-60">{Details.email}</div>
                    </div>
                    <p className="list-col-wrap text-xs">{Details.bio}
                    </p>

                    <button onClick={() => dispatch(openEmployeepopup(Details))} className="btn btn-square btn-ghost">
                         <HiPencilSquare className="text-xl" />
                    </button>

                    <button onClick={() => dispatch(openDeletepopup(Details.id))} className="btn btn-square btn-ghost">
                         <ImBin className="text-xl" />
                    </button>

                    <button onClick={() => handalHighlight(Details)} className="btn btn-square btn-ghost">
                         <svg className="size-[1.3em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill={Details.highlight ? 'currentColor' : 'none'} stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
               </li>
               <hr />
          </>
     )
}

export default EmployesCard
