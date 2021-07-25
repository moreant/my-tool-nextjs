import Head from 'next/head'

const MyHead = props => {
  let title = '麦兔 - MyTool'
  if (props.title) {
    title = props.title
  } else if (props.modul) {
    title = props.modul + ' - MyTool'
  }


  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>

  )
}

export default MyHead