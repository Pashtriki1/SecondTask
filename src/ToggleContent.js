
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCaretUpOutline } from "react-icons/io5";
import { isVisible } from '@testing-library/user-event/dist/utils';
import { IoIosArrowDropdownCircle } from "react-icons/io";




function ToggleContent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    
  };

  return (
    <div className='toggle-container'>
      <div className='Content'>
      <button  className='toggle-btn' onClick={toggleVisibility}>
        Why park a domain name in Parkname?
       <span> {isVisible  ? '▲' : '▼ '}</span>

      </button>
      {isVisible && (
        <div className='content'>
         
            

            
            <hr></hr>
          <p>
            Parkname is the leading industry standard for domain name parking
            and monetization services. We offer a wide variety of services to
            help you achieve success.
          </p>
          
        </div>
       
      )}
      
    </div>
    </div>
  );
  
}

export default ToggleContent;


