import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const reactElement = {
//     type:'a',
//     props: {
//        href: 'https://google.com',
//        target: '_blank'
//     },
//     children: "Click me to visit google"

// } // this is a element made for custom react and maybe it doesn't follow conventions
// Now we will make another object.

const anotherElement = (
    <a href = 'https://google.com'>Visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Visit Google'
)

createRoot(document.getElementById('root')).render(
  
    <App />
    //above sentence can also be executed in simple form like MyApp()
)
