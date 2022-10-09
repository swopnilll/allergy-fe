import { Outlet } from "react-router-dom"

const AuthenticationPage = () => {
  return (
    <div className="authentication-page" style={{
      backgroundImage: "url(/images/auth-bg.jpg)",
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%'
    }}>
      <div className="authentication-outlet">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthenticationPage