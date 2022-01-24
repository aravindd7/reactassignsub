import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function CartModal() {
  const [show,setShow] = useState(false);

  const handleClose = () => {setShow(false)};
  const handleShow = () => {setShow(true)};

  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
         

      </Modal>
    </>
};