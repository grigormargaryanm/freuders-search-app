import { FC, useEffect } from 'react'
import { getSpecialists, getTopics } from '../../redux/specialists/hook'
import { useAppDispatch, useAppSelector } from '../../hooks'
import FilterSpecialists from './components/FilterSpecialists/FilterSpecialists'

const Specialists: FC = () => {
  const dispatch = useAppDispatch()
  const { specialists, topics } = useAppSelector((state) => state.specialists)

  useEffect(() => {
    dispatch(getSpecialists({ limit: 12, offset: 0 }))
    dispatch(getTopics())
  }, [])
  console.log(specialists, topics)

  return <FilterSpecialists />
}

export default Specialists
