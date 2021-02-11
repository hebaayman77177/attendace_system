// // src/components/basic.table.js
// import React from "react";
// import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from 'react-table'
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Define a default UI for filtering
// function GlobalFilter({
//     preGlobalFilteredRows,
//     globalFilter,
//     setGlobalFilter,
// }) {
//     const count = preGlobalFilteredRows.length
//     const [value, setValue] = React.useState(globalFilter)
//     const onChange = useAsyncDebounce(value => {
//         setGlobalFilter(value || undefined)
//     }, 200)

//     return (
//         <span>
//             Search:{' '}
//             <input
//                 className="form-control"
//                 value={value || ""}
//                 onChange={e => {
//                     setValue(e.target.value);
//                     onChange(e.target.value);
//                 }}
//                 placeholder={`${count} records...`}
//             />
//         </span>
//     )
// }

// function DefaultColumnFilter({
//     column: { filterValue, preFilteredRows, setFilter },
// }) {
//     const count = preFilteredRows.length

//     return (
//         <input
//             className="form-control"
//             value={filterValue || ''}
//             onChange={e => {
//                 setFilter(e.target.value || undefined)
//             }}
//             placeholder={`Search ${count} records...`}
//         />
//     )
// }



// function Table({ columns, data }) {

//     const defaultColumn = React.useMemo(
//         () => ({
//             // Default Filter UI
//             Filter: DefaultColumnFilter,
//         }),
//         []
//     )

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//         state,
//         preGlobalFilteredRows,
//         setGlobalFilter,
//         page,
//         canPreviousPage,
//         canNextPage,
//         pageOptions,
//         pageCount,
//         gotoPage,
//         nextPage,
//         previousPage,
//         setPageSize,
//         state: { pageIndex, pageSize },
//     } = useTable(
//         {
//             columns,
//             data,
//             defaultColumn,
//             initialState: { pageIndex: 2, pageSize: 5 },
//         },
//         useFilters,
//         useGlobalFilter,
//         useSortBy,
//         usePagination
//     )

