import React from 'react';

function Adventures(props) {


    if (props.bucketList.length > 0) {
        return (
            <ul>
                {props.bucketList.map((adventure, index) => {
                    return adventure.complete ?
                        <li key={index} className='complete'>
                            {adventure.item}
                            <div id='allButtons'>
                                <button className='completeBtn' value={JSON.stringify(adventure)} onClick={props.handleComplete}>
                                ✔
                                </button>
                            </div>
                        </li>
                        :
                        <li key={index} className={adventure.priority}>
                            {adventure.item}
                            <div id='allButtons'>
                                <button className='deleteBtn' value={JSON.stringify(adventure)} onClick={props.handleDelete}>
                                    🗑️
                                </button>
                                <button className='editBtn' value={JSON.stringify(adventure)} onClick={props.handleChangetoEdit}>
                                    📝
                                </button>
                                <button className='completeBtn' value={JSON.stringify(adventure)} onClick={props.handleComplete}>
                                ⚪
                                </button>
                            </div>
                        </li>

                })}
            </ul>
        )
    }
}

export default Adventures;
