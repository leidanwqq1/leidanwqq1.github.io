import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const blockchainEngineerArray = [
    'B',
    'l',
    'o',
    'c',
    'k',
    'c',
    'h',
    'a',
    'i',
    'n',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]
  const webDeveloperArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span> </span>
            <span className={`${letterClass} _14`}>a</span>
            <span> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={blockchainEngineerArray}
              idx={15}
            />
            <br />
            <span className={`${letterClass} _15`}>and a</span>
            <span> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={webDeveloperArray}
              idx={22}
            />
          </h1>
          <h2>
            Fullstack Developer For DeFi - Solidity,React,JS
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
