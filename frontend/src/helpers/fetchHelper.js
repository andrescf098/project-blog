export const fetchHelper = async (url, method, bodyData = "") => {
  let loading = true;

  loading = true;
  let options = {
    method: method,
  };
  if (method == "POST" || method == "PUT") {
    options = {
      ...options,
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  const response = await fetch(url, options);
  const data = await response.json();

  loading = false;

  return {
    data,
    loading,
  };
};
