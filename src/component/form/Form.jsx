import { useDispatch, useSelector } from "react-redux"
import { closeEmployeepopup } from "../../store/Features/popupSlice";
import { useEffect, useState } from "react";
import { getEmployes, postEmployes, updateEmployes } from "../../store/Thunk/FetchEmployes";


const Form = () => {
     const dispatch = useDispatch()
     const popup = useSelector(state => state.popup.employeepopup)
     const [formDetails, setformDetails] = useState({
          profileUrl: '',
          name: '',
          email: '',
          bio: '',
          highlight: false
     })

     const handalInputchange = (e) => {
          const { name, value } = e.target;
          setformDetails({
               ...formDetails,
               [name]: value,
          })
     }

     const Submitdata = async () => {
          if (popup.id) {
               await dispatch(updateEmployes({
                    id: popup.id,
                    details: formDetails
               }));

          } else {
               await dispatch(postEmployes(formDetails));
          }
          await dispatch(closeEmployeepopup());
     }

     useEffect(() => {
          if (!popup) {
               setformDetails({
                    profileUrl: '',
                    name: '',
                    email: '',
                    bio: '',
                    highlight: false
               });
          } else if (popup.id) {
               setformDetails({
                    profileUrl: popup.profileUrl,
                    name: popup.name,
                    email: popup.email,
                    bio: popup.bio,
                    highlight: popup.highlight,
               });
          }
     }, [popup])


     if (!popup) return null;
     return (
          <div onClick={() => dispatch(closeEmployeepopup())} className="fixed top-0 left-0 w-full h-full bg-black/50 z-20 flex items-center justify-center">
               <form onClick={(e) => e.stopPropagation()} onSubmit={(e) => { e.preventDefault(); }} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="fieldset">
                         <span className="label">profile Url</span>
                         <input name='profileUrl' onChange={handalInputchange} value={formDetails.profileUrl} type="text" className="input validator" placeholder="profileUrl" required />
                         <span className="validator-hint hidden">Required</span>
                    </label>

                    <fieldset className="fieldset">
                         <label className="label">Name</label>
                         <input name='name' onChange={handalInputchange} value={formDetails.name} type="text" className="input validator" placeholder="Name" required />
                         <p className="validator-hint hidden">Required</p>
                    </fieldset>

                    <label className="fieldset">
                         <span className="label">Email</span>
                         <input name='email' onChange={handalInputchange} value={formDetails.email} type="email" className="input validator" placeholder="Email" required />
                         <span className="validator-hint hidden">Required</span>
                    </label>

                    <label className="fieldset">
                         <span className="label">Employe Boi</span>
                         <textarea name='bio' onChange={handalInputchange} value={formDetails.bio} className="textarea" placeholder="Bio" required></textarea>
                         <span className="validator-hint hidden">Required</span>
                    </label>

                    <button onClick={Submitdata} className="btn btn-primary mt-4" type="submit">
                         submit
                    </button>
               </form>

          </div>
     )
}

export default Form
