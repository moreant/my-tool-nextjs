const Button = props => {

  let className = "px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md"
  switch (props.type) {
    case 'primary':
      className += " text-white bg-blue-600 hover:bg-blue-700"
      break
    default:
      className += " text-gray-900 bg-gray-50 border-gray-300 hover:bg-white"
  }

  if (props.className) {
    className = className + ' ' + props.className
  }

  return (
    <>
      <button onClick={props.onClick} className={className}>
        <div className="flex items-center justify-center">
          {props.children}
        </div>
      </button>
    </>
  )
}

export default Button