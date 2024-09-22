import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import InUp from '../../components/inUp/InUp'
import Logo from '../../components/logo/Logo'
import { ContainerLoginStyles, FormSingInUp } from '../../components/inUp/InUpStyled'
import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import UserContext from '../../contexts/UserContext'
import { ThreeDots } from 'react-loader-spinner'

export default function SingIn() {

    const [email, setEmail] = useState("")
    const [password, setPessword] = useState("")
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext);
    const [loading, setLoadings] = useState(false)


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userObject = JSON.parse(storedUser);
            if (userObject.token) {
                setUser(userObject);
                navigate('/habitos');
            }
        }
    }, [navigate, setUser]);

    function sendLogin(e) {
        setLoadings(true)
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = { email, password }
        axios.post(URL, body)
            .then(res => {
                const userData = {
                    token: res.data.token,
                    name: res.data.name,
                    image: res.data.image

                };
                setUser(userData);
                localStorage.setItem("user", JSON.stringify(userData))
                setLoadings(false)
                navigate(`/habitos`);
            })
            .catch(err => {
                console.error(err.response?.data)
                setLoadings(false)
                alert(err)
            });
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
                        required
                        disabled={loading} />

                    <Input
                        type="password"
                        placeholder="senha"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPessword(e.target.value)}
                        required
                        disabled={loading} />

                    <Button>
                        {
                            !loading ? "Entrar"
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
                    <Link to={`/cadastro`}>
                        Não tem uma conta? Cadastre-se!
                    </Link>
                </InUp>

            </ContainerLoginStyles>
        </>
    )
}