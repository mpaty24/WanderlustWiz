const WanderlustWizMembers = [
    {
        name: "Marcia P Fritzen",
        position: "CEO",
        bio: "Hello, I'm Marcia Patricia Fritzen, a dedicated Code Institute student and the founder of Wanderlust Wiz Quiz. I'm on a journey to combine my passion for coding with my love for exploring the world.",
    },

    {
        name: "Julia S Roberts",
        position: "COO",
        bio: "Fantasm staff. Meet Julia Roberts, a dynamic and visionary leader in the corporate world. As the Chief Operating Officer (COO) of our esteemed organization, Julia brings a wealth of experience, innovation, and a touch of charisma to our executive team.",
    },

    {
        name: "Leonard de Caprio",
        position: "CFO",
        bio: "Meet Leonardo de Caprio the financial maestro and strategic wizard behind our organization's fiscal success. With a career rooted in numbers and a vision that transcends spreadsheets, John is the driving force behind our financial prosperit",
    },
];


function aboutUs() {
    const aboutUs = document.getElementById("aboutus-container");

    const heading = document.createElement("h1");
    heading.textContent = "About Us";
    aboutUs.appendChild(heading);

    const teamSection = document.createElement("section");
    teamSection.innerHTML = "<h2>Wanderlust Wiz team</h2>";
    aboutUs.appendChild(teamSection);


    WanderlustWizMembers.forEach(WWmember => {
        const WWmemberProfile = document.createElement("div");
        WWmemberProfile.classList.add("WanderlustWizMembers");

        const WWmemberName = document.createElement("h3");
        WWmemberName.textContent = WWmember.name;

        const WWmemberPosition = document.createElement("p");
        WWmemberPosition.textContent = `Position: ${WWmember.position}`;

        const WWmemberBio = document.createElement("p");
        WWmemberBio.textContent = WWmember.bio;

        WWmemberProfile.appendChild(WWmemberName);
        WWmemberProfile.appendChild(WWmemberPosition);
        WWmemberProfile.appendChild(WWmemberBio);
        teamSection.appendChild(WWmemberProfile);
    });
}

aboutUs();
