export async function createUser(user) {
  try {
    const res = await fetch('https://job-portal-server-swbw.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (res.ok == false) throw new Error();
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function loginUser(user) {
  try {
    const res = await fetch(
      'https://job-portal-server-swbw.onrender.com/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    );

    const users = await res.json();
    return users;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getUser(token) {
  try {
    const res = await fetch(
      'https://job-portal-server-swbw.onrender.com/users',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (res.ok === false) {
      throw new Error('there was an error fetching user');
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
