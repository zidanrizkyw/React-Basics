import { useState } from "react"
import { AxiosInstance } from "../lib/axios"

export const useDeleteEmployee = () => {
    const [deleteEmployeeLoading, setDeleteEmployeeLoading] = useState(false)
    const [deleteEmployeeError, setDeleteEmployeeError] = useState("")

    const handleDeleteEmployee  = async (employeeId: string) => {
        try {
            setDeleteEmployeeLoading(true)
            await AxiosInstance.delete(`/employees/${employeeId}`)
        } catch (error) {
            setDeleteEmployeeError((error as TypeError).message)
        } finally {
            setDeleteEmployeeLoading(false)
        }
    }
    return {
        deleteEmployeeLoading,
        deleteEmployeeError,
        handleDeleteEmployee
    }
}