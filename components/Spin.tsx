import React from 'react'
import styled from 'styled-components'

type Props = {}

const Loading = styled.div`
  .snippet {
    position: relative;
    background: transparent;
    padding: 2rem 5%;
    margin: 1.5rem 0;
    border-radius: 0.25rem;
  }

  .snippet:before {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 5px;
    font-size: .75rem;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    color: white;
    border-radius: 0.25rem 0 0.25rem 0;
  }

  .dot-spin {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: transparent;
    color: transparent;
    box-shadow: 0 -18px 0 0 #FFF, 12.72984px -12.72984px 0 0 #FFF, 18px 0 0 0 #FFF, 12.72984px 12.72984px 0 0 hsl(193, 38%, 86%), 0 18px 0 0 hsl(193, 38%, 86%), -12.72984px 12.72984px 0 0 hsl(193, 38%, 86%), -18px 0 0 0 hsl(193, 38%, 86%), -12.72984px -12.72984px 0 0 hsl(193, 38%, 86%);
    animation: dotSpin 1.5s infinite linear;
  }

  @keyframes dotSpin {
    0%, 100% {
      box-shadow: 0 -18px 0 0 #FFF, 12.72984px -12.72984px 0 0 #FFF, 18px 0 0 0 #FFF, 12.72984px 12.72984px 0 -5px hsl(193, 38%, 86%), 0 18px 0 -5px hsl(193, 38%, 86%), -12.72984px 12.72984px 0 -5px hsl(193, 38%, 86%), -18px 0 0 -5px hsl(193, 38%, 86%), -12.72984px -12.72984px 0 -5px hsl(193, 38%, 86%);
    }

    12.5% {
      box-shadow: 0 -18px 0 -5px hsl(193, 38%, 86%), 12.72984px -12.72984px 0 0 #FFF, 18px 0 0 0 #FFF, 12.72984px 12.72984px 0 0 #FFF, 0 18px 0 -5px hsl(193, 38%, 86%), -12.72984px 12.72984px 0 -5px hsl(193, 38%, 86%), -18px 0 0 -5px hsl(193, 38%, 86%), -12.72984px -12.72984px 0 -5px hsl(193, 38%, 86%);
    }

    25% {
      box-shadow: 0 -18px 0 -5px hsl(193, 38%, 86%), 12.72984px -12.72984px 0 -5px hsl(193, 38%, 86%), 18px 0 0 0 #FFF, 12.72984px 12.72984px 0 0 #FFF, 0 18px 0 0 #FFF, -12.72984px 12.72984px 0 -5px hsl(193, 38%, 86%), -18px 0 0 -5px hsl(193, 38%, 86%), -12.72984px -12.72984px 0 -5px hsl(193, 38%, 86%);
    }

    37.5% {
      box-shadow: 0 -18px 0 -5px hsl(193, 38%, 86%), 12.72984px -12.72984px 0 -5px hsl(193, 38%, 86%), 18px 0 0 -5px hsl(193, 38%, 86%), 12.72984px 12.72984px 0 0 #FFF, 0 18px 0 0 #FFF, -12.72984px 12.72984px 0 0 #FFF, -18px 0 0 -5px hsl(193, 38%, 86%), -12.72984px -12.72984px 0 -5px hsl(193, 38%, 86%);
    }

    50% {
      box-shadow: 0 -18px 0 -5px hsl(193, 38%, 86%), 12.72984px -12.72984px 0 -5px hsl(193, 38%, 86%), 18px 0 0 -5px hsl(193, 38%, 86%), 12.72984px 12.72984px 0 -5px hsl(193, 38%, 86%), 0 18px 0 0 #FFF, -12.72984px 12.72984px 0 0 #FFF, -18px 0 0 0 #FFF, -12.72984px -12.72984px 0 -5px hsl(193, 38%, 86%);
    }

    62.5% {
      box-shadow: 0 -18px 0 -5px hsl(193, 38%, 86%), 12.72984px -12.72984px 0 -5px hsl(193, 38%, 86%), 18px 0 0 -5px hsl(193, 38%, 86%), 12.72984px 12.72984px 0 -5px hsl(193, 38%, 86%), 0 18px 0 -5px hsl(193, 38%, 86%), -12.72984px 12.72984px 0 0 #FFF, -18px 0 0 0 #FFF, -12.72984px -12.72984px 0 0 #FFF;
    }

    75% {
      box-shadow: 0 -18px 0 0 #FFF, 12.72984px -12.72984px 0 -5px hsl(193, 38%, 86%), 18px 0 0 -5px hsl(193, 38%, 86%), 12.72984px 12.72984px 0 -5px hsl(193, 38%, 86%), 0 18px 0 -5px hsl(193, 38%, 86%), -12.72984px 12.72984px 0 -5px hsl(193, 38%, 86%), -18px 0 0 0 #FFF, -12.72984px -12.72984px 0 0 #FFF;
    }
  }
`;


function Spin({}: Props) {


  return (
    <Loading>
      <div className="snippet hide">
		    <div className="stage">
		      <div className="dot-spin"></div>
		    </div>
      </div>
    </Loading>
  )
}

export default Spin