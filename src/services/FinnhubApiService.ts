import {AxiosInstance} from 'axios';

class FinnhubApiService {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  //  Methods to interact with the API
  getStockData = (enpoint: string) => {
    return this.api.get(`${enpoint}`);
  };
}

export default FinnhubApiService;
