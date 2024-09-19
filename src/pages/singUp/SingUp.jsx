import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import InUp from '../../components/inUp/InUp'
import Logo from '../../components/logo/Logo'
import { ContainerLoginStyles, FormSingInUp } from '../../components/inUp/InUpStyled'
import { useState } from 'react'
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner'

export default function SingUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const [loading, setLoadings] = useState(false)

    function createAccount(e) {
        setLoadings(true)
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const body = { name, email, image, password }
        axios.post(URL, body)
            .then(() => {
                navigate("/")
                setLoadings(false)
            })
            .catch(err => {
                setLoadings(false)
                alert(err)
            });
    }

    return (
        <>
            <ContainerLoginStyles>
                <Logo />

                <FormSingInUp onSubmit={createAccount}>
                    <Input
                        type="email"
                        placeholder="email"
                        autoComplete="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        disabled={loading} />
                    <Input
                        type="password"
                        placeholder="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        disabled={loading} />
                    <Input
                        type="text"
                        placeholder="nome"
                        autoComplete="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        disabled={loading} />
                    <Input
                        type="url"
                        placeholder="foto"
                        autoComplete="current-password"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        required
                        disabled={loading} />
                    <Button>
                        {
                            !loading ? "Cadastrar"
                                : <ThreeDots
                                    visible={true}
                                    height="80"
                                    width="80"
                                    color="#ffffff"
                                    radius="9"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                        }
                    </Button>
                </FormSingInUp>

                <InUp>
                    <Link to={`/`}>
                        Já tem uma conta? Faça login!
                    </Link>
                </InUp>

            </ContainerLoginStyles>
        </>
    )
}