import React, { Component } from 'react';
import Single_dog_info from './Single_dog_info';
import './All_dog.css'

const Dog_page = () => {
    return (
        <>
            <h1 className="all_dog_heading">
               🐶 Dog Breeds With Prices
            </h1>
            <div className="container">
                < Single_dog_info
                    imgurl={require(`${'./images/dogs/post5.jpg'}`)}
                    dogname={"Labrador Dog"}
                    yearold={"2-3 Months"}
                    price ={"4000-5000"}
                />

                 < Single_dog_info
                    imgurl={require(`${'./images/dogs/breed/german_shepherd.jpg'}`)}
                    dogname={"German Shephard "}
                    yearold={"2-3 Months"}
                    price ={"16000-20000"}
                />

                < Single_dog_info
                    imgurl={require(`${'./images/dogs/breed/pitbull_dog.jpg'}`)}
                    dogname={"Pitbull Dog"}
                    yearold={"2-3 Months"}
                    price ={"25000+"}
                />

                 < Single_dog_info
                    imgurl={require(`${'./images/dogs/breed/boxer_dog.jpg'}`)}
                    dogname={"Boxer Dog"}
                    yearold={"2-3 Months"}
                    price ={"20000-30000"}
                />
                 < Single_dog_info
                    imgurl={require(`${'./images/dogs/breed/doberman_dog.jpg'}`)}
                    dogname={"Doberman Dog"}
                    yearold={"2-3 Months"}
                    price ={"18000-20000"}
                />
                 < Single_dog_info
                    imgurl={require(`${'./images/dogs/breed/husky_dog.jpg'}`)}
                    dogname={"Husky Dog"}
                    yearold={"2-3 Months"}
                    price ={"15000-25000"}
                />
                 < Single_dog_info
                    imgurl={require(`${'./images/dogs/breed/lahasa_dog.jpg'}`)}
                    dogname={"Lahasa Dog"}
                    yearold={"2-3 Months"}
                    price ={"15000-20000"}
                />
                 < Single_dog_info
                    imgurl={require(`${'./images/dogs/breed/pugg_dog.jpg'}`)}
                    dogname={"Pug Dog"}
                    yearold={"2-3 Months"}
                    price ={"5000-15000"}
                />

                 < Single_dog_info
                    imgurl={require(`${'./images/dogs/breed/rottweilier_dog.jpg'}`)}
                    dogname={"Rottweilier Dog"}
                    yearold={"2-3 Months"}
                    price ={"25000+"}
                />
                < Single_dog_info
                    imgurl={require(`${'./images/dogs/breed/goldern_retrivier.jpg'}`)}
                    dogname={"Golden Retrivier Dog"}
                    yearold={"2-3 Months"}
                    price ={"18000-30000"}
                />

                {/* < Single_dog_info />
                < Single_dog_info />
                < Single_dog_info /> */}
            </div>
    
        </>
    
    );
}
 
export default Dog_page;