const user = require("../modules/user/user.router");
const activity = require("../modules/activity/activity.routes");
const makanan = require("../modules/makanan/makanan.routes")
const userActivity = require("../modules/userActivity/userActivity.routes")
const userMakanan = require("../modules/userMakanan/userMakanan.routes")

const LoginController = require("../modules/login")
const RegisterController = require("../modules/user/user.controllers")
const loginByGoogleController = require("../modules/user/user.controllers")

const rootRouterMd = [
  {
    method: "use",
    path: "/user",
    handler: user,
  },
  {
    method: "use",
    path: "/activity",
    handler: activity,
  },
  {
    method: "use",
    path: "/makanan",
    handler: makanan,
  },
  {
    method: "use",
    path: "/user-activity",
    handler: userActivity,
  },
  {
    method: "use",
    path: "/user-makanan",
    handler: userMakanan,
  },
];

const rootRouterPost = [
    {
        method: "post",
        path: "/login",
        handler: LoginController.loginUser
    },
    {
        method: "post",
        path: "/register",
        handler: RegisterController.addOne
    },
    {
        method : "post",
        path: "/auth/google",
        handler: loginByGoogleController.loginByGoogle
    }
]

module.exports = { rootRouterMd, rootRouterPost };
