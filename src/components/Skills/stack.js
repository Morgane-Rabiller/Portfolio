import "./styles.scss";

const Stack = ({ img, content }) => (
    <div className="m-2 flex flex-column align-items-center">
        <img className="w-3rem" src={img} alt={content} />
        <p>{content}</p>
    </div>
);

export default Stack;
