import axios from "axios";
const URI='http://localhost:2004'
const getStudent = () => axios.get(`${URI}/student/getstu`)
const addStudent = (student) => axios.post(`${URI}/student/addstu`,student)
// const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const editStudent = (stu_id,student)=>axios.put(`${URI}/student/updatestu/${stu_id}`,student)
const deleteStudent=(stu_id)=>axios.delete(`${URI}/student/delete/${stu_id}`)
const getContact = () => axios.get(`${URI}/getcon`)
const addContact = (Contact) => axios.post(`${URI}/addcon`,Contact)
// const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const editContact = (contact_id,Contact)=>axios.put(`${URI}/updatefeed/${contact_id}`,Contact)
const deleteContact=(contact_id)=>axios.delete(`${URI}/delete/${contact_id}`)

export {getStudent,addStudent,deleteStudent,editStudent,getContact,addContact,editContact,deleteContact}