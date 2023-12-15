import "./styles.scss";
import description from "src/data/description";
import DOMPurify from "dompurify";
import Typewriter from "typewriter-effect";

const Description = () => {
    const cleanContent = DOMPurify.sanitize(description.content, {
        ALLOWED_TAGS: ["br"],
    });

    return (
        <div className="description">
            <p className="description__title">{description.title}</p>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(cleanContent)
                        .callFunction(() => {
                            console.log("String typed out!");
                        })
                        .callFunction(() => {
                            console.log("All strings were deleted");
                        })
                        .start();
                }}
                options={{
                    autoStart: true,
                    delay: 20,
                    wrapperClassName: ".description__content",
                }}
            />
            <div>
              
            </div>
        </div>
    );
};

export default Description;
