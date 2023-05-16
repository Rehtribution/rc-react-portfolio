// import React, { useState } from "react";
// import { validateEmail } from "../../utils/helpers";
// import "./contact.css";

// const Contact = () => {

//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       // console.log('Submit Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage("Your email is invalid.");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       // console.log('Handle Form', formState);
//     }
//   };

//   return (
//     <section id="contact">
//       <h1>Contact me</h1>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             defaultValue={name}
//             onBlur={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             defaultValue={email}
//             onBlur={handleChange}
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="5"
//             defaultValue={message}
//             onBlur={handleChange}
//           />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <button className="btn" type="submit">
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
