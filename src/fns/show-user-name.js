function show_user_name({ user }) {
  document.body.innerHTML += `<p> ${user.displayName} 님 하이요</p> `
}

export default show_user_name
