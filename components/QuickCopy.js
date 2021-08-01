import { CheckIcon, ClipboardIcon } from '@heroicons/react/outline'
import copy from 'copy-to-clipboard'
import { useState } from 'react'

const QuickCopy = props => {
  const [copyFlag, setCopyFlag] = useState('0')

  const copyText = () => {
    copy(props.value)
    setCopyFlag('1')
    setTimeout(() => {
      setCopyFlag('0')
    }, 1000);
  }

  return (
    <>
      <div className="relative group">
        <div onClick={copyText} className="absolute top-2 right-2 p-1 border bg-gray-50 border-gray-300 text-gray-400 rounded-md hidden  group-hover:block hover:bg-gray-100 hover:border-gray-400 hover:text-gray-500">
          {
            copyFlag === '0'
              ? <ClipboardIcon className="w-5 h-5" />
              : <CheckIcon className="w-5 h-5 text-green-400" />
          }
        </div>
        {props.children}
      </div>
    </>
  )
}

export default QuickCopy