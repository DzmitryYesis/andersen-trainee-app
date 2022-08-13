import React from 'react';
import style from './App.module.css';
import Input from "./components/input/Input";
import Textarea from "./components/textarea/Textarea";
import Button from "./components/button/Button";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors['name'] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors['name'] = "Only letters";
            }
        }

        if (fields['name'][0]!==fields['name'][0].toUpperCase()){
            formIsValid = false
            errors['name'] = 'Name must start with a capital letter'
        }

        //Surname
        if (!fields["surname"]) {
            formIsValid = false;
            errors['surname'] = "Cannot be empty";
        }

        if (typeof fields["surname"] !== "undefined") {
            if (!fields["surname"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors['surname'] = "Only letters";
            }
        }

        if (fields['surname'][0]!==fields['surname'][0].toUpperCase()){
            formIsValid = false
            errors['surname'] = 'Surname must start with a capital letter'
        }
        //Email
        // if (!fields["email"]) {
        //     formIsValid = false;
        //     errors["email"] = "Cannot be empty";
        // }
        //
        // if (typeof fields["email"] !== "undefined") {
        //     let lastAtPos = fields["email"].lastIndexOf("@");
        //     let lastDotPos = fields["email"].lastIndexOf(".");
        //
        //     if (
        //         !(
        //             lastAtPos < lastDotPos &&
        //             lastAtPos > 0 &&
        //             fields["email"].indexOf("@@") == -1 &&
        //             lastDotPos > 2 &&
        //             fields["email"].length - lastDotPos > 2
        //         )
        //     ) {
        //         formIsValid = false;
        //         errors["email"] = "Email is not valid";
        //     }
        // }

        this.setState({errors});
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Form submitted")
            console.log(this.state);
        } else {
            alert("Form has errors.");
            console.log(this.state)
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value.trim();
        this.setState({fields});
    }

    handleClearState() {
        this.setState({})
    }

    render() {
        return <div className={style.app}>
            <h1 className={style.hText}>Questionnaire creation</h1>
            <form name={'questionnaireForm'} className={style.questionnaireForm}
                  onSubmit={this.contactSubmit.bind(this)}>
                <fieldset>
                    <Input label={'Name'} placeholder={'Type your name'} type={'text'}
                           ref={'name'} onChange={this.handleChange.bind(this, "name")}
                           value={this.state.fields?.name}
                           error={this.state.error?.name}/>
                    <Input label={'Surname'} placeholder={'Type your surname'}
                           type={'text'}/>
                    <Input label={'Birthday'} placeholder={'Select'} type={'date'}/>
                    <Input label={'Phone'} placeholder={'Type your phone number'}
                           type={'text'}/>
                    <Input label={'Email'} placeholder={'Type your email'} type={'text'}/>
                    <Textarea label={'About yourself'}
                              placeholder={'Tell us about yourself'}/>
                    <Textarea label={'Skills'} placeholder={'Tell us about your skills'}/>
                    <Textarea label={'Previous project'}
                              placeholder={'Tell us about your previous project'}/>
                    <div className={style.buttonBlock}>
                        <Button name={'Save'}/>
                        <Button name={'Cancel'} onClick={this.handleClearState}/>
                    </div>
                </fieldset>
            </form>
        </div>;
    }
}

export default App;
