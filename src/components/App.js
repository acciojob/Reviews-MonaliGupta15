{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React from 'react'
import Reviews from './Reviews'

const App = () => {
  return (
    <div>
      <section>
         <h1 id="review-heading">Our Reviews</h1>

          <main>
            <Reviews/>
          </main>
      </section></div>
  )
}

export default App