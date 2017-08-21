import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  padding:1rem;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 50%;
    font-size: 1.2rem;
  }
`;

export default ({ match }) => 
  <div>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </nav>
    <Article>
    <h1>Hello {match.params.id}!</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, velit eget tempor pharetra, dui urna laoreet dolor, sed lacinia nisl ante id diam. Etiam faucibus nisl sed urna vestibulum dapibus. Nunc et tortor id eros convallis vestibulum. Nulla sem mi, convallis sit amet lobortis non, fringilla eu velit. Curabitur tellus odio, malesuada in euismod semper, efficitur ut diam. Vestibulum suscipit magna at tincidunt faucibus. Integer malesuada sit amet sapien a fermentum. Ut et cursus magna, nec faucibus ligula. Suspendisse eleifend hendrerit lacinia. Duis non ligula arcu. Etiam efficitur varius dui, et eleifend lectus posuere nec. Sed id volutpat ipsum. Aliquam est purus, sollicitudin id ex a, consectetur semper elit. Ut sagittis tellus ac ante eleifend hendrerit. Praesent pulvinar velit eu lorem sollicitudin, in aliquam libero cursus.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, velit eget tempor pharetra, dui urna laoreet dolor, sed lacinia nisl ante id diam. Etiam faucibus nisl sed urna vestibulum dapibus. Nunc et tortor id eros convallis vestibulum. Nulla sem mi, convallis sit amet lobortis non, fringilla eu velit. Curabitur tellus odio, malesuada in euismod semper, efficitur ut diam. Vestibulum suscipit magna at tincidunt faucibus. Integer malesuada sit amet sapien a fermentum. Ut et cursus magna, nec faucibus ligula. Suspendisse eleifend hendrerit lacinia. Duis non ligula arcu. Etiam efficitur varius dui, et eleifend lectus posuere nec. Sed id volutpat ipsum. Aliquam est purus, sollicitudin id ex a, consectetur semper elit. Ut sagittis tellus ac ante eleifend hendrerit. Praesent pulvinar velit eu lorem sollicitudin, in aliquam libero cursus.
    </p>
    </Article>
  </div>;
