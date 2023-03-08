import { Root } from './root/Root.js'
import { ErrorPage } from "./error/errorPage"
import { Requests } from './requests/requests.js'

export const routes = [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />
    },
    {
      path: "/requests",
      element: <Requests />
    }
  ]