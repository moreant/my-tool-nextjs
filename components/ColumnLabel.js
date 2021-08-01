
const ColumnLabel = props => {
  return (
    <>
      <label htmlFor={props.htmlFor} className="mb-2 block text-xl font-semibold text-gray-700 tracking-wider">{props.text}</label>
    </>
  )
}

export default ColumnLabel