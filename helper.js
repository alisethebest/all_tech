async function fetchFunction(searchTerm) {
  const response = await fetch(
    `https://your-api-endpoint/?search=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function createResource(searchTerm) {
  return {
    result: wrapPromise(fetchFunction(searchTerm)),
  };
}

export { createResource };
