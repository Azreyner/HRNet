import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";

function TableEmploye() {
  const state = useSelector((state) => state.employees);

  const [data, setData] = useState(state);

  const columns = [
    {
      header: "ID",
      accessor: "id",
    },
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

  const lesColonnes = useMemo(() => columns, []);
  //const data = useMemo(() => state, []);

  const tableInstance = useTable({
    lesColonnes,
    data: data,
  });

  console.log(tableInstance);

  //const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //tableInstance;

  return (
    <div>
      {/*<table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((colonnes) => (
                <th {...colonnes.getHeaderProps()}>
                  {colonnes.render("header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
              */}
    </div>
  );
}

export default TableEmploye;
