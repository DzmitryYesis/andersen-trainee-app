import React, {useState} from "react";
import {Form} from "./components/form/Form";

const initialState = {
    form: {
        name: 'Dzmitry',
        surname: 'Yesis',
        birthday: '12.09.1988',
        phone: '+375295273840',
        email: 'blablabla@mail.ru',
        aboutYourself: 'realy great man',
        skills: 'react, redux, js, ts',
        previousProject: 'todolist, social-network, play-card'
    },
    isValidForm: false

}

export const AppFunc = () => {

    const [state, setState] = useState(initialState)

    return (
        <Form/>
    )
}