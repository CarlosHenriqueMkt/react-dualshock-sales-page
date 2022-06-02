import React from 'react'
import * as C from '../News/styles'

function NewGames() {
  return (
    <C.NewGame>
      <article className='newsTitle'>
      <h2>Breaking News</h2>
      <p>Know about all the hotest news of PlayStation releases</p>
      </article>

<section className='flex' id="news">

<figure>
      <div className="gallery">
    <a target="_blank" href="detroit.jpg">
      <img src=".\img\detroit.jpg" alt="Cinque Terre" width="600" height="400"></img>
    </a>
    <p className="paragraph">Sou o título da notícia 1</p>
  </div>
</figure>


<figure>
  <div className="gallery">
    <a target="_blank" href="detroit.jpg">
      <img src=".\img\detroit.jpg" alt="Forest" width="600" height="400"></img>
    </a>
    <p className="paragraph">Sou o título da notícia 2</p>
  </div>
</figure>

<figure>
  <div className="gallery">
    <a target="_blank" href="detroit.jpg">
      <img src=".\img\detroit.jpg" alt="Northern Lights" width="600" height="400"></img>
    </a>
    <p className="paragraph">Sou o título da notícia 3</p>
  </div>
</figure>

<figure>
  <div className="gallery">
    <a target="_blank" href="detroit.jpg">
      <img src=".\img\detroit.jpg" alt="Northern Lights" width="600" height="400"></img>
    </a>
    <p className="paragraph">Sou o título da notícia 4</p>
  </div>
</figure>
</section>
    </C.NewGame>
  )
}

export default NewGames