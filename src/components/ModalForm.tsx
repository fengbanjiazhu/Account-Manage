import React from "react";
import { Modal } from "native-base";
import AddForm from "./AddForm";
import { type SectionData, AccountData } from "../types/type";

const ModalForm = ({
  modalVisible,
  setModalVisible,
  onSave,
  onEdit,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: React.Dispatch<React.SetStateAction<[] | SectionData>>;
  onEdit?: AccountData;
}) => {
  return (
    <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
      <Modal.Content maxWidth="450">
        <Modal.CloseButton />
        <Modal.Header>{onEdit ? "Edit Account" : "Add account"}</Modal.Header>
        <Modal.Body padding={0} marginBottom={5}>
          <AddForm onCloseModal={setModalVisible} onUpdateData={onSave} onEdit={onEdit} />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ModalForm;
