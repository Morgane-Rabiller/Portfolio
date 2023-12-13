import "./styles.scss";
import description from "src/data/description";
import DOMPurify from "dompurify";

const Description = () => {
    const cleanContent = DOMPurify.sanitize(description.content, { ALLOWED_TAGS: ['br'] });
    return (
        <div className="description">
            <p className="description__title">{description.title}</p>
            <p className="description__content" dangerouslySetInnerHTML={{ __html: cleanContent }}/>
        </div>
    );
};

export default Description;
