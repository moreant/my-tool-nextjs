import { useState } from 'react';
import copy from 'copy-to-clipboard';
import { DuplicateIcon, CheckIcon } from '@heroicons/react/outline';
import Button from './Button'


const CopyButton = props => {
  const [copyState, setCopyState] = useState(0)


  const onCopy = () => {
    if (copy(props.text)) {
      setCopyState(1)
      setTimeout(() => {
        setCopyState(0)
      }, 1000);
    }
  }

  let actionTextColor = 'text-green-400'
  if (props.type === 'primary') {
    actionTextColor = 'text-white'
  }

  return (
    <>
      <Button onClick={onCopy} type={props.type} className={copyState === 1 ? "ml-2 " + actionTextColor : "ml-2"}>
        {
          copyState === 1
            ? <><CheckIcon className="h-4 w-4" /></>
            : <><DuplicateIcon className="h-4 w-4" /></>
        }

      </Button>
    </>
  )
}

export default CopyButton