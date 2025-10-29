export default defineEventHandler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    message: "Hello World",
  };
});
