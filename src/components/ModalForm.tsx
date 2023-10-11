import React, { useState } from "react";
import { Button, Center, Modal } from "native-base";
import AddForm from "./AddForm";

const ModalForm = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
      <Modal.Content maxWidth="450">
        <Modal.CloseButton />
        <Modal.Header>Add Account</Modal.Header>
        <Modal.Body padding={0}>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalForm;
