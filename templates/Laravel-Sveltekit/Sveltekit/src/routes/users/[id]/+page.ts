import {error} from "@sveltejs/kit";

export const load = async (loadEvent) => {
    const {fetch, params} = loadEvent;
    const {id} = params;
    const title = "Here are our user's details!"
    const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`)
    const user = await response.json()
    return {
        title,
        user
    };
}