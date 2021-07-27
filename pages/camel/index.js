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
      if (char.length > 0) {
        char[0] = char[0].toLocaleUpperCase()
        return char.join('')
      }
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
    console.log(list.length);
    setAreaRow(list.length === 1 ? defaultRows : list.length + 3)
    setResult({ canmel, snake })
  }, [inputText])

  return (
    <>
      <Head modul={`Camel2Snake`} />
      <Nav />
      <Container>
        <ToolHead name="驼峰、蛇形互转" desc="驼峰命名(userId), 蛇形命名(user_id)" />
        <div className="prose mb-5">
          <p>自动获取焦点，进入页面直接将文本粘贴即可。饱和式转换，无需选择转驼峰还是蛇形</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <label htmlFor="userInput" className="mb-1 block text-sm font-medium text-gray-700">输入文本</label>
            <textarea ref={inputRef} value={inputText} onChange={event => setInputText(event.target.value)} placeholder="请输入" name="userInput" id="userInput" rows={areaRows} className="w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md"></textarea>
          </div>
          <div>
            <label htmlFor="canmel" className="mb-1 block text-sm font-medium text-gray-700">驼峰命名</label>
            <textarea name="canmel" value={result.canmel} onChange={event => setResult({ ...result, canmel: event.target.value })} id="canmel" rows={areaRows} className="w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md"></textarea>
          </div>
          <div>
            <label htmlFor="snake" className="mb-1 block text-sm font-medium text-gray-700">蛇形命名</label>
            <textarea name="snake" value={result.snake} onChange={event => setResult({ ...result, snake: event.target.value })} id="snake" rows={areaRows} className="w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md"></textarea>
          </div>
        </div>
      </Container>
    </>
  )
}