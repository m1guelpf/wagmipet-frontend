import { FC } from 'react'

const ProgressBar: FC<{ value?: number }> = ({ value }) => <div className={`bg-gray-200 dark:bg-gray-800 w-full h-4 ${value != null ? '' : 'animate-pulse'}`}>{value != null && <div className="h-4" style={{ width: `${100 - value}%`, backgroundColor: value < 50 ? 'lime' : value < 90 ? 'yellow' : 'red' }} />}</div>

export default ProgressBar
