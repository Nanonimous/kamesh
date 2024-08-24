import { LoginForm } from './LoginForm.jsx';
import { GreenBall } from './GreenBall.jsx';
import '../styles/LoginPage.css'

export function LoginPage(){
  return(
    <>
    <GreenBall top={-100} left={-100}/>
    <GreenBall top={-100} right={-100} />
    <GreenBall bottom={-150} left={-50}/>
    <GreenBall bottom={-150} right={-50}/>
    <LoginForm />
    </>
  )
}