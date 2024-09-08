import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import InUp from '../../components/inUp/InUp'
import Logo from '../../components/logo/Logo'
import { ContainerLoginStyles, FormSingInUp } from '../../components/inUp/InUpStyled'

export default function SingIn() {

    function createAccount() {
        e.preventDefault()
    }
    return (
        <>
            <ContainerLoginStyles>
                <Logo />

                <FormSingInUp onSubmit={createAccount}>
                    <Input
                        type="email"
                        placeholder="email"
                        autoComplete="email" />
                    <Input
                        type="password"
                        placeholder="senha"
                        autoComplete="current-password" />
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