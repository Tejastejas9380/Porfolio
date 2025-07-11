import { QueryClient } from "@tanstack/react-query";

/**
 * Throws an error if the response is not OK (non-2xx status)
 * @param {Response} res
 */
async function throwIfResNotOk(res) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

/**
 * Makes an API request with given method, URL, and optional data
 * @param {string} method - HTTP method like GET, POST, PUT, DELETE
 * @param {string} url - API endpoint
 * @param {any} [data] - Optional request body
 * @returns {Promise<Response>}
 */
export async function apiRequest(method, url, data) {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include", // send cookies
  });

  await throwIfResNotOk(res);
  return res;
}

/**
 * @param {{ on401: "returnNull" | "throw" }} options
 * @returns {function({ queryKey: Array<string> }): Promise<any>}
 */
export const getQueryFn = ({ on401 }) => {
  return async ({ queryKey }) => {
    const url = queryKey.join("/");
    const res = await fetch(url, {
      credentials: "include",
    });

    if (on401 === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
