const emotionPresetOptions = {
    'autoLabel': 'dev-only',
    'labelFormat': '[filename] '
}

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
    undefined,
    emotionPresetOptions
)

module.exports = {
    babel: {
        plugins: [
            ...emotionBabelPreset.plugins
            // your other plugins
        ]
    }
}