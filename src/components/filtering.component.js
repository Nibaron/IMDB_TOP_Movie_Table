const Filtering = ({items , activeItem, onFilterClick}) => {
    return ( 
        <div className='col-lg-2'>
            <ul className='list-group'>
                {
                    items.map((item) =>{
                        return (
                            <li
                                onClick={() => onFilterClick(item)}
                                
                                className ={ activeItem === item ? 'list-group-item active' : 'list-group-item'}
                                
                            >
                                {item}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
     );
}
 
export default Filtering;