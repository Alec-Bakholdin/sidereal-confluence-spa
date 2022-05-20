import { AxiosError } from "axios";

export interface ErrorDto {
  message: string;
}

export const axiosErrorToDto = (e: any): ErrorDto => {
  let err: AxiosError<ErrorDto> = e;
  if (!err.response) {
    throw e;
  }
  return err.response.data;
};

export default ErrorDto;
