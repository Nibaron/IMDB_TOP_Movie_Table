const TableHead = ({columns}) => {
    return ( 
            <thead className='table-info'>
                <tr>
                   { 
                    columns.map( column => {
                            return ( 
                                <th scope="col">{column.label}</th>
                            );
                        })
                    }
                </tr>
            </thead>
     );
}
 
export default TableHead;