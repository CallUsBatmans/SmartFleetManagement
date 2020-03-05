import { storageService } from "../services/storage.services";
import { isNull, isUndefined } from 'lodash';

export const userIsAuthenticated = () => {
  const data = storageService.getAuthenticatedUser();
  if (isNull(data)) {
    return false;
  }

  const token = JSON.parse(data).token;
  return !isUndefined(token);
};
