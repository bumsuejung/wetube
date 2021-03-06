import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "build/uploads/videos/" });
const multerAvatar = multer({ dest: "build/uploads/avatars/" });

export const localsMiddlewares = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) =>
  req.user ? res.redirect(routes.home) : next();

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");
