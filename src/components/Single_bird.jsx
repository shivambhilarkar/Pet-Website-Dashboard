import React, { Component } from 'react';

const Single_bird = (props) => {
    return (  
        <>
             <div className="dog_card">
                <img src={props.imgurl} className='dog_pic'/>
                <div className="dog_card_info">
                    <h3>🅓 Bird Name : { props.dogname}</h3>
                    <h3>• OLD : { props.yearold}</h3>
                    <h3>• Price Range : { props.price}</h3>
                </div>
            </div>
        
        
        
        </>
    );
}
 
export default Single_bird;