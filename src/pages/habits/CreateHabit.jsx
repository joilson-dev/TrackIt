import axios from "axios";

export default function createHabit(habitName, selectedDays, token) {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const body = {
        name: habitName,
        days: selectedDays
    };

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    axios.post(URL, body, config)
        .then(res => {
        })
        .catch(err => {
            console.error("Erro ao criar o hábito:", err.response?.data);
        });
}
