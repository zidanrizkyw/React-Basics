import { useState } from "react"
import { AxiosInstance } from "../lib/axios"

export const useCreateEmployee = () => {
    const [createEmployeeLoading, setCreateEmployeeLoading] = useState(false)
    const [createEmployeeError, setCreateEmployeeError] = useState("")

    const handleCreateEmployee = async (payload: string) => {
        try {
            setCreateEmployeeLoading(true)
            await AxiosInstance.post("/employees", {
                name: payload
            })
            
        } catch (error) {
            setCreateEmployeeError((error as TypeError).message)
        } finally {
            setCreateEmployeeLoading(false)
        }
    }

    
    return {
        handleCreateEmployee,  
        createEmployeeError,
        createEmployeeLoading
    }
}