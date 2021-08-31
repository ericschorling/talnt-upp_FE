import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { StateContext } from '../context';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FactorSelector(props) {
  const classes = useStyles();
  
  const [value] = useContext(StateContext)
  const [type, setType] = useState('')
  
  const handleChange = (event) => {
    props.updateType(event.target.value.split("_")[0])
    setType(event.target.value)
    props.setTemplate(event.target.value.split("_")[1]-1)
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="talent-selector-label">
          Perf. Factor
        </InputLabel>
        <Select
          labelId="talent-selector-label"
          id="talent-selector"
          value={type}
          onChange={(e)=>handleChange(e)}
          displayEmpty
          className={classes.selectEmpty}
        >

          <MenuItem disabled value="">
            <em>--</em>
          </MenuItem>
          {props.types.map((talent, index)=>(
              <MenuItem value={talent} key={index}>
                {talent.split('_')[0]}
              </MenuItem>
          ))}
        </Select>
        <FormHelperText>Performance Factors</FormHelperText>
      </FormControl>
    </div>
  );
}
