import { FC } from 'react'

const ProgressBar: FC<{ value?: number }> = ({ value }) => <div className={`bg-gray-200 w-full h-4 ${value ? '' : 'animate-pulse'}`}>{value != null && <div className="bg-[lime] h-4" style={{ width: `${value}%` }} />}</div>

export default ProgressBar
