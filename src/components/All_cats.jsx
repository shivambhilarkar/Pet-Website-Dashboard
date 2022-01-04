import React, { Component } from 'react';
import Single_cat_info from './Single_cat';
 
const Cat_page_all = () => {
    return (  
        <>
        
            <h1 className="all_dog_heading">
                😺Cats Breeds With Prices
            </h1>

            <div className="container">
                < Single_cat_info
                    imgurl={require(`${'./images/dogs/cats/bengal_cat.jpg'}`)}
                    dogname={"Bengal Cat"}
                    yearold={"2-3 Months"}
                    price ={"18000-20000"}
                />
                < Single_cat_info
                    imgurl={require(`${'./images/dogs/cats/bombay_cat.jpg'}`)}
                    dogname={"Bombay Cat"}
                    yearold={"2-3 Months"}
                    price ={"25000+"}
                />
                < Single_cat_info
                    imgurl={require(`${'./images/dogs/cats/maine_coon.jpg'}`)}
                    dogname={"Maine Coon Cat"}
                    yearold={"2-3 Months"}
                    price ={"30000+"}
                />
                < Single_cat_info
                    imgurl={require(`${'./images/dogs/cats/persian_cat.jpg'}`)}
                    dogname={"Persian Cat"}
                    yearold={"2-3 Months"}
                    price ={"8000-15000"}
                />

                < Single_cat_info
                    imgurl={require(`${'./images/dogs/cats/saimese_cat.jpg'}`)}
                    dogname={"Saimese Cat"}
                    yearold={"2-3 Months"}
                    price ={"15000-25000"}
                />
                

            </div>
            
        </>
    );
}
 
export default Cat_page_all;