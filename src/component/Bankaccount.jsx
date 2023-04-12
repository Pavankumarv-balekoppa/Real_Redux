// import { useRef } from "react";
// import { connect } from "react-redux";
// const Bankaccount = ({user, deposit_amount, withdraw_amount}) => {
//     let dep = useRef();
//     let withdrawcash = useRef();

//     let diposite = () => {
//         deposit_amount(Number(dep.current.value))

//     }
//     let withdraw = () => {
//         withdraw_amount(Number(withdrawcash.current.value))
//     }

//     return (
//         <div className="bankaccount">
//             <h1>Username : {user.username}</h1>
//             <h3>Balance : {user.balance}</h3>
//             <fieldset style={{ width: 300, margin: "auto" }}>
//                 <legend>Deposite</legend>
//                 <input type="number" step="100" ref={dep} />
//                 <button onClick={diposite}>Deposite</button>
//             </fieldset><br />


//             <fieldset style={{ width: 300, margin: "auto" }}>
//                 <legend>withdraw</legend>
//                 <input type="number" step="100" ref={withdrawcash} />
//                 <button onClick={withdraw}>withdraw</button>
//             </fieldset>
//         </div>
//     );
// }

// //accept the values from the store file
// let mapStateToProps = (state) => {
//     return { user:state}
// }

// //perform some function like deposite the amount
// let mapDispatchToProps = (dispatch) => {
//     return {
//         deposit_amount: (dep) => {
//             dispatch({ type: "deposite", payload: dep })
//         },
//         withdraw_amount: (dep) => {
//             dispatch({ type: "withdraw", payload: dep })
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Bankaccount);
















import { useRef } from "react";
import { connect } from "react-redux";

const Bankaccount = ({user , deposit_amount , withdraw_amount}) => {

    let cash = useRef();
    let withdrawCash = useRef();

    let deposit = ()=>{
        deposit_amount( Number(cash.current.value) );
    }

    let withdraw = ()=>{
        withdraw_amount( Number(withdrawCash.current.value) )
    }

    return (
    <div>
        <h1>USERNAME : {user.username} </h1>
        <h2>Balance : {user.balance}</h2>
        <fieldset style={{width:"300px", margin:"auto"}}>
            <legend>Deposit Amount</legend>

            <input type="number" step="100" ref={cash}/>
            <button onClick={deposit}>deposit</button>
        </fieldset><br /><br />

        <fieldset style={{width:"300px", margin:"auto"}}>
            <legend>Withdraw Amount</legend>

            <input type="number" step="100" ref={withdrawCash}/>
            <button onClick={withdraw}>Withdraw</button>
        </fieldset>
    </div> );
}


let mapStateToProps = (state)=>{
    return {user : state};
}

let mapDispatchToProps = (dispatch)=>{
    return { 
        deposit_amount : 
        (cash)=>{ dispatch( {type : "deposit" , payload : cash})} ,

        withdraw_amount : 
        (cash)=>{ dispatch( {type : "withdraw" , payload : cash})}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Bankaccount);