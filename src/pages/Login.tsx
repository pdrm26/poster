export default function Login() {
  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    fetch("http://127.0.0.1:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    console.log(username, password);
  };

  return (
    <form onSubmit={handleForm}>
      <div>
        <label htmlFor="username">Usrname: </label>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
