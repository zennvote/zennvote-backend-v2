import GetQuizzesDomain from '@src/quiz/domain/GetQuizzes';

export const GetQuizzes = async () => {
    const quizzes = await GetQuizzesDomain();

    return quizzes;
}