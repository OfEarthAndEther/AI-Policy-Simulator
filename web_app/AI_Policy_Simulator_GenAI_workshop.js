const socialIconButtons = document.getElementsByClassName("social-icon");

function postToSocialMedia(classList) {
    const content = `Check out my cool generative AI Project 😎 \n${window.location.href.toString()}`;
    if (classList.contains("twitter")) {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      content
    )}`;
        window.open(url);
    } else if (classList.contains("linkedin")) {
        const url = `https://www.linkedin.com/share?text=${encodeURIComponent(
      content
    )}`;
        window.open(url);
    } else if (classList.contains("whatsapp")) {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`);
    }
}

const addEventListenersToSocialIconButton = () => {
    for (let i = 0; i < socialIconButtons.length; i++) {
        socialIconButtons[i].addEventListener("click", () =>
            postToSocialMedia(socialIconButtons[i].classList)
        );
    }
};

addEventListenersToSocialIconButton();

const skillIcon = document.getElementsByClassName("tooltip");


const addEventListenersToSkillIcon = () => {
    for (let i = 0; i < skillIcon.length; i++) {
        skillIcon[i].addEventListener("click", (e) => {
            console.log(e.target)
            updateDescription(e.target.id);
        });
    }
};

addEventListenersToSkillIcon();

const descriptionDiv = document.getElementsByClassName("about-section");
const updateDescription = (id) => {
    let description = "";

    switch (id) {
        case "googleColab":
            description = "Google Colab: Used as my primary development environment to build and test the Policy Simulator logic and manage Gemini API quotas.";
            break;
        case "gradio":
            description = "Gradio: Utilized to build the interactive dashboard, including sliders for 'Fuel Tax' and 'Investment' to make policy simulation accessible to non-technical users.";
            break;
        case "openAi":
            description = "OpenAI: While this project uses Google Gemini, OpenAI's standards for chat-based AI influenced the system's conversational memory architecture.";
            break;
        case "ElevenLabs":
            description = "ElevenLabs: Explored for future integration of voice-based policy reports to make the simulator accessible to visually impaired policymakers.";
            break;
        case "huggingFace":
            description = "Hugging Face: Served as the deployment engine, hosting the backend logic in a Space and securing my API keys using 'Secrets' to prevent security leaks.";
            break;
        case "langChain":
            description = "LangChain: The core framework used to implement the 'Policy Analyst' persona and manage the conversation history through structured prompt templates.";
            break;
        default:
            description = "Select an icon to see how that specific technology powered my AI Policy Simulator.";
    }
    for (let i = 0; i < descriptionDiv.length; i++) {
        descriptionDiv[i].textContent = description;
    }
};

updateDescription("googleColab");