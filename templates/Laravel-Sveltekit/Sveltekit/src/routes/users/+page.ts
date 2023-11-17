export const load = async(loadEvent) =>{
    const { fetch } = loadEvent;
    const title = 'Hello, here are our users:';
    const response = await fetch('http://127.0.0.1:8000/api/users');
    const users = await response.json();
    return {
        title,
        users
    }
}