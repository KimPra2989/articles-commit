import login_with_Github from './fns/login-with-Github'
import show_user_name from './fns/show-user-name'

const login_button = document.getElementById('github-login')

login_button.addEventListener('click', async () => {
  const { user, access_token } = await login_with_Github()
  console.log('user', user)
  console.log('Access Token:', access_token)

  login_button.style.display = 'none'

  show_user_name({ user })
})
