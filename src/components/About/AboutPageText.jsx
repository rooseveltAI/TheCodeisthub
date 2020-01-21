import React from "react"
import uxprocess from "src/images/ux.png"
import Img from "src/images/roosevelt_at_the_beach.png"

export default function AboutPageText() {
  return (
    <div className="text--container">
      <img
        title="Roosevelt Innocent at the beach"
        src={Img}
        alt="Roosevelt at the beach"
      />
      <p>
        My career as a designer kickstarted back in the year 2017 When I started
        learning about the basics of graphic design. Still, in 2017, I switched
        my career to being a programmer, at that point I learned HTML, CSS, and
        javascript and I found it interesting.
      </p>
      <br />
      <p>
        On the process of learning programming, I became interested in CSS, I
        began to understand it better and I loved and used it so much - to date.
      </p>
      <br />
      <p>
        In early 2018 I began learning about User experience design (UX) and I
        loved Intuitive users interface so I learned to be a better visual
        designer also. I made some mistakes - lots of mistakes during this
        period of learning and applying what I thought was a good UX design.
      </p>
      <br />
      <p>
        Over the years I have come to realize that design trends and needs of
        people are two different things. I realized that people including
        businesses don’t know what’s a design trend or rather don’t care - what
        matters the most is the problem we are trying to solve, how we solve it,
        and how it helps them achieve their goal.
      </p>
      <br />

      <p>
        My thought process ever since then changed, this diagram below now
        define how I think through my UX design process:
      </p>
      <br />

      <img
        title="My UX Design Process"
        className="about--ux--image"
        src={uxprocess}
        alt="UX Process"
      />
      <br />
      <br />

      <p>
        Taking these steps further as an advocate for designing better
        experiences for people I apply my CSS skills in the development process.
        So to be detailed and apply my visual styles in a better way to help the
        user achieve their goals - I write ready to ship CSS code.
      </p>
      <br />

      {/* <p>
        Ever since the epidemic of my wrong knowledge of what I thought UX
        design was, I began writing a rant on UX design for people - it’s a
        30-page book and it’s free
      </p>
      <br /> */}

      <p>
        Aside from my long term life goal which is to make everyone anywhere
        around the world smarter by making education accessible, my goal
        currently is to help designers, businesses, and developers understand
        that UX design should be geared towards making better products for
        people. And the way I plan to achieve this is by working in an
        environment where collaboration across all teams is geared towards
        making a product intuitive and help customers achieve their goals.
      </p>
      <br />

      <p>
        I’m available to work with any businesses that think the same that
        designing a great user experience is not about trends but about people
        that are facing different challenges using their products - and they
        need their problem solved
      </p>
      <br />

      <p className="about--cta__p">
        Let’s talk:{" "}
        <a
          href="mailto:howdy.roosevelt@gmail.com"
          target="_top"
          rel="noopener noreferrer"
        >
          howdy.roosevelt@gmail.com
        </a>
      </p>
    </div>
  )
}
