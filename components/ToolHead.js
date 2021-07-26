const ToolHead = props => {
  return (
    <>
      <div className="pb-5 border-b border-gray-200 mb-5">
        <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-wider">{props.name}</h1>
        <p className="mt-1 text-lg text-gray-500">
          <span className="md:hidden">
            {props.mdDesc ? props.mdDesc : props.desc}
          </span>
          <span className="hidden md:inline">
            {props.desc}
          </span>
        </p>
      </div>
    </>
  )
}

export default ToolHead