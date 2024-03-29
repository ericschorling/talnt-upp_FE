import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button'
import { StateContext } from '../context';
import CoachingModal from './CoachingModal'
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import DescriptionIcon from '@material-ui/icons/Description';



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Full Name' },
  { id: 'department', numeric: false, disablePadding: false, label: 'Department' },
  { id: 'productivity', numeric: false, disablePadding: false, label: 'Productivity' },
  { id: 'quality', numeric: false, disablePadding: false, label: 'Quality' },
  { id: 'coaching', numeric: false, disablePadding: false, label: 'Coachings' },
  { id: 'step', numeric: false, disablePadding: false, label: 'Step' },
  { id: 'recognition', numeric: false, disablePadding: false, label: 'Recognitions' },
  { id: 'view', numeric: true, disablePadding: false, label: 'TM view' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all team members' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));
let itsdense = false
const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const [value] = useContext(StateContext)
  const [dense, setDense] = React.useState(false);
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
    itsdense = event.target.checked;
    console.log(itsdense)
  };
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {value?value.user.suporg[0]:null}
        </Typography>
        
      )}
        {/* These will need to have click events tied to them to get any actual changes. They refer to the delete and filter on the leader view */}
      
      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Shrink"
      />
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function LeaderView(props) {
  const [value, dispatch] = useContext(StateContext)
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([])
  function createData(name, tmNum, department, productivity, quality, coaching, step, recognition) {
    return { name, tmNum, department, productivity, quality, coaching, step, recognition };
  }
  const getNotes = async(id)=>{
    const response = await fetch(`${serverUrl}/api/notes/${id}`)
    const notes = await response.json()
    return notes
  }
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  let therows= [];
  let allNotes =[];

  const getRows = async () =>{
    const response = await fetch(`${serverUrl}/api/teammembers/${value.user.id}`, )
        const teammembers = await response.json()
        console.log(teammembers)
        for (let tm of teammembers){
            let coachingNotes=0;
            let recognitionNotes =0;
            let notes = await getNotes(tm.id)
            notes.forEach(note=>{
                if(note.notetype ==='Coaching'){
                    coachingNotes+=1
                }
                if(note.notetype === 'Recognition'){
                    recognitionNotes +=1
                }
            })
            therows = [...therows, 
                createData(tm.name, tm.id, tm.department, tm.productivity, tm.quality, coachingNotes, tm.step, recognitionNotes)]
            allNotes = [...allNotes, notes]
        }
        console.log(rows)
        console.log(therows)
        setRows(therows)
        
  }

  useEffect(()=>{
    getRows()
  },[ dispatch, setRows]);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number(event.target.value)?parseInt(event.target.value, 10):rows.length);
    setPage(0);
  };

  

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rows.length <= 5 ? 5- rows.length  : 0;

  return (
    <Container maxWidth="lg">
        <div>
            <h1>Leader View</h1>
            <h2>{`${value.user.name}'s ${value.user.team} Team`}</h2>
        </div>
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size={itsdense ? 'small' : 'medium'}
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                    classes={classes}
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                    />
                    <TableBody>
                    {stableSort(rows, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                        const isItemSelected = isSelected(row.name);
                        const labelId = `enhanced-table-checkbox-${index}`;
                        return (
                            <TableRow
                            hover
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.name}
                            selected={isItemSelected}
                            >
                            <TableCell padding="checkbox">
                                <Checkbox
                                onClick={(event) => handleClick(event, row.name)}
                                checked={isItemSelected}
                                inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </TableCell>
                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">
                              {row.department}
                            </TableCell>
                            <TableCell align="center">
                              {row.productivity}
                            </TableCell>
                            <TableCell align="center">
                              {row.quality}
                            </TableCell>
                            <TableCell align="center">
                                {row.coaching}
                                <CoachingModal updateRows={getRows} type='Coaching' button={'announcement'} tm={row.tmNum} />
                            </TableCell>
                            <TableCell align="left">
                              {row.step}
                              <Link to={`/step/${row.tmNum}`}>    
                                <IconButton>
                                  <DescriptionIcon />
                                </IconButton>
                              </Link>
                            </TableCell>
                            <TableCell align="center">
                                {row.recognition}
                                <CoachingModal updateRows={getRows}  type='Recognition' button={'announcement'} tm={row.tmNum} />
                            </TableCell>
                            <TableCell align="right">
                                <Link style={{textDecoration:"none"}} to={`/team/${row.name}`}>
                                  <Button 
                                      variant="contained" 
                                      color="primary" 
                                  >
                                      TM View 
                                  </Button>
                                </Link>
                            </TableCell>
                            
                            </TableRow>
                        );
                        })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: (itsdense ? 33 : 53) * emptyRows }}>
                        <TableCell colSpan={6} />
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50, {value:200,label:'All'}]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>        
    </Container>
  );
}

