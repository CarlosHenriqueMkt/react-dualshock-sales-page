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
    <a target="_blank" rel="noreferrer" href="https://blog.playstation.com/2022/06/01/playstation-plus-monthly-games-for-june-god-of-war-naruto-to-boruto-shinobi-striker-nickelodeon-all-star-brawl">
      <img src=".\img\PSPlus-Monthly-Games.webp" alt="PlayStation Plus Monthly Games for June" width="600" height="400"></img>
    </a>
    <p className="paragraph">PlayStation Plus Monthly Games for June:  <br />  God of War, <br /> Naruto to Boruto: Shinobi Striker, <br />  Nickelodeon All-Star Brawl</p>
  </div>
</figure>


<figure>
  <div className="gallery">
    <a target="_blank" rel='noreferrer' href="https://blog.playstation.com/2022/05/27/state-of-play-next-thursday-brings-new-game-reveals-sneak-peeks-and-updates/">
      <img src=".\img\state-of-play-2022.webp" alt="State of Play brings new game reveals" width="600" height="400"></img>
    </a>
    <p className="paragraph">State of Play brings new game reveals, sneak peeks, and updates this Thursday (02/06)</p>
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

<figure>
  <div className="gallery">
    <a target="_blank" href="detroit.jpg">
      <img src=".\img\detroit.jpg" alt="Northern Lights" width="600" height="400"></img>
    </a>
    <p className="paragraph">Sou o título da notícia 4</p>
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