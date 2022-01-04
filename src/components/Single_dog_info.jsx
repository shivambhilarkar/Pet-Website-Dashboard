import React, { Component } from 'react';
import './Single_dog.css'

const Single_dog_info = (props) => {
    return (  
        <>
            <div className="dog_card">
                <img src={props.imgurl} className='dog_pic'/>
                <div className="dog_card_info">
                    <h3>🅓 Dog Breed : { props.dogname}</h3>
                    <h3>• OLD : { props.yearold}</h3>
                    <h3>• Price Range : { props.price}</h3>
                </div>
            </div>


        
        </>
    );
}
 
export default Single_dog_info;