import React from 'react';
import './Panel.css'

function Panel({ children }){
    return(
        <header className='Panel'>
            { children }
        </header>
        );
}

export { Panel };