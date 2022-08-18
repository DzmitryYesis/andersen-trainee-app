import style from "./Form.module.css";
import {InputFunc} from "../input/InputFunc";
import {TextareaFunc} from "../textarea/TextareaFunc";
import {ButtonFunc} from "../button/ButtonFunc";
import React from "react";


export const Form = () => {
    return (
        <div className={style.form}>
            <h1 className={style.hText}>Questionnaire creation</h1>
            <InputFunc label={'Name'} placeholder={'Type your name'} type={'text'}
                       name={'name'}/>
            <InputFunc label={'Surname'} placeholder={'Type your surname'}
                       type={'text'} name={'surname'}/>
            <InputFunc label={'Birthday'} placeholder={'Select'} type={'date'}/>
            <InputFunc label={'Phone'} placeholder={'Type your phone number'}
                       type={'text'}/>
            <InputFunc label={'Email'} placeholder={'Type your email'} type={'text'}/>
            <TextareaFunc label={'About yourself'}
                          placeholder={'Tell us about yourself'}/>
            <TextareaFunc label={'Skills'} placeholder={'Tell us about your skills'}/>
            <TextareaFunc label={'Previous project'}
                          placeholder={'Tell us about your previous project'}/>
            <div className={style.buttonBlock}>
                <ButtonFunc name={'Save'}/>
                <ButtonFunc name={'Cancel'}/>
            </div>
        </div>
    )
}