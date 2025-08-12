import open from 'open'
let date = new Date()
const arr = [
  //rickroll URLs
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=US",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=FR",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=JP",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=DE",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=IN",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=BR",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=CA",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=AU",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=MX",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=ZA",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=RU",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=CN",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=IT",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=ES",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=NL",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=SE",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=KR",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=AR",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=SA",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=NO",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=PL",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=TH",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=EG",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=TR",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=BE",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=NZ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=IE",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=CH",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=DK",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=FI",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl=PT",
];
let numOfDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
let rand = Math.floor(Math.random() * numOfDay)
let url = arr[rand]
let args = process.argv.slice(2);
let months = date.getMonth()
let days = date.getDate()
let years = date.getFullYear()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
if(args[0] == '-getTime'){
    open(url)
}else{
    console.log(`Hello! today is: ${months+1}/${days}/${years} and current time is: ${(hours<10) ? '0' + hours : hours}:${(minutes<10) ? '0' + minutes : minutes}:${(seconds<10) ? '0' + seconds : seconds}`)
}