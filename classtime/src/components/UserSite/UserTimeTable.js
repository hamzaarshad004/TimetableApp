import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Drawer from "./UserDashboard";
import MUIDataTable from "mui-datatables";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import {
  MondayTimeTable,
  TuesdayTimeTable,
  WednesdayTimeTable,
  ThursdayTimeTable,
  FridayTimeTable,
} from "./TimeTableData";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  heroContent: {
    marginTop: theme.spacing(12),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: theme.spacing(2),
  },
}));

const UserTimeTable = (props) => {
  //const { TimeTableList } = props;
  const [Day, setDay] = React.useState(1);
  const [data, setData] = React.useState(MondayTimeTable);
  const columnNames = [
    "Subject Name",
    "Day",
    "Start Time",
    "End Time",
    "Teacher",
    "Software Used",
  ];

  function handleChange(event) {
    let value = event.target.value;
    setDay(event.target.value);
    switch (value) {
      case 1:
        setData(MondayTimeTable);
        break;
      case 2:
        setData(TuesdayTimeTable);
        break;
      case 3:
        setData(WednesdayTimeTable);
        break;
      case 4:
        setData(ThursdayTimeTable);
        break;
      case 5:
        setData(FridayTimeTable);
        break;
      default:
        break;
    }
  }

  const columns = columnNames.map((object) => ({
    name: object,
    options: {
      setCellHeaderProps: (value) => {
        return {
          style: { fontWeight: "bold" },
        };
      },
    },
  }));

  //   const data = companiesList.map(object => [
  //     object.companyName,
  //     object.contactNo,
  //     object.userName,
  //     object.email,
  //     object.companyId,
  //     <Link
  //       component="button"
  //       variant="body2"
  //       onClick={() => {
  //         props.showBranches(object.companyId);
  //       }}
  //     >
  //       View
  //     </Link>,
  //     <IconButton
  //       name="remove"
  //       onClick={() => {
  //         props.deleteCompany(object.companyId);
  //       }}
  //       //disabled={viewOnly}
  //     >
  //       <ClearOutlined />
  //     </IconButton>
  //   ]);

  const options = {
    selectableRowsOnClick: false,
    selectableRows: "none",
    responsive: "scrollMaxHeight",
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer />
      <main className={classes.content}>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Select Day</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Day}
                onChange={handleChange}
              >
                <MenuItem value={1}>Monday</MenuItem>
                <MenuItem value={2}>Tuesday</MenuItem>
                <MenuItem value={3}>Wednesday</MenuItem>
                <MenuItem value={4}>Thursday</MenuItem>
                <MenuItem value={5}>Friday</MenuItem>
              </Select>
            </FormControl>
            <MUIDataTable
              title={"Time Table"}
              data={data}
              columns={columns}
              options={options}
            />
          </Container>
        </div>
      </main>
    </div>
  );
};

export default UserTimeTable;
