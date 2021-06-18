import Http from './Http';

export const createOrUpdateUser = async (authtoken) => {
  return await Http.post(
    '/api/create-or-update-user',
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentUser = async (authtoken) => {
  return await Http.post(
    '/api/current-user',
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await Http.post(
    '/api/current-admin',
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
