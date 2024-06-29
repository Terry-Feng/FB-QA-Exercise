export interface WebConfig {
  url: string;
}

//TODO update each url to the actual one in different envs
const baseUrl = "https://main.dh5h27tmin3c2.amplifyapp.com/"

export default {
  prod: {
    nz: {
      url: baseUrl,
    },
    au: {
      url: baseUrl,
    },
  },
  preprod: {
    nz: {
      url: baseUrl,
    },
    au: {
      url: baseUrl,
    },
  },
  qa: {
    nz: {
      url: process.env.dynamicEnvironment || baseUrl,
    },
    au: {
      url: process.env.dynamicEnvironment || baseUrl,
    },
  },
  local: {
    nz: {
      url: 'http://localhost:3000',
    },
    au: {
      url: 'http://localhost:3000',
    },
  },
};
