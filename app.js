document.addEventListener('DOMContentLoaded', () => {
    // State management
    let completedTasks = JSON.parse(localStorage.getItem('mlTrackerCompleted')) || [];
    let currentFilter = 'all';
    let currentSearch = '';

    // DOM Elements
    const roadmapList = document.getElementById('roadmap-list');
    const totalProgressBar = document.getElementById('total-progress-bar');
    const totalProgressPercent = document.getElementById('total-progress-percent');
    const streakCountElem = document.getElementById('streak-count');
    const remainingDaysElem = document.getElementById('remaining-days');
    const projectsCountElem = document.getElementById('projects-count');
    const filterSelect = document.getElementById('filter-focus');
    const searchInput = document.getElementById('search-tasks');

    // Add Weekly Status element to dashboard if not exists
    let weeklyStatusCard = document.getElementById('weekly-status-card');
    if (!weeklyStatusCard) {
        const statsGrid = document.querySelector('.stats-grid');
        const div = document.createElement('div');
        div.id = 'weekly-status-card';
        div.className = 'stat-item';
        div.innerHTML = `
            <span class="stat-label">WEEKLY STATUS</span>
            <span id="weekly-status-value" class="stat-value">--</span>
        `;
        statsGrid.appendChild(div);
        weeklyStatusCard = div;
    }

    // Initialize
    renderRoadmap();
    updateDashboard();

    // Event Listeners
    filterSelect.addEventListener('change', (e) => {
        currentFilter = e.target.value;
        renderRoadmap();
    });

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderRoadmap();
    });

    function toggleTask(id) {
        if (completedTasks.includes(id)) {
            completedTasks = completedTasks.filter(taskId => taskId !== id);
        } else {
            completedTasks.push(id);
        }
        localStorage.setItem('mlTrackerCompleted', JSON.stringify(completedTasks));
        renderRoadmap();
        updateDashboard();
    }

    function renderRoadmap() {
        roadmapList.innerHTML = '';

        const filteredData = roadmapData.filter(item => {
            const matchesFilter = currentFilter === 'all' || item.focus === currentFilter;
            const matchesSearch = item.topic.toLowerCase().includes(currentSearch) ||
                item.subtopic.toLowerCase().includes(currentSearch) ||
                item.task.toLowerCase().includes(currentSearch);
            return matchesFilter && matchesSearch;
        });

        // Group by day for rendering
        const days = {};
        filteredData.forEach(item => {
            if (!days[item.day]) days[item.day] = [];
            days[item.day].push(item);
        });

        Object.keys(days).sort((a, b) => a - b).forEach(day => {
            const dayItems = days[day];
            const dayContainer = document.createElement('div');
            dayContainer.className = 'day-group';
            dayContainer.innerHTML = `<h2 class="day-title">Day ${day} <span class="focus-mini">${dayItems[0].focus}</span></h2>`;

            dayItems.forEach(item => {
                const isCompleted = completedTasks.includes(item.id);
                const card = document.createElement('div');
                card.className = `task-card ${isCompleted ? 'completed' : ''}`;
                card.innerHTML = `
                    <div class="task-checkbox"></div>
                    <div class="task-content">
                        <div class="task-title-row">
                            <span class="topic-tag">${item.topic}</span>
                            <span class="subtopic-tag">${item.subtopic}</span>
                        </div>
                        <div class="task-desc">${item.task}</div>
                    </div>
                `;
                card.addEventListener('click', () => toggleTask(item.id));
                dayContainer.appendChild(card);
            });
            roadmapList.appendChild(dayContainer);
        });
    }

    function updateDashboard() {
        const total = roadmapData.length;
        const completed = completedTasks.length;
        const percent = Math.round((completed / total) * 100);

        totalProgressBar.style.width = `${percent}%`;
        totalProgressPercent.textContent = `${percent}% Completed (${completed}/${total} topics)`;

        // Remaining topics
        remainingDaysElem.textContent = `${total - completed} TOPICS`;

        // Projects count
        const projectsCompleted = roadmapData.filter(item =>
            (item.topic.toLowerCase().includes('project') || item.task.toLowerCase().includes('project')) &&
            completedTasks.includes(item.id)
        ).length;
        projectsCountElem.textContent = projectsCompleted;

        // Streak calculation (Days where ALL subtasks completed)
        let streak = 0;
        const dayStatus = {};
        roadmapData.forEach(item => {
            if (!dayStatus[item.day]) dayStatus[item.day] = { total: 0, completed: 0 };
            dayStatus[item.day].total++;
            if (completedTasks.includes(item.id)) dayStatus[item.day].completed++;
        });

        const sortedDays = Object.keys(dayStatus).sort((a, b) => b - a);
        if (sortedDays.length > 0) {
            let lastDay = parseInt(sortedDays[0]);
            // Find most recent "full" day
            let foundStart = false;
            for (let d = 180; d >= 1; d--) {
                const stat = dayStatus[d];
                if (stat && stat.completed === stat.total && stat.total > 0) {
                    streak = 1;
                    for (let prev = d - 1; prev >= 1; prev--) {
                        const pStat = dayStatus[prev];
                        if (pStat && pStat.completed === pStat.total && pStat.total > 0) {
                            streak++;
                        } else {
                            break;
                        }
                    }
                    break;
                }
            }
        }
        streakCountElem.textContent = `${streak} DAYS`;

        // Weekly 85% Rule (Latest 7 days check)
        // Find the "current week" - either the last 7 days from the highest completed day, or just the last 7 days of roadmap
        const weeklyStatusValue = document.getElementById('weekly-status-value');
        const latestDay = Math.max(...roadmapData.map(i => i.day));
        let weekCompleted = 0;
        let weekTotal = 0;

        // Let's check the most recent 7 days where there is at least one topic completed
        const completedDays = Object.keys(dayStatus).filter(d => dayStatus[d].completed > 0).map(Number);
        const refDay = completedDays.length > 0 ? Math.max(...completedDays) : 7;

        for (let d = Math.max(1, refDay - 6); d <= refDay; d++) {
            const stat = dayStatus[d];
            if (stat) {
                weekCompleted += stat.completed;
                weekTotal += stat.total;
            }
        }

        if (weekTotal > 0) {
            const weekPct = (weekCompleted / weekTotal) * 100;
            weeklyStatusValue.textContent = `${Math.round(weekPct)}%`;
            weeklyStatusValue.style.color = weekPct >= 85 ? '#2ecc71' : '#e74c3c';
        } else {
            weeklyStatusValue.textContent = '0%';
        }
    }
});
