import React from "react";
import Form from "./Form";
import EndMessage from "./EndMessage";

class FormViewEx extends React.Component {
    state = { formDisplay: true, formState: {} }

    onSubmitForm = (formState) => {
        localStorage.setItem('formState', JSON.stringify(formState));
        this.setState(prev => ({ formDisplay: !prev.formDisplay, formState: formState }));
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.formDisplay && <Form onSubmitForm={this.onSubmitForm} />}
                {!this.state.formDisplay && <EndMessage firstName={this.state.formState.firstName} lastName={this.state.formState.lastName} age={this.state.formState.age} onBackClick={this.onSubmitForm} />}
            </div>
        );
    }
}

export default FormViewEx;