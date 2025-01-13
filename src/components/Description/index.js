import "./styles.scss";
import description from "src/data/description";
import DOMPurify from "dompurify";
import Typewriter from "typewriter-effect";

const Description = () => {
    const cleanContent = DOMPurify.sanitize(description.content, {
        ALLOWED_TAGS: ["br", "strong"],
    });

    return (
        <div className="text-center p-5 my-5 md:mx-8">
            <p className="description__title font-bold text-5xl text-center mb-5">{description.title}</p>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(cleanContent)
                        .start();
                }}
                options={{
                    autoStart: true,
                    delay: 10,
                    wrapperClassName: "font-semibold description__text",
                }}
            />
            <div>
              
            </div>
        </div>
    );
};

export default Description;

