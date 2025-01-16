import { getAllData,addDataToCollection,deleteDataById,updateDataById, getDataById } from "./general"



export const addEvent=async(data,department)=>{
    const res=await addDataToCollection(`TechEvents_${department}`,data);
    return res;
}


export const getAllTechnicalEvents=async(department)=>{
    const res=await getAllData(`TechEvents_${department}`);
    return res;
}

export const editTechnicalEvent=async(id,data,department)=>{
    const res=await updateDataById(`TechEvents_${department}`,id,data);
    return res;
}

export const deleteTechnicalEvent=async(id,department)=>{
    const res=await deleteDataById(`TechEvents_${department}`,id);
    return res;
}

export const getTechnicalEventById=async(department,id)=>{
    const res=await getDataById(`TechEvents_${department}`,id);
    return res;
}