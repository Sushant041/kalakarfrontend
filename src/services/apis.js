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
};
