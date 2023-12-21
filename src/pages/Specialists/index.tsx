import { FC } from 'react'
import { useAppSelector } from '../../hooks'

const Specialists: FC = () => {
  const { specialists } = useAppSelector((state) => state.specialists)

  return <div>Specialists page</div>
}

export default Specialists
