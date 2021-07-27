import { useState, useEffect, useCallback } from 'react'

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

  const defaultRows = 10
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState({ canmel: '', snake: '' })
  const [areaRows, setAreaRow] = useState(defaultRows)

  // 自动焦点
  const inputRef = useCallback(node => {
    if (node !== null) {
      node.focus()
    }
  })

  useEffect(() => {
    let list = inputText.split("\n")
    let canmel = list.map(item => snake2Camel(item)).join('\n')
    let snake = list.map(item => camel2Snake(item)).join('\n')
    console.log(list.length );
    setAreaRow(list.length === 1 ? defaultRows: list.length + 3)
    setResult({ canmel, snake })
  }, [inputText])

  return (
    <>
      <Head modul={`Camel2Snake`} />
      <Nav />
      <Container>
        <ToolHead name="驼峰命名、蛇形命名互转" desc="驼峰命名(userId), 蛇形命名(user_id)" />
        <div className="grid grid-cols-3 gap-4">
          <div>
            <textarea ref={inputRef} value={inputText} onChange={event => setInputText(event.target.value)} name="userInput" id="userInput" rows={areaRows} className="w-full border border-gray-200"></textarea>
          </div>
          <div>
            <textarea name="canmel" value={result.canmel} onChange={event => setResult({ ...result, canmel: event.target.value })} id="canmel" rows={areaRows} className="w-full border border-gray-200"></textarea>
          </div>
          <div>
            <textarea name="snake" value={result.snake} onChange={event => setResult({ ...result, snake: event.target.value })} id="snake" rows={areaRows} className="w-full border border-gray-200"></textarea>
          </div>
        </div>
      </Container>
    </>
  )
}