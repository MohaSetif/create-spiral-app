import { goto } from '$app/navigation';

export async function createUser(name: string, email: string, password: string) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    if (res.ok) {
      goto('/users');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
