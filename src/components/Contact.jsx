import React from "react";
import SectionTitle from './SectionTitle';

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }



    return ( 
   
            <section className='py-20 align-element' id='contact'>
            <SectionTitle text='contact' />
            <form   netlify
            name="contact"   onSubmit={handleSubmit}> 
     
                <div> 
                   
                        <label for="Name" 
                               className="block my-2 text-left text-sm  
                               font-medium text-gray-900"> 
                         Name
                        </label> 
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border  
                               border-gray-300 text-gray-900  
                               text-sm rounded-lg block w-full p-2.5"
                               placeholder="Enter Name"
                               required
                               onChange={(e) => setName(e.target.value)}/> 
                    </div> 
                    
             
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"> 
                        Your email 
                    </label> 
                    <input type="email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           placeholder="Enter Email" 
                           required
                           onChange={(e) => setEmail(e.target.value)} /> 
                </div> 
                <div> 
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"> 
                        Subject 
                    </label> 
                    <input type="text" 
                           className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm "
                           
                           required /> 
                </div> 
                <div > 
                    <label for="message" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-gray-900 "> 
                        Your message 
                    </label> 
                    <textarea rows="6" 
                              className="block p-2.5 w-full text-sm  
                                         text-gray-900 bg-gray-50 rounded-lg  
                                         shadow-sm border border-gray-300 "
                                         onChange={(e) => setMessage(e.target.value)} 
                            /> 
                </div> 
                <button type="submit" 
                        className="mt-2 p-2 float-right text-white   
                                   rounded-lg border-green-600  
                                   bg-green-600 hover:scale-105"> 
                    Send message 
                </button> 
            </form> 
    
    
        </section>
    ) 
}