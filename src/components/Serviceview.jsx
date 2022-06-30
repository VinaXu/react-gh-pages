const Serviceview = (props) => {
    return ( 
        <tr>
            <td> All </td>
            <td> {props.service}</td>
            <td> ${props.price}</td>
        </tr>
     );
}
 
export default Serviceview;