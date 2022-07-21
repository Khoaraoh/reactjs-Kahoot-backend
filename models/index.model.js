import { quizModel } from "./schema/quiz.schema.js";
import { userModel } from "./schema/user.schema.js";

export default {
    getGame: async (id) => {
        const result = await quizModel.findById(id);
        return {
            message: "Get game successfully",
            data: result,
        };
    },

    getAllQuizzes: async () => {
        const result = await quizModel.find({});
        return {
            message: "Get all quizzes successfully",
            data: result,
        };
    },

    getUserQuiz: async (id) => {
        const result = await quizModel.find({ userId: id });
        return {
            message: "Get user successfully",
            data: result,
        };
    },

    addQuiz: async (data) => {
        const result = await quizModel.create(data);
        return {
            message: "Add quiz successfully",
            data: result,
        };
    },

    removeQuiz: async (id) => {
        const result = await quizModel.remove({ _id: id });
        return {
            message: "Remove quiz successfully",
            data: result,
        };
    },

    updateQuiz: async (id, data) => {
        const result = await quizModel.findByIdAndUpdate(id, data);
        return {
            message: "Update successfully",
            data: result,
        };
    },

    // User authentication
    getUserByEmail: async (email) => {
      const result = await userModel.findOne({email: email});
      return result;
    },
    addUser: async (data) => {
      const result = await userModel.create(data);
      return result;
    }
};
