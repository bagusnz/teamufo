export const generateRandomId = () => {
    // Generate a random number between 1 and 1000 (adjust the range as needed)
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    // You can add a timestamp or other unique identifier to reduce collisions
    const timestamp = Date.now();
    // Combine the random number and timestamp to create a more unique ID
    const randomId = `${timestamp}-${randomNumber}`;
    return randomId;
}