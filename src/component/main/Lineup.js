import React from 'react';
import lineup from '../../scss/layout/lineup.module.scss'
import {Linediv} from '../../commonui/lineupui'

function Lineup() {
  return (
    <section>
      <div className={lineup.backimg}>
      <p className='titleText'>이달의 라인업</p>
      <Linediv>
      <iframe 
        width="1200" height="650" 
        src="https://www.youtube.com/embed/jiLTZoFJgOM?si=aP-4MmhXYgy40puo" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
      </Linediv>
    </div>
    </section>
  )
}

export default Lineup
