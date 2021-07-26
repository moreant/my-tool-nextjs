import { useState, useCallback } from 'react'

import Container from '../../components/Container'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import ToolHead from '../../components/ToolHead'


function snake2Camel (s) {
  var sList = s.split('_')
  return sList.map((item, index) => {
    if (index > 0) {
      var char = [...item]
      char[0] = char[0].toLocaleUpperCase()
      return char.join('')
    } else {
      return item
    }

  }).join('')
}

function camel2Snake (s) {
  // by stackoverflow epost
  s = s.replace(/(.)([A-Z][a-z]+)/, "$1_$2")
  return s.replace(/([a-z0-9])([A-Z])/, "$1_$2").toLocaleLowerCase()
}



export default function Camel () {

  const [count, setCount] = useState('')

  const inputRef = useCallback(node => {
    if (node !== null) {
      node.focus()
      console.log(node)
    }
  })



  return (
    <>
      <Head modul={`Camel2Snake`} />
      <Nav />
      <Container>
        <ToolHead name="驼峰命名、蛇形命名互转" desc="驼峰命名(userId), 蛇形命名(user_id)" />
        <div className="mt-12 mx-12 grid grid-cols-3 gap-12">

          <div>
            <textarea ref={inputRef} name="userInput" id="userInput" rows="10" className="w-full border border-gray-200"></textarea>
          </div>
          <div>
            <textarea name="canmel" id="canmel" rows="10" className="w-full border border-gray-200"></textarea>
          </div>
          <div>
            <textarea name="snake" id="snake" rows="10" className="w-full border border-gray-200"></textarea>
          </div>
        </div>
      </Container>
    </>
  )
}