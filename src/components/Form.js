import React from 'react';

function Form(props) {

    return (
        <div>
            <form className='form' onSubmit={props.handleFormSubmit}>
            <h3> Add Adventures to your Bucketlist! </h3>
            <input
            id='itemInput'
            value ={props.value}
            name='item'
            onChange={props.handleInputChange}
            type='text'
            placeholder='Adventure'
            />
            <select name="priority" id='itemPrioritySelect'>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button
                id='itemAddBtn'
                type='submit'
            >
                Add
            </button>
            </form>
        </div>
    )
}

export default Form;
