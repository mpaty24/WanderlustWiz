    const wanderlust_wiz_members = [
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


        wanderlust_wiz_members.forEach(WWmember => {
            const ww_member_profile = document.createElement("div");
            ww_member_profile.classList.add("wanderlust_wiz_members");

            const ww_member_name = document.createElement("h3");
            ww_member_name.textContent = WWmember.name;

            const ww_member_position = document.createElement("p");
            ww_member_position.textContent = `Position: ${WWmember.position}`;

            const ww_member_bio = document.createElement("p");
            ww_member_bio.textContent = WWmember.bio;

            ww_member_profile.appendChild(ww_member_name);
            ww_member_profile.appendChild(ww_member_position);
            ww_member_profile.appendChild(ww_member_bio);
            teamSection.appendChild(ww_member_profile);
        });
    }

    aboutUs();
