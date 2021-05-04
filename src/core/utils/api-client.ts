const API_URL = process.env.REACT_APP_API_URL;

type MakeRequestConfig<T extends any> = RequestInit & {
  body?: T;
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT';
  params?: Record<string, string>;
};

export async function makeRequest<TResponse extends any, TPayload = undefined>(
  path: string,
  { body, method, params }: MakeRequestConfig<TPayload> = { method: 'GET' }
): Promise<TResponse> {
  const config: RequestInit = {
    method,
    body: body ? JSON.stringify(body) : undefined,
  };

  let url = `${API_URL}/${path}`;

  if (params) url += '?' + new URLSearchParams(params).toString();

  const response = await fetch(url, config);
  const data = await response.json();

  if (response.ok) {
    return data;
  }

  return Promise.reject(data);
}
