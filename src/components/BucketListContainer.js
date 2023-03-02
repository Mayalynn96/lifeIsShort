import React from 'react';
import Form from './Form';
import Adventures from './Adventures';
import { useState} from 'react';

const BucketListContainer = () => {

    const [listItem, setListItem] = useState('');

    const [bucketList, setBucketList] = useState([{item:"Go skiing", priority:"High"}])

    const handleInputChange = (e) => setListItem(e.target.value)

    const handleFormSubmit = (e) => {
        const {priority} = e.target;
        e.preventDefault();
        setBucketList(
            [
                ...bucketList,
                {item: listItem, priority: priority.value}
            ]
        )
    }

    return (
        <main>
            <header>
            <h1>Life is Short: Add Adventures to your Bucketlist!</h1>
            </header>
            <Form
            value={listItem}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            />
            <div>
            <Adventures 
            bucketList={bucketList}
            />
            </div>
        </main>
    )
}

export default BucketListContainer;