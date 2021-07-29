const Button = props => {

  let className = "flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md"
  switch (props.type) {
    case 'primary':
      className += " text-white bg-blue-600 hover:bg-blue-700"
      break
    default:
      className += " text-gray-900 border-gray-300 hover:bg-gray-50"
  }

  return (
    <>
      <button onClick={props.onClick} className={className + ' ' + props.className}>
        {props.children}
      </button>
    </>
  )
}

export default Button