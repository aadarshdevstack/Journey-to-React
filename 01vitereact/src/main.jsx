import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>
                new app!
            </h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a' ,
//     props:{
//         href: "https://google.com",
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }
const anotherUser="chai aur REACT"

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com' , target:"_blank" }  ,
    'click me to visit again' ,
    anotherUser
)


const anotherElement = (
    <a href="https://google.com" target="_blank">visit google</a>
)



createRoot(document.getElementById('root')).render(
 
    reactElement
  
)
