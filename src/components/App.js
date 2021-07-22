// create your App component here
import React , { useState, useEffect } from 'react'

function App() {
    const [image, setImage] = useState(null)
  
useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(r => r.json())
      .then(data => setImage(data.image))
}, [])

if (!image) {
    return <p>Loading...</p>
}

return (
  <div>
      <p>heres a dog</p>
    <img src={image} alt="A Random Dog" />
  </div>
);
}

export default App