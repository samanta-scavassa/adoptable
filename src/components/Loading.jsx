import loadingMessage from "../assets/images/loading.gif";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loadingMessage">
      <img src={loadingMessage} />
    </div>
  );
}
