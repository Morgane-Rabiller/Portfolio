import './styles.scss';

const Stack = ({ img, content }) => (
  <div className="stack">
    <img className="stack__img" src={img} alt={content} />
    <p>{content}</p>
  </div>
)

export default Stack;
