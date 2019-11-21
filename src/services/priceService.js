import api from "./api";

const prices = () => api.get("prices");

export default { prices };
