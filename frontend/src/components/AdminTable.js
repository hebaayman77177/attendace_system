import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

function AdminTable({ columns, products }) {
  console.log("🚀 ~ file: AdminTable.js ~ line 7 ~ AdminTable ~ products", products)
  console.log("🚀 ~ file: AdminTable.js ~ line 7 ~ AdminTable ~ columns", columns)

  // products = [
  //   { user_id: 1, name: 'George', animal: 'Monkey' },
  //   { user_id: 2, name: 'Jeffrey', animal: 'Giraffe' },
  //   { user_id: 3, name: 'Alice', animal: 'Giraffe' },
  //   { user_id: 4, name: 'Foster', animal: 'Tiger' },
  //   { user_id: 5, name: 'Tracy', animal: 'Bear' },
  //   { user_id: 6, name: 'Joesph', animal: 'Lion' },
  //   { user_id: 7, name: 'Tania', animal: 'Deer' },
  //   { user_id: 8, name: 'Chelsea', animal: 'Tiger' },
  //   { user_id: 9, name: 'Benedict', animal: 'Tiger' },
  //   { user_id: 10, name: 'Chadd', animal: 'Lion' },
  //   { user_id: 11, name: 'Delphine', animal: 'Deer' },
  //   { user_id: 12, name: 'Elinore', animal: 'Bear' },
  //   { user_id: 13, name: 'Stokes', animal: 'Tiger' },
  //   { user_id: 14, name: 'Tamara', animal: 'Lion' },
  //   { user_id: 15, name: 'Zackery', animal: 'Bear' }
  // ];
  // products = [{ user_id: 1, attendance_count: "3", late_count: "2", first_name: "heba9", last_name: "ayman" },
  // { user_id: 2, attendance_count: "3", late_count: "2", first_name: "heba9", last_name: "ayman" },
  // { user_id: 3, attendance_count: "3", late_count: "2", first_name: "heba9", last_name: "ayman" },
  // { user_id: 4, attendance_count: "3", late_count: "2", first_name: "heba9", last_name: "ayman" },
  // { user_id: 5, attendance_count: "3", late_count: "2", first_name: "heba9", last_name: "ayman" },
  // { user_id: 6, attendance_count: "3", late_count: "2", first_name: "heba9", last_name: "ayman" },
  // { user_id: 7, attendance_count: "3", late_count: "2", first_name: "heba9", last_name: "ayman" },
  // { user_id: 8, attendance_count: "3", late_count: "2", first_name: "heba9", last_name: "ayman" },
  // { user_id: 9, attendance_count: "3", late_count: "2", first_name: "heba9", last_name: "ayman" },
  // ]
  // console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
  // console.log("🚀 ~ file: AdminTable.js ~ line 11 ~ AdminTable ~ products", products)

  // columns = [
  //   { dataField: 'user_id', text: 'Id', sort: true },
  //   { dataField: 'name', text: 'Name', sort: true },
  //   { dataField: 'animal', text: 'Animal', sort: true }
  // ];
  // columns = [{ dataField: "user_id", text: "user_id", sort: true }
  //   , { dataField: "attendance_count", text: "attendance_count", sort: true }
  //   , { dataField: "late_count", text: "late_count", sort: true }
  //   , { dataField: "first_name", text: "first_name", sort: true }
  //   , { dataField: "last_name", text: "last_name", sort: true }]
  // console.log("🚀 ~ file: AdminTable.js ~ line 29 ~ AdminTable ~ columns", columns)

  const defaultSorted = [{
    dataField: 'user_id',
    order: 'desc'
  }];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  const { SearchBar, ClearSearchButton } = Search;

  return (
    <div className="App">
      <h5>React Bootstrap Table Next with Sorting, Pagination and Search</h5>

      <ToolkitProvider
        bootstrap4
        keyField='user_id'
        data={products}
        columns={columns}
        search
      >
        {
          props => (
            <div>
              <h6>Input something at below input field:</h6>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <BootstrapTable
                defaultSorted={defaultSorted}
                pagination={pagination}
                {...props.baseProps}
              />
            </div>
          )
        }
      </ToolkitProvider>

    </div>
  );
}

export default AdminTable;