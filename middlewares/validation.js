export const validateInput = (validationChains) => {
  return async (response, request, next) => {
    for (const chain of validationChains) {
      await chain.run(response);
    }
    next();
  };
};
