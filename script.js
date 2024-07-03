document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['&nbsp;Muhammad Zaid.', '&nbsp;a Computer Scientist.'],
        typeSpeed: 150,
        loop: true,
        backSpeed: 50,
        backDelay: 1000,
        showCursor: false,
    });
});

document.getElementById('zaid-btn').addEventListener('click', function () {
    document.getElementById('home-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('home-btn1').addEventListener('click', function () {
    document.getElementById('home-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('home-btn2').addEventListener('click', function () {
    document.getElementById('home-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-btn1').addEventListener('click', function () {
    document.getElementById('about-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-btn2').addEventListener('click', function () {
    document.getElementById('about-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('skills-btn1').addEventListener('click', function () {
    document.getElementById('skills-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('skills-btn2').addEventListener('click', function () {
    document.getElementById('skills-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('projects-btn1').addEventListener('click', function () {
    document.getElementById('projects-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('projects-btn2').addEventListener('click', function () {
    document.getElementById('projects-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-btn1').addEventListener('click', function () {
    document.getElementById('contact-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-btn2').addEventListener('click', function () {
    document.getElementById('contact-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Hire').addEventListener('click', function () {
    const targetSection = document.getElementById('contact-page');
    const offset = 90;
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
});

document.getElementById('download-resume').addEventListener('click', function () {
    document.getElementById('hiddenCvDownloadLink').click();
});

document.getElementById('send-btn').addEventListener('click', function () {
    const nameTitle = document.getElementById('name');
    const emailTitle = document.getElementById('email');
    const subjectTitle = document.getElementById('subject');
    const messageTitle = document.getElementById('message');

    const namefinal = nameTitle.value;
    const emailfinal = emailTitle.value;
    const subjectfinal = subjectTitle.value;
    const messagefinal = messageTitle.value;

    if (namefinal === '' || emailfinal === '' || subjectfinal === '' || messagefinal === '') {
        alert("Please fill all the fields");
    }
    else {
        console.log(namefinal, emailfinal, subjectfinal, messagefinal);
        emailjs.send("service_mji72wi", "template_itpqrmd", {
            from_name: namefinal,
            from_email: emailfinal,
            message: messagefinal,
            subject: subjectfinal,
        }).then((response) => {
            nameTitle.value = '';
            emailTitle.value = '';
            subjectTitle.value = '';
            messageTitle.value = '';
            alert('Your Email has been sent successfully!');
        }).catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        });
    }
});