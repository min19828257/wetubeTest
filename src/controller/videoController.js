export const trending = (req, res) => res.send("home page");
export const see = (req, res) => res.send("see");
export const edit = (req, res) => {
    console.log("req.params", req.params)
    return res.send(`edit #${req.params.id}`);
}
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");