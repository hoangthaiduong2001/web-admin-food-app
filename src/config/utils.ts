import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const httpClient = async <TRes, TBody>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: TBody,
  headers: Record<string, string> = { 'Content-Type': 'application/json' }
): Promise<TRes> => {
  const isFormData = body instanceof FormData;
  const response = await fetch(url, {
    method,
    headers: isFormData ? {} : headers,
    body: isFormData ? body : JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }

  return response.json();
};
