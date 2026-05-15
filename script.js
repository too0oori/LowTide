// Ensure the script runs after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (!form) {
        console.error("Form not found. Please check your HTML selector.");
        return;
    }

    const entries = [];

    function renderEntries() {
        const entriesContainer = document.getElementById('entries'); 
        entriesContainer.innerHTML = ''; // Clear existing entries before re-rendering

        const moodClasses = {
            'High Tide': 'high-tide',
            'Low Tide': 'low-tide',
            'Calm Waters': 'calm-waters',
            'Rough Seas': 'rough-seas',
            'Stormy Seas': 'stormy-seas'
        };

        entries.forEach(entry => { // loop
            console.log("rendering...");
        
            const entryElement = document.createElement('div');
            entryElement.className = 'entry';
            entryElement.innerHTML = `
                <h3>${entry.mood}</h3>
                <p>Energy: ${entry.energy}</p>
                <p>Focus: ${entry.focus}</p>
                <p>Date: ${entry.date}</p>
            `;
            
            const moodClass = moodClasses[entry.mood];
            if (moodClass) {
                entryElement.classList.add(moodClass);
            }
            
            entriesContainer.appendChild(entryElement); // Append the new entry to the container
            console.log(entryElement);
        });
    }

    form.addEventListener('submit', function(event) {
        // Prevent the page from refreshing (which often clears the console log)
        event.preventDefault();

        const mood = document.getElementById('mood').value;
        const energy = document.getElementById('energy').value;
        const focus = document.getElementById('focus').value;

        const tideMessages = {
            'High Tide': "High tide! It's a great time to make progress on what matters most.",
            'Low Tide': "Low tide. Take some time to rest and recharge before tackling your priorities.",
            'Calm Waters': "Calm waters. A perfect moment for creating or reflecting.",
            'Rough Seas': "Rough seas. Try some deep breathing or meditation to calm your mind.",
            'Stormy Seas': "Stormy waters. Take a break and practice deep breathing or meditation to manage your emotions."
        };

        const entry = {
            mood: mood,
            energy: energy,
            focus: focus,
            date: new Date().toLocaleDateString(),
            id: Date.now(),
        };
        
        console.log("New entry created:", entry);
    
        // Display message based on selected mood
        if (tideMessages[mood]) {
            alert(tideMessages[mood]); //temporal alert for tesdting
        } else {
            console.warn(`No message found for mood: "${mood}". Please check the mood value and ensure it matches one of the predefined moods.`);
        }

        entries.push(entry);
        console.table(entries);

        renderEntries();
    });
});