const Container = props => {
  return(
    <>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {props.children}
      </div>
    </>
    
  )
}

export default Container