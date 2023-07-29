import TableBody from "./table-body.component";
import TableHead from "./table-head.component";

const Table = ({ movies, columns, sortColumn, onSort }) => {
    return (
        <>
            <table className="table table-striped table-bordered">
                <TableHead columns={columns} sortColumn={sortColumn} onSort={onSort}/>
                <TableBody movies={movies} columns={columns} />
            </table>
        </>
    );
}
 
export default Table;