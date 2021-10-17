import Video from "../models/Video"

const fakeUser = {
    username: "minsu",
    loggedIn: false,
}

let videos = [
    {
        title : "First Video",
        rating: 5,
        comments: 2,
        createAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title : "Second Video",
        rating: 5,
        comments: 2,
        createAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title : "third Video",
        rating: 5,
        comments: 2,
        createAt: "2 minutes ago",
        views: 59,
        id: 3,
    }]

export const home = async(req, res) =>{
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
};

export const trending = (req, res) => {
    Video.find()
    res.render("home", {pageTitle : "page trending" , fakeUser:fakeUser, videos});
}
export const watch = (req, res) => {
    console.log(req.params);
    let id = req.params.id;
    let videoInfo = videos[id -1];
    res.render("watch", {pageTitle : "waching id " + videoInfo.title, fakeUser:fakeUser, video:videoInfo, id:id});
}
export const getEdit = (req, res) => {
    console.log("req.params", req.params)
    let id = req.params.id;
    let videoInfo = videos[id -1];
    return res.render("edit", { pageTitle : `Edit ${videoInfo.title}`, fakeUser:fakeUser , video:videoInfo});
}
export const postEdit = (req, res) => {
    let id = req.params.id;
    console.log("post edit  ==> ", req.body);
    res.redirect(`/videos/${id}`)
};
// export const getEdit = (req, res) => {};
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");