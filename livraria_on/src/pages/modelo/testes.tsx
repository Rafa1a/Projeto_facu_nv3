import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Abrir modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Exemplo de modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Aqui você pode adicionar qualquer conteúdo que desejar.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar mudanças
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
