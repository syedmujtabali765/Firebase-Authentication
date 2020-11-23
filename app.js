
// sign up with firebase Authentication...

const signup = () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value.trim() || password.value.trim()) {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then((user) => {
        alert(`${email.value} Signed up successfully...`);
        email.value = '';
        password.value = '';
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
        email.value = '';
        password.value = '';
      });
  }
}

// login with firebase Authentication...
const login = () => {
  const passwordLogin = document.getElementById('passwordLogin');
  const emailLogin = document.getElementById('emailLogin');
  if (emailLogin.value.trim() || passwordLogin.value.trim()) {
    firebase.auth().signInWithEmailAndPassword(emailLogin.value, passwordLogin.value)
      .then((user) => {
        alert(`${emailLogin.value} Login successfull...`);
        emailLogin.value = '';
        passwordLogin.value = '';

      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
        emailLogin.value = '';
        passwordLogin.value = '';
      });
  }
}