import {baseUrl} from "./baseUrl";
import axios from "axios";

// export const getAllUsers = () => axios.get(baseUrl + "developer");
// export const getUserById = (id) => axios.get(baseUrl + "developer/"+ id);


export const getAllUsers = () => axios.get(baseUrl + "/users");
export const getUserById = (id) => axios.get(baseUrl + "/user/"+ id);

export const registration = (createAccountData) =>
    axios.post(baseUrl + "developer",createAccountData);

export const deleteDeveloper = (id) =>
    axios.delete(baseUrl + "developer/"+id);
/////////////////////////////
export const getAllProjects = () => axios.get(baseUrl + "/projects");

export const getProjectById = (id) => axios.get(baseUrl + "project/"+ id);

export const registrationProject = (createProjectData) =>
    axios.post(baseUrl + "project",createProjectData);