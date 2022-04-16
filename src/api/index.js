export const getEndpoint = async (endpoint) => {
  // Fetch
  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`);

  // Throw error if not ok
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  // Return json if ok
  const json = await response.json();
  return json;
};

export const postEndpoint = async (endpoint, body) => {
  // Fetch
  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  // Throw error if not ok
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  // Return json if ok
  const json = await response.json();
  return json;
};

export const putEndpoint = async (endpoint, body) => {
  // Fetch
  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  // Throw error if not ok
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  // Return json if ok
  const json = await response.json();
  return json;
};

export const patchEndpoint = async (endpoint, body) => {
  // Fetch
  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  // Throw error if not ok
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  // Return json if ok
  const json = await response.json();
  return json;
};

export const deleteEndpoint = async (endpoint) => {
  // Fetch
  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
    method: "DELETE",
  });

  // Throw error if not ok
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  // Return json if ok
  const json = await response.json();
  return json;
};
