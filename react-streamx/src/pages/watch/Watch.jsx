import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import vid from './tle.MP4'

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src= {vid}
      ></video>
    </div>
  );
}
