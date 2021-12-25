import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useAlert } from "react-alert";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");
    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    "A tarefa precisa de uma descrição para ser adicionada."
                );
            }
            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false,
            });

            await fetchTasks();

            setTask("");

            await alert.success("A tarefa foi adiciona com sucesso!");
        } catch (error) {}
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adcionar Tarefa"
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#fff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
