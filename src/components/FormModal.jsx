import { Form, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isModalOpen, close, editItem }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const task = Object.fromEntries(formData.entries());

    if (editItem) {
      dispatch(editTask({ ...task, id: editItem.id }));
    } else {
      dispatch(addTask(task));
    }

    close();
  };
  return (
    <Modal show={isModalOpen} onHide={close} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{editItem ? "Edit Task" : "Create New Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <Form.Group>
            <Form.Control
              defaultValue={editItem?.title}
              placeholder="Title"
              name="title"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              defaultValue={editItem?.description}
              as="textarea"
              placeholder="Description"
              rows={3}
              name="description"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              defaultValue={editItem?.author}
              placeholder="Your Name"
              name="author"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              placeholder="Assigned To"
              name="assigned_to"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              defaultValue={editItem?.end_date}
              type="date"
              placeholder="End Date"
              name="end_date"
              required
            />
          </Form.Group>
          <Stack direction="horizontal" className="justify-content-end" gap={2}>
            <Button onClick={close} variant="secondary" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {editItem ? "Save" : "Create"}
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
