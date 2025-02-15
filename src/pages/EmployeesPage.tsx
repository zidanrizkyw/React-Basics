import { useState } from "react"
import { useFetchEmployee } from "../api/useFetchEmployee"
import { useCreateEmployee } from "../api/useCreateEmployee"
import { AxiosInstance } from "../lib/axios"
import { useDeleteEmployee } from "../api/useDeleteEmployee"


const EmployeesPage = () => {
    const {employees, employeeError, employeesIsLoading, fetchEmployees } = useFetchEmployee()
    const {handleCreateEmployee, createEmployeeError, createEmployeeLoading} = useCreateEmployee()
    const {deleteEmployeeError, deleteEmployeeLoading, handleDeleteEmployee} = useDeleteEmployee()
    const [inputText, setInputText] = useState("");

    const AfterCreateEmployee = async () => {
        await handleCreateEmployee(inputText)
        await fetchEmployees()
        setInputText("")
    }
    
    const AfterDeleteEmployee = async (employeeId: string) => {
        await handleDeleteEmployee(employeeId)
        await fetchEmployees()
    }

    

    return (
        <div>
            <h1>Employees Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => {
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td><button disabled={deleteEmployeeLoading} onClick={() => AfterDeleteEmployee(employee.id)}>Delete</button> <p style={{color: "red"}}>{deleteEmployeeError}</p></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" onChange={(e) => setInputText(e.target.value)}  value={inputText}/>
                        </td>

                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button disabled={createEmployeeLoading} onClick={AfterCreateEmployee}>Create Employee</button>
                        </td>
                    </tr>
                    {
                        createEmployeeError && <tr>
                            <td colSpan={2} style={{color: "red"}}>{createEmployeeError}</td>
                        </tr>
                    }
                </tfoot>
            </table>
            <button disabled={employeesIsLoading} onClick={fetchEmployees}>Fetch Employees</button>
            {
                employeesIsLoading && <p>Loading ....</p>
            }
            {
                employeeError && <p style={{ color: "red" }}>{employeeError}</p>
            }

            {/*{employeesIsLoading ? <p>Loading...</p> : null}*/}
        </div>
    )
}

export default EmployeesPage
