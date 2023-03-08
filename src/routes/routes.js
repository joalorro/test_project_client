import { Root } from './root/Root.js'
import { ErrorPage } from "./error/errorPage"

export const routes = [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />
    }
  ]