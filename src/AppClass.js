import React from 'react';
import style from './App.module.css';
import InputClass from "./components/input/InputClass";
import TextareaClass from "./components/textarea/TextareaClass";
import ButtonClass from "./components/button/ButtonClass";

class AppClass extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.handleClearState = this.handleClearState.bind(this)

        this.state = {
            fields: {},
            errors: {},
        }
    }

    componentDidMount() {
        console.log(this.state)
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
        // if (fields['name'][0]!==fields['name'][0].toUpperCase()){
        //     formIsValid = false
        //     errors['name'] = 'Name must start with a capital letter'
        // }

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

        // if (fields['surname'][0]!==fields['surname'][0].toUpperCase()){
        //     formIsValid = false
        //     errors['surname'] = 'Surname must start with a capital letter'
        // }
        //Email
        // if (!fields["email"]) {
        //     formIsValid = false;
        //     errors["email"] = "Cannot be empty";
        // }
        //
        // if (typeof fields["email"] !== "undefined") {
        //     if (!fields["email"].match('^(https?:\\/\\/)?')) {
        //         formIsValid = false;
        //         errors['email'] = "Only letters";
        //     }
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

        this.setState((prevState) => {
            return {
                ...prevState,
                    errors
            }
        });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Form submitted")
        } else {
            alert("Form has errors.");
        }
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState((prevState) => {
            return {
                ...prevState,
                fields: {
                    ...prevState.fields,
                    [name]: value

                }
            }
        })
    }

    handleClearState() {
        this.setState((prevState) => {
            return {
                ...prevState,
                fields: {},
                errors: {}
            }
        })
    }

    render() {
        return <div className={style.app}>
            <h1 className={style.hText}>Questionnaire creation</h1>
            <form name={'questionnaireForm'} className={style.questionnaireForm}
                  onSubmit={this.contactSubmit.bind(this)}>
                <fieldset>
                    <InputClass label={'Name'} placeholder={'Type your name'} type={'text'}
                                name={'name'} onChange={this.handleChange}
                                value={this.state.fields?.name}
                                error={this.state.error?.name}/>
                    <InputClass label={'Surname'} placeholder={'Type your surname'}
                                type={'text'} name={'surname'} onChange={this.handleChange}
                                value={this.state.fields?.surname}
                                error={this.state.error?.surname}/>
                    <InputClass label={'Birthday'} placeholder={'Select'} type={'date'}/>
                    <InputClass label={'Phone'} placeholder={'Type your phone number'}
                                type={'text'}/>
                    <InputClass label={'Email'} placeholder={'Type your email'} type={'text'} ref={'name'} onChange={this.handleChange}
                                value={this.state.fields?.email}
                                error={this.state.error?.email}/>
                    <TextareaClass label={'About yourself'}
                                   placeholder={'Tell us about yourself'}/>
                    <TextareaClass label={'Skills'} placeholder={'Tell us about your skills'}/>
                    <TextareaClass label={'Previous project'}
                                   placeholder={'Tell us about your previous project'}/>
                    <div className={style.buttonBlock}>
                        <ButtonClass name={'Save'}/>
                        <ButtonClass name={'Cancel'} onClick={this.handleClearState}/>
                    </div>
                </fieldset>
            </form>
        </div>;
    }
}

export default AppClass;
