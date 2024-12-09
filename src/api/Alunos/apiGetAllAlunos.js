const apiGetAllAlunos = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/alunos`, {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "skip-browser-warning",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default apiGetAllAlunos;
