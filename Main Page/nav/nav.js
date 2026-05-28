const currentPage = window.location.pathname.split("/").pop();
 
const navHTML = `
  <nav class="site-nav">
    <a href="../Main.html" class="${currentPage === 'Main.html' ? 'active' : ''}">Home</a>
    <a href="MeetPrinceton.html" class="${currentPage === 'MeetPrinceton.html' ? 'active' : ''}">Meet Princeton</a>
    <a href="Academics.html" class="${currentPage === 'Academics.html' ? 'active' : ''}">Academics</a>
    <a href="Research.html" class="${currentPage === 'Research.html' ? 'active' : ''}">Research</a>
    <a href="One_community.html" class="${currentPage === 'One_community.html' ? 'active' : ''}">One Community</a>
    <a href="AdmissionAndAid.html" class="${currentPage === 'AdmissionAndAid.html' ? 'active' : ''}">Admission &amp; Aid</a>
  </nav>`;
 
document.getElementById("nav-placeholder").outerHTML = navHTML;