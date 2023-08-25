
export const makeUnauthenticatedPOSTRequest = async (route, body) => {
  try {
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // the body will send like this to backend
      body: JSON.stringify(body),
    });

    const formattedResponse = await response.json();
    return formattedResponse;
  } catch (error) {
    console.log(`error in fetch api `, error);
  }
};

// ! post request
export const makeAuthenticatedPOSTRequest = async (route, body , token) => {
  try {
    const response = await fetch( route, {
      method: "POST",
      
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // the body will send like this to backend
      body: JSON.stringify(body),
    });

    const formattedResponse = await response.json();
    return formattedResponse;
  } catch (error) {
    console.log(`error in fetch api `, error);
  }
};

// ! get request
export const makeAuthenticatedGETRequest = async (route , token) => {
  try {
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const formattedResponse = await response.json();
    return formattedResponse;
  } catch (error) {
    console.log(`error in fetch api `, error);
  }
};

// ! update request of formdata type
export const makeAuthenticatedUPDATERequest = async (route , body , token) => {
  console.log(body);
  try {
    const response = await fetch(route, {
      method: "PUT",
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),

    });
   
    const formattedResponse = await response.json();
    return formattedResponse;
  } catch (error) {
    console.log(`error in fetch api `, error);
  }
};

// ! update request of application/json
export const makeAuthenticatedPATCHRequest = async (route , body , token) => {
  console.log(`body` , body);
  try {
    const response = await fetch(route, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),

    });
   
    const formattedResponse = await response.json();
    return formattedResponse;
  } catch (error) {
    console.log(`error in fetch api `, error);
  }
};


// ! delete request
export const makeAuthenticatedDELETERequest = async(route , token)=>{
  try{
    const response = await fetch(route , {
      method:"DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const formattedResponse = await response.json();
    return formattedResponse;
  }catch (error) {
    console.log(`error in fetch api `, error);
  }
}
// ! delete request
export const makeAuthenticatedDATADELETERequest = async(route ,body , token)=>{
  try{
    const response = await fetch(route , {
      method:"DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),

    });
    const formattedResponse = await response.json();
    return formattedResponse;
  }catch (error) {
    console.log(`error in fetch api `, error);
  }
}