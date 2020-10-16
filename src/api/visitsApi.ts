import axios from 'axios';

const visitsApi = {
  getVisits(id: string): Promise<{ message: string }> {
    return axios.get('https://track-api.leadhit.io/client/test_auth',
      {
        headers:
          {
            'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
            'Leadhit-Site-Id': id,
          },
      }).then(({ data }) => data);
  },
};

export default visitsApi;
