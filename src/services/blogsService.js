import http from "./httpService";
import config from "./config.json";

export const blogsGet = (user) => {
  return http.get(
    `${config.baseUrl}/blogs`
  );
};

export const blogsPost = (user) => {
    return http.post(
      `${config.baseUrl}/blogs`,user,{headers:{'Content-Type':'application/ld+json'}}
    );
  };

