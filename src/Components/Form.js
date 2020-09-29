import React, {useState} from 'react'

const Form = props => {

    // state for the input
    const [input, setInput] = useState('')

    const handleSubmit = event => {
        // prevent form default refreshing
        event.preventDefault()
        console.log('clicked')
        // handleSubmit function from App
        props.handleSubmit(input)
        // reset the form back to blank after a search
        setInput('')
    }

    const handleChange = event => {
        // logging the input zip code
        console.log('handleChange -', event.target.value)
        const location = event.target.value
        setInput(location)
    }


    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h4>Enter zip code</h4>
                <input
                    type='text'
                    placeholder='Location'
                    onChange={handleChange}
                    value={input}
                />
            </form>
        </div>
    )
}

export default Form