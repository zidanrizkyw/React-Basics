import React, { useRef, useState } from 'react'


const FormPage = () => {

    // Uncontrolled component/Input
    const inputNameRef = useRef<HTMLInputElement>(null)
    const inputEmailRef = useRef<HTMLInputElement>(null)

    //controlled component/input
    const [fullNameInput, setFullNameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    const handleSubmit = () => {
        // const fullNameFormValue = inputNameRef.current?.value;
        // const fullEmailFormValue = inputEmailRef.current?.value;
        // alert("Form Submitted :" + fullNameFormValue + fullEmailFormValue)
        const fullNameValidation = fullNameInput.length < 3;
        const passwordValidation = passwordInput.length < 8;

        if (fullNameValidation) {
            setUsernameErrorMessage("Username harus 3 karakter")
        }

        if (passwordValidation) {
            setPasswordErrorMessage("password harus 9 karakter")
        }
        return

    }

    return (
        <div>
            <h1>Form Page</h1>
            <h3>Fullname :{fullNameInput}</h3>
            <h3>Password :{passwordInput}</h3>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    maxWidth: "250px"
                }}
            >
                <label htmlFor='full-name'>Full Name</label>
                <input
                    onChange={(e) => setFullNameInput(e.target.value)}
                    id='full-name'
                    type='text'
                    value={fullNameInput}
                />
                <span style={{color: "red"}}>{usernameErrorMessage}</span>

                <label htmlFor='password'>Password</label>
                <input
                    onChange={(e) => setPasswordInput(e.target.value)}
                    id='password'
                    type='password'
                    value={passwordInput}
                />
                <span style={{color: "red"}}>{passwordErrorMessage}</span>


                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default FormPage
