const fs = require('fs')

const jsonStr = fs.readFileSync('stylish-04-28-2018.json')
const json = JSON.parse(jsonStr)

const updated = json.map(j => {
    const id = j.id
    delete j.id

    return { 
        id,
        json: j
    }
})

fs.writeFileSync('stylish.json', JSON.stringify({ data: updated }))
