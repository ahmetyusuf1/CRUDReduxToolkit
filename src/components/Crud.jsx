import { useState } from "react";
import { Stack, Table, ButtonGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "./FormModal";
import { deleteTask } from "../redux/slices/crudSlice";

const Crud = () => {
  const themeState = useSelector((store) => store.themeSlice);
  const crudState = useSelector((store) => store.crudSlice);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="p-4">
      <Stack direction="horizontal" className="justify-content-end" gap={3}>
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="primary"
          className="mb-2"
        >
          New Task
        </Button>
      </Stack>

      <FormModal
        isModalOpen={isModalOpen}
        editItem={editItem}
        close={() => {
          setIsModalOpen(false);
          setEditItem(null);
        }}
      />

      <Table
        bordered
        responsive
        variant={themeState.isLightTheme ? "light" : "dark"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Assigned To</th>
            <th>End Date</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {crudState.tasks.map((task, i) => {
            const { id, title, description, author, assigned_to, end_date } =
              task;
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{author}</td>
                <td>{assigned_to}</td>
                <td>{end_date}</td>
                <td>
                  <ButtonGroup size="sm">
                    <Button
                      onClick={() => {
                        setEditItem(task);
                        setIsModalOpen(true);
                      }}
                      variant="warning"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteTask(id))}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Crud;
