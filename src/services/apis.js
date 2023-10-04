const BASE_URL = process.env.REACT_APP_BASE_URL;

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
  UPDATE_ARTIST_AVATAR_API: BASE_URL + "/artists/profile/avatar",
  LOGIN_WITH_GOOGLE_API: BASE_URL + "/auth/google",
};

export const artistOpportunityPoints = {
  FETCH_OPPOR_DATA_API: BASE_URL + `/artists/opportunities`,
  APPLY_OPPOR_API: BASE_URL + `/artists/applications`,
  RETRIVE_APPLIED_APPLI: BASE_URL + `/artists/opportunities`,
  FETCH_OPPOR_BY_ID: BASE_URL + `/artists/opportunities`,
  SAVE_OPPR_BY_ID: BASE_URL + `/artists/saved-opportunities`,
};

export const statusOfAppliPoints = {
  FETCH_APPLIED_APPLI_API: BASE_URL + `/artists/applications`,
  FETCH_SAVED_APPLI_API: BASE_URL + `/artists/saved-opportunities`,
};

export const patronProfilePoints = {
  FETCH_PATRON_APPLI_API: BASE_URL + `/patrons/profile`,
  UPLOAD_OPPOR_API: BASE_URL + `/patrons/opportunities`,
  FETCH_PATRON_APPLI_OPPOR_API: BASE_URL + `/patrons/opportunities`,
  FETCH_PATRON_ALL_APPLI_API: BASE_URL + `/patrons/opportunities/applications`,
  FETCH_SINGLE__APPLI_API: BASE_URL + `/patrons/opportunities/applications`,
  GET_PATRON_APPLI_API: BASE_URL + `/patrons/opportunities`,
  UPDATE_OPPOR_API: BASE_URL + `/patrons/opportunities`,
<<<<<<< HEAD
  GET_SINGLE_OPPOR_ALL_APPLIED_ARTIST_APPLI_API: BASE_URL + `/patrons/opportunities/applications?status=Applied&opportunityId=`,
  GET_SINGLE_OPPOR_ALL_IN_PROGRESS_ARTIST_APPLI_API: BASE_URL + `/patrons/opportunities/applications?status=In-Progress&opportunityId=`,
  GET_SINGLE_OPPOR_ALL_HIRED_ARTIST_APPLI_API: BASE_URL + `/patrons/opportunities/applications?status=Hired&opportunityId=`,
  GET_SINGLE_ARTIST_DATA_API : BASE_URL + `/patrons/artists?id=`,
  HIRED_REJECT_SHORTLIST_ARTIST_API : BASE_URL +`/patrons/opportunities/applications` , 
  PATRON_AVATAR_UPDATE : BASE_URL +  "/patrons/profile/avatar",
  
}

=======
  GET_SINGLE_OPPOR_ALL_APPLIED_ARTIST_APPLI_API:
    BASE_URL +
    `/patrons/opportunities/applications?status=Applied&opportunityId=`,
  GET_SINGLE_OPPOR_ALL_IN_PROGRESS_ARTIST_APPLI_API:
    BASE_URL +
    `/patrons/opportunities/applications?status=In-Progress&opportunityId=`,
  GET_SINGLE_OPPOR_ALL_HIRED_ARTIST_APPLI_API:
    BASE_URL +
    `/patrons/opportunities/applications?status=Hired&opportunityId=`,
  GET_SINGLE_ARTIST_DATA_API: BASE_URL + `/patrons/artists/`,
  HIRED_REJECT_SHORTLIST_ARTIST_API:
    BASE_URL + `/patrons/opportunities/applications`,
  PATRON_AVATAR_UPDATE: BASE_URL + "/patrons/profile/avatar",
};
export const Admin = {
  GET_ALL_USERS: BASE_URL + `/admin/users`,
  GET_USER_BY_ID: BASE_URL + `/admin/users/`,
  GET_ARTIST_APPLICANTS: BASE_URL + `/admin/users/artist/`,
};

export const contactUsPoints = {
  POST_QUERY_API: BASE_URL + `/quries/post-query`,
};

//try