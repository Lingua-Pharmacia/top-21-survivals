// THE MASTER DATABASE - Add future apps here!
const appDatabase = {
    "History & People": [
        { title: "Top 21 Freedom Fighters", url: "https://lingua-pharmacia.github.io/21-freedom-fighters/", icon: "✊🏿", color: "neon-green" }
    ],
    "Nature & Animals": [
        { title: "Humanlike Animal Actions", url: "https://lingua-pharmacia.github.io/21-humanlike-animal-actions/", icon: "🦍", color: "neon-yellow" }
    ],
    "Extreme Events": [
        { title: "Top 21 Survival Stories", url: "https://lingua-pharmacia.github.io/21-survival-stories/", icon: "🏕️", color: "neon-pink" },
        { title: "Top 21 Disasters", url: "https://lingua-pharmacia.github.io/21-top-disasters/", icon: "🌋", color: "neon-red" }
    ],
    "Lifestyle & Tech": [
        { title: "Top 21 Car Brands", url: "https://lingua-pharmacia.github.io/21-top-car-brands/", icon: "🏎️", color: "neon-blue" }
    ]
};

const catScreen = document.getElementById('category-screen');
const appScreen = document.getElementById('app-screen');
const catGrid = document.getElementById('category-grid');
const appGrid = document.getElementById('app-grid');
const catTitle = document.getElementById('category-title');

// 1. Generate Category Buttons
Object.keys(appDatabase).forEach(category => {
    const btn = document.createElement('div');
    btn.className = 'category-card';
    btn.innerHTML = `<h2>📁 ${category}</h2>`;
    btn.onclick = () => showApps(category);
    catGrid.appendChild(btn);
});

// 2. Show Apps inside the selected Category
function showApps(categoryName) {
    catScreen.classList.add('hidden');
    appScreen.classList.remove('hidden');
    catTitle.innerText = categoryName;
    
    appGrid.innerHTML = ""; // Clear old apps

    appDatabase[categoryName].forEach(app => {
        const a = document.createElement('a');
        a.href = app.url;
        a.className = `app-card ${app.color}`;
        a.innerHTML = `<div class="app-icon">${app.icon}</div><h2>${app.title}</h2>`;
        appGrid.appendChild(a);
    });
}

// 3. Back Button Logic
document.getElementById('btn-back').onclick = () => {
    appScreen.classList.add('hidden');
    catScreen.classList.remove('hidden');
};
