import React from 'react';

import './pagestyles.css'

const AboutPage = () => {
    return(
        <section className="about-page main-content">
            <h2 className="title">Welcome to Trash and Treasure!</h2>
            <p className="about-content">
                "Someone's trash is another person's treasure". This is a sentiment that I want to demonstrate with this website.
                Post your personal belongings and let other people rate them! You can also rate other people's
                belongings. Everything is subjective, and not everyone will have the same opinion as you. You must make an
                account to rate or post.
            </p>
        </section>
    );

}

export default AboutPage;