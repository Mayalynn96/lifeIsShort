import React from 'react';

function Adventures(props) {
    if(props.bucketList.length>0){
        return (
            <ul>
                {props.bucketList.map((adventure, index) => {
                    return (
                    <li key={index} className={adventure.priority}>
                        {adventure.item}
                        <div>
                        <button className='deleteBtn' value={JSON.stringify(adventure)} onClick={props.handleDelete}>
                        🗑️
                        </button>
                        <button className='editBtn'>
                        📝
                        </button>
                        <button className='completeBtn'>
                        ✔️
                        </button>
                        </div>
                    </li>
                    )
                })}
            </ul>
        )
    }
}

export default Adventures;
