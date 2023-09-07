const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  REGISTER_API: BASE_URL + "/auth/register",
  LOGIN_API: BASE_URL + "/auth/login",
  FORGOTPASSWORD_SENDOTP_API: BASE_URL + "/auth/forgot-password/send-otp",
  FORGOTPASSWORD_VERIFYOTP_API: BASE_URL + "/auth/forgot-password/verify-otp",
  RESETPASSWORD_API: BASE_URL + "/auth/forgot-password/reset-password",
};

export const artistProfilePoints = {
  FETCH_PROFILE_DATA_API: BASE_URL + "/artists/profile",
  UPDATE_PROFILE_DATA_API: BASE_URL + "/artists/profile",
};

export const artistOpportunityPoints = {
  FETCH_OPPOR_DATA_API: BASE_URL + `/artists/opportunities`,
  APPLY_OPPOR_API: BASE_URL + `/artists/opportunities`,
  RETRIVE_APPLIED_APPLI :BASE_URL + `/artists/opportunities`,
  FETCH_OPPOR_BY_ID: BASE_URL + `/artists/opportunities`,
  SAVE_OPPR_BY_ID: BASE_URL + `/artists/opportunities/saved`
};

export const statusOfAppliPoints = {
  FETCH_APPLIED_APPLI_API : BASE_URL +`/artists/opportunities/applications`,
  FETCH_SAVED_APPLI_API : BASE_URL +`/artists/opportunities/saved`
}

export const patronProfilePoints = {
  FETCH_PATRON_APPLI_API : BASE_URL + `/patrons/profile`,
  UPLOAD_OPPOR_API : BASE_URL + `/patrons/opportunities`,
  GET_PATRON_APPLI_API : BASE_URL + `/patrons/opportunities`,
  FETCH_PATRON_ALL_APPLI_API : BASE_URL + `/patrons/opportunities/applications`,
  FETCH_SINGLE__APPLI_API : BASE_URL + `/patrons/opportunities/applications`,
  
}
export const contactUsPoints = {
  POST_QUERY_API : BASE_URL + `/quries/post-query`,
}



