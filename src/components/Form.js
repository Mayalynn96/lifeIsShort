import React from 'react';

function Form(props) {
    
    return (
        <div>
            {props.isEditing ? (
                <form className='form' onSubmit={props.handleInputToEdit}>
                <label htmlFor='item'>
                <h2> Edit your Adventure! </h2>
                </label>
                <input
                id='itemInput'
                value ={props.value}
                name='item'
                onChange={props.handleInputChange}
                type='text'
                placeholder='Adventure'
                />
                <label htmlFor='priority'>Priority:</label>
                <select name="priority" id='itemPrioritySelect'>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button
                    id='itemAddBtn'
                    type='submit'
                >
                    Save
                </button>
                <button
                    id='changeToAddBtn'
                    type='button'
                    onClick={props.handleChangetoAdd}
                >
                    nevermind
                </button>
                </form>
            ) : (
            <form className='form' onSubmit={props.handleFormSubmit}>
            <label htmlFor='item'>
            <h2> Add Adventures to your Bucketlist! </h2>
            </label>
            <input
            id='itemInput'
            value ={props.value}
            name='item'
            onChange={props.handleInputChange}
            type='text'
            placeholder='Adventure'
            />
            <label htmlFor='priority'>Priority:</label>
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
            )}
        </div>
    )
}

export default Form;
