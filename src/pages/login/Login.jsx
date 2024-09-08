import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import InUp from '../../components/inUp/InUp'
import Logo from '../../components/logo/Logo'
import { ContainerLoginStyles, FormSingInUp } from './LoginStyles'

export default function Login() {
    return (
        <>
            <ContainerLoginStyles>
                <Logo />

                <FormSingInUp>
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
                <InUp>Já tem uma conta? Faça login!</InUp>

            </ContainerLoginStyles>
        </>
    )
}