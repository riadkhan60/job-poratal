export async function createJob(token, newJobData) {
  try {
    const res = await fetch('http://localhost:3000/jobs/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newJobData),
    });
    const data = await res.json();
   
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getJobs(token) {
  try {
    const res = await fetch('http://localhost:3000/jobs/all', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok === false) {
      throw new Error('there was an error fetching user');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getJob(token, id) {
  try {
    const res = await fetch(`http://localhost:3000/jobs/${id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok === false) {
      throw new Error('there was an error fetching user');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}


export async function deleteJob(token, id) {
  try {
    const res = await fetch(`http://localhost:3000/jobs/delete/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      // If the response status is not ok, throw an error
      throw new Error(`HTTP error! Status: ${res.status}`);
   }
   if(res.ok) return res.ok;
   
  } catch (err) {
    throw new Error(err);
  }
}
