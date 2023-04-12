import { connect } from "react-redux";
const Profile = (user) => {
    return ( 
        <div className="profile">
            <h1>Profile page</h1>
            <h1>{user.username} have the balance is {user.balance}</h1>
        </div>
     );
}
let mapStateToProps =(state)=>{
    return{...state}
}
 
export default connect(mapStateToProps)(Profile);