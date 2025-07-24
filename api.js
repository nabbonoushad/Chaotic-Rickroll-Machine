//chaotic redundant api based rickroller
//main variables and -imports- require(s)
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//api's
app.get('/api/never-gonna-give-you-up', (req, res) => {
    let ytUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&persist_gl=0&gl='
    let counYTs = ['US', 'JP', 'UK', 'DE', 'FR', 'CN', 'AU', 'IN', 'RU']
    let url = ytUrl + counYTs[Math.floor(Math.random()*counYTs.length)]
    let urlForJSON = {'url':url}

    res.send(JSON.stringify(urlForJSON))
})
app.get('/api/never-gonna-give-you', (req, res) => {
    const apiUrl = 'http://localhost:3000/api/never-gonna-give-you-up';

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        res.send(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
})

app.get('/api/never-gonna-give', (req, res) => {
    const apiUrl = 'http://localhost:3000/api/never-gonna-give-you';

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        res.send(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
})

app.get('/api/never-gonna', (req, res) => {
    const apiUrl = 'http://localhost:3000/api/never-gonna-give';

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        res.send(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
})

app.get('/api/never', (req, res) => {
    const apiUrl = 'http://localhost:3000/api/never-gonna';

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        res.send(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
})
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`app listening on port ${port}, go to: http://localhost:${port}`)
})