import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import InUp from '../../components/inUp/InUp'
import Logo from '../../components/logo/Logo'
import { ContainerLoginStyles, FormSingInUp } from '../../components/inUp/InUpStyled'
import axios from 'axios'
import { useContext, useState } from 'react'
import UserContext from '../../contexts/UserContext'

export default function SingIn() {

    const [email, setEmail] = useState("")
    const [password, setPessword] = useState("")
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext);

    function sendLogin(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = { email, password }
        axios.post(URL, body)
            .then(res => {
                const userData = {
                    token: res.data.token,
                    name: res.data.name,
                    image: res.data.name

                };
                setUser(userData);
                localStorage.setItem("token", res.data.token);
                navigate(`/habitos`);
            })
            .catch(err => console.log(err.response?.data));
    }
    return (
        <>
            <ContainerLoginStyles>
                <Logo />

                <FormSingInUp onSubmit={sendLogin}>
                    <Input
                        type="email"
                        placeholder="email"
                        autoComplete="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />

                    <Input
                        type="password"
                        placeholder="senha"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPessword(e.target.value)}
                        required />
                    <Button>Entrar</Button>
                </FormSingInUp>

                <InUp>
                    <Link to={`/cadastro`}>
                        Não tem uma conta? Cadastre-se!
                    </Link>
                </InUp>

            </ContainerLoginStyles>
        </>
    )
}