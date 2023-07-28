const Rating = ({isRated}) => {
    return ( 
        <>
            <i className={ isRated ? "bi bi-star-fill":null } ></i>
        </>
     );
}
 
export default Rating;