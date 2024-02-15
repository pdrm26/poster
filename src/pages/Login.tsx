export default function Login() {
  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  };

  return (
    <form onSubmit={handleForm} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="username">Usrname: </label>
        <input
          type="text"
          name="username"
          id="username"
          className="bg-slate-400/45 rounded-sm outline-none text-lg p-1"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-slate-400/45 rounded-sm outline-none text-lg p-1"
        />
      </div>
      <button
        type="submit"
        className="py-2 px-4 rounded-md bg-slate-400 w-full"
      >
        Submit
      </button>
    </form>
  );
}
