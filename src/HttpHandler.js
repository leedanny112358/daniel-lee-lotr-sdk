const LOTR_API_BASE_URL = "https://the-one-api.dev/v2";

class HttpHandler {
  constructor(token) {
    this._token = token;
  }

  async get(url) {
    try {
      const result = await fetch(`${LOTR_API_BASE_URL}/${url}`, {
        headers: { Authorization: this._token },
      });
      return await result.json();
    } catch (error) {
      throw error;
    }
  }
}

export default HttpHandler;
