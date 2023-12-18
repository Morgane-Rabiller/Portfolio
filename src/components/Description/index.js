import "./styles.scss";
import description from "src/data/description";
import DOMPurify from "dompurify";
import Typewriter from "typewriter-effect";

const Description = () => {
    const cleanContent = DOMPurify.sanitize(description.content, {
        ALLOWED_TAGS: ["br"],
    });

    return (
        <div className="description p-5">
            <p className="description__title font-bold text-2xl text-center mb-5">{description.title}</p>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(cleanContent)
                        .start();
                }}
                options={{
                    autoStart: true,
                    delay: 10,
                    wrapperClassName: "font-semibold",
                }}
            />
            <div>
              
            </div>
        </div>
    );
};

export default Description;
