import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"> <FaGoogle className='text-danger'></FaGoogle> Login with Google</Button>
                <Button className='mt-2' variant="outline-dark"><FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook className='text-primary'></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp className='text-success'></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter className='text-info'></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram className='text-danger'></FaInstagram> Instragram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch className='text-warning'></FaTwitch> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4'>
                <BrandCarosel></BrandCarosel>
            </div>

        </div >
    );
};

export default RightSideNav;