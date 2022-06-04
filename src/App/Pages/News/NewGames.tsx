import { Divider } from '@mui/material'
import React from 'react'
import * as C from '../News/styles'

function NewGames() {
  return (
    <C.NewGame>
      <Divider><article className='newsTitle'><h2>Breaking News</h2></article></Divider>

<section className='flex' id="news">

<figure>
  <div className="gallery">
    <a target="_blank" 
    rel="noreferrer" 
    href="https://blog.playstation.com/2022/06/02/resident-evil-4-comes-to-ps5-next-year-first-gameplay-and-story-details/">
      <img src=".\img\re4-remake.webp" 
      alt="Resident Evil 4: Remake" 
      width="600" 
      height="400">
      </img>
    </a>
    <p className="paragraph">Resident Evil 4 comes to PS5 next year: first gameplay and story details</p>
  </div>
</figure>

<figure>
  <div className="gallery">
    <a target="_blank" 
    rel='noreferrer' 
    href="https://blog.playstation.com/2022/06/02/street-fighter-6-aims-to-redefine-the-fighting-genre-in-2023/">
      <img 
      src=".\img\street-fighter-6.webp" 
      alt="Street Fighter 6" 
      width="600" 
      height="400">
      </img>
    </a>
    <p className="paragraph">Street Fighter 6 aims to redefine the fighting genre in 2023</p>
  </div>
</figure>

<figure>
  <div className="gallery">
    <a target="_blank" 
    rel='noreferrer' 
    href="https://blog.playstation.com/2022/06/02/the-callisto-protocols-sci-fi-horror-gameplay-revealed/">
      <img src=".\img\The-Callisto-Protocol.webp" 
      alt="The Callisto Protocol’s" 
      width="600" 
      height="400">
      </img>
    </a>
    <p className="paragraph">The Callisto Protocol’s sci-fi horror gameplay revealed</p>
  </div>
</figure>

<figure>
  <div className="gallery">
    <a target="_blank" 
    rel="noreferrer" 
    href="https://blog.playstation.com/2022/06/01/playstation-plus-monthly-games-for-june-god-of-war-naruto-to-boruto-shinobi-striker-nickelodeon-all-star-brawl">
      <img 
      src=".\img\PSPlus-Monthly-Games.webp" 
      alt="PlayStation Plus Monthly Games for June" 
      width="600" 
      height="400">
      </img>
    </a>
    <p className="paragraph">PlayStation Plus Monthly Games for June: God of War, Naruto to Boruto: Shinobi Striker, Nickelodeon All-Star Brawl</p>
  </div>
</figure>


<figure>
  <div className="gallery">
    <a target="_blank" 
    rel='noreferrer' 
    href="https://blog.playstation.com/2022/05/27/state-of-play-next-thursday-brings-new-game-reveals-sneak-peeks-and-updates/">
      <img 
      src=".\img\state-of-play-2022.webp" 
      alt="State of Play brings new game reveals" 
      width="600" 
      height="400">
      </img>
    </a>
    <p className="paragraph">State of Play brings new game reveals, sneak peeks, and updates this Thursday (02/06).</p>
  </div>
</figure>

<figure>
  <div className="gallery">
    <a target="_blank" 
    rel="noreferrer" 
    href="https://blog.playstation.com/2022/06/01/celebrating-double-dragons-35th-anniversary/">
      <img 
      src=".\img\development-stories.webp" 
      alt="from collaborative two-player action to chaotic friendly fire" 
      width="600" 
      height="400">
      </img>
    </a>
    <p className="paragraph">Creators share development stories on the genre-defining, co-op side-scrolling series, from collaborative two-player action to chaotic friendly fire.</p>
  </div>
</figure>
</section>
    </C.NewGame>
  )
}

export default NewGames