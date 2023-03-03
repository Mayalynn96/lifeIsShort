import React from 'react';
import Form from './Form';
import Adventures from './Adventures';
import {useState} from 'react';
import '../assets/style.css'

const BucketListContainer = () => {

    const [listItem, setListItem] = useState('');

    const [bucketList, setBucketList] = useState([{item:"Go skiing", priority:"high", complete:false}]);

    const handleInputChange = (e) => setListItem(e.target.value);

    const handleDelete = (e) => {
        e.preventDefault()
        console.log(JSON.parse(e.target.value).item)
        const deletedItem = bucketList.filter(item => {
            return item.item !== JSON.parse(e.target.value).item
        })
        setBucketList(deletedItem)
    }

    const handleFormSubmit = (e) => {
        const {priority} = e.target;
        e.preventDefault();
        if(bucketList.length>0){
            setBucketList(
                [
                    ...bucketList,
                    {item: listItem, priority: priority.value, complete:false}
                ]
            )
        } else {
            setBucketList([{item: listItem, priority: priority.value, complete:false}])
        }
    };

    return (
        <main>
            <header>
            <h1>Life is Short 🐢</h1>
            </header>
            <Form
            value={listItem}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            />
            <div>
            <Adventures 
            bucketList={bucketList}
            handleDelete={handleDelete}
            />
            </div>
        </main>
    );
}

export default BucketListContainer;