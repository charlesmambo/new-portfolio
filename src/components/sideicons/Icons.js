import React from 'react'
import styles from "./Icons.css";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Icons = () => {
  return (
    <div className='icons-container'>
        <ul className='icons'>
            <li>
                <a href="">
                <CiLinkedin  className='icon' />
                </a>
            </li>
            <li>
                <a href="">
                <FaTwitter className='icon' />
                </a>
            </li>
            <li>
                <a href="">
                <FaGithub className='icon' />
                </a>
            </li>
            <li>
                <a href="">
                <FaInstagram className='icon'  />
                </a>
            </li>
            <li>
                <a href=""><SiFrontendmentor className='icon'  /></a>
            </li>
            {/* <li>
                <a href="">i</a>
            </li> */}
        </ul>
    </div>
  )
}

export default Icons