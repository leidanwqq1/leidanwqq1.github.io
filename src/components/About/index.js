import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faCode,
  faUniversity
} from '@fortawesome/free-solid-svg-icons'
import Background from '../../assets/images/background.png'

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

          <p align="LEFT" style={{fontSize:"16px", fontWeight:"Bold", margin:"18px 0 -6px 0"}}>
          <FontAwesomeIcon icon={faBriefcase} />&nbsp;&nbsp;Experience
          </p>
          <p style={{fontSize:"14px", lineHeight:"22px"}}>
            Superswap(Decentralized Exchange) - Full-stack Blockchain Developer <br/>
            <div>
              <span>Link:&nbsp;</span>
              <a className='link-font' target="_blank" rel="noreferrer" href="https://getsuperswap.com">
                getsuperswap.com
              </a>
            </div>
            Main contents:<br/>
            <ul style={{marginTop:"0px"}}>
              <li>Implement smart contracts: swap, add liquidity and remove liquidity.</li>
              <li>Test the smart contracts thoroughly using the Hardhat.</li>
              <li>Design a user-friendly interface using React.</li>
              <li>Set up a continuous integration and continuous deployment pipeline.</li>
              <li>Monitor and maintain the Superswap platform over time.</li>
            </ul>
          </p>
                    
          <p align="LEFT" style={{fontSize:"16px", fontWeight:"Bold", margin:"18px 0 -6px 0"}}>
          <FontAwesomeIcon icon={faCode} />&nbsp;&nbsp;Languages & Frameworks
          </p>
          <p style={{fontSize:"14px", lineHeight:"22px"}}>
          Web: Javascript, NodeJS, React, HTML, CSS <br/>
          Blockchain: Solidity, Openzeppelin, Remix, Hardhat & Ethers <br/>
          Human: English & Chinese <br/>
          </p>
          
          <p align="LEFT" style={{fontSize:"16px", fontWeight:"Bold", margin:"18px 0 -6px 0"}}>
          <FontAwesomeIcon icon={faUniversity} />&nbsp;&nbsp;Education
          </p>
          <p style={{fontSize:"14px", lineHeight:"22px"}}>
          Master of Engineering - Tongji University, China <br/>
          Bachelor of Engineering - Hunan University, China
          </p>

        </div>

        <div className='background-cont'>
          <img className="background" src={Background} alt="Background" />
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
