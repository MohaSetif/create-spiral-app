<script>
    import "$lib/css/main.css";
    import laravel from "../lib/img/laravel.995x1024.png"
    import svelte from "../lib/img/svelte-icon.852x1024.png"
</script>

<main class="bg-midnight relative min-h-screen flex flex-col justify-center items-center text-white">
    <h1 class="text-5xl font-bold mb-4">Welcome to:</h1>
    <div class="pgm_logo m-10 gap-10 flex justify-center items-center" style="width: 30%;">
        <div class="laravel relative">
            <div class="circle1"></div>
            <img src={laravel} class="logo laravel" alt="laravel">
        </div>
        <div class="sveltekit relative">
            <div class="circle2"></div>
            <img src={svelte} class="logo sveltekit" alt="sveltekit">
        </div>
    </div>
    <h2 class="text-3xl font-bold mb-4">The Users' CRUD using Sveltekit and Laravel API.</h2>
    <a href="/users" class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 hover:text-white">Our Users</a>
</main>

<style>
    .logo {
       padding: 1.5em;
       will-change: filter;
       transition: filter 300ms;
    }

    .logo.laravel:hover {
        filter: drop-shadow(0 0 2em #ff1717aa);
    }

    .logo.sveltekit:hover {
        filter: drop-shadow(0 0 2em #ff7417aa);
    }

    a {
        background-color: rgb(69, 58, 168);
        transition: 0.3s;
    }

    a:hover {
        background-color: rgb(109, 98, 209);
    }
</style>
