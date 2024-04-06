export async function fetchDatafromAPI() {
  try {
    const response = await fetch("https://npp-api.onrender.com/user");
    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
  }
}

export async function PostDataSupplyAPI(data) {
  try {
    const response = await fetch("https://npp-api.onrender.com/supplies/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
  }
}

export async function PostTripPlanningAPI(data) {
  try {
    const response = await fetch("https://npp-api.onrender.com/plantrip/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
  }
}
