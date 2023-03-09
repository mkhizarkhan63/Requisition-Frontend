import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MultiCheck from './MultiCheck';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));
export default function Form(props) {

    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <Box sx={{ padding: "3px 5px 0 5px", width: "90%", margin: 0 + " " + "auto" }} >

            <Card sx={{ width: 100 + "%", minHeight: 450, paddingTop: "2rem" }} >
                <Typography variant='h5' align='center'>Account Opening / Closing Requisition Form</Typography>
                <Typography variant='body2' align='center'>(To be filled by the requestor.)</Typography>
                <Box width={800} sx={{ margin: 0 + " " + "auto" }}>
                    <CardContent >
                        <Grid container spacing={3}  >
                            <Grid item xs={12} md={3}>
                                <TextField id="" size='large' label={props.labels.empno} placeholder='' variant="standard" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField id="" size="large" label={props.labels.name} variant="standard" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField id="" size='large' label={props.labels.designation} variant="standard" />
                            </Grid>

                        </Grid>
                        <br />        <br />
                        <Grid container spacing={3} >
                            <Grid item xs={12} md={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Department"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                      
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField id="" size='large' label={props.labels.date} placeholder='yyyy-mm-dd' variant="standard" />
                            </Grid>

                        </Grid>
                        <br />
                        <br />
                        {/* Checkboxes */}
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <MultiCheck />
                            </Grid>
                        </Grid>
                        {/*End Checkboxes */}
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
}