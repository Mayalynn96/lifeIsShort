import React from 'react';
import Form from './Form';
import Adventures from './Adventures';
import {useState, useEffect} from 'react';
import '../assets/style.css'
import generateUniqueId from 'generate-unique-id';

const BucketListContainer = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [itemToEdit, setItemToEdit] = useState({})

    const [listItem, setListItem] = useState('');

    const [bucketList, setBucketList] = useState(()=>{
        const savedBucketList = localStorage.getItem("bucketList");

        if(savedBucketList) {
            return JSON.parse(savedBucketList)
        } else {
            return []
        }
    });

    const handleInputChange = (e) => {
        setListItem(e.target.value)
    };

    useEffect(() => {
        localStorage.setItem("bucketList", JSON.stringify(bucketList))
    }, [bucketList])

    const handleDelete = (e) => {
        e.preventDefault()
        const deletedItem = bucketList.filter(item => {
            return item.id !== JSON.parse(e.target.value).id
        })
        setBucketList(deletedItem)
    }

    const handleFormSubmit = (e) => {
        const {priority} = e.target;
        e.preventDefault();
        if(bucketList.length>0){
            setBucketList([
                ...bucketList,
                {item: listItem, priority: priority.value, complete:false, id:generateUniqueId()}
            ]);
        } else {
            setBucketList([{item: listItem, priority: priority.value, complete:false, id:generateUniqueId()}])
        }
        setListItem('')
    };

    const handleChangetoEdit = (e) => {
        e.preventDefault()
        setIsEditing(true)
        setListItem(JSON.parse(e.target.value).item)
        setItemToEdit(JSON.parse(e.target.value))
    }

    const handleChangetoAdd = (e) => {
        e.preventDefault()
        setIsEditing(false)
    }

    const handleInputToEdit = (e) => {
        e.preventDefault();
        const {priority} = e.target;
        const newItem = {
            item:listItem,
            priority:priority.value,
            complete:itemToEdit.complete,
            id:itemToEdit.id
        }
        const updatedBucketList = bucketList.map(item => {
            return item.id === itemToEdit.id ? newItem : item
        })
        setIsEditing(false);
        setBucketList(updatedBucketList);
        setListItem('')
    }

    const handleComplete = (e) => {
        const thisItem = JSON.parse(e.target.value)
        let isComplete = true
        if(thisItem.complete){
            isComplete = false
        } 
        const newItem = {
            item:thisItem.item,
            priority:thisItem.priority,
            complete:isComplete,
            id:thisItem.id
        }
        const updatedBucketList = bucketList.map(item => {
            return item.id === thisItem.id ? newItem : item
        })
        setBucketList(updatedBucketList);
    }

    return (
        <main>
            <header>
            <h1>Life is Short 🐢</h1>
            </header>
            <Form
            value={listItem}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            isEditing={isEditing}
            handleChangetoAdd={handleChangetoAdd}
            itemToEdit={itemToEdit}
            handleInputToEdit={handleInputToEdit}
            />
            <div>
            <Adventures 
            bucketList={bucketList}
            handleDelete={handleDelete}
            handleChangetoEdit={handleChangetoEdit}
            handleComplete={handleComplete}
            />
            </div>
        </main>
    );
}

export default BucketListContainer;