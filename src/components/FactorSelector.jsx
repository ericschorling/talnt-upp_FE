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

export default function FactorSelector() {
  const classes = useStyles();
  const [talent, setTalent] = useState('');
  const [value, dispatch] = useContext(StateContext)
  const {talentCategories} = value

  const handleChange = (event) => {
    setTalent(event.target.value);
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
          value={talent}
          onChange={(e)=>handleChange(e)}
          displayEmpty
          className={classes.selectEmpty}
        >

          <MenuItem disabled value="">
            <em>--</em>
          </MenuItem>
          {talentCategories.map((talent, index)=>(
              <MenuItem value={talent} key={index}>{talent}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Performance Factors</FormHelperText>
      </FormControl>
    </div>
  );
}
