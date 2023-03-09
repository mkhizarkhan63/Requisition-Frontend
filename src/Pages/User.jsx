import React from 'react'
import { Box } from '@mui/material'
import Header from '../Components/Header'
import Form from '../Components/Form'
export const User = () => {

    const Formlabels = {
        empno: "Employee No",
        name: "Name",
        department: "Department",
        designation: "Designation",
        date: "Date"
    }
    return (
        <>
            <Header />
            <Box
                sx={{
                    width: 100 + "%",
                    backgroundColor: 'rgb(232 232 232)',
                    paddingTop: 3 + "rem"
                }}>
                <Form labels={Formlabels} />
            </Box>
        </>
    )
}
