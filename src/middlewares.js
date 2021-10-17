export const localsMiddleware = (req, res, next) => {
    console.log(req.session)
    res.locals.loggedIn = Boolean(req.session.loggedIn)
    res.locals.siteName = "Wetube";

    
    console.log("res.locals.loggedIn ---> ", res.locals.loggedIn);
    console.log("res ---> ", res.locals);
    next();
};