const API_BASE_URL = "http://127.0.0.1:5000";

export async function checkHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    return { status: "error" };
  }
}
