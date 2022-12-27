import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Experience <hr/>
          2022.01 - now | China <hr/>
          Superswap(Decentralized Exchange) - Full-stack Blockchain Developer <hr/>
          Link: getsuperswap.com <hr/>
          Github: https://github.com/leidanwqq1/Superswap <hr/>
                    
          <hr/>
          Languages & Frameworks<hr/>
          Web: Javascript, NodeJS, React, HTML, CSS <hr/>
          Blockchain: Solidity, Openzeppelin, Remix, Hardhat & Ethers<hr/>
          Human: English & Chinese<hr/>

          <hr/>
          Education<hr/>
          Master of Engineering - Tongji University, China<hr/>
          Bachelor of Engineering - Tongji University, China<hr/>

          </p>
          <p align="LEFT">
            
          </p>
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
