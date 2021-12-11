// import React, { useEffect } from "react";
// import useStorage from "../../hooks/useStorage";
// import { motion } from "framer-motion";
// import { Form, Card, FormGroup } from "react-bootstrap";
// import "./ProgressBar.css";

// const FillingOut = () => {

//   //remove progress bar after finish uplading
//   useEffect(() => {
//     if (url) {
//       setFile(null);
//     }
//   }, [url, setFile, description]);

//   return (
//     <Card>
//       <Form>
//         <FormGroup>
//           <Form.Label for="Text">Title</Form.Label>
//           <Form.Control
//             placeholder="Enter Firstname"
//             required
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             class="form-control"
//             id="exampleFormControlTextarea1"
//           ></Form.Control>
//         </FormGroup>
//         <FormGroup>
//           <label for="Text">Description</label>
//           <textarea
//             placeholder="Place a quote that will remind you why you work so hard"
//             required
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             class="form-control"
//             id="exampleFormControlTextarea1"
//             rows="3"
//           ></textarea>
//         </FormGroup>
//       </Form>
//     </Card>
//   );
// };

// export default FillingOut;
