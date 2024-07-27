import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

const Welcome = () => {
  return (
    <div className="container">
      <h1>Hello World Welcome to my Rails react app</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
    <React.StrictMode>
        <Welcome/>
    </React.StrictMode>
    
)
export default Welcome