import React from 'react'
import ConstructorDemo from './ConstructorDemo';
import Props1 from './Props1'
import Props2 from './Props2';
import Props3 from './Props3';

function PropsApp() {
    const work="Vijaya kumari";
    const names = {name1: "Audhi Lakshmi", name2: "Ramani"};
    return (
        <div>
            <Props1 father="Doraswami achari"/>
        <Props2 mother={work}/>
        <Props3 sisters={names}/>
        <ConstructorDemo childrens="Manasa,Revati,Giri"/>
        </div>
    )
}

export default PropsApp
