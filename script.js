// Ensure the script runs after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (!form) {
        console.error("Form not found. Please check your HTML selector.");
        return;
    }

    form.addEventListener('submit', function(event) {
        // Prevent the page from refreshing (which often clears the console log)
        event.preventDefault();

        const mood = document.getElementById('mood').value;
        const energy = document.getElementById('energy').value;
        const focus = document.getElementById('focus').value;

        const tideMessages = {
            'HighTide': "High tide! It's a great time to make progress on what matters most.",
            'LowTide': "Low tide. Take some time to rest and recharge before tackling your priorities.",
            'Calm': "Calm waters. A perfect moment for creating or reflecting.",
            'Anxious': "Rough seas. Try some deep breathing or meditation to calm your mind.",
            'Angry': "Stormy waters. Take a break and practice deep breathing or meditation to manage your emotions."
        };

        console.log("--- Lowtides Entry ---");
        console.log(`Mood: ${mood}`);
        console.log(`Energy: ${energy}`);
        console.log(`Focus: ${focus}`);
    
        // Display message based on selected mood
        if (tideMessages[mood]) {
            alert(tideMessages[mood]);
        } else {
            console.warn(`No message found for mood: "${mood}". Please check the mood value and ensure it matches one of the predefined moods.`);
        }
    });
});