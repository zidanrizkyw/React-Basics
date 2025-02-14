import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react';

// type RegisterFormSchema = {
//     password: string;
//     username: string;
// }

const registerFormSchema = z.object({
    username: z.string().min(3, { message: "Minimal 3 karakter cuy" }),
    email: z.string().email({ message: "Invalid " }),
    password: z.string().min(8, { message: "minimal 8 karakter cuy" }),
    gender: z.enum(["male", "female"]),
    isPregnant: z.boolean().optional(),
    repeatPassword: z.string(),
    age: z.coerce.number().min(18),
    dob: z.coerce.date()
})
    .superRefine((arg, ctx) => {
        if (arg.password !== arg.repeatPassword) {
            ctx.addIssue({
                code: "custom",
                path: ["repeatPaswword"],
                message: "Password tidak sama"
            });
        }
    })

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const RHFPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    });

    const handleRegisterUser = (values: RegisterFormSchema) => {
        alert("Form Submitted")
        console.log(values.gender)

    }
    return (
        <div>
            <h1>React Hook Form</h1>
            <form action='' style={{ display: "flex", flexDirection: "column", gap: "8px" }} onSubmit={form.handleSubmit(handleRegisterUser)}>
                <label>
                    Username:
                    <input type='text' {...form.register("username")} />
                </label>
                <span style={{ color: "red" }}>{form.formState.errors.username?.message}</span>

                <label>
                    Email:
                    <input type='email' {...form.register("email")} />
                </label>
                <span style={{ color: "red" }}>{form.formState.errors.email?.message}</span>

                <label>
                    Password:
                    <input type={showPassword ? "text" : "password"} {...form.register("password")} />
                </label>
                <span style={{ color: "red" }}>{form.formState.errors.password?.message}</span>
                <label>
                    Confirm Password
                    <input type={showPassword ? "text" : "password"} {...form.register("repeatPassword")} />
                </label>
                <span style={{ color: "red" }}>{form.formState.errors.repeatPassword?.message}</span>

                <label>
                    Show Password
                    <input type='checkbox' onChange={(e) => setShowPassword(e.target.checked)} />
                </label>

                <label>
                    Gender :
                    <select {...form.register("gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <span style={{ color: "red" }}>{form.formState.errors.gender?.message}</span>

                {form.watch("gender") === "female" ? (
                    <label>
                        Hamil
                        <input type='checkbox'  {...form.register("isPregnant")}/>
                    </label>
                ) : null}


                <label>
                    Age:
                    <input type='number' {...form.register("age")} />
                </label>
                <span style={{ color: "red" }}>{form.formState.errors.age?.message}</span>
                <label>
                    Date of Birth:
                    <input type='date' {...form.register("dob")} />
                </label>


                <button style={{ width: "fit-content" }}>Register</button>
            </form>
        </div>
    )
}

export default RHFPage
