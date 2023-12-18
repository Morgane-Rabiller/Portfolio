import "./styles.scss";
import career from "src/data/career";
import Typewriter from "typewriter-effect";
import DOMPurify from "dompurify";

const Career = () => {
  const cleanContent = DOMPurify.sanitize(career.content, {
      ALLOWED_TAGS: ["br"],
  });
  
    return (
        <div className="career">
            <p className="career__title">{career.title}</p>
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
                    delay: 10,
                    wrapperClassName: ".description__content",
                }}
            />
        </div>
    );
};

export default Career;
