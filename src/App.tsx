import React, {useState} from 'react';
import './App.css';
import {List} from './componets/List';
import {ListTechnologies1, ListTechnologies2, ListTechnologies3} from './data/data';


function App() {

    const [list1, setList1] = useState(ListTechnologies1)
    const [list2, setList2] = useState(ListTechnologies2)
    const [list3, setList3] = useState(ListTechnologies3)

    return (
        <div className="App">
            <header className="App-header">
                <List dataColumn={list1} addElementToAdjacentColumn={(setList2)} updateItemList={setList1}
                      adjacentDataColumn={list2}/>
                <List dataColumn={list2} addElementToAdjacentColumn={setList3} updateItemList={setList2}
                      adjacentDataColumn={list3} isRedactItems={true}
                />
                <List dataColumn={list3} addElementToAdjacentColumn={setList1} updateItemList={setList3}
                      adjacentDataColumn={list1}/>
            </header>
        </div>
    );
}

export default App;
