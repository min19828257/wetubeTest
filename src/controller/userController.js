export const edit = (req, res) => res.send("Edit User");
export const deleteUsers = (req, res) => res.send("Remove User");
export const remove = (req, res) => res.send("Edit User");
export const join = (req, res) => {
    console.log("this is join")
    var user = "minsukim"
    req.session.loggedIn = true;
    req.session.user = user;

    console.log("req session value => ", req.session)

    res.redirect("/")
}


export const login = (req, res) => {
    // res.send("login");

    // res.sendFile("c://nodeProject//wetubeTest//src//views//login.html", {name:"name111"})
    res.render("c://nodeProject//wetubeTest//src//views//login.html", {name:"naasme111"});
}

export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see")