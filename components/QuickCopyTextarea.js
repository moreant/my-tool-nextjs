import QuickCopy from "./QuickCopy"

const QuickCopyTextarea = props => {
  return (
    <>
      <QuickCopy value={props.value}>
        <textarea className="w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md" {...props} ></textarea>
      </QuickCopy>
    </>
  )
}

export default QuickCopyTextarea