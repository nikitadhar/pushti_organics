import React from 'react';
 
import { BsSearch,BsPerson,BsHandbag } from "react-icons/bs";
import "./header.css"

export default function Header() {
  return (
     <>
    <div className='header'>

<div className='header_head_container'>
<div className='header_search_container'> < BsSearch className='header_search_icon'/> </div>
  <div className='header_heading_container'> <h3 className='header_heading3'>Pushti Organics</h3></div>
 
  <div className='header_shopping_icon_container'> <BsPerson className='header_shopping_icon'/>   <BsHandbag className='header_shopping_icon'/> </div>
</div>
<div className='header_list_container'>
<ul>
  <li>Home</li>
  <li>Shop By Category</li>
  <li>About</li>
  <li>Contact Us</li>
  <li>Blogs</li>
  <li>Gift To Someone</li>
  <li>FAQS</li>
</ul>
</div>

    </div>
     
     </>
  )
}
