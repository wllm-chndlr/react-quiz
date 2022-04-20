import styled from 'styled-components'

export const Wrapper = styled.div`
    min-width: 500px;
    max-width: 1100px;
    background: #f2f2f2;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    margin-top: 2rem;

    p {
        font-size: 1rem;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    opacity: 0.9;
    transition: all 0.3s ease;
    :hover {
        opacity: 1;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        // width: 100%;
        min-width: 5rem;
        height: 40px;
        margin: 5px 0;
        color: #444;
        background: #fff;

        border: 2px solid #444;
        border-radius: 10px;

        border-color: ${({ correct, userClicked}) =>
        correct ?
            '#9ee38f' :
            !correct && userClicked ?
                '#e38f8f' :
                '#fff'};

        span {
            margin: 1rem 2rem;
        }
    }
`