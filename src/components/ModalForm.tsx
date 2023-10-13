import React from "react";
import { Modal } from "native-base";
import AddForm from "./AddForm";
import { type SectionData } from "../types/type";

const ModalForm = ({
  modalVisible,
  setModalVisible,
  onSave,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: React.Dispatch<React.SetStateAction<[] | SectionData>>;
}) => {
  return (
    <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
      <Modal.Content maxWidth="450">
        <Modal.CloseButton />
        <Modal.Header>Add Account</Modal.Header>
        <Modal.Body padding={0} marginBottom={5}>
          <AddForm onCloseModal={setModalVisible} onUpdateData={onSave} />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ModalForm;
