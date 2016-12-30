export function generateKey() {
    const length = 32;
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = '';

    for (let i = length; i > 0; --i) {
      result += characters[Math.floor(Math.random() * characters.length)];
    };

    return result;
}
