export const QuestionnaireFunc = ({state}) => {
    return (
        <div>
            <h1>Personal Questionnaire</h1>
            <div>
                <span>Name:</span>
                <span>{state.form.name}</span>
            </div>
            <div>
                <span>Surname:</span>
                <span>{state.form.surname}</span>
            </div>
            <div>
                <span>Birthday:</span>
                <span>{state.form.birthday}</span>
            </div>
            <div>
                <span>Phone:</span>
                <span>{state.form.phone}</span>
            </div>
            <div>
                <span>Email:</span>
                <span>{state.form.email}</span>
            </div>
            <div>
                <span>About yourself:</span>
                <span>{state.form.aboutYourself}</span>
            </div>
            <div>
                <span>Skills:</span>
                <span>{state.form.skills}</span>
            </div>
            <div>
                <span>Previous project:</span>
                <span>{state.form.previousProject}</span>
            </div>
        </div>
    )
}