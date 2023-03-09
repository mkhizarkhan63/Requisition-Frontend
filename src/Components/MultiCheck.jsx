import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TextField, Radio, RadioGroup, Stack, Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
export default function MultiCheck() {
  const [emailChild, setemailChild] = React.useState(false);
  const [internetChild, setinternetChild] = React.useState(false);
  const handleChange1 = (event) => {

    if (emailChild == false) { setemailChild(true) }

    else { setemailChild(false) };

  }

  const handleChange2 = (event) => {

    if (internetChild == false) { setinternetChild(true) }

    else { setinternetChild(false) };
  }


  const EmailChildren = (
    <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Internal" control={<Radio sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 20,
          },
        }} disabled={emailChild == true ? false : true} />} label="Internal" />
        <FormControlLabel value="External" control={<Radio sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 20,
          },
        }} disabled={emailChild == true ? false : true} />} label="External" />

      </RadioGroup>

    </Box>
  );

  const internetChildren = (
    <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>

      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <FormControlLabel value="0" control={<Radio sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 20,
          },
        }} disabled={internetChild == true ? false : true} />} label="With Restriction" />
        <FormControlLabel value="1" control={<Radio sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 20,
          },
        }} disabled={internetChild == true ? false : true} />} label="Without Restriction" />
      </RadioGroup>


    </Box>
  );


  return (
    <>

      <Typography variant="h6" pb={2}>Services Required:<Typography variant="body2" si>Please Check the applicable boxes.</Typography> </Typography>


      <Grid container spacing={2}>

        <Grid item xs={6} md={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>

            {/* 3 columns */}
            <Stack spacing={2}>
              <Box display="flex">
                <FormControlLabel
                  label="Windows Domain Account"
                  control={<Checkbox />}
                />
                <TextField id="outlined-basic" label="User Id(Preference)" size="small" variant="outlined" />
              </Box>
              <Box display="flex">
                <FormControlLabel
                  label="E-Mail Address"
                  control={<Checkbox onChange={handleChange1} />}

                />
                {EmailChildren}
                <TextField id="outlined-basic" label="Email(Preference)" size="small" variant="outlined" />
              </Box>
              <Box display="flex">
                <FormControlLabel
                  label="Internet Access"
                  control={<Checkbox onChange={handleChange2} />}

                />
                {internetChildren}
              </Box>
              <br />
              {/* 3 columns */}
              <Box display="flex">
                <FormControlLabel
                  label="AS - 400 Account"
                  control={<Checkbox />}
                />
                <TextField id="outlined-basic" label="User Id(Preference)" size="small" variant="outlined" />
              </Box>
              <Box display="flex">
                <FormControlLabel
                  label="HIS"
                  control={<Checkbox />}

                />
                <TextField id="outlined-basic" label="User Id(Preference)" size="small" variant="outlined" />
              </Box>
              <Box display="flex">
                <FormControlLabel
                  label="EMR"
                  control={<Checkbox />}

                />
                <TextField id="outlined-basic" label="User Id(Preference)" size="small" variant="outlined" />
              </Box>
              <Box display="flex">
                <FormControlLabel
                  label="ORACLE EBS"
                  control={<Checkbox />}

                />
                <TextField id="outlined-basic" label="User Id(Preference)" size="small" variant="outlined" />
              </Box>
              <Box display="flex">
                <FormControlLabel
                  label="Any Other (HIRS/ TIS / PACS / LRS )"
                  control={<Checkbox />}

                />
                <TextField id="outlined-basic" label="User Id(Preference)" size="small" variant="outlined" />
              </Box>
              <Box display="flex" paddingTop={2}>
                <TextField id="outlined-basic" label="Remarks" size="small" fullWidth variant="outlined" />
              </Box>
            </Stack>
          </Box>
        </Grid>

      </Grid>
    </>
  );
}