import { RequestData } from '@/types/api';

export const sendRequestWithRetry = async (
  url: string,
  data: RequestData,
  attempt: number,
): Promise<void> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Ваши результаты успешно отправлены!');
      return;
    } else {
      throw new Error('Response not OK');
    }
  } catch (error) {
    if (attempt < 2) {
      setTimeout(() => {
        sendRequestWithRetry(url, data, attempt + 1);
      }, 2000);
    } else {
      throw error;
    }
  }
};
