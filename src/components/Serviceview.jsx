const Serviceview = (props) => {
    return ( 
        <tr>
            <td> {props.title} </td>
            <td> {props.service}</td>
            <td> ${props.price}</td>
        </tr>
     );
}
 
export default Serviceview;