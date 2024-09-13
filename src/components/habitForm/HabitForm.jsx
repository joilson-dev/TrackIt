import React, { useState, } from "react";
import axios from "axios";
import { ButtonsContainer, CancelButton, DayButton, DaysContainer, FormContainer, Input, SaveButton } from "./HabitFormStyled";

export default function HabitForm({ onCancel, onSave }) {
    const [habitName, setHabitName] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    console.log(user.token)

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];


    function toggleDay(dayIndex) {
        if (selectedDays.includes(dayIndex)) {
            setSelectedDays(selectedDays.filter((day) => day !== dayIndex));
        } else {
            setSelectedDays([...selectedDays, dayIndex]);
        }
    };

    function saveHabit() {
        if (habitName.trim() === "" || selectedDays.length === 0) {
            alert("Preencha o nome do hábito e selecione pelo menos um dia.");
            return;
        }
        console.log("entrou no savehabit");

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const body = {
            name: habitName,
            days: selectedDays
        };

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        axios.post(URL, body, config)
            .then((res) => {
                console.log("Hábito criado com sucesso:", res.data);
                onSave(res.data);
            })
            .catch((err) => {
                if (err.response) {
                    console.error("Erro ao criar o hábito:", err.response.data);
                } else {
                    console.error("Erro na requisição:", err.message);
                }
            });
    }


    return (
        <FormContainer>
            <Input
                type="text"
                placeholder="nome do hábito"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
            />
            <DaysContainer>
                {days.map((day, index) => (
                    <DayButton
                        key={index}
                        selected={selectedDays.includes(index)}
                        onClick={() => toggleDay(index)}
                    >
                        {day}
                    </DayButton>
                ))}
            </DaysContainer>
            <ButtonsContainer>
                <CancelButton onClick={onCancel}>Cancelar</CancelButton>
                <SaveButton onClick={saveHabit}>Salvar</SaveButton>
            </ButtonsContainer>
        </FormContainer>
    );
};
