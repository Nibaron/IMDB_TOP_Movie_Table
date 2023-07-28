const TableBody = ({movies:rows, columns}) => {
    return ( 
        <tbody>
            {  
               rows.map( row => {
                return(
                    <tr>
                        {
                            columns.map( column => {
                                return column.content( row[column.path]);
                            })
                        }
                    </tr>
                );
               }) 
            }
        </tbody>
     );
}
 
export default TableBody;