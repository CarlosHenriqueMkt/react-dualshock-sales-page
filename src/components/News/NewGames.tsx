import React from 'react'
import * as C from '../News/styles'

function NewGames() {
  return (
    <C.NewGame>
      <article className='newsTitle'>
      <h2>PlayStation Exclusive Games</h2>
      <p>Meet some of the best games to test your new DualShock 4</p>
      </article>

<section className='flex'>

<figure>
      <div className="gallery">
    <a target="_blank" href="detroit.jpg">
      <img src=".\img\detroit.jpg" alt="Cinque Terre" width="600" height="400"></img>
    </a>
    <p className="paragraph">Add a description of the image here</p>
  </div>
</figure>


<figure>
  <div className="gallery">
    <a target="_blank" href="detroit.jpg">
      <img src=".\img\detroit.jpg" alt="Forest" width="600" height="400"></img>
    </a>
    <p className="paragraph">Add a description of the image here</p>
  </div>
</figure>

<figure>
  <div className="gallery">
    <a target="_blank" href="detroit.jpg">
      <img src=".\img\detroit.jpg" alt="Northern Lights" width="600" height="400"></img>
    </a>
    <p className="paragraph">Add a description of the image here</p>
  </div>
</figure>

<figure>
  <div className="gallery">
    <a target="_blank" href="detroit.jpg">
      <img src=".\img\detroit.jpg" alt="Northern Lights" width="600" height="400"></img>
    </a>
    <p className="paragraph">Add a description of the image here</p>
  </div>
</figure>
</section>
    </C.NewGame>
  )
}

export default NewGames