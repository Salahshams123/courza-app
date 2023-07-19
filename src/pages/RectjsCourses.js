import React, { useState } from 'react'
import { HiOutlineMenuAlt3, HiStar } from 'react-icons/hi';
import { IoMdStarHalf } from 'react-icons/io';
import "../css/ReactjsCources.css"
import { Link } from 'react-router-dom';
import { Accordion} from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import card1 from "../images/card1.jpg"
import { SiPackagist } from 'react-icons/si';
const RectjsCourses = () => {
  const [showMenu2,setshowMenu2] = useState(true)

  const toggelmenu = ()=>{
    setshowMenu2(!showMenu2)
   }
   const hidemenu2 = ()=>{
    setshowMenu2(true)
   }


 const Data =[{
  "albumId": 1,
  "id": 1,
  "imeg": {card1},
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
  
},
{
  "albumId": 1,
  "id": 2,
  "imeg":"images/card1.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 3,
  "imeg":"images/card3.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 4,
  "imeg":"images/card4.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 5,
  "imeg":"images/card1.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 6,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 7,
  "imeg":"images/card3.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 8,
  "imeg":"images/card4.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 9,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 10,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 11,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 12,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 13,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 14,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 15,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 16,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 17,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 18,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 19,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 20,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 21,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 22,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 23,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 24,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 25,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 26,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 27,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 28,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 29,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 30,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 31,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 32,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 33,
  "imeg":"images/card3.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 34,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 35,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 36,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 37,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 38,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 39,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 40,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 1,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
  
},
{
  "albumId": 1,
  "id": 2,
  "imeg":"images/card1.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 3,
  "imeg":"images/card3.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 4,
  "imeg":"images/card4.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 5,
  "imeg":"images/card1.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 6,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 7,
  "imeg":"images/card3.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 8,
  "imeg":"images/card4.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 9,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 10,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 11,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 12,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 13,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 14,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 15,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 16,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 17,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 18,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 19,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 20,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 21,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 22,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 23,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 24,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 25,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 26,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 27,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 28,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 29,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 30,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 31,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 32,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 33,
  "imeg":"images/card3.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 34,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 35,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 36,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 37,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 38,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 39,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
{
  "albumId": 1,
  "id": 40,
  "imeg":"images/card2.jpg",
  "h2": "The complete 2023 web Development Bootcamp",
  "p": "Dr.Angela Yu",
  "price1": "E$266.9",
  "price2": " E$1,699.99"
},
]
const [curentPage , setcurentPage] = useState(1);
 
const recordsPerPage = 12;
 const lastIndex = curentPage * recordsPerPage ;
 const firstIndex = lastIndex - recordsPerPage ;
 const records = Data.slice(firstIndex,lastIndex);
const nPage = Math.ceil(Data.length/recordsPerPage);
const numbers = [...Array(nPage + 1).keys()].slice(1);

const nextPage = () => {
  if(curentPage !== nPage){
    setcurentPage(curentPage+1)
    }
}
const prevPage = () => {
 if(curentPage !== 1){
  setcurentPage(curentPage-1)
 }
}
const changePage = (id) => {
 setcurentPage(id)
}
  return (
   <>
   <section className='courceshead'>
     <div className='container'>
       <h2 className='h2'>4,432 results for “React”</h2>
     </div>
   </section>


   <section className='slider'>
   <div className='container'>
     
   </div>
 </section>


  {/**  <section className='dropdownfilter'>
    <div className='container'>
     <div className='row'>
      <div className='col-9 d-flex justify-content-between align-items-center flex-wrap'>
        <div > 
        <div className="dropdown drop dropfilter">
        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         <BiCategory className="text-dark" size={28}/>
          <span className='me-5 d-inline-block' style={{marginLeft:"10px"}}>Filter</span>
         </button>
          <ul className="dropdown-menu drop-menufilter " aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item "  href='1'>Arabic</a> </li>
          <li><a className="dropdown-item "  href='2'> English</a> </li>
          <li><a className="dropdown-item "  href='2'> Free</a></li>
          <li><a className="dropdown-item "  href='2'> Paid</a></li>
          </ul>
         </div>
        </div>
        <div className='sortby'>
        <div className="dropdown drop dropfilter">
        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         <BiCategory className="text-dark" size={28}/>
          <span className='me-5 d-inline-block' style={{marginLeft:"10px"}}>Sort by</span>
         </button>
          <ul className="dropdown-menu drop-menufilter " aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item "  href='1'>High Price</a> </li>
          <li><a className="dropdown-item "  href='1'>Low Price</a> </li>
          <li><a className="dropdown-item "  href='2'> Most Reviewed</a> </li>
          <li><a className="dropdown-item "  href='2'> Highest Rated</a></li>
          </ul>
         </div>
        </div>
      </div>
     </div>
     </div>
  </section>**/}
   <section>
    <div className='container'>
      <div className='row'>
      <diV className='col-12'>
      <div className=' d-flex '>
      <div>
       <div className={showMenu2 ? "filterition":"filershow"}>
       <div style={{textAlign:"center", marginTop:"10px"}} >
       <h2>Filter   <FaTimes size={22} color="black" onClick={hidemenu2} className='iconhide' /></h2>
       </div>
       <Accordion className='container m-0 p-3'>
                    
                        
       <Accordion.Item eventKey="0" className='mb-3'>
           <Accordion.Header>Ratings</Accordion.Header>
           <Accordion.Body>
                  <input type='checkbox' id='five' name='five' value="Five" className='inp'/>
                  <label for="five"><h4 className='h4'><HiStar/><HiStar/> <HiStar/> <HiStar/> <HiStar/>(5)</h4></label><br/>
                  <input type='checkbox' id='four' name='four' value="Four" className='inp'/>
                  <label for="four"><h4 className='h4'><HiStar/><HiStar/> <HiStar/> <HiStar/> <IoMdStarHalf/>(4.5)</h4></label><br/>
                  <input type='checkbox' id='three' name='three' value="Three" className='inp'/>
                  <label for="three"><h4 className='h4'><HiStar/><HiStar/> <HiStar/> <IoMdStarHalf/>(3.5)</h4></label><br/>
                  <input type='checkbox' id='tow' name='tow' value="Tow" className='inp'/>
                  <label for="tow"><h4 className='h4'><HiStar/><HiStar/> <IoMdStarHalf/>(2.5)</h4></label><br/>
           </Accordion.Body>
          
       </Accordion.Item>
       <Accordion.Item eventKey="1" className='mb-3'>
       <Accordion.Header>Level</Accordion.Header>
       <Accordion.Body>
       <input type='checkbox' id='all' name='all' value="All" className='inp'/>
       <label for="all"><h5 style={{marginLeft:"10px"}}>All Levels</h5></label><br/>
       <input type='checkbox' id='beginner' name='beginner' value="Beginner" className='inp'/>
       <label for="beginner"><h5 style={{marginLeft:"10px"}}>Begginer</h5></label><br/>
       <input type='checkbox' id='intermidate' name='intermidate' value="Intermidate" className='inp'/>
       <label for="intermidate"><h5 style={{marginLeft:"10px"}}>Intermidate</h5></label><br/>
       <input type='checkbox' id='expert' name='expert' value="expert" className='inp'/>
       <label for="expert"><h5 style={{marginLeft:"10px"}}>Expert</h5></label><br/>
       </Accordion.Body>
     
   </Accordion.Item>
   <Accordion.Item eventKey="2" className='mb-3'>
       <Accordion.Header>Price</Accordion.Header>
       <Accordion.Body>
       <input type='checkbox' id='paid' name='paid' value="Paid" className='inp'/>
       <label for="paid"><h5 style={{marginLeft:"10px"}}>Paid</h5></label><br/>
       <input type='checkbox' id='free' name='free' value="Free" className='inp'/>
       <label for="free"><h5 style={{marginLeft:"10px"}}>free</h5></label><br/>
               
          
           
       </Accordion.Body>
       
   </Accordion.Item>
 


</Accordion>
<div style={{textAlign:"center", marginTop:"10px"}} >
       <h2>Sort by</h2>
       </div>
       <div style={{marginLeft:"15px",marginTop:"20px"}}>
       <input type='checkbox' id='mp' name='mp' value="Mp" className='inp'/>
       <label for="mp"><h5 style={{marginLeft:"10px"}}>Most popular</h5></label><br/>
       <input type='checkbox' id='hr' name='hr' value="Hr" className='inp'/>
       <label for="hr"><h5 style={{marginLeft:"10px"}}>High Rate</h5></label><br/>
       <input type='checkbox' id='new' name='new' value="New" className='inp'/>
       <label for="new"><h5 style={{marginLeft:"10px"}}>Newest</h5></label><br/>
       </div>
       </div>
       <div className='icontoggel' onClick={toggelmenu}>
       <HiOutlineMenuAlt3 size={28} /> Filter
       </div>
      
       </div>
    
       <div>
       <div className='courses d-flex justify-content-between align-items-center flex-wrap  '>
         {records.map((d) =>(
          <div className='coursecard ' >
             <div className='imag'>
              <Link to={"/coursedetails"}><img src={card1} alt='course1' width={300} height={200}/></Link>
             </div>
            <div>
             <h2 className='h2cources'>{d.h2}</h2>
              <p className='p'>{d.p}</p>
              <h4 className='h4'>4.7 <HiStar/><HiStar/> <HiStar/> <HiStar/> <IoMdStarHalf/><span>(272.011)</span></h4>
             <h2 className='h2'>{d.price1} <span><del>{d.price2}</del></span></h2>
            
           </div>
         </div>
         ))}
       </div>
       </div>
       </div>
       </diV>
      </div>
      <div className='pagination1'>  
     <ul className='pagination'>
      <li className='page-item'>
        <span className='page-link' onClick={prevPage}  >perv</span>
      </li>
       {numbers.map((n) =>(
        <li className={`page-item ${curentPage === n ? 'active ' : ''} `} >
        <span className='page-link' onClick={()=> changePage(n)}  >{n}</span>
      </li>
       ))}
       <li className='page-item'>
       <span className='page-link' onClick={nextPage} >Next</span>
     </li>
     </ul>
    </div>
    </div>
   </section>
  
   </>
  )
}

export default RectjsCourses;