//     return (
//         <div>
//             <pre>
//                 <code>
//                     {JSON.stringify(
//                         {
//                             pageIndex,
//                             pageSize,
//                             pageCount,
//                             canNextPage,
//                             canPreviousPage,
//                         },
//                         null,
//                         2
//                     )}
//                 </code>
//             </pre>
//             <GlobalFilter
//                 preGlobalFilteredRows={preGlobalFilteredRows}
//                 globalFilter={state.globalFilter}
//                 setGlobalFilter={setGlobalFilter}
//             />
//             <table className="table" {...getTableProps()}>
//                 <thead>
//                     {headerGroups.map(headerGroup => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map(column => (
//                                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                                     {column.render('Header')}
//                                     {/* Render the columns filter UI */}
//                                     <div>{column.canFilter ? column.render('Filter') : null}</div>
//                                     <span>
//                                         {column.isSorted
//                                             ? column.isSortedDesc
//                                                 ? ' 🔽'
//                                                 : ' 🔼'
//                                             : ''}
//                                     </span>
//                                 </th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {rows.map((row, i) => {
//                         prepareRow(row)
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map(cell => {
//                                     return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                 })}
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//             <br />
//             {/* <div>Showing the first 20 results of {rows.length} rows</div>
//             <div>
//                 <pre>
//                     <code>{JSON.stringify(state.filters, null, 2)}</code>
//                 </pre>
//             </div> */}

//             <ul className="pagination">
//                 <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//                     <a className="page-link">First</a>
//                 </li>
//                 <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
//                     <a className="page-link">{'<'}</a>
//                 </li>
//                 <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
//                     <a className="page-link">{'>'}</a>
//                 </li>
//                 <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//                     <a className="page-link">Last</a>
//                 </li>
//                 <li>
//                     <a className="page-link">
//                         Page{' '}
//                         <strong>
//                             {pageIndex + 1} of {pageOptions.length}
//                         </strong>{' '}
//                     </a>
//                 </li>
//                 <li>
//                     <a className="page-link">
//                         <input
//                             className="form-control"
//                             type="number"
//                             defaultValue={pageIndex + 1}
//                             onChange={e => {
//                                 const page = e.target.value ? Number(e.target.value) - 1 : 0
//                                 gotoPage(page)
//                             }}
//                             style={{ width: '100px', height: '20px' }}
//                         />
//                     </a>
//                 </li>{' '}
//                 <select
//                     className="form-control"
//                     value={pageSize}
//                     onChange={e => {
//                         setPageSize(Number(e.target.value))
//                     }}
//                     style={{ width: '120px', height: '38px' }}
//                 >
//                     {[5, 10, 20, 30, 40, 50].map(pageSize => (
//                         <option key={pageSize} value={pageSize}>
//                             Show {pageSize}
//                         </option>
//                     ))}
//                 </select>
//             </ul>
//         </div>
//     )
// }

// function AdminTable() {

//     const columns = React.useMemo(
//         () => [
//             {
//                 Header: 'Name',
//                 columns: [
//                     {
//                         Header: 'First Name',
//                         accessor: 'firstName',
//                     },
//                     {
//                         Header: 'Last Name',
//                         accessor: 'lastName'
//                     },
//                 ],
//             },
//             {
//                 Header: 'Info',
//                 columns: [
//                     {
//                         Header: 'Age',
//                         accessor: 'age'
//                     },
//                     {
//                         Header: 'Visits',
//                         accessor: 'visits'
//                     },
//                     {
//                         Header: 'Status',
//                         accessor: 'status'
//                     },
//                     {
//                         Header: 'Profile Progress',
//                         accessor: 'progress'
//                     },
//                 ],
//             },
//         ],
//         []
//     )

//     const data = [
//         {
//             "firstName": "horn-od926",
//             "lastName": "selection-gsykp",
//             "age": 22,
//             "visits": 20,
//             "progress": 39,
//             "status": "single"
//         },
//         {
//             "firstName": "heart-nff6w",
//             "lastName": "information-nyp92",
//             "age": 16,
//             "visits": 98,
//             "progress": 40,
//             "status": "complicated"
//         },
//         {
//             "firstName": "minute-yri12",
//             "lastName": "fairies-iutct",
//             "age": 7,
//             "visits": 77,
//             "progress": 39,
//             "status": "single"
//         },
//         {
//             "firstName": "degree-jx4h0",
//             "lastName": "man-u2y40",
//             "age": 27,
//             "visits": 54,
//             "progress": 92,
//             "status": "relationship"
//         },
//         {
//             "firstName": "horn-od926",
//             "lastName": "selection-gsykp",
//             "age": 22,
//             "visits": 20,
//             "progress": 39,
//             "status": "single"
//         },
//         {
//             "firstName": "heart-nff6w",
//             "lastName": "information-nyp92",
//             "age": 16,
//             "visits": 98,
//             "progress": 40,
//             "status": "complicated"
//         },
//         {
//             "firstName": "minute-yri12",
//             "lastName": "fairies-iutct",
//             "age": 7,
//             "visits": 77,
//             "progress": 39,
//             "status": "single"
//         },
//         {
//             "firstName": "degree-jx4h0",
//             "lastName": "man-u2y40",
//             "age": 27,
//             "visits": 54,
//             "progress": 92,
//             "status": "relationship"
//         }
//     ]

//     return (
//         <Table columns={columns} data={data} />
//     )
// }



// export default AdminTable;






















const _ = require("lodash");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

const moment = require('moment');
const db = require("../models");
const { getTime } = require('../utils');
const Attendance = db.attendance;
// const User = db.user;
const MonthInfo = db.month_info;
const StaticRule = db.static_rule;

exports.takeAttendance = async (req, res, next) => {

    const now = new Date();
    const attendanceDay = now.getDate();
    const attendanceMonth = now.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const attendanceYear = now.getFullYear();
    const attendanceHour = now.getHours();
    const attendanceMinute = now.getMinutes();
    const type = "attendance";
    const attendanceFullDate = now.toLocaleDateString()
    const attendanceFullTime = getTime(now);
    const attendanceFullDateTime = now.toLocaleString()

    let attendance = {
        user_id: req.currentUser.id,
        attendance_year: attendanceYear,
        attendance_month: attendanceMonth,
        attendance_day: attendanceDay,
        attendance_hour: attendanceHour,
        attendance_minute: attendanceMinute,
        type: type,
        attendance_full_date: attendanceFullDate,
        attendance_full_time: attendanceFullTime,
        attendance_full_date_time: attendanceFullDateTime,
    }

    attendance = await Attendance.create(attendance);
    attendance = _.pick(attendance, ['attendance_year', 'attendance_month', 'attendance_day', 'attendance_hour', 'attendance_minute', 'attendance_full_date', 'attendance_full_time', 'type']);

    return res.status(200).json({
        status: "success",
        data: { attendance }
    });

};

exports.DidAttendToday = async (req, res, next) => {

    const now = new Date();
    const attendanceFullDate = now.toLocaleDateString()
    const type = "attendance";
    let attendance = await Attendance.findOne({ where: { user_id: req.currentUser.id + "", attendance_full_date: attendanceFullDate, type } });
    attendance = _.pick(attendance, ['attendance_full_date', 'attendance_full_time']);
    const didAttend = _.isEmpty(attendance) ? false : true;

    return res.status(200).json({
        status: "success",
        data: {
            didAttend: didAttend,
            attendance
        }
    });
};

exports.UserMonthlyReport = async (req, res, next) => {

    const userId = req.currentUser.id;
    //get current month
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const { early_limit, late_limit } = await StaticRule.findOne();
    console.log("eeeeeeerrrrrrrlllllllllll", early_limit, late_limit);
    console.log(`${moment(early_limit).format('DD MM YYYY hh:mm:ss')}`)

    //get user attendance days for a given month 
    console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer")
    // let numAttendances = await Attendance.count({ where: { attendance_month: month, attendance_year: year, user_id: userId + "", attendance_full_time: { [Op.or]: { [Op.lt]: moment(early_limit).format("YYYY-MM-DD hh:mm:ss"),[Op.eg]: moment(early_limit).format("YYYY-MM-DD hh:mm:ss") } } } })
    // let numLate = await Attendance.count({ where: { attendance_month: month, attendance_year: year, user_id: userId + "", attendance_full_time: { [Op.lte]: moment(late_limit).format("YYYY-MM-DD hh:mm:ss") } } })
    console.log("numAttendances numAttendances numAttendances numAttendances", numAttendances);


    // console.log("numaaaaaaaaaaaaaaaaaaaaattttttttttt", numAttendances)
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeearly,late", numAttendances, numLate)
    // get user late days for a given month
    // get month info
    const { num_days, num_vacs } = await MonthInfo.findOne({ where: { year: year, month: month } })
    //return attendance days,

    // console.log('moooooooooooooooooiiiiiiiiiiiiiiiiiiii',num_days, num_vacs);
    const attendanceReport = {
        attendance: numAttendances,
        late: numLate - numAttendances,
        absense: num_days - num_vacs - numAttendances
    }

    return res.status(200).json({
        status: "success",
        data: attendanceReport
    });

};





// let numAttendances = await db.sequelize.query(`SELECT COUNT(*) FROM attendances WHERE attendance_month=${month} AND attendance_year=${year} AND user_id='${userId}' AND attendance_full_time<='${moment(early_limit).format("YYYY-MM-DD hh:mm:ss")}'`, { type: sequelize.QueryTypes.SELECT });
    // let numLate = await db.sequelize.query(`SELECT COUNT(*) FROM attendances WHERE attendance_month=${month} AND attendance_year=${year} AND user_id='${userId}' AND attendance_full_time<='${moment(late_limit).format("YYYY-MM-DD hh:mm:ss")}'`, { type: sequelize.QueryTypes.SELECT });
