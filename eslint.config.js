// eslint.config.js
const gtsModule = await import('gts');
const gtsConfig = gtsModule.default; // Assuming default export is the config array

let customConfig = [];
try {
    const ignoresModule = await import('./eslint.ignores.js');
    const ignores = ignoresModule.default; // Assuming default export is the ignores array
    customConfig = [{ignores: ignores}];
} catch (e) {
    // If the ignores file doesn't exist, we just don't add it.
    // This is the same behavior as the original script.
}

export default [...customConfig, ...gtsConfig];
