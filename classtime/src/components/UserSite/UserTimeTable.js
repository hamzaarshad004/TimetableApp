import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Drawer from "./UserDashboard";
import MUIDataTable from "mui-datatables";
//import { Icon, IconButton } from "@material-ui/core";
//import { ClearOutlined } from "@material-ui/icons";
//import Link from "@material-ui/core/Link";

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
}));

const UserTimeTable = (props) => {
  const { TimeTableList } = props;
  const columnNames = [
    "Subject Name",
    "Day",
    "Start Time",
    "End Time",
    "Teacher",
    "Software Used",
  ];

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

  const data = [
    ["Chinese", "Monday", "12:00", "03:00", "Zhou Lin", "Microsoft Teams"],
    ["Chinese", "Monday", "12:00", "03:00", "Zhou Lin", "Microsoft Teams"],
    ["Chinese", "Monday", "12:00", "03:00", "Zhou Lin", "Microsoft Teams"],
    ["Chinese", "Monday", "12:00", "03:00", "Zhou Lin", "Microsoft Teams"],
    ["Chinese", "Monday", "12:00", "03:00", "Zhou Lin", "Microsoft Teams"],
    ["Chinese", "Monday", "12:00", "03:00", "Zhou Lin", "Microsoft Teams"],
  ];

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
