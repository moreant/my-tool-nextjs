import { useEffect, useCallback } from 'react'
import QuickCopy from "./QuickCopy"

const QuickCopyTextarea = props => {

  // 自动焦点 优化首次打开
  const inputRef = useCallback(node => {

    if (node !== null) {
      if (props.autoFocus && props.value === '') {
        node.focus()
      }
      if (props.autoRow) {
        node.style.overflow = 'hidden'
        node.style.height = '20rem'
        node.style.height = node.scrollHeight + 24 + 'px'
      }
    }
  })

  // useEffect(() => {
  //   const subscription = props.value.subscribe();
  //   return () => {
  //     subscription.unsubscribe();
  //   }
  // }, [props.value])

  return (
    <>
      <QuickCopy value={props.value}>
        <textarea ref={inputRef} className="w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md" {...props}></textarea>
      </QuickCopy>
    </>
  )
}

export default QuickCopyTextarea