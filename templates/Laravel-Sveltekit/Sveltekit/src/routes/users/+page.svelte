<script lang="ts">
    async function deleteUser(id: number) {
    const res = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
        method: 'DELETE'
    }).then((res) => {
        res.json();
        location.reload();
    });
}

    export let data;
    let users = data.users;
</script>

<main>
    <a href="/users/add_user">Add user!</a>
    <h1 class="underline font-4xl">
        {data.title}
    </h1>
    
    {#if users.length === 0}
        <p>No users found.</p>
    {:else}
        {#each users as user}
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
            <a href='users/{user.id}'>show</a>
            <button on:click={() => deleteUser(user.id)}>Delete</button>
        {/each}
    {/if}
</main>