import React from 'react'

const Article = (props) => {
  // const { location } = props

  return (
    <div className="mx-5 px-10">
      <div className="-mx-10">
        <div className="px-10 py-20 bg-ffffff">
          <h1 className="font-bold">Christopher Voigt</h1>

          <p className="font-light">
            Hi{' '}
            <span role="img" aria-label="wave emoji">
              👋{' '}
            </span>{' '}
            I'm Chris.
          </p>

          <p className="font-light">
            I'm an official member of Team Rocket, be aware!
          </p>

          <p className="font-light">
            Most of my time, I work as a front-end developer. Depending on my
            projects, I like to work with vanilla JS, React, Sass and Pug. Over
            the last years I've learned a lot about accessibility and semantic
            HTML as well.
          </p>

          <p className="font-light">
            I spend a lot of time thinking about design systems or how to make
            them more efficient and easier to work with. And sometimes I give
            talks or write posts about the things I recently think about.
          </p>

          <p className="font-light">
            At the moment I live in Dresden, Germany.
          </p>
        </div>
      </div>
    </div>
  )
}

Article.propTypes = {}

Article.defaultProps = {}

export default Article
