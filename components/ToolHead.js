const ToolTitle = props => {
  return (
    <>
      <div className="pb-5 border-b border-gray-200 mb-5">
        <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-wider">{props.title}</h1>
        <p className="mt-1 text-lg text-gray-500">
          <span className="md:hidden">
            {props.mdSubtitle ? props.mdSubtitle : props.subtitle}
          </span>
          <span className="hidden md:inline">
            {props.subtitle}
          </span>
        </p>
      </div>
    </>
  )
}

const ToolDesc = props => {

  return (
    <>
      <div className="prose mb-5">
        {props.children
          ? props.children
          : <p>{props.text}</p>
        }
      </div>
    </>
  )
}

export { ToolTitle, ToolDesc }