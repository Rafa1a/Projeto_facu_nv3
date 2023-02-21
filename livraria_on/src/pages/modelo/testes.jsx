import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function IndexPage() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <h1>Meu site Next.js com Bootstrap</h1>

      <Button variant="primary" onClick={handleShowModal}>
        Abrir modal
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Exemplo de modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Este é um exemplo de modal do Bootstrap.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}