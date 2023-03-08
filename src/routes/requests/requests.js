import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export const Requests = () => {
  return (
    <div>
      <Link to="/">
        <Button text="Back to homepage" />
      </Link>
      <div>Welcome to the requests page</div>
    </div>
  );
};
