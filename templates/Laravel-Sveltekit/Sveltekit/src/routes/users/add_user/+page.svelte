<script lang="ts">
	import { goto } from "$app/navigation";
	import { createUser } from "./createUser";

    let name = '';
    let email = '';
    let password = '';

    async function handleFormSubmit(event: Event) {
    event.preventDefault();
    await createUser(name, email, password);
  }
  </script>
  
  <main>
    <h1>Add user</h1>
    <form on:submit|preventDefault={handleFormSubmit}>
      <label>
        Name: <input type="text" bind:value={name} />
      </label>
      <label>
        Email: <input type="email" bind:value={email} />
      </label>
      <label>
        Password: <input type="password" bind:value={password} />
      </label>
      <button type="submit">Register</button>
    </form>
  </main>
  