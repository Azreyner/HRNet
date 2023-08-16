import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import MOCK_DATA from "../assets/MOCK_DATA.json";

import "../style/component/tableEmploye.scss";
import GlobalFilter from "./GlobalFilter";

function TableEmploye() {
  const leState = useSelector((state) => state.employees);

  //const [data, setData] = useState(state);

  const collonnes = [
    {
      header: "First Name",
      accessor: "firstName",
    },
    {
      header: "Last Name",
      accessor: "lastName",
    },
    {
      header: "Street",
      accessor: "street",
    },
    {
      header: "City",
      accessor: "city",
    },
    {
      header: "Zip Code",
      accessor: "zipCode",
    },
    {
      header: "Birth Date",
      accessor: "birthDate",
    },
    {
      header: "Start Date",
      accessor: "startDate",
    },
    {
      header: "Department",
      accessor: "department",
    },
    {
      header: "State",
      accessor: "state",
    },
  ];

  const columns = useMemo(() => collonnes, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: leState,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  //console.log(tableInstance);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <div>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((colonnes) => (
                <th
                  {...colonnes.getHeaderProps(colonnes.getSortByToggleProps())}
                >
                  {colonnes.render("header")}
                  <span>
                    {colonnes.isSorted
                      ? colonnes.isSortedDesc
                        ? " ⬇️"
                        : " ⬆️"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="boutonsPage">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Précédent
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Suivant
        </button>
      </div>
    </div>
  );
}

export default TableEmploye;
