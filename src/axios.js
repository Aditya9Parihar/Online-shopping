import axiso from "axios";

const instance = axiso.create({
    baseURL: "http://localhost:5001/clone-fccf1/us-central1/api"
});

export default instance;