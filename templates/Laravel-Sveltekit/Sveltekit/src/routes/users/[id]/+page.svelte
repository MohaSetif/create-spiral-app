<script>
    import { page } from '$app/stores'
    export let data;
    const user = data.user
    const title = data.title
    const id = $page.params.id

    let name = '';
    let email = '';

    async function handleSubmit() {
    const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      location.reload();
    } else {
      console.error('Failed to update user');
    }
  }
</script>


<h1>User {id} details:</h1>
<h2>{title}</h2>
<p>{user.name}</p>
<p>{user.email}</p>

<h1>Update this fella:</h1>

<form on:submit|preventDefault={handleSubmit}>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={name} />
  
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} />
  
    <button type="submit">Update User</button>
</form>