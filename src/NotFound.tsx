import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Navigate } from "react-router-dom";

function NotFound() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className="NotFound">
        <Alert dismissible variant="danger" onClose={() => setShow(false)}>
          <div>No page is found at the link you specified</div>
        </Alert>
      </div>
    );
  }

  return <Navigate to="/" />;
}

export default NotFound;
