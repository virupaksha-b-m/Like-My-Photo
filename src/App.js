import { useState } from "react";
import {
  AiOutlineSmile,
  AiOutlineMessage,
  AiOutlineHeart,
  AiFillHeart
} from "react-icons/ai";

import "./styles.css";

export default function App() {
  const [click, setClick] = useState(false);

  const [count, setCount] = useState(0);

  function handleClick() {
    setClick(!click);
    if (click) {
      setCount(0);
    } else {
      setCount(1);
    }
  }

  return (
    <div className="App">
      <div className="App1">
        <h1>Like-My-Photo</h1>
        <h2>Likes {count} </h2>
        <div className="post">
          <div className="dogsmile">
            <AiOutlineSmile className="smile" />
            <h3>Doggy</h3>
          </div>

          <img
            src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"
            alt="doggy"
          />
          <div className="messageheart">
            <AiOutlineMessage className="message" />
            <button onClick={handleClick}>
              {count ? (
                <AiFillHeart className="heart" />
              ) : (
                <AiOutlineHeart className="heart" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
