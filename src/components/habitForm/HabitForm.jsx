import React, { useState } from "react";
import { ButtonsContainer, CancelButton, DayButton, DaysContainer, FormContainer, Input, SaveButton } from "./HabitFormStyled";

export default function HabitForm() {
    const [habitName, setHabitName] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    function toggleDay(dayIndex) {
        if (selectedDays.includes(dayIndex)) {
            setSelectedDays(selectedDays.filter((day) => day !== dayIndex));
        } else {
            setSelectedDays([...selectedDays, dayIndex]);
        }
    };

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
                <CancelButton>Cancelar</CancelButton>
                <SaveButton>Salvar</SaveButton>
            </ButtonsContainer>
        </FormContainer>
    );
};