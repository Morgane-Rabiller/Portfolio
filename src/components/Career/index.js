import "./styles.scss";
import career from "src/data/career";
import Typewriter from "typewriter-effect";
import DOMPurify from "dompurify";
import { useState, useRef } from "react";

const Career = () => {
  const typewriterRef = useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);
    const cleanContent = DOMPurify.sanitize(career.content, {
        ALLOWED_TAGS: ["br"],
    });

    const showFullText = () => {
      setIsCompleted(true);  // Marque l'état comme "complété"
      typewriterRef.current?.stop();  // Stoppe le défilement de texte
    };

    return (
        <div className="career p-5 my-5 md:mx-8">
          <div className="flex align-items-center align-content-center">
            <p className="font-bold text-2xl text-center mb-5  flex-1">
                {career.title}
            </p>
            <button onClick={showFullText} className="px-4 py-2 bg-purple-700 text-white rounded ml-auto"> Arreter le défilement </button>
            </div>
            {isCompleted ? <p className="font-semibold" dangerouslySetInnerHTML={{ __html: cleanContent }} /> : (
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
          )}
        </div>
    );
};

export default Career;
