import styled from 'styled-components';

export const StyledFAQSection = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    margin-left: 155px;
  }
  grid-template-areas:
    'faqTitle'
    'faqPhoto'
    'question1'
    'answer1'
    'question2'
    'answer2'
    'question3'
    'answer3'
    'question4'
    'answer4'
    'question5'
    'answer5'
    'moreQuestionsTitle'
    'moreQuestions';

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-areas:
      'faqTitle faqTitle'
      'question1 faqPhoto'
      'answer1 faqPhoto'
      'question2 faqPhoto'
      'answer2 faqPhoto'
      'question3 faqPhoto'
      'answer3 faqPhoto'
      'question4 question4'
      'answer4 answer4'
      'question5 question5'
      'answer5 answer5'
      'moreQuestionsTitle moreQuestionsTitle'
      'moreQuestions moreQuestions';
  }

  @media (min-width: 1400px) {
    grid-template-columns: auto 5% auto;
    grid-template-areas:
      'faqTitle faqTitle faqTitle'
      'question1 . faqPhoto'
      'answer1 . faqPhoto'
      'question2 . faqPhoto'
      'answer2 . faqPhoto'
      'question3 . faqPhoto'
      'answer3 . faqPhoto'
      'question4 question4 question4'
      'answer4 answer4 answer4'
      'question5 question5 question5'
      'answer5 answer5 answer5'
      'moreQuestionsTitle moreQuestionsTitle moreQuestionsTitle'
      'moreQuestions moreQuestions moreQuestions';
  }

  .faq-title {
    grid-area: faqTitle;
    font-size: 1.25rem;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 2rem;
    }
  }

  .faq-photo {
    grid-area: faqPhoto;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 400px;
    }
  }

  .question-one {
    grid-area: question1;
  }

  .answer-one {
    grid-area: answer1;
  }

  .question-two {
    grid-area: question2;
  }

  .answer-two {
    grid-area: answer2;
  }

  .question-three {
    grid-area: question3;
  }

  .answer-three {
    grid-area: answer3;
  }

  .question-four {
    grid-area: question4;
  }

  .answer-four {
    grid-area: answer4;
  }

  .question-five {
    grid-area: question5;
  }

  .answer-five {
    grid-area: answer5;
  }

  .more-questions-title {
    grid-area: moreQuestionsTitle;
  }

  .more-questions {
    grid-area: moreQuestions;
  }

  p {
    line-height: 1.5rem;
  }
`;
