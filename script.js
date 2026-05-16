// Ensure the script runs after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.querySelector('#save-btn');

    if (!saveBtn) {
        console.error("Save button not found. Please check your HTML selector.");
        return;
    }

    const entries = [];

        const moodClasses = {
        'High Tide': 'high-tide',
        'Low Tide': 'low-tide',
        'Calm Waters': 'calm-waters',
        'Rough Seas': 'rough-seas',
        'Stormy Seas': 'stormy-seas'
    };

    function renderEntries() {
        const entriesContainer = document.getElementById('entries'); 
        entriesContainer.innerHTML = ''; // Clear existing entries before re-rendering

        entries.forEach(entry => { // loop
            console.log("rendering...");
        
            const entryElement = document.createElement('div');
            entryElement.className = 'entry';
            entryElement.innerHTML = `
                <h3>${entry.mood}</h3>
                <p>Energy: ${entry.energy}</p>
                <p>Need: ${entry.need}</p>
                <p>Sleep: ${entry.sleep}</p>
                <p>Social Battery: ${entry.socialbattery}</p>
                <p>Date: ${entry.date}</p>
                <p>Notes: ${entry.notes}</p>
            `;
            
            const moodClass = moodClasses[entry.mood];
            if (moodClass) {
                entryElement.classList.add(moodClass);
            }
            
            entriesContainer.appendChild(entryElement); // Append the new entry to the container
            console.log(entryElement);
        });
    }

    saveBtn.addEventListener('click', function(event) {
        // Prevent the page from refreshing (which often clears the console log)
        event.preventDefault();

        const mood = document.querySelector('input[name="mood"]:checked')?.value;
        const energy = document.querySelector('input[name="energy"]:checked')?.value;
        const need = document.querySelector('input[name="need"]:checked')?.value;
        const sleep = document.querySelector('input[name="sleep"]:checked')?.value;
        const socialbattery = document.querySelector('input[name="socialbattery"]:checked')?.value;
        const notes = document.getElementById('notes').value;

        console.log({
            mood,
            energy,
            need,
            sleep,
            socialbattery,
            notes
        });

        if (!mood || !energy || !need || !sleep || !socialbattery) {
            alert("Please fill out all fields before saving.");
            return;
        }

        const entry = {
            mood: mood,
            energy: energy,
            need: need,
            sleep: sleep,
            socialbattery: socialbattery,
            notes: notes,
            date: new Date().toLocaleDateString(),
            id: Date.now(),
        };
        
        console.log("New entry created:", entry);

        entries.push(entry);
        console.table(entries);

        renderEntries();
    
    });
});