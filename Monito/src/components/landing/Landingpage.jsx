import React from 'react';
import Home from './Home';
import Banner from './Banner';
import PetsGrid from './PetsGrid';
import Seller from './Seller';
import Banner2 from './Banner2';
import Knowledge from './Knowledge';
import ProductGrid from './ProductGrid';



const LandingPage = () => {
    return (
        <div>
        <Home/>
        <PetsGrid/>
        <Banner/>
        <ProductGrid/>
        <Seller/>
        <Banner2/>
        <Knowledge/>
        
        </div>
    );
    }
 export default LandingPage;