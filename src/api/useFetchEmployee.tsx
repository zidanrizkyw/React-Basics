import { useState } from "react"
import axios from "axios"
import { AxiosInstance } from "../lib/axios";

type EmployeeResponse = {
    id: string;
    name: string;
} 

export const useFetchEmployee = () => {
    const [employees, setEmployees] = useState<EmployeeResponse[]>([])
    const [employeesIsLoading, setEmployeesIsLoading] = useState(false)
    const [employeeError, setEmployeeError] = useState("")

    const fetchEmployees = async () => {
        try {
            setEmployeesIsLoading(true) // toggle mode on

            // const response = await fetch("http://localhost:2000/employees", {
            //     method: "GET"
            // })
            // const responseJson = await response.json() as EmployeeResponse[]

            // const response = await axios.get<EmployeeResponse[]>("http://localhost:2000/employees")
            const response = await AxiosInstance.get<EmployeeResponse[]>("/employees")
            console.log(response)
            setEmployees(response.data)
            
        } catch (error) {
            setEmployeeError((error as TypeError).message)
        } finally {
            setEmployeesIsLoading(false) // toggle mode off
        }
    }
    return {
        fetchEmployees,
        employees,
        employeeError,
        employeesIsLoading
    }
}