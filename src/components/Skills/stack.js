import "./styles.scss";

const Stack = ({ img, content }) => (
    <div className="m-2">
        <img className="w-3rem" src={img} alt={content} />
        <p>{content}</p>
    </div>
);

export default Stack;
