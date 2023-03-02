import React from 'react';

function Adventures(props) {
    return (
        <ul>
            {props.bucketList.map((adventure, index) => {
                return (
                <li key={index}>
                    {adventure.priority} priority: {adventure.item}
                </li>
                )
            })}
        </ul>
    )
}

export default Adventures;
