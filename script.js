document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const monthYear = document.getElementById("monthYear");
    const daysContainer = document.getElementById("days");
    
    let currentDate = new Date();
    
    function updateCalendar() {
      const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      
      monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
      
      daysContainer.innerHTML = "";
      
      for (let i = 0; i < firstDay.getDay(); i++) {
        daysContainer.innerHTML += "<div></div>";
      }
      
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const dayElement = document.createElement("div");
        dayElement.textContent = i;
        
        const tooltip = document.createElement("span");
        tooltip.classList.add("tooltip");
        tooltip.textContent = "Click to add an event";
        
        dayElement.appendChild(tooltip);
        daysContainer.appendChild(dayElement);
      }
    }
    
    updateCalendar();
    
    prevBtn.addEventListener("click", function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      updateCalendar();
    });
    
    nextBtn.addEventListener("click", function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      updateCalendar();
    });
  });
  