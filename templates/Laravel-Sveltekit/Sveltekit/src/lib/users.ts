let users = [];

  async function fetchUsers() {
    const response = await fetch('http://127.0.0.1:8000/api/users');
    const data = await response.json();
    users = data;
  }