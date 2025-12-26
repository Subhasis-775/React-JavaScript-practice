import React, { useState } from 'react';
import './styles.css'
function validate( values ) {
    const error = {};
    if (!values.email) {
        error.email = `Email is required`;
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        error.email = "Invalid email format";
    }
    if (!values.name) {
        error.name = "Name is required";
    }
    if (!values.message) {
        error.message = 'Message is required';
    }
    return error;
}
function ContactForm() {
    const [value, setValue] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(value);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
        }
    }
    if (submitted) {
        return <p>Thank you, {value.name}</p>
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={value.name}
                    placeholder="Enter the name"
                    onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
                <label htmlFor="email">Email :</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={value.email}
                    placeholder="Enter the email"
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
                <label htmlFor="message">Message :</label>
                <input
                    id="message"
                    type="text"
                    name="message"
                    value={value.message}
                    placeholder="Enter the message"
                    onChange={handleChange}
                />
                {errors.message && <p>{errors.message}</p>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;