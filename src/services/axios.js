import axios from "axios";

const instance = axios.create({
  baseURL: "http://akc-jpn-01.xsevenlabs.net:8088",
  timeout: 30000,
});

function createHeaders(customHeaders = {}) {
  let headers = Object.assign({}, customHeaders);
  return headers;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  instance,
  get: async (path, options = {}) => {
    if (options) {
      options.headers = createHeaders(options.headers);
    }
    try {
      return await instance.get(path, options || {});
    } catch (err) {
      return {
        statusCode: 500, err
      }
    }
  },
};