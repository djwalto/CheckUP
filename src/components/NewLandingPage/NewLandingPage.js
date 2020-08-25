import withRoot from './modules/withRoot';
import React from 'react';

import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import Nav from '../Nav/Nav';

// landing page for new users
function NewLandingPage() {
    return (
        <React.Fragment>
            <Nav />
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
            <AppFooter />
        </React.Fragment>
    );
};// end NewLandingPage

export default withRoot(NewLandingPage);