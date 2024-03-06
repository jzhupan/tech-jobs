import MUIDataTable from "mui-datatables";
import jsondata from "../../data/mock-up.json";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    name: "company_name",
    label: "Company Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "industry",
    label: "Industry",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "fortune_500",
    label: "Fortune 500",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return value ? (
          <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
        ) : (
          <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
        );
      },
    },
  },
  {
    name: "fortune_1000",
    label: "Fortune 1000",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return value ? (
          <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
        ) : (
          <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
        );
      },
    },
  },
  {
    name: "country_based",
    label: "Country Based",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "hiring_locations",
    label: "Hiring Locations",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        // Map each hiring location to a fragment containing the country, cities, and a line break
        return value.map((location, index) => (
          <React.Fragment key={index}>
            <strong>{location.country}</strong>: <br />{" "}
            {location.cities.join(", ")}
            <br />
            <br />
          </React.Fragment>
        ));
      },
    },
  },
  {
    name: "remote_option",
    label: "Remote Option",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return value ? (
          <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
        ) : (
          <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
        );
      },
    },
  },
  {
    name: "ats",
    label: "ATS",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "talent_pool",
    label: "Talent Pool",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return value ? (
          <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
        ) : (
          <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
        );
      },
    },
  },
  {
    name: "careers_url",
    label: "Careers URL",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        );
      },
    },
  },
  {
    name: "female_ceo",
    label: "Female CEO",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return value ? (
          <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
        ) : (
          <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
        );
      },
    },
  },
  {
    name: "employees_no",
    label: "Number of Employees",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "linked_in",
    label: "LinkedIn",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        );
      },
    },
  },
  {
    name: "twitter",
    label: "Twitter",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        );
      },
    },
  },
  {
    name: "facebook",
    label: "Facebook",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        );
      },
    },
  },
  {
    name: "youtube",
    label: "YouTube",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        );
      },
    },
  },
  {
    name: "discord",
    label: "Discord",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        );
      },
    },
  },
  {
    name: "last_updated",
    label: "Last Updated",
    options: {
      filter: false,
      sort: true,
    },
  },
];

const options = {
  filterType: "checkbox",
  responsive: "simple",
};

const EnhancedTable = () => {
  return (
    <>
      <MUIDataTable
        title={"Employee List"}
        data={jsondata}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default EnhancedTable;
