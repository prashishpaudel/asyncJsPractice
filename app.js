//1.Callback

// const getTodos = (callback) =>{
//     const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange',()=>{
//         if (request.readyState == 4 && request.status == 200){
//             const data = JSON.parse(request.responseText)
//             callback(undefined, data)
//         }
//         else if(request.readyState ===4){
//             callback('could not fetch data', undefined)
//         }
//     })
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()
// }

// getTodos((err, data)=>{
//     console.log('callback fired')
//     if (err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }

// })

// const getSomething = () =>{
//     return new Promise((resolve, reject)=>{
//         // resolve('some data')
//         reject('some error')
//     })
// }

// getSomething().then((data) =>{
//     console.log(data)
// },(error)=>{
//     console.log(error)

// })
// getSomething().then((data) =>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


//2.Promise


// const getTodos = (resource) =>{
//     return new Promise((resolve, reject)=>{

//         const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange',()=>{
//             if (request.readyState == 4 && request.status == 200){
//                 const data = JSON.parse(request.responseText)
//                 resolve(data)
                
//             }
//             else if(request.readyState ===4){
//                 reject('error getting resource')
                
//             }
//         })
//         // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//         request.open('GET', resource)
//         request.send()

//     })

// }
// getTodos('https://jsonplaceholder.typicode.com/todos/1').then((data)=>{
//     console.log('Promise 1 resolved', data)
//     return getTodos('https://jsonplaceholder.typicode.com/todos/2')

// }).then(data=>{
//     console.log('Promise 2 resolved', data)
//     return getTodos('https://jsonplaceholder.typicode.com/todos/3')
// }).then((data)=>{
//     console.log('Promise 3 resolved', data)
// }).catch((err)=>{
//     console.log('Promise rejected', err)

// })

//3.fetch

// import fetch from "node-fetch"
// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
//     // console.log('resolved', response)
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log('rejected',err)

// })


//4.async & await
import fetch from "node-fetch"
const getTodos = async() =>{
    const response = await fetch('https://jsonplaceholder.typicodeo.com/todos/1')
    if (response.status !==200){
        throw new Error('cannot fetch the data')
    }
    const data = await response.json()
    return data

}
getTodos().then((data)=>{
    console.log('resolved',data)
}).catch((err)=>{
    console.log('rejected',err.message)
})








