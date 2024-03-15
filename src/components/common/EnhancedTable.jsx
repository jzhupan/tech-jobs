import MUIDataTable from "mui-datatables";
import jsondata from "../../data/companies.json";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

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
      sort: true,
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
      sort: true,
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
    name: "remote_option",
    label: "Remote Option",
    options: {
      filter: true,
      sort: true,
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
      sort: true,
    },
  },
  {
    name: "talent_pool",
    label: "Talent Pool",
    options: {
      filter: true,
      sort: true,
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
      sort: true,
      customBodyRender: (value) => {
        return value ? (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        ) : (
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ color: "grey" }}
            aria-disabled="true"
          />
        );
      },
    },
  },
  {
    name: "female_ceo",
    label: "Female CEO",
    options: {
      filter: true,
      sort: true,
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
      sort: true,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
      sort: true,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
      sort: true,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
      sort: true,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
      sort: true,
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
        title={"Companies"}
        data={jsondata}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default EnhancedTable;
