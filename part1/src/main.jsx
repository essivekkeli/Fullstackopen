/*import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App counter={counter} />
)

const refresh = () => {
  root.render(<App counter={counter} />)
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)*/

import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)