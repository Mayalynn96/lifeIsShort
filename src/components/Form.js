import React from 'react';

function Form(props) {

    return (
        <div>
            <form className='form' onSubmit={props.handleFormSubmit}>
            <input
            value ={props.value}
            name='item'
            onChange={props.handleInputChange}
            type='text'
            placeholder='Adventure'
            />
            <select name="priority">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button
                type='submit'
            >
                Add 🐢
            </button>
            </form>
        </div>
    )
}

export default Form;
