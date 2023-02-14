export const IncNum = (num)=>{
    return{
        type : 'INCREMENT',
        payload : num
    }
}
export const DecNum = (num)=>{
    return{
        type : 'DECREMENT',
        payload : num
    }
}
