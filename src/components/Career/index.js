import "./styles.scss";
import career from "src/data/career";
import Typewriter from "typewriter-effect";
import DOMPurify from "dompurify";

const Career = () => {
    const cleanContent = DOMPurify.sanitize(career.content, {
        ALLOWED_TAGS: ["br"],
    });

    return (
        <div className="p-5 my-5 md:mx-8 text-center">
            <p className="career__title font-bold text-5xl text-center mb-5">
                {career.title}
            </p>
            <div className="career__content">
              <Typewriter
                  onInit={(typewriter) => {
                      typewriter
                          .typeString(cleanContent)
                          .start();
                  }}
                  options={{
                      autoStart: true,
                      delay: 10,
                      wrapperClassName: "font-semibold line-height-4",
                  }}
              />
            </div>
        </div>
    );
};

export default Career;

