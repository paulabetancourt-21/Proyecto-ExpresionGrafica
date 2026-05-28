const currentPage = window.location.pathname.split("/").pop();

const nav = document.getElementById("nav-placeholder");

nav.innerHTML = `
    <a href="Main.html" class="${currentPage === 'Main.html' ? 'active' : ''}">Home</a>
    <a href="nav/MeetPrinceton.html" class="${currentPage === 'MeetPrinceton.html' ? 'active' : ''}">Meet Princeton</a>
    <a href="nav/Academics.html" class="${currentPage === 'Academics.html' ? 'active' : ''}">Academics</a>
    <a href="nav/Research.html" class="${currentPage === 'Research.html' ? 'active' : ''}">Research</a>
    <a href="nav/One_community.html" class="${currentPage === 'One_community.html' ? 'active' : ''}">One Community</a>
    <a href="nav/AdmissionAndAid.html" class="${currentPage === 'AdmissionAndAid.html' ? 'active' : ''}">Admission &amp; Aid</a>
`;