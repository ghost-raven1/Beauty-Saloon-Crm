import { HttpService } from "../api/http-service";
import { API_PATH } from "../constants";

export class ApiService extends HttpService {
  constructor() {
    super(API_PATH);
  }

  getMasters() {
    return this.get("staff");
  }

  getSaloonServices() {
    return this.get("services");
  }

  createOrder(order) {
    return this.post("orders", order);
  }
}

export default new ApiService();
