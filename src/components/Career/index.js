import "./styles.scss";
import career from "src/data/career";
import Typewriter from "typewriter-effect";
import DOMPurify from "dompurify";

const Career = () => {
    const cleanContent = DOMPurify.sanitize(career.content, {
        ALLOWED_TAGS: ["br"],
    });

    return (
        <div className="career my-6 mx-8 p-5">
            <p className="font-bold text-2xl text-center mb-5">
                {career.title}
            </p>
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
        </div>
    );
};

export default Career;
