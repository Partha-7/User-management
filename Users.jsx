import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import UserAddingForm from "./UserAddingForm";
import { Button } from "react-bootstrap";
import UserList from "./UserList";

function Users() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <UserList />

      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserAddingForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Users;
