import { ClipboardIcon } from '@heroicons/react/outline'
import { useState, useEffect, useCallback } from 'react'

import Container from '../../components/Container'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import ColumnLabel from '../../components/ColumnLabel'
import { ToolTitle, ToolDesc } from '../../components/ToolHead'

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
    setAreaRow(list.length < 10 ? defaultRows : list.length + 2)
    setResult({ canmel, snake })
  }, [inputText])

  return (
    <>
      <Head modul={`Camel2Snake`} />
      <Nav />
      <Container>
        <ToolTitle title="驼峰、蛇形互转" subtitle="驼峰命名形如: userId; 蛇形命名形如: user_id。 已对连续大写优化( xmlHTTPReq => xml_http_req )。" mdSubtitle="驼峰命名(userId), 蛇形命名(user_id)。" />
        <ToolDesc text="自动获取焦点，进入页面直接将文本粘贴即可。饱和式转换，无需选择转驼峰还是蛇形。" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <ColumnLabel htmlFor="userInput" text="输入文本" />
            <div className="relative group">
              <textarea ref={inputRef} value={inputText} onChange={event => setInputText(event.target.value)} placeholder="请输入" name="userInput" id="userInput" rows={areaRows} className="w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md"></textarea>
              <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100">
                <ClipboardIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <ColumnLabel htmlFor="canmel" text="驼峰命名" />
            <textarea name="canmel" value={result.canmel} onChange={event => setResult({ ...result, canmel: event.target.value })} id="canmel" rows={areaRows} className="w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md"></textarea>
          </div>
          <div>
            <ColumnLabel htmlFor="snake" text="蛇形命名" />
            <textarea name="snake" value={result.snake} onChange={event => setResult({ ...result, snake: event.target.value })} id="snake" rows={areaRows} className="w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md"></textarea>
          </div>
        </div>
      </Container>
    </>
  )
}