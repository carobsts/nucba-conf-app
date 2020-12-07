import React, { useState, useEffect } from 'react';
import Title from './Title';
import Label from './Label';
import IconContainer from './IconContainer';
import BeerButton from './BeerButton';
import beer from './../assets/cerveza.png';
import beerPack from './../assets/cajones.png';
import './styles.css';

const BeerCounter = () => {

    const [ totalBeers, setTotalBeers ] = useState(0); 
    const [ glasses, setGlasses ] = useState([]);
    const [ packs, setPacks ] = useState([]);

    useEffect(() => {
        if (glasses.length === 3) {
            const pck = 'Me tomé un pack :V';
            setPacks([ ...packs, pck ]);
            setGlasses([]);
        }
    }, [glasses, packs])

    function addBeer() {
        const beer = 'Una birrita más :)';
        setTotalBeers(totalBeers + 1);
        setGlasses([ ...glasses, beer ])
    }

    return (
        <div className="app-container">
            <div className="app-content">
                <Title title='BIRRITENZ' />
                <div className="container --column --button" >
                    <Label text="total de birritenz tomadas:" />
                    <Title title={totalBeers} />
                </div>
                <div className="container --column" >
                    <Label text="vasos de birriten" />
                    <div className="container --row">
                    { glasses.length >= 1 && glasses.map( glass =>
                        <IconContainer 
                        img={beer} />)
                    }
                    </div>
                </div>
                <div className="container --column" >
                    <Label text="cajones de birriten" />
                    <div className="container --row"> 
                    { packs.length >= 1 && packs.map( pack =>
                        <IconContainer 
                        img={beerPack} />)
                    }
                    </div>
                </div>
                <div className="container --button --column">
                    <Label text="pedir una birriten" />
                    <BeerButton 
                    handleClick={addBeer}
                    />
                </div>
            </div>
        </div>
    )
}

export default BeerCounter;