import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Checkbox, FormControlLabel, FormGroup, Stack, TextField } from '@mui/material';
import { useNavigate, Navigate } from "react-router-dom";
import axios from 'axios';

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [pass, setpass] = useState('');
    function loginUser() {

        const user = { username: username, password: pass }

        const res = axios.post('https://localhost:44327/api/Login', user).then(function (response) {
            if (response.data.flag)
                navigate("/Home");

            else
                return <Navigate replace to="/" />;
            // I need this data here ^^


        })
            .catch(function (error) {
                console.log(error);
            });



    }
    return (
        <>
            <Box
                sx={{
                    width: 100 + "%",
                    height: 100 + "vh",
                    backgroundColor: 'rgb(232 232 232)',
                    paddingTop: 3 + "rem"
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center" }} pt={3}>

                    <Card sx={{ minWidth: 500, minHeight: 450, paddingTop: "4rem" }} >
                        <Box width={400} sx={{ margin: 0 + " " + "auto" }}>
                            <Typography variant='h5' align='center'>Login</Typography>
                            <CardContent>
                                <Stack spacing={5}>
                                    <TextField id="" label="Username" size="small" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                                    <TextField id="" label="Password" size="small" value={pass} onChange={(e) => { setpass(e.target.value) }} />

                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                                    </FormGroup>
                                    <Button type='submit' variant="contained" sx={{ width: 100 + "%" }} onClick={loginUser}>Login</Button>
                                </Stack>
                            </CardContent>
                        </Box>
                    </Card>
                </Box>


            </Box>
        </>
    )
}


