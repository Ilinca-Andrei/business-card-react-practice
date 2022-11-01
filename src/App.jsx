import React from 'react';
import dom from 'react-dom/client';

import Interests from './components/Interests';
import About from './components/About';
import Info from './components/Info';
import HeroPhoto from './components/HeroPhoto';
import Buttons from './components/Buttons';
import SocialMedia from './components/SocialMedia';

function App() {
    return (
        <>  
            <HeroPhoto/>
            <div className='Main'>
            <Info/>
            <Buttons/>
            <About/>
            <Interests/>
            <SocialMedia/>
            </div>
        </>
    )
}

const root = dom.createRoot(document.getElementById('root'));

root.render(<App/>);