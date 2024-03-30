export function getUserName() {
    // Retrieve the token from localStorage
    const nameFromLocalStorage = localStorage.getItem('so-token') || '[]';  
    const tokenData = JSON.parse(nameFromLocalStorage);
  
    // Check if token exists
    if (tokenData.length != 0) {
        // Return the user's name
        console.log("name", tokenData[0].name)
        return tokenData[0].name;
    } else {
        // If token doesn't exist, return null or handle the case appropriately
        return null;
    }
  }