import React, { Component } from 'react';
import Single_bird from './Single_bird';
import './Single_dog.css'


const All_birds = () => {
    return (  
        <>
            <h1 className="all_dog_heading">
                🐦Bird Names With Prices
            </h1>
            <div className="container">
                {/* < Single_bird
                    imgurl={require(`${'./images/dogs/birds/green_parote.jpg'}`)}
                    dogname={"Parrote"}
                    yearold={"2-3 Months"}
                    price ={"2000+"}
                /> */}

              

                < Single_bird
                    imgurl={require(`${'./images/dogs/birds/yellowbird.jpg'}`)}
                    dogname={"Cockatiels"}
                    yearold={"2-3 Months"}
                    price ={"4000+"}
                />
                < Single_bird
                    imgurl={require(`${'./images/dogs/birds/budgies.jpg'}`)}
                    dogname={"Budgies"}
                    yearold={"2-3 Months"}
                    price ={"500-1000"}
                />

                 < Single_bird
                    imgurl={require(`${'./images/dogs/birds/lovebirdss.jpg'}`)}
                    dogname={"Lovebirds"}
                    yearold={"2-3 Months"}
                    price ={"1000-2000"}
                />

                < Single_bird
                    imgurl={require(`${'./images/dogs/birds/white_bird.jpg'}`)}
                    dogname={"white Cockatoo"}
                    yearold={"2-3 Months"}
                    price ={"1 lakh+"}
                />

                < Single_bird
                    imgurl={require(`${'./images/dogs/birds/duck.jpg'}`)}
                    dogname={"Duck"}
                    yearold={"2-3 Months"}
                    price ={"2000+"}
                />
                 
            </div>
        
        
        </>
    );
}
 
export default All_birds;