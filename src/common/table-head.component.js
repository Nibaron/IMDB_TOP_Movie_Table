const TableHead = ({columns, sortColumn, onSort}) => {
    
    const handleSort= ({ sortable, path }) =>{
        if( !sortable) return;
        
        if( sortColumn.path === path ) 
        {
            if(sortColumn.order === 'asc')
                onSort({path: path, order:'desc'});
            else
            onSort({path: path, order:'asc'});
        } 
        else
        {
            onSort({ path: path, order:'asc' });
        }
    }

    return ( 
            <thead className='table-info'>
                <tr>
                   { 
                    columns.map( column => {
                            return ( 
                                <th scope="col" onClick={ () => handleSort(column)}>
                                    {column.label}
                                    {
                                        sortColumn.path === column.path ? (
                                            sortColumn.order === 'asc' ? (
                                                <i className="bi bi-sort-down"></i>
                                            ) : (
                                                <i className="bi bi-sort-down-alt"></i>
                                            )
                                        ) : 
                                        null 

                                    }
                                </th>
                            );
                        })
                    }
                </tr>
            </thead>
     );
}
 
export default TableHead;