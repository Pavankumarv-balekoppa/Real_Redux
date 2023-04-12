const user = { username: "gunda", balance: 1000 }

const Reducer = (state = user, action) => {
    // return {...state}
    switch (action.type) {
        case "deposit": return { ...state, balance: state.balance + action.payload }
        case "withdraw": if (state.balance > 0) {
            return { ...state, balance: state.balance - action.payload }
        }
        else {
            alert('insufficient balance')
        }
        default: return { ...state }
    }
}
export default Reducer; 