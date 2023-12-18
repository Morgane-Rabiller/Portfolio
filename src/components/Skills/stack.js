import { useEffect, useRef } from "react";
import "./styles.scss";

const Stack = ({ img, content }) => {
    const refStack = useRef();

    useEffect(() => {
      refStack.current.classList.add("visible");
    }, []);

    return (
        <div className="stack" ref={refStack}>
            <img className="stack__img" src={img} alt={content} />
            <p>{content}</p>
        </div>
    );
};

export default Stack;
