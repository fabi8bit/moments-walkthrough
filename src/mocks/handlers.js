import { rest } from "msw";

const baseURL = "https://drf-app-ci-dd26f820fd5b.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "brian",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
        "https://res.cloudinary.com/dhsjcm3v3/image/upload/v1/media/../default_profile_zsapif",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];