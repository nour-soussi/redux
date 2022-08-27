import {ADD_TASK,UPDATE_TASK,DELETE_TASK,DONE_TASK} from"./Types.js"

export const addTask=(Task)=>{return {type:ADD_TASK, payload:Task};
};

export const deleteTask=(id)=>{return {type :DELETE_TASK , payload:id};
};

export const doneTask=(id)=>{return {type:DONE_TASK,payload:id};
};

export const updateTask=(id,text)=>{return {type:UPDATE_TASK,payload:{id,text}};
};