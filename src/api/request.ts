async function request<T = void>(url: string, options: RequestInit = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Failed request");
  }

  if (response.status === 200) {
    return (await response.json()) as T;
  }

  return undefined;
}

export default request;
