import React from "react";

class Form extends React.Component {
    state = { firstName: "", lastName: "", age: "0-15" }

    componentDidMount() {
        if (localStorage.hasOwnProperty('formState')) {
            this.setState(JSON.parse(localStorage.getItem('formState')));
        }
    }

    onInputChange = (e) => {
        this.setState({ [e.target.getAttribute("id")]: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmitForm(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input name="firstName" id="firstName" type="text" onChange={this.onInputChange} value={this.state.firstName} />
                <br />
                <label htmlFor="lastName">Last Name: </label>
                <input name="lastName" id="lastName" type="text" onChange={this.onInputChange} value={this.state.lastName} />
                <br />
                <label htmlFor="age">Age: </label>
                <select name="age" id="age" onChange={this.onInputChange} value={this.state.age} >
                    <option value="0-15">0-15</option>
                    <option value="16-30">16-30</option>
                    <option value="31-969">31-969</option>
                </select>
                <br />
                <button type="submit">Continue</button>
            </form>
        );
    }
}

export default Form;