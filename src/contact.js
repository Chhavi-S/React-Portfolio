import React from 'react';
import { Jumbotron } from 'reactstrap';
import {IconContext} from 'react-icons'
import {FaGithub, FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa'


class Contact extends React.Component{
    render(){
        return ( 
        <div>
            <Jumbotron>
            <p>Would love to hear from you and collaborate!</p>
            <IconContext.Provider value={{style: {margin: 8, fontSize: 24}}}>
            <FaGithub />
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
            </IconContext.Provider>
            </Jumbotron>
        </div>
        )
    }
}

export default Contact