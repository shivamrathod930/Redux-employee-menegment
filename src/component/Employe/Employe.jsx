import { useSelector } from 'react-redux'
import Form from '../form/Form'
import Error from '../ErrorCard'
import EmployesCard from './EmployeCard'
import Loader from '../Loader'
import BinCard from '../BinCard'

const Employe = () => {

  const loading = useSelector(state => state.employee.loading);
  const error = useSelector(state => state.employee.error);

  if (loading) return (
    <div className='flex flex-col gap-4'>
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
    </div>)
  if (error) return <Error />
  return (
    <div className='flex flex-col '>
       <EmployesCard  /> 
    </div>
  )
}

export default Employe
