import React from "react";
import { Modal } from "native-base";
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
        <Modal.Body padding={0} marginBottom={5}>
          <AddForm onCloseModal={setModalVisible} />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ModalForm;
