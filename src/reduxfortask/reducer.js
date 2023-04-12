//initial values
let initVal= { tasks : [{id:"1",tname:"pavan",addedOn:new Date().toLocaleString()}] }

let Reducer = (state = initVal , action)=>{
    switch(action.type)
    {
        case "add_new" : return{  ...state , tasks : [...state.tasks , action.payload]};
        case "delete" : return { ...state , tasks : state.tasks.filter(task=>task.id!==action.payload) }   
        case "update" :return { ...state , tasks : action.payload}
        default : return state;
    }
}
export default Reducer;