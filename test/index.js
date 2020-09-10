import * as babel from '@babel/core'
import plugin from '../src';


const code = `if([1,2,3].includes(2)) console.log('has element')`



const result = babel.transform(code, {
  plugins: [plugin]
})

console.log(result.code)