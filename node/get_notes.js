const client = require('./client')

client.list({}, (error, notes) => {
    if (!error) {
        console.log('successfully fetch List notes')
        console.log(notes)
    } else {
        console.error(error)
    }
})

client.sayHello({name: 'caca'}, (error, message) => {
    if (!error) {
        console.log('successfully fetch Message')
        console.log(message)
    } else {
        console.error(error)
    }
})
