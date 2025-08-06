//index.js
import never from './never.js'
import gonna from './gonna.js'
import give from './give.js'
import you from './you.js'
import up from './up.js'
import open from 'open'
let ytUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl='
let counYTs = ['US', 'JP', 'UK', 'DE', 'FR', 'CN', 'AU', 'IN', 'RU']
let url = ytUrl + counYTs[Math.floor(Math.random()*counYTs.length)]
let str = never() + gonna() + give() + you() + up()
str = str.toString()
console.log(str)
open(url)