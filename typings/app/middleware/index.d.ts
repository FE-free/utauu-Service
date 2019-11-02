// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler from '../../../app/middleware/error_handler';
import ExportValidateToken from '../../../app/middleware/validateToken';

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    validateToken: typeof ExportValidateToken;
  }
}
