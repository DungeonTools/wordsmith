const LAMBDA_URL = "YOUR_AWS_LAMBDA_URL_HERE";  // Replace with your Lambda URL

async function getDescription(prompt, tags = [], verbosity = "short") {
    const payload = {
        tags: tags,
        verbosity: verbosity,
        prompt: prompt
    };

    const response = await fetch(LAMBDA_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        ui.notifications.error("Failed to get description.");
        return "Error: Failed to get description.";
    }

    const data = await response.json();
    return data.description;
}

// ========================
// Chat Hook for /desc
// ========================
Hooks.on("chatMessage", async (chatLog, message, chatData) => {
    if (!message.startsWith("/desc")) return;

    // Extract tags and prompt
    const match = message.match(/^\/desc\s*(\[[^\]]+\])?\s*(.*)$/);
    if (!match) return;

    let tags = [];
    let verbosity = "short";

    if (match[1]) {
        tags = match[1].replace(/\[|\]/g, "").split(",").map(tag => tag.trim());
        if (tags.includes("long")) verbosity = "long";
    }

    let prompt = match[2].trim();

    // Random generation if no prompt provided
    if (!prompt) {
        const randomTags = tags.length ? tags : ["scene"];
        prompt = `Generate a random ${randomTags.join(", ")} description.`;
    }

    // Call API through Lambda
    const desc = await getDescription(prompt, tags, verbosity);

    // Send to chat
    ChatMessage.create({ content: `<em>${desc}</em>` });
    return false;  // Prevent default message handling
});

// ==========================
// Module Registration
// ==========================
Hooks.once("init", () => {
    console.log("Describer Module Initialized");
});
