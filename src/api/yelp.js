import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    //catpital A and Bearer
    Authorization:
      "Bearer Z6V-eeJ8Zh4QpmmErrpwmI85mpObQnRFAH_Av29Z_or95yB1bT8qEXxWrGyjLOSHS8L8M1xSXG38vSEVNBFM7ac8MoAD44m6mGAFCXIzSY98qF-CsJPI99f2jVPEXnYx",
  },
});
