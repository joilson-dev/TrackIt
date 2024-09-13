import React, { useState, } from "react";
import axios from "axios";
import { ButtonsContainer, CancelButton, DayButton, DaysContainer, FormContainer, Input, SaveButton } from "./HabitFormStyled";
import { ThreeDots } from "react-loader-spinner";

export default function HabitForm({ onCancel, onSave }) {
    const [habitName, setHabitName] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const [loading, setLoadings] = useState(false)


    const days = ["D", "S", "T", "Q", "Q", "S", "S"];


    function toggleDay(dayIndex) {
        if (selectedDays.includes(dayIndex)) {
            setSelectedDays(selectedDays.filter((day) => day !== dayIndex));
        } else {
            setSelectedDays([...selectedDays, dayIndex]);
        }
    };

    function saveHabit() {
        if (loading) return;
        setLoadings(true)
        if (habitName.trim() === "" || selectedDays.length === 0) {
            alert("Preencha o nome do hábito e selecione pelo menos um dia.");
            setLoadings(false);
            return;
        }

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
                onSave(res.data);
                setLoadings(false)
            })
            .catch((err) => {
                if (err.response) {
                    console.error("Erro ao criar o hábito:", err.response.data);
                    setLoadings(false)
                } else {
                    console.error("Erro na requisição:", err.message);
                    setLoadings(false)
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
                disabled={loading}
            />
            <DaysContainer>
                {days.map((day, index) => (
                    <DayButton
                        key={index}
                        selected={selectedDays.includes(index)}
                        onClick={() => toggleDay(index)}
                        disabled={loading}
                    >
                        {day}
                    </DayButton>
                ))}
            </DaysContainer>
            <ButtonsContainer>
                <CancelButton onClick={onCancel}>Cancelar</CancelButton>
                <SaveButton onClick={saveHabit}>{loading ? (
                    <ThreeDots
                        height="13"
                        width="51"
                        color="#FFFFFF"
                        ariaLabel="loading-spinner"
                    />
                ) : "Salvar"}</SaveButton>
            </ButtonsContainer>
        </FormContainer>
    );
};